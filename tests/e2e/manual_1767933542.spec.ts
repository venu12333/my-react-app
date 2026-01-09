import { test, expect } from '@playwright/test';

test.describe('Add a comment to the README.md file', () => {
  
  // @smoke: true
  // @confidence: 0.95
  // @covers: README.md
  // @keywords: readme, comment, documentation
  // @reason: Core documentation verification - ensures README file has been properly updated with comment
  test('should verify README.md file exists and contains the added comment', async ({ page }) => {
    // The comment should be present in the README.md file
    // This test verifies that the file has been modified correctly
    const response = await page.request.get('/README.md');
    expect(response.ok()).toBeTruthy();
    
    const content = await response.text();
    expect(content).toContain('<!-- This is a comment added to the README.md file as requested in MANUAL-1767933542 -->');
    
    // Verify the comment is properly placed in the document
    expect(content).toContain('# React + TypeScript + Vite');
  });

  // @smoke: false
  // @confidence: 0.8
  // @covers: README.md
  // @keywords: readme, structure, documentation
  test('should verify README.md maintains proper structure after comment addition', async ({ page }) => {
    // Fetch the README.md file
    const response = await page.request.get('/README.md');
    expect(response.ok()).toBeTruthy();
    
    const content = await response.text();
    
    // Verify the comment is in the correct location (near the top)
    expect(content).toContain('# React + TypeScript + Vite');
    
    // Verify the comment doesn't break existing content
    expect(content).toContain('This template provides a minimal setup');
    expect(content).toContain('Currently, two official plugins are available');
    
    // Verify the comment is properly formatted as an HTML comment
    const commentRegex = /<!--[\s\S]*?-->/;
    expect(content).toMatch(commentRegex);
  });

  // @smoke: false
  // @confidence: 0.7
  // @covers: README.md
  // @keywords: readme, validation, format
  test('should verify README.md comment follows proper HTML comment syntax', async ({ page }) => {
    const response = await page.request.get('/README.md');
    expect(response.ok()).toBeTruthy();
    
    const content = await response.text();
    
    // Verify proper HTML comment syntax (<!-- comment -->)
    const htmlCommentPattern = /<!--\s*This is a comment added to the README\.md file as requested in MANUAL-1767933542\s*-->/;
    expect(content).toMatch(htmlCommentPattern);
    
    // Ensure the comment is properly closed
    const commentLines = content.split('\n').filter(line => line.includes('MANUAL-1767933542'));
    expect(commentLines.length).toBeGreaterThan(0);
    
    // Verify the comment line has both opening and closing tags
    const commentLine = commentLines[0];
    expect(commentLine).toContain('<!--');
    expect(commentLine).toContain('-->');
  });

  // @smoke: false
  // @confidence: 0.85
  // @covers: README.md
  // @keywords: readme, content, integrity
  test('should verify README.md retains all original content after modification', async ({ page }) => {
    const response = await page.request.get('/README.md');
    expect(response.ok()).toBeTruthy();
    
    const content = await response.text();
    
    // Verify key sections are still present
    const expectedSections = [
      '# React + TypeScript + Vite',
      '## React Compiler',
      '## Expanding the ESLint configuration',
      '@vitejs/plugin-react',
      '@vitejs/plugin-react-swc',
      'eslint-plugin-react-x',
      'eslint-plugin-react-dom'
    ];
    
    for (const section of expectedSections) {
      expect(content).toContain(section);
    }
  });

  // @smoke: false
  // @confidence: 0.75
  // @covers: README.md
  // @keywords: readme, accessibility, visibility
  test('should verify the comment is not visible when README is rendered as HTML', async ({ page }) => {
    await page.goto('/');
    
    // HTML comments should not be visible in the rendered page
    const bodyText = await page.textContent('body');
    
    // The comment text should not appear in the visible content
    expect(bodyText).not.toContain('This is a comment added to the README.md file as requested in MANUAL-1767933542');
    
    // But the page should still load and display other content
    expect(bodyText).toBeTruthy();
  });

  // @smoke: false
  // @confidence: 0.9
  // @covers: README.md
  // @keywords: readme, feature, verification
  test('should verify the specific feature reference MANUAL-1767933542 is present in comment', async ({ page }) => {
    const response = await page.request.get('/README.md');
    expect(response.ok()).toBeTruthy();
    
    const content = await response.text();
    
    // Verify the feature/ticket reference is included
    expect(content).toContain('MANUAL-1767933542');
    
    // Verify it's within a comment
    const lines = content.split('\n');
    const commentLine = lines.find(line => line.includes('MANUAL-1767933542'));
    expect(commentLine).toBeDefined();
    expect(commentLine).toMatch(/<!--.*MANUAL-1767933542.*-->/);
  });

  // @smoke: false
  // @confidence: 0.65
  // @covers: README.md
  // @keywords: readme, position, placement
  test('should verify comment is placed at the appropriate location in README', async ({ page }) => {
    const response = await page.request.get('/README.md');
    expect(response.ok()).toBeTruthy();
    
    const content = await response.text();
    const lines = content.split('\n');
    
    // Find the comment line
    const commentLineIndex = lines.findIndex(line => 
      line.includes('This is a comment added to the README.md file')
    );
    
    expect(commentLineIndex).toBeGreaterThan(-1);
    
    // Verify it's near the top of the file (within first 10 lines)
    expect(commentLineIndex).toBeLessThan(10);
    
    // Verify it comes after the main title
    const titleIndex = lines.findIndex(line => line.includes('# React + TypeScript + Vite'));
    expect(commentLineIndex).toBeGreaterThan(titleIndex);
  });
});
