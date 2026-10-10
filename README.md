# Portfolio — Md. Saifullah

A dependency-free static site (plain HTML + CSS + a few lines of JS), minimal
monospace / terminal aesthetic. All asset paths are **relative**, so the exact
same files deploy unchanged to both **Vercel** and **GitHub Pages**.

```
portfolio/
├── index.html      # the site (content lives here)
├── styles.css      # theme + layout (dark default, light toggle)
├── main.js         # footer year + theme toggle (site works without JS)
├── favicon.svg
├── 404.html        # custom not-found page (used by both hosts)
└── README.md
```

## Preview locally

No build step. Just open `index.html`, or serve it:

```bash
# any of these from inside this folder
python3 -m http.server 8080      # → http://localhost:8080
npx serve .                      # if you have Node
```

## Add your résumé button

The hero has a **Résumé** button pointing at `./resume.pdf`. Copy whichever
résumé PDF you want public into this folder as `resume.pdf`:

```bash
cp ../resume-formats/2.pdf ./resume.pdf
```

If you don't want it, delete the `Résumé` `<a>` in `index.html` (marked with a
`TODO` comment).

## Add personal projects

`index.html` has a **Projects** section that is commented out (search for
`PROJECTS`). Uncomment it, duplicate a `.card`, and fill in your work — the
card styling is already in `styles.css`. Optionally uncomment the matching
`projects` link in the nav.

---

## Deploy A — GitHub Pages (`md-saifullah.github.io`)

A **user site** lives at the repo named exactly `<username>.github.io` and is
served from the root, which is why relative paths matter.

1. Create a new GitHub repo named **`Md-Saifullah.github.io`** (public, empty).
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/Md-Saifullah/Md-Saifullah.github.io.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a
   branch**, select **`main`** / **`/ (root)`**, Save.
4. Live at **https://md-saifullah.github.io** within a minute or two.

> Using a normal project repo instead (e.g. `portfolio`)? It serves at
> `https://md-saifullah.github.io/portfolio/`. Relative paths still work; just
> keep the custom-domain/CNAME empty.

## Deploy B — Vercel

Same files, no build. Two ways:

**Dashboard (easiest):**
1. Push the folder to a GitHub repo (the same one above is fine).
2. [vercel.com](https://vercel.com) → **Add New → Project → Import** that repo.
3. **Framework Preset: Other**, **Build Command: (none)**, **Output
   Directory: `./`**. Deploy.
4. You get a `*.vercel.app` URL; add a custom domain later under the project's
   **Domains** tab.

**CLI:**
```bash
npm i -g vercel
vercel          # first run links/creates the project (accept the defaults)
vercel --prod   # promote to production
```

### One repo → both hosts
You can serve both URLs from a single repo: enable **GitHub Pages** on it *and*
**import the same repo into Vercel**. One `git push` updates both. (A tiny
caveat: a repo literally named `Md-Saifullah.github.io` is required for the
root user-site URL — Vercel is happy to import that repo regardless of its
name.)
