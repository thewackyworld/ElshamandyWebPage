import svgPaths from "./svg-qrs2r81ite";
import imgCatigory from "./e57903f77f6aceb723bd991655b5cb78abfa9439.png";
import imgCatigory1 from "./817a2b2cc84692450ef08c2af658384213e3b238.png";
import imgCatigory2 from "./2102a3563459da8028b5ca26d848bec5a1a96ebd.png";
import imgCatigory3 from "./4d2f4a0198d56e83a6a3b07886f3388f86f421e0.png";
import imgCatigory4 from "./6daabdc09fca5f8ef5b1a6833a76654f1d542523.png";
import imgCatigory5 from "./74ab66df7adfd36d4c3b564dc066b368f778de06.png";
import imgCatigory6 from "./72f2b09cd6d1e838f320c38abff67ea7665f4c63.png";
import imgCatigory7 from "./74050ff8a9a0c83e7f060d62caf1d6a7e87947aa.png";
import imgCatigory8 from "./877094a54efc6f584aba54b0e01f113b2f48ed08.png";
import imgIconContainer from "./a0804f2a53a0fd3c09360dc689c1482d921f45d7.png";

function IconContainer() {
  return (
    <div className="absolute h-[100px] left-[61px] top-[20px] w-[96px]" data-name="Icon Container">
      <div className="absolute inset-[0_-7.29%_-11%_-1.04%]">
        <img alt="" className="block max-w-none size-full" height="111" src={imgIconContainer} width="104" />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex flex-col items-end justify-center left-[182px] top-[57px]" data-name="Text">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[24px] text-white whitespace-pre" style={{ fontVariationSettings: '"wdth" 100' }}>{`ALSHAMADNY GENERAL TRADING  L.L.C`}</p>
    </div>
  );
}

