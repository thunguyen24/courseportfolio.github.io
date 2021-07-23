const elementInViewport = (element) => {
	const rect = element.getBoundingClientRect();

	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElemenet.clientWidth)
	);
}

const addMovingClass = () => {
	const movingLeftList = [
		"content-title-text-shard-1",
		"content-title-text-shard-2",
		"content-title-text-shard-3",
		"my-avt-img",
		"my-img-text",
		"my-title-line-1",
		"my-title-line-2"
	]

	const movingRightList = [
		"content-right-title",
		"course-info-title-line",
		"course-lorem-text"


	]

	for (const movingId of movingLeftList) {
		let isShown = false;
		const element = document.getElementById(movingId);

		for(const elementClass of element.classList) {
			if (elementClass.value == "moving-left-text-animation") {
				isShown = true;
				break;
			}
		}

		if (!isShown && elementInViewport(element)) {

			element.classList.add("moving-left-text-animation");
		}
	}

	for (const movingId of movingRightList) {
		let isShown = false;
		const element = document.getElementById(movingId);

		

		for(const elementClass of element.classList) {
			if (elementClass.value == "moving-right-text-animation") {
				isShown = true;
				break;
			}
		}

		if (!isShown && elementInViewport(element)) {
			console.log("uhmmm")
			element.classList.add("moving-right-text-animation");
		}
	}
}

if (window.addEventListener) {
	addEventListener("DOMContentLoaded", addMovingClass, false);
	addEventListener("load", addMovingClass, false);
	addEventListener("scroll", addMovingClass, false);
	addEventListener("resize", addMovingClass, false);
}