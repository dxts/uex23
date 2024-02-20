import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../project-page.js';

@customElement('analogy-page')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class AnalogyPage extends LitElement {
  render() {
    return html`<project-page
      .text=${{
        title: 'Analogy',
        body: [
          `In this project, we drew inspiration from the software engineering domain,
          specifically the practice of contextual inquiry and focus groups. We adapted these methodologies to the field of architecture,
          recognizing the importance of early user involvement in aligning design prototypes with user needs.`,
          `In the realm of architecture, traditional techniques like small physical models lack detail,
          while large-scale models are costly and challenging to modify. To address these limitations,
          we leveraged AR/VR technology to provide immersive, detailed simulations of architectural designs.`,
          `AR/VR models offer real-time exploration and iteration, bridging the gap between clients and architects.
          Clients can experience and interact with spaces before construction, articulating feedback more clearly,
          while architects can promptly adjust designs, fostering alignment and satisfaction throughout the design process.`,
          `By embedding designers directly into users' environments, we ensured that architectural designs were guided
          by real-world usage and expectations from the outset. This approach will minimise the need for late-stage modifications,
          optimizing time and resources.`,
        ],
      }}
      .imageGrid=${[
         [
          {
            url: "https://media.discordapp.net/attachments/1163469105806975078/1164936654151233536/planet5298_table_ronde_architects_with_plans_dc42c636-8321-4544-9353-58f8f74de1c1.png?ex=65e1e94d&is=65cf744d&hm=fd973b8646e583e72f54e07506b0cbc507768443b7fa76634f196ed8bc5f8670&=&format=webp&quality=lossless",
            alt: "/mj table ronde architects with plans --style raw --s 50",
          },
          {
            url: "https://media.discordapp.net/attachments/1163469105806975078/1164936712166834226/planet5298_table_ronde_architects_with_plans_43a80ea7-542b-40a9-9969-0566be6fb556.png?ex=65e1e95b&is=65cf745b&hm=4847fedd9fbe8711169e0e09e96a883dcf543c44a1f88fad626ae364e58809e5&=&format=webp&quality=lossless",
            alt: "/mj table ronde architects with plans --style raw --s 50",
          },
          {
            url: "https://media.discordapp.net/attachments/1163469105806975078/1164937598049984532/planet5298_add_architects_discussing_c4bf0915-b699-4dbe-bc13-a67fc343aae5.png?ex=65e1ea2e&is=65cf752e&hm=23638b374d04130402d38d077e6d88bb92993f2723bb9c89ee6605b69ac7c11b&=&format=webp&quality=lossless",
            alt: "/mj table ronde achitects with plans with white board, with architects in discussion, with a graph in the background --style raw --s 50",
          },
          {
            url: "https://media.discordapp.net/attachments/1163469105806975078/1164937850924580874/planet5298_add_architects_discussing_9eaa22e0-1ed4-4522-a62d-36d3af3cef5c.png?ex=65e1ea6b&is=65cf756b&hm=252e4a29985e381da47722c31c5f80402916a3a9390c58fa0c84b3c12040e10e&=&format=webp&quality=lossless",
            alt: "/mj table ronde achitects with plans with white board, with architects in discussion, with a graph in the background --style raw --s 50",
          },
        ],
        [
          {
            url: "https://media.discordapp.net/attachments/1163469105806975078/1164926735716974662/planet5298_Virtual_Reality_testing_of_a_random_person_of_a_Rend_35045358-7842-4a98-929a-f65a4ac83d33.png?ex=65e1e011&is=65cf6b11&hm=74840b05c8fc753c88670ade915892db71ec5b4fbfa1e7d6bf09c50e579c8b60&=&format=webp&quality=lossless",
            alt: "/mj https://s.mj.run/6PiB3f4c5T8 Virtual Reality testing of a random person of a Render model from an architect --style raw --s 50",
          },
          {
            url: "https://media.discordapp.net/attachments/1163469105806975078/1164927020392779926/planet5298_Virtual_Reality_testing_of_a_random_person_of_a_Rend_aae16b98-634c-485a-ae11-b05557cf9087.png?ex=65e1e054&is=65cf6b54&hm=63cbfacdc7d22fa6ac5fca274ccce70fedb49c3a645a2d7fd7cd706754eee5ce&=&format=webp&quality=lossless",
            alt: "/mj https://s.mj.run/6PiB3f4c5T8 Virtual Reality testing of a random person of a Render model from an architect --style raw --s 50",
          },
          {
            url: "https://media.discordapp.net/attachments/1163469105806975078/1164927805805559878/planet5298_Virtual_Reality_testing_of_a_random_person_of_a_Rend_9d85ffde-354a-4376-ae36-c1afce5f6211.png?ex=65e1e110&is=65cf6c10&hm=f8171054eff597f0e7ce390240f26fee9b2bc2c74d81346ba255117bc29706e1&=&format=webp&quality=lossless",
            alt: "/mj https://s.mj.run/6PiB3f4c5T8 Virtual Reality testing of a random person of a Render model from an architect --style raw --s 50",
          },
          {
            url: "https://media.discordapp.net/attachments/1163469105806975078/1164928065634308186/planet5298_Virtual_Reality_testing_of_a_random_person_of_a_Rend_e04ad514-9947-4423-ae1c-bb48d51e4822.png?ex=65e1e14e&is=65cf6c4e&hm=03d72c9cf8a412038bfed7c79692650fa6aeae3052ae3eeab1e4c67c10acfbaf&=&format=webp&quality=lossless",
            alt: "/mj https://s.mj.run/6PiB3f4c5T8 Virtual Reality testing of a random person of a Render model from an architect --style raw --s 50",
          },
        ],
       [
          {
            url: "https://media.discordapp.net/attachments/1180134288210018314/1209460909567643699/file-CJeAt3mqN2XHzPqHhgrNPK1R.png?ex=65e7013f&is=65d48c3f&hm=c76ec9f1eaaaceac84b7dc3c16831cf4dbe2da167f951e917638ce4eb00dd084&=&format=webp&quality=lossless",
            alt: "/de Illustration of an architecture plan modeling software interface. The main workspace shows a detailed floor plan, and a side panel lists various layers such as landscaping, HVAC, lighting, and foundation, each with a distinct color code.",
          },
          {
            url: "https://media.discordapp.net/attachments/1180134288210018314/1209461234399969330/file-KgDgaZ4VXXiTTOvSfnpbTXBd.png?ex=65e7018c&is=65d48c8c&hm=206760ca640b94e10766bc217c5e50bf6ed4a7377e94ed125d869643afd5e023&=&format=webp&quality=lossless",
            alt: "/de Render of an architectural modeling software on a screen. The primary space presents a single floor layout. Side by side, alternate versions of the plan spotlight validation stages including green building certification criteria, thermal comfort zones, and acoustic performance with sound wave visualizations.",
          },
          {
            url: "https://media.discordapp.net/attachments/1180134288210018314/1209461305615065159/file-VLQCvQ33m9hVAXdfRgQB28yd.png?ex=65e7019d&is=65d48c9d&hm=a78a4c905fa7b13084e50c435c65e10bdb1acac318e5c20d80d58f7806c26e60&=&format=webp&quality=lossless",
            alt: "/mj Photo of a computer screen displaying an architecture plan modeling software focused on a single floor. The side panel lists various validation layers like heat distribution, insulation, structural stress, and ventilation, each with distinct visual indicators and color codes.",
          },
          {
            url: "https://media.discordapp.net/attachments/1180134288210018314/1209461388339318794/file-5WxZ0AfAWVrlIQm2beMGjPsO.png?ex=65e701b1&is=65d48cb1&hm=ec85eff458f525f335651333df58793d817b6782cb5a489ca8e564ef4576f70f&=&format=webp&quality=lossless",
            alt: "/de Vector image of a modern architecture plan modeling software UI. The central area presents a complex building design, while a sidebar offers layer options like doors, windows, furnishings, and utilities, each with a checkbox to toggle visibility.",
          },
        ],[
          {
            url: "https://media.discordapp.net/attachments/1180134288210018314/1209462468452159508/file-DuIKEp2NYK6OUngwrJ9lQeLU.png?ex=65e702b3&is=65d48db3&hm=267c250e07509b81c9e224b61197eeae24b2da00e8fa428be5b67924c11ccba3&=&format=webp&quality=lossless",
            alt: "/de Photo of a detailed architectural model of a modern house placed on a plain white table. The model showcases the exterior design, with clear windows, a flat roof, and a minimalist facade.",
          },
          {
            url: "https://media.discordapp.net/attachments/1180134288210018314/1209462469068853278/file-8KG1EvUIiZ8c8lDDnL1L3dbQ.png?ex=65e702b3&is=65d48db3&hm=4185d985de0c7c6bfc950fc8b8fdf7526328c21e5c47dee53acfa738e6deeecb&=&format=webp&quality=lossless",
            alt: "/de Illustration of an architectural model of a contemporary house with a wooden facade, large glass windows, and a spacious balcony, placed on a neutral background.",
          },
          {
            url: "https://media.discordapp.net/attachments/1180134288210018314/1209462521594118174/file-RttwiV9ttcG2Yr9xUqWjuScJ.png?ex=65e702bf&is=65d48dbf&hm=194bb3dec67246426f2513e591d6f4b936b8da1da20d54a78cd2d2a2864a733e&=&format=webp&quality=lossless",
            alt: "/de Photo of the contemporary house from the previous images, situated in a lively neighborhood with other modern homes. The scene is set at night, with street lights casting a warm glow on the wet streets. The house's wooden facade and large glass windows are illuminated by both interior lights and the ambient street lighting.",
          },
          {
            url: "https://media.discordapp.net/attachments/1180134288210018314/1209462522520928256/file-iWGCcIXqORITmAT1iSReUUif.png?ex=65e702c0&is=65d48dc0&hm=390c8f0bcf2cd05ee88b75ee2c347c667cdc2c5c382c93718dcdd7dca440063f&=&format=webp&quality=lossless",
            alt: "/de Illustration of the contemporary house with a wooden facade and large glass windows, positioned in a neighborhood with tree-lined streets. The night atmosphere is serene, with street lights reflecting on the rain-soaked streets and nearby houses also glowing from their interior lights.",
          },
        ],
      ]}
    ></project-page>`;
  }
}
