const { test } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;
const fs = require ('fs');
function getWcagInfo(tags) {

    const wcagTag = 
          tags.find(tag => /^wcag\d+$/.test(tag));

    let successCriteria = 'N/A';

    if (wcagTag) {
        const numbers =
               wcagTag.replace('wcag', '');
        if (numbers.length >=3) {
            successCriteria =
                   `${numbers[0]}.${numbers[1]}.${numbers.substring(2)}`;
        }
    }
    let level = 'Unknown';

    if (tags.includes('wcag2aaa')) {
        level = 'AAA';
    }
    else if (tags.includes('wcag2aa')) {
        level = 'AA';
    }
    else if (tags.includes('Wcag2a')) {
        level = 'A';
    }
     return {
        successCriteria,
        level
     };
}

test('Scan Multiple Pages', async ({page}) => {
    const pages = ['https://apple.com',
        'https://www.apple.com/in/tv-home'
    ];

    let criticalCount = 0;
    let seriousCount = 0;
    let moderateCount = 0;
    let minorCount = 0;
    
    let allResults = [];
    let totalCriticalOrSeriousIssues = 0;
    for (const url of pages) {
        console.log(`Scanning: ${url}`);
        await page.goto(url);
        const filename = 
        url.replace(/https?:\/\//, "")
        .replace(/[\/:\.?&=]/g, "_");
        
        await page.screenshot({
            path: `screenshots/${filename}.png`,
            fullPage: true
        });
        const results = 
        await new AxeBuilder({page}).analyze();
        results.violations.forEach(v => {
            const wcagInfo = getWcagInfo(v.tags);
            if (v.impact === 'critical')
                criticalCount++
            if (v.impact === 'serious')
                seriousCount++;
            if (v.impact === 'moderate')
                moderateCount++;
            if (v.impact === 'minor')
                minorCount++;
        });
        
        const criticalOrSeriousIssues =
        results.violations.filter(
            violation =>
                violation.impact === 'critical' ||
                violation.impact === 'serious'
        );
        totalCriticalOrSeriousIssues += criticalOrSeriousIssues.length;

        allResults.push({ 
            page: url, 
            violationsCount: results.violations.length,
            violations: results.violations
        });
    }
fs.writeFileSync(
    'multi-page-report.json',
    JSON.stringify(allResults, null, 2)
);
let htmlContent = `
<html> 
<head> 
<title>A11y Report</title>
</head>
<body>
<h1>Accessibility Report<h1>
`;

allResults.forEach(result => {

    htmlContent += `
    <h2>Page: ${result.page}</h2>
    <p>
       <strong>Total Violations: </strong>
       ${result.violationsCount}
    </p> 
     `;

     if (result.violationsCount === 0) {
        htmlContent += `
        <p>No Accessibility Violations Found</p>
        `;
     }
     else {
        result.violations.forEach(v => {
            const wcagInfo = getWcagInfo(v.tags);
            htmlContent += `
            <h3>${v.id}</h3>
            <p>
            <strong>Impact: </strong>
            ${v.impact}
            </p>
            <p>
            <strong>Success Criteria:</strong>
            ${wcagInfo.successCriteria}
            </p>
            <p>
            <strong>WCAG Level:</strong>
            ${wcagInfo.level}
            </p>
            <p>
            <strong>Description:</strong>
            ${v.description}
            </p>
            <p>
            <strong>Help:</strong>
            ${v.help}
            </p>
            <hr>
            `;
        } );
     }
});
htmlContent += `
</body>
</html>
`;

let accessibilityScore =
 100 - (
    criticalCount * 10 +
    seriousCount * 5 +
    moderateCount * 2 +
    minorCount * 1
     );
 
     accessibilityScore = 
  Math.max(accessibilityScore, 0);

const summarySection = `
  <h2>Accessibility Summary</h2>
    <p><strong>Critical:</strong> ${criticalCount}</p>
    <p><strong>Serious:</strong> ${seriousCount}</p>
    <p><strong>Moderate:</strong> ${moderateCount}</p>
    <p><strong>Minor:</strong> ${minorCount}</p>

   <p>
     <strong>Accessibility Score:</strong>
      ${accessibilityScore}%
     </p>

   <p>
     <strong>Status:</strong>
     ${
    criticalCount > 0 ||
    seriousCount > 0
    ? 'Fail'
    : 'PASS'
   }
   </p>
   <hr>
`;
  htmlContent = summarySection + htmlContent;
  fs.writeFileSync('a11y-report.html', htmlContent);
  if (totalCriticalOrSeriousIssues > 0) {
    throw new Error(
        `Accessibility Quality Gate Failed. Critical/Serious Issues Found: ${totalCriticalOrSeriousIssues}`
    );
  }

console.log("Accessibility Scan Started");
console.log("Report Created Successfully");
});