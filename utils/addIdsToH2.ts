export function addIdsToH2(html: string): string {
    // Créer un conteneur DOM pour parser le texte HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Sélectionner tous les éléments <h2>
    const headers = doc.querySelectorAll<HTMLHeadingElement>('h2');

    headers.forEach((header, index) => {
        // Générer un ID à partir du texte du header
        const headerText = header.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '') || `header-${index}`;

        // Ajouter l'ID à l'élément <h2>
        header.id = headerText;

        // Créer une ancre avec un lien vers cet ID
        const anchor = doc.createElement('a');
        anchor.href = `#${headerText}`;
        anchor.textContent = '#'; // Optionnel : symbole ou texte pour le lien

        // Ajouter l'ancre au début du <h2>
        header.prepend(anchor);
    });

    // Extraire le HTML modifié
    return doc.body.innerHTML;
}