function LogoTitle() {
  return (
    <div className="absolute contents left-[61px] top-[20px]" data-name="Logo Title">
      <IconContainer />
      <Text />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="absolute left-[1156px] size-[20px] top-[60px]" data-name="ChevronDown">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ChevronDown">
          <path clipRule="evenodd" d={svgPaths.p92ee080} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MenuBar() {
  return (
    <div className="absolute contents left-[832px] top-[45px]" data-name="Menu Bar">
      <ChevronDown />
      <p className="[word-break:break-word] absolute font-['Roboto:Bold',sans-serif] font-bold leading-[1.1] left-[832px] text-[20px] text-white top-[58px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        About Us
      </p>
      <p className="[word-break:break-word] absolute font-['Roboto:Bold',sans-serif] font-bold leading-[1.1] left-[956px] text-[20px] text-white top-[58px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Products
      </p>
      <p className="[word-break:break-word] absolute font-['Roboto:Bold',sans-serif] font-bold leading-[1.1] left-[1079px] text-[20px] text-white top-[58px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Contact
      </p>
      <div className="absolute bg-[#004b99] content-stretch flex h-[51px] items-center justify-center left-[1207px] px-[32px] py-[16px] rounded-[24px] top-[45px] w-[154px]" data-name="Button">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Get A Quote</p>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="contents pointer-events-auto sticky top-0" data-name="Top Bar">
      <div className="absolute blur-[2px] h-[267px] left-0 top-0 w-[1440px]" style={{ backgroundImage: "linear-gradient(-0.227062deg, rgba(152, 152, 152, 0) 47.179%, rgba(217, 217, 217, 0) 48.831%, rgba(87, 87, 87, 0.79) 48.847%)" }} data-name="top blur" />
      <LogoTitle />
      <MenuBar />
    </div>
  );
}

export default function FreshFruitProducts() {
  return (
    <div className="bg-white relative size-full" data-name="Fresh fruit Products">
      <div className="absolute content-stretch flex flex-col gap-[14px] h-[338px] items-center justify-end left-[-1px] px-[50px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[133px] w-[1443px]" data-name="Catigory">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[135.35%] left-[-0.08%] max-w-none top-[-0.04%] w-full" src={imgCatigory} />
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Raleway:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[60px] text-center text-shadow-[4px_4px_4px_rgba(0,0,0,0.25)] text-white w-full">
          <p className="leading-[1.2]">Fresh Fruits</p>
        </div>
        <div className="bg-[#004b99] h-[9px] relative rounded-[24px] shrink-0 w-full" />
      </div>
      <div className="absolute bg-[#d9d9d9] gap-x-[6px] grid grid-cols-[__533px_minmax(0,1fr)] grid-rows-[__302px_minmax(0,1fr)] h-[453px] left-[52px] px-[18px] py-[21px] rounded-[24px] top-[540px] w-[1322px]" data-name="Product">
        <div className="col-1 content-stretch flex flex-col gap-[14px] items-center justify-end px-[50px] relative rounded-[24px] row-[1/span_2] self-stretch shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[515px]" data-name="Catigory">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
            <img alt="" className="absolute h-full left-[-26.24%] max-w-none top-0 w-[130.15%]" src={imgCatigory1} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Raleway:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[40px] text-black text-center text-shadow-[4px_4px_4px_rgba(0,0,0,0.25)] w-full">
            <p className="leading-[1.2]">Vannamei Shrimp</p>
          </div>
          <div className="bg-[#004b99] h-[9px] relative rounded-[24px] shrink-0 w-full" />
        </div>
        <div className="bg-[#004b99] col-2 relative rounded-[24px] row-2 self-stretch shrink-0 w-[328px]" data-name="Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[32px] py-[16px] relative size-full">
              <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">Get A Quote</p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] col-2 flex flex-col font-['Raleway:Black',sans-serif] font-black justify-center justify-self-stretch leading-[0] relative row-1 self-stretch shrink-0 text-[24px] text-black">
          <p className="leading-[1.2]">Vannamei Shrimps, (Head-On, Head-Less, Peeled and deveined (PD), Pulled Vein, Etc.)</p>
        </div>
      </div>
      <div className="absolute bg-[#d9d9d9] gap-x-[6px] grid grid-cols-[__533px_minmax(0,1fr)] grid-rows-[__302px_minmax(0,1fr)] h-[453px] left-[49px] px-[18px] py-[21px] rounded-[24px] top-[1054px] w-[1322px]" data-name="Product">
        <div className="col-1 content-stretch drop-shadow-[4px_4px_2px_rgba(0,0,0,0.25)] flex flex-col gap-[14px] items-center justify-end px-[50px] relative rounded-[24px] row-[1/span_2] self-stretch shrink-0 w-[515px]" data-name="Catigory">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[24px]">
            <div className="absolute bg-white inset-0 rounded-[24px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[24px]">
              <img alt="" className="absolute h-[86.36%] left-[0.03%] max-w-none top-[2.04%] w-[112.39%]" src={imgCatigory2} />
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Raleway:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[40px] text-black text-center text-shadow-[4px_4px_4px_rgba(0,0,0,0.25)] w-full">
            <p className="leading-[1.2]">Black Tiger Shrimp</p>
          </div>
          <div className="bg-[#004b99] h-[9px] relative rounded-[24px] shrink-0 w-full" />
        </div>
        <div className="bg-[#004b99] col-2 relative rounded-[24px] row-2 self-stretch shrink-0 w-[328px]" data-name="Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[32px] py-[16px] relative size-full">
              <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">Get A Quote</p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] col-2 flex flex-col font-['Raleway:Black',sans-serif] font-black justify-center justify-self-stretch leading-[0] relative row-1 self-stretch shrink-0 text-[24px] text-black">
          <p className="leading-[1.2]">Black Tiger Shrimp, (Head-On, Head-Less, Peeled and deveined (PD), Pulled Vein, Etc.)</p>
        </div>
      </div>
      <div className="absolute bg-[#d9d9d9] gap-x-[6px] grid grid-cols-[__533px_minmax(0,1fr)] grid-rows-[__302px_minmax(0,1fr)] h-[453px] left-[52px] px-[18px] py-[21px] rounded-[24px] top-[1568px] w-[1322px]" data-name="Product">
        <div className="col-1 content-stretch drop-shadow-[4px_4px_2px_rgba(0,0,0,0.25)] flex flex-col gap-[14px] items-center justify-end px-[50px] relative rounded-[24px] row-[1/span_2] self-stretch shrink-0 w-[515px]" data-name="Catigory">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[24px]">
            <div className="absolute bg-white inset-0 rounded-[24px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgCatigory3} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Raleway:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[40px] text-black text-center text-shadow-[4px_4px_4px_rgba(0,0,0,0.25)] w-full">
            <p className="leading-[1.2]">Red Shrimp</p>
          </div>
          <div className="bg-[#004b99] h-[9px] relative rounded-[24px] shrink-0 w-full" />
        </div>
        <div className="bg-[#004b99] col-2 relative rounded-[24px] row-2 self-stretch shrink-0 w-[328px]" data-name="Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[32px] py-[16px] relative size-full">
              <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">Get A Quote</p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] col-2 flex flex-col font-['Raleway:Black',sans-serif] font-black justify-center justify-self-stretch leading-[0] relative row-1 self-stretch shrink-0 text-[24px] text-black">
          <p className="leading-[1.2]">Red Shrimp, (Head-On, Head-Less, Peeled and deveined (PD), Pulled Vein, Etc.)</p>
        </div>
      </div>
      <div className="absolute bg-[#d9d9d9] gap-x-[6px] grid grid-cols-[__533px_minmax(0,1fr)] grid-rows-[__302px_minmax(0,1fr)] h-[453px] left-[52px] px-[18px] py-[21px] rounded-[24px] top-[2082px] w-[1322px]" data-name="Product">
        <div className="col-1 content-stretch drop-shadow-[4px_4px_2px_rgba(0,0,0,0.25)] flex flex-col gap-[14px] items-center justify-end px-[50px] relative rounded-[24px] row-[1/span_2] self-stretch shrink-0 w-[515px]" data-name="Catigory">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[24px]">
            <div className="absolute bg-white inset-0 rounded-[24px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgCatigory4} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Raleway:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[40px] text-black text-center text-shadow-[4px_4px_4px_rgba(0,0,0,0.25)] w-full">
            <p className="leading-[1.2]">Crabs</p>
          </div>
          <div className="bg-[#004b99] h-[9px] relative rounded-[24px] shrink-0 w-full" />
        </div>
        <div className="bg-[#004b99] col-2 relative rounded-[24px] row-2 self-stretch shrink-0 w-[328px]" data-name="Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[32px] py-[16px] relative size-full">
              <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">Get A Quote</p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] col-2 flex flex-col font-['Raleway:Black',sans-serif] font-black justify-center justify-self-stretch leading-[0] relative row-1 self-stretch shrink-0 text-[24px] text-black">
          <p className="leading-[1.2]">Crabs (Whole Fresh Frozen)</p>
        </div>
      </div>
      <div className="absolute bg-[#d9d9d9] gap-x-[6px] grid grid-cols-[__533px_minmax(0,1fr)] grid-rows-[__302px_minmax(0,1fr)] h-[453px] left-[52px] px-[18px] py-[21px] rounded-[24px] top-[2596px] w-[1322px]" data-name="Product">
        <div className="col-1 content-stretch drop-shadow-[4px_4px_2px_rgba(0,0,0,0.25)] flex flex-col gap-[14px] items-center justify-end px-[50px] relative rounded-[24px] row-[1/span_2] self-stretch shrink-0 w-[515px]" data-name="Catigory">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[24px]">
            <div className="absolute bg-white inset-0 rounded-[24px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgCatigory5} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Raleway:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[40px] text-black text-center text-shadow-[4px_4px_4px_rgba(0,0,0,0.25)] w-full">
            <p className="leading-[1.2]">Squid</p>
          </div>
          <div className="bg-[#004b99] h-[9px] relative rounded-[24px] shrink-0 w-full" />
        </div>
        <div className="bg-[#004b99] col-2 relative rounded-[24px] row-2 self-stretch shrink-0 w-[328px]" data-name="Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[32px] py-[16px] relative size-full">
              <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">Get A Quote</p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] col-2 flex flex-col font-['Raleway:Black',sans-serif] font-black justify-center justify-self-stretch leading-[0] relative row-1 self-stretch shrink-0 text-[24px] text-black">
          <p className="leading-[1.2]">Squid (Whole, Ring)</p>
        </div>
      </div>
      <div className="absolute bg-[#d9d9d9] gap-x-[6px] grid grid-cols-[__533px_minmax(0,1fr)] grid-rows-[__302px_minmax(0,1fr)] h-[453px] left-[52px] px-[18px] py-[21px] rounded-[24px] top-[3110px] w-[1322px]" data-name="Product">
        <div className="col-1 content-stretch drop-shadow-[4px_4px_2px_rgba(0,0,0,0.25)] flex flex-col gap-[14px] items-center justify-end px-[50px] relative rounded-[24px] row-[1/span_2] self-stretch shrink-0 w-[515px]" data-name="Catigory">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[24px]">
            <div className="absolute bg-white inset-0 rounded-[24px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[24px]">
              <img alt="" className="absolute h-[73.31%] left-[-1.29%] max-w-none top-[9.17%] w-[102.34%]" src={imgCatigory6} />
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Raleway:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[40px] text-black text-center text-shadow-[4px_4px_4px_rgba(0,0,0,0.25)] w-full">
            <p className="leading-[1.2]">Fish Fillet</p>
          </div>
          <div className="bg-[#004b99] h-[9px] relative rounded-[24px] shrink-0 w-full" />
        </div>
        <div className="bg-[#004b99] col-2 relative rounded-[24px] row-2 self-stretch shrink-0 w-[328px]" data-name="Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[32px] py-[16px] relative size-full">
              <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">Get A Quote</p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] col-2 flex flex-col font-['Raleway:Black',sans-serif] font-black justify-center justify-self-stretch leading-[0] relative row-1 self-stretch shrink-0 text-[24px] text-black">
          <p className="leading-[1.2]">{`Fish Fillet `}</p>
        </div>
      </div>
      <div className="absolute bg-[#d9d9d9] gap-x-[6px] grid grid-cols-[__533px_minmax(0,1fr)] grid-rows-[__302px_minmax(0,1fr)] h-[453px] left-[52px] px-[18px] py-[21px] rounded-[24px] top-[3110px] w-[1322px]" data-name="Product">
        <div className="col-1 content-stretch drop-shadow-[4px_4px_2px_rgba(0,0,0,0.25)] flex flex-col gap-[14px] items-center justify-end px-[50px] relative rounded-[24px] row-[1/span_2] self-stretch shrink-0 w-[515px]" data-name="Catigory">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[24px]">
            <div className="absolute bg-white inset-0 rounded-[24px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[24px]">
              <img alt="" className="absolute h-[73.31%] left-[-1.29%] max-w-none top-[9.17%] w-[102.34%]" src={imgCatigory6} />
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Raleway:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[40px] text-black text-center text-shadow-[4px_4px_4px_rgba(0,0,0,0.25)] w-full">
            <p className="leading-[1.2]">Fish Fillet</p>
          </div>
          <div className="bg-[#004b99] h-[9px] relative rounded-[24px] shrink-0 w-full" />
        </div>
        <div className="bg-[#004b99] col-2 relative rounded-[24px] row-2 self-stretch shrink-0 w-[328px]" data-name="Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[32px] py-[16px] relative size-full">
              <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">Get A Quote</p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] col-2 flex flex-col font-['Raleway:Black',sans-serif] font-black justify-center justify-self-stretch leading-[0] relative row-1 self-stretch shrink-0 text-[24px] text-black">
          <p className="leading-[1.2]">{`Fish Fillet `}</p>
        </div>
      </div>
      <div className="absolute bg-[#d9d9d9] gap-x-[6px] grid grid-cols-[__533px_minmax(0,1fr)] grid-rows-[__302px_minmax(0,1fr)] h-[453px] left-[52px] px-[18px] py-[21px] rounded-[24px] top-[3624px] w-[1322px]" data-name="Product">
        <div className="col-1 content-stretch drop-shadow-[4px_4px_2px_rgba(0,0,0,0.25)] flex flex-col gap-[14px] items-center justify-end px-[50px] relative rounded-[24px] row-[1/span_2] self-stretch shrink-0 w-[515px]" data-name="Catigory">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[24px]">
            <div className="absolute bg-white inset-0 rounded-[24px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[24px]">
              <img alt="" className="absolute h-[73.31%] left-[-1.29%] max-w-none top-[9.17%] w-[102.34%]" src={imgCatigory7} />
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Raleway:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[40px] text-black text-center text-shadow-[4px_4px_4px_rgba(0,0,0,0.25)] w-full">
            <p className="leading-[1.2]">Red Mullet</p>
          </div>
          <div className="bg-[#004b99] h-[9px] relative rounded-[24px] shrink-0 w-full" />
        </div>
        <div className="bg-[#004b99] col-2 relative rounded-[24px] row-2 self-stretch shrink-0 w-[328px]" data-name="Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[32px] py-[16px] relative size-full">
              <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">Get A Quote</p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] col-2 flex flex-col font-['Raleway:Black',sans-serif] font-black justify-center justify-self-stretch leading-[0] relative row-1 self-stretch shrink-0 text-[24px] text-black">
          <p className="leading-[1.2]">Red Mullet</p>
        </div>
      </div>
      <div className="absolute bg-[#d9d9d9] gap-x-[6px] grid grid-cols-[__533px_minmax(0,1fr)] grid-rows-[__302px_minmax(0,1fr)] h-[453px] left-[52px] px-[18px] py-[21px] rounded-[24px] top-[4138px] w-[1322px]" data-name="Product">
        <div className="col-1 content-stretch drop-shadow-[4px_4px_2px_rgba(0,0,0,0.25)] flex flex-col gap-[14px] items-center justify-end px-[50px] relative rounded-[24px] row-[1/span_2] self-stretch shrink-0 w-[515px]" data-name="Catigory">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[24px]">
            <div className="absolute bg-white inset-0 rounded-[24px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[24px]">
              <img alt="" className="absolute h-[73.31%] left-[-1.29%] max-w-none top-[9.17%] w-[102.34%]" src={imgCatigory8} />
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Raleway:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[40px] text-black text-center text-shadow-[4px_4px_4px_rgba(0,0,0,0.25)] w-full">
            <p className="leading-[1.2]">Lizard Fish</p>
          </div>
          <div className="bg-[#004b99] h-[9px] relative rounded-[24px] shrink-0 w-full" />
        </div>
        <div className="bg-[#004b99] col-2 relative rounded-[24px] row-2 self-stretch shrink-0 w-[328px]" data-name="Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[32px] py-[16px] relative size-full">
              <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">Get A Quote</p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] col-2 flex flex-col font-['Raleway:Black',sans-serif] font-black justify-center justify-self-stretch leading-[0] relative row-1 self-stretch shrink-0 text-[24px] text-black">
          <p className="leading-[1.2]">Lizard Fish</p>
        </div>
      </div>
      <div className="absolute bottom-0 h-[6278px] left-0 pointer-events-none top-0">
        <TopBar />
      </div>
    </div>
  );
}