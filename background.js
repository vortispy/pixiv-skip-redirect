const filter = {
	urls: [
		"*://www.pixiv.net/jump.php?*"
	]
};

const opt_extraInfoSpec = [
	"blocking"
];

function callback(detail) {
	const params = (new URL(detail.url)).searchParams;
	const redirectUrl = params.get('url') ?? decodeURIComponent(detail.url.split("jump.php?")[1]);
	return {redirectUrl};
}

chrome.webRequest.onBeforeRequest.addListener(
	callback,
	filter,
	opt_extraInfoSpec
);
