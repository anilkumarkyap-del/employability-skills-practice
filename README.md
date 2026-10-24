# Practice Papers

Static site (no build, no server). Hosted free on GitHub Pages.

## Add a new paper (does not touch existing papers)
1. Copy `papers/paper1.js` to `papers/paper2.js`.
2. Inside it change `window.PAPERS["paper1"]` -> `window.PAPERS["paper2"]`, `id`, `title`, and replace the questions.
3. Put figure images in `img/paper2/` and refer to them as `img/paper2/q10.png`.
4. Add ONE line in `papers/manifest.js`.
5. `git add papers/paper2.js papers/manifest.js img/paper2 && git commit -m "Add paper 2" && git push`
