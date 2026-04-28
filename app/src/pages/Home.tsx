import { Link } from 'react-router-dom'
import { GAMES } from '../data/games'
import { getScene } from '../components/scenes'
import { PxArrow, PxBook, PxController, PxFlame, PxSpark, PxStar, PxUsers } from '../components/PxIcon'
import { useLang, useT } from '../i18n/I18n'

/* ============================================================
   HERO STAGE — Pixel-art morning over Almaty:
   sunrise alpenglow on the Trans-Ili Alatau, the Independence
   Monument (winged snow leopard + Golden Warrior of Issyk),
   blossoming apple tree and the city skyline.
   ============================================================ */
const HeroStage = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" shapeRendering="crispEdges" preserveAspectRatio="xMidYMid slice">
    {/* ========== MORNING SKY (cool top → warm horizon) ========== */}
    <rect x="0" y="0"  width="64" height="2" fill="#41a6f6" />
    <rect x="0" y="2"  width="64" height="2" fill="#5fb6f8" />
    <rect x="0" y="4"  width="64" height="2" fill="#73eff7" />
    <rect x="0" y="6"  width="64" height="2" fill="#a8e6f4" />
    <rect x="0" y="8"  width="64" height="2" fill="#f4b4c5" />
    <rect x="0" y="10" width="64" height="2" fill="#ffcd75" />
    <rect x="0" y="12" width="64" height="2" fill="#ef7d57" />

    {/* ===== Sun (bright disc with corona) ===== */}
    <g fill="#ffcd75" opacity="0.4">
      <rect x="44" y="3"  width="11" height="11" />
    </g>
    <g fill="#ffcd75">
      <rect x="46" y="4"  width="7" height="9" />
      <rect x="45" y="6"  width="9" height="5" />
      <rect x="47" y="3"  width="5" height="11" />
    </g>
    <g fill="#f4f0e6">
      <rect x="48" y="5"  width="3" height="7" />
      <rect x="47" y="7"  width="5" height="3" />
    </g>
    {/* sun rays / sparkle */}
    <g fill="#ffcd75" opacity="0.7">
      <rect x="43" y="8"  width="1" height="1" />
      <rect x="55" y="8"  width="1" height="1" />
      <rect x="49" y="1"  width="1" height="1" />
      <rect x="49" y="15" width="1" height="1" />
    </g>

    {/* ===== Soft morning clouds ===== */}
    <g fill="#f4f0e6" opacity="0.85">
      <rect x="3"  y="3"  width="6" height="1" />
      <rect x="2"  y="4"  width="8" height="1" />
      <rect x="4"  y="5"  width="5" height="1" />

      <rect x="14" y="6"  width="7" height="1" />
      <rect x="13" y="7"  width="9" height="1" />

      <rect x="32" y="2"  width="6" height="1" />
      <rect x="31" y="3"  width="8" height="1" />
      <rect x="33" y="4"  width="5" height="1" />

      <rect x="56" y="2"  width="5" height="1" />
      <rect x="55" y="3"  width="7" height="1" />
    </g>

    {/* ========== TRANS-ILI ALATAU ========== */}
    {/* Far ridge — distant haze layer (cool lavender) */}
    <g fill="#5d275d" opacity="0.55">
      <rect x="0"  y="14" width="64" height="2" />
      <rect x="6"  y="13" width="6"  height="1" />
      <rect x="20" y="12" width="6"  height="2" />
      <rect x="32" y="11" width="8"  height="3" />
      <rect x="34" y="10" width="4"  height="1" />
      <rect x="44" y="13" width="6"  height="1" />
      <rect x="56" y="12" width="6"  height="2" />
    </g>

    {/* Main range (rock face, cool blue-grey) */}
    <g fill="#5e5871">
      <rect x="0"  y="16" width="64" height="6" />
      {/* peak silhouettes rising */}
      <rect x="3"  y="15" width="5"  height="1" />
      <rect x="5"  y="14" width="2"  height="1" />
      <rect x="6"  y="13" width="1"  height="1" />

      <rect x="11" y="15" width="6"  height="1" />
      <rect x="13" y="13" width="3"  height="2" />
      <rect x="14" y="12" width="2"  height="1" />

      <rect x="20" y="15" width="4"  height="1" />
      <rect x="21" y="13" width="2"  height="2" />
      <rect x="22" y="12" width="1"  height="1" />

      {/* Talgar — central giant */}
      <rect x="26" y="15" width="11" height="1" />
      <rect x="27" y="13" width="9"  height="2" />
      <rect x="28" y="11" width="7"  height="2" />
      <rect x="30" y="9"  width="4"  height="2" />
      <rect x="31" y="7"  width="2"  height="2" />
      <rect x="31" y="6"  width="1"  height="1" />

      <rect x="38" y="15" width="4"  height="1" />
      <rect x="39" y="13" width="2"  height="2" />
      <rect x="40" y="12" width="1"  height="1" />

      <rect x="44" y="15" width="6"  height="1" />
      <rect x="45" y="13" width="3"  height="2" />
      <rect x="46" y="12" width="1"  height="1" />

      <rect x="54" y="15" width="6"  height="1" />
      <rect x="56" y="13" width="3"  height="2" />
      <rect x="57" y="12" width="1"  height="1" />
    </g>

    {/* East face lit by sunrise (warm peach highlight) */}
    <g fill="#ef7d57" opacity="0.55">
      <rect x="6"  y="15" width="2" height="1" />
      <rect x="15" y="13" width="2" height="2" />
      <rect x="16" y="14" width="1" height="1" />
      <rect x="22" y="13" width="2" height="2" />
      <rect x="33" y="11" width="3" height="2" />
      <rect x="33" y="9"  width="2" height="2" />
      <rect x="32" y="7"  width="1" height="2" />
      <rect x="34" y="13" width="3" height="2" />
      <rect x="40" y="13" width="2" height="2" />
      <rect x="47" y="13" width="2" height="2" />
      <rect x="58" y="13" width="2" height="2" />
    </g>

    {/* Snow caps with pink alpenglow */}
    <g fill="#f4b4c5">
      <rect x="6"  y="13" width="1" height="1" />
      <rect x="14" y="12" width="2" height="1" />
      <rect x="13" y="13" width="3" height="1" />
      <rect x="22" y="12" width="1" height="1" />
      <rect x="21" y="13" width="2" height="1" />
      <rect x="31" y="6"  width="1" height="1" />
      <rect x="31" y="7"  width="2" height="1" />
      <rect x="30" y="9"  width="4" height="1" />
      <rect x="28" y="11" width="7" height="1" />
      <rect x="27" y="13" width="9" height="1" />
      <rect x="40" y="12" width="1" height="1" />
      <rect x="39" y="13" width="2" height="1" />
      <rect x="46" y="12" width="1" height="1" />
      <rect x="45" y="13" width="3" height="1" />
      <rect x="57" y="12" width="1" height="1" />
      <rect x="56" y="13" width="3" height="1" />
    </g>
    {/* Pure snow highlights (sun side) */}
    <g fill="#f4f0e6">
      <rect x="15" y="12" width="1" height="1" />
      <rect x="32" y="6"  width="1" height="1" />
      <rect x="32" y="8"  width="1" height="1" />
      <rect x="33" y="10" width="1" height="1" />
      <rect x="34" y="12" width="1" height="1" />
      <rect x="35" y="14" width="1" height="1" />
    </g>
    {/* Shadow side (blue) */}
    <g fill="#41a6f6" opacity="0.4">
      <rect x="29" y="9"  width="1" height="2" />
      <rect x="28" y="11" width="1" height="2" />
      <rect x="13" y="14" width="1" height="1" />
    </g>

    {/* ========== ALMATY SKYLINE ========== */}
    {/* Foothills (Kok-Tobe / city base) */}
    <rect x="0"  y="22" width="64" height="2" fill="#257179" />
    <rect x="0"  y="22" width="64" height="1" fill="#38b764" opacity="0.6" />

    {/* Building silhouettes — sunlit warm side, shaded cool side */}
    {/* Hotel Kazakhstan (curved tall hotel) */}
    <g>
      <rect x="14" y="18" width="3" height="6" fill="#5e5871" />
      <rect x="13" y="19" width="1" height="5" fill="#5e5871" />
      <rect x="17" y="19" width="1" height="5" fill="#5e5871" />
      {/* sunlit edge */}
      <rect x="17" y="19" width="1" height="5" fill="#ef7d57" />
      <rect x="14" y="17" width="3" height="1" fill="#ef7d57" />
      <rect x="15" y="16" width="1" height="1" fill="#ffcd75" /> {/* crown */}
    </g>

    {/* Esentai Tower (slim modern skyscraper) */}
    <g>
      <rect x="22" y="19" width="2" height="5" fill="#5e5871" />
      <rect x="22" y="19" width="1" height="5" fill="#73eff7" /> {/* glass */}
      <rect x="22" y="17" width="2" height="2" fill="#5e5871" />
      <rect x="22" y="17" width="1" height="2" fill="#a8e6f4" />
      <rect x="22" y="16" width="1" height="1" fill="#5e5871" />
    </g>

    {/* Mid-rise blocks */}
    <g fill="#5e5871">
      <rect x="2"  y="21" width="3" height="3" />
      <rect x="5"  y="22" width="2" height="2" />
      <rect x="7"  y="20" width="2" height="4" />
      <rect x="9"  y="22" width="3" height="2" />
      <rect x="12" y="21" width="2" height="3" />
      <rect x="18" y="20" width="2" height="4" />
      <rect x="20" y="22" width="2" height="2" />
      <rect x="25" y="20" width="3" height="4" />
      <rect x="40" y="20" width="2" height="4" />
      <rect x="42" y="21" width="3" height="3" />
      <rect x="45" y="22" width="2" height="2" />
      <rect x="47" y="20" width="2" height="4" />
      <rect x="49" y="21" width="3" height="3" />
      <rect x="52" y="22" width="2" height="2" />
      <rect x="54" y="21" width="3" height="3" />
      <rect x="57" y="20" width="2" height="4" />
      <rect x="59" y="22" width="3" height="2" />
    </g>

    {/* Sunlit east edges (warm side) */}
    <g fill="#ef7d57">
      <rect x="4"  y="21" width="1" height="3" />
      <rect x="8"  y="20" width="1" height="4" />
      <rect x="11" y="22" width="1" height="2" />
      <rect x="13" y="21" width="1" height="3" />
      <rect x="19" y="20" width="1" height="4" />
      <rect x="27" y="20" width="1" height="4" />
      <rect x="41" y="20" width="1" height="4" />
      <rect x="44" y="21" width="1" height="3" />
      <rect x="48" y="20" width="1" height="4" />
      <rect x="51" y="21" width="1" height="3" />
      <rect x="56" y="21" width="1" height="3" />
      <rect x="58" y="20" width="1" height="4" />
      <rect x="61" y="22" width="1" height="2" />
    </g>

    {/* Kok-Tobe TV tower (tall slim antenna right of warrior) */}
    <g>
      <rect x="50" y="14" width="1" height="10" fill="#1a1c2c" />
      <rect x="49" y="18" width="3" height="1" fill="#1a1c2c" />
      <rect x="49" y="20" width="3" height="1" fill="#1a1c2c" />
      <rect x="50" y="13" width="1" height="1" fill="#b13e53" /> {/* red beacon */}
    </g>

    {/* A few lit windows (still on at sunrise) */}
    <g fill="#ffcd75" opacity="0.85">
      <rect x="14" y="20" width="1" height="1" />
      <rect x="16" y="22" width="1" height="1" />
      <rect x="22" y="20" width="1" height="1" />
      <rect x="22" y="22" width="1" height="1" />
      <rect x="26" y="22" width="1" height="1" />
      <rect x="42" y="22" width="1" height="1" />
      <rect x="50" y="22" width="1" height="1" />
      <rect x="55" y="22" width="1" height="1" />
    </g>

    {/* ========== FOREGROUND GROUND ========== */}
    {/* Park / Republic Square zone */}
    <rect x="0" y="24" width="64" height="2" fill="#38b764" />
    <rect x="0" y="26" width="64" height="3" fill="#a7f070" />
    <rect x="0" y="29" width="64" height="2" fill="#38b764" />
    <rect x="0" y="31" width="64" height="6" fill="#257179" />
    <rect x="0" y="37" width="64" height="27" fill="#38b764" />

    {/* Path / promenade */}
    <g fill="#e7d2bb">
      <rect x="0"  y="40" width="64" height="2" />
      <rect x="0"  y="39" width="64" height="1" fill="#ffcd75" opacity="0.7" />
    </g>
    {/* Path tiles */}
    <g fill="#5d275d" opacity="0.4">
      <rect x="2"  y="41" width="2" height="1" />
      <rect x="8"  y="41" width="2" height="1" />
      <rect x="14" y="41" width="2" height="1" />
      <rect x="20" y="41" width="2" height="1" />
      <rect x="48" y="41" width="2" height="1" />
      <rect x="54" y="41" width="2" height="1" />
      <rect x="60" y="41" width="2" height="1" />
    </g>

    {/* Grass tufts & flowers */}
    <g fill="#a7f070">
      <rect x="3"  y="44" width="2" height="1" />
      <rect x="9"  y="46" width="2" height="1" />
      <rect x="58" y="44" width="3" height="1" />
      <rect x="62" y="46" width="2" height="1" />
      <rect x="2"  y="50" width="2" height="1" />
      <rect x="60" y="50" width="3" height="1" />
      <rect x="5"  y="56" width="3" height="1" />
      <rect x="56" y="58" width="3" height="1" />
    </g>
    {/* Wildflowers */}
    <g fill="#f4b4c5">
      <rect x="6"  y="44" width="1" height="1" />
      <rect x="11" y="46" width="1" height="1" />
      <rect x="56" y="48" width="1" height="1" />
      <rect x="62" y="50" width="1" height="1" />
    </g>
    <g fill="#ffcd75">
      <rect x="14" y="46" width="1" height="1" />
      <rect x="59" y="44" width="1" height="1" />
      <rect x="3"  y="52" width="1" height="1" />
    </g>
    <g fill="#f4f0e6">
      <rect x="50" y="46" width="1" height="1" />
      <rect x="8"  y="48" width="1" height="1" />
    </g>

    {/* ========== BLOOMING APPLE TREE (Алма-Ата spring) ========== */}
    {/* Trunk */}
    <g fill="#5d275d">
      <rect x="6"  y="38" width="2" height="14" />
      <rect x="8"  y="42" width="2" height="2" /> {/* branch right */}
      <rect x="4"  y="40" width="2" height="2" /> {/* branch left */}
    </g>
    <rect x="6" y="52" width="2" height="1" fill="#1a1c2c" />
    {/* trunk highlight */}
    <rect x="7" y="38" width="1" height="14" fill="#b13e53" opacity="0.6" />

    {/* Foliage (round, dense) */}
    <g fill="#38b764">
      <rect x="2"  y="32" width="10" height="6" />
      <rect x="1"  y="33" width="1"  height="4" />
      <rect x="12" y="33" width="1"  height="4" />
      <rect x="3"  y="31" width="2"  height="1" />
      <rect x="6"  y="30" width="3"  height="1" />
      <rect x="8"  y="31" width="3"  height="1" />
    </g>
    <g fill="#a7f070">
      {/* sunlit highlight on east side */}
      <rect x="9"  y="32" width="3" height="2" />
      <rect x="11" y="34" width="2" height="2" />
      <rect x="9"  y="36" width="3" height="1" />
      <rect x="6"  y="33" width="1" height="1" />
    </g>
    {/* Apple blossoms (pink + white) */}
    <g fill="#f4b4c5">
      <rect x="3"  y="32" width="1" height="1" />
      <rect x="5"  y="34" width="1" height="1" />
      <rect x="7"  y="32" width="1" height="1" />
      <rect x="10" y="33" width="1" height="1" />
      <rect x="4"  y="35" width="1" height="1" />
      <rect x="11" y="36" width="1" height="1" />
      <rect x="2"  y="36" width="1" height="1" />
    </g>
    <g fill="#f4f0e6">
      <rect x="4"  y="33" width="1" height="1" />
      <rect x="8"  y="34" width="1" height="1" />
      <rect x="9"  y="35" width="1" height="1" />
      <rect x="3"  y="36" width="1" height="1" />
    </g>

    {/* Tree shadow on grass */}
    <g fill="#1a1c2c" opacity="0.18">
      <rect x="3"  y="52" width="9" height="2" />
    </g>

    {/* ========== INDEPENDENCE MONUMENT ========== */}
    {/* Marble stele (column) */}
    <g fill="#e7d2bb">
      <rect x="29" y="42" width="6" height="20" />
    </g>
    {/* Stele light/shadow */}
    <rect x="29" y="42" width="2" height="20" fill="#f4f0e6" />
    <rect x="33" y="42" width="2" height="20" fill="#b13e53" opacity="0.25" />
    <rect x="34" y="42" width="1" height="20" fill="#5d275d" opacity="0.35" />
    {/* Capital / base ornament rings */}
    <g fill="#5d275d">
      <rect x="28" y="41" width="8" height="1" />
      <rect x="28" y="44" width="8" height="1" />
    </g>
    <g fill="#ffcd75">
      <rect x="28" y="41" width="8" height="1" />
      <rect x="28" y="62" width="8" height="2" />
    </g>
    <g fill="#b13e53">
      <rect x="29" y="63" width="6" height="1" />
    </g>
    {/* Vertical etching */}
    <g fill="#5d275d" opacity="0.45">
      <rect x="30" y="46" width="1" height="14" />
      <rect x="33" y="46" width="1" height="14" />
    </g>

    {/* Pedestal stone base (broad) */}
    <g fill="#5e5871">
      <rect x="24" y="58" width="16" height="1" />
      <rect x="22" y="59" width="20" height="3" />
    </g>
    <rect x="22" y="59" width="20" height="1" fill="#bdbac6" />
    {/* Pedestal stamp (Independence date) */}
    <g fill="#1a1c2c">
      <rect x="29" y="60" width="1" height="1" />
      <rect x="31" y="60" width="1" height="1" />
      <rect x="33" y="60" width="1" height="1" />
    </g>

    {/* ========== WINGED SNOW LEOPARD on top of stele ========== */}
    {/* Wings spread */}
    <g fill="#f4f0e6">
      {/* Left wing */}
      <rect x="20" y="36" width="3" height="2" />
      <rect x="18" y="38" width="6" height="2" />
      <rect x="16" y="39" width="8" height="2" />
      {/* Right wing */}
      <rect x="41" y="36" width="3" height="2" />
      <rect x="40" y="38" width="6" height="2" />
      <rect x="40" y="39" width="8" height="2" />
    </g>
    {/* Wing feather lines */}
    <g fill="#bdbac6">
      <rect x="16" y="40" width="8" height="1" />
      <rect x="40" y="40" width="8" height="1" />
      <rect x="20" y="37" width="3" height="1" />
      <rect x="41" y="37" width="3" height="1" />
    </g>
    {/* Wing tips (curved) */}
    <g fill="#f4f0e6">
      <rect x="15" y="41" width="2" height="1" />
      <rect x="47" y="41" width="2" height="1" />
    </g>

    {/* Leopard body sitting on stele */}
    <g fill="#f4f0e6">
      <rect x="24" y="36" width="16" height="6" />
      <rect x="25" y="35" width="14" height="1" />
      {/* Head left */}
      <rect x="22" y="36" width="2" height="4" />
      <rect x="22" y="35" width="1" height="1" /> {/* ear */}
      <rect x="23" y="35" width="1" height="1" />
      {/* Head right */}
      <rect x="40" y="36" width="2" height="4" />
      <rect x="40" y="35" width="1" height="1" />
      <rect x="41" y="35" width="1" height="1" />
    </g>
    {/* Leopard underbelly */}
    <rect x="25" y="40" width="14" height="2" fill="#e7d2bb" />
    {/* Spots */}
    <g fill="#1a1c2c">
      <rect x="26" y="37" width="1" height="1" />
      <rect x="29" y="37" width="1" height="1" />
      <rect x="32" y="37" width="1" height="1" />
      <rect x="35" y="37" width="1" height="1" />
      <rect x="38" y="37" width="1" height="1" />
      <rect x="27" y="39" width="1" height="1" />
      <rect x="30" y="39" width="1" height="1" />
      <rect x="33" y="39" width="1" height="1" />
      <rect x="36" y="39" width="1" height="1" />
    </g>
    {/* Two leopard heads with green eyes */}
    <g fill="#a7f070">
      <rect x="22" y="37" width="1" height="1" />
      <rect x="41" y="37" width="1" height="1" />
    </g>
    <g fill="#1a1c2c">
      <rect x="23" y="38" width="1" height="1" /> {/* nose left */}
      <rect x="40" y="38" width="1" height="1" /> {/* nose right */}
    </g>

    {/* ========== ALTYN ADAM — GOLDEN WARRIOR ========== */}
    {/* Tall conical Saka kalpak with a feather (pointed silhouette) */}
    {/* Spike at the very top */}
    <rect x="31" y="11" width="1" height="2" fill="#b13e53" />
    {/* Small feather plume */}
    <g fill="#f4f0e6">
      <rect x="32" y="11" width="1" height="3" />
      <rect x="33" y="12" width="1" height="2" />
    </g>
    {/* Hat cone */}
    <g fill="#ffcd75">
      <rect x="30" y="13" width="2" height="1" />
      <rect x="29" y="14" width="4" height="1" />
      <rect x="28" y="15" width="6" height="1" />
      <rect x="28" y="16" width="6" height="1" />
      <rect x="27" y="17" width="8" height="1" />
      <rect x="27" y="18" width="8" height="2" />
    </g>
    {/* Hat decorative band (red + black) */}
    <rect x="27" y="19" width="8" height="1" fill="#b13e53" />
    <g fill="#0f1020">
      <rect x="28" y="19" width="1" height="1" />
      <rect x="31" y="19" width="1" height="1" />
      <rect x="34" y="19" width="1" height="1" />
    </g>
    {/* Hat shading (left side) */}
    <g fill="#ef7d57" opacity="0.6">
      <rect x="27" y="17" width="1" height="3" />
      <rect x="28" y="15" width="1" height="2" />
    </g>

    {/* Face */}
    <g fill="#e7d2bb">
      <rect x="29" y="20" width="4" height="3" />
      <rect x="30" y="23" width="2" height="1" />
    </g>
    {/* Hair under hat (dark) */}
    <rect x="29" y="20" width="4" height="1" fill="#1a1c2c" />
    {/* Eyes */}
    <rect x="29" y="21" width="1" height="1" fill="#1a1c2c" />
    <rect x="32" y="21" width="1" height="1" fill="#1a1c2c" />
    {/* Mouth */}
    <rect x="30" y="22" width="2" height="1" fill="#5d275d" />

    {/* Pauldrons */}
    <g fill="#ffcd75">
      <rect x="26" y="23" width="10" height="2" />
      <rect x="25" y="24" width="12" height="2" />
    </g>
    <g fill="#b13e53">
      <rect x="25" y="23" width="2" height="1" />
      <rect x="35" y="23" width="2" height="1" />
    </g>

    {/* Body armor — golden scales */}
    <g fill="#ffcd75">
      <rect x="26" y="26" width="10" height="9" />
    </g>
    {/* Scale rows (orange tone for depth) */}
    <g fill="#ef7d57">
      <rect x="26" y="27" width="10" height="1" />
      <rect x="26" y="29" width="10" height="1" />
      <rect x="26" y="31" width="10" height="1" />
      <rect x="26" y="33" width="10" height="1" />
    </g>
    {/* Tiny red scale dots */}
    <g fill="#b13e53">
      <rect x="27" y="27" width="1" height="1" />
      <rect x="29" y="27" width="1" height="1" />
      <rect x="31" y="27" width="1" height="1" />
      <rect x="33" y="27" width="1" height="1" />
      <rect x="35" y="27" width="1" height="1" />
      <rect x="28" y="29" width="1" height="1" />
      <rect x="30" y="29" width="1" height="1" />
      <rect x="32" y="29" width="1" height="1" />
      <rect x="34" y="29" width="1" height="1" />
      <rect x="27" y="31" width="1" height="1" />
      <rect x="29" y="31" width="1" height="1" />
      <rect x="31" y="31" width="1" height="1" />
      <rect x="33" y="31" width="1" height="1" />
      <rect x="35" y="31" width="1" height="1" />
    </g>
    {/* Highlight glints on armor (sunrise on east side) */}
    <g fill="#f4f0e6">
      <rect x="35" y="26" width="1" height="1" opacity="0.9" />
      <rect x="35" y="29" width="1" height="1" opacity="0.7" />
    </g>
    {/* Belt */}
    <rect x="26" y="32" width="10" height="1" fill="#b13e53" />
    <rect x="30" y="32" width="2" height="1" fill="#ffcd75" />
    <rect x="30" y="32" width="1" height="1" fill="#0f1020" />

    {/* Tunic skirt */}
    <rect x="26" y="34" width="10" height="2" fill="#b13e53" />
    <g fill="#ffcd75">
      <rect x="27" y="35" width="1" height="1" />
      <rect x="29" y="35" width="1" height="1" />
      <rect x="31" y="35" width="1" height="1" />
      <rect x="33" y="35" width="1" height="1" />
      <rect x="35" y="35" width="1" height="1" />
    </g>

    {/* Right arm RAISED HIGH holding a spear (signature pose) */}
    <g fill="#ffcd75">
      <rect x="36" y="22" width="2" height="6" />
      <rect x="37" y="20" width="2" height="2" />
      <rect x="38" y="18" width="2" height="2" />
    </g>
    {/* Forearm bracer */}
    <rect x="38" y="19" width="2" height="1" fill="#b13e53" />
    {/* Hand */}
    <rect x="39" y="17" width="1" height="2" fill="#e7d2bb" />
    {/* Spear shaft going way up */}
    <g fill="#5d275d">
      <rect x="40" y="2"  width="1" height="16" />
    </g>
    <rect x="40" y="6" width="1" height="1" fill="#b13e53" /> {/* tassel band */}
    {/* Spearhead golden leaf */}
    <g fill="#ffcd75">
      <rect x="40" y="0"  width="1" height="2" />
      <rect x="39" y="1"  width="3" height="1" />
      <rect x="39" y="2"  width="3" height="1" />
    </g>
    <rect x="40" y="3" width="1" height="1" fill="#b13e53" />

    {/* Left arm hanging holding a bow */}
    <g fill="#ffcd75">
      <rect x="24" y="26" width="2" height="6" />
    </g>
    {/* Bracer */}
    <rect x="24" y="30" width="2" height="1" fill="#b13e53" />
    {/* Hand */}
    <rect x="24" y="32" width="2" height="2" fill="#e7d2bb" />
    {/* Bow (curved double-arc) */}
    <g fill="#5d275d">
      <rect x="22" y="27" width="1" height="1" />
      <rect x="21" y="28" width="1" height="6" />
      <rect x="22" y="34" width="1" height="1" />
      <rect x="22" y="29" width="1" height="4" />
    </g>
    {/* Bowstring */}
    <g fill="#f4f0e6">
      <rect x="23" y="28" width="1" height="6" />
    </g>

    {/* ========== KAZAKH "QOSHQAR MUIIZ" ORNAMENT BORDER ========== */}
    {/* No bottom strip needed — pedestal already rests at y=62 */}

    {/* ========== ATMOSPHERIC BIRDS ========== */}
    <g fill="#1a1c2c">
      <rect x="6"  y="10" width="1" height="1" /><rect x="7"  y="9"  width="1" height="1" /><rect x="8"  y="10" width="1" height="1" />
      <rect x="11" y="13" width="1" height="1" /><rect x="12" y="12" width="1" height="1" /><rect x="13" y="13" width="1" height="1" />
      <rect x="38" y="6"  width="1" height="1" /><rect x="39" y="5"  width="1" height="1" /><rect x="40" y="6"  width="1" height="1" />
    </g>
  </svg>
)

