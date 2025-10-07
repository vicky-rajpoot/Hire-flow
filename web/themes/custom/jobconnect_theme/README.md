JobConnect Drupal Theme

A Drupal 10/11 custom theme that recreates the JobConnect career site using the Single Directory Components (SDC) pattern. Components live in the components/ directory and are composed inside Twig templates with the component() helper. The original static HTML remains untouched in the repo; this theme can be dropped into a Drupal installation without altering the source demo.

Highlights
---------
- Single Directory Components for navigation, hero banner, statistic counters, job cards, company cards, and footer elements.
- Reusable data props defined in each component's .component.yml file so editors can pass Drupal data or structured arrays from Twig templates.
- Global styling library (jobconnect_theme/global-styling) that loads the Tailwind CDN, supporting libraries (Anime.js, Typed.js, Splide, ECharts, p5.js), and a lightweight CSS file with theme tokens.
- Front page template (page--front.html.twig) that assembles key components to mirror the original landing page layout.

Installation
------------
1. Copy the jobconnect_theme directory into web/themes/custom (or the equivalent custom theme directory).
2. Enable the SDC module that provides the component() Twig helper: `drush en single_directory_components -y`
3. Clear caches so Drupal discovers the new theme and SDC components: `drush cr`
4. Enable the theme: `drush theme:enable jobconnect_theme` and `drush config:set system.theme default jobconnect_theme -y`
5. Optional: Assign blocks or Layout Builder content to the exposed regions (hero, highlighted, content, etc.) or adapt the provided Twig templates to pull from real entities.

Customisation tips
------------------
- Replace the hard-coded demo arrays in page--front.html.twig with Drupal data (Views, paragraphs, etc.) when integrating with real content.
- Extend the component library by duplicating an existing component directory and adjusting the Twig/YAML definitions.
- The global library loads Tailwind, Anime.js, Typed.js, Splide, ECharts, and p5.js from public CDNs. On locked-down environments you should self-host these assets and update `jobconnect_theme.libraries.yml` accordingly.
- If you compile Tailwind locally, remove the CDN script from jobconnect_theme.libraries.yml and point the library to your built CSS.

For further reference on SDCs, see the Drupal Single Directory Components documentation on drupal.org.
