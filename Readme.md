# Interactief formulier

## Praktische informatie

* Repository: `jQuery-form`
* Deadline: 1 day
* Delivery: Github page (published)

## Leerdoelstellingen

* Gebruik maken van de aangeleerde [JavaScript](https://htmlcheatsheet.com/js/) & [jQuery](https://htmlcheatsheet.com/jquery/);
* Input kunnen vragen aan de gebruiker, en handelingen kunnen uitvoeren op basis van/met data.
* Een "probleem" leren opsplitsen in "deelproblemen".

## Opdracht

Het doel is om een interactief formulier te creëren dat geanimeerd wordt dankzij **jQuery**. Het zal een zeer eenvoudig formulier zijn, met enkele velden die hun stijl **CSS** zullen zien veranderen afhankelijk van de actie van de gebruiker. Het doel is om de ingevoerde informatie te controleren: aantal tekens, controleer of de bevestiging van het wachtwoord identiek is aan het ingevoerde wachtwoord, controleer of alle velden zijn ingevuld, enz.....

Dit formulier bevat vier velden:

* een `tekst` veld voor de bijnaam;
* een `wachtwoord` veld voor het wachtwoord;
* een tweede veld met een `wachtwoord` voor de bevestiging van het wachtwoord;
* en een laatste `email` veld voor het e-mail adres.

Twee knoppen zullen respectievelijk de gegevens verzenden en de velden wissen. Geen servertaal voor deze oefening: alles moet aan de client kant gedaan worden.

Je dient ervoor te zorgen dat de gebruiker de juiste informatie op de juiste manier invoert:

* Alle velden moeten ten minste 5 karakters bevatten;
* Het wachtwoord en de bevestiging moeten hetzelfde zijn;
* Als de velden leeg zijn tijdens het verzenden, wordt er een foutmelding weergegeven.

Om de bezoeker op de fout te wijzen, gebruik gewoon **CSS** : een rode veldgrens zou moeten volstaan. Als het veld goed is, kan je de kleur van het juiste veld veranderen in groen.

**Belangrijk:**
Vergeet niet dat je alle gevallen moet behandelen, omdat je de gebruiker nooit mag vertrouwen! We geven je een skelet om mee te beginnen! Het bevat de **HTML** code , de **CSS** code , en maakt gebruik van **Bootstrap** en **jQuery**!

## Bonus

Dit formulier kan verder worden verbeterd, in die zin dat je de mogelijkheden van de gebruiker verder kunt beperken, bijvoorbeeld door een bepaald aantal tekens in de bijnaam niet te overschrijden. De stijl is momenteel ultra basic, niets weerhoudt je ervan om het nog geavanceerder te maken, zodat de gebruikerservaring tot het uiterste wordt uitgediept.

Er kunnen enkele veiligheidsverbeteringen worden aangebracht:

* U kon het formaat van het e-mailadres controleren, dankzij een reguliere expressie, gemaakt met als onderwerp [`Regex`](https://www.w3schools.com/jsref/jsref_obj_regexp.asp) van **JavaScript** ;
* Je had ook kunnen controleren of het wachtwoord veilig was, bijvoorbeeld door een mini beveiligingsindicator te maken op basis van het aantal tekens, hun diversiteit, enz.
* Het is mogelijk om voor elk veld een helpbericht weer te geven wanneer de gebruiker er tekst intypt.



# Interactive form

## Practical information

* Repository: `jQuery-form`
* Deadline: 1 day
* Delivery: Github page (published)

## Learning objectives

* Use the learned [JavaScript](https://htmlcheatsheet.com/js/) & [jQuery](https://htmlcheatsheet.com/jquery/);
* Being able to request input from the user, and being able to perform actions based on / with data.
* Learning to split a "problem" into "sub-problems".

## Order

The goal is to create an interactive form that is animated thanks to **jQuery**. It will be a very simple form, with some fields that will see their **CSS** style change depending on the user's action. The purpose is to check the information entered: number of characters, check whether the confirmation of the password is identical to the password entered, check whether all fields are filled in, etc .....

This form contains four fields:

* a `text` field for the nickname;
* a `password` field for the password;
* a second field with a `password` for confirming the password;
* and a last `email` field for the e-mail address.

Two buttons will respectively send the data and delete the fields. No server language for this exercise: everything must be done on the client side.

You must ensure that the user enters the correct information in the correct manner:

* All fields must contain at least 5 characters;
* The password and the confirmation must be the same;
* If the fields are empty during sending, an error message is displayed.

To point the visitor out to the error, simply use **CSS**: a red field boundary should suffice. If the field is good, you can change the color of the correct field to green.

**Important:**
Remember that you have to deal with all cases, because you can never trust the user! We give you a skeleton to start with! It contains the ** HTML ** code, the ** CSS ** code, and uses ** Bootstrap ** and ** jQuery **!

## Bonus

This form can be further improved, in the sense that you can further limit the possibilities of the user, for example by not exceeding a certain number of characters in the nickname. The style is currently ultra basic, nothing prevents you from making it even more sophisticated, so that the user experience is deepened.

A few safety improvements can be made:

* You could check the format of the e-mail address, thanks to a regular expression created with subject [`Regex`](https://www.w3schools.com/jsref/jsref_obj_regexp.asp) from **JavaScript**;
* You could also have checked whether the password was secure, for example by creating a mini security indicator based on the number of characters, their diversity, etc.
* It is possible to display a help message for each field when the user types in text.