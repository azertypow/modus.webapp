<template>
  <form class="app-form-declic-mobility">

    <div class="app-form__section app-form__section--valid">
      <label>
        Dans quelle commune votre domicile principal est-il situé&nbsp;?
      </label>
      <select name="commune"
              v-model="option_1"
      >
        <option value="carouge">Carouge</option>
        <option value="geneve">Genève</option>
        <option value="autre">Autre commune</option>
      </select>
    </div>



    <template v-if="option_1 === null"></template>
    <template v-else-if="option_1 === 'autre'">
      <p>Vous résidez hors du territoire couvert par l’initiative « Déclic mobilité » qui se tiendra au printemps 2025...</p>
    </template>
    <template v-else>

      <div class="app-form__section app-form__section--error">
        <label>Depuis combien de temps résidez-vous dans cette commune&nbsp;?</label>
        <select name="duree_residence">
          <option value="moins2">Moins de 2 ans</option>
          <option value="2-5">Entre 2 et 5 ans</option>
          <option value="5-10">Entre 5 et 10 ans</option>
          <option value="plus10">Plus de 10 ans</option>
        </select>
      </div>

      <div class="app-form__section">
        <label>Combien de personnes composent votre ménage&nbsp;?</label>
        <div class="app-form__section__subsections app-form__section__subsections--number">

        </div>
        <input type="number" name="adultes" placeholder="Nombre d'adultes">
        <input type="number" name="enfants_16_17" placeholder="Nombre d'enfants de 16 ou 17 ans">
        <input type="number" name="enfants_moins_16" placeholder="Nombre d'enfants de moins de 16 ans">
      </div>


      <div class="app-form__section">
        <label>De combien de véhicules disposez-vous au sein de votre ménage&nbsp;?</label>
        <input type="number" name="motos" placeholder="Nombre de motos/scooters">
        <input type="number" name="voitures" placeholder="Nombre de voitures">
      </div>

      <div class="app-form__section">
        <label>A quelle fréquence vous déplacez-vous en moto/scooter&nbsp;?</label>
        <select name="frequence_moto">
          <option value="quotidien">Tous les jours ou presque</option>
          <option value="hebdo">Une à plusieurs fois par semaine</option>
          <option value="moins">Moins d’une fois par semaine</option>
        </select>
      </div>

      <div class="app-form__section">
        <label>A quelle fréquence vous déplacez-vous en voiture&nbsp;?</label>
        <select name="frequence_voiture">
          <option value="quotidien">Tous les jours ou presque</option>
          <option value="hebdo">Une à plusieurs fois par semaine</option>
          <option value="moins">Moins d’une fois par semaine</option>
        </select>
      </div>

      <div class="app-form__section">
        <label>Quelle est votre année de naissance&nbsp;?</label>
        <input type="number" name="annee_naissance" placeholder="P.ex. 1983">
      </div>


      <div class="app-form__section">
        <label>Quel est votre genre&nbsp;?</label>
        <select name="genre">
          <option value="femme">Une femme</option>
          <option value="homme">Un homme</option>
          <option value="autre">Autre / Je ne souhaite pas répondre</option>
        </select>
      </div>

      <div class="app-form__section">
        <label>Quelle situation professionnelle vous correspond actuellement&nbsp;?</label>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="emploi" value="temps_plein">
          <label>Actif/active à temps plein</label>
        </div>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="emploi" value="temps_partiel">
          <label>Actif/active à temps partiel</label>
        </div>
        <div class="app-form__section__subsections">
          <input type="checkbox" name="emploi" value="chomage">
          <label>Sans emploi / au chômage</label>
        </div>
        <div class="app-form__section__subsections">
          <input type="checkbox" name="emploi" value="etudiant">
          <label>Étudiant·e</label>
        </div>
        <div class="app-form__section__subsections">
          <input type="checkbox" name="emploi" value="retraite">
          <label>Retraité·e</label>
        </div>
        <div class="app-form__section__subsections">
          <label>Autres</label>
          <input type="checkbox" name="emploi" value="autres">
        </div>
      </div>



      <div class="app-form__section">
        <label>Avez-vous le permis de conduire&nbsp;?</label>
        <select name="permis">
          <option value="oui">Oui</option>
          <option value="non">Non</option>
          <option value="momentane">Momentanément pas (par exemple retrait)</option>
        </select>
      </div>

      <div class="app-form__section">
        <label>De quel(s) abonnement(s) de transports publics disposez-vous&nbsp;?</label>

        <select name="permis">
          <option value="unireso">Abonnement de zone unireso</option>
          <option value="cff">Abonnement de parcours CFF</option>
          <option value="demi_tarif">Abonnement demi-tarif</option>
          <option value="ag">Abonnement général (AG)</option>
          <option value="autre">Autre</option>
        </select>

        <div class="app-form__section__subsections" style="width: 100%">
          <label>Autres (précisez)</label>
          <textarea type="text" name="abonnement_autres" placeholder="Autres (précisez)"></textarea>
        </div>
      </div>




      <div class="app-form__section">

        <label>Avez-vous personnellement accès à l’un de ces véhicules&nbsp;?</label>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="vehicule" value="vae">
          <label>Vélo à assistance électrique</label>
        </div>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="vehicule" value="velo_cargo">
          <label>Vélo cargo</label>
        </div>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="vehicule" value="velo">
          <label>Vélo conventionnel (mécanique)</label>
        </div>

      </div>







      <div class="app-form__section">

        <label>Souhaitez-vous faire évoluer vos pratiques de déplacement pour un mode de vie plus durable&nbsp;?</label>

        <select name="evolution_deplacement">
          <option value="oui_tout">Oui, tout à fait</option>
          <option value="plutot_oui">Plutôt oui</option>
          <option value="plutot_non">Plutôt non</option>
          <option value="pas_du_tout">Pas du tout</option>
        </select>

      </div>




      <p>Si nb d’adultes>nb de voiture+nb moto/scooter
        Toutes les personnes de votre ménage doivent participer au défi. Merci de remplir les informations personnelles pour chaque participant.</p>

      <p>Si nb d’adultes>nb de voiture+nb moto/scooter et nb adulte>1
        Merci de remplir ces quelques questions complémentaires pour la seconde personne majeure de votre ménage.</p>




      <div class="app-form__section">
        <label>Quelle situation professionnelle lui correspond actuellement&nbsp;?</label>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="Actif/active à temps plein">
          <label>Actif/active à temps plein</label>
        </div>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="Actif/active à temps partiel">
          <label>Actif/active à temps partiel</label>
        </div>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="Sans emploi / au chômage">
          <label>Sans emploi / au chômage</label>
        </div>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="Etudiant·e">
          <label>Etudiant·e</label>
        </div>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="Retraité·e">
          <label>Retraité·e</label>
        </div>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="Autres">
          <label>Autres</label>
        </div>
      </div>





      <div class="app-form__section">

        <label>Possède-t-elle le permis de conduire ?</label>

        <select name="evolution_deplacement">
          <option value="Oui">Oui</option>
          <option value="Non">Non</option>
          <option value="Momentanément pas (par exemple retrait)">Momentanément pas (par exemple retrait)</option>
        </select>

      </div>







      <div class="app-form__section">

        <label>A quelle fréquence se déplace-t-elle en moto/scooter&nbsp;? (Si moto/scooter>0)</label>

        <select name="evolution_deplacement">
          <option value="Tous les jours ou presque">Tous les jours ou presque</option>
          <option value="Une à plusieurs fois par semaine">Une à plusieurs fois par semaine</option>
          <option value="Moins d’une fois par semaine">Moins d’une fois par semaine</option>
        </select>

      </div>


      <div class="app-form__section">

        <label>A quelle fréquence se déplace-t-elle en voiture&nbsp;? (Si voiture>0)</label>

        <select name="evolution_deplacement">
          <option value="Tous les jours ou presque">Tous les jours ou presque</option>
          <option value="Une à plusieurs fois par semaine">Une à plusieurs fois par semaine</option>
          <option value="Moins d’une fois par semaine">Moins d’une fois par semaine</option>
        </select>

      </div>




      <div class="app-form__section">
        <label>De quel(s) abonnement(s) de transports publics dispose-t-elle ?</label>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="Abonnement de zone unireso">
          <label>Abonnement de zone unireso</label>
        </div>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="Abonnement de parcours CFF">
          <label>Abonnement de parcours CFF</label>
        </div>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="Abonnement demi-tarif">
          <label>Abonnement demi-tarif</label>
        </div>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="Abonnement général (AG)">
          <label>Abonnement général (AG)</label>
        </div>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="Aucun">
          <label>Aucun</label>
        </div>

        <div class="app-form__section__subsections" style="width: 100%">
          <label>Autres (précisez)</label>
          <textarea type="text" name="abonnement_autres" placeholder="Autres (précisez)"></textarea>
        </div>

      </div>











      <div class="app-form__section">
        <label>A-t-elle personnellement accès à l’un de ces véhicules :</label>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="Vélo à assistance électrique">
          <label>Vélo à assistance électrique</label>
        </div>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="Vélo cargo">
          <label>Vélo cargo</label>
        </div>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="Vélo conventionnel (mécanique)">
          <label>Vélo conventionnel (mécanique)</label>
        </div>
      </div>


      <p>Si nb d’adultes>nb de voiture+nb moto/scooter et nb adulte>2
        Merci de remplir ces quelques questions complémentaires pour la troisième personne majeure de votre ménage.</p>


      <div class="app-form__section">
        <label>Quelle situation professionnelle lui correspond actuellement&nbsp;?</label>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="Actif/active à temps plein">
          <label>Actif/active à temps plein</label>
        </div>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="Actif/active à temps partiel">
          <label>Actif/active à temps partiel</label>
        </div>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="Sans emploi / au chômage">
          <label>Sans emploi / au chômage</label>
        </div>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="Etudiant·e">
          <label>Etudiant·e</label>
        </div>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="Retraité·e">
          <label>Retraité·e</label>
        </div>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="Autres">
          <label>Autres</label>
        </div>
      </div>







      <div class="app-form__section">

        <label>Possède-t-elle le permis de conduire ?</label>

        <select name="evolution_deplacement">
          <option value="Oui">Oui</option>
          <option value="Non">Non</option>
          <option value="Momentanément pas (par exemple retrait)">Momentanément pas (par exemple retrait)</option>
        </select>

      </div>






      <div class="app-form__section">

        <label>A quelle fréquence se déplace-t-elle en moto/scooter&nbsp;? (Si moto/scooter>0)</label>

        <select>
          <option value="">Tous les jours ou presque</option>
        </select>
        <select>
          <option value="">Une à plusieurs fois par semaine</option>
        </select>
        <select>
          <option value="">Moins d’une fois par semaine</option>
        </select>

      </div>











      <div class="app-form__section">

        <label>A quelle fréquence se déplace-t-elle en voiture&nbsp;? (Si voiture>0)</label>

        <select>
          <option value="">Tous les jours ou presque</option>
        </select>
        <select>
          <option value="">Une à plusieurs fois par semaine</option>
        </select>
        <select>
          <option value="">Moins d’une fois par semaine</option>
        </select>

      </div>











      <div class="app-form__section">
        <label>De quel(s) abonnement(s) de transports publics dispose-t-elle ?</label>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Abonnement de zone unireso</label>
        </div>
        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Abonnement de parcours CFF</label>
        </div>
        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Abonnement demi-tarif</label>
        </div>
        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Abonnement général (AG)</label>
        </div>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Aucun</label>
        </div>

        <div class="app-form__section__subsections" style="width: 100%">
          <label>Autres (précisez)</label>
          <textarea type="text" name="abonnement_autres" placeholder="Autres (précisez)"></textarea>
        </div>

      </div>














      <div class="app-form__section">
        <label>A-t-elle personnellement accès à l’un de ces véhicules :</label>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Vélo à assistance électrique</label>
        </div>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Vélo cargo</label>
        </div>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Vélo conventionnel (mécanique)</label>
        </div>
      </div>













      <p>Si nb d’adultes>nb de voiture+nb moto/scooter et nb enfant>0
        Merci de remplir ces quelques questions complémentaires pour le premier enfant mineur de votre ménage. Si vous avez plusieurs enfants, merci de répondre dans l’ordre du plus grand au plus petit.</p>


      <div class="app-form__section">

        <label>A quelle fréquence se déplace-t-il en moto/scooter&nbsp;? (Si moto/scooter>0)</label>

        <select>
          <option value="">Tous les jours ou presque</option>
        </select>
        <select>
          <option value="">Une à plusieurs fois par semaine</option>
        </select>
        <select>
          <option value="">Moins d’une fois par semaine</option>
        </select>

      </div>













      <div class="app-form__section">

        <label>A quelle fréquence se déplace-t-il en voiture&nbsp;? (y&nbsp;compris passager) (Si voiture>0)</label>

        <select>
          <option value="">Tous les jours ou presque</option>
        </select>
        <select>
          <option value="">Une à plusieurs fois par semaine</option>
        </select>
        <select>
          <option value="">Moins d’une fois par semaine</option>
        </select>
      </div>













      <div class="app-form__section">
        <label>De quel(s) abonnement(s) de transports publics dispose-t-il ?</label>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Abonnement de zone unireso</label>
        </div>
        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Abonnement de parcours CFF</label>
        </div>
        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Abonnement demi-tarif</label>
        </div>
        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Abonnement général (AG)</label>
        </div>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Aucun</label>
        </div>

        <div class="app-form__section__subsections" style="width: 100%">
          <label>Autres (précisez)</label>
          <textarea type="text" name="abonnement_autres" placeholder="Autres (précisez)"></textarea>
        </div>
      </div>















      <div class="app-form__section">
        <label>A-t-il personnellement accès à l’un de ces véhicules :</label>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Vélo à assistance électrique</label>
        </div>
        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Vélo conventionnel (mécanique)</label>
        </div>
      </div>








      <p>Si nb d’adultes>nb de voiture+nb moto/scooter et nb enfant>1
        Merci de remplir ces quelques questions complémentaires pour le deuxième enfant mineur de votre ménage.</p>






      <div class="app-form__section">

        <label>A quelle fréquence se déplace-t-il en moto/scooter&nbsp;? (Si moto/scooter>0)</label>

        <select>
          <option value="">Tous les jours ou presque</option>
        </select>
        <select>
          <option value="">Une à plusieurs fois par semaine</option>
        </select>
        <select>
          <option value="">Moins d’une fois par semaine</option>
        </select>
      </div>









      <div class="app-form__section">

        <label>A quelle fréquence se déplace-t-il en voiture&nbsp;? (y&nbsp;compris passager) (Si voiture>0)</label>

        <select>
          <option value="">Tous les jours ou presque</option>
        </select>
        <select>
          <option value="">Une à plusieurs fois par semaine</option>
        </select>
        <select>
          <option value="">Moins d’une fois par semaine</option>
        </select>
      </div>









      <div class="app-form__section">
        <label>De quel(s) abonnement(s) de transports publics dispose-t-il ?</label>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Abonnement de zone unireso</label>
        </div>
        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Abonnement de parcours CFF</label>
        </div>
        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Abonnement demi-tarif</label>
        </div>
        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Abonnement général (AG)</label>
        </div>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Aucun</label>
        </div>

        <div class="app-form__section__subsections" style="width: 100%">
          <label>Autres (précisez)</label>
          <textarea type="text" name="abonnement_autres" placeholder="Autres (précisez)"></textarea>
        </div>

      </div>













      <div class="app-form__section">
        <label>A-t-il personnellement accès à l’un de ces véhicules :</label>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Vélo à assistance électrique</label>
        </div>
        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Vélo conventionnel (mécanique)</label>
        </div>
      </div>




      <p>Si nb d’adultes>nb de voiture+nb moto/scooter et nb enfant>1
        Merci de remplir ces quelques questions complémentaires pour le deuxième enfant mineur de votre ménage. </p>





      <div class="app-form__section">

        <label>A quelle fréquence se déplace-t-il en moto/scooter&nbsp;? (Si moto/scooter>0)</label>

        <select>
          <option value="">Tous les jours ou presque</option>
        </select>
        <select>
          <option value="">Une à plusieurs fois par semaine</option>
        </select>
        <select>
          <option value="">Moins d’une fois par semaine</option>
        </select>

      </div>










      <div class="app-form__section">

        <label>A quelle fréquence se déplace-t-il en voiture&nbsp;? (y&nbsp;compris passager) (Si voiture>0)</label>

        <select>
          <option value="">Tous les jours ou presque</option>
        </select>
        <select>
          <option value="">Une à plusieurs fois par semaine</option>
        </select>
        <select>
          <option value="">Moins d’une fois par semaine</option>
        </select>
      </div>








      <div class="app-form__section">
        <label>De quel(s) abonnement(s) de transports publics dispose-t-il ?</label>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Abonnement de zone unireso</label>
        </div>
        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Abonnement de parcours CFF</label>
        </div>
        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Abonnement demi-tarif</label>
        </div>
        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Abonnement général (AG)</label>
        </div>
        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Aucun</label>
        </div>

        <div class="app-form__section__subsections" style="width: 100%">
          <label>Autres (précisez)</label>
          <textarea type="text" name="abonnement_autres" placeholder="Autres (précisez)"></textarea>
        </div>
      </div>













      <div class="app-form__section">
        <label>A-t-il personnellement accès à l’un de ces véhicules :</label>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Vélo à assistance électrique</label>
        </div>
        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Vélo conventionnel (mécanique)</label>
        </div>
      </div>





      <p>Si nb d’adultes>nb de voiture+nb moto/scooter et nb enfant>2
        Merci de remplir ces quelques questions complémentaires pour le troisième enfant mineur de votre ménage. </p>



      <div class="app-form__section">

        <label>A quelle fréquence se déplace-t-il en moto/scooter&nbsp;? (Si moto/scooter>0)</label>

        <select>
          <option value="">Tous les jours ou presque</option>
        </select>
        <select>
          <option value="">Une à plusieurs fois par semaine</option>
        </select>
        <select>
          <option value="">Moins d’une fois par semaine</option>
        </select>
      </div>








      <div class="app-form__section">

        <label>A quelle fréquence se déplace-t-il en voiture&nbsp;? (y&nbsp;compris passager) (Si voiture>0)</label>

        <select>
          <option value="">Tous les jours ou presque</option>
        </select>
        <select>
          <option value="">Une à plusieurs fois par semaine</option>
        </select>
        <select>
          <option value="">Moins d’une fois par semaine</option>
        </select>
      </div>












      <div class="app-form__section">
        <label>De quel(s) abonnement(s) de transports publics dispose-t-il ?</label>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Abonnement de zone unireso</label>
        </div>
        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Abonnement de parcours CFF</label>
        </div>
        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Abonnement demi-tarif</label>
        </div>
        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Abonnement général (AG)</label>
        </div>
        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Aucun</label>
        </div>

        <div class="app-form__section__subsections" style="width: 100%">
          <label>Autres (précisez)</label>
          <textarea type="text" name="abonnement_autres" placeholder="Autres (précisez)"></textarea>
        </div>

      </div>












      <div class="app-form__section">
        <label>A-t-il personnellement accès à l’un de ces véhicules :</label>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Vélo à assistance électrique</label>
        </div>
        <div class="app-form__section__subsections">
          <input type="checkbox" name="" value="">
          <label>Vélo conventionnel (mécanique)</label>
        </div>
      </div>









      <p>Le questionnaire est presque terminé maintenant.
      Pour être recontacté si votre candidature est sélectrionnée, merci de renseigner votre adresse email.</p>

      <p>Adresse email :
        [zone de texte]</p>



      <p>En inscrivant votre adresse email, vous acceptez qu’elle soit enregistrée dans la base de données des personnes susceptibles de participer au défi. Les données renseignées dans ce formulaire ne seront utilisées que dans le cadre de l’organisation de l’initiative « Déclic Mobilité » et en aucun cas ne seront transmises à des tiers. Elles seront détruites sous 12 mois maximum.</p>

      <p>Merci pour votre intérêt ! Les personnes sélectionnées seront recontactées prochainement.</p>






      <button type="submit">Envoyer</button>
    </template>

  </form>
