//import * as MimicPage from "../../pages";
import * as MimicPage from "../../pages";

export const routes = [
  // Dashboard Route
  {
    path: "/dashboard",
    component: MimicPage.Home,
    description: "This is the home page for mimics",
  },

  // Reports Routes
  {
    path: "/reportlist",
    component: MimicPage.ReportList,
    description: "This is the report listing page",
  },
  {
    path: "/reportspage",
    component: MimicPage.ReportsPage,
    description: "This page is for creating report",
  },
  {
    path: "/editreportspage",
    component: MimicPage.ReportsPage,
    description: "This page is for editing reports",
  },
  {
    path: "/reports",
    component: MimicPage.Reports,
    description: "This is for showing specific report",
  },

  //   Nathdwara Routes
  {
    path: "/nathdwara/rawmill1",
    component: MimicPage.RawMillNew,
    description: "Raw Mill-1 of Nathdwara Plant",
  },
  {
    path: "/nathdwara/limestonecrusher",
    component: MimicPage.Crusher,
    description: "Limestone Crusher of Nathdwara Plant",
  },
  {
    path: "/nathdwara/kilnpreheater1",
    component: MimicPage.KilnRowMill,
    description: "Kiln Preheater-1 of Nathdwara Plant",
  },
  {
    path: "/nathdwara/cooler1",
    component: MimicPage.Cooler1Nathdwara,
    description: "Cooler-1 of Nathdwara Plant",
  },
  {
    path: "/nathdwara/coalmill1",
    component: MimicPage.CoalMill1,
    description: "Coal Mill-1 of Nathdwara Plant",
  },
  {
    path: "/nathdwara/coalmill2",
    component: MimicPage.CoalMill2,
    description: "Coal Mill-2 of Nathdwara Plant",
  },
  {
    path: "/nathdwara/cementmill1",
    component: MimicPage.Cementmill1,
    description: "Cement Mill-1 of Nathdwara Plant",
  },
  {
    path: "/nathdwara/cementmill2",
    component: MimicPage.Cementmill2,
    description: "Cement Mill-2 of Nathdwara Plant",
  },
  {
    path: "/nathdwara/rawmill2",
    component: MimicPage.RawMill2,
    description: "Raw Mill-2 of Nathdwara Plant",
  },
  {
    path: "/nathdwara/kilnpreheater2",
    component: MimicPage.PreHeaterSlc1SixStage,
    description: "Kiln Preheater-2 of Nathdwara Plant",
  },
  {
    path: "/nathdwara/cooler2",
    component: MimicPage.CoolerNathdwara,
    description: "Cooler-2 of Nathdwara Plant",
  },
  {
    path: "/nathdwara/cementmill3",
    component: MimicPage.CementMill3,
    description: "Cement Mill-3 of Nathdwara Plant",
  },
  {
    path: "/nathdwara/cementmill4",
    component: MimicPage.CementMill4,
    description: "Cement Mill-4 of Nathdwara Plant",
  },
  {
    path: "/nathdwara/clinkerwagonloadingl3",
    component: MimicPage.ClinkerWagonLoadingL3Nathdwara,
    description: "Clinker Wagon Loading of Nathdwara Plant",
  },
  {
    path: "/nathdwara/clinkerbulkerloading",
    component: MimicPage.ClinkerBulkerLoadingNathdwaraL3Page,
    description: "Clinker Bulk Loading of Nathdwara Plant",
  },
  {
    path: "/nathdwara/coalfiringl3",
    component: MimicPage.CoalFiringL3Nathdwara,
    description: "Coal Firing of Nathdwara Plant",
  },
  {
    path: "/nathdwara/rabhl3",
    component: MimicPage.RabhNathdwaraL3Page,
    description: "Rabh of Nathdwara Plant",
  },
  {
    path: "/nathdwara/coolerl3",
    component: MimicPage.CoolerNathdwaraL3Page,
    description: "Cooler of Nathdwara Plant",
  },
  {
    path: "/nathdwara/rawmillgrindingl3",
    component: MimicPage.RawmillGrindingL3Nathdwara,
    description: "Raw mill Grinding of Nathdwara Plant",
  },
  {
    path: "/nathdwara/rawmillhopperbuidingl3",
    component: MimicPage.RawmillHopperBuildingL3Nathdwara,
    description: "Raw mill Hopper Building of Nathdwara Plant",
  },
  {
    path: "/nathdwara/preheaterl3",
    component: MimicPage.RawmillHopperBuildingL3Nathdwara,
    description: "Preheater of Nathdwara Plant",
  },

  // Balaji Routes
  {
    path: "/balaji/rawmill1",
    component: MimicPage.RawMill1BalajiPage,
    description: "Raw Mill-1 of Balaji Plant",
  },
  {
    path: "/balaji/rawmill2",
    component: MimicPage.RawMill2BalajiPage,
    description: "Raw Mill-2 of Balaji Plant",
  },
  {
    path: "/balaji/kilnpreheater",
    component: MimicPage.KilnPreheater,
    description: "Kiln Preheater of Balaji Plant",
  },
  {
    path: "/balaji/cooler",
    component: MimicPage.CoolerBalaji,
    description: "Cooler of Balaji Plant",
  },
  {
    path: "/balaji/coalmill1",
    component: MimicPage.CoalMill1BalajiPage,
    description: "Coal Mill-1 of Balaji Plant",
  },
  {
    path: "/balaji/coalmill2",
    component: MimicPage.CoalMill2BalajiPage,
    description: "Coal Mill-2 of Balaji Plant",
  },
  {
    path: "/balaji/cementmill1",
    component: MimicPage.CementMill1BalajiPage,
    description: "Cement Mill-1 of Balaji Plant",
  },
  {
    path: "/balaji/cementmill2",
    component: MimicPage.CementMill2BalajiPage,
    description: "Cement Mill-2 of Balaji Plant",
  },
  {
    path: "/balaji/cementmill3",
    component: MimicPage.CementMill3Balaji,
    description: "Cement Mill-3 of Balaji Plant",
  },

  // Baikunth Routes
  {
    path: "/baikunth/coalmill1",
    component: MimicPage.CoalMill1Baikunth,
    description: "Coal Mill-1 of Baikunth Plant",
  },
  {
    path: "/baikunth/coalmill2",
    component: MimicPage.CoalMill2Baikunth,
    description: "Coal Mill-2 of Baikunth Plant",
  },
  {
    path: "/baikunth/coalmill3",
    component: MimicPage.CoalMill3Baikunth,
    description: "Coal Mill-3 of Baikunth Plant",
  },
  {
    path: "/baikunth/coalmill4",
    component: MimicPage.CoalMill4Baikunth,
    description: "Coal Mill-4 of Baikunth Plant",
  },
  {
    path: "/baikunth/rawmill1",
    component: MimicPage.RawMill1Baikunth,
    description: "Raw Mill-1 of Baikunth Plant",
  },
  {
    path: "/baikunth/rawmill2",
    component: MimicPage.RawMill2Baikunth,
    description: "Raw Mill-2 of Baikunth Plant",
  },
  {
    path: "/baikunth/rawmill3",
    component: MimicPage.RawMill3Baikunth,
    description: "Raw Mill-3 of Baikunth Plant",
  },
  {
    path: "/baikunth/rawmill4",
    component: MimicPage.RawMill4Baikunth,
    description: "Raw Mill-4 of Baikunth Plant",
  },
  {
    path: "/baikunth/kiln1",
    component: MimicPage.Kiln1BaikunthPage,
    description: "Kiln-1 of Baikunth Plant",
  },
  {
    path: "/baikunth/kiln2",
    component: MimicPage.Kiln2BaikunthPage,
    description: "Kiln-2 of Baikunth Plant",
  },
  {
    path: "/baikunth/cementmill1",
    component: MimicPage.CementMill1BaikunthPage,
    description: "CementMill-1 of Baikunth Plant",
  },
  {
    path: "/baikunth/cementmill2",
    component: MimicPage.CementMill2BaikunthPage,
    description: "CementMill-2 of Baikunth Plant",
  },
  {
    path: "/baikunth/cementmill3",
    component: MimicPage.CementMill3BaikunthPage,
    description: "CementMill-3 of Baikunth Plant",
  },
  {
    path: "/baikunth/cementmill4",
    component: MimicPage.CementMill4BaikunthPage,
    description: "CementMill-4 of Baikunth Plant",
  },
  {
    path: "/baikunth/cementmill5",
    component: MimicPage.CementMill5BaikunthPage,
    description: "CementMill-5 of Baikunth Plant",
  },
  {
    path: "/baikunth/cementmillsprocessparameters",
    component: MimicPage.CementMillsProcessParametersBaikunthPage,
    description: "Cement Mills Process Parameters",
  },

  // Wanakbori Routes
  {
    path: "/wanakbori/cementmill1",
    component: MimicPage.CementMill1WanakboriPage,
    description: "Cement Mill-1 of Wanakbori Plant",
  },
  {
    path: "/wanakbori/cementmill2",
    component: MimicPage.CementMill2WanakboriPage,
    description: "Cement Mill-2 of Wanakbori Plant",
  },
  {
    path: "/wanakbori/clinkerstorage",
    component: MimicPage.ClinkerStorageWanakboriPage,
    description: "Clinker Storage of Wanakbori Plant",
  },
  {
    path: "/wanakbori/coalmill",
    component: MimicPage.CoalMillWanakboriPage,
    description: "Coal Mill of Wanakbori Plant",
  },
  {
    path: "/wanakbori/hotairgenerator2",
    component: MimicPage.HotAirGenerator2WanakboriPage,
    description: "Hot Air Generator-2 of Wanakbori Plant",
  },
  {
    path: "/wanakbori/hotairgenerator1",
    component: MimicPage.HotAirGenerator1WanakboriPage,
    description: "Hot Air Generator-1 of Wanakbori Plant",
  },
  {
    path: "/wanakbori/materialtransport",
    component: MimicPage.MaterialTransportPage,
    description: "Material Transport of Wanakbori Plant",
  },

  // Sikandrabad Routes

  {
    path: "/sikandrabad/rpfinishedproducttransport",
    component: MimicPage.RPFinishedProductTransportPage,
    description: "RP Finished Product Transport of Sikandrabad Plant",
  },
  {
    path: "/sikandrabad/cementmill",
    component: MimicPage.CementMillSikandrabadPage,
    description: "Cement Mill of Sikandrabad Plant",
  },
  {
    path: "/sikandrabad/dryflyash",
    component: MimicPage.DryFlyashPage,
    description: "Dry Flyash of Secunderabad Plant",
  },
  {
    path: "/sikandrabad/packermachine",
    component: MimicPage.Packermachine1and2LoadersikandraPage,
    description: "Packer Machine of Sikandrabad Plant",
  },
  {
    path: "/sikandrabad/rawmaterial",
    component: MimicPage.RawMaterialSikandrabadPage,
    description: "Raw Material of Sikandrabad Plant",
  },
  {
    path: "/sikandrabad/millfeed",
    component: MimicPage.MillFeedSikandrabadPage,
    description: "Mill Feed",
  },
  {
    path: "/sikandrabad/siloextraction",
    component: MimicPage.SiloExtractionSikandraPage,
    description: "Silo Extraction of Sikandrabad Plant",
  },

  // Rajshree Routes
  {
    path: "/rajashree/kiln",
    component: MimicPage.KilnRajshreePage,
    description: "Kiln of Rajshree Plant",
  },

  {
    path: "/rajashree/kilnburner",
    component: MimicPage.KilnBurnerRajshreePage,
    description: "Kiln Burner of Rajshree Plant",
  },
  {
    path: "/rajashree/coaltransport",
    component: MimicPage.CoalTransportRajshreePage,
    description: "Coal Transport of Rajshree Plant",
  },
  {
    path: "/rajashree/preheater",
    component: MimicPage.PreheaterRajshreePage,
    description: "Preheater of Rajshree Plant",
  },
  {
    path: "/rajashree/cooler",
    component: MimicPage.CoolerRajshreePage,
    description: "Cooler of Rajshree Plant",
  },
  {
    path: "/rajashree/rawmill1",
    component: MimicPage.RawMill1RajshreePage,
    description: "Raw Mill-1 of Rajshree Plant",
  },
  {
    path: "/rajashree/rawmill2",
    component: MimicPage.RawMill2RajshreePage,
    description: "Raw Mill-2 of Rajshree Plant",
  },
  {
    path: "/rajashree/blendingsilofeeding",
    component: MimicPage.BlendingSiloFeedingRajshreePage,
    description: " Blending Silo Feeding of Rajshree Plant",
  },
  {
    path: "/rajashree/cementmill-2",
    component: MimicPage.CementMill2Page,
    description: "Cement Mill-2 of Rajshree Plant",
  },

  // Dhar Routes
  {
    path: "/dhar/cementmill1",
    component: MimicPage.CementMill1DharPage,
    description: "Cement Mill-1 of Dhar Plant",
  },
  {
    path: "/dhar/cementmill2",
    component: MimicPage.CementMill2DharPage,
    description: "Cement Mill-2 of Dhar Plant",
  },
  {
    path: "/dhar/coalmill",
    component: MimicPage.CoalMillPage,
    description: "Coal mill Plant of Dhar",
  },
  {
    path: "/dhar/preheater",
    component: MimicPage.PreheaterPage,
    description: "Preheater Plant of Dhar",
  },
  {
    path: "/dhar/coalstoragetransport",
    component: MimicPage.CoalStorageTransportDharPage,
    description: "New Fine Coal Storage Transport Plant of Dhar",
  },
  {
    path: "/dhar/cooler",
    component: MimicPage.CoolerPage,
    description: "Cooler Plant of Dhar",
  },
  {
    path: "/dhar/crusher",
    component: MimicPage.CrusherPage,
    description: "Crusher Plant of Dhar",
  },
  {
    path: "/dhar/cementsilofeeding",
    component: MimicPage.CementSiloDharPage,
    description: "Cooler Plant of Dhar",
  },
  {
    path: "/dhar/Rawmillgrinding",
    component: MimicPage.RawMillGrindingPage,
    description: "Raw Mill Grinding Plant of Dhar",
  },
  {
    path: "/dhar/flyashsilo",
    component: MimicPage.FlyAshSiloPage,
    description: "FlyAsh Silo Plant of Dhar",
  },
  {
    path: "/dhar/whrsdashboardl1",
    component: MimicPage.WHRSDashboardDharL1Page,
    description: "WHRS Dashboard of Dhar",
  },

  // Baga Routes
  {
    path: "/baga/cooler",
    component: MimicPage.CoolerPageBaga,
    description: "Cooler Plant of Baga",
  },
  {
    path: "/baga/cementmill",
    component: MimicPage.CementMillPageBaga,
    description: "Cement Mill Plant of Baga",
  },
  {
    path: "/baga/coalmill",
    component: MimicPage.CoalMillBaga,
    description: "Coal Grinding & Transport Upto Bin",
  },
  {
    path: "/baga/preheater",
    component: MimicPage.PreheaterBagaPage,
    description: "Preheater",
  },
  {
    path: "/baga/rawmill2",
    component: MimicPage.RawMill2BagaPage,
    description: "Raw Mill 2",
  },
  {
    path: "/baga/rawmill1",
    component: MimicPage.RawMill1BagaPage,
    description: "Raw Mill 1",
  },
  {
    path: "/baga/csextractiontransportpackers",
    component: MimicPage.CSExtractionTransportPackersBagaPage,
    description: "Cement Silo Extraction & Transport Packers",
  },
  {
    path: "/baga/kilncoolerparams",
    component: MimicPage.KilnCoolerParamsBagaPage,
    description: "Kiln Cooler Params",
  },
  {
    path: "/baga/rawmill1uhparams",
    component: MimicPage.RawMill1ParamsBagaPage,
    description: "Raw Mill-1 Params",
  },
  {
    path: "/baga/rawmill2uhparams",
    component: MimicPage.RawMill2ParamsBagaPage,
    description: "Raw Mill-2 Params",
  },
  {
    path: "/baga/cementmilluhparams",
    component: MimicPage.CementMillParamsBagaPage,
    description: "Cement Mill Params",
  },
  {
    path: "/baga/coalmilluhparams",
    component: MimicPage.CoalMillParamsBagaPage,
    description: "Coal Mill Params",
  },

  // Siddhi Routes
  {
    path: "/siddhi/plantoverviewline1",
    component: MimicPage.PlantOverviewLine1SiddhiPage,
    description: "Plant  Overview Line-1 of Siddhi",
  },
  {
    path: "/siddhi/plantoverviewline2",
    component: MimicPage.PlantOverviewLine2SiddhiPage,
    description: "Plant  Overview Line-2 of Siddhi",
  },

  // Maihar Routes
  {
    path: "/maihar/flyashsystem",
    component: MimicPage.FlyAshSystemMaiharPage,
    description: "Fly Ash System of Maihar",
  },
  {
    path: "/maihar/coalmillvrm",
    component: MimicPage.ColaMillVRMMaiharPage,
    description: "Coal Mill VRM of Maihar",
  },
  {
    path: "/maihar/pregrinderoperation",
    component: MimicPage.PregrinderOperationMaiharPage,
    description: "Pregrinder Operation of Maihar",
  },
  {
    path: "/maihar/cementmill1",
    component: MimicPage.CementMill1MaiharPage,
    description: "Cement Mill 1  of Maihar",
  },
  {
    path: "/maihar/cementmill2",
    component: MimicPage.CementMill2MaiharPage,
    description: "Cement Mill 2  of Maihar",
  },
  {
    path: "/maihar/cementmill3",
    component: MimicPage.CementMill3MaiharPage,
    description: "Cement Mill 3  of Maihar",
  },
  {
    path: "/maihar/kiln1",
    component: MimicPage.Kiln1MaiharPage,
    description: "Kiln 1  of Maihar",
  },
  {
    path: "/maihar/kiln2",
    component: MimicPage.Kiln2MaiharPage,
    description: "Kiln 2  of Maihar",
  },
  {
    path: "/maihar/vrmoperation",
    component: MimicPage.VRMOperationMaiharPage,
    description: "VRM Operation  of Maihar",
  },
  {
    path: "/maihar/ph3cboileroperation",
    component: MimicPage.PH3cBoileroperationMaiharPage,
    description: "PH3 C Boiler operation",
  },
  {
    path: "/maihar/ph3kboileroperation",
    component: MimicPage.PH3kBoileroperationMaiharPage,
    description: "PH3 K Boiler operation",
  },
  {
    path: "/maihar/cm3hrc",
    component: MimicPage.Cm3HRCMaiharPage,
    description: "Cement Mill-3 HRC of Maihar",
  },
  {
    path: "/maihar/cm3materialtransportsystem",
    component: MimicPage.CM3MaterialTransportSystemPage,
    description: "CM3 Material Transport System",
  },
  {
    path: "/maihar/boileroperation",
    component: MimicPage.BoilerOperationPage,
    description: "Boiler Operation",
  },
  {
    path: "/maihar/turbineoperation",
    component: MimicPage.TurbineOperationMaiharPage,
    description: "Turbine Operation of Maihar",
  },
  {
    path: "/maihar/rollerpress",
    component: MimicPage.RollerPressMaiharPage,
    description: "Roller Press",
  },
  {
    path: "/maihar/rollerpressoverview",
    component: MimicPage.RollerPressOverviewPage,
    description: "Roller Press Overview",
  },
  {
    path: "/maihar/macwdashboard",
    component: MimicPage.MacwDashBoardMaiharPage,
    description: "Macw DashBoard of Maihar",
  },
  {
    path: "/maihar/firealarm",
    component: MimicPage.FireAlarmMaiharPage,
    description: "Fire Alarm of Maihar",
  },
  {
    path: "/maihar/cooler1maihar",
    component: MimicPage.Cooler1MaiharPage,
    description: "Cooler-1 of Maihar",
  },
  {
    path: "/maihar/cooler2maihar",
    component: MimicPage.Cooler2MaiharPage,
    description: "Cooler-2 of Maihar",
  },
  {
    path: "/maihar/rawmillgrindingline3",
    component: MimicPage.RawMillGrindingMaiharLine3Page,
    description: "Raw Mill Grinding Line-3 of Maihar",
  },
  {
    path: "/maihar/packingplant",
    component: MimicPage.PackingPlantMaiharPage,
    description: "Packing Plant of Maihar",
  },
  {
    path: "/maihar/preheaterline3",
    component: MimicPage.PreheaterMaiharL3Page,
    description: "Preheater of Maihar L3",
  },
  {
    path: "/maihar/silofeedline3",
    component: MimicPage.SiloFeedMaiharL3Page,
    description: "Silo Feed of Maihar L3",
  },
  {
    path: "/maihar/cementmill4transportL3",
    component: MimicPage.CementMill4TransportMaiharL3Page,
    description: "Cement Mill 4 Transport of Maihar L3",
  },
  {
    path: "/maihar/cementmill5transportL3",
    component: MimicPage.CementMill5TransportMaiharL3Page,
    description: "Cement Mill 5 Transport of Maihar L3",
  },
  {
    path: "/maihar/coolerline3",
    component: MimicPage.CoolerLine3Page,
    description: "Cooler",
  },
  {
    path: "/maihar/wagontipplerl3",
    component: MimicPage.WagonTrpplerMaiharL3Page,
    description: "Wagon Trppler of Maihar L3",
  },
  {
    path: "/maihar/coalmillgrindingmaiharl3",
    component: MimicPage.CoalMillGrindingMaiharL3Page,
    description: "Coal Mill Grinding of Maihar L3",
  },
  {
    path: "/maihar/mtskilnandpyrofeedl3",
    component: MimicPage.MTSKilnAndPyroFeedLine3Page,
    description: "MTS KILN AND PYRO FEED",
  },
  {
    path: "/maihar/clinkersilodischargel3",
    component: MimicPage.ClinkerSiloDischargeLine3Page,
    description: "Clinker Silo Discharge",
  },
  {
    path: "/maihar/baghouseandgctl3",
    component: MimicPage.BagHouseAndGCTMaiharL3Page,
    description: "Bag House and GCT of Maihar L3",
  },
  {
    path: "/maihar/kilnfeedandpyrofeedl3",
    component: MimicPage.KilnFeedandPyroFeedMaiharPage,
    description: "Kiln Feed and Pyro Feed Maihar",
  },
  {
    path: "/maihar/kilnl3",
    component: MimicPage.KilnMaiharL3Page,
    description: "Kiln Maihar",
  },
  {
    path: "/maihar/lsstackerreclaimerl3",
    component: MimicPage.LSStackerReclaimerMaiharL3Page,
    description: "LS Stacker Maihar",
  },
  {
    path: "/maihar/clinkeresptransport",
    component: MimicPage.ClinkerESPTransportMaiharPage,
    description: "Clinker ESP Transport Maihar",
  },
  {
    path: "/maihar/cementmill4grindingl3",
    component: MimicPage.CementMill4GrindingMaiharL3Page,
    description: "Cement Mill 4 Grinding of Maihar L3",
  },
  {
    path: "/maihar/cementmill5grindingl3",
    component: MimicPage.CementMill5GrindingMaiharL3Page,
    description: "Cement Mill 5 Grinding of Maihar L3",
  },
  {
    path: "/maihar/coalfiringline3",
    component: MimicPage.CoalFiringLine3Page,
    description: "Coal Firing",
  },
  {
    path: "/maihar/crusherline12",
    component: MimicPage.CrusherLineMaiharPage,
    description: "Crusher Line 1 and 2",
  },
  {
    path: "/maihar/newcrusherandolbc",
    component: MimicPage.NewCrusherandOLBCPage,
    description: "New Crusher and OLBC",
  },
  {
    path: "/maihar/oldolbcl1",
    component: MimicPage.NewOlbcLine2Page,
    description: "L2-New OLBC",
  },
  // Maihar Line-4 routes
  {
    path: "/maihar/cementmillrp",
    component: MimicPage.CementMillRPMaiharL4Page,
    description: "Cement Mill Roller Press of Maihar L-4",
  },
  {
    path: "/maihar/coalmill",
    component: MimicPage.CoalMillMaiharL4Page,
    description: "Coal Mill of Maihar L-4",
  },
  {
    path: "/maihar/clinkertransportandstorage",
    component: MimicPage.ClinkerTransportMaiharL4Page,
    description: "Clinker Transport and Storage of Maihar L-4",
  },
  {
    path: "/maihar/cooler",
    component: MimicPage.CoolerMaiharL4Page,
    description: "Cooler of Maihar L-4",
  },
  {
    path: "/maihar/kilncoalfiring",
    component: MimicPage.KilnCoalFiringMaiharL4Page,
    description: "Kiln Coal Firing of Maihar L-4",
  },
  {
    path: "/maihar/preheater",
    component: MimicPage.PreheaterMaiharL4Page,
    description: "Preheater of Maihar L-4",
  },
  {
    path: "/maihar/kiln",
    component: MimicPage.KilnAuxiliariesMaiharL4Page,
    description: "Kiln Auxiliaries of Maihar L-4",
  },
  {
    path: "/maihar/rabh",
    component: MimicPage.RABHandDustTransportMaiharL4Page,
    description: "RABH & Dust Transport  of Maihar L-4",
  },
  {
    path: "/maihar/rawmillhopperbuilding",
    component: MimicPage.RawMillHopperBuildingMaiharL4Page,
    description: "Raw Mill Hopper Building of Maihar L-4",
  },
  {
    path: "/maihar/crusher",
    component: MimicPage.CrusherMaterialHandlingMaiharL4Page,
    description: "Crusher & Material Handling of Maihar L-4",
  },
  {
    path: "/maihar/blendingsilotokilnfeed",
    component: MimicPage.BlendingSiloMaiharL4Page,
    description: "Blending Silo to Kiln Feed of Maihar L-4",
  },
  {
    path: "/maihar/rawmillgrinding",
    component: MimicPage.RawMillGrindingMaiharL4Page,
    description: "Raw Mill Grinding of Maihar L-4",
  },
  {
    path: "/maihar/flyashsilo",
    component: MimicPage.FlyAshSiloMaiharL4Page,
    description: "Fly Ash Silo of Maihar L-4",
  },
  //Added by TRID AI as part of mimic developement on 02-01-2026 (1050538)
  {
    path: "/maihar/cbadata",
    component: MimicPage.CBADataLine4Page, //CBA PAGE will be added here 
    description: "Maihar L-4 CBA Data",
  },

  // kotputli Routes
  {
    path: "/kotputli/crusherandmaterialhandling",
    component: MimicPage.CrusherandMaterialHandlingkotputliPage,
    description: "Crusher and Material Handling",
  },
  {
    path: "/kotputli/rawmillhopperhandling",
    component: MimicPage.RawMillHopperHandlingPage,
    description: "Raw Mill Hopper Handling",
  },
  {
    path: "/kotputli/coalmill",
    component: MimicPage.CoalMillkotputliPage,
    description: "CoalMill",
  },
  {
    path: "/kotputli/cooler",
    component: MimicPage.CoolerkotputliPage,
    description: "Cooler",
  },
  {
    path: "/kotputli/kilnauxilaries",
    component: MimicPage.KilnAuxilaieskotputliPage,
    description: "Kiln Auxilaies",
  },
  {
    path: "/kotputli/preheater",
    component: MimicPage.PreHeaterkotputliPage,
    description: "Pre Heater",
  },
  {
    path: "/kotputli/rawmillgrinding",
    component: MimicPage.RawMillGrindingKotputliPage,
    description: "Raw Mill Grinding Kotputli",
  },
  {
    path: "/kotputli/rollerpresscircuit",
    component: MimicPage.RollerPressCircuitkotputliPage,
    description: "Roller Press Circuit kotputli",
  },
  {
    path: "/kotputli/lpsteamsystem",
    component: MimicPage.WaterandSteamsystemPage,
    description: "LP Steam Drum of Kothputli",
  },
  {
    path: "/kotputli/hpsteamsystem",
    component: MimicPage.WaterAndSteamKotputliPage,
    description: "HP Steam Drum of Kothputli",
  },
  {
    path: "/kotputli/cementsilo",
    component: MimicPage.CementSiloKotputliPage,
    description: "Cement Silo Kotputli",
  },

  {
    path: "/kotputli/cementsiloextraction",
    component: MimicPage.CementSiloExtractionKotputliPage,
    description: "Cement Silo Extraction Kotputli",
  },
  {
    path: "/kotputli/rabhanddusttransport",
    component: MimicPage.RABHandDustTransportkotputliPage,
    description: "RABH and Dust Transport kotputli",
  },
  {
    path: "/kotputli/ballmillarea",
    component: MimicPage.BallmillAreakotputliPage,
    description: "Ball mill Area kotputli",
  },
  {
    path: "/kotputli/turbinetriplogic",
    component: MimicPage.TurbineTripLogickotputliPage,
    description: "Turbine Trip Logic kotputli",
  },

  {
    path: "/kotputli/blendingsilo",
    component: MimicPage.BlendingSiloKotputliPage,
    description: "Blending Silo Kotputli",
  },
  {
    path: "/kotputli/governingoilsystem",
    component: MimicPage.GoverningOillSystemKotputliPage,
    description: "Governing Oil System",
  },
  {
    path: "/kotputli/clinkertransport",
    component: MimicPage.ClinkerTransportKotputliPage,
    description: "Clinker Transport",
  },
  {
    path: "/kotputli/kilnmainl1",
    component: MimicPage.KilnMainkotputliLine1Page,
    description: "Kiln Main",
  },
  {
    path: "/kotputli/rawmaterialhandlingl1",
    component: MimicPage.RMHKotputliLine1Page,
    description: "Raw Material Handling",
  },
  {
    path: "/kotputli/kilnl1",
    component: MimicPage.KilnKotputliLine1Page,
    description: "Kiln",
  },
  {
    path: "/kotputli/coalmillcontrolsheetl1",
    component: MimicPage.CoalMillControlSheetkotputliLine1Page,
    description: "Coal Mill Control Sheet",
  },
  {
    path: "/kotputli/clinkerstorageandtransportl1",
    component: MimicPage.ClinkerStorageAndTransportKotputliLine1Page,
    description: "Clinker Storage and Transport",
  },
  {
    path: "/kotputli/coolermainl1",
    component: MimicPage.CoolerMainkotputliLine1Page,
    description: "Cooler Main",
  },
  {
    path: "/kotputli/cm1baghousel1",
    component: MimicPage.CM1BagHouseKotputliLine1Page,
    description: "CM1 Bag House",
  },
  {
    path: "/kotputli/cm2baghousel1",
    component: MimicPage.CM2BagHouseKotputliLine1Page,
    description: "CM2 Bag House",
  },
  {
    path: "/kotputli/cm1controlsheetl1",
    component: MimicPage.CM1ControlSheetkotputliL1Page,
    description: "Cement Mill 1 Control Sheet kotputli",
  },
  // The below one is commented from before
  // {
  //   path: "/kotputli/preheaterkotputliline1",
  //   component: MimicPage.PreheaterkotputliLine1Page,
  //   description: "Preheater",
  // },
  {
    path: "/kotputli/cm2controlsheetl1",
    component: MimicPage.CM2ControlSheetkotputliL1Page,
    description: "Cement Mill 2 Control Sheet kotputli",
  },
  {
    path: "/kotputli/cbal1",
    component: MimicPage.CBAKotputliLine1Pages,
    description: "CBA of Kotputli",
  },

  // Rajpura Routes
  {
    path: "/rajpura/clinkertransportandstorage",
    component: MimicPage.ClinkerTransportAndStoragePage,
    description: "Clinker Transport And Storage",
  },
  {
    path: "/rajpura/flyashsilo",
    component: MimicPage.FlyAshSiloRajpuraPage,
    description: "Fly Ash Silo",
  },
  {
    path: "/rajpura/cementsilo1extractionpacking",
    component: MimicPage.CementSilo1ExtractionPackingRajpuraPage,
    description: "Cement Silo-1 Extraction Packing",
  },
  {
    path: "/rajpura/cementsilo2extractionpacking",
    component: MimicPage.CementSilo2ExtractionPackingRajpuraPage,
    description: "Cement Silo-2 Extraction Packing",
  },
  {
    path: "/rajpura/packingplant",
    component: MimicPage.PackingPlantRajpuraPage,
    description: "Packing Plant",
  },
  {
    path: "/rajpura/rollerpresscircuitrajpura",
    component: MimicPage.RollerPressCircuitRajpuraPage,
    description: "Roller Press Circuit",
  },

  // Karur Routes
  {
    path: "/karur/clinkertransportandstorage",
    component: MimicPage.ClinkerTransportandStorageKarurPage,
    description: "Clinker Transport and Storage",
  },
  {
    path: "/karur/packingplant1",
    component: MimicPage.PackingPlant1and2KarurPage,
    description: "Packing Plant 1 and 2",
  },
  {
    path: "/karur/rollerpresscircuit1",
    component: MimicPage.RollerPressCircuit1KarurPage,
    description: "Roller Press Circuit-1",
  },
  {
    path: "/karur/rollerpresscircuit2",
    component: MimicPage.RollerPressCircuitKarurPage,
    description: "Roller Press Circuit 2",
  },
  {
    path: "/karur/packingplant3",
    component: MimicPage.PackingPlant3and4KarurPage,
    description: "Packing Plant 3 and 4",
  },
  {
    path: "/karur/cementsiloextractionbulkloading",
    component: MimicPage.CementSiloExtractionKarurPage,
    description: "Cement Silo Extraction Karur",
  },
  {
    path: "/karur/flyashsilo",
    component: MimicPage.FlyashSiloKarurPage,
    description: "Flyash Silo",
  },
  {
    path: "/karur/cementsilo",
    component: MimicPage.CementSiloKarurPage,
    description: "Cement Silo",
  },
  {
    path: "/karur/cementsilo3",
    component: MimicPage.CementSilo3KarurPage,
    description: "Cement Silo 3",
  },
  {
    path: "/karur/cementsilo4",
    component: MimicPage.CementSilo4KarurPage,
    description: "Cement Silo 4",
  },
  {
    path: "/karur/cementsilo1",
    component: MimicPage.CementSilo1KarurPage,
    description: "Cement Silo 1",
  },
  {
    path: "/karur/cementsilo2",
    component: MimicPage.CementSilo2KarurPage,
    description: "Cement Silo 2",
  },

  // Kukurdih Routes
  {
    path: "/kukurdih/crusher",
    component: MimicPage.CrusherStorageKukurdihPage,
    description: "Crusher",
  },
  {
    path: "/kukurdih/rollerpresscircuit1",
    component: MimicPage.RollerPressCircuitKukurdihPage,
    description: "Roller Press Circuit 1",
  },
  {
    path: "/kukurdih/rollerpresscircuit2",
    component: MimicPage.RollerPress2KukurdihPage,
    description: "Roller Press Circuit 2",
  },
  {
    path: "/kukurdih/coalmill",
    component: MimicPage.CoalMillkukurdihPage,
    description: "Coal Mill",
  },
  {
    path: "/kukurdih/clinkertransportandstorage",
    component: MimicPage.ClinkerTransportKukurdihPage,
    description: "Clinker Transport",
  },
  {
    path: "/kukurdih/aqcboilerlpsystem",
    component: MimicPage.AqcBoilerLPSystemKukurdihPage,
    description: "Aqc Boiler LP System Kukurdih",
  },
  {
    path: "/kukurdih/turbinetriplogic",
    component: MimicPage.TurbineTripLogickukurdihPage,
    description: "Turbine Trip Logic",
  },
  {
    path: "/kukurdih/kiln",
    component: MimicPage.KilnkukurdihPage,
    description: "Kiln",
  },
  {
    path: "/kukurdih/cementsilo1",
    component: MimicPage.CementSilo1KukurdihPage,
    description: "Cement Silo-1",
  },
  {
    path: "/kukurdih/cementsilo2",
    component: MimicPage.CementSilo2KukurdihPage,
    description: "Cement Silo-2",
  },
  {
    path: "/kukurdih/cementsilo3",
    component: MimicPage.CementSilo3kukurdihPage,
    description: "Cement Silo-3",
  },
  {
    path: "/kukurdih/cementsilo4",
    component: MimicPage.CementSilo4KukurdihPage,
    description: "Cement Silo-4",
  },
  {
    path: "/kukurdih/governingoilsystem",
    component: MimicPage.GoverningOillSystemKukurdihPage,
    description: "Governing Oill System Kukurdih",
  },
  {
    path: "/kukurdih/packingplant1",
    component: MimicPage.PackingPlant1and2KukurdihPage,
    description: "Packing Plant 1 and 2",
  },
  {
    path: "/kukurdih/packingplant3",
    component: MimicPage.PackingPlant3and4KukurdihPage,
    description: "Packing Plant 3 and 4",
  },
  {
    path: "/kukurdih/rawmill1grinding",
    component: MimicPage.RawMill1KukurdihPage,
    description: "Raw Mill 1",
  },
  {
    path: "/kukurdih/rawmill2grinding",
    component: MimicPage.RawMill2KukurdihPage,
    description: "Raw Mill 2",
  },
  {
    path: "/kukurdih/blendingsilotokilnfeed",
    component: MimicPage.BlendingSiloKukurdihPage,
    description: "Blending Silo",
  },
  {
    path: "/kukurdih/cooler",
    component: MimicPage.CoolerkukurdihPage,
    description: "Cooler",
  },

  {
    path: "/kukurdih/preheater",
    component: MimicPage.PreheaterKukurdihPage,
    description: "Preheater",
  },
  {
    path: "/kukurdih/baghousedusttransport",
    component: MimicPage.RABHandDustTransportKukurdihPage,
    description: "RABH and Dust Transport",
  },
  {
    path: "/kukurdih/aqcboilerhpsystem",
    component: MimicPage.AQCBoilerHPSystemKukurdihPage,
    description: "AQC BOILER - HP SYSTEM",
  },
  {
    path: "/kukurdih/cba",
    component: MimicPage.CBAKukurdihPages,
    description: "CBA",
  },
  {
    path: "/kukurdih/maindashboard",
    component: MimicPage.UnitMainDashboardKukurdihPages,
    description: "Unit Main Dashboard",
  },

  //Andhra Pradesh

  {
    path: "/andhrapradesh/coalhandling",
    component: MimicPage.CoalTransportAndhraPage,
    description: "Coal Transport Andhra",
  },
  {
    path: "/andhrapradesh/rawmill1maindrive",
    component: MimicPage.RawMill1RPAndraPage,
    description: "Raw Mill-1 RP of Andra",
  },
  {
    path: "/andhrapradesh/kiln",
    component: MimicPage.KilnAndhraPage,
    description: "Raw Mill-2 RP of Andra",
  },
  {
    path: "/andhrapradesh/rawmill2maindrive",
    component: MimicPage.RawMill2RPAndhraPage,
    description: "Raw Mill-2 RP of Andra",
  },
  {
    path: "/andhrapradesh/preheater",
    component: MimicPage.PreheaterAndhraPage,
    description: "Preheater Andhra",
  },
  {
    path: "/andhrapradesh/coalmill",
    component: MimicPage.CoalMillAndhraPage,
    description: "Coal Mill",
  },
  {
    path: "/andhrapradesh/cooleresp",
    component: MimicPage.CoolerESPAndhraPage,
    description: "Cooler ESP",
  },
  {
    path: "/andhrapradesh/rawmill2hopperbuilding",
    component: MimicPage.RawMill2HopperBuildingAndhraPage,
    description: "Raw Mill 2 Hopper Building",
  },
  {
    path: "/andhrapradesh/clinkertransportandstorage",
    component: MimicPage.ClinkerTransportandStorageAndhraPage,
    description: "Clinker Transport And Storage",
  },

  {
    path: "/andhrapradesh/rawmill1grinding",
    component: MimicPage.RawMill1AndhraPage,
    description: "Raw Mill-1 Grinding",
  },
  {
    path: "/andhrapradesh/cooler",
    component: MimicPage.CoolerAndhraPage,
    description: "Cooler",
  },
  {
    path: "/andhrapradesh/rawmill2grinding",
    component: MimicPage.RawMill2AndhraPage,
    description: "Raw Mill-2 Grinding",
  },
  {
    path: "/andhrapradesh/rawmilltransport",
    component: MimicPage.RawMillTransportAndhraPage,
    description: "Raw Mill Transport",
  },
  {
    path: "/andhrapradesh/l3dashboard",
    component: MimicPage.L3DashboardAndhraPage,
    description: "L3 dashboard",
  },
  // Andhra Pradesh WHRS screens
  {
    path: "/andhrapradesh/commonboilerpage",
    component: MimicPage.CommonBoilerAndhraPage,
    description: "Common Boiler Page of Andhra WHRS",
  },
  {
    path: "/andhrapradesh/mainparameterpage",
    component: MimicPage.MainParameterwhrsAndhraPage,
    description: "Main Parameter Page of Andhra WHRS",
  },
  {
    path: "/andhrapradesh/protectionsystem",
    component: MimicPage.ProtectionsystemwhrsAndhraPage,
    description: "Protection System of Andhra WHRS",
  },

  // Andhra Pradesh Line 3 WHRS
  {
    path: "/andhrapradesh/turbine",
    component: MimicPage.TurbineAndhraPage,
    description: "Turbine of Andhra L-3 WHRS",
  },
  {
    path: "/andhrapradesh/protection",
    component: MimicPage.ProtectionAndhraPage,
    description: "Protection of Andhra L-3 WHRS",
  },
  {
    path: "/andhrapradesh/stgsteamsystem",
    component: MimicPage.STGSteamSystemAndhraPage,
    description: "STG Steam System of Andhra L-3 WHRS",
  },
  {
    path: "/andhrapradesh/phboilergassystem",
    component: MimicPage.PHBoilerGasSystemAndhraPage,
    description: "PH Boiler Gas System of Andhra L-3 WHRS",
  },
  {
    path: "/andhrapradesh/aqcboilerlpsystem",
    component: MimicPage.LPSystemAndhraPage,
    description: "AQC Boiler - LP System of Andhra L-3 WHRS",
  },
  {
    path: "/andhrapradesh/aqcboilerhpsystem",
    component: MimicPage.AQCBoilerHPSystemAndhraL3Page,
    description: "AQC Boiler - HP System of Andhra L-3 WHRS",
  },
  {
    path: "/andhrapradesh/aqcboilergassystem",
    component: MimicPage.AQCBoilerGasSystemAndhraPage,
    description: "AQC Boiler(Gas System) of Andhra L-3 WHRS",
  },
  // Added by TRID AI on 01-01-2026 as part of new mimics developement
  // {
  //   path: "/andhrapradesh/ph3boilerlpsytem",
  //   component: MimicPage.PH3BolierLpSystemPage,
  //   description: "PH 3 Bolier LP System",
  // },
  // Andhra Pradesh Line 1 WHRS
  {
    path: "/andhrapradesh/aqcboilerwaterandsteamsystem",
    component: MimicPage.AQCBoilerWASSystemAndhraPage,
    description: "AQC Water System of Andhra L-1 WHRS",
  },
  {
    path: "/andhrapradesh/aqcboilerfluegassystem",
    component: MimicPage.AQCBoilerFlueGasSystemL1AndhraPage,
    description: "AQC Boiler Flue Gas System of Andhra L-1 WHRS",
  },
  {
    path: "/andhrapradesh/phkboilerwaterandsteamsystem",
    component: MimicPage.PHKBoilerWaterWHRSAndhraPage,
    description: "PHK Boiler Water and Steam System of Andhra L-1 WHRS",
  },
  {
    path: "/andhrapradesh/phcboilerwaterandsteamsystem",
    component: MimicPage.PHCBoilerWaterWHRSAndhraPage,
    description: "PHC Boiler Water and Steam System of Andhra L-1 WHRS",
  },

  // Birla White - Kharia
  {
    path: "/birlawhitekharia/cementmillmain",
    component: MimicPage.CemetMillMainBirlaWhiteKhariaPage,
    description: "Cement Mill Main of Birla White - Kharia",
  },

  // Awarpur Routes
  {
    path: "/awarpur/cbamines",
    component: MimicPage.AwarpurCBAMinesPage,
    description: "CBA Mines of Awarpur",
  },

  // Hirmi Routes

  {
    path: "/hirmi/coolerl1",
    component: MimicPage.CoolerHirmiL1Page,
    description: "Cooler of Hirmi",
  },

  {
    path: "/hirmi/kilnl1",
    component: MimicPage.KilnHirmiL1Page,
    description: "Kiln of Hirmi",
  },
  {
    path: "/hirmi/alternatefuelfiringsysteml1",
    component: MimicPage.AlternateFuelFiringSystemHirmiLine1Page,
    description: "Alternate Fuel Firing System of Hirmi",
  },
  {
    path: "/hirmi/kilnbaghousel1",
    component: MimicPage.KilnBagHouseHirmiLine1Page,
    description: "Kiln Bag House of Hirmi",
  },
  {
    path: "/hirmi/coalmill1",
    component: MimicPage.CoalMillHirmiL1Page,
    description: "Coal Mill of Hirmi",
  },
  {
    path: "/hirmi/kilnfeed",
    component: MimicPage.KilnFeedHirmiL1Page,
    description: "Kiln Feed of Hirmi",
  },
  {
    path: "/hirmi/cementgrindingrollerpress",
    component: MimicPage.CGRollerPressHirmiL1Page,
    description: "Cement Grinding Roller Press of Hirmi",
  },
  {
    path: "/hirmi/rawmill1",
    component: MimicPage.RawMill1HirmiLine1Page,
    description: "Raw Mill of Hirmi",
  },
  {
    path: "/hirmi/cementmill1",
    component: MimicPage.CementMill1HirmiL1Page,
    description: "Cement Mill of Hirmi",
  },
  {
    path: "/hirmi/rawmill2",
    component: MimicPage.RawMill2HirmiLine1Page,
    description: "Raw Mill of Hirmi",
  },
  {
    path: "/hirmi/cementmill2line1",
    component: MimicPage.CementMill2Line1Page,
    description: "Cement Mill 2",
  },
  {
    path: "/hirmi/rollerpress1l2",
    component: MimicPage.RollerPress1HirmiL2Page,
    description: "Roller Press-1 of Hirmi Line-2",
  },
  {
    path: "/hirmi/baghousehirmil2",
    component: MimicPage.BagHouseHirmiL2Page,
    description: "Bag House of Hirmi",
  },
  {
    path: "/hirmi/rollerpress2l2",
    component: MimicPage.RollerPress2HirmiL2Page,
    description: "Roller Press-2 of Hirmi Line-2",
  },
  {
    path: "/hirmi/preheaterkilnl2",
    component: MimicPage.PreheaterKilnHirmiL2Page,
    description: "Kiln Preheater of Hirmi Line-2",
  },
  {
    path: "/hirmi/blendingsilol2",
    component: MimicPage.BlendingSiloHirmiL2Page,
    description: "Blending Silo of Hirmi Line-2",
  },
  {
    path: "/hirmi/coalmilll2",
    component: MimicPage.CoalMillHirmiL2Page,
    description: "Coal Mill of Hirmi Line-2",
  },
  {
    path: "/hirmi/clinkertransportl2",
    component: MimicPage.ClinkerTransport492HirmiL2Page,
    description: "Clinker Transport of Hirmi Line-2",
  },
  {
    path: "/hirmi/baghousel2",
    component: MimicPage.PreheaterKilnHirmiL2Page,
    description: "Bag House - Hot Dust Silo of Hirmi Line-2",
  },
  {
    path: "/hirmi/kilnfiringl2",
    component: MimicPage.KilnFiringHirmiL2Page,
    description: "Kiln Firing of Hirmi Line-2",
  },
  {
    path: "/hirmi/rawmillrollerpress1l2",
    component: MimicPage.RawMillRollerPress1HirmiL2Page,
    description: "Raw Mill Roller Press 1 of Hirmi Line-2",
  },
  {
    path: "/hirmi/rawmillrollerpress2l2",
    component: MimicPage.RawMillRollerPress2HirmiL2Page,
    description: "Raw Mill Roller Press 2 of Hirmi Line-2",
  },
  {
    path: "/hirmi/coolerl2",
    component: MimicPage.CoolerHirmiL2Page,
    description: "Cooler of Hirmi Line-2",
  },
  {
    path: "/hirmi/coalmilll2",
    component: MimicPage.CoalMillHirmiL2Page,
    description: "Coal Mill of Hirmi Line-2",
  },

  // HO Routes

  {
    path: "/ho/millsrunningstatus",
    component: MimicPage.MillRunningPage,
    description: "Mill Running Status of HO",
  },
  // Added by TRID AI on 03-01-2026(837555)
  // {
  //   path: "/ho/northclustersummary",
  //   component: MimicPage.NorthClusterSummary,
  //   description: "North Cluster Summary",
  // },

  // HOP Routes

  {
    // path: "/hodashboardproject/millsrunningstatus",
    path: "/hoproject/millsrunningstatus",
    component: MimicPage.MillRunningHOPPage,
    description: "Mill Running Status of HOP",
  },

  // Sewagram Routes
  {
    path: "/sewagram/powergeneration",
    component: MimicPage.PowerGeneration,
    description: "Power Generation of Sewagram",
  },

  // Vikram Routes
  {
    path: "/vikram/uhdashboard",
    component: MimicPage.UHDashboardVikramPage,
    description: "UH DashBoard of Vikram",
  },
  {
    path: "/vikram/l1dashboard",
    component: MimicPage.L1DashboardVikramPage,
    description: "L1 DashBoard of Vikram",
  },
  {
    path: "/vikram/l2dashboard",
    component: MimicPage.L2DashboardVikramPage,
    description: "L2 DashBoard of Vikram",
  },
  {
    path: "/vikram/l3dashboard",
    component: MimicPage.L3DashboardVikramPage,
    description: "L3 DashBoard of Vikram",
  },
  {
    path: "/vikram/kilnl1",
    component: MimicPage.L1Kiln1VikramPage,
    description: "Kiln1 of Vikram",
  },
  {
    path: "/vikram/kilnl2",
    component: MimicPage.L2Kiln2VikramPage,
    description: "Kiln2 of Vikram",
  },
  {
    path: "/vikram/kilnl3",
    component: MimicPage.L3Kiln3VikramPage,
    description: "Kiln3 of Vikram",
  },
  {
    path: "/vikram/turbinesupervisorywhrs",
    component: MimicPage.TurbineVikramWhrsPage,
    description: "Turbine Supervisory of Vikram",
  },
  {
    path: "/vikram/turbinesteampathsystemwhrs",
    component: MimicPage.TurbineSteamVikramWHRSPage,
    description: "Turbine Steam Path System of Vikram",
  },
  {
    path: "/vikram/aqc1steamandwaterwhrc",
    component: MimicPage.AQC1SteamWaterVikramWHRSPage,
    description: "AQC-1 Steam and Water of Vikram",
  },
  {
    path: "/vikram/overviewwhrs",
    component: MimicPage.OverviewVikramWhrsPage,
    description: "Overview of Vikram",
  },

  // Jafrabad Routes
  {
    path: "/jafrabad/kilnmainpage",
    component: MimicPage.KilnMainPageJafrabadPage,
    description: "Kiln Main Page of Jafrabad",
  },
  {
    path: "/jafrabad/cementmill",
    component: MimicPage.CementMillPageJafrabadPage,
    description: "Cement Mill of Jafrabad",
  },
  {
    path: "/jafrabad/cooler",
    component: MimicPage.CoolerJafrabadPage,
    description: "Cooler",
  },
  {
    path: "/jafrabad/rawmill",
    component: MimicPage.RawMillJafrabadPage,
    description: "Raw Mill of Jafrabad",
  },
  {
    path: "/jafrabad/crusher",
    component: MimicPage.CrusherJafrabadPage,
    description: "Crusher of Jafrabad",
  },
  {
    path: "/jafrabad/coalmill",
    component: MimicPage.CoalMillJafrabadPage,
    description: "Coal Mill of Jafrabad",
  },
  {
    path: "/jafrabad/coalfeeding",
    component: MimicPage.CoalMillFeedingJafrabadPage,
    description: "Coal Mill Feeding of Jafrabad",
  },
  {
    path: "/jafrabad/utility",
    component: MimicPage.UtilityJafrabadPage,
    description: "Utility of Jafrabad",
  },
  {
    path: "/jafrabad/reclaimer",
    component: MimicPage.ReclaimerJafrabadPage,
    description: "Reclaimer of Jafrabad",
  },
  {
    path: "/jafrabad/baghouse",
    component: MimicPage.BagHouseJafrabadPage,
    description: "Bag House of Jafrabad",
  },
  {
    path: "/jafrabad/clinkertransport",
    component: MimicPage.ClinkerTransportJafrabadPage,
    description: "Clinker Transport of Jafrabad",
  },
  {
    path: "/jafrabad/alternatefuelsystem",
    component: MimicPage.AFSJafrabadPage,
    description: "Alternate Fuel System of Jafrabad",
  },
  {
    path: "/jafrabad/jetty",
    component: MimicPage.JettyJafrabadPage,
    description: "Jetty of Jafrabad",
  },

  // Gujarat Routes
  {
    path: "/gujarat/kiln1",
    component: MimicPage.Kiln1GujaratLine1Page,
    description: "Kiln 1 of Gujarat",
  },
  {
    path: "/gujarat/rawmill1",
    component: MimicPage.RawMill1GujaratLine1Page,
    description: "Raw Mill 1 of Gujarat",
  },
  {
    path: "/gujarat/rawmill1feed",
    component: MimicPage.RawMill1FeedGujaratLine1Page,
    description: "Raw Mill 1 Feed of Gujarat",
  },
  {
    path: "/gujarat/packer1&2",
    component: MimicPage.Packer1and2GujaratLine1Page,
    description: "Packer 1 & 2 of Gujarat",
  },
  {
    path: "/gujarat/packer3&4",
    component: MimicPage.Packer3and4GujaratLine1Page,
    description: "Packer 3 & 4 of Gujarat",
  },

  {
    path: "/gujarat/afrwastefiring",
    component: MimicPage.AFRGujaratLine1Page,
    description: "AFR Waste Firing of Gujarat",
  },
  {
    path: "/gujarat/kiln2",
    component: MimicPage.Kiln2GujaratLine2Page,
    description: "Kiln 2 of Gujarat",
  },
  {
    path: "/gujarat/coalmillfeed2",
    component: MimicPage.CoalMillFeed2GujaratLine2Page,
    description: "Coal Mill Feed 2 of Gujarat",
  },
  // The below one is commented from before
  // {
  //   path: "/gujarat/kiln2",
  //   component: MimicPage.Kiln1GujaratLine1Page,
  //   description: "Kiln 2 of Gujarat",
  // },
  {
    path: "/gujarat/coalmill2",
    component: MimicPage.CoalMill2GujaratLine2Page,
    description: "Coal Mill 2 of Gujarat",
  },
  {
    path: "/gujarat/coalmill1",
    component: MimicPage.CoalMill1GujaratLine1Page,
    description: "Coal Mill 1 of Gujarat",
  },
  {
    path: "/gujarat/cooler2",
    component: MimicPage.Cooler2GujaratLine2Page,
    description: "Cooler 2 of Gujarat",
  },
  {
    path: "/gujarat/rawmill2",
    component: MimicPage.RawMill2GujaratLine2Page,
    description: "Raw Mill 2 of Gujarat",
  },
  {
    path: "/gujarat/rawmill2feed",
    component: MimicPage.RawMillFeed2GujaratL2Page,
    description: "Raw Mill Feed 2 of Gujarat",
  },
  {
    path: "/gujarat/cementmill1l2",
    component: MimicPage.CementMill1GujaratLine2Page,
    description: "Cement Mill-1 of Gujarat",
  },
  {
    path: "/gujarat/cementmill2l2",
    component: MimicPage.CementMill2GujaratLine2Page,
    description: "Cement Mill-2 of Gujarat",
  },
  {
    path: "/gujarat/cementmill3l2",
    component: MimicPage.CementMill3GujratL2Page,
    description: "Cement Mill-3 of Gujarat",
  },
  {
    path: "/gujarat/cementmill4l2",
    component: MimicPage.RawMillFeed2GujaratL2Page,
    description: "Cement Mill-4 of Gujarat",
  },
  {
    path: "/gujarat/packer5l1",
    component: MimicPage.Packer_5_GujaratLine2Page,
    description: "Packer 5",
  },
  {
    path: "/gujarat/cementmill4",
    component: MimicPage.CementMill4GujaratLine2Page,
    description: "Cement Mill 4",
  },
  {
    path: "/gujarat/crusherl2",
    component: MimicPage.CrusherGujaratLine2Page,
    description: "Crusher of Line 2 Gujarat",
  },
  {
    path: "/gujarat/coalmillfeed1l1",
    component: MimicPage.CoalMill1FeedGujaratLine1Page,
    description: "Coal Mill Feed 1 of Gujarat Line 1",
  },
  {
    path: "/gujarat/cementmill1feedl2",
    component: MimicPage.CementMill1FeedGujaratLine2Page,
    description: "Cement Mill Feed 1 of Gujarat Line 2",
  },
  {
    path: "/gujarat/cementmill2feedl2",
    component: MimicPage.CementMill2FeedGujaratLine2Page,
    description: "Cement Mill Feed 2 of Gujarat Line 2",
  },
  {
    path: "/gujarat/cementmill3feedl2",
    component: MimicPage.CementMill3FeedGujaratLine2Page,
    description: "Cement Mill Feed 3 of Gujarat Line 2",
  },
  {
    path: "/gujarat/cementmill4feedl2",
    component: MimicPage.CementMill4FeedGujaratLine2Page,
    description: "Cement Mill Feed 4 of Gujarat Line 2",
  },
  {
    path: "/gujarat/coolerl1",
    component: MimicPage.Cooler1GujaratLine1Page,
    description: "Cooler 1 of Gujarat",
  },

  {
    path: "/gujarat/compressorl2",
    component: MimicPage.CompressorGujaratLine2Page,
    description: "compressor of Line 2 Gujarat",
  },
  {
    path: "/gujarat/cttoibausilo1and2l2",
    component: MimicPage.CTtoIBAUSilo1and2GujaratLine2Page,
    description: "compressor of Line 2 Gujarat",
  },
  {
    path: "/gujarat/mechtransferl2",
    component: MimicPage.MechTransferGujaratLine2Page,
    description: "Mecht Transfer Line 2 Gujarat",
  },
  {
    path: "/gujarat/clinkertransportl2",
    component: MimicPage.ClinkerTransportGujaratLine2Page,
    description: "Clinker Transport Line 2 Gujarat",
  },

  {
    path: "/gujarat/jettytransportoldl2",
    component: MimicPage.JettyTransportOldGujaratLine2Page,
    description: "Jetty Transport Old of Line 2 Gujarat",
  },
  {
    path: "/gujarat/jettytransportnewl2",
    component: MimicPage.JettyTransportNewGujaratLine2Page,
    description: "Jetty Transport New of Line 2 Gujarat",
  },
  // Magdalla Routes
  {
    path: "/magdalla/cementgrindingrollepress",
    component: MimicPage.CementGrindingRollerPressMagdallaPage,
    description: "Cement Grinding Roller Press of Magdalla",
  },
  {
    path: "/magdalla/flyashhandling",
    component: MimicPage.FlyashHandlingMagdallaPage,
    description: "Flyash Handling of Magdalla",
  },
  {
    path: "/magdalla/flyashcircuit",
    component: MimicPage.FlyashCircuitMagdallaPage,
    description: "Flyash Circuit of Magdalla",
  },
  {
    path: "/magdalla/rollepress",
    component: MimicPage.RPMagdallaPage,
    description: "Roller Press of Magdalla",
  },
  {
    path: "/magdalla/clinkermaterialhandling",
    component: MimicPage.ClinkerMaterialHandlngMagdallaPage,
    description: "Clinker and Material Handling of Magdalla",
  },
  {
    path: "/magdalla/packer2",
    component: MimicPage.Packer2MagdallaPage,
    description: "Packer 2 of Magdalla",
  },
  {
    path: "/magdalla/ballmilloverview",
    component: MimicPage.BallMillOverviewMagdallaPage,
    description: "Ball Mill Overview of Magdalla",
  },
  {
    path: "/magdalla/grindingsection",
    component: MimicPage.GrindingSectionMagdallaPage,
    description: "Grinding Section of Magdalla",
  },

  {
    path: "/magdalla/packer1",
    component: MimicPage.Packer1MagdallaPage,
    description: "Packer 1 of Magdalla",
  },
  {
    path: "/magdalla/packer3",
    component: MimicPage.Packer3MagdallaPage,
    description: "Packer-3 of Magdalla",
  },
  {
    path: "/magdalla/grindingsection",
    component: MimicPage.Packer3MagdallaPage,
    description: "Grinding Section of Magdalla",
  },
  {
    path: "/magdalla/materialhandling",
    component: MimicPage.MaterialHandlingMagdallaPage,
    description: "Material Handling of Magdalla",
  },
  {
    path: "/magdalla/flyashcircuit",
    component: MimicPage.Packer3MagdallaPage,
    description: "Flyash Circuit of Magdalla",
  },
  {
    path: "/magdalla/silofeedpacking",
    component: MimicPage.SiloFeedPackingMagdallaPage,
    description: "Silo Feed Packing of Magdalla",
  },
  // Sarlanagar : Converted Vasavdatta to Sarlanagar
  {
    path: "/sarlanagar/u3crusher",
    component: MimicPage.U3CrusherL3VasavdattaPage,
    description: "U3 Crusher of Sarlanagar",
  },
  {
    path: "/sarlanagar/cementmillu3",
    component: MimicPage.CementMillBMU3L3VasavdattaPage,
    description: "Cement MIll U3 of Sarlanagar",
  },
  {
    path: "/sarlanagar/cementmillu3rp",
    component: MimicPage.CementMillU3VasavdattaPage,
    description: "Cement MIll Polycom U3 of Sarlanagar",
  },
  {
    path: "/sarlanagar/u3coalmill",
    component: MimicPage.U3CoalMillVasavdattaPage,
    description: "U3 Coal Mill",
  },
  {
    path: "/sarlanagar/u3rawmillrpl3",
    component: MimicPage.U3RawMillRPL3VasavdattaPage,
    description: "U3 Raw Mill RP Overview",
  },
  {
    path: "/sarlanagar/u4cementmillrp",
    component: MimicPage.U4CementMillRPVasavdattaPage,
    description: "U4 Cement Mill RP",
  },
  {
    path: "/sarlanagar/u3kiln",
    component: MimicPage.U3KilnVasavdattaPage,
    description: "U3 Kiln",
  },
  {
    path: "/sarlanagar/cementmillu4",
    component: MimicPage.CementMillU4VasavdattaPage,
    description: "Cement MIll U4 of Sarlanagar",
  },
  {
    path: "/sarlanagar/u4kilnl4",
    component: MimicPage.U4KilnL3VasavdattaPage,
    description: "Kiln U4 of Sarlanagar",
  },
  {
    path: "/sarlanagar/u4coalmill",
    component: MimicPage.U4CoalMillVasavdattaL3Page,
    description: "Coal MIll U4 of Sarlanagar",
  },
  {
    path: "/sarlanagar/u4rawmilloverview",
    component: MimicPage.U4RawMillOverviewL3VasavdattaPage,
    description: "Raw MIll Overview U4 of Sarlanagar",
  },

  // Rawan Routes
  {
    path: "/rawan/clinkertransportl2",
    component: MimicPage.ClinkerTransportRawanL2Page,
    description: "Clinker Transport of Rawan L-2",
  },
  {
    path: "/rawan/coalmilll2",
    component: MimicPage.CoalMillRawanL2Page,
    description: "Coal Mill of Rawan L-2",
  },
  {
    path: "/rawan/rawmill1l2",
    component: MimicPage.RawMill1RawanL2Page,
    description: "Raw Mill 1 of Rawan L-2",
  },
  {
    path: "/rawan/rawmill2l2",
    component: MimicPage.RawMill2RawanL2Page,
    description: "Raw Mill 2 of Rawan L-2",
  },
  {
    path: "/rawan/rawmill3l2",
    component: MimicPage.RawMill3RawanL2Page,
    description: "Raw Mill 3 of Rawan L-2",
  },
  {
    path: "/rawan/kilnl2",
    component: MimicPage.KilnRawanL2Page,
    description: "Kiln of Rawan L-2",
  },
  {
    path: "/rawan/kilnburnerl2",
    component: MimicPage.KilnBurnerRawanL2Page,
    description: "Kiln Burner of Rawan L-2",
  },
  {
    path: "/rawan/kilnfeedcircuitl2",
    component: MimicPage.KilnFeedCircuitRawanL2Page,
    description: "Kiln Feed Circuit of Rawan L-2",
  },
  {
    path: "/rawan/coolerrawanl2",
    component: MimicPage.CoolerRawanL2Page,
    description: "Cooler of Rawan L-2",
  },
  {
    path: "/rawan/stackdatal1",
    component: MimicPage.StackDataRawanLine1Page,
    description: "Stack Data of Rawan L-1",
  },
  {
    path: "/rawan/kilnpcandilcfiringl1",
    component: MimicPage.KilnPCandILCFiringRawanL1Page,
    description: "KILN PC AND ILC FIRING of Rawan L-1",
  },
  {
    path: "/rawan/blendingsilol2",
    component: MimicPage.BlendingSiloRawanL2Page,
    description: "Blending Silo of Rawan L-2",
  },
  {
    path: "/rawan/utilityl2",
    component: MimicPage.UtilityRawanL2Page,
    description: "Utility of Rawan L-2",
  },
  {
    path: "/rawan/limestonetransportcircuitl2",
    component: MimicPage.LimestoneTransportCircuitRawanL2Page,
    description: "Limestone Transport Circuit of Rawan L-2",
  },
  {
    path: "/rawan/lscrusherl2",
    component: MimicPage.CrusherRawanL2Page,
    description: "LS Crusher of Rawan L-2",
  },
  {
    path: "/rawan/lownoxburnerl2",
    component: MimicPage.LowNOXBurnerRawanL2Page,
    description: "Low NOX Burner of Rawan L-2",
  },
  {
    path: "/rawan/limestonetransportcircuit",
    component: MimicPage.BlendingSiloRawanL2Page,
    description: "Limestone Transport Circuit of Rawan L-2",
  },
  {
    path: "/rawan/baghousel2",
    component: MimicPage.BaghouseRawanL2Page,
    description: "Baghouse of Rawan L-2",
  },

  // Line 3
  {
    path: "/rawan/rawmill2hopperbuilding",
    component: MimicPage.RawMill2HopperBuildingRawanLine3Page,
    description: "Raw Mill 2 Hopper Building of Rawan L-3",
  },
  {
    path: "/rawan/rawmill1grindingl3",
    component: MimicPage.RawMill1GrindingRawanL3Page,
    description: "Raw Mill 1 Grinding of Rawan L-3",
  },
  {
    path: "/rawan/rawmill2grindingl3",
    component: MimicPage.RawMill2GrindingRawanL3Page,
    description: "Raw Mill 2 Grinding of Rawan L-3",
  },
  {
    path: "/rawan/blendingsilotokilnfeedl3",
    component: MimicPage.BlendingSiloRawanL3Page,
    description: "Blending Silo to Kiln Feed of Rawan L-3",
  },
  {
    path: "/rawan/preheaterl3",
    component: MimicPage.PreheaterRawanL3Page,
    description: "Preheater of Rawan L-3",
  },
  {
    path: "/rawan/kilnl3",
    component: MimicPage.KilnRawanL3Page,
    description: "Kiln of Rawan L-3",
  },
  {
    path: "/rawan/kilncoalfiringl3",
    component: MimicPage.KilnCoalFiringRawanL3Page,
    description: "Kiln Coal Firing of Rawan L-3",
  },
  {
    path: "/rawan/coalmilll3",
    component: MimicPage.CoalMillRawanL3Page,
    description: "Coal Mill of Rawan L-3",
  },
  {
    path: "/rawan/coolerl3",
    component: MimicPage.CoolerRawanLine3Page,
    description: "Cooler of Rawan L-3",
  },
  {
    path: "/rawan/coalmilll3",
    component: MimicPage.CoalMillRawanL3Page,
    description: "Coal Mill of Rawan L-3",
  },

  // NEW TILE ADDED BY TRIDAI
  {
    path: "/rawan/plantoverview",
    component: MimicPage.PlantOverviewRawanLine3,
    description: "Plant Overview",
  },

  // Panipat Routes
  {
    path: "/panipat/clinkerhandling",
    component: MimicPage.ClinkerHandlingPanipatPage,
    description: "Clinker Handling of Panipat",
  },
  {
    path: "/panipat/clinkersiloextraction",
    component: MimicPage.ClinkerSiloExtractionPanipatPage,
    description: "Clinker Silo Extraction of Panipat",
  },
  {
    path: "/panipat/gypsymwetfly",
    component: MimicPage.GypsumWetFlyAshHandlingPanipatPage,
    description: "Gypsym Wet Fly of Panipat",
  },
  {
    path: "/panipat/cementpreparationfeeding",
    component: MimicPage.CementPreparationFeedingPanipatPage,
    description: "Cement Preparation Feeding of Panipat",
  },
  {
    path: "/panipat/rollerpressfeed",
    component: MimicPage.RPFeedPanipatPage,
    description: "Roller Press Feed of Panipat",
  },
  {
    path: "/panipat/cementpreparation",
    component: MimicPage.CementPreparationPanipatPage,
    description: "Cement Preparation of Panipat",
  },
  {
    path: "/panipat/cementmillbaghouse",
    component: MimicPage.CMBaghousePanipatPage,
    description: "Cement Mill Baghouse of Panipat",
  },
  {
    path: "/panipat/flyash",
    component: MimicPage.FlyashSiloPanipatPage,
    description: "Fly Ash Str. and Trans. of Panipat",
  },
  {
    path: "/panipat/packingplant",
    component: MimicPage.PackingPlantPanipatPage,
    description: "Packing Plant of Panipat",
  },
  {
    path: "/panipat/cementsiloandbulkloading",
    component: MimicPage.CSandBLPanipatPage,
    description: "Cement Silo And Bulk Loading of Panipat",
  },
  {
    path: "/panipat/rollerpress",
    component: MimicPage.RollerPressPanipatPage,
    description: "Roller Press of Panipat",
  },
  {
    path: "/panipat/wrcsilo",
    component: MimicPage.WRCSiloPanipatPage,
    description: "WRC Silo of Panipat",
  },
  // Pali Routes
  {
    path: "/pali/rawmill",
    component: MimicPage.RawMillPaliPage,
    description: "Raw Mill  of Pali",
  },
  {
    path: "/pali/kiln",
    component: MimicPage.KilnPaliPage,
    description: "Kiln of Pali",
  },
  {
    path: "/pali/cementmill",
    component: MimicPage.CementMillPaliPage,
    description: "Cement Mill of Pali",
  },
  {
    path: "/pali/cooler",
    component: MimicPage.CoolerPaliPage,
    description: "Cooler of Pali",
  },
  {
    path: "/pali/cba",
    component: MimicPage.CBAPaliPage,
    description: "CBA of Pali",
  },

  // Dhule Routes
  // Line 2
  {
    path: "/dhule/freshfeed",
    component: MimicPage.FreshFeedDhuleL2Page,
    description: "Fresh Feed of Dhule",
  },
  {
    path: "/dhule/cementgrindingrollerpress",
    component: MimicPage.CementMillRPDhuleL2Page,
    description: "Cement Mill - Roller Press of Dhule",
  },
  {
    path: "/dhule/ballmill",
    component: MimicPage.BallMillDhuleLine2Page,
    description: "Ball Mill of Dhule",
  },
  {
    path: "/dhule/flyashsilo",
    component: MimicPage.FlyashSiloDhuleL2Page,
    description: "Fly Ash Silo of Dhule",
  },
  {
    path: "/dhule/clinkersilofeeding",
    component: MimicPage.ClinkerSiloFeedingDhuleL2Page,
    description: "Clinker Silo Feeding of Dhule",
  },
  {
    path: "/dhule/cementsilos",
    component: MimicPage.CementSiloDhuleL2Page,
    description: "Cement Silos of Dhule",
  },
  {
    path: "/dhule/packer1and2",
    component: MimicPage.Packer1and2DhuleL2Page,
    description: "Packer 1-2 of Dhule",
  },
  {
    path: "/dhule/bulkloading",
    component: MimicPage.BulkLoadingDhuleLine2Page,
    description: "Bulk Loading of Dhule",
  },

  // Basant Nagar Routes
  {
    path: "/basantnagar/cementmill1and2lnvcircuitl1",
    component: MimicPage.CementMill1And2LNVCiruitBasantnagarL1Page,
    description: "Cement mill-1 & 2 LNV Circuit of Basantnagar",
  },
  {
    path: "/basantnagar/cementmill1overviewl1",
    component: MimicPage.CementMill1OverviewBasantnagarL1Page,
    description: "Cement Mill-1 Overview of Basantnagar",
  },
  {
    path: "/basantnagar/cementmill2overviewl2",
    component: MimicPage.CementMill2OverviewBasantnagarL2Page,
    description: "Cement Mill-2 Overview of Basantnagar",
  },
  {
    path: "/basantnagar/cementmill3overviewl3",
    component: MimicPage.CementMill3OverviewBasantnagarL3Page,
    description: "Cement Mill-3 Overview of Basantnagar",
  },
  {
    path: "/basantnagar/coolingwatersysteml1",
    component: MimicPage.CoolingWaterSystemBasantL1Page,
    description: "Cooling Water System of Basantnagar",
  },
  {
    path: "/basantnagar/operationviewl1",
    component: MimicPage.OperationViewBasantnagarL1Page,
    description: "Operation View of Basantnagar",
  },
  {
    path: "/basantnagar/kiln2coalmillandfiringl2",
    component: MimicPage.Kiln2CoalMillAndFiringBasantNagarL2Page,
    description: "Kiln-2 Coal Mill & Firing of Basantnagar",
  },
  {
    path: "/basantnagar/kiln2pyroprocessl2",
    component: MimicPage.Kiln2PyroProcessBasantNagarL2Page,
    description: "Kiln-2 Pyroprocess of Basantnagar",
  },
  {
    path: "/basantnagar/rawmill1overviewl1",
    component: MimicPage.RawMill1BasantL1Page,
    description: "Raw Mill 1 Overview of Basantnagar",
  },
  {
    path: "/basantnagar/rawmill2overviewl2",
    component: MimicPage.RawMill2BasantL2Page,
    description: "Raw Mill 2 Overview of Basantnagar",
  },
  {
    path: "/basantnagar/rawmill3overviewl3",
    component: MimicPage.RawMill3BasantL3Page,
    description: "Raw Mill 3 Overview of Basantnagar",
  },

  // Vishupuram Routes
  // Line 2
  {
    path: "/vishnupuram/dedustingl2",
    component: MimicPage.DedustingVishnupuramL2Page,
    description: "Dedusting of Vishupuram L2",
  },
  {
    path: "/vishnupuram/vcml2",
    component: MimicPage.VCMVishnupuramL2Page,
    description: "VCM of Vishupuram L2",
  },
  {
    path: "/vishnupuram/vrml2",
    component: MimicPage.VRMVishnupuramL2Page,
    description: "VRM of Vishupuram L2",
  },
  {
    path: "/vishnupuram/vpmcrusherl2",
    component: MimicPage.VPMCrusherVishnupuramL2Page,
    description: "VPM Crusher of Vishupuram L2",
  },
  {
    path: "/vishnupuram/kiln2l2",
    component: MimicPage.Kiln2VCMVishnupuramL2Page,
    description: "Kiln 2 of Vishupuram L2",
  },

  // Malkapur Routes
  {
    path: "/malkapur/blendingsilol1",
    component: MimicPage.BlendingSiloMalkapurLine1Page,
    description: "Blending Silo of Malkapur L1",
  },
  {
    path: "/malkapur/coalmilll1",
    component: MimicPage.CoalMillMalkapurL1Page,
    description: "Coal Mill of Malkapur L1",
  },
  {
    path: "/malkapur/coolerl1",
    component: MimicPage.CoolerMalkapurLine1Page,
    description: "Cooler of Malkapur L1",
  },
  {
    path: "/malkapur/lscrusher1l1",
    component: MimicPage.LimestonecrusherMalkapurL1Page,
    description: "Line 1 Limestone Crusher of Malkapur L1",
  },
  {
    path: "/malkapur/lscrusher2l1",
    component: MimicPage.Limestonecrusher2MalkapurL1Page,
    description: "Line 2 Limestone Crusher of Malkapur L1",
  },
  {
    path: "/malkapur/kilnl1",
    component: MimicPage.KilnPHMalkapurL1Page,
    description: "Kiln  of Malkapur L1",
  },
  {
    path: "/malkapur/poldosscl1",
    component: MimicPage.PoldosSCMalkapurL1Page,
    description: "Poldos SC of Malkapur L1",
  },
  {
    path: "/malkapur/rawmill1l1",
    component: MimicPage.RawMill1MalkapurL1Page,
    description: "Raw Mill-1 of Malkapur L1",
  },
  {
    path: "/malkapur/vrmbfl1",
    component: MimicPage.VRMBFMalkapurL1Page,
    description: "VRM BF of Malkapur L1",
  },
  {
    path: "/malkapur/cementmill1l1",
    component: MimicPage.CementMill1MalkapurLine1Page,
    description: "Cement Mill-1 of Malkapur L1",
  },
  {
    path: "/malkapur/cementmill2l1",
    component: MimicPage.VRMBFMalkapurL1Page,
    description: "Cement Mill-2 of Malkapur L1",
  },
  {
    path: "/malkapur/flyashsilol1",
    component: MimicPage.VRMBFMalkapurL1Page,
    description: "Fly Ash Silo  of Malkapur L1",
  },
  {
    path: "/malkapur/packer12l1",
    component: MimicPage.Packer1and2MalkapurL1Page,
    description: "Packer 1&2 of Malkapur L1",
  },
  {
    path: "/malkapur/packer34l1",
    component: MimicPage.Packer3and4MalkapurL1Page,
    description: "Packer 3&4 of Malkapur L1",
  },
  {
    path: "/malkapur/flyashsilol1",
    component: MimicPage.FlyAshSiloMalkapurL1Page,
    description: "Flyash silo of Malkapur L1",
  },

  // Chilmakur Routes
  {
    path: "/chilamkur/preheaterl1",
    component: MimicPage.PreheaterChilmakurL1Page,
    description: "Preheater of Chilamkur L1",
  },
  {
    path: "/chilamkur/kilnl1",
    component: MimicPage.KilnChilmakurL1Page,
    description: "Kiln of Chilamkur L1",
  },
  {
    path: "/chilamkur/coolerl1",
    component: MimicPage.CoolerChilmakurLine1Page,
    description: "Cooler of Chilamkur L1",
  },
  {
    path: "/chilamkur/rawmill1l1",
    component: MimicPage.RawMill1ChilmakurLine1Page,
    description: "Raw Mill-1 of Chilamkur L1",
  },
  {
    path: "/chilamkur/rawmill2l1",
    component: MimicPage.RawMill2ChilmakurLine1Page,
    description: "Raw Mill-2 of Chilamkur L1",
  },
  {
    path: "/chilamkur/rollerpressl1",
    component: MimicPage.RollerPressChilamkurL1Page,
    description: "Roller Press of Chilamkur L1",
  },
  {
    path: "/chilamkur/oldcoalmilll1",
    component: MimicPage.OldCoalMillChilamkurL1Page,
    description: "Old Coal Mill of Chilamkur L1",
  },
  {
    path: "/chilamkur/newcoalmilll1",
    component: MimicPage.NewCoalMillChilamkurL1Page,
    description: "New Coal Mill of Chilamkur L1",
  },
  {
    path: "/chilamkur/finecoaltvrl1",
    component: MimicPage.FineCoalTVRChilmakurLine1Page,
    description: "Fine Coal TVR of Chilamkur L1",
  },
  {
    path: "/chilamkur/cementmill1l1",
    component: MimicPage.CementMill1ChilmakurL1Page,
    description: "Cement Mill-1 of Chilamkur L1",
  },
  {
    path: "/chilamkur/cementmill2l1",
    component: MimicPage.CementMill2ChilmakurL1Page,
    description: "Cement Mill-2 of Chilamkur L1",
  },

  // Plant Page Route
  {
    path: "/:name",
    component: MimicPage.MillsDashboard,
    description: "This is the Plant Page",
  },

  // Chart Visualisation Route
  {
    path: "/chartspage",
    component: MimicPage.ChartsVisual,
    description: "This is the charts Page",
  },
  {
    path: "/chartspage-group",
    component: MimicPage.ChartsVisualGroupTags,
    description: "This is the group tags charts Page",
  },
  {
    path: "/kpi-dashboard",
    component: MimicPage.KpiDashboard,
    description: "KPI Dashboard",
  },

  //Trends Routes
  {
    path: "/viewtrends",
    component: MimicPage.Trends,
    description: "Trends Visualization",
  },

  //Help section---------- View Docs
  {
    path: "/help",
    component: MimicPage.ViewDocuments,
    description: "Documentation In CDH",
  },
];
