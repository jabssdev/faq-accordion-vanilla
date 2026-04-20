document.addEventListener("DOMContentLoaded", () => {
	const accordion = document.querySelector(".accordion");

	if (!accordion) return;

	/**
	 * Toggles the accordion state for a specific item.
	 * @param {HTMLButtonElement} button - The clicked accordion question button.
	 * @param {boolean} forceClose - If true, ensures the item is closed.
	 */
	const toggleItem = (button, forceClose = false) => {
		const isExpanded = button.getAttribute("aria-expanded") === "true";
		const nextState = forceClose ? false : !isExpanded;
		const icon = button.querySelector(".icon");

		button.setAttribute("aria-expanded", nextState);

		if (icon) {
			icon.src = nextState ? "./assets/images/icon-minus.svg" : "./assets/images/icon-plus.svg";
		}
	};

	accordion.addEventListener("click", (event) => {
		const button = event.target.closest(".accordion-question");

		if (!button) return;

		const otherButtons = accordion.querySelectorAll('.accordion-question[aria-expanded="true"]');
		otherButtons.forEach((otherButton) => {
			if (otherButton !== button) {
				toggleItem(otherButton, true);
			}
		});

		toggleItem(button);
	});
});
