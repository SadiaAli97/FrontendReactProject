import installedSdks from '../static/installedSdks.json';
import uninstalledSdks from '../static/uninstalledSdks.json';

export function getInstalledSdks() {
	console.log('installedSdks ', installedSdks);
	return installedSdks.data?.installedSdks;
}

export function getUninstalledSdks() {
	console.log('uninstalledSdks ', uninstalledSdks);
	return uninstalledSdks.data?.uninstalledSdks;
}