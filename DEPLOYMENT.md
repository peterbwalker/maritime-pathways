# Publishing Maritime Pathways

This repository is configured to publish automatically with GitHub Pages whenever the `main` branch changes.

## First GitHub publication

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, select **GitHub Actions**.
3. Run the **Deploy Maritime Pathways** workflow if it has not started automatically.

## Connecting a Porkbun domain later

Once the exact domain or subdomain is selected, add it under **Settings → Pages → Custom domain**. GitHub will show the DNS target required for that repository. Add the matching record in Porkbun's **DNS Records** screen, then enable **Enforce HTTPS** after GitHub verifies the domain.

For a `www` or `app` subdomain, use a CNAME record pointing to the GitHub Pages hostname. For an apex domain, use the A/AAAA records shown in GitHub's current documentation.
