import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../project-page.js';

@customElement('decomposition-page')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class DecompositionPage extends LitElement {
  render() {
    return html`<project-page
      .text=${{
        title: 'Decomposition',
        body: [
          `In this project, we utilized a morphological box to explore the potential of
          generating products from various waste materials through different techniques.
          This structured approach facilitated iterative idea generation, allowing us to experiment with combinations and refine our concepts.`,
          `One standout product that emerged from this process is a dog bed crafted from owners' old clothes,
          imbued with faint remnants of their scent. Leveraging dogs' keen sense of smell and their strong attachment to their owners,
          this innovative design integrates the bond between human and pet into the recycling process.`,
          `Owners are encouraged to select clothes that their dogs are fond of, enhancing the emotional connection between the pet and the product.
          Additionally, involving owners in the disassembly of materials allows for customization,
          ensuring each bed is unique and tailored to the individual dog's preferences.`,
          `Ultimately, this dog bed provides an extra layer of comfort and familiarity for pets,
          bridging the gap between human-centered design and sustainable practices.`,
        ],
      }}
      .imageGrid=${[
        [
          {
            url: 'https://media.discordapp.net/attachments/1159555297464037459/1162049909340504084/celerei_a_patchwork_8a687ff8-cfd5-4718-9fce-d1182f45afcc.png?ex=65e0a350&is=65ce2e50&hm=667d2ebcbd76fe19f41c89cdef1304a092be4e4a9edbd732c6a85000c7aabf7e&=&format=webp&quality=lossless',
            alt: '/mj a patchwork::06 "dog-bed":0.4 stitched out of "old jeans"::1.1 with a puppy::03 sitting on the bed, the puppy is sleeping:0.1 --style raw',
          },
          {
            url: 'https://media.discordapp.net/attachments/1159555297464037459/1162172473593315450/celerei_photo_shoot_setup_62ad837b-af21-4361-b91d-80c985e31100.png?ex=65e11575&is=65cea075&hm=2b0e357e92ef5e3fe7ac1add9692ba1a17dc97a4aa6d019473b13714bb9c7575&=&format=webp&quality=lossless',
            alt: '/mj "photo shoot setup" ::1.1 with light orange background. A girl ::1.1and her puppy it facing the camera. a patchwork::0 dog-bed::05 stitched out of old textiles::03 with a Labrador puppy sitting on the bed --style raw',
          },
          {
            url: 'https://media.discordapp.net/attachments/1159555297464037459/1162075647695396935/celerei_a_patchwork_9768b365-0e47-44fa-9813-1cc0705c3532.png?ex=65e0bb48&is=65ce4648&hm=b745c13abd7d12c3bd6038fcb58476a60ca7e7e847d788b509a496b263f0f7b4&=&format=webp&quality=lossless',
            alt: "/mj a patchwork::01 dog-bed::05 stitched out of old textiles::03 with a Labrador puppy sitting on the bed, the setting is a person's home with wooden floor panels --style raw",
          },
          {
            url: 'https://media.discordapp.net/attachments/1159555297464037459/1162075942181666857/celerei_a_patchwork_bc726c55-a2b5-4d9b-a8b7-1a698adc989c.png?ex=65e0bb8e&is=65ce468e&hm=c30e2290defd035c9ce1d943e949cd22ddbac868dd8278b1801263f153e08aab&=&format=webp&quality=lossless',
            alt: "/mj a patchwork::01 dog-bed::05 stitched out of old textiles::03 with a Labrador puppy sitting on the bed, the setting is a person's home with wooden floor panels --style raw",
          },
        ],
        [
          {
            url: 'https://media.discordapp.net/attachments/1159555297464037459/1162075214725779536/celerei_a_patchwork_ea21dfe4-7795-46e6-a730-a2ab236779d9.png?ex=65e0bae1&is=65ce45e1&hm=f51d96f7bf921b39aab73f4fd3f9e4ef719d4fd7d6a5ba5bf8b0382083d3041e&=&format=webp&quality=lossless',
            alt: '/mj a patchwork::0.8 dog-bed::05 stitched::0.1 out of mismatched textiles::0.8 with a Labrador puppy sitting on the dog-bed. The dog-bed has some loose threads --style raw',
          },
          {
            url: 'https://media.discordapp.net/attachments/1159555297464037459/1162161750301495387/garethbracewell_a_patchwork_b6a0e70d-ba0c-45e5-8793-d3b76164a038.png?ex=65e10b79&is=65ce9679&hm=02f34d1458fa5e74e3535a04e6f97f95f29f9949adcbfa8cd6f305587eed4c4e&=&format=webp&quality=lossless',
            alt: "/mja patchwork::01 dog-bed::05 stitched out of old textiles::03 with a Labrador puppy sitting on the bed, the setting is a person's home with wooden floor panels",
          },
          {
            url: 'https://media.discordapp.net/attachments/1159555297464037459/1162050868863062156/celerei_a_patchwork_4a42e66e-b2fa-42ba-affd-648eee76017a.png?ex=65e0a434&is=65ce2f34&hm=75c75781a22fdf0fccd425475b2940041ec7ce9f3fdb54290d21380500217f62&=&format=webp&quality=lossless',
            alt: "/mj a patchwork::0.6 dog-bed::05 stitched out of old jeans::0.8 with a Labrador puppy sitting on the bed, the setting is a person's home with wooden floor panels, the dog-bed is old::07 --style raw",
          },
          {
            url: 'https://media.discordapp.net/attachments/1159555297464037459/1162050272730820790/celerei_a_patchwork_0b430659-0c82-46a5-8215-25611e5f75c7.png?ex=65e0a3a6&is=65ce2ea6&hm=55f017f2f857acc53b1ab70d2548cf63625b41a0e7550a3408c35f7a94b91c7e&=&format=webp&quality=lossless',
            alt: "/mj a patchwork::01 dog-bed::05 stitched out of old jeans::0.8 with a Labrador puppy sitting on the bed, the setting is a person's home with wooden floor panels --style raw",
          },
        ],
        [
          {
            url: 'https://media.discordapp.net/attachments/1159555297464037459/1162353390890795018/garethbracewell_dog_in_laundry_basket_in_well_lit_room_happy_lo_0b3f8ee2-9794-42f3-84fb-9ec3f34f5b6b.png?ex=65e1bdf3&is=65cf48f3&hm=7ba73e69d5694b1aef430496cbfca52eb1851253a0328fc5d69e507a755eb157&=&format=webp&quality=lossless',
            alt: '/mj dog in laundry basket in well lit room happy looking dog with owner in background --style raw',
          },
          {
            url: 'https://media.discordapp.net/attachments/1159555297464037459/1162353710857470054/garethbracewell_content_looking_doog_in_a_pile_of_clothes_in_we_c109f7ba-a788-45c6-8614-2a6b0179f6ff.png?ex=65e1be40&is=65cf4940&hm=7583e9a9be6316626b953108b3172d970f9f462951889beb3cb09bd5e3f03011&=&format=webp&quality=lossless',
            alt: '/mj content looking doog in a pile of clothes in well lit room smelling clothes with owner in background --style raw',
          },
          {
            url: 'https://media.discordapp.net/attachments/1159555297464037459/1162347107202629672/celerei_a_person_with_their_dog_._The_dog_is_sitting_on_a_patch_ec005bca-e57b-4cd6-9c3d-093f263a9613.png?ex=65e1b819&is=65cf4319&hm=1e7fa23245548941bfb21dab0d4ea151b66a73e99901a726fdb1652c7e3bd913&=&format=webp&quality=lossless',
            alt: '/mj a person with their dog . The dog is sitting on a patchwork::1.1 old textile::0.6 small dog-bed::0.8. The pet-owner and the dog is smiling at the photographer --style raw',
          },
          {
            url: 'https://media.discordapp.net/attachments/1159555297464037459/1162048268038045726/celerei_a_patchwork_6f268321-6d66-49d3-b675-b484598f5741.png?ex=65e0a1c8&is=65ce2cc8&hm=bc0263abc7c92d56e01e144be6e4b54abf767c58895b8a0971c1bc1bdb62b3a0&=&format=webp&quality=lossless',
            alt: "/mj a patchwork::01 dog-bed::05 stitched out of old::02 jeans::03 with a puppy sitting on the bed, the setting is a person's home with wooden floor panels --style raw",
          },
        ],
        [
          {
            url: 'https://media.discordapp.net/attachments/1159555297464037459/1162158212213133414/garethbracewell_person_donating_clothes_4a1cd900-6b91-47b5-a065-eb05c1f214a1.png?ex=65e1082d&is=65ce932d&hm=577ad8e45b44e88154ff454a8b60c9b22594c525f1659f016a1b9d28d0148d4c&=&format=webp&quality=lossless',
            alt: '/mj person donating clothes',
          },
          {
            url: 'https://media.discordapp.net/attachments/1159555297464037459/1162182704310255726/garethbracewell_clothing_donation_box_outside_with_person_who_w_3b40adac-2213-482b-9bcc-fa8641e75526.png?ex=65e11efd&is=65cea9fd&hm=de6fc6da9fba4a56562affe8cfabc0d2e433655840e0272580fc8a6433432821&=&format=webp&quality=lossless',
            alt: '/mj clothing donation box outside with person who was walking dog putting clothes into it --style raw',
          },
          {
            url: 'https://media.discordapp.net/attachments/1159555297464037459/1162352985028960256/garethbracewell_person_sewing_a_quilt_in_a_pet_store_6cde7f80-a3cf-42f4-a47f-3a0ad499d776.png?ex=65e1bd93&is=65cf4893&hm=0cc6fa9345829521618ffb92838ea358154db87b89fa614ae91ef28b3dc5d815&=&format=webp&quality=lossless',
            alt: '/mj person sewing a quilt in a pet store --style raw',
          },
          {
            url: 'https://media.discordapp.net/attachments/1159555297464037459/1162344775127670894/garethbracewell_bag_of_clothes_on_industrial_scale_with_touch_s_98431cb9-5649-4c8b-ad8d-6928c055d881.png?ex=65e1b5ed&is=65cf40ed&hm=3c375f1c541f609a692f44e21d1dd29815b15b6b135659c52f79c3eba9f8775f&=&format=webp&quality=lossless',
            alt: '/mj https://s.mj.run/z_4ntCAAGoI bag of clothes on industrial scale with touch screen interface, in large open pet store room with dog beds and person looking satisfied at the touch screen and a bag of clothes on the scale --style raw',
          },
        ],
      ]}
    ></project-page>`;
  }
}
