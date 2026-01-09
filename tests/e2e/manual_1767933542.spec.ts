import { test, expect } from '@playwright/test';
import { readFileSync } from 'fs';
import { join } from 'path';

test.describe('Add a comment to the README.md file', () => {
  
  // @smoke: true
  // @confidence: 0.95
  // @covers: README.md
  // @keywords: readme, documentation, comment, html-comment
  // @reason: Verifies that documentation has been properly updated with comments - critical for project maintainability
  test('should verify README.md contains an HTML comment', async () => {
    // Read the README.md file from the workspace
    const readmePath = join(process.cwd(), 'README.md');
    const readmeContent = readFileSync(readmePath, 'utf-8');
    
    // Verify that the README contains an HTML comment
    expect(readmeContent).toContain('<!--');
    expect(readmeContent).toContain('-->');
    
    // Verify the specific comment about the modern React development template
    expect(readmeContent).toContain('<!-- This is a modern React development template that leverages Vite for fast builds and HMR -->');
  });

  // @smoke: false
  // @confidence: 0.85
  // @covers: README.md
  // @keywords: readme, documentation, structure, content
  test('should verify README.md maintains its original structure', async () => {
    // Read the README.md file
    const readmePath = join(process.cwd(), 'README.md');
    const readmeContent = readFileSync(readmePath, 'utf-8');
    
    // Verify key sections are still present
    expect(readmeContent).toContain('# React + TypeScript + Vite');
    expect(readmeContent).toContain('This template provides a minimal setup');
    expect(readmeContent).toContain('## React Compiler');
    expect(readmeContent).toContain('## Expanding the ESLint configuration');
  });

  // @smoke: false
  // @confidence: 0.8
  // @covers: README.md
  // @keywords: readme, comment, placement, formatting
  test('should verify comment is placed in the correct location', async () => {
    // Read the README.md file
    const readmePath = join(process.cwd(), 'README.md');
    const readmeContent = readFileSync(readmePath, 'utf-8');
    
    // Split into lines for position verification
    const lines = readmeContent.split('\n');
    
    // Find the title line
    const titleIndex = lines.findIndex(line => line.includes('# React + TypeScript + Vite'));
    expect(titleIndex).toBeGreaterThanOrEqual(0);
    
    // Find the comment line
    const commentIndex = lines.findIndex(line => line.includes('<!-- This is a modern React development template'));
    expect(commentIndex).toBeGreaterThanOrEqual(0);
    
    // Verify comment is placed after the title and before the description
    expect(commentIndex).toBeGreaterThan(titleIndex);
    
    // Find the description line
    const descriptionIndex = lines.findIndex(line => line.includes('This template provides a minimal setup'));
    expect(descriptionIndex).toBeGreaterThan(commentIndex);
  });

  // @smoke: false
  // @confidence: 0.75
  // @covers: README.md
  // @keywords: readme, markdown, validity, syntax
  test('should verify README.md is valid markdown with proper formatting', async () => {
    // Read the README.md file
    const readmePath = join(process.cwd(), 'README.md');
    const readmeContent = readFileSync(readmePath, 'utf-8');
    
    // Verify markdown headers are properly formatted
    const headerRegex = /^#{1,6}\s+.+$/gm;
    const headers = readmeContent.match(headerRegex);
    expect(headers).toBeTruthy();
    expect(headers!.length).toBeGreaterThan(0);
    
    // Verify code blocks are properly formatted
    const codeBlockRegex = /```[\s\S]*?```/g;
    const codeBlocks = readmeContent.match(codeBlockRegex);
    expect(codeBlocks).toBeTruthy();
    expect(codeBlocks!.length).toBeGreaterThan(0);
    
    // Verify links are properly formatted
    const linkRegex = /\[.+?\]\(.+?\)/g;
    const links = readmeContent.match(linkRegex);
    expect(links).toBeTruthy();
    expect(links!.length).toBeGreaterThan(0);
  });

  // @smoke: false
  // @confidence: 0.7
  // @covers: README.md
  // @keywords: readme, comment, content, descriptive
  test('should verify comment provides meaningful context', async () => {
    // Read the README.md file
    const readmePath = join(process.cwd(), 'README.md');
    const readmeContent = readFileSync(readmePath, 'utf-8');
    
    // Extract the comment
    const commentMatch = readmeContent.match(/<!--\s*(.+?)\s*-->/);
    expect(commentMatch).toBeTruthy();
    
    const commentText = commentMatch![1];
    
    // Verify comment is not empty
    expect(commentText.length).toBeGreaterThan(0);
    
    // Verify comment contains meaningful keywords
    const meaningfulKeywords = ['modern', 'React', 'Vite', 'development', 'template'];
    const containsKeywords = meaningfulKeywords.some(keyword => 
      commentText.toLowerCase().includes(keyword.toLowerCase())
    );
    expect(containsKeywords).toBeTruthy();
  });
});