</template>

<script setup lang="ts">

import {UnwrapNestedRefs, UnwrapRef} from "vue";

let status: Ref<UnwrapRef<"sending PROGRESS" | "sending ERROR" | "sending OK" | "nothing">> = ref("nothing")
let responseMassage = ref('')

const formData: UnwrapNestedRefs<{
    [key: string]: any
    institution: string;
    nomProjet: string;
    description: string;
    nom: string;
    prenom: string;
    email: string
}> = reactive({
    nom: "",
    prenom: "",
    institution: "",
    email: "",
    nomProjet: "",
    description: "",
});

const handleSubmit = async () => {
    // Réinitialiser le formulaire
    // formData.nom = "";
    // formData.prenom = "";
    // formData.email = "";
    // formData.institution = "";
    // formData.nomProjet = "";
    // formData.description = "";

    // sendMessageData()

};

async function sendMessageData() {
}

const option_1 = ref(null)
</script>

<style lang="scss">

form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 8rem;
    counter-reset: section; /* Initialise le compteur */
}

button {
    background: linear-gradient(to right, var(--app-color-main), var(--app-color-main--dark));
    border: none;
    color: white;
    max-width: 10rem;
    margin: auto;

    @media (max-width: 900px) {
        display: block;
        width: auto;
    }
}

.app-form-declic-mobility__group {
    display: flex;
    justify-content: center;
    gap: var(--app-gutter);
    flex-wrap: nowrap;

    @media (max-width: 900px) {
        flex-wrap: wrap;
    }
}

.app-form__section {
  > label::before {
    counter-increment: section; /* Incrémente le compteur */
    content: counter(section) ". "; /* Affiche le numéro */
    font-weight: bold;
    margin-right: 5px;
  }
}

</style>
