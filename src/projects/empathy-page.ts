import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../project-page.js';

@customElement('empathy-page')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class EmpathyPage extends LitElement {
  render() {
    return html`<project-page
      .text=${{
        title: 'Empathy',
        body: [
          `In a city like Lausanne, the bicyclist faces formidable challenges as they grapple with relentless uphill climbs.`,
          `The sensory experience is a blend of the smell of hot asphalt and the constant urban hum of car engines,
          but also the bustling street life and the birds in the trees causing the rustling of leaves.
          `,
          `There is the draining summer heat and the tired legs fighting an uphill battle.
          But also the fleeting coolness of sweat evaporating in the wind, and the joyful gliding downhill.`,
          `Navigating intersections and steep slopes requires determination, but it can also be a barrier
          that prevents many from forging a deeper connection with the city's landscape.`,
          `The bustling centre of the city in Flon has a unique multi-storey structure.
          Open-air lifts and escalators provide mechanical assistance to the people navigating the area,
          providing an alternative to walking up and down multiple floors of stairs, multiple times a day.
          `,
          `We extended this infrastructure to also accommodate cyclists providing them the same assistance.
          And often also providing shortcuts to long winding roads.`,
        ],
      }}
      .imageGrid=${[
        [
          {
            url: 'https://media.discordapp.net/attachments/1154767632738824202/1154794840945594448/arthur_ruhtra__young_adult_in_his_late_20s_standing_next_to_hi_beb773da-fe42-4c21-911f-14c2a864168d.png?ex=65e1ee01&is=65cf7901&hm=2a8a70baa0dda662a12b84170197d3fb76c2221ba8e015f90c071181eeb3dda2&=&format=webp&quality=lossless',
            alt: '/mj young adult in his late 20s standing next to his bike in lausanne',
          },
          {
            url: 'https://media.discordapp.net/attachments/1154767632738824202/1154796899287716012/croadi_biking_towards_the_city_centre_on_a_steep_hill_a_lot_of__f4f26e74-185d-4c49-b8aa-3c36c9fcc07d.png?ex=65e1efeb&is=65cf7aeb&hm=fd40109488f5f0e2f3deecb8a75623f7ae1ccf43e47f22dfe4f9b71c63ab3158&=&format=webp&quality=lossless',
            alt: '/mj https://s.mj.run/ElVC5dzFMwo biking towards the city centre on a steep hill, a lot of traffic',
          },

          {
            url: 'https://media.discordapp.net/attachments/1154767632738824202/1154799491518562475/croadi_biking_towards_the_city_centre_on_a_steep_hill_crossroad_9640df0e-03e2-4e4e-9174-307b7141e9bc.png?ex=65e1f255&is=65cf7d55&hm=4246f9f50c141969423a489d405763aebf09751ac6531dcad1dcaea69570802c&=&format=webp&quality=lossless',
            alt: '/mj https://s.mj.run/ElVC5dzFMwo biking towards the city centre on a steep hill, crossroads with a lot of traffic, diagonal front view, the person is tired and sweaty and unhappy',
          },
          {
            url: 'https://media.discordapp.net/attachments/1154767632738824202/1154799553988538429/croadi_biking_towards_the_city_centre_on_a_steep_hill_crossroad_abcc243b-7876-4e1e-aa32-f61085033d92.png?ex=65e1f264&is=65cf7d64&hm=ec5f29e2da1af0b2d69e88de3cdd0961863bd2697058df047cb9587de3bf1b65&=&format=webp&quality=lossless',
            alt: '/mj https://s.mj.run/ElVC5dzFMwo biking towards the city centre on a steep hill, crossroads with a lot of traffic, diagonal front view, the person is tired and sweaty and unhappy',
          },
        ],
        [
          {
            url: 'https://media.discordapp.net/attachments/1154767632738824202/1157270764152688730/arthur_ruhtra__this_image_translated_in_a_busy_city_street_wit_61acab2e-4955-49e5-8b17-65cd002c1945.png?ex=65e1b563&is=65cf4063&hm=14c9ffbd21627d7bb173f980e769eb88702c77aeb2ef096ac490fe331d40d531&=&format=webp&quality=lossless',
            alt: '/mj https://s.mj.run/JDxRuIZJ7zk this image translated in a busy city street with bikes intead of ski --no snow',
          },
          {
            url: 'https://media.discordapp.net/attachments/1154767632738824202/1157267931047137280/arthur_ruhtra__Lausanne_switzerland_busy_street_on_a_steep_slo_b82650cb-45fc-453d-8134-4c15cd6affdf.png?ex=65e1b2bf&is=65cf3dbf&hm=c80f2deaf8b3560fe897c56c658bfb493d96b935bd875c3a0f8375b667e5780e&=&format=webp&quality=lossless',
            alt: '/mj Lausanne, switzerland, busy street on a steep slope, bikers using a ski lift to climb the street',
          },
          {
            url: 'https://media.discordapp.net/attachments/1154767632738824202/1157267949636292648/arthur_ruhtra__Lausanne_switzerland_busy_street_on_a_steep_slo_d6af1312-ba10-41e8-a399-8830db17668b.png?ex=65e1b2c4&is=65cf3dc4&hm=ec086e85761b4860712ed2fc0c23856009fc59652a7f6f6492cfcb607d34ea74&=&format=webp&quality=lossless',
            alt: '/mj Lausanne, switzerland, busy street on a steep slope, bikers using a ski lift to climb the street',
          },

          {
            url: 'https://media.discordapp.net/attachments/1154767632738824202/1157273399387754496/arthur_ruhtra__a_cable_draging_a_bicyclist_uphill_lausanne_cit_bc94df84-4fa2-4483-b159-bd6ee41f43e4.png?ex=65e1b7d7&is=65cf42d7&hm=db7b70ff6a948460a3b3ae6dd88802bbc831a185cbbb9957bd063abbefb25c1d&=&format=webp&quality=lossless',
            alt: '/mj a cable draging a bicyclist uphill, lausanne city, sunny, trees',
          },
        ],
        [
          {
            url: 'https://media.discordapp.net/attachments/1154767632738824202/1157281802977804379/croadi_electrial_ramp_for_going_uphill_on_bikes_in_lausanne_5a99b090-5228-44af-885b-5fc43010965a.png?ex=65e1bfab&is=65cf4aab&hm=62dfba96740c0b8b8cfdbe3acf670b3055c2adbdca5d6a0e13dd4329553c56a3&=&format=webp&quality=lossless',
            alt: '/mj electrial ramp for going uphill on bikes in lausanne',
          },
          {
            url: 'https://media.discordapp.net/attachments/1154767632738824202/1159132975930282014/croadi_electrical_moving_walkway_in_a_steep_street_in_lausanne__593401fb-1c04-46dc-b353-3703175bb323.png?ex=65df4135&is=65cccc35&hm=91fbbd4f51ea7c8c42fefd2c09e0e808a8ab0f0ce9ba3c4dfe629949ec6b4802&=&format=webp&quality=lossless',
            alt: '/mj electrical moving walkway in a steep street in lausanne for cyclists and parents with strollers and elderly, many people walking next to it on the cobblestone street',
          },
          {
            url: 'https://media.discordapp.net/attachments/1154767632738824202/1157282017306755102/croadi_electrial_ramp_for_going_uphill_on_bikes_in_lausanne_b4d488de-ed49-45a1-963a-99712b5a3a7b.png?ex=65e1bfde&is=65cf4ade&hm=e6da52610070addcdac9570ca9936225c08c72c7445653df4597e481692a28f3&=&format=webp&quality=lossless',
            alt: '/mj electrial ramp for going uphill on bikes in lausanne',
          },
          {
            url: 'https://media.discordapp.net/attachments/1154767632738824202/1159137423448625162/croadi_bicycles_on_electrical_moving_walkway_in_a_steep_street__3f211170-aee0-4a4a-8baf-8f761a4b546a.png?ex=65df4559&is=65ccd059&hm=806714fc48b0f52c1b83c419dea2e48f1c3eacf5ae10065ecf210337bb72c98f&=&format=webp&quality=lossless',
            alt: '/mj bicycles on electrical moving walkway in a steep street in lausanne, parents with strollers, many people walking next to it on the cobblestone street',
          },
        ],
        [
          {
            url: 'https://media.discordapp.net/attachments/1154767632738824202/1157287180885045268/croadi_big_platform_elevator_transporting_bike_c558aab2-3429-40ed-8891-b4973bb7d85c.png?ex=65e1c4ad&is=65cf4fad&hm=56e5425c0cbbe59438b3b74349c1d7ed35859cabcaa79f2faf35db85b85bb0c7&=&format=webp&quality=lossless',
            alt: '/mj https://s.mj.run/a-txON2_hNY big platform elevator transporting bike --no train',
          },
          {
            url: 'https://media.discordapp.net/attachments/1154767632738824202/1159420964166185050/arthur_ruhtra__Lausanne_big_platform_elevator_transporting_bik_7bd20f73-271e-4e64-bf0f-60bcc3faf63c.png?ex=65e04d6a&is=65cdd86a&hm=292041574200743ce3d279d087fb23b8304f175f54b729dd59983f87848337cf&=&format=webp&quality=lossless',
            alt: '/mj https://s.mj.run/1ZkGceWNBwM Lausanne, big platform elevator transporting bike --no train',
          },
          {
            url: 'https://media.discordapp.net/attachments/1154767632738824202/1159422410899083335/arthur_ruhtra__Lausanne_big_elevator_transporting_bikes_and_pe_fe2aef01-e141-40ef-9d50-6fcf02e3f526.png?ex=65e04ec3&is=65cdd9c3&hm=b4bc40c62081d02a40cac4ab36152af0f805f22ec15561fb5820528358a5c42a&=&format=webp&quality=lossless',
            alt: '/mj https://s.mj.run/1ZkGceWNBwM Lausanne, big elevator transporting bikes and people, different urban levels --no train',
          },
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1209083994164170752/image.png?ex=65e5a237&is=65d32d37&hm=f1f53fbab91bbb08e691bfe179dfd0e435f832236fe42a22a24cf29fab307611&=&format=webp&quality=lossless',
            alt: '/mj https://s.mj.run/a-txON2_hNY bicycle elevator inter-connecting multiple streets at different levels, in a european city center',
          },
        ],
      ]}
    ></project-page>`;
  }
}
