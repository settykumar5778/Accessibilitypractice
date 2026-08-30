const { test } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;
const fs = require ('fs');
test('Scan Multiple Pages', async ({page}) => {
    const pages = ['https://apple.com',
       // 'https://www.apple.com/in/tv-home'
    ];
    
    let allResults = [];
    for (const url of pages) {
        console.log(`Scanning: ${url}`);
        await page.goto(url);
        const results = 
        await new AxeBuilder({page}).analyze();

        allResults.push({ 
            page: url, 
            violationsCount: results.violations.length,
            violations: results.violations
        });
    }
   // await page.goto('https://www.microsoft.com/');

// const results = await new AxeBuilder({page}).analyze();

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

fs.writeFileSync(
    'a11y-report.html',
    htmlContent
);
console.log("Accessibility Scan Started");
console.log("Report Created Successfully");
});