import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
/**
 * A service that handles language management and translation provision for the application.
 */
export class TranslationService {
    private currentLanguage: 'DE' | 'EN' = 'DE'; // The currently selected language.
    private translations: { [key: string]: { [key: string]: string } } = {
        DE: {
            'aboutMe': 'Über mich', 'portfolio': 'Portfolio', 'LetsTalk': 'Lass uns reden!',
            'aboutMeTitle': 'Über mich',
            'aboutMeText1': 'Hallo! Mein Name ist Emanuel Schäfer, und ich bin Frontend-Entwickler. Ich lebe seit 2,5 Jahren in Paraguay und komme ursprünglich aus Ulm, Deutschland. Es bereitet mir Freude, Dinge aus dem Nichts zu erschaffen. Getrieben von Innovation, ist es mein Ziel, zu Lösungen beizutragen, die sowohl modern als auch benutzerorientiert sind.',
            'aboutMeText2': 'Meine Fähigkeiten habe ich an der Developer Academy erlernt, wo das Feedback von Mentoren meine Leidenschaft in Präzision verwandelte. Hier habe ich wirklich gelernt, Form und Funktion zu kombinieren, um zugängliche und ansprechende Web-Erlebnisse zu schaffen.',
            'aboutMeText3': 'Jenseits der Welt des Codes finde ich Ausgleich und Disziplin beim Handballspielen. Die Teamarbeit, Strategie und Resilienz, die auf dem Spielfeld erforderlich sind, fließen auch in meine berufliche Ethik ein.',
            'mySkillsTitle': 'Skills',
            'mySkillsText': 'Ich habe meine Fähigkeiten in der Frontend-Entwicklung erweitert, die es mir ermöglicht haben, verschiedene echte Projekte zu erstellen.',
            'getInTouch': 'Kontakt aufnehmen',
            'portfolioText': 'Entdecken Sie hier eine Auswahl meiner Arbeiten - Interagieren Sie mit den Projekten, um meine Fähigkeiten in Aktion zu sehen.',
            'contactTitle': 'Kontakt',
            'contactIntro': 'Haben Sie ein Problem zu lösen?',
            'contactDescription': 'Kontaktieren Sie mich über dieses Formular. Ich interessiere mich für Ihre Ideen und möchte zu Ihren Projekten mit meiner Arbeit beitragen.',
            'contactPrompt': 'Brauchen Sie einen Frontend-Entwickler? Kontaktieren Sie mich!',
            'sendButton': 'Nachricht senden :)',
            'imprintAccordingTo': 'Gemäß § 5 TMG',
            'dataProtectionDeclaration': 'Datenschutzerklärung',
            'dataProtectionAtAGlance': '1 Datenschutz auf einen Blick',
            'generalText': 'Die folgenden Informationen geben einen einfachen Überblick darüber, was mit Ihren persönlichen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Detaillierte Informationen zum Thema Datenschutz finden Sie in unserer unten aufgeführten Datenschutzerklärung.',
            'dataCollectionTitle': 'Datenerfassung auf dieser Webseite',
            'responsibleForDataCollection': 'Wer ist verantwortlich für die Datenerfassung auf dieser Webseite?',
            'dataProcessingInfo': 'Die Datenverarbeitung auf dieser Webseite wird durch den Webseitenbetreiber durchgeführt. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.',
            'dataCollectionMethodTitle': 'Wie erfassen wir Ihre Daten?',
            'dataProvided': 'Ihre Daten werden einerseits gesammelt, wenn Sie uns diese mitteilen. Dies kann zum Beispiel Daten sein, die Sie in ein Kontaktformular eingeben.',
            'dataCollectedAutomatically': 'Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Webseite durch unsere IT-Systeme erfasst. Dies sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Zeitpunkt der Seitenansicht). Diese Daten werden automatisch erfasst, sobald Sie diese Webseite betreten.',
            'dataUsageTitle': 'Wofür nutzen wir Ihre Daten?',
            'dataUsageDescription': 'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.',
            'dataRightsTitle': 'Welche Rechte haben Sie bezüglich Ihrer Daten?',
            'dataRightsDescription': 'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Haben Sie Ihre Einwilligung zur Datenverarbeitung erteilt, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Darüber hinaus haben Sie unter bestimmten Umständen das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Sie haben zudem das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren.',
            'contactUs': 'Sie können uns jederzeit kontaktieren, wenn Sie Fragen zum Datenschutz haben.',
            'hostingSectionTitle': '2. Hosting',
            'hostingContentIntro': 'Wir hosten die Inhalte unserer Website bei folgendem Anbieter:',
            'externalHostingTitle': 'Externes Hosting',
            'externalHostingDescription': 'Diese Website wird extern gehostet. Die auf dieser Website gesammelten personenbezogenen Daten werden auf den Servern des Hosts gespeichert. Dies kann IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und andere über eine Website generierte Daten umfassen.',
            'externalHostingPurpose': 'Das externe Hosting erfolgt zum Zweck der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage des Artikels 6 Absatz 1 Buchstabe a DSGVO.',
            'privacyPolicyAgreement': 'Ich habe die',
            'andAgree': 'gelesen und stimme der Verarbeitung meiner Daten wie dargelegt zu',
            'privacyPolicyLink': 'Datenschutzerklärung',
        },
        EN: {
            'aboutMe': 'About me', 'portfolio': 'Portfolio', 'LetsTalk': 'Let’s talk!', 'aboutMeTitle': 'About me',
            'aboutMeText1': 'Hello! My name is Emanuel Schäfer, and I\'m a frontend developer. I have been living in Paraguay for 2.5 years and originally come from Ulm, Germany. I take joy in creating things from nothing. Driven by innovation, my goal is to contribute to solutions that are both modern and user-focused.',
            'aboutMeText2': 'I learned my skills at the Developer Academy, where feedback from mentors transformed my passion into precision. This is where I really learned to combine form and function to create accessible and engaging web experiences.',
            'aboutMeText3': 'Beyond the world of code, I find balance and discipline through playing handball. The teamwork, strategy, and resilience required on the pitch also flow into my professional ethics.',
            'mySkillsTitle': 'My Skills',
            'mySkillsText': 'I have grown my frontend developments skills that have allowed me to create different real projects.',
            'getInTouch': 'Get in touch',
            'portfolioText': 'Explore a selection of my work here - Interact with projects to see my skills in action.',
            'contactTitle': 'Contact',
            'contactIntro': 'Got a problem to solve?',
            'contactDescription': 'Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.',
            'contactPrompt': 'Need a Frontend developer? Contact me!',
            'sendButton': 'Send message :)',
            'imprintAccordingTo': 'According to § 5 TMG',
            'dataProtectionDeclaration': 'Data protection declaration',
            'dataProtectionAtAGlance': '1 Data protection at a glance',
            'generalText': "The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is all data with which you can be personally identified. Detailed information on the subject of data protection can be found in our data protection declaration listed below this text.",
            'dataCollectionTitle': 'Data collection on this website',
            'responsibleForDataCollection': 'Who is responsible for data collection on this website?',
            'dataProcessingInfo': 'Data processing on this website is carried out by the website operator. Whose contact details can Please refer to the “Notice on the responsible body” section in this data protection declaration.',
            'dataCollectionMethodTitle': 'How do we collect your data?',
            'dataProvided': 'Your data is collected on the one hand when you provide it to us. This can be, for example, data that you enter into a contact form.',
            'dataCollectedAutomatically': 'Other data is collected automatically or with your consent when you visit the website through our IT systems. This is primarily technical data (e.g., internet browser, operating system or time of the page view). This data is collected automatically as soon as you enter this website.',
            'dataUsageTitle': 'What do we use your data for?',
            'dataUsageDescription': 'Some of the data is collected to ensure that the website is provided correctly. Other data can be used to analyze your user behavior.',
            'dataRightsTitle': 'What rights do you have regarding your data?',
            'dataRightsDescription': 'You have the right to obtain information about the origin, recipient, and purpose of your stored personal data at any time, free of charge. You also have the right to request correction or to request deletion of this data. If you have given your consent to data processing, you can revoke this consent at any time in the future. Moreover, you have the right to demand the restriction of the processing of your personal data under certain circumstances. You also have the right to lodge a complaint with the responsible supervisory authority.',
            'contactUs': 'You can contact us at any time about this or if you have any further questions about data protection.',
            'hostingSectionTitle': '2. Hosting',
            'hostingContentIntro': 'We host the content of our website with the following provider:',
            'externalHostingTitle': 'External hosting',
            'externalHostingDescription': 'This website is hosted externally. The personal data collected on this website are stored on the server(s) of the host(s). This can include IP addresses, contact requests, meta and communication data, contract data, contact details, names, website access, and other data generated via a website.',
            'externalHostingPurpose': 'The external hosting is carried out for the purpose of fulfilling the contract with our potential and existing customers (Art. 6 Para. 1 lit. b GDPR) and in the interest of secure, fast, and efficient provision of our online offering by a professional provider (Art. 6 Para. 1 lit. f GDPR). If appropriate consent has been requested, processing takes place exclusively on the basis of Article 6 Paragraph 1 Letter a GDPR.',
            'privacyPolicyAgreement': "I've read the",
            'andAgree': 'and agree to the processing of my data as outlined',
            'privacyPolicyLink': 'privacy policy',
        },
    };

    /**
     * Sets the current language of the application.
     * @param lang The language code, can be 'DE' for German or 'EN' for English.
     */
    setLanguage(lang: 'DE' | 'EN'): void {
        this.currentLanguage = lang;
    }

    /**
     * Returns the translation for a specific key.
     * @param key The key of the translation.
     * @returns {string} The translation found or the key if no translation exists.
     */
    getTranslation(key: string): string {
        return this.translations[this.currentLanguage][key] || key;
    }

    /**
     * Returns the currently set language.
     * @returns {'DE' | 'EN'} The currently set language.
     */
    getCurrentLanguage(): 'EN' | 'DE' {
        return this.currentLanguage;
    }
}