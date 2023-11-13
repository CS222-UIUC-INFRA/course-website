import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "https://cs222.ghost.io",
  key: "c1529f15bf54eb6f0e6872fbb8",
  version: "v5.0"
});

export async function getSinglePost(postSlug: string) {
  return await api.posts
    .read({
      slug: postSlug
    }, { include: ["tags", "authors"] })
    .catch(err => {
      console.error(err);
    });
}