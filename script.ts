document.addEventListener('DOMContentLoaded', () => {
  const button1 = document.getElementById('button1') as HTMLButtonElement;
  const button2 = document.getElementById('button2') as HTMLButtonElement;
  const button3 = document.getElementById('button3') as HTMLButtonElement;

  const content1 = document.getElementById('content1') as HTMLDivElement;
  const content2 = document.getElementById('content2') as HTMLDivElement;
  const content3 = document.getElementById('content3') as HTMLDivElement;

  button1.addEventListener('click', () => toggleContent(content1));
  button2.addEventListener('click', () => toggleContent(content2));
  button3.addEventListener('click', () => toggleContent(content3));

  function toggleContent(content: HTMLElement) {
    // Hide other contents
    content1.classList.add('hidden');
    content2.classList.add('hidden');
    content3.classList.add('hidden');

    // Show selected content
    content.classList.toggle('hidden');
  }
});