const featured = ['kitchen-quest','case-file-x','tallest-tower','academic-journey']

export default function Home() {
  const t = useT()
  const lang = useLang()

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="hero-pretitle">{t('hero.pretitle')}</span>
            <h1>
              <span className="accent">{t('hero.title.l1')}</span><br />
              <span className="accent2">{t('hero.title.l2')}</span>{' '}
              <span className="accent3">{t('hero.title.l3')}</span>
            </h1>
            <p className="hero-sub">{t('hero.sub')}</p>
            <div className="hero-cta">
              <Link to="/games" className="pix-btn">
                <PxController size={18} color="#1a1c2c" /> {t('hero.cta.play')}
              </Link>
              <Link to="/manager" className="pix-btn green">
                <PxSpark size={18} color="#1a1c2c" /> {t('hero.cta.manager')}
              </Link>
            </div>

            <div className="row mt-8" style={{ gap: 28 }}>
              <Stat icon={<PxBook color="#a7f070" />} value="15" label={t('hero.stat.games')} />
              <Stat icon={<PxUsers color="#f4b4c5" />} value="∞" label={t('hero.stat.students')} />
              <Stat icon={<PxFlame color="#ef7d57" />} value="B1" label={t('hero.stat.cefr')} />
            </div>
          </div>

          <div className="hero-stage">
            <HeroStage />
          </div>
        </div>
      </section>

      <div className="container">
        <div className="quote">
          <p>{t('quote.text')}</p>
          <span className="author">{t('quote.author')}</span>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="section-eyebrow">{t('featured.eyebrow')}</span>
              <h2>{t('featured.title')}</h2>
            </div>
            <Link to="/games" className="pix-btn ghost sm">
              {t('featured.all')} <PxArrow size={14} />
            </Link>
          </div>

          <div className="games-grid">
            {GAMES.filter(g => featured.includes(g.id)).map(g => (
              <Link key={g.id} to={`/games/${g.id}`} className="game-card">
                <div className="game-card-screen">
                  {getScene(g)}
                  <div className="scan" />
                </div>
                <div className="game-card-body">
                  <div className="row" style={{ justifyContent: 'space-between' }}>
                    <span className="game-card-no">{t('detail.quest')} #{g.number}</span>
                    <span className="tag green">{g.durationMin}</span>
                  </div>
                  <div className="game-card-title">{g.title}</div>
                  <div className="game-card-topic">{g.topic}</div>
                  <div className="game-card-topic" style={{ fontSize: 18, opacity: 0.85 }}>{g.tagline[lang]}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section dither-bg">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="section-eyebrow">{t('why.eyebrow')}</span>
              <h2>{t('why.title')}</h2>
            </div>
          </div>

          <div className="games-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
            <Why icon={<PxController color="#ffcd75" size={28} />} title={t('why.game.title')} text={t('why.game.text')} />
            <Why icon={<PxFlame color="#ef7d57" size={28} />} title={t('why.body.title')} text={t('why.body.text')} />
            <Why icon={<PxUsers color="#f4b4c5" size={28} />} title={t('why.team.title')} text={t('why.team.text')} />
            <Why icon={<PxStar color="#a7f070" size={28} />} title={t('why.zero.title')} text={t('why.zero.text')} />
          </div>
        </div>
      </section>

      <div className="container">
        <div className="divider">{t('divider.demo')}</div>
      </div>
    </>
  )
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="row" style={{ gap: 10 }}>
      {icon}
      <div>
        <div className="pixel-font" style={{ fontSize: 18, color: 'var(--c-sun)' }}>{value}</div>
        <div className="pixel-font" style={{ fontSize: 8, color: 'var(--c-bone)' }}>{label}</div>
      </div>
    </div>
  )
}

function Why({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="card">
      <div className="row mb-4">{icon} <h3 style={{ color: 'var(--c-sun)' }}>{title}</h3></div>
      <p style={{ color: 'var(--c-bone)' }}>{text}</p>
    </div>
  )
}

