function compileCode() {
    const htmlCode = document.getElementById('htmlCode').value;
    const cssCode = document.getElementById('cssCode').value;
    const jsCode = document.getElementById('jsCode').value;
  
    const previewFrame = document.getElementById('preview');
  
    previewFrame.srcdoc = '';
  

    const htmlContent = `
      <html>
      <head>
        <style>${cssCode}</style>
      </head>
      <body>${htmlCode}</body>
      <script>${jsCode}</script>
      </html>
    `;
    previewFrame.srcdoc = htmlContent;
  }
  