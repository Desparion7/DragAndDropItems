const presents = document.querySelectorAll('.present');
const boxes = document.querySelectorAll('.box');
const presentsBox = document.querySelector('.presents-box');
const chosenBox = document.querySelector('.chosen-box');
const sendBtn = document.querySelector('.send-btn');

presents.forEach((present) => {
	present.addEventListener('dragstart', () => {
		present.classList.add('is-dragged');
	});
	present.addEventListener('dragend', () => {
		present.classList.remove('is-dragged');
	});
});

boxes.forEach((box) => {
	box.addEventListener('dragover', (e) => {
		e.preventDefault();
		const isDragged = document.querySelector('.is-dragged');
		box.appendChild(isDragged);

		handelPresents();
	});
});

const handelPresents = () => {
	if (chosenBox.childElementCount > 2) {
		const leftPresents = presentsBox.querySelectorAll('.present');
		leftPresents.forEach((present) => {
			present.classList.add('present-disabled');
			present.setAttribute('draggable', 'false');
			sendBtn.disabled = false;
		});
	} else {
		const leftPresents = presentsBox.querySelectorAll('.present');
		leftPresents.forEach((present) => {
			present.classList.remove('present-disabled');
			present.setAttribute('draggable', 'true');
			sendBtn.disabled = true;
		});
	}
};

// if (chosenBox.children.length === 3) {
// 	sendBtn.removeAttribute('disabled');
// }
