import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../project-page.js';

@customElement('collage-page')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class CollagePage extends LitElement {
  render() {
    return html`<project-page
      .text=${{
        title: 'Collage',
        body: [
          `Here we tackled the challenge of revitalizing an underused, abandoned plot near an old railway bridge, transforming it
          into a vibrant public space that serves the community. Our process began with creating a collage of inspiration,
          focusing on elements like canopies, arches, lighting, greenery, artistic expression, and sustainable materials.`,
          `The final design envisions the neglected area as a dynamic agora, where the existing natural overgrowth is
          not only preserved but also enhanced. The stone arches of the railway bridge are illuminated with neon lights,
          introducing a dramatic yet inviting ambiance. Canopies adorned with lights highlight the surrounding trees,
          creating a magical, forest-like atmosphere that invites visitors to linger.`,
          `Reclaimed wood is repurposed into cozy, inviting benches, offering rest and relaxation spots for passersby.
          Repurposed shipping containers take on new life as food trucks, adding a culinary dimension to the space
          and encouraging local entrepreneurship. The inclusion of graffiti and artistic elements on surrounding walls
          celebrates urban art, creating a canvas for local artists and adding vibrancy and color to the area.`,
          `This transformed space becomes a hub of community activity, seamlessly integrating history, sustainability, and modern urban life.`,
        ],
      }}
      .imageGrid=${[
        [
          {
            url: 'https://media.discordapp.net/attachments/1180119910291087370/1180153607425900664/ana5633_None_15d0cf40-f5f6-4e48-8b92-ed08ba23a2c1.png?ex=65e1e632&is=65cf7132&hm=94b8431eba5a63ce86c97e7cca18abdb3e8e33af1a0941224e6e40a068cfa8d5&=&format=webp&quality=lossless&width=1160&height=1160',
            alt: '/mj https://s.mj.run/6fB_O6SODSY https://s.mj.run/XxGHdjeqRNI an old stone arch bridge with three visible arches, towering over a somewhat construction site area, variety of materials, scattered across the ground, including pallets, planks, with dense foliage on the sides and behind the bridge --s 250',
          },
          {
            url: 'https://media.discordapp.net/attachments/1180119910291087370/1180153947730759690/dxts._image_depicts_an_old_stone_arch_bridge_with_three_visible_2643a1b3-7cf8-4924-899a-45e6a77988c8.png?ex=65e1e683&is=65cf7183&hm=7ec5f397dd0d7cedcf2ad5a9fa10a9305c64aaf2190f8f064eb865b2d094e2ef&=&format=webp&quality=lossless&width=1160&height=1160',
            alt: '/mj image depicts an old stone arch bridge with three visible arches, towering over a somewhat abandoned urban area. pallets, planks, and a shipping container scattered on the ground under the bridge, with dense foliage and plenty of trees visible behind the arches, from low camera angle',
          },
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1182514181971382343/dxts._None_9e64b121-e334-4bfd-89d2-478898eae5c6.png?ex=65e14227&is=65cecd27&hm=234e3bca8e078d37f47e045f0a2d415298318a08aa8f1d871252b8acc535faeb&=&format=webp&quality=lossless&width=700&height=700',
            alt: '/mj https://s.mj.run/HitoHIVjGz8 https://s.mj.run/I3XWtNBtCIQ',
          },
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1182519004007510077/dxts._None_d3951ab8-2e9c-435a-bedf-8fd28e4fbc43.png?ex=65e146a4&is=65ced1a4&hm=4c2bdbf3e86a85faed66a6fee4d12db975012a3e90a55f652b9e6c822615a5c4&=&format=webp&quality=lossless&width=1160&height=1160',
            alt: '/mj https://s.mj.run/sQmavQ1K3u4 ::3 https://s.mj.run/HitoHIVjGz8 ::2',
          },
        ],
        [
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1182511328083050516/dxts._None_1aac2330-9650-4218-b3fe-05a2a5e2b9e3.png?ex=65e13f7e&is=65ceca7e&hm=a9f7352c4963056a40b337876ba2afd9970fdefde4f35acda8d6fb9529616457&=&format=webp&quality=lossless&width=700&height=700',
            alt: '/mj https://s.mj.run/HitoHIVjGz8 https://s.mj.run/4ccO4jntbb8',
          },
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1182515483870777354/dxts._same_scene_at_night_902c0911-6570-4af3-8ece-5ce956bcc965.png?ex=65e1435d&is=65cece5d&hm=7f8ea6fe26586c8cbc77a2222464c94abb0ae73c19b276263c519e4ae635bea3&=&format=webp&quality=lossless&width=700&height=700',
            alt: '/mj https://s.mj.run/HitoHIVjGz8 same scene at night ',
          },
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1182514777562550283/dxts._None_3cc269e8-76fe-4ad7-97f9-47c8979aed4f.png?ex=65e142b5&is=65cecdb5&hm=beef3056c0bf33ac4e9424512ce7f4ce4e0a173348ad8523e6c6e48462863f32&=&format=webp&quality=lossless&width=700&height=700',
            alt: '/mj https://s.mj.run/HitoHIVjGz8 ::1 https://s.mj.run/wV0_8_IsMX8 ::3',
          },
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1182538141148647525/dxts._None_73ff9c6e-1ce7-421f-92fa-8bda3d321b66.png?ex=65e15877&is=65cee377&hm=ef8373bf73806fe20b2d1c4b09f0c00eace8f8a10fd5a4ae0076371fa27687ae&=&format=webp&quality=lossless&width=700&height=700',
            alt: 'https://s.mj.run/gkrajdZ4wjE ::3 https://s.mj.run/77P0RI1Hui0 ::2',
          },
        ],
        [
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1209528303845642240/dxts._grey_sky_27872e74-2948-43a7-8f7d-415b52dfc350.png?ex=65e74003&is=65d4cb03&hm=ba216b11f75e67dacc9701e5381a93c1ddfd6b404ba785eec8aeb33db05c9331&=&format=webp&quality=lossless&width=700&height=700',
            alt: '/mj https://s.mj.run/AmkdIbSqWSA https://s.mj.run/wV0_8_IsMX8 https://s.mj.run/v1tp-idgZQw',
          },
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1209526122736263218/dxts._None_60daadc1-1d11-453d-90a9-1c005223b3b7.png?ex=65e73dfb&is=65d4c8fb&hm=9d31d0757f41edde7baf603176dd0389eab062883a83f7ddfb5da9d5ba6f59a4&=&format=webp&quality=lossless&width=700&height=700',
            alt: '/mj https://s.mj.run/AmkdIbSqWSA https://s.mj.run/sQmavQ1K3u4',
          },
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1209529488279343135/dxts._None_f728087c-1fb2-4608-98a2-d06989f9b94e.png?ex=65e7411d&is=65d4cc1d&hm=5c09d9a0e2a4ab1e930584b0f148deefefde5ca84772928393120b4dce6acfb2&=&format=webp&quality=lossless&width=700&height=700',
            alt: '/mj https://s.mj.run/gkrajdZ4wjE ::2 https://s.mj.run/5tDdwZIzKuE ::2 https://s.mj.run/ytYWxExsseQ ::3 https://s.mj.run/SZ6Jol8zSHc ::2 https://s.mj.run/wV0_8_IsMX8 ::4 --s 250',
          },
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1209531493110521896/dxts._None_b6f41ac3-c008-48b3-9858-84315858138a.png?ex=65e742fb&is=65d4cdfb&hm=274551dc3ea2b9ad4bfc5f24f98bac0919a8826cfdacebf8616f85e456a5cca6&=&format=webp&quality=lossless&width=700&height=700',
            alt: '/mj https://s.mj.run/gkrajdZ4wjE ::2 https://s.mj.run/ytYWxExsseQ ::4 https://s.mj.run/SZ6Jol8zSHc ::4 https://s.mj.run/v0I7I61zYZk ::2',
          },
        ],
        [
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1209532751418630174/dxts._dangling_yellow_lights_in_the_trees_and_people_walking_in_9192837e-759c-488d-b4c9-6fbe840f34a9.png?ex=65e74427&is=65d4cf27&hm=5ca59ec23a35a23f654e4ed43b71ed006ad49a602d938efee47c9843c9bf1a88&=&format=webp&quality=lossless&width=700&height=700',
            alt: '/mj https://s.mj.run/gTHQFZRlhrg https://s.mj.run/ytYWxExsseQ dangling yellow lights in the trees, and people walking in a street market --v 5.2',
          },
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1209531977863012412/dxts.__b0d3bb00-0192-4f6d-8093-7fccbb26a86f.png?ex=65e7436f&is=65d4ce6f&hm=012f28ee026ab8c626cc362f1f6290e49af47e8b0f4fe4d0896ed902f4e0a9b7&=&format=webp&quality=lossless&width=700&height=700',
            alt: '/mj https://s.mj.run/ytYWxExsseQ https://s.mj.run/BNHKklGHLQ8 --ar 1:1',
          },
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1209531110120357938/dxts._None_a1e9067b-8b06-4b6c-a51b-b5a4048e12b9.png?ex=65e742a0&is=65d4cda0&hm=c9fb72c1ed717fc7fa1f05a9735bfa74d3425bdc445f3c6fb894d0b14f2e5509&=&format=webp&quality=lossless&width=700&height=700',
            alt: '/mj https://s.mj.run/PQvU05xsecE https://s.mj.run/ytYWxExsseQ --s 250',
          },
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1206286871425196172/dxts._None_18961546-7556-4653-a800-04c7fc12e84f.png?ex=65e4afb1&is=65d23ab1&hm=e8598fcb3dfbb854b462a99041a14bed4d8c49fe9f9d1661ac83dc370215022b&=&format=webp&quality=lossless&width=700&height=700',
            alt: '/mj https://s.mj.run/wV0_8_IsMX8 https://s.mj.run/eDKuWWkYMQE',
          },
        ],
      ]}
    ></project-page>`;
  }
}
