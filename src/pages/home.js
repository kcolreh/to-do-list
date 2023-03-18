import createSideSection from '../page-elements/side-section';

export default function createHome() {
    const content = document.getElementById('content');
    const sideSection = createSideSection();

    content.appendChild(sideSection);
}
