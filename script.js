
const queueContainer = document.getElementById('queueContainer');
const MAX_QUEUE_SIZE = 5; // Adjust the maximum queue size as needed

function enqueue() {
    const numberInput = document.getElementById('numberInput');
    const number = numberInput.value.trim();

    if (number !== '') {
        const boxes = queueContainer.getElementsByClassName('box');
        
        // Check if the queue is full
        if (boxes.length < MAX_QUEUE_SIZE) {
            const box = document.createElement('div');
            box.className = 'box enqueued';
            box.textContent = number;
            queueContainer.appendChild(box);
        } else {
            alert('Queue is full. Cannot enqueue more elements.');
        }
    }

    numberInput.value = '';
}

function dequeue() {
    const boxes = queueContainer.getElementsByClassName('box');
    
    // Check if the queue is empty
    if (boxes.length > 0) {
        const box = boxes[0];
        box.classList.remove('enqueued');
        box.classList.add('dequeued');
        setTimeout(() => {
            queueContainer.removeChild(box);
        }, 300);
    } else {
        alert('Queue is empty. Cannot dequeue more elements.');
    }
}

