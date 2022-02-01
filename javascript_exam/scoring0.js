// Lorsque le DOM a fini de se charger, exécutez le processus dans la fonction().
$(document).ready(function () {
  // Logique pour obtenir les scores (valeurs d'entrée) de "Japonais, Anglais, Maths, Sciences, Etudes sociales" et donner le score total et le score moyen.

  function score_indicate() {
    // Attribuez un tableau de notes pour "japonais, anglais, mathématiques, sciences, études sociales" à la variable "subject_points".
    
    let subject_points = [Number($('#national_language').val()),
      Number($('#english').val()),
      Number($('#mathematics').val()),
      Number($('#science').val()),
      Number($('#society').val())
    ];
    
    
    // Ajoutez les scores de "Japonais, Anglais, Mathématiques, Sciences et Etudes sociales" à la variable "so
    let sum = subject_points[0];
      sum = sum + subject_points[1];
      sum = sum + subject_points[2];
      sum = sum + subject_points[3];
      sum = sum + subject_points[4];

    
    // Que la variable "sum" (score total) soit sortie en "Total score :" (id="sum_indicate").

    $("#sum_indicate").text(sum);
    let logSum = document.getElementById("#sum_indicate¨



    // Décrire le processus d'édition du score moyen de chaque sujet dans "score moyen :".
    // Astuce : remplacez la variable "average" par la valeur moyenne (le score total du nombre dont vous voulez faire la moyenne (somme) / le nombre de pièces entières).
    // Conseil : le nombre total de pièces peut être trouvé en utilisant la méthode de la longueur. (méthode de longueur : une méthode pour obtenir la longueur d'une chaîne de caractères ou le nombre d'éléments d'un tableau)

  };

  //console.log(subject_points);
  console.log(sum);


  // Décrivez la logique permettant d'obtenir le score moyen et de le classer en "A, B, C, D" en fonction du score moyen obtenu.

  function get_achievement() {
    // Dans la variable "averageIndicate".
    // Le score moyen est extrait de id="average_indicate" dans le HTML et lui est attribué.
      
    let averageIndicate = $("#average_indicate").text();
    console.log(averageIndicate);
    
    // Si "averageIndicate" est supérieur ou égal à 80, renvoyer "A".    
    if (averageIndicate >= 80) {
      return "A";
    }
    // Si "averageIndicate" est supérieur à 60, retournez "B".
    // Si "averageIndicate" est égal ou supérieur à 40, retournez "C".
    // Si "averageIndicate" est différent, retournez "D".
    
    // Prenez les notes pour chaque matière et créez une logique pour prendre une décision de "réussite ou d'échec" en fonction des notes obtenues.  function get_pass_or_failure() {
      
    let subject_points = [Number($('#national_language').val()),
      Number($('#english').val()),
      Number($('#mathematics').val()),
      Number($('#science').val()),
      Number($('#society').val())
    ];
    
    // Attribuez le nombre de sujets saisis à la variable 'nombre'.    
    let number = subject_points.length;  
    
    // Assignez "pass" à la variable "judge".    
    let judge = "合格";
    
    // Ecrivez un processus pour réassigner "fail" à la variable "judge" si l'un des scores est inférieur à 60 pour chacun des sujets saisis.
    // Conseil : étudiez le processus itératif pour les tableaux.

    return judge;

    // Créez la logique pour le jugement final.  
    function judgement() {

      // Attribuez la "valeur de retour de get_achievement()" à la variable "achievement".
      let achievement = get_achievement();

      // Attribuez la "valeur de retour de get_pass_or_failure()" à la variable "pass_or_failure".
      let pass_or_failure = get_pass_or_failure();

      // Lorsque vous appuyez sur le bouton "Juge final" (id="alerte-indicateur"), il dira "Votre note est ${réalisation}. ${pass_ou_failure}." est produit.
      $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}です。${pass_or_failure}です。</label>`);
    };

    // Ce processus déclenche la fonction score_indicate() lorsque l'un des scores [score en japonais, score en anglais, score en mathématiques, score en sciences, score en sciences sociales] est modifié.
    $('#national_language, #english, #mathematics, #science, #society').change(function () {
      score_indicate();
    });
    
    // Lorsque le bouton "rang" (id="évaluation") est pressé, le processus "get_achievement()" est édité.  
    $('#btn-evaluation').click(function () {
      $("#evaluation").text(get_achievement());
    });
    
    // Lorsque le bouton "juge" (id="btn-judge") est pressé, la "fonction et_pass_ou_failure()" est le processus de sortie.
    $('#btn-judge').click(function () {
      $("#judge").text(get_pass_or_failure());
    });

    // Lorsque le bouton "Juge final" (id="btn-declaration") est pressé, le processus "function judgement()" est exécuté.
    // Lorsque le bouton "jugement définitif" est pressé une deuxième fois ou plus tard, l'élément HTML pour le jugement qui était précédemment affiché est supprimé et un nouvel élément HTML pour le jugement est ajouté.
    // Astuce : consultez la méthode de suppression.
    $('#btn-declaration').click(function () {
    });

  };

  // La description du JavaScript ici n'est qu'un modèle fourni à titre indicatif, donc si vous souhaitez l'implémenter sans suivre la description, vous êtes libre de le faire comme vous le souhaitez. Si vous remplissez toutes les conditions, vous réussirez.

});