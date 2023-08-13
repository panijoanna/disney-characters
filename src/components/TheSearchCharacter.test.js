import { mount } from "@vue/test-utils";
import { describe, it, expect, vi, beforeEach } from "vitest";
import TheSearchCharacter from "./TheSearchCharacter.vue";
import { setActivePinia } from "pinia";
import { createTestingPinia } from "@pinia/testing";
import { useCharacterStore } from "@/stores/character.js";

describe("Favorite character list", () => {
  beforeEach(() => {
    setActivePinia(
      createTestingPinia({
        createSpy: vi.fn,
      })
    );
  });
  it("displays favorite characters", () => {
    const characterStore = useCharacterStore();
    characterStore.favoriteCharacters = [
      {
        _id: 112,
        films: ["Hercules (film)"],
        shortFilms: [],
        tvShows: ["Hercules (TV series)"],
        videoGames: ["Kingdom Hearts III"],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: "https://disney.fandom.com/wiki/Achilles_(Hercules)",
        name: "Achilles",
        imageUrl:
          "https://static.wikia.nocookie.net/disney/images/d/d3/Vlcsnap-2015-05-06-23h04m15s601.png",
        createdAt: "2021-04-12T01:31:30.547Z",
        updatedAt: "2021-12-20T20:39:18.033Z",
        url: "https://api.disneyapi.dev/characters/112",
        __v: 0,
      },
    ];
    const wrapper = mount(TheSearchCharacter);
    const achillesEl = wrapper.find('[data-test="favorite-character-112"]');
    expect(achillesEl.exists()).toBe(true);
    const achillesNameEl = achillesEl.find(
      '[data-test="favorite-character-name"]'
    );
    expect(achillesNameEl.exists()).toBe(true);
    expect(achillesNameEl.text()).toBe("Achilles");
  });
});
