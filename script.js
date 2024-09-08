document.addEventListener('DOMContentLoaded', function () {
    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');
    var button3 = document.getElementById('button3');
    var content1 = document.getElementById('content1');
    var content2 = document.getElementById('content2');
    var content3 = document.getElementById('content3');
    button1.addEventListener('click', function () { return toggleContent(content1); });
    button2.addEventListener('click', function () { return toggleContent(content2); });
    button3.addEventListener('click', function () { return toggleContent(content3); });
    function toggleContent(content) {
        // Hide other contents
        content1.classList.add('hidden');
        content2.classList.add('hidden');
        content3.classList.add('hidden');
        // Show selected content
        content.classList.toggle('hidden');
    }
});
