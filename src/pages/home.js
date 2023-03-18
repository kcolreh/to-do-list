import createSideSection from '../page-elements/side-section';
import createMainSection from '../page-elements/main-section';

export default function createHome() {
    const content = document.getElementById('content');
    const sideSection = createSideSection();
    const mainSection = createMainSection();

    content.appendChild(sideSection);
    content.appendChild(mainSection);
}
