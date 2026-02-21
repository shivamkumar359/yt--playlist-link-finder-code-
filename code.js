(async () => {
  let lastCount = 0;
  while (true) {
    window.scrollTo(0, document.body.scrollHeight);
    await new Promise(r => setTimeout(r, 2000));
    const count = document.querySelectorAll('a#video-title').length;
    console.log('Loaded:', count);
    if (count === lastCount) break;
    lastCount = count;
  }
  alert('All visible videos loaded. Run export now.');
})();
