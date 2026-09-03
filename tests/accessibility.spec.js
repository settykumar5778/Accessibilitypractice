const { test } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;
const fs = require ('fs');
test('Scan Multiple Pages', async ({page}) => {
    const pages = ['https://apple.com',
       // 'https://www.apple.com/in/tv-home'
    ];

    let criticalCount = 0;
    let seriousCount = 0;
    let moderateCount = 0;
    let minorCount = 0;
    
    let allResults = [];
    for (const url of pages) {
        console.log(`Scanning: ${url}`);
        await page.goto(url);
        const filename = 
        url.replace(/https?:\/\//, "")
        .replace(/[\/:\.?&=]/g, "_");
        
        await page.screenshot({
            path: 'screenshots/${fileName}.png',
            fullPage: true
        });
        const results = 
        await new AxeBuilder({page}).analyze();
        results.violations.forEach(v => {
            if (v.impact === 'critical')
                criticalCount++;

            if (v.impact === 'serious')
                seriousCount++;
            if (v.impact === 'minor')
                minorCount++;
        });
        const criticalOrSeriousIssues = 
        results.violations.filter(
            violation =>
                violation.impact === 'critical'  ||
                violation.impact === 'Serious'
               );
        if (criticalOrSeriousIssues.length > 0) {
            throw new Error(`Critical/Serious accessibility violations found: ${url}: ${criticalOrSeriousIssues.length}`
            );
        }

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
       ${result.violationCount}
    </p> 
     `;

     if (result.violationCount === 0) {
        htmlContent += `
        <p>No Accessibility Violations Found</p>
        `;
     }
     else {
        result.violations.forEach(v => {
            htmlContent += `
            <h3>${v.id}</h3>
            <p>
            <strong>Impact: </strong>
            ${v.impact}
            </p>
            <p>
            <strong>Wcag:</strong>
            ${v.Wcag}
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
fs.writeFileSync(
    'a11y-report.html',
    htmlContent
);
let accessibilityScore =
 100 - (
    criticalCount * 10 +
    seriousCount * 5 +
    moderateCount * 2 +
    minorCount * 1
 );
 
 accessibilityScore = 
  Math.max(accessibilityScore, 0);
console.log("Accessibility Scan Started");
console.log("Report Created Successfully");
});