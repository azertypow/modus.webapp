import {ApiFetchProjects} from "../composable/adminApi/apiFetch";
import type {IApiProjects} from "../composable/adminApi/apiDefinitions";
import { writeFile } from "fs/promises"; // Module fs pour écrire dans un fichier (Node.js)


async function main() {
    const pageData: IApiProjects = await ApiFetchProjects('projects')

    const arrayOfRoutes: string[] =  Object.values(pageData.children).map(project => `/project/${project.slug}`)

    console.log( arrayOfRoutes )

    const fileContent = `// Généré automatiquement\n\nexport const generatedRoutes: string[] = ${JSON.stringify(arrayOfRoutes, null, 2)};`;

    try {
        // Écrire dans le fichier TypeScript
        await writeFile("./generatedRoutes.ts", fileContent);
        console.log("Routes enregistrées dans 'generatedRoutes.ts'");
    } catch (error) {
        console.error("Erreur lors de l'enregistrement du fichier :", error);
    }
}
main()
