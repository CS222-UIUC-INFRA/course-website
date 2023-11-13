import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "https://cs222.ghost.io",
  key: "c1529f15bf54eb6f0e6872fbb8",
  version: "v5.0"
});

export async function getPosts() {
  return await api.posts
    .browse({
      include: ["tags", "authors"],
      limit: 10
    })
    .catch(err => {
      throw new Error(err)
    });
}