//Land Grab is a resource management game about saving people from a natural disaster.

/** Note to player: paste your save string right here (if you have one). **/
var g_LoadString = "";

/*Thank you to:
https://www.khanacademy.org/computer-programming/image-tutorial-hope/6740408654856192
*/

/** Normally, I'm a huge believer in putting lots of comments in my code. **/
/** Due to file size restrictions, I removed comments to make room for more code. **/

{
frameRate(30);
var tilesClaimed=0;
var goldenClaimTilesLeft=0;
var shiftPressed=false;

var TT_PAVED_OVER=0,TT_DESERT=1,TT_LAKE=2,TT_PLAINS=3,TT_SWAMP=4,TT_SLIMED=5,TT_MAP_EDGE=6,TT_LAVA=7,TT_WASTELAND=8,TT_MITHRIL=9,TT_CYBERMIND=10,TT_DDESERT=11,TT_DLAKE=12,TT_DPLAINS=13,TT_DSWAMP=14,TT_DCYBERMIND=15,TT_DWASTELAND=16,BT_HOUSE=0,BT_FARM=1,BT_COLLECTOR=2,BT_MINE=3,BT_MER_MALL=4,BT_ENCHANTING_TABLE=5,BT_FURNACE=6,BT_TERRAFORMER=7,BT_REEF=8,BT_SHELTER=9,BT_IRS=10,BT_MITHRIL_MINE=11,BT_LAVA_FREEZER=12,BT_BACKSIDE_TERRAFORMER=13,BT_UNDERWATER_RUINS=14,CT_SWARM=0,CT_DRAGON=1,CT_BURNING=2,CT_FISH=3,CT_CAMEL=4,CT_SLIME=5,CT_DEC_EYE=6,CT_SPARK=7,CT_TRAIN_HEAD=8,CT_TRAIN_BODY=9,CT_TRAIN_TAIL=10,CT_TURTLE=11,CT_TILE_GEN_FORCER=12,CT_FIRE_GIANT=13,CT_COSMIC=14,CT_EDGE_FINDER=15;

//Each is the amount generated or consumed per day:
var foodProduction=0;
var foodProductionFromHouse=0;
var foodProductionFromFarms=0;
var foodInternalFromRibbon=0;
var foodProjectedProductionFromTerraformers=0;
var foodProductionMulti=1;
var foodProductionMultiFromUCC=1;
var foodProductionMultiFromAqueductsOriginal=1;
var foodProductionMultiFromAqueducts=1;
var foodProductionMultiFromIronTools=1;
var foodProductionMultiFromInstaGrow=1;
var foodAppleProductionMultiFromFrosthour=1;
var foodConsumption=0;
var foodConsumptionFromHouse=0;
var foodConsumptionFromDragons=0;
var foodConsumptionFromBank=0;
var foodConsumptionMulti=1;
var foodConsumptionMultiFromSpice=1;
var foodNetIncome=0;
var foodResource=20;
var foodBonusFromFishingOnReef=0;
var foodGainedAtEachSpellCast=0;
var foodGivenToBank=0;

var manaProduction=0;
var manaProductionFromCollectors=0;
var manaProductionFromCollectionPower=0;
var manaProductionFromHouse=0;
var manaConsumption=0;
var manaConsumptionFromMines=0;
var manaConsumptionFromLifeSupport=0;
var manaConsumptionFromFarms=0;
var manaConsumptionFromAutocasting=0;
var manaProductionMulti=1;
var manaProductionMultiFromFrosthour=1;
var manaProductionMultiFromMagicOre=1;
var manaProductionMultiFromCyber=1;
var manaProductionMultiFromChallengeRules=1;
var manaProductionMultiFromRuneStoneOriginal=1;
var manaProductionMultiFromRuneStoneFinal=1;
var manaProductionMultiFrom8YC=1;
var runeStoneEffectExponent=1;
var manaProductionMultiFromH2O=1;
var manaConsumptionMulti=1;
var manaConsumptionMultiFromFans=1;
var manaNetIncome=0;
var manaResource=0;
var manaFromSlimeMulti=1;
var manaAndGdFromSlimeMultiFrom8YC=1;
var manaFromSlimeMultiFromTech=1;

var pearlProduction=0;
var pearlProductionFromReef=0;
var pearlProductionFromH2O=0;
var pearlConsumption=0;
var pearlConsumptionFromLavaFreezers=0;
var pearlProductionMulti=1;
//Note: Ultimate Upgrades also affect pearl from fishing
var pearlProductionMultiFromUltimate=1;
var pearlProductionMultiFromMultiShift=1;
var pearlProductionMultiFromFrosthour=1;
var pearlConsumptionMulti=1;
var pearlConsumptionMultiFromFans=1;
var pearlTradeMultiFromCyber=1;
var pearlNetIncome=0;
var pearlResource=0;
var pearlFromFishMulti=1;
var enchantingPearlCostMulti=1;

var stoneProductionFromMines=0;
var stoneProjectedIncomeFromLavaFreezers=0;
var stoneProductionMulti=1;
var stoneProductionMultiFromStonemover=1;
var stoneProductionMultiFromMineralEnrichment=1;
var stoneProductionMultiFromReefMagic=1;
var stoneProductionMultiFromChallengeRules=1;
var stoneProductionMultiFromCoolRock=1; //Also affects manual mining
var stoneProductionMultiFromFrosthour=1;
var stoneGuaranteedProduction=0;
var stoneProjectedProduction=0;
var stoneConsumption=0;
var stoneConsumptionFromRuneStone=0;
var stoneConsumptionFromFurnaces=0;
var stoneConsumptionMulti=1;
var stoneConsumptionMultiFromGiants=1;
var stoneNetIncome=0;
var stoneResource=10;
var stoneLastConsumedByRuneStone=0;
var generalManualMiningMulti=1;

var spiceProjectedProduction=0;
var spiceConsumption=0;
var spiceConsumptionFromHouse=0;
var spiceConsumptionFromDragons=0;
var spiceConsumptionFromMines=0;
var spiceConsumptionFromInnovation=0;
var spiceConsumptionMulti=1;
var spiceTradeMultiFromCyber=1;
var spiceNetIncome=0;
var spiceResource=0;

var gadoliniumProduction=0;
var gadoliniumProductionFromMines=0;
var gadoliniumProductionFromLavaFreezers=0;
var gadoliniumProductionMulti=1;
var gadoliniumProductionMultiFromUltimate=1;
var gadoliniumNetIncome=0;
var gadoliniumResource=0;
var gadoliniumFromSlimeMulti=1;
var gadoliniumFromSlimeMultiFromHouse=1;
var gadoliniumFromSlimeMultiFromFrost=1;
var gadoliniumFromSlimeMultiFromCyber=1;

var flameOrbProduction=0;
var flameOrbProductionFromLavaFreezers=0;
var flameOrbProductionFromFireplace=0;
var flameOrbConsumption=0;
var flameOrbConsumptionFromFrosthour=0;
var flameOrbConsumptionFromAutocasting=0;
var flameOrbConsumptionFromFurnaces=0;
var flameOrbConsumptionFromTerraformers=0;
var flameOrbConsumptionFromEtD=0;
var flameOrbConsumptionFromSeed=0;
var flameOrbProductionMulti=1;
var flameOrbProductionMultiFromH2O=1;
var flameOrbConsumptionMulti=1;
var flameOrbConsumptionMultiFromReef=1;
var flameOrbConsumptionMultiFromSCB=1;
var flameOrbNetIncome=0;
var flameOrbResource=0;

var ironProjectedProduction=0;
var ironProjectedIncomeFromFurnaces=0;
var ironProjectedIncomeFromLavaFreezers=0;
var ironProductionMulti=1;
var ironProductionMultiFromUltimate=1;
var ironProductionMultiFromHouse=1;
var ironProductionMultiFromMineralEnrichment=1;
var ironProductionMultiFromSynergy=1;
var ironProductionMultiFromSpecialCircuitBox=1;
var ironProductionMultiFromGiants=1;
var ironMithrilProductionMultiFromFrosthour=1;
var ironConsumption=0;
var ironConsumptionFromMithrilMines=0;
var ironConsumptionFromUpkeep=0;
var ironUpkeepFromHouses=0;
var ironUpkeepFromFarms=0;
var ironUpkeepFromCollectors=0;
var ironUpkeepFromShelters=0;
var ironUpkeepFromMines=0;
var ironUpkeepFromMithrilMines=0;
var ironUpkeepFromTables=0;
var ironUpkeepFromIRSs=0;
var ironUpkeepFromLavaFreezers=0;
var ironUpkeepFromCoolingFans=0;
var ironProjectedNetIncome=0;
var ironResource=0;
var upkeepLastSatisfiedRatio=1;

var goldenAppleProjectedProduction=0;
var goldenAppleProjectedIncomeFromFarms=0;
var goldenAppleProjectedIncomeDueToTables=0;
var goldenAppleProductionMulti=1;
var goldenAppleProductionMultiFromHouse=1;
var goldenAppleProductionMultiFromTF=1;
var goldenAppleProductionMultiFromUltimate=1;
var goldenAppleNetIncome=0;
var goldenAppleResource=0;

var darkEnergyProjectedBaseIncome=0;
var darkEnergyProjectedIncomeFromMines=0;
var darkEnergyProjectedIncomeFromMithrilMines=0;
var darkEnergyProjectedIncomeFromDarkDesert=0;
var darkEnergyProductionFromTF=0;
var darkEnergyProductionMulti=1;
var darkEnergyProductionMultiFromFrosthour=1;
var darkEnergyProductionMultiFromDEC=1;
var darkEnergyProductionMultiFromCyber=1;
var darkEnergyProductionMultiFromMultiShift=1;
var darkEnergyProductionMultiFromFurnacesOriginal=1;
var darkEnergyProductionMultiFromFurnaces=1;
var darkEnergyProductionMultiFromTurtles=1;
var darkEnergyProductionMultiFromAttunement=1;
var darkEnergyProductionMultiFromChallengeRules=1;
var darkEnergyProjectedNetIncome=0;
var darkEnergyResource=0;
//For scoring DECs:
var totalDarkEnergyGained=0;

var darkEnergyFuelMultiFromFancyGlove=1;

var bioOrbProjectedProduction=0;
var bioOrbProductionFromInstaGrow=0;
var bioOrbProjectedProductionFromSeed=0;
var bioOrbConsumption=0;
var bioOrbConsumptionFromFrosthour=0;
var bioOrbConsumptionFromRibbon=0;
var bioOrbProductionMulti=1;
var bioOrbNetIncome=0;
var bioOrbResource=0;
var totalBioOrbGainedFromEnchanting=0;
var enchantingUltimBioOrbPercent=0;

var mithrilProductionFrom4PS=0;
var mithrilGuaranteedProduction=0;
var mithrilProjectedBaseIncome=0;
var mithrilProjectedIncomeFromMithrilMines=0;
var mithrilProjectedIncomeFromFurnaces=0;
var mithrilProductionMulti=1;
var mithrilProductionMultiFromReef=1;
var mithrilProductionMultiFromDrillBit=1;
var mithrilProjectedFinalIncome=0;
var mithrilResource=0;

var evacuees=0;
var evacueesEnRoute=0;
var maxEvacuees=0;
var maxEvacueesBase=0;
var maxEvacueesFromSRCs=0;
var maxEvacueesFromShelters=0;
var maxEvacueesFromWifi=0;
var maxEvacueesFromReef=0;
var maxEvacueesMulti=1;
var maxEvacueesMultiFromHouse=1;
var maxEvacueesMultiFromHeatingSystem=1;
var maxEvacueesMultiFromZoning=1;
var maxEvacueesMultiFromFoodBank=1;
var maxEvacueesMultiFromMultiShift=1;
var maxEvacueesRaw=0;

var innovationMulti=1;
var innovationPower=1;
var innovationLastConsumed=0;
var lotsOfThingsMultiFromTerraformers=1;
var tier3MultiFromUpkeep=1;
var tier3MultiFrom3B=1;
var fastererness=1;//Only affects furnaces
var textbookTier1Multi=1;
var textbookTier3Multi=1;
var foodColoringMulti=1;
//Bonuses to ench. tables:
var flameHeartMulti=1;
var enchantingTableSynergyMulti=1;
var mithrilEnchantingMultiFromSwamp=1;
var mithrilEnchantingMultiFromMines=1;
var enchantingProductMultiFromCyber=1;
var enchantingProductMultiFromTurtles=1;
var enchantingProductMultiFromFrosthour=1;
var shelterCostMultiFromPizza=1;
var resourcesOnSpellCast=0;
var greetedCosmic=!1;
var enchantingPriceMulti=1;

//See old file versions for more info:
var globalCyclicAnimation=0,gcaS=0,gcaC=1,worldgenOption=4,PerlinNoiseRandomFactor=random(-500,500),mapEdgeRandomFactor=2*sq(sin(PerlinNoiseRandomFactor))+cos(PerlinNoiseRandomFactor+7)-1,trainPowerLineX=0,canCastSpells=!0,tilesTerraformed=0,cameraX=0,cameraY=0,terraform_cost_multi=function(l){return 1.22-0.02*l;},selectedTile=-1,currentlyInBackside=!1,g_ReefData,g_Diplomacy,g_ConstructionManager,g_ToggleButtonManager,g_ResourcePane,g_Factors,g_FlyingText,g_EnchTableFlyingText,g_Dragon,g_TrainHead,g_TrainBody,g_TrainTail,g_TechnologyManager,g_TutorialProgress,g_ArtifactManager,allTiles,allEnchTableAnimations,allGoldClaimAnimations,allRWCLimiterAnimations,recalculate_building_effects,check_day_end,building_on_tile,find_closest_creature,tile_at_position,allSpells=[],allIRSDatas=[],allBuildings=[],allCreatures=[],spellHints=[],smgfxx=[0,0,0,0,0,0,0,0,0,0,0,0],smgfxy=[0,0,0,0,0,0,0,0,0,0,0,0];

//Was the cutscene shown in this run?
var backsideCutsceneShown = false;
var deCutscene2Shown = false;
var photosensitivityShown = false;

var breakdownTab=1;
var currentScreen = "frontend";
var nextScreen = "main";
var is_in_cutscene=function(){return currentScreen.includes("cutscene");};
var enchantingScreenSelection = 0;
var reefScreenShowBonuses = false;

var DECEyeGazingText = "";

//Unclaimed space & void space (NOT dark energy) is this color:
var FRONTSIDE_VOID_COLOR=color(0),BACKSIDE_VOID_COLOR=color(64,12,0);

var WM_SPELL_DESC=["Fish spawn instantly, gain pearl when fishing","Cannot be cast in Frosthour"];
var IG_SPELL_DESC=["Repairs all farms within its radius","Cannot be cast in Frosthour"];
var SM_SPELL_DESC=["Quadruples passive stone production","Autocast; triples passive stone production"];
var SM_SPELL_LORE=["An ancient spell that cleaves rock.  Must be cast while standing at a lvl. 2+ mine.  Named after a magic dragon who lived thousands of years ago.","A spell that cuts rock.  Is autocast every 5th day, & its mana cost is amortized.  Named after a magic dragon who lives thousands of years ago."];
var DA_SPELL_LORE=["Listen to the mysterious power.  Allows you to detect dark energy & equip mines with the ability to mine dark energy!  (Upgrade a mine to lvl. 4 while this is active.)","Listen to the force you're beginning to understand.  Allows you to detect dark energy & equip mines with the ability to mine dark energy!","Listen to an energy you know rather well.  Makes dark energy visible to the naked eye, allowing certain buildings to be upgraded.","Attune to the cosmic voice of a good friend.  You can now cast the spell while it's still active to restore it to full duration."];
var IG_SPELL_LORE=["This spell rejuvenates crops, boosting their yield.  Also spends your food to repair farms.  Must be cast while standing in the midst of a destroyed farm.","This spell rejuvenates crops, boosting their yield.  Also spends your food to repair farms.  Can be cast on any farm."];
var FOOD_TO_KILL_SLIME=3;
var g_Credits={positions:["Design","Graphics","Writing","Programming"],playtesters:["Nathan","Ananya","JC","Batuhan","Daniel","Zeke","Ethan","Natalie","John","Pxide","Bradley","Cutler","Evan","Bruce","Billy Bob Jones","Thu","Quinn","Story"]};g_Credits.playtesters.sort();
var movesLeft = 2;
var movesPerDay = 2;
var dayCount = 1;
//If true, a tile was slimed at the beginning of today:
var tileSlimed = false;
var daysUntilSwarmArrival = 79;
var dayToUnlockDarkEnergy = 400;
var dayToRunEnd = 1000;
//The current day number is shown for a brief moment.
var ticksToShowDayNumber = 0;
//Used to animate cutscenes:
var cutsceneTickCounter = 0;
//0=spring,1=summer,2=autumn,3=winter,4=frosthour
var season=1;
var season_to_string=function(){
switch(season){case 0:return"spring";case 1:return"summer";case 2:return"autumn";case 3:return"winter";case 4:return"frosthour";default:return"undefined";}};
var rwcLimiter=createImage(32,32,RGB);noStroke();fill(128,128,128);rect(0,0,32,32);fill(192,0,0);for(var i=4;i<32;i+=8){quad(i,0,4+i,0,0,4+i,0,i);quad(32,i,32,4+i,4+i,32,i,32);}rwcLimiter=get(0,0,32,32);
var round32=function(x){
if(x<0){return-round32(-x);}var y=x-x%32;if(x%32>=16&&x>0){y+=32;}if(x&32>=-16&&x<0){y+=32;}return y;};
var true_func=function(){return!0;};
var false_func=function(){return!1;};
var null_func=function(){};
var base_flame_orb_from_enchanting;
var mana_multi_8YC=function(x){return 1+0.1*pow(x,0.65);};
var dissipation=function(){if(flameOrbResource<10000){return 1;}if(flameOrbResource<100000){return 1.1-flameOrbResource/100000;}return 0.1;};
var draw_smiley_face=function(X,Y,g){
g=g||0;var a=mouseIsPressed&&dist(mouseX,mouseY,X,Y)<20;stroke(0);fill(192*(1-g),192+63*g,0);ellipse(X,Y,40,40);if(g>0){arc(X-2,Y+3,22,20,70,170);}else if(a){line(X-8,Y+12,X+8,Y+12);}else{arc(X,Y+4,30,20,30,150);}line(X-1,Y+1,X-5,Y+6);line(X-5,Y+6,X-1,Y+6);if(g>0){line(X+9,Y-6,X+4,Y-5);fill(0);noStroke();ellipse(X-6,Y-5,4,6);}else if(a){line(X-8,Y-7,X-4,Y-5);line(X-8,Y-3,X-4,Y-5);line(X+8,Y-7,X+4,Y-5);line(X+8,Y-3,X+4,Y-5);}else{fill(0);noStroke();ellipse(X-6,Y-5,4,6);ellipse(X+6,Y-5,4,6);}};
} //General global stuff

{
//For more info, see past file versions:
var Persistent_Data=function(){
this.saveNeeded=!1;this.statTotalPeopleSaved=0;this.statLastPeopleSaved=0;this.statTotalUPGained=0;this.statCurrentUP=0;this.statLastUPFromPeople=0;this.statLastUPFromChallenges=0;this.statLastChallengeWon=!1;this.statTotalLevel5=0;this.statLastLevel5=0;this.statHighestReefHealthRecord=0;this.statLastReefHealthRecord=0;this.statWifi=0;this.statCosmic=0;this.statLastFrosthours=0;this.statTotalFrosthours=0;this.techOptionsShowPurchased=!0;this.techOptionsShowAvailable=!0;this.techOptionsShowUnavailable=!0;this.techOptionsShowPurchasedFromCamels=!0;this.currentChallenge="SRC";this.upgradeShopPageCount=1;this.upgradeShopCurrentPage=1;this.loadErrorMessage="";this.lastAPs=0;this.totalAPs=0;this.discoveredArtifactList=[];this.upgradesList=[];this.challengesList=[];this.statLastWaterCast=this.statHighestWaterCast=0;this.statLast500=this.statTotal500=0;this.uuOptions=0;};
Persistent_Data.prototype.add_upgrade=function(a,d1,d2,eF,dF,cF,m,uF,l,h){
this.upgradesList.push({abbreviation:a,desc1:d1,desc2:"("+d2+")",effectFunc:eF,dispFunc:dF,costFunc:cF,timesPurchased:0,maxLevel:m,unlockFunc:uF,hiddenFunc:h||false_func,lockedStr:l});};
Persistent_Data.prototype.add_challenge=function(a,n,d1,d2,sF,cF,r,uF){
this.challengesList.push({abbreviation:a,name:n,descFunc1:d1,descFunc2:d2,unlockFunc:uF,startRunFunc:sF,conditionFunc:cF,reward:r,timesCompleted:0,hideName:false_func});};
Persistent_Data.prototype.get_total_upgrades_purchased=function(){
var c=0;this.upgradesList.forEach(function(u){c+=u.timesPurchased;});return c;};
Persistent_Data.prototype.get_total_challenges_completed=function(){
var c=0;this.challengesList.forEach(function(C){c+=C.timesCompleted;});return c;};
Persistent_Data.prototype.get_has_completed_1_challenge=function(){
for(var i=0;i<this.challengesList.length;i+=1){if(this.challengesList[i].timesCompleted>0){return!0;}}return!1;};
Persistent_Data.prototype.get_current_challenge_unlocked=function(){
if(this.currentChallenge.substring(2,3)!=="C"){throw"Unknown Challenge";}var f=!1,i=0;for(;i<this.challengesList.length;i+=1){if(this.challengesList[i].abbreviation===this.currentChallenge.substring(0,2)){f=!0;return this.challengesList[i].unlockFunc();}}if(!f){throw"Unknown Challenge abbreviation";}return!1;};
Persistent_Data.prototype.get_cn_number=function(){
if(this.get_has_completed_1_challenge()){var c=0;this.challengesList.forEach(function(C){c+=C.timesCompleted===0&&C.unlockFunc();});return c;}return 1;};
Persistent_Data.prototype.unlock_wifi=function(){
this.statWifi+=1;if(this.statWifi>9){this.statWifi=4;}};
Persistent_Data.prototype.get_has_wifi=function(){return this.statWifi>0;};
Persistent_Data.prototype.on_greet_cosmic=function(){this.statCosmic+=1;};
Persistent_Data.prototype.on_run_end=function(){
this.statLast500=(tilesClaimed>499?1:0);this.statTotal500+=this.statLast500;
this.statLastWaterCast=allSpells.by_name("Water Music").castStat;this.statHighestWaterCast=max(this.statHighestWaterCast,this.statLastWaterCast);
this.saveNeeded=!0;g_TutorialProgress.disable_tutorial();while(allEnchTableAnimations.length>0){allEnchTableAnimations.pop();}while(allGoldClaimAnimations.length>0){allGoldClaimAnimations.pop();}while(allRWCLimiterAnimations.length>0){allRWCLimiterAnimations.pop();}if(this.currentChallenge.substring(2,3)!=="C"){throw"Unknown abbreviation";}var challengeFound=!1;for(var i=0;i<this.challengesList.length;i+=1){if(this.challengesList[i].abbreviation===this.currentChallenge.substring(0,2)){challengeFound=!0;if(this.challengesList[i].conditionFunc(this.challengesList[i].timesCompleted)){this.statLastChallengeWon=!0;this.statLastUPFromChallenges=this.challengesList[i].reward;this.challengesList[i].timesCompleted+=1;}else{this.statLastChallengeWon=!1;this.statLastUPFromChallenges=0;}}}if(!challengeFound){throw"Unknown Challenge abbreviation";}this.statLastPeopleSaved=evacuees;this.statLastUPFromPeople=floor(0.1*this.statLastPeopleSaved);this.statTotalPeopleSaved+=this.statLastPeopleSaved;this.statCurrentUP+=this.statLastUPFromPeople+this.statLastUPFromChallenges;this.statTotalUPGained+=this.statLastUPFromPeople+this.statLastUPFromChallenges;this.statLastLevel5=allBuildings.count_level_5();this.statTotalLevel5+=this.statLastLevel5;this.statLastReefHealthRecord=constrain(g_ReefData.healthRecord,0,500);this.statHighestReefHealthRecord=max(this.statHighestReefHealthRecord,this.statLastReefHealthRecord);this.lastAPs=0;for(var i=0;i<g_ArtifactManager.get_length();i+=1){this.lastAPs+=g_ArtifactManager.artifactList[i].level>0;g_ArtifactManager.artifactList[i].level=0;}this.totalAPs+=this.lastAPs;};
Persistent_Data.prototype.on_enter_frosthour=function(){
this.statLastFrosthours+=1;this.statTotalFrosthours+=1;};
Persistent_Data.prototype.draw_4_page_buttons=function(){
var c=this.get_is_certificate_unlocked();stroke(0);if(mouseX>=4&&mouseX<width/4-4&&mouseY>=4&&mouseY<36){fill(192,208,208);}else{fill(128,160,160);}rect(4,4,width/4-8,32);if(currentScreen==="challenges"){rect(6,6,width/4-12,28);}if(mouseX>=width/4+4&&mouseX<width/2-4&&mouseY>=4&&mouseY<36){fill(224,128,255);}else{fill(192,128,255);}rect(width/4+4,4,width/4-8,32);if(currentScreen==="ultimate-shop"){rect(width/4+6,6,width/4-12,28);}if(mouseX>=width/2+4&&mouseX<3*width/4-4&&mouseY>=4&&mouseY<36){if(c){fill(255,255,192);}else{fill(128,255,255);}}else{if(c){fill(255,255,128);}else{fill(0,255,255);}}rect(width/2+4,4,width/4-8,32);noFill();if(c){arc(width/2+6.5,6.5,9,9,0,90);arc(3*width/4-5.5,6.5,9,9,90,180);arc(3*width/4-5.5,34.5,9,9,180,270);arc(width/2+6.5,34.5,9,9,270,360);line(width/2+11,8,3*width/4-11,8);line(width/2+11,32,3*width/4-11,32);line(width/2+8,11,width/2+8,29);line(3*width/4-8,11,3*width/4-8,29);}if(currentScreen==="persistent-statistics"||currentScreen==="artifact-persistent-statistics"){rect(width/2+6,6,width/4-12,28);}if(mouseX>=3*width/4+4&&mouseX<width-4&&mouseY>=4&&mouseY<36){fill(255,160,160);}else{fill(255,64,64);}rect(3*width/4+4,4,width/4-8,32);if(currentScreen==="savegame"){rect(3*width/4+6,6,width/4-12,28);}fill(0,0,0);textAlign(CENTER,CENTER);textSize(16);text("Challenges",width/8,20);text("Upgrades",3*width/8,20);text("Statistics",5*width/8,20);text("Savegame",7*width/8,20);var m=this.get_cn_number(),n=this.get_count_affordable_upgrades();if(m>0&&!this.saveNeeded){noStroke();fill(224,64,64);ellipse(8,8,16,16);fill(255,255,255);textSize(12);text(m,8,8);}if(n>0){noStroke();fill(224,64,64);ellipse(width/4+8,8,16,16);fill(255,255,255);textSize(12);text(n,width/4+8,8);}if(this.saveNeeded&&(n<1||this.get_total_challenges_completed()>1)){noStroke();fill(224,64,64);ellipse(3*width/4+8,8,16,16);fill(255,255,255);textSize(12);text("!!",3*width/4+8,8);}textAlign(LEFT,BASELINE);fill(0,0,0);};
Persistent_Data.prototype.on_4_page_buttons_pressed=function(){
if(mouseY<4||mouseY>=36){return!1;}if(mouseX>=4&&mouseX<width/4-4){currentScreen="challenges";this.loadErrorMessage="";return!0;}if(mouseX>=width/4+4&&mouseX<width/2-4){currentScreen="ultimate-shop";this.update_us_page_count();this.loadErrorMessage="";return!0;}if(mouseX>=width/2+4&&mouseX<3*width/4-4){currentScreen="persistent-statistics";this.loadErrorMessage="";return!0;}if(mouseX>=3*width/4+4&&mouseX<width-4){currentScreen="savegame";this.loadErrorMessage="";return!0;}return!1;};
Persistent_Data.prototype.on_4_page_key_pressed=function(){
switch(key.code){case 49:currentScreen="challenges";this.loadErrorMessage="";return!0;case 50:currentScreen="ultimate-shop";this.update_us_page_count();this.loadErrorMessage="";return!0;case 51:currentScreen="persistent-statistics";this.loadErrorMessage="";return!0;case 52:currentScreen="savegame";this.loadErrorMessage="";return!0;}return!1;
};
Persistent_Data.prototype.render_end_of_run_screen=function(){
var s=24,t="Evacuees saved: "+g_ResourcePane.evacuee_to_string(this.statLastPeopleSaved)+" ("+g_ResourcePane.evacuee_to_string(this.statLastUPFromPeople)+" Points)";background(255,255,0);fill(0);textSize(24);textAlign(CENTER,CENTER);if(this.statLastChallengeWon){text(">>> "+this.currentChallenge+" Completed! <<<",width/2,75);}text("End of run!",200,125);for(;textWidth(t)>398;s-=1){textSize(s);}text(t,200,175);textSize(24);text("Challenge bonus: "+this.statLastUPFromChallenges+" Points",200,225);text("Your score: "+g_ResourcePane.evacuee_to_string(this.statLastUPFromPeople+this.statLastUPFromChallenges)+" Points",200,275);if(this.lastAPs>0){textSize(18);text("Artifact Points gained: "+this.lastAPs,200,315);}if(mouseX>=140&&mouseY>=335&&mouseX<260&&mouseY<375){fill(128,255,128);}else{fill(0,255,0);}stroke(0,0,0);rect(140,335,120,40);fill(0,0,0);textSize(24);text("Continue",200,355);textSize(12);stroke(0,0,0);if(this.statLastChallengeWon&&mouseY>=63&&mouseY<89){fill(255,255,255);rect(min(mouseX,202),90,198,32);fill(0,0,0);text("Completing Challenges grants some\npermanent boosts to your power.",min(mouseX,202)+99,106);}if(mouseY>=163&&mouseY<189){fill(255,255,255);rect(min(mouseX,248),190,152,32);fill(0,0,0);text("You get 1 Ultimate Point for\neach 10 people you saved.",min(mouseX,248)+76,206);}if(mouseY>=213&&mouseY<239){fill(255,255,255);rect(min(mouseX,210),240,190,32);fill(0,0,0);text(this.statLastChallengeWon?"Each Challenge awards you some\nUltimate Points upon completion.":"You didn't complete the Challenge,\nso you don't get a bonus this time.",min(mouseX,210)+95,256);}if(mouseY>=263&&mouseY<289){fill(255,255,255);rect(min(mouseX,236),290,164,32);fill(0,0,0);text("Ultimate Points can be spent\non permanent upgrades.",min(mouseX,236)+82,306);}if(this.lastAPs>0&&mouseY>=306&&mouseY<324){fill(255,255,255);rect(min(mouseX,206),325,194,32);fill(0,0,0);text("Artifact Points can be used in future\nruns to upgrade your Artifacts.",min(mouseX,206)+97,341);}textAlign(LEFT,BASELINE);};
Persistent_Data.prototype.render_challenges_screen=function(){
background(128,160,160);this.draw_4_page_buttons();fill(64,80,80);noStroke();rect(4,40,64,min(height-44,this.challengesList.length*28+4));var h2=mouseX>=112&&mouseX<width-40&&mouseY>=height-48&&mouseY<height-16,h=!1,i=0,u=!0,t=0,tot=this.get_total_challenges_completed();for(i=0;i<this.challengesList.length;i+=1){var cha=this.challengesList[i];t=cha.timesCompleted;u=cha.unlockFunc();h=cha.abbreviation===this.currentChallenge.substring(0,2);textAlign(CENTER,CENTER);textSize(16);noStroke();if(mouseX>=8&&mouseX<64&&mouseY>=44+28*i&&mouseY<68+28*i){if(u){fill(192,208,208);}else{fill(203,203,203);}}else{if(u){fill(128,160,160);}else{fill(149,149,149);}}rect(8,44+28*i,56,24);if(h){stroke(0,0,0);noFill();rect(10,46+28*i,52,20);}fill(0,0,0);text(cha.hideName()?"???":cha.abbreviation+"C",36,56+28*i);if(u&&t===0&&(cha.abbreviation==="SR"||tot)&&!this.saveNeeded){noStroke();fill(224,64,64);ellipse(12,46+28*i,8,8);fill(255,255,255);textSize(8);text("!",12,46+28*i);fill(0,0,0);}if(h){textSize(16);text(cha.hideName()?"???":cha.name,(72+width)/2,56);textAlign(LEFT,BASELINE);textSize(12);text(cha.descFunc1(t),72,72,width-76,height);text(cha.descFunc2(t),72,232,width-76,height);if(u){textAlign(CENTER,CENTER);stroke(0,0,0);if(h2){fill(128,255,128);}else{fill(0,255,0);}if(g_TutorialProgress.get_challenges_disabled()){if(h2){fill(255);rect(min(mouseX,158),334,242,16);fill(0);text("Progress a bit more through the tutorial first.",min(mouseX,158)+121,342);}fill(85);}rect(112,height-48,width-152,32);fill(0);textSize(24);text("START CHALLENGE",(72+width)/2,height-32);textAlign(LEFT,BASELINE);}}}};
Persistent_Data.prototype.choose_challenge=function(){
if(mouseX<8||mouseX>=64){return;}for(var i=0;i<this.challengesList.length;i+=1){if(mouseY>=44+28*i&&mouseY<68+28*i){this.currentChallenge=this.challengesList[i].abbreviation+"C";return;}}};
Persistent_Data.prototype.choose_previous_challenge=function(){
var i=0,j=0;for(;j<this.challengesList.length;j+=1){if(this.challengesList[j].abbreviation+"C"===this.currentChallenge){i=j;break;}}i-=1;if(i<0){i=this.challengesList.length-1;}this.currentChallenge=this.challengesList[i].abbreviation+"C";};
Persistent_Data.prototype.choose_next_challenge=function(){
var i=0,j=0;for(;j<this.challengesList.length;j+=1){if(this.challengesList[j].abbreviation+"C"===this.currentChallenge){i=j;break;}}i+=1;if(i>=this.challengesList.length){i=0;}this.currentChallenge=this.challengesList[i].abbreviation+"C";};
Persistent_Data.prototype.update_us_page_count=function(){
var c=0,showLocked=this.uuOptions&1,showMaxed=this.uuOptions&2,hid,un,x,maxX,i=0;for(;i<this.upgradesList.length;i+=1){hid=this.upgradesList[i].hiddenFunc();un=!hid&&this.upgradesList[i].unlockFunc();x=this.upgradesList[i].timesPurchased;maxX=this.upgradesList[i].maxLevel;if(!un&&!showLocked){continue;}if(x===maxX&&!showMaxed){continue;}c+=1;}this.upgradeShopPageCount=max(1,ceil(c/6));this.upgradeShopCurrentPage=min(this.upgradeShopPageCount,this.upgradeShopCurrentPage);};
Persistent_Data.prototype.render_ultimate_shop_screen=function(){
var showLocked=this.uuOptions&1,showMaxed=this.uuOptions&2,yDraw=80,hov,un,x,maxX,nR=0,nS=0,i=0,hid;background(255);this.draw_4_page_buttons();textAlign(CENTER,CENTER);textSize(18);text("~ULTIMATE SHOP~",width/2,56);textAlign(LEFT,BASELINE);textSize(12);for(;i<this.upgradesList.length&&nR<6;i+=1){hov=mouseX>=width-100&&mouseX<width-4&&mouseY>=yDraw-8&&mouseY<yDraw+16;hid=this.upgradesList[i].hiddenFunc();un=!hid&&this.upgradesList[i].unlockFunc();x=this.upgradesList[i].timesPurchased;maxX=this.upgradesList[i].maxLevel;if(!un&&!showLocked){continue;}if(x===maxX&&!showMaxed){continue;}if(nS<6*this.upgradeShopCurrentPage-6){nS+=1;continue;}text(hid?"???":this.upgradesList[i].desc1,16,yDraw);if(hid){text("(???)",32,yDraw+16);text("???",250,yDraw+8);}else if(hov&&un){if(maxX>0){text("(Current level: "+x+" of "+maxX+")",32,yDraw+16);}else{text("(Current level: "+x+")",32,yDraw+16);}if(x<maxX||maxX<0){text(this.upgradesList[i].dispFunc(x),250,yDraw);text(this.upgradesList[i].dispFunc(x+1),250,yDraw+16);}else{text(this.upgradesList[i].dispFunc(x),250,yDraw+8);}}else{text(this.upgradesList[i].desc2,32,yDraw+16);text(this.upgradesList[i].dispFunc(x),250,yDraw+8);}stroke(0);if(x>=maxX&&maxX>0){noFill();}else if(!un){fill(128);}else if(this.statCurrentUP>=this.upgradesList[i].costFunc(x)){if(hov){fill(128,224,128);}else{fill(0,192,0);}}else{fill(255,0,0);}rect(width-100,yDraw-8,96,24);fill(0);if(hid){text("???",width-96,yDraw+8);}else if(!un){text(this.upgradesList[i].lockedStr,width-96,yDraw+8);}else if(x<maxX||maxX<0){text("Cost: "+g_ResourcePane.evacuee_to_string(this.upgradesList[i].costFunc(x)),width-96,yDraw+8);}else{text("Maxed out!",width-96,yDraw+8);}yDraw+=48;nR+=1;}
stroke(0);fill(192,128,255);rect(-2,height-30,width+4,32);fill(0);textSize(16);text("Page "+this.upgradeShopCurrentPage+" of "+this.upgradeShopPageCount,50,height-36);textSize(12);text("Ultimate Points: "+this.statCurrentUP,50,height-8);if(this.upgradeShopCurrentPage>1){if(mouseX<16&&mouseY>=height-48&&mouseY<height-32){fill(255,255,0);}else{fill(192,192,0);}triangle(0,height-40,16,height-48,16,height-32);}if(this.upgradeShopCurrentPage<this.upgradeShopPageCount){if(mouseX>=width-16&&mouseY>=height-48&&mouseY<height-32){fill(255,255,0);}else{fill(192,192,0);}triangle(width,height-40,width-16,height-48,width-16,height-32);}textAlign(CENTER,CENTER);stroke(0);fill(255);rect(276,377,16,16);if(showMaxed){noFill();ellipse(284.5,385,6,6);ellipse(284.5,385,16,8);}if(mouseX>=276&&mouseX<292&&mouseY>=377&&mouseY<393){noFill();rect(274,375,20,20);fill(0,255,255);rect(214,344,140,24);fill(0);text((showMaxed?"Hide":"Show")+" maxed Upgrades",284,356);}fill(128);rect(308,377,16,16);if(showLocked){noFill();ellipse(316.5,385,6,6);ellipse(316.5,385,16,8);}if(mouseX>=308&&mouseX<324&&mouseY>=377&&mouseY<393){noFill();rect(306,375,20,20);fill(0,255,255);rect(246,344,140,24);fill(0);text((showLocked?"Hide":"Show")+" locked Upgrades",316,356);}textAlign(LEFT,BASELINE);if(mouseY>=height-30&&mouseX<200){fill(0,255,255);rect(floor(25+mouseX/4),296,191,72);fill(0);text("Ultimate Points are spent to",floor(29+mouseX/4),312);text("purchase Ultimate Upgrades.",floor(29+mouseX/4),328);text("Ultimate Points have no other use,",floor(29+mouseX/4),344);text("so don't hesitate to spend them!",floor(29+mouseX/4),360);}};
Persistent_Data.prototype.purchase_ultimate_upgrade=function(){
if(mouseX>=276&&mouseX<292&&mouseY>=377&&mouseY<393){if(this.uuOptions&2){this.uuOptions-=2;}else{this.uuOptions+=2;}this.update_us_page_count();return;}if(mouseX>=308&&mouseX<324&&mouseY>=377&&mouseY<393){if(this.uuOptions&1){this.uuOptions-=1;}else{this.uuOptions+=1;}this.update_us_page_count();return;}if(mouseX<16&&mouseY>=height-48&&mouseY<height-32){this.upgradeShopCurrentPage=max(this.upgradeShopCurrentPage-1,1);return;}if(mouseX>=width-16&&mouseY>=height-48&&mouseY<height-32){this.upgradeShopCurrentPage=min(this.upgradeShopCurrentPage+1,this.upgradeShopPageCount);return;}var yDraw=80,nR=0,nS=0,i=0,showLocked=this.uuOptions&1,showMaxed=this.uuOptions&2,hid,un,x,maxX;for(;i<this.upgradesList.length&&nR<6;i+=1){hid=this.upgradesList[i].hiddenFunc();un=!hid&&this.upgradesList[i].unlockFunc();x=this.upgradesList[i].timesPurchased;maxX=this.upgradesList[i].maxLevel;if(!un&&!showLocked){continue;}if(x===maxX&&!showMaxed){continue;}if(nS<6*this.upgradeShopCurrentPage-6){nS+=1;continue;}if(mouseX>=width-100&&mouseX<width-4&&mouseY>=yDraw-8&&mouseY<yDraw+16){if(x>=maxX&&maxX>0){g_FlyingText.set_text("Maxed out!",width-96,yDraw+8);g_FlyingText.fontColor=color(0);return!1;}if(!un){g_FlyingText.set_text("Locked.",width-96,yDraw+8);g_FlyingText.fontColor=color(0);return!1;}if(this.statCurrentUP>=this.upgradesList[i].costFunc(x)){this.statCurrentUP-=this.upgradesList[i].costFunc(x);this.upgradesList[i].timesPurchased+=1;g_FlyingText.set_text("Purchased!",width-96,yDraw+8);g_FlyingText.fontColor=color(0);this.update_us_page_count();this.saveNeeded=!0;return!0;}g_FlyingText.set_text("Can't afford!",width-96,yDraw+8);g_FlyingText.fontColor=color(0);return!1;}yDraw+=48;nR+=1;}return!1;};
Persistent_Data.prototype.ultimate_shop_on_key_pressed=function(){
if(keyCode===LEFT){this.upgradeShopCurrentPage=max(this.upgradeShopCurrentPage-1,1);return;}if(keyCode===RIGHT){this.upgradeShopCurrentPage=min(this.upgradeShopCurrentPage+1,this.upgradeShopPageCount);return;}};
Persistent_Data.prototype.render_persistent_statistics_screen = function()
{
    background(0,255,255);this.draw_4_page_buttons();stroke(0);if(currentScreen==="artifact-persistent-statistics"){fill(255,0,255);rect(4,40,width-8,height-44);textSize(18);fill(0);textAlign(CENTER,CENTER);text("Artifacts discovered:",width/2,64);textSize(16);text("Progress: "+this.discoveredArtifactList.length+"/"+g_ArtifactManager.get_length(),width/2,300);textAlign(LEFT,BASELINE);g_ArtifactManager.draw_artifacts_unlock();return;}line(width/2-2,40,width/2-2,height-4);line(width/2+1,40,width/2+1,height-4);textSize(18);textAlign(CENTER,CENTER);text("LAST RUN",width/4,52);text("ALL-TIME",3*width/4,52);textAlign(LEFT,BASELINE);textSize(12);
    
    text("People saved: "+this.statLastPeopleSaved,4,80);text("People saved: "+this.statTotalPeopleSaved,width/2+4,80);text("Ultimate Points (people): "+this.statLastUPFromPeople,4,112);text("Ultimate Points (Challenges): "+this.statLastUPFromChallenges,4,128);text("Ultimate Points (total): "+this.statTotalUPGained,width/2+4,112);text("Ultimate Points (current): "+this.statCurrentUP,width/2+4,128);text("Challenge completed? "+(this.statLastChallengeWon?"YES":"NO"),4,160);text("Challenges completed: "+this.get_total_challenges_completed(),width/2+4,160);text("Ultimate Upgrades: "+this.get_total_upgrades_purchased(),width/2+4,176);if(this.statTotalLevel5){text("Lvl. 5 buildings: "+this.statLastLevel5,4,208);text("Lvl. 5 buildings: "+this.statTotalLevel5,width/2+4,208);}if(this.statLastFrosthours||this.statTotalFrosthours){text("Frosthours: "+this.statLastFrosthours,4,240);text("Frosthours: "+this.statTotalFrosthours,width/2+4,240);}if(this.lastAPs>0||this.totalAPs>0){text("Artifact Points: "+this.lastAPs,4,272);text("Artifact Points: "+this.totalAPs,width/2+4,272);text("Progress: "+this.discoveredArtifactList.length+"/"+g_ArtifactManager.get_length(),width/2+90,300);}if(this.get_is_certificate_unlocked()){fill(0,255,255);rect(64,323,272,54);if(mouseX>=66&&mouseY>=325&&mouseX<334&&mouseY<375){fill(128,255,128);}else{fill(0,255,0);}rect(66,325,268,50);fill(0);textAlign(CENTER,CENTER);textSize(24);text("Certificate of Completion",width/2,350);textAlign(LEFT,BASELINE);}
};
Persistent_Data.prototype.render_savegame_screen=function(){
background(255,64,64);this.draw_4_page_buttons();textSize(16);if(this.loadErrorMessage.length>0){text(this.loadErrorMessage,20,50,width-40,height);}text("To save your game, click the button below to get your save string.  Copy it & paste it into a document elsewhere.  When you want to load the game again (from the main menu), click the Load Game button & follow the instructions.",20,100,width-40,height);};
Persistent_Data.prototype.get_upgrade_effect=function(a){
for(var i=0;i<this.upgradesList.length;i+=1){if(this.upgradesList[i].abbreviation===a){return this.upgradesList[i].effectFunc(this.upgradesList[i].timesPurchased);}}return undefined;};
Persistent_Data.prototype.get_upgrade_times_purchased=function(a){
for(var i=0;i<this.upgradesList.length;i+=1){if(this.upgradesList[i].abbreviation===a){return this.upgradesList[i].timesPurchased;}}return undefined;};
Persistent_Data.prototype.get_is_reef_unlocked=function(){
return this.get_upgrade_times_purchased("RF")>0;};
Persistent_Data.prototype.get_count_affordable_upgrades=function(){
var c=0,s=this.statCurrentUP;this.upgradesList.forEach(function(u){c+=(u.maxLevel<0||u.timesPurchased<u.maxLevel)&&!u.hiddenFunc()&&u.unlockFunc()&&s>=u.costFunc(u.timesPurchased);});return c;};
Persistent_Data.prototype.on_artifact_found=function(a){
var l=!1,i=0;for(;i<this.discoveredArtifactList.length;i+=1){if(this.discoveredArtifactList[i]===a){l=!0;break;}}if(!l){this.discoveredArtifactList.push(a);}};
Persistent_Data.prototype.get_was_artifact_found=function(a){
for(var i=0;i<this.discoveredArtifactList.length;i+=1){if(this.discoveredArtifactList[i]===a){return!0;}}return!1;};
Persistent_Data.prototype.get_is_certificate_unlocked=function(){
var i=0;for(;i<this.challengesList.length;i+=1){if(this.challengesList[i].timesCompleted<3){return!1;}}for(i=0;i<this.upgradesList.length;i+=1){if(this.upgradesList[i].maxLevel>0){if(this.upgradesList[i].timesPurchased<this.upgradesList[i].maxLevel){return!1;}}else{if(this.upgradesList[i].timesPurchased<3){return!1;}}}if(this.statWifi<3){return!1;}if(this.statCosmic<3){return!1;}if(this.statTotal500<3){return!1;}return!0;};
Persistent_Data.prototype.erase_all_data = function()
{
    this.saveNeeded=!1;
    this.challengesList.forEach(function(C){C.timesCompleted=0;});
    this.upgradesList.forEach(function(U){U.timesPurchased=0;});
    this.currentChallenge="SRC";
    this.statTotalPeopleSaved=0;
    this.statLastPeopleSaved=0;
    this.statTotalUPGained=0;
    this.statCurrentUP=0;
    this.statLastUPFromPeople=0;
    this.statLastUPFromChallenges=0;
    this.statLastChallengeWon=false;
    this.statTotalLevel5=0;
    this.statLastLevel5=0;
    this.statLastReefHealthRecord=0;
    this.statHighestReefHealthRecord=0;
    this.statWifi=0;
    this.statCosmic=0;
    this.statLastFrosthours=0;
    this.statTotalFrosthours=0;
    this.techOptionsShowPurchased=!0;
    this.techOptionsShowAvailable=!0;
    this.techOptionsShowUnavailable=!0;
    this.techOptionsShowPurchasedFromCamels=!0;
    this.lastAPs=0;
    this.totalAPs=0;
    this.discoveredArtifactList=[];this.statLastWaterCast=this.statHighestWaterCast=0;this.statLast500=this.statTotal500=0;this.uuOptions=0;
};
Persistent_Data.prototype.get_challenge_times_completed=function(a){
for(var i=0;i<this.challengesList.length;i+=1){if(this.challengesList[i].abbreviation===a){return this.challengesList[i].timesCompleted;}}return 0;};
Persistent_Data.prototype.make_save_string=function(){
var cS="",uS="",sS="",aS="",ck=0,i=0,tos=8*this.techOptionsShowPurchased+4*this.techOptionsShowAvailable+2*this.techOptionsShowUnavailable+this.techOptionsShowPurchasedFromCamels;for(;i<this.challengesList.length;i+=1){var v=this.challengesList[i].timesCompleted;if(v>0){cS+=this.challengesList[i].abbreviation+"C:"+v+";";ck+=sq(v);}}ck%=59;cS+="CCK:"+ck+";";ck=0;for(i=0;i<this.upgradesList.length;i+=1){var v=this.upgradesList[i].timesPurchased;if(v>0){uS+=this.upgradesList[i].abbreviation+"U:"+v+";";ck+=sq(v);}}ck%=59;uS+="UCK:"+ck+";";ck=0;sS+="TPS:"+this.statTotalPeopleSaved+";";ck+=sq(this.statTotalPeopleSaved);sS+="LPS:"+this.statLastPeopleSaved+";";ck+=sq(this.statLastPeopleSaved);sS+="TUS:"+this.statTotalUPGained+";";ck+=sq(this.statTotalUPGained);sS+="CUS:"+this.statCurrentUP+";";ck+=sq(this.statCurrentUP);sS+="UPS:"+this.statLastUPFromPeople+";";ck+=sq(this.statLastUPFromPeople);sS+="UCS:"+this.statLastUPFromChallenges+";";ck+=sq(this.statLastUPFromChallenges);if(this.statLastChallengeWon){sS+="LCS:1;";ck+=1;}else{sS+="LCS:0;";}sS+="T5S:"+this.statTotalLevel5+";";ck+=sq(this.statTotalLevel5);sS+="L5S:"+this.statLastLevel5+";";ck+=sq(this.statLastLevel5);sS+="RHS:"+this.statLastReefHealthRecord+";";ck+=sq(this.statLastReefHealthRecord);sS+="RRS:"+this.statHighestReefHealthRecord+";";ck+=sq(this.statHighestReefHealthRecord);sS+="UUS:"+this.uuOptions+";";ck+=sq(this.uuOptions);if(this.statWifi>0){sS+="WFS:"+this.statWifi+";";ck+=sq(this.statWifi);}if(this.statCosmic>0){sS+="CGS:"+this.statCosmic+";";ck+=sq(this.statCosmic);}if(this.statLastWaterCast){sS+="LWS:"+this.statLastWaterCast+";";ck+=sq(this.statLastWaterCast);}if(this.statHighestWaterCast){sS+="HWS:"+this.statHighestWaterCast+";";ck+=sq(this.statHighestWaterCast);}if(this.statLastFrosthours){sS+="LFS:"+this.statLastFrosthours+";";ck+=sq(this.statLastFrosthours);}if(this.statTotalFrosthours){sS+="TFS:"+this.statTotalFrosthours+";";ck+=sq(this.statTotalFrosthours);}if(this.statTotal500){sS+="5HS:"+this.statTotal500+";";ck+=sq(this.statTotal500);}if(this.statLast500){sS+="5LS:"+this.statLast500+";";ck+=sq(this.statLast500);}sS+="CCS:"+this.currentChallenge+";";sS+="TOS:"+tos+";";ck+=sq(tos);ck%=59;sS+="SCK:"+ck+";";ck=0;if(this.lastAPs+this.totalAPs+this.discoveredArtifactList.length>0){aS+="LPA:"+this.lastAPs+";";ck+=sq(this.lastAPs);aS+="TPA:"+this.totalAPs+";";ck+=sq(this.totalAPs);aS+="ADA:"+this.discoveredArtifactList.join(",")+";";ck+=sq(this.discoveredArtifactList.length);ck%=59;aS+="ACK:"+ck+";";}this.saveNeeded=!1;return"\""+cS+uS+aS+sS+"\"";};
Persistent_Data.prototype.load_from_save_string=function(){
var tempC=[],tempU=[],tempS=[],tempA=[],tempADL=[],tempKV=[],ccs="",ccck=0,cuck=0,csck=0,cack=0,tcck=-1,tuck=-1,tsck=-1,tack=-1,b=!1,tos=0,sections=g_LoadString.replace(/"/g,"").split(";"),i=0,j=0,a="";while(i<sections.length){if(sections[i].length===0||sections[i]==="ADA:"){sections.splice(i,1);}else{if(sections[i].length<=4||sections[i][3]!==":"){this.loadErrorMessage="Invalid format: \""+sections[i]+"\"";return!1;}i+=1;}}for(i=0;i<sections.length;i+=1){switch(sections[i][2]){case"C":tempKV=sections[i].split(":");if(tempKV.length!==2){this.loadErrorMessage="Invalid format: \""+sections[i]+"\"";return!1;}tempKV[1]=parseInt(tempKV[1],10)||0;tempC.push(tempKV);ccck+=sq(tempKV[1]);break;case"U":tempKV=sections[i].split(":");if(tempKV.length!==2){this.loadErrorMessage="Invalid format: \""+sections[i]+"\"";return!1;}tempKV[1]=parseInt(tempKV[1],10)||0;tempU.push(tempKV);cuck+=sq(tempKV[1]);break;case"S":tempKV=sections[i].split(":");if(tempKV.length!==2){this.loadErrorMessage="Invalid format: \""+sections[i]+"\"";return!1;}if(tempKV[0]==="CCS"){ccs=tempKV[1];break;}tempKV[1]=parseInt(tempKV[1],10)||0;if(tempKV[0]==="RHS"||tempKV[0]==="RRS"){if(tempKV[1]>500){this.loadErrorMessage="Invalid reef health parameter.";return!1;}}tempS.push(tempKV);csck+=sq(tempKV[1]);break;case"A":b=!0;tempKV=sections[i].split(":");if(tempKV.length!==2){this.loadErrorMessage="Invalid format: \""+sections[i]+"\"";return!1;}if(tempKV[0]==="ADA"){tempADL=tempKV[1].split(",");cack+=sq(tempADL.length);}tempKV[1]=parseInt(tempKV[1],10)||0;tempA.push(tempKV);cack+=sq(tempKV[1]);break;case"K":tempKV=sections[i].split(":");if(tempKV.length!==2){this.loadErrorMessage="Invalid format: \""+sections[i]+"\"";return!1;}tempKV[1]=parseInt(tempKV[1],10)||0;switch(tempKV[0]){case"CCK":tcck=tempKV[1];break;case"UCK":tuck=tempKV[1];break;case"SCK":tsck=tempKV[1];break;case"ACK":tack=tempKV[1];break;}break;}}ccck%=59;cuck%=59;csck%=59;cack%=59;if(tcck<0||tuck<0||tsck<0||(tack<0&&b)){this.loadErrorMessage="One or more checksums are missing!";return!1;}if(ccck!==tcck||cuck!==tuck||csck!==tsck||(cack!==tack&&b)){this.loadErrorMessage="One or more checksums mismatch the calculated value!";return!1;}
    
for(i=0;i<this.challengesList.length;i+=1){this.challengesList[i].timesCompleted=0;for(j=0;j<tempC.length;j+=1){if(this.challengesList[i].abbreviation+"C"===tempC[j][0]){this.challengesList[i].timesCompleted=tempC[j][1];}}}for(i=0;i<this.upgradesList.length;i+=1){this.upgradesList[i].timesPurchased=0;for(j=0;j<tempU.length;j+=1){if(this.upgradesList[i].abbreviation+"U"===tempU[j][0]){this.upgradesList[i].timesPurchased=tempU[j][1];}}if(this.upgradesList[i].maxLevel>0&&this.upgradesList[i].timesPurchased>this.upgradesList[i].maxLevel){this.upgradesList[i].timesPurchased=this.upgradesList[i].maxLevel;}}this.lastAPs=0;for(i=0;i<tempA.length;i+=1){if(tempA[i][0]==="LPA"){this.lastAPs=tempA[i][1];}}this.totalAPs=0;for(i=0;i<tempA.length;i+=1){if(tempA[i][0]==="TPA"){this.totalAPs=tempA[i][1];}}this.discoveredArtifactList=[];for(i=0;i<tempADL.length;i+=1){a=tempADL[i];if(typeof(g_ArtifactManager.by_abbreviation(a))!=="undefined"){this.discoveredArtifactList.push(a);}}this.currentChallenge="";for(i=0;i<this.challengesList.length;i+=1){if(this.challengesList[i].abbreviation+"C"===ccs){this.currentChallenge=ccs;break;}}if(this.currentChallenge===""){this.currentChallenge="SRC";}this.statTotalPeopleSaved=0;for(i=0;i<tempS.length;i+=1){if(tempS[i][0]==="TPS"){this.statTotalPeopleSaved=tempS[i][1];break;}}this.statLastPeopleSaved=0;for(i=0;i<tempS.length;i+=1){if(tempS[i][0]==="LPS"){this.statLastPeopleSaved=tempS[i][1];break;}}this.statTotalUPGained=0;for(i=0;i<tempS.length;i+=1){if(tempS[i][0]==="TUS"){this.statTotalUPGained=tempS[i][1];break;}}this.statCurrentUP=0;for(i=0;i<tempS.length;i+=1){if(tempS[i][0]==="CUS"){this.statCurrentUP=tempS[i][1];break;}}this.statLastUPFromPeople=0;for(i=0;i<tempS.length;i+=1){if(tempS[i][0]==="UPS"){this.statLastUPFromPeople=tempS[i][1];break;}}this.statLastUPFromChallenges=0;for(i=0;i<tempS.length;i+=1){if(tempS[i][0]==="UCS"){this.statLastUPFromChallenges=tempS[i][1];break;}}this.statLastChallengeWon=!1;for(i=0;i<tempS.length;i+=1){if(tempS[i][0]==="LCS"){if(tempS[i][1]===1){this.statLastChallengeWon=!0;}break;}}this.statTotalLevel5=0;for(i=0;i<tempS.length;i+=1){if(tempS[i][0]==="T5S"){this.statTotalLevel5=tempS[i][1];break;}}this.statLastLevel5=0;
for(i=0;i<tempS.length;i+=1){if(tempS[i][0]==="L5S"){this.statLastLevel5=tempS[i][1];break;}}this.statLastReefHealthRecord=0;for(i=0;i<tempS.length;i+=1){if(tempS[i][0]==="RHS"){this.statLastReefHealthRecord=tempS[i][1];break;}}this.statHighestReefHealthRecord=0;for(i=0;i<tempS.length;i+=1){if(tempS[i][0]==="RRS"){this.statHighestReefHealthRecord=tempS[i][1];break;}}this.statWifi=0;for(i=0;i<tempS.length;i+=1){if(tempS[i][0]==="WFS"){this.statWifi=tempS[i][1];break;}}this.statCosmic=0;for(i=0;i<tempS.length;i+=1){if(tempS[i][0]==="CGS"){this.statCosmic=tempS[i][1];break;}}this.statLastWaterCast=0;for(i=0;i<tempS.length;i+=1){if(tempS[i][0]==="LWS"){this.statLastWaterCast=tempS[i][1];break;}}this.statHighestWaterCast=0;for(i=0;i<tempS.length;i+=1){if(tempS[i][0]==="HWS"){this.statHighestWaterCast=tempS[i][1];break;}}this.statLastFrosthours=0;for(i=0;i<tempS.length;i+=1){if(tempS[i][0]==="LFS"){this.statLastFrosthours=tempS[i][1];break;}}this.statTotalFrosthours=0;for(i=0;i<tempS.length;i+=1){if(tempS[i][0]==="TFS"){this.statTotalFrosthours=tempS[i][1];break;}}this.statTotal500=0;for(i=0;i<tempS.length;i+=1){if(tempS[i][0]==="5HS"){this.statTotal500=tempS[i][1];break;}}this.statLast500=0;for(i=0;i<tempS.length;i+=1){if(tempS[i][0]==="5LS"){this.statLast500=tempS[i][1];break;}}this.uuOptions=0;for(i=0;i<tempS.length;i+=1){if(tempS[i][0]==="UUS"){this.uuOptions=tempS[i][1];break;}}tos=15;for(i=0;i<tempS.length;i+=1){if(tempS[i][0]==="TOS"){tos=tempS[i][1];break;}}this.update_us_page_count();this.techOptionsShowPurchased=(tos/8)%2>=1;this.techOptionsShowAvailable=(tos/4)%2>=1;this.techOptionsShowUnavailable=(tos/2)%2>=1;this.techOptionsShowPurchasedFromCamels=tos%2>=1;this.loadErrorMessage="Everything successfully loaded!";this.saveNeeded=!1;return!0;};
Persistent_Data.prototype.start_new_run = function()
{
    this.statLastPeopleSaved=0;this.statLastUPFromPeople=0;this.statLastUPFromChallenges=0;this.statLastFrosthours=0;this.lastAPs=0;greetedCosmic=!1;g_TutorialProgress.showGoal=!1;
    movesLeft=2;movesPerDay=2;dayCount=1;daysUntilSwarmArrival=79;season=1;dayToUnlockDarkEnergy=400;dayToRunEnd=1000;enchantingScreenSelection=0;
    g_TutorialProgress.foodFromFish=0;g_Factors.on_new_run_start();g_ArtifactManager.on_new_run_start();g_ToggleButtonManager.on_new_run_start();g_ReefData.on_new_run_start();goldenClaimTilesLeft=0;foodResource=20+3*this.get_challenge_times_completed("UC");manaResource=0;pearlResource=0;stoneResource=10+4*this.get_challenge_times_completed("UR");spiceResource=0;gadoliniumResource=0;flameOrbResource=0;ironResource=0;goldenAppleResource=0;darkEnergyResource=0;bioOrbResource=0;mithrilResource=0;
    foodGivenToBank=0;totalDarkEnergyGained=0;totalBioOrbGainedFromEnchanting=0;upkeepLastSatisfiedRatio=1;enchantingPearlCostMulti=1;
    evacuees=0;evacueesEnRoute=0;maxEvacuees=0;canCastSpells=!0;backsideCutsceneShown=!1;deCutscene2Shown=!1;
    foodAppleProductionMultiFromFrosthour=1;manaProductionMultiFromFrosthour=1;pearlProductionMultiFromFrosthour=1;stoneProductionMultiFromFrosthour=1;ironMithrilProductionMultiFromFrosthour=1;darkEnergyProductionMultiFromFrosthour=1;enchantingProductMultiFromFrosthour=1;enchantingPriceMulti=1;
    worldgenOption=4;PerlinNoiseRandomFactor=random(-500,500);mapEdgeRandomFactor=2*sq(sin(PerlinNoiseRandomFactor))+cos(PerlinNoiseRandomFactor+7)-1;trainPowerLineX=round32(random(500,550)+random(0,50)-64);tilesTerraformed=0;cameraX=0;cameraY=0;selectedTile=-1;currentlyInBackside=!1;manaProductionMultiFromCyber=1;pearlTradeMultiFromCyber=1;spiceTradeMultiFromCyber=1;gadoliniumFromSlimeMultiFromCyber=1;darkEnergyProductionMultiFromCyber=1;enchantingProductMultiFromCyber=1;
    g_Diplomacy.on_new_run_start(this.currentChallenge);g_ResourcePane.on_new_run_start();g_TechnologyManager.setup_techs();g_TechnologyManager.check_count_techs();while(allTiles.length>0){allTiles.pop();}while(allSpells.length>0){allSpells.pop();}while(spellHints.length>0){spellHints.pop();}spellHints.currentlyShowing=0;allSpells.setup_spells();allSpells.scrollOffset=0;allSpells.scrollVelocity=0;allSpells.goldenAppleEaten=!1;allSpells.subscreen=0;while(allIRSDatas.length>0){allIRSDatas.pop();}while(allBuildings.length>0){allBuildings.pop();}while(allCreatures.length>0){allCreatures.pop();}
    allCreatures.fedSeaTurtle=0;allCreatures.fedAirTurtle=0;g_Dragon.on_new_run_start();allCreatures.update_train();if(this.currentChallenge.substring(2,3)!=="C"){throw"Unknown abbreviation";}var challengeFound=!1;for(var i=0;i<this.challengesList.length;i+=1){if(this.challengesList[i].abbreviation===this.currentChallenge.substring(0,2)){challengeFound=!0;this.challengesList[i].startRunFunc(this.challengesList[i].timesCompleted);}}if(!challengeFound){throw"Unknown Challenge abbreviation";}allSpells.by_name("Empower the Dragon").extendedDescription+=dayToRunEnd+".";
};
var g_PersistentData = new Persistent_Data();
{
    //abbrev,desc1,desc2,effectFunc,dispFunc,costFunc,maxLevel,unlockFunc,lockedStr,hiddenFunc(optional)
    g_PersistentData.add_upgrade("F1","Decrease Farm Lvl. 1 Food Cost","Also lowers cost to repair.",function(x){return-0.5*x;},function(x){var n=this.effectFunc(x);return Number.isInteger(n)?n:n.toFixed(1);},function(x){return floor(0.2*x)+1;},7,true_func,"");
    g_PersistentData.add_upgrade("F2","Decrease Farm Lvl. 2 Pearl Cost","That's all this one does.",function(x){return-1.5*x;},function(x){var n=this.effectFunc(x);return Number.isInteger(n)?n:n.toFixed(1);},function(x){return(x===3)?5:3;},4,function(){return g_PersistentData.get_total_challenges_completed()>=2;},"2 Challenges");
    g_PersistentData.add_upgrade("C3","Collector Lvl. 3 Tech","Spice cost of the tech.",function(x){return x<1?800:(x<2?80:8);},function(x){return this.effectFunc(x);},function(x){return x<1?2:3;},2,function(){return g_PersistentData.get_total_challenges_completed()>4;},"???",function(){return!this.unlockFunc();});
    g_PersistentData.add_upgrade("Ef","Free Enchanting Tables on Plains","Chance to instantly get a lvl. 1 table.",function(x){return x*x;},function(x){return this.effectFunc(x)+"%";},function(x){return x+1;},10,function(){return g_PersistentData.get_challenge_times_completed("DE")>1;},"Need 2 DECs");
    g_PersistentData.add_upgrade("ES","Ench. Tables on Swamps","Can build directly on swamps.",function(x){return x>0;},function(x){if(x>0){return"Yes";}return"No";},function(x){return 4;},1,function(){return g_PersistentData.statTotalLevel5>=20;},"20 lvl. 5 buildings",function(){return g_PersistentData.statTotalLevel5<3;});
    g_PersistentData.add_upgrade("E3","Enchanting Table Lvl. 3","Reduce the dark energy cost.",function(x){return pow(0.2,x/5);},function(x){return"*"+this.effectFunc(x).toFixed(3);},function(x){return 50;},5,function(){return g_PersistentData.get_challenge_times_completed("8Y")>2;},"Need 3 8YCs",function(){return!g_PersistentData.get_challenge_times_completed("8Y");});
    g_PersistentData.add_upgrade("FC","Decrease Furnace Costs by 2%","Cost to build/upgrade.",function(x){return pow(0.98,x);},function(x){return"*"+this.effectFunc(x).toFixed(3);},function(x){return 10+10*x;},-1,function(){return g_PersistentData.get_challenge_times_completed("UR")>0;},"Need 1 URC",function(){return g_PersistentData.get_total_challenges_completed()<3;});
    g_PersistentData.add_upgrade("S1","Decrease Shelter Lvl. 1 Mithril Cost","Other costs unaffected.",function(x){return max(-2*x,-20-x);},function(x){return this.effectFunc(x);},function(x){return floor(sqrt(x+1));},25,function(){return g_PersistentData.get_challenge_times_completed("SR")>0;},"Need 1 SRC");
    g_PersistentData.add_upgrade("RF","Enable the Reef","New building connected to merfolk.",function(x){return x;},function(x){return x?"Yes":"No";},function(x){return 1;},1,function(){return g_PersistentData.get_challenge_times_completed("DA")>1;},"Need 2 DACs",function(){return g_PersistentData.get_challenge_times_completed("DA")<1;});
    g_PersistentData.add_upgrade("H2","House Lvl. 2 Spice Cost","Iron cost unaffected.",function(x){return 600*pow(0.25,x);},function(x){var n=this.effectFunc(x);return Number.isInteger(n)?n:n.toFixed(1);},function(x){return pow(5,x+1);},2,function(){return g_PersistentData.get_challenge_times_completed("DA")>0;},"Need 1 DAC");
    g_PersistentData.add_upgrade("H3","House Lvl. 3 Spice Cost","Other cost unaffected.",function(x){return round(1000*pow(0.3,x));},function(x){return this.effectFunc(x);},function(x){return 10*x+10;},3,function(){return g_PersistentData.statTotalPeopleSaved>=2500;},"2500 people");
    g_PersistentData.add_upgrade("H4","House Lvl. 4 Bio-Orb Cost","Other cost unaffected.",function(x){return 250-100*x;},function(x){return this.effectFunc(x);},function(x){return 18;},2,function(){return g_PersistentData.totalAPs>=3;},"3 ???s",function(){return!this.unlockFunc();});
    g_PersistentData.add_upgrade("H5","House Lvl. 5 Cost","Golden apple/bio-orb costs.",function(x){var bArr=[5000,2000,1000,800,650,500],gArr=[10000,1000,200,190,180,170];return{"ga":gArr[x],"bo":bArr[x]};},function(x){var t=this.effectFunc(x);return(t.ga>999?round(t.ga/1000)+"k":t.ga)+"/"+(t.bo>999?round(t.bo/1000)+"k":t.bo);},function(x){return x<3?40:30;},5,function(){return g_PersistentData.get_challenge_times_completed("RW")>0;},"Need 1 RWC",function(){return g_PersistentData.totalAPs<1;});
    g_PersistentData.add_upgrade("AP","Aqueducts Technology Power","Raises exponent of effect.",function(x){return 1+0.2*x;},function(x){return"^"+this.effectFunc(x).toFixed(1);},function(x){return floor(pow(x+2,1.5));},20,function(){return g_PersistentData.statTotalPeopleSaved>=1000;},"1000 people");
    g_PersistentData.add_upgrade("CP","Collection Power","Mana production from collectors.",function(x){return 0.01*x;},function(x){return"+"+this.effectFunc(x).toFixed(2);},function(x){return 6+3*floor(pow(x,1.2));},-1,function(){return g_PersistentData.statTotalPeopleSaved>=7500;},"7500 people",function(){return g_PersistentData.statTotalPeopleSaved<2500;});
    g_PersistentData.add_upgrade("PM","6% Higher Pearl Production Multiplier","Also multiplies pearl from fishing.",function(x){return pow(1.06,x);},function(x){return"*"+g_ResourcePane.formatSI(this.effectFunc(x));},function(x){return sq(x)+1;},-1,function(){return g_PersistentData.statHighestReefHealthRecord===500;},"500% Health",function(){return g_PersistentData.statHighestReefHealthRecord<200;});
    g_PersistentData.add_upgrade("SM","Faraway Mines Produce More Stone","Based on distance from your house.",function(x){return 0.1*x;},function(x){return this.effectFunc(x).toFixed(1);},function(x){return 15+x;},5,function(){return g_PersistentData.get_total_upgrades_purchased()>124;},"125 Upgrades",function(){return g_PersistentData.get_total_upgrades_purchased()<50;});
    g_PersistentData.add_upgrade("ST","3% More Spice From Trading","Stacks multiplicatively.",function(x){return pow(1.03,x);},function(x){return"*"+g_ResourcePane.formatSI(this.effectFunc(x));},function(x){return max(floor(0.5*x)+1,pow(x-106,3));},-1,true_func,"");
    g_PersistentData.add_upgrade("GM","Slime Multi → Gadolinium Production","Part of the multi affects production.",function(x){return 0.1*x;},function(x){return"^"+this.effectFunc(x).toFixed(1);},function(x){return 2*floor(10*pow(1.3,x));},5,function(){return g_PersistentData.statTotalLevel5>=1000;},"1000 lvl. 5",function(){return g_PersistentData.statTotalLevel5<750;});
    g_PersistentData.add_upgrade("FP","Fireplace: Gain Flame Orb in Summer","Only for house lvl. 2+.",function(x){if(allBuildings.length<1||currentScreen==="ultimate-shop"){return 0.5*x;}if(allBuildings[0].upgradeLevel>1){return allBuildings[0].upgradeLevel*0.5*x;}return 0;},function(x){var n=this.effectFunc(x);return Number.isInteger(n)?n:n.toFixed(1);},function(x){return floor(40*pow(1.15,x))-20;},-1,function(){return g_PersistentData.statTotalLevel5>=100;},"100 lvl. 5 bldgs.",function(){return g_PersistentData.statTotalLevel5<20;});
    g_PersistentData.add_upgrade("IS","7.5% More Iron in Spring","Stacks multiplicatively.",function(x){return pow(1.075,x);},function(x){return"*"+g_ResourcePane.formatSI(this.effectFunc(x));},function(x){if(x>52){return floor(exp(x-48));}return 4*x+1;},-1,true_func,"");
    g_PersistentData.add_upgrade("GA","5% More Golden Apple","Stacks multiplicatively.",function(x){return pow(1.05,x);},function(x){return"*"+g_ResourcePane.formatSI(this.effectFunc(x));},function(x){return max(40+6*x,floor(exp(x-45)));},-1,function(){return g_PersistentData.totalAPs>=60;},"60 Artifact Points",function(){return g_PersistentData.totalAPs<3;});
    g_PersistentData.add_upgrade("BF","Bio-Orb From Enchanting","Percentage boost per farm built.",function(x){return 0.01*x;},function(x){return this.effectFunc(x).toFixed(2)+"%";},function(x){if(x<40){return 50+2*x;}return 129+sq(x-39);},-1,function(){return g_PersistentData.totalAPs>=40;},"40 Artifact Points",function(){return g_PersistentData.totalAPs<3;});
    g_PersistentData.add_upgrade("EP","Expanded Furnaces Power","Raises exponent of effect.",function(x){return 1+0.1*x;},function(x){return"^"+this.effectFunc(x).toFixed(1);},function(x){return floor(10*pow(1.5,x));},-1,function(){return g_PersistentData.statTotalLevel5>=750;},"750 lvl. 5 bldgs.",function(){return g_PersistentData.statTotalLevel5<500;});
    g_PersistentData.add_upgrade("MS","More Mithril Based on Swamp Factor","Affects enchanting & production.",function(x){if(x>0){return 0.1*sqrt(max(g_Factors.get_swamp_factor()+x,0))+1;}return 1;},function(x){if(x>0){return"Yes +"+x;}return"No";},function(x){if(x===0){return 4;}if(x<3){return 1;}return 20;},4,true_func,"");
    g_PersistentData.add_upgrade("3B","Tier 3 Resource Boost","Resource production multiplier.",function(x){return x?1.5:1;},function(x){return "*"+this.effectFunc(x).toFixed(1);},function(x){return 100;},1,function(){return g_PersistentData.statTotalFrosthours>=3;},"???",function(){return!this.unlockFunc();});
    g_PersistentData.add_upgrade("HA","Hilbert Architecture","Increases effect of Zoning tech.",function(x){return 1.3+0.05*x;},function(x){return(100*this.effectFunc(x)-100).toFixed(0)+"%";},function(x){return floor(100*pow(1.15,x));},-1,function(){return g_PersistentData.get_was_artifact_found("GFC");},"???",function(){return!this.unlockFunc();});
    g_PersistentData.add_upgrade("DA","De-Slime Adjacent Claimed Tiles","Upgrade the spell De-Slimification.",function(x){return x>0;},function(x){return x>0?"Yes":"No";},function(x){return 3;},1,function(){return g_PersistentData.statTotalLevel5>0;},"1 lvl. 5 building");
    g_PersistentData.add_upgrade("GC","Golden Magic Counting","Increase cast stat with golden apple.",function(x){return 10+x;},function(x){return this.effectFunc(x);},function(x){if(x>10){return floor(exp(x-6));}return floor(pow(x,1.1)+10*x+5);},-1,function(){return g_PersistentData.totalAPs>=100;},"100 Artifact Pts",function(){return g_PersistentData.totalAPs<60;});
    g_PersistentData.add_upgrade("FR","Dragonfire Range Increase","Also boosts a certain spell.",function(x){return{"base":50+15*x,"EtD":25+5*x};},function(x){var r=this.effectFunc(x).base/32;if(r<100){return r.toFixed(1)+" tiles";}return(r<1000?r.toFixed(1):(r/1000).toFixed(2)+"k");},function(x){return 10*pow(5,x);},-1,function(){return g_PersistentData.statTotalPeopleSaved>=15000;},"15k people",function(){return g_PersistentData.statTotalPeopleSaved<7500;});
    g_PersistentData.add_upgrade("SB","Spice Cost of Bio-Orb","Amount needed for enchanting.",function(x){return 50-5*x;},function(x){return this.effectFunc(x);},function(x){return 2+2*x;},10,function(){return g_PersistentData.discoveredArtifactList.length>0;},"Find ???",function(){return!this.unlockFunc();});
    g_PersistentData.add_upgrade("FB","Food Bank Tech Cost","Affects the bio-orb cost.",function(x){return 70-10*x;},function(x){return this.effectFunc(x);},function(x){return 15;},6,function(){return g_PersistentData.get_was_artifact_found("P");},"???",function(){return!this.unlockFunc();});
    g_PersistentData.add_upgrade("Ms","Multiplier Shift Discount","Decreases cost to buy the tech.",function(x){return 70-10*x;},function(x){return "-"+(10*x);},function(x){return 15+2*x;},6,function(){return g_PersistentData.get_was_artifact_found("H2O");},"Find ???",function(){return g_PersistentData.totalAPs<25;});
    g_PersistentData.add_upgrade("PA","Rescue Pod Armor","Make engines take less damage.",function(x){return x>0;},function(x){return x>0?"Armored":"Normal";},function(x){return 100;},1,function(){return g_PersistentData.totalAPs>=300;},"300 Artifact Pts",function(){return g_PersistentData.totalAPs<100;});
    g_PersistentData.add_upgrade("TF","Telephone Footwear Boost","Affects its seasonal extra effect.",function(x){return x>0?0.99:0.86;},function(x){return this.effectFunc(x).toFixed(2);},function(x){return 13;},1,function(){return g_PersistentData.get_was_artifact_found("TF");},"???",function(){return!this.unlockFunc();});
    g_PersistentData.add_upgrade("4P","More Purple Squares","Increases mithril scaling with level.",function(x){return 0.8+0.045*sqrt(x);},function(x){return g_ResourcePane.formatSI(this.effectFunc(x));},function(x){return ceil(10*pow(1.1,x));},-1,function(){return g_PersistentData.get_was_artifact_found("4PS");},"???",function(){return!this.unlockFunc();});
    g_PersistentData.update_us_page_count();
}
{
    //abbrev, name, descFunc[1,2], startRunFunc, conditionFunc, reward, unlockFunc
    g_PersistentData.add_challenge("SR","Standard Run Challenge",function(x){return"Standard run; regular rules.  Lasts 10 years (1000 days).\nGoal to meet: rescue "+g_ResourcePane.evacuee_to_string(100*(x+1))+" people\nReward: 2 Ultimate Points, +5 max evacuees, more base flame orb from enchanting";},function(x){return"Unlock requirement: none (always unlocked)\nTimes completed: "+x+"\nCurrent cumulative reward: +"+g_ResourcePane.evacuee_to_string(5*x)+" max evacuees, "+g_ResourcePane.formatSI(base_flame_orb_from_enchanting())+" base flame orb from enchanting";},function(x){return;},function(x){return evacuees>=100*(x+1);},2,true_func);
    g_PersistentData.add_challenge("DA","Diplomatic Alliance Challenge",function(x){if(this.unlockFunc()){return "Mana production is reduced by 30% in this Challenge.  Purchasing tech from camels has no effect on standing."+(x>2?"  Trading is more expensive.":"")+"\nGoal to meet: reach allied standing with the merfolk & the camels, rescue "+g_ResourcePane.evacuee_to_string(50*sq(x+1))+" people\nReward: 1 Ultimate Point, increase merfolk trade rewards";}return"Locked!";},function(x){if(this.unlockFunc()){return"Unlock requirement: purchase any 5 Ultimate Upgrades\nTimes completed: "+x+"\nCurrent cumulative reward: stone *"+g_ResourcePane.formatSI(pow(1.05,x))+", pearl +"+g_ResourcePane.formatSI(0.5*x)+", food +"+g_ResourcePane.formatSI(0.8*x)+(x>2?", dark energy *"+g_ResourcePane.formatSI(0.7*sqrt(x)):"");}return"Unlock requirement: purchase any 5 Ultimate Upgrades";},function(x){return;},function(x){return g_Diplomacy.merfolkStanding>7&&g_Diplomacy.camelsStanding>7&&evacuees>=50*sq(x+1);},1,function(){return g_PersistentData.get_total_upgrades_purchased()>=5;});
    g_PersistentData.add_challenge("DE","Dark Energy Challenge",function(x){if(this.unlockFunc()){return"Dark energy is unlocked early.  Gaze into the eye for a bonus.\nGoal to meet: gain a total of "+g_ResourcePane.formatSI(100*pow(4,x))+" dark energy\nReward: 5 Ultimate Points, *1.04 dark energy production, mine lvls. 3 & 4 cost 10% less iron";}return"Locked!";},function(x){if(this.unlockFunc()){return"Unlock requirement: complete any 3 Challenges\nTimes completed: "+x+"\nCurrent cumulative reward: *"+g_ResourcePane.formatSI(pow(1.04,x))+" dark energy production, mine lvls. 3 & 4 iron cost *"+pow(0.9,x).toFixed(3);}return"Unlock requirement: complete any 3 Challenges";},function(x){dayToUnlockDarkEnergy=10;},function(x){return totalDarkEnergyGained>=100*pow(4,x);},5,function(){return g_PersistentData.get_total_challenges_completed()>=3;});
    g_PersistentData.add_challenge("5F","5 Farm Challenge",function(x){if(this.unlockFunc()){return"In this Challenge, you are limited to 5 farms & therefore 5 shelters.  Some techs are changed."+(x>=2?"  Stone production is also reduced by 10%.":"")+(x>=3?"  Manual mining costs more food.":"")+"\nGoal to meet: rescue "+g_ResourcePane.evacuee_to_string(120+40*x)+" people\nReward: 3 Ultimate Points, various boosts to the spell Insta-Grow";}return"Locked!";},function(x){var n=g_TechnologyManager.get_farms_required_for_insta_grow_tech();if(this.unlockFunc()){return"Unlock requirement: purchase any 30 Ultimate Upgrades\nTimes completed: "+x+"\nCurrent cumulative reward: Insta-Grow spell cost reduced by "+min(1300,10*x)+" mana, Insta-Grow spell radius of effect: "+(256+20*x)/32+" tiles, Insta-Grow technology requires "+n+" farm"+(n===1?"":"s");}return"Unlock requirement: purchase any 30 Ultimate Upgrades";},function(x){return;},function(x){return evacuees>=120+40*x;},3,function(){return g_PersistentData.get_total_upgrades_purchased()>=30;});
    g_PersistentData.add_challenge("UR","Underwater Ruins Challenge",function(x){if(this.unlockFunc()){return"The merfolk have mysteriously disappeared.  Explore the ruins of their civilization to find resources."+(x>=2?"  Camels & enchanting require more pearl.":"")+"\nGoal to meet: rescue "+g_ResourcePane.evacuee_to_string(1000+200*x)+" people\nReward: 4 Ultimate Points, +4 stone at the start of a run, +1 stone from manual mining"+(x<5?", -3 pearl to Chronometer tech cost":"");}return"Locked!";},function(x){if(this.unlockFunc()){return"Unlock requirement: complete any 10 Challenges\nTimes completed: "+x+"\nCurrent cumulative reward: start each run with "+g_ResourcePane.evacuee_to_string(10+4*x)+" stone, +"+g_ResourcePane.evacuee_to_string(x)+" stone from manual mining, Chronometer tech costs "+g_TechnologyManager.get_pearl_cost_for_chronometer_tech()+" pearl";}return"Unlock requirement: complete any 10 Challenges";},function(x){if(x>=2){enchantingPearlCostMulti=2.5;}return;},function(x){return evacuees>=1000+200*x;},4,function(){return g_PersistentData.get_total_challenges_completed()>=10;});
    g_PersistentData.add_challenge("8Y","8 Year Challenge",function(x){if(this.unlockFunc()){return"The run ends in only 8 years instead of 10.  Swarms spawn more often, some tiles are pre-slimed.\nGoal to meet: rescue "+g_ResourcePane.evacuee_to_string(5*pow(x+4,3))+" people & reach house lvl. 3 or higher\nReward: 3 Ultimate Points, gain 20% more mana & gadolinium from slime, increase mana production during the 1st year"+(x<56?", -50 to house lvl. 3 mithril cost":"");}return"Locked!";},function(x){if(this.unlockFunc()){return"Unlock requirement: rescue a total of 8000 people\nTimes completed: "+x+"\nCurrent cumulative reward: *"+g_ResourcePane.formatSI(pow(1.2,x))+" mana & gadolinium from slime, *"+g_ResourcePane.formatSI(mana_multi_8YC(x))+" mana production in the 1st year, house lvl. 3 costs "+g_TechnologyManager.get_mithril_cost_for_house_lvl_3()+" mithril";}return"Unlock requirement: rescue a total of 8000 people";},function(x){dayToRunEnd=800;},function(x){return allBuildings[0].upgradeLevel>=3&&evacuees>=5*pow(x+4,3);},3,function(){return g_PersistentData.statTotalPeopleSaved>=8000;});
    g_PersistentData.add_challenge("RW","Ribbon World Challenge",function(x){if(this.unlockFunc()){return"The map is only 8 tiles tall"+(x>0?", faraway tiles cost more food to claim":"")+(x>=2?", dark energy production reduced by 20%":"")+".\nGoal to meet: rescue "+g_ResourcePane.evacuee_to_string(100*(x+1))+" people, claim "+min(500,300+50*x)+" tiles\nReward: 5 Ultimate Points, all terraformers cost 2% less to build & upgrade"+(x<17?", Land Grabbing tech requires 10 tiles fewer to unlock":"");}return"Locked!";},function(x){if(this.unlockFunc()){return"Unlock requirement: find the Ribbon Artifact\nTimes completed: "+x+"\nCurrent cumulative reward: all terraformer costs: *"+pow(0.98,x).toFixed(3)+", Land Grabbing technology requires "+g_TechnologyManager.get_tiles_for_land_grabbing_tech()+" tiles claimed";}if(g_PersistentData.discoveredArtifactList.length){return"Unlock requirement: find the ???";}return"Unlock requirement: ???";},function(x){worldgenOption=5;trainPowerLineX=round32(random(500,650)+random(0,350));},function(x){return evacuees>=100*(x+1)&&tilesClaimed>=min(500,300+50*x);},5,function(){return g_PersistentData.get_was_artifact_found("R");});
    g_PersistentData.add_challenge("UC","Upkeep Cost Challenge",function(x){if(this.unlockFunc()){return"Furnaces are limited to 1 but are buffed.  Some technologies are changed.  Many buildings require iron for passive upkeep.  Trade with the fire giants is enabled."+(x>0?"  Camel technologies are "+g_ResourcePane.evacuee_to_string(50*x)+"% more expensive.":"")+"\nGoal to meet: purchase every camel technology\nReward: 12 Ultimate Points, +3 food at the start of a run, increased food production, more food from fishing";}return"Locked!";},function(x){if(this.unlockFunc()){return"Unlock requirement: 500 level 5 buildings, \"7.5% More Iron in Spring\" Ultimate Upgrade purchased to level 7\nTimes completed: "+x+"\nCurrent cumulative reward: start each run with "+g_ResourcePane.evacuee_to_string(20+3*x)+" food, *"+g_ResourcePane.formatSI(1+0.1*x)+" food production, *"+g_ResourcePane.formatSI(x<3?1+0.3*x:1.6+0.1*x)+" food from fishing";}return"Unlock requirement: 500 level 5 buildings, \"7.5% More Iron in Spring\" Ultimate Upgrade purchased to level 7";},function(x){throw"Error this will be overwritten";},function(x){return g_TechnologyManager.camelTechs.every(function(t){return t.researched;});},12,function(){return g_PersistentData.statTotalLevel5>=500&&g_PersistentData.get_upgrade_times_purchased("IS")>=7;});
    g_PersistentData.add_challenge("AA","All Artifacts Challenge",function(x){if(this.hideName()){return"Progress in the game to see what this Challenge's name is!";}if(this.unlockFunc()){return"Artifacts get harder to find, spell mana costs increase by "+g_ResourcePane.evacuee_to_string(10*(x+1))+" when manually cast, all enchanting costs "+g_ResourcePane.evacuee_to_string(100+60*x)+"% more, early techs are harder to get.\nGoal to meet: find all 20 Artifacts\nReward: 8 Ultimate Points, +1 free lava freezer"+(x<16?", camel & merfolk standings increase faster":"");}return"Locked!";},function(x){if(this.unlockFunc()){return"Unlock requirement: find 20 unique Artifacts (not necessarily all in the same run)\nTimes completed: "+x+"\nCurrent cumulative reward: free lava freezers: "+x+", merfolk & camel standings increase "+min(800,50*x)+"% faster";}var l=g_PersistentData.discoveredArtifactList.length;if(l>=3){return"Unlock requirement: find 20 unique Artifacts (not necessarily all in the same run)";}return"Unlock requirement: ???";},function(x){enchantingPriceMulti=2+0.6*x;},function(x){return g_ArtifactManager.count_undiscovered()===0;},8,function(){return g_PersistentData.discoveredArtifactList.length===20;});
    g_PersistentData.challengesList[g_PersistentData.challengesList.length-1].hideName=function(){return g_PersistentData.totalAPs<1;};
}
} //Persistent_Data

{
//More info can be found in previous file versions
var Resource_Pane=function(){
this.spiceVisible=!1;this.gadoliniumVisible=!1;this.flameOrbVisible=!1;this.ironVisible=!1;this.goldenAppleVisible=!1;this.darkEnergyVisible=!1;this.bioOrbVisible=!1;this.mithrilVisible=!1;this.evacueesVisible=!1;this.tierShowing=1;this.bProd=!0;this.bProdY=0;this.bCons=!0;this.bConsY=0;this.uCons=!0;this.uConsY=0;this.pMult=!0;this.pMultY=0;this.cMult=!0;this.cMultY=0;};
Resource_Pane.prototype.on_new_run_start=function(){
this.spiceVisible=!1;this.gadoliniumVisible=!1;this.flameOrbVisible=!1;this.ironVisible=!1;this.goldenAppleVisible=!1;this.darkEnergyVisible=!1;this.bioOrbVisible=!1;this.mithrilVisible=!1;this.evacueesVisible=!1;this.tierShowing=1;this.bProd=!0;this.bProdY=0;this.bCons=!0;this.bConsY=0;this.uCons=!0;this.uConsY=0;this.pMult=!0;this.pMultY=0;this.cMult=!0;this.cMultY=0;};
Resource_Pane.prototype.left_arrow_visible=function(){
if(g_TutorialProgress.get_rview_disabled()){return!1;}return this.tierShowing>1;};
Resource_Pane.prototype.right_arrow_visible=function(){
if(g_TutorialProgress.get_rview_disabled()){return!1;}if(this.evacueesVisible){return this.tierShowing<4;}if(this.goldenAppleVisible||this.darkEnergyVisible||this.bioOrbVisible||this.mithrilVisible){return this.tierShowing<3;}if(this.spiceVisible||this.gadoliniumVisible||this.flameOrbVisible||this.ironVisible){return this.tierShowing<2;}return!1;};
Resource_Pane.prototype.get_back_color=function(){
switch(this.tierShowing){case 1:return color(255,255,128);case 2:return color(128,255,128);case 3:return color(192,192,255);default:return color(255,128,128);}};
Resource_Pane.prototype.render_factors=function(){
stroke(0);fill(this.get_back_color());rect(-1,height-86,118,88);fill(0);textSize(12);text("Plains factor: "+g_Factors.get_plains_factor_string(),4,height-64);text("Swamp factor: "+g_Factors.get_swamp_factor_string(),4,height-48);text("Lake factor: "+g_Factors.get_lake_factor_string(),4,height-32);text("Desert factor: "+g_Factors.get_desert_factor_string(),4,height-16);};
Resource_Pane.prototype.render = function()
{
    this.render_factors();fill(this.get_back_color());rect(117.2,height-86,width,88);if(g_TutorialProgress.get_rview_disabled()){return!1;}fill(0);
    var xT=176,yT=[height-64,height-48,height-32,height-16];
    switch(this.tierShowing)
    {
    case 1:text("Food: "+this.formatSI(foodResource)+" "+this.income_to_string(foodNetIncome),xT,yT[0]);text("Mana: "+this.formatSI(manaResource)+" "+this.income_to_string(manaNetIncome),xT,yT[1]);text("Pearl: "+this.formatSI(pearlResource)+" "+this.income_to_string(pearlNetIncome),xT,yT[2]);text("Stone: "+this.formatSI(stoneResource)+" "+this.income_to_string(stoneNetIncome),xT,yT[3]);break;
    case 2:if(this.spiceVisible){text("Spice: "+this.formatSI(spiceResource)+" "+this.income_to_string(spiceNetIncome),xT,yT[0]);}if(this.gadoliniumVisible){text("Gadolinium: "+this.formatSI(gadoliniumResource)+" "+this.income_to_string(gadoliniumNetIncome),xT,yT[1]);}if(this.flameOrbVisible){text("Flame Orb: "+this.formatSI(flameOrbResource)+" "+this.income_to_string(flameOrbNetIncome),xT,yT[2]);}if(this.ironVisible){text("Iron: "+this.formatSI(ironResource)+" "+this.income_to_string(ironProjectedNetIncome),xT,yT[3]);}break;
    case 3:if(this.goldenAppleVisible){text("Golden Apple: "+this.formatSI(goldenAppleResource)+" "+this.income_to_string(goldenAppleNetIncome),xT,yT[0]);}if(this.darkEnergyVisible){text("Dark Energy: "+this.formatSI(darkEnergyResource)+" "+this.income_to_string(darkEnergyProjectedNetIncome),xT,yT[1]);}if(this.bioOrbVisible){text("Bio-Orb: "+this.formatSI(bioOrbResource)+" "+this.income_to_string(bioOrbNetIncome),xT,yT[2]);}if(this.mithrilVisible){text("Mithril: "+this.formatSI(mithrilResource)+" "+this.income_to_string(mithrilProjectedFinalIncome),xT,yT[3]);}break;
    case 4:if(this.evacueesVisible){var zzz="Evacuees: "+this.evacuee_to_string(evacuees)+"/"+this.evacuee_to_string(evacueesEnRoute)+"/"+this.evacuee_to_string(maxEvacuees),sz=18;textSize(sz);while(textWidth(zzz)>396-xT){sz-=1;textSize(sz);}
        text(zzz,xT,height-46);textSize(12);text("(rescued/en route/maximum)",xT,height-28);}
    }
    if(this.left_arrow_visible()){if(mouseX>=120&&mouseX<152&&mouseY>=height-58&&mouseY<height-26){fill(255,255,0);}else{fill(192,192,0);}triangle(120,height-42,152,height-58,152,height-26);}if(this.right_arrow_visible()){if(mouseX>=width-32&&mouseX<width&&mouseY>=height-58&&mouseY<height-26){fill(255,255,0);}else{fill(192,192,0);}triangle(width,height-42,width-32,height-58,width-32,height-26);}
};
Resource_Pane.prototype.on_mouse_pressed=function(){if(mouseY<height-58||mouseY>=height-26){return;}if(mouseX>=120&&mouseX<152){this.move_left();}if(mouseX>=width-32&&mouseX<width){this.move_right();}};
Resource_Pane.prototype.move_left=function(){if(this.left_arrow_visible()){this.tierShowing-=1;}return;};
Resource_Pane.prototype.move_right=function(){if(this.right_arrow_visible()){this.tierShowing+=1;}return;};
Resource_Pane.prototype.format_multi=function(n,v){return n+": *"+v.toFixed(3)+" or "+(100*v-100).toFixed(3)+"%";};
Resource_Pane.prototype.formatSI=function(n){if(typeof n!=="number"){throw"Type Error";}if(Number.isNaN(n)){return"NaN";}if(!Number.isFinite(n)){return n<0?"-Infinity":"Infinity";}if(abs(n)<100000){return this.to_decimal_places(n);}if(abs(n)<1000000){return this.to_decimal_places(n/1000)+"k";}if(abs(n)<pow(10,9)){return this.to_decimal_places(n/1000000)+"M";}if(abs(n)<pow(10,12)){return this.to_decimal_places(n/pow(10,9))+"G";}if(abs(n)<pow(10,15)){return this.to_decimal_places(n/pow(10,12))+"T";}if(abs(n)<pow(10,18)){return this.to_decimal_places(n/pow(10,15))+"P";}if(abs(n)<pow(10,21)){return this.to_decimal_places(n/pow(10,18))+"E";}if(abs(n)<pow(10,24)){return this.to_decimal_places(n/pow(10,21))+"Z";}if(abs(n)<pow(10,27)){return this.to_decimal_places(n/pow(10,24))+"Y";}if(abs(n)<pow(10,30)){return this.to_decimal_places(n/pow(10,27))+"R";}if(abs(n)<pow(10,33)){return this.to_decimal_places(n/pow(10,30))+"Q";}if(abs(n)<pow(10,36)){return this.to_decimal_places(n/pow(10,33))+" big";}if(abs(n)<pow(10,39)){return this.to_decimal_places(n/pow(10,36))+" huge";}return n<0?"Almost Negative Infinity":"Almost Infinity";};
Resource_Pane.prototype.to_decimal_places=function(n){if(abs(n)<100){return n.toFixed(3);}if(abs(n)<1000){return n.toFixed(2);}if(abs(n)<10000){return n.toFixed(1);}return n.toFixed(0);};
Resource_Pane.prototype.evacuee_to_string=function(n){if(n<100000){return n.toFixed(0);}return this.formatSI(n);};
Resource_Pane.prototype.income_to_string=function(n){return"("+(n>0?"+":"")+this.formatSI(n)+"/day)";};
Resource_Pane.prototype.display_expander_buttons=function(){
stroke(0);if(this.bCons&&this.bConsY<this.uConsY){line(8,this.bConsY+1,8,this.uConsY-5);line(8,this.uConsY-5,18,this.uConsY-5);}var y=this.bProdY,b=this.bProd;fill(0,192,192);if(mouseX>=2&&mouseX<14&&mouseY>=y-11&&mouseY<y+1){fill(0,255,255);}rect(2,y-11,12,12);fill(0);text(b?"-":"+",5+2*b,y-b);y=this.bConsY;b=this.bCons;fill(0,192,192);if(mouseX>=2&&mouseX<14&&mouseY>=y-11&&mouseY<y+1){fill(0,255,255);}rect(2,y-11,12,12);fill(0);text(b?"-":"+",5+2*b,y-b);y=this.uConsY;b=this.uCons;fill(0,144,192);if(mouseX>=18&&mouseX<30&&mouseY>=y-11&&mouseY<y+1){fill(0,192,255);}rect(18,y-11,12,12);fill(0);text(b?"-":"+",21+2*b,y-b);y=this.pMultY;b=this.pMult;fill(0,192,192);if(mouseX>=2&&mouseX<14&&mouseY>=y-11&&mouseY<y+1){fill(0,255,255);}rect(2,y-11,12,12);fill(0);text(b?"-":"+",5+2*b,y-b);y=this.cMultY;b=this.cMult;fill(0,192,192);if(mouseX>=2&&mouseX<14&&mouseY>=y-11&&mouseY<y+1){fill(0,255,255);}rect(2,y-11,12,12);fill(0);text(b?"-":"+",5+2*b,y-b);};
Resource_Pane.prototype.click_expander_button=function(){
var y=this.uConsY;if(mouseX>=18&&mouseX<30&&mouseY>=y-11&&mouseY<y+1){this.uCons=!this.uCons;return!0;}if(mouseX<2||mouseX>=14){return!1;}y=this.bProdY;if(mouseY>=y-11&&mouseY<y+1){this.bProd=!this.bProd;return!0;}y=this.bConsY;if(mouseY>=y-11&&mouseY<y+1){this.bCons=!this.bCons;return!0;}y=this.pMultY;if(mouseY>=y-11&&mouseY<y+1){this.pMult=!this.pMult;return!0;}y=this.cMultY;if(mouseY>=y-11&&mouseY<y+1){this.cMult=!this.cMult;return!0;}return!1;};
g_ResourcePane=new Resource_Pane();
} //Resource_Pane

{
//This class keeps track of the 4 factors; designed to eliminate rounding errors.
var Factor_Manager=function(){this.plainsFactor=0;this.swampFactor=0;this.desertFactor=0;this.lakeFactor=0;};
Factor_Manager.prototype.on_new_run_start=function(){this.plainsFactor=0;this.swampFactor=0;this.desertFactor=0;this.lakeFactor=0;};
Factor_Manager.prototype.get_plains_factor=function(){return 0.1*this.plainsFactor;};
Factor_Manager.prototype.get_swamp_factor=function(){return 0.1*this.swampFactor;};
Factor_Manager.prototype.get_desert_factor=function(){return 0.1*this.desertFactor;};
Factor_Manager.prototype.get_lake_factor=function(){return 0.1*this.lakeFactor;};
Factor_Manager.prototype.get_plains_factor_string=function(){return(0.1*this.plainsFactor).toFixed(1);};
Factor_Manager.prototype.get_swamp_factor_string=function(){return(0.1*this.swampFactor).toFixed(1);};
Factor_Manager.prototype.get_desert_factor_string=function(){return(0.1*this.desertFactor).toFixed(1);};
Factor_Manager.prototype.get_lake_factor_string=function(){return(0.1*this.lakeFactor).toFixed(1);};
Factor_Manager.prototype.add_plains_tile=function(){this.plainsFactor+=3;this.swampFactor-=1;this.desertFactor-=1;this.lakeFactor-=1;};
Factor_Manager.prototype.add_swamp_tile=function(){this.plainsFactor-=1;this.swampFactor+=3;this.desertFactor-=1;this.lakeFactor-=1;};
Factor_Manager.prototype.add_desert_tile=function(){this.plainsFactor-=1;this.swampFactor-=1;this.desertFactor+=3;this.lakeFactor-=1;};
Factor_Manager.prototype.add_lake_tile=function(){this.plainsFactor-=1;this.swampFactor-=1;this.desertFactor-=1;this.lakeFactor+=3;};
Factor_Manager.prototype.remove_plains_tile=function(){this.plainsFactor-=3;this.swampFactor+=1;this.desertFactor+=1;this.lakeFactor+=1;};
Factor_Manager.prototype.remove_swamp_tile=function(){this.plainsFactor+=1;this.swampFactor-=3;this.desertFactor+=1;this.lakeFactor+=1;};
Factor_Manager.prototype.remove_desert_tile=function(){this.plainsFactor+=1;this.swampFactor+=1;this.desertFactor-=3;this.lakeFactor+=1;};
Factor_Manager.prototype.remove_lake_tile=function(){this.plainsFactor+=1;this.swampFactor+=1;this.desertFactor+=1;this.lakeFactor-=3;};
Factor_Manager.prototype.start_lake_music=function(){this.plainsFactor-=20;this.swampFactor-=20;this.desertFactor-=20;this.lakeFactor+=60;};
Factor_Manager.prototype.end_lake_music=function(){this.plainsFactor+=20;this.swampFactor+=20;this.desertFactor+=20;this.lakeFactor-=60;};
Factor_Manager.prototype.start_plains_grow=function(){this.plainsFactor+=60;this.swampFactor-=20;this.desertFactor-=20;this.lakeFactor-=20;};
Factor_Manager.prototype.end_plains_grow=function(){this.plainsFactor-=60;this.swampFactor+=20;this.desertFactor+=20;this.lakeFactor+=20;};
g_Factors = new Factor_Manager();
} //Factor_Manager

{
//For more info, see old file versions:
var Toggle_Button_Manager=function(){
this.furnaceToggle=!0;this.furnaceToggleVisible=!1;this.darkMineToggle=!0;this.darkMineToggleVisible=!1;this.mithrilMineToggle=!0;this.mithrilMineToggleVisible=!1;this.terraformerLvl4Toggle=!0;this.terraformerLvl4ToggleVisible=!1;this.lavaFreezerToggle=!0;this.lavaFreezerToggleVisible=!1;this.goldenFarmToggle=!0;this.goldenFarmToggleVisible=!1;this.mithrilMineDarkToggle=!0;this.mithrilMineDarkToggleVisible=!1;};
Toggle_Button_Manager.prototype.on_new_run_start=function(){
this.furnaceToggle=!0;this.furnaceToggleVisible=!1;this.darkMineToggle=!0;this.darkMineToggleVisible=!1;this.mithrilMineToggle=!0;this.mithrilMineToggleVisible=!1;this.terraformerLvl4Toggle=!0;this.terraformerLvl4ToggleVisible=!1;this.lavaFreezerToggle=!0;this.lavaFreezerToggleVisible=!1;this.goldenFarmToggle=!0;this.goldenFarmToggleVisible=!1;this.mithrilMineDarkToggle=!0;this.mithrilMineDarkToggleVisible=!1;};
Toggle_Button_Manager.prototype.draw=function(){
noStroke();var textX=width-2,textY=[199,215,231];if(this.furnaceToggleVisible&&!currentlyInBackside){fill(255,255,255,128);rect(width-25,121,26,14);fill(0,0,0);ellipse(width-18,128,12,12);ellipse(width-6,128,12,12);rect(width-18,122,12,12);if(this.furnaceToggle){fill(0,255,0);ellipse(width-18,128,10,10);}else{fill(255,0,0);ellipse(width-6,128,10,10);}if(ticksToShowDayNumber===0&&mouseX>=width-24&&mouseY>=122&&mouseY<134){fill(255,255,255,128);rect(width-90,textY[0]-14,90,34);fill(0,0,0);textSize(12);textAlign(RIGHT,BASELINE);text("Toggle furnaces",textX,textY[0]);if(this.furnaceToggle){text("Currently ON",textX,textY[1]);}else{text("Currently OFF",textX,textY[1]);}textAlign(LEFT,BASELINE);}}if(this.darkMineToggleVisible&&!currentlyInBackside){fill(255,255,255,128);rect(width-25,137,26,14);fill(0,0,0);ellipse(width-18,144,12,12);ellipse(width-6,144,12,12);rect(width-18,138,12,12);if(this.darkMineToggle){fill(0,255,0);ellipse(width-18,144,10,10);}else{fill(255,0,0);ellipse(width-6,144,10,10);}if(ticksToShowDayNumber===0&&mouseX>=width-24&&mouseY>=138&&mouseY<150){fill(255,255,255,128);rect(width-80,textY[0]-14,80,34);fill(0,0,0);textSize(12);textAlign(RIGHT,BASELINE);text("Dark mines",textX,textY[0]);if(this.darkMineToggle){text("Currently ON",textX,textY[1]);}else{text("Currently OFF",textX,textY[1]);}textAlign(LEFT,BASELINE);}}if(this.goldenFarmToggleVisible&&!currentlyInBackside){fill(255,255,255,128);rect(width-25,153,26,14);fill(0,0,0);ellipse(width-18,160,12,12);ellipse(width-6,160,12,12);rect(width-18,154,12,12);if(this.goldenFarmToggle){fill(0,255,0);if(season===4){fill(85,85,85);}ellipse(width-18,160,10,10);}else{fill(255,0,0);if(season===4){fill(85,85,85);}ellipse(width-6,160,10,10);}if(ticksToShowDayNumber===0&&mouseX>=width-24&&mouseY>=154&&mouseY<166){fill(255,255,255,128);rect(width-80,textY[0]-14,80,34);if(season===4){fill(255,255,255,128);rect(width-116,textY[2]-12,142,16);}fill(0,0,0);textSize(12);textAlign(RIGHT,BASELINE);text("Golden farms",textX,textY[0]);if(this.goldenFarmToggle){text("Currently ON",textX,textY[1]);}else{text("Currently OFF",textX,textY[1]);}if(season===4){text("No effect in frosthour",textX,textY[2]);}textAlign(LEFT,BASELINE);}}if(this.terraformerLvl4ToggleVisible){fill(255,255,255,128);rect(width-25,169,26,14);fill(0,0,0);ellipse(width-18,176,12,12);ellipse(width-6,176,12,12);rect(width-18,170,12,12);
    if(this.terraformerLvl4Toggle){fill(0,255,0);ellipse(width-18,176,10,10);}else{fill(255,0,0);ellipse(width-6,176,10,10);}if(ticksToShowDayNumber===0&&mouseX>=width-24&&mouseY>=170&&mouseY<182){fill(255,255,255,128);rect(width-107,textY[0]-14,107,34);fill(0,0,0);textSize(12);textAlign(RIGHT,BASELINE);text("Terraformers lvl. 4+",textX,textY[0]);if(this.terraformerLvl4Toggle){text("Currently ON",textX,textY[1]);}else{text("Currently OFF",textX,textY[1]);}textAlign(LEFT,BASELINE);}}if(this.mithrilMineToggleVisible&&currentlyInBackside){fill(255,255,255,128);rect(width-25,137,26,14);fill(0,0,0);ellipse(width-18,144,12,12);ellipse(width-6,144,12,12);rect(width-18,138,12,12);if(this.mithrilMineToggle){fill(0,255,0);ellipse(width-18,144,10,10);}else{fill(255,0,0);ellipse(width-6,144,10,10);}if(ticksToShowDayNumber===0&&mouseX>=width-24&&mouseY>=138&&mouseY<150){fill(255,255,255,128);rect(width-116,textY[0]-14,116,34);fill(0,0,0);textSize(12);textAlign(RIGHT,BASELINE);text("Toggle mithril mining",textX,textY[0]);if(this.mithrilMineToggle){text("Currently ON",textX,textY[1]);}else{text("Currently OFF",textX,textY[1]);}textAlign(LEFT,BASELINE);}}if(this.lavaFreezerToggleVisible&&currentlyInBackside){fill(255,255,255,128);rect(width-25,121,26,14);fill(0,0,0);ellipse(width-18,128,12,12);ellipse(width-6,128,12,12);rect(width-18,122,12,12);fill(0,128,255);if(this.lavaFreezerToggle){ellipse(width-18,128,10,10);}else{ellipse(width-6,128,10,10);}if(ticksToShowDayNumber===0&&mouseX>=width-24&&mouseY>=122&&mouseY<134){var minEnr=allSpells.by_name("Mineral Enrichment").durationLeft>0;fill(255,255,255,128);rect(width-(126+6*minEnr),textY[0]-14,126+6*minEnr,50);fill(0,0,0);textSize(12);textAlign(RIGHT,BASELINE);text("Lava freezers",textX,textY[0]);text(minEnr?"Iron or gadolinium":"Stone or flame orb",textX,textY[1]);if(this.lavaFreezerToggle){text(minEnr?"Currently IRON":"Currently STONE",textX,textY[2]);}else{text(minEnr?"Currently GADOLINIUM":"Currently FLAME ORB",textX,textY[2]);}textAlign(LEFT,BASELINE);}}if(this.mithrilMineDarkToggleVisible&&currentlyInBackside){fill(255,255,255,128);rect(width-25,153,26,14);fill(0,0,0);ellipse(width-18,160,12,12);ellipse(width-6,160,12,12);rect(width-18,154,12,12);
    if(this.mithrilMineDarkToggle){fill(0,255,0);if(!this.mithrilMineToggle){fill(85,85,85);}ellipse(width-18,160,10,10);}else{fill(255,0,0);if(!this.mithrilMineToggle){fill(85,85,85);}ellipse(width-6,160,10,10);}if(ticksToShowDayNumber===0&&mouseX>=width-24&&mouseY>=154&&mouseY<166){fill(255,255,255,128);rect(width-80,textY[0]-14,80,34);if(!this.mithrilMineToggle){fill(255,255,255,128);rect(width-110,textY[2]-12,136,16);}fill(0,0,0);textSize(12);textAlign(RIGHT,BASELINE);text("Dark mines",textX,textY[0]);if(this.mithrilMineDarkToggle){text("Currently ON",textX,textY[1]);}else{text("Currently OFF",textX,textY[1]);}if(!this.mithrilMineToggle){text("Mines are turned off",textX,textY[2]);}textAlign(LEFT,BASELINE);}}};
Toggle_Button_Manager.prototype.on_mouse_pressed=function(){
if(mouseX<width-24){return!1;}if(mouseY>=122&& mouseY<134){if(this.furnaceToggleVisible&&!currentlyInBackside){this.furnaceToggle=!this.furnaceToggle;recalculate_building_effects();movesLeft-=1;return!0;}if(this.lavaFreezerToggleVisible&&currentlyInBackside){this.lavaFreezerToggle=!this.lavaFreezerToggle;recalculate_building_effects();movesLeft-=1;return!0;}}if(mouseY>=138&&mouseY<150){if(this.darkMineToggleVisible&&!currentlyInBackside){this.darkMineToggle=!this.darkMineToggle;recalculate_building_effects();movesLeft-=1;return!0;}if(this.mithrilMineToggleVisible&&currentlyInBackside){this.mithrilMineToggle=!this.mithrilMineToggle;recalculate_building_effects();movesLeft-=1;return!0;}}if(mouseY>=154&&mouseY<166) {if(this.goldenFarmToggleVisible&&!currentlyInBackside){this.goldenFarmToggle=!this.goldenFarmToggle;recalculate_building_effects();movesLeft-=1;return!0;}if(this.mithrilMineDarkToggleVisible&&currentlyInBackside){this.mithrilMineDarkToggle=!this.mithrilMineDarkToggle;recalculate_building_effects();movesLeft-=1;return!0;}}if(mouseY>=170&&mouseY<182){if(this.terraformerLvl4ToggleVisible){this.terraformerLvl4Toggle=!this.terraformerLvl4Toggle;recalculate_building_effects();movesLeft-=1;return!0;}}return!1;};
g_ToggleButtonManager=new Toggle_Button_Manager();
} //Toggle_Button_Manager

{
//For more info, see older file versions:
var tile_type_as_string=function(t){
switch(t){case TT_PLAINS:return"plains";case TT_DESERT:return"desert";case TT_SWAMP:return"swamp";case TT_LAKE:return"lake";case TT_PAVED_OVER:return"paved over";case TT_SLIMED:return"slimed";case TT_MAP_EDGE:return"map edge";case TT_LAVA:return"lava";case TT_WASTELAND:return"wasteland";case TT_MITHRIL:return"mithril";case TT_CYBERMIND:return"cybermind";default:return"unknown";}};
var Tile=function(X,Y,t){
this.x=X;this.y=Y;this.claimed=!1;this.revealed=!1;this.nextToEdge=!1;this.tileType=t;this.backsideTileType=t===TT_MAP_EDGE?t:t+6;this.hasDarkEnergy=random(10)<2;this.hasTrainPowerLine=trainPowerLineX>=this.x-16&&trainPowerLineX<this.x+16;this.tier=dist(this.x,this.y,192,160)/200;this.buildings=[];if(t===TT_SWAMP&&g_PersistentData.currentChallenge==="8YC"&&random(10)<1){this.tileType=TT_SLIMED;}};
Tile.prototype.draw_at=function(xDraw,yDraw){
if(xDraw<-16||xDraw>width+16||yDraw<-16||yDraw>height+16){return;}var voidColor=currentlyInBackside?BACKSIDE_VOID_COLOR:FRONTSIDE_VOID_COLOR;if(!this.revealed){return;}switch(currentlyInBackside?this.backsideTileType:this.tileType){case TT_PLAINS:image(allTiles.images[season===4?TT_DPLAINS:TT_PLAINS],xDraw,yDraw);if(this.nextToEdge){noStroke();fill(voidColor);rect(xDraw-16,yDraw-16,8,8);rect(xDraw-16,yDraw,8,8);rect(xDraw-8,yDraw-8,8,8);}break;case TT_DESERT:image(allTiles.images[season===4?TT_DDESERT:TT_DESERT],xDraw,yDraw);if(this.nextToEdge){noStroke();fill(voidColor);rect(xDraw-16,yDraw-8,8,8);rect(xDraw-8,yDraw+8,8,8);}break;case TT_SWAMP:image(allTiles.images[season===4?TT_DSWAMP:TT_SWAMP],xDraw,yDraw);if(this.nextToEdge){noStroke();fill(voidColor);rect(xDraw-16,yDraw-8,8,16);rect(xDraw,yDraw-16,8,8);}break;case TT_LAKE:image(allTiles.images[season===4?TT_DLAKE:TT_LAKE],xDraw,yDraw);if(this.nextToEdge){noStroke();fill(voidColor);rect(xDraw-16,yDraw-8,16,8);rect(xDraw,yDraw,8,8);}break;case TT_PAVED_OVER:image(allTiles.images[TT_PAVED_OVER],xDraw,yDraw);if(season===4){noFill();stroke(255,128,0,130-80*(gcaS+sin(2*globalCyclicAnimation)/2+sin(3*globalCyclicAnimation)/3+sin(4*globalCyclicAnimation)/4));for(var i=7;i<=13;i+=2){rect(xDraw-i,yDraw-i,2*i,2*i);}}break;case TT_SLIMED:image(allTiles.images[TT_SLIMED],xDraw,yDraw);if(season===4){noStroke();fill(255,255,255,64);rect(xDraw-14,yDraw-14,28,28);rect(xDraw-16,yDraw-16,32,32);}if(this.nextToEdge){noStroke();fill(voidColor);rect(xDraw-16,yDraw-8,8,16);rect(xDraw,yDraw-16,8,8);}break;case TT_MAP_EDGE:var offset=floor(map(4*globalCyclicAnimation%360,0,360,0,32)),starColor=currentlyInBackside?color(0,255,0):color(255,255,255);noStroke();fill(voidColor);if(currentScreen==="main"||currentScreen==="main-info"){rect(0,yDraw-16,xDraw+16,32);stroke(starColor);for(var i=xDraw+offset-16;i>-1;i-=32){point(i,yDraw-offset+15);}}else{rect(xDraw-16,yDraw-16,32,32);stroke(starColor);point(xDraw+offset-16,yDraw-offset+15);}break;case TT_MITHRIL:image(allTiles.images[TT_MITHRIL],xDraw,yDraw);if(season===4){noStroke();fill(0,255,255,32);rect(xDraw-16,yDraw-16,32,32);}if(this.nextToEdge){noStroke();fill(voidColor);rect(xDraw-16,yDraw-16,8,8);rect(xDraw-16,yDraw,8,8);rect(xDraw-8,yDraw-8,8,8);}break;case TT_LAVA:image(allTiles.images[TT_LAVA],xDraw,yDraw);noStroke();if(season!==4){for(var i=-16;i<16;i+=8){for(var j=-16;j<16;j+=8){fill(255,0,0,128+64*sin(globalCyclicAnimation+2*(i+j)));rect(xDraw+i,yDraw+j,8,8);}}}else{var xL=xDraw+(180-(globalCyclicAnimation+abs(2*this.x+this.y))%360)/18;fill(128,128,128,64);rect(xDraw-16,yDraw-16,32,32);fill(96,96,96,196*sin((globalCyclicAnimation+abs(2*this.x+this.y))%360/2));
quad(xL,yDraw-5,xL+6,yDraw-3,xL+4,yDraw+5,xL-3,yDraw+4);triangle(xL-2,yDraw+8,xL+2,yDraw+6,xL-1,yDraw+12);fill(96,96,96,96+128*sq(cos(globalCyclicAnimation-this.x+this.y/3)));triangle(xDraw-4,yDraw-16,xDraw+6,yDraw-16,xDraw-1,yDraw-13);fill(96,96,96,96+128*sq(cos(globalCyclicAnimation-this.x+(this.y+32)/3)));triangle(xDraw-4,yDraw+16,xDraw+6,yDraw+16,xDraw+3,yDraw+13);}if(this.nextToEdge){fill(voidColor);rect(xDraw-16,yDraw-8,8,8);rect(xDraw-8,yDraw+8,8,8);}break;case TT_CYBERMIND:image(allTiles.images[TT_CYBERMIND],xDraw,yDraw);if(season===4){tint(255,255,255,128);image(allTiles.images[TT_DCYBERMIND],xDraw,yDraw);tint(255,255,255,255);}if(this.nextToEdge){noStroke();fill(voidColor);rect(xDraw-16,yDraw-8,8,16);rect(xDraw,yDraw-16,8,8);}break;case TT_WASTELAND:image(allTiles.images[season===4?TT_DWASTELAND:TT_WASTELAND],xDraw,yDraw);if(this.nextToEdge){noStroke();fill(voidColor);rect(xDraw-16,yDraw-8,16,8);rect(xDraw,yDraw,8,8);}break;default:image(allTiles.images[TT_MAP_EDGE],xDraw,yDraw);}if(allBuildings[0].upgradeLevel>=3&&this.hasTrainPowerLine){noStroke();if(currentlyInBackside){fill(0,255,255);}else{fill(128,64,0);}rect(xDraw+10,yDraw-16,3,32);}if(!this.claimed){noStroke();fill(voidColor,128);if(this.tileType===TT_MAP_EDGE&&(currentScreen==="main"||currentScreen==="main-info")){rect(0,yDraw-16,xDraw+16,32);}else{rect(xDraw-16,yDraw-16,32,32);}}};
Tile.prototype.draw=function(){this.draw_at(this.x-cameraX,this.y-cameraY);};
Tile.prototype.draw_dark_energy_at=function(x,y){
if(!this.hasDarkEnergy||x<-16||x>width+16||y<-16||y>height+16||!this.revealed){return;}noStroke();fill(0,0,0,64*gcaS+128);ellipse(x,y,8,8);ellipse(x+10*gcaC,y+10*gcaS,8,8);ellipse(x-10*gcaS,y+10*gcaC,8,8);ellipse(x-10*gcaC,y-10*gcaS,8,8);ellipse(x+10*gcaS,y-10*gcaC,8,8);};
Tile.prototype.draw_dark_energy=function(){this.draw_dark_energy_at(this.x-cameraX,this.y-cameraY);};
Tile.prototype.type_as_string=function(){return tile_type_as_string(this.tileType);};
Tile.prototype.backside_type_as_string=function(){return tile_type_as_string(this.backsideTileType);};
Tile.prototype.claim=function(){
this.claimed=!0;this.revealed=!0;switch(this.tileType){case TT_PLAINS:g_Factors.add_plains_tile();break;case TT_DESERT:g_Factors.add_desert_tile();break;case TT_SWAMP:g_Factors.add_swamp_tile();break;case TT_LAKE:g_Factors.add_lake_tile();break;}};
Tile.prototype.food_cost_to_claim=function(){
var C=10;if(g_PersistentData.currentChallenge==="RWC"){C+=5*g_PersistentData.get_challenge_times_completed("RW");}return C*floor(this.tier)+(this.tileType===TT_DESERT);};
allTiles = [];
allTiles.has_claimed=function(t){
for(var i=0;i<allTiles.length;i+=1){if(allTiles[i].claimed){if(allTiles[i].tileType===t||allTiles[i].backsideTileType===t){return!0;}}}return!1;};
allTiles.count_unclaimed_lakes=function(){var c=0;allTiles.forEach(function(T){c+=!T.claimed&&T.tileType===TT_LAKE;});return c;};
var slime_tile=function(){
var s=!1,r=-1,y=0;for(;y<50;y+=1){r=floor(random(allTiles.length));var t=allTiles[r];if(t.tileType===TT_SWAMP){t.tileType=TT_SLIMED;if(t.claimed){g_Factors.remove_swamp_tile();}if(selectedTile===r){if(currentScreen==="build"){currentScreen="main";}g_ConstructionManager.on_tile_selected();}s=!0;break;}}recalculate_building_effects();return s;};
var deslime_selected_tile=function(){
if(selectedTile===-1){return;}if(allTiles[selectedTile].tileType===TT_SLIMED){allTiles[selectedTile].tileType=TT_SWAMP;g_Factors.add_swamp_tile();var manaGained=10*manaFromSlimeMulti,gadoliniumGained=1*gadoliniumFromSlimeMulti;g_ConstructionManager.on_tile_selected();if(g_PersistentData.get_upgrade_effect("DA")){var temp=-1;temp=tile_at_position(allTiles[selectedTile].x-32,allTiles[selectedTile].y);if(temp>-1&&allTiles[temp].claimed&&allTiles[temp].tileType===TT_SLIMED){allTiles[temp].tileType=TT_SWAMP;g_Factors.add_swamp_tile();manaGained+=10*manaFromSlimeMulti;gadoliniumGained+=1*gadoliniumFromSlimeMulti;}temp=tile_at_position(allTiles[selectedTile].x+32,allTiles[selectedTile].y);if(temp>-1&&allTiles[temp].claimed&&allTiles[temp].tileType===TT_SLIMED){allTiles[temp].tileType=TT_SWAMP;g_Factors.add_swamp_tile();manaGained+=10*manaFromSlimeMulti;gadoliniumGained+=1*gadoliniumFromSlimeMulti;}temp=tile_at_position(allTiles[selectedTile].x,allTiles[selectedTile].y-32);if(temp>-1&&allTiles[temp].claimed&&allTiles[temp].tileType===TT_SLIMED){allTiles[temp].tileType=TT_SWAMP;g_Factors.add_swamp_tile();manaGained+=10*manaFromSlimeMulti;gadoliniumGained+=1*gadoliniumFromSlimeMulti;}temp=tile_at_position(allTiles[selectedTile].x,allTiles[selectedTile].y+32);if(temp>-1&&allTiles[temp].claimed&&allTiles[temp].tileType===TT_SLIMED){allTiles[temp].tileType=TT_SWAMP;g_Factors.add_swamp_tile();manaGained+=10*manaFromSlimeMulti;gadoliniumGained+=1*gadoliniumFromSlimeMulti;}}manaResource+=manaGained;gadoliniumResource+=gadoliniumGained;g_ResourcePane.gadoliniumVisible=!0;g_FlyingText.set_text("+"+(Number.isInteger(manaGained)?manaGained:g_ResourcePane.formatSI(manaGained))+" mana, +"+(Number.isInteger(gadoliniumGained)?gadoliniumGained:g_ResourcePane.formatSI(gadoliniumGained))+" gadolinium",mouseX,mouseY);g_FlyingText.fontColor=color(255,0,0);recalculate_building_effects();}};
var claim_tile=function(){
if(selectedTile===-1){return;}var s=allTiles[selectedTile];if(!s.claimed){s.claim();tilesClaimed+=1;var t=-1;t=tile_at_position(s.x-32,s.y);if(t>-1){allTiles[t].revealed=!0;}t=tile_at_position(s.x+32,s.y);if(t>-1){allTiles[t].revealed=!0;}t=tile_at_position(s.x,s.y-32);if(t>-1){allTiles[t].revealed=!0;}t=tile_at_position(s.x,s.y+32);if(t>-1){allTiles[t].revealed=!0;}if(s.tileType===TT_PLAINS){var c=g_PersistentData.get_upgrade_effect("Ef");if(c===100||(c>0&&random(0,100)<c)){allBuildings.build(selectedTile,BT_ENCHANTING_TABLE);g_EnchTableFlyingText.set_text("Free enchanting table!!!",s.x-cameraX,s.y+16-cameraY);g_EnchTableFlyingText.fontColor=color(255,0,255);allEnchTableAnimations.add();}}if(allCreatures.get_on_tile(selectedTile,CT_EDGE_FINDER)){if(g_EnchTableFlyingText.ticksToDisplay<60){g_EnchTableFlyingText.set_text("\n+10 mithril",s.x-cameraX,s.y-cameraY);g_EnchTableFlyingText.fontColor=color(255,0,255);}else{g_EnchTableFlyingText.text+="\n+10 mithril";}mithrilResource+=10;g_ResourcePane.mithrilVisible=!0;}if(g_PersistentData.currentChallenge==="URC"&&s.tileType===TT_LAKE&&!allBuildings.get_tile_has(selectedTile,BT_MER_MALL)&&!allBuildings.get_tile_has(selectedTile,BT_REEF)){var f=allBuildings.count_of_type(BT_UNDERWATER_RUINS,5)<1&&allTiles.count_unclaimed_lakes()<1;if(f||random(5)<1){allBuildings.build(selectedTile,BT_UNDERWATER_RUINS);if(f){allBuildings[allBuildings.length-1].upgradeLevel=5;}}}
recalculate_building_effects();}};
//I found a tutorial here:
//https://www.khanacademy.org/computer-programming/image-tutorial-hope/6740408654856192
//The image feature reduces lag in my game.
//Thank you, Iron Programming (@ncochran2) for this tutorial!
imageMode(CENTER);
var make_images=function(){
allTiles.images=[];for(var i=TT_PAVED_OVER;i<TT_DWASTELAND+1;i+=1){allTiles.images[i]=createImage(32,32,RGB);}noStroke();fill(128,128,128);rect(0,0,32,32);stroke(192,192,192);line(0,0,30,0);line(0,0,0,31);stroke(64,64,64);line(31,0,31,31);line(1,31,31,31);allTiles.images[TT_PAVED_OVER]=get(0,0,32,32);noStroke();fill(224,224,64);rect(0,0,32,32);stroke(112,112,32);fill(112,112,32);ellipse(12,18,2,2);ellipse(25,6,6,2);allTiles.images[TT_DESERT]=get(0,0,32,32);noStroke();fill(0,128,255);rect(0,0,32,32);allTiles.images[TT_LAKE]=get(0,0,32,32);noStroke();fill(0,192,0);rect(0,0,32,32);stroke(0,255,0);line(12,5,14,8);line(12,4,14,8);line(16,5,14,8);allTiles.images[TT_PLAINS]=get(0,0,32,32);noStroke();fill(0,96,192);rect(0,0,32,32);fill(0,128,0);rect(0,0,8,8);rect(8,0,8,16);rect(0,16,8,8);rect(8,24,16,8);rect(16,16,16,8);rect(24,0,8,8);allTiles.images[TT_SWAMP]=get(0,0,32,32);noStroke();fill(32,255,32);rect(0,0,32,32);fill(48,224,32);rect(10,10,12,12);stroke(144,255,144);line(0,0,30,0);line(0,0,0,31);stroke(24,128,72);line(31,0,31,31);line(1,31,31,31);allTiles.images[TT_SLIMED]=get(0,0,32,32);noStroke();fill(0,0,0);rect(0,0,32,32);allTiles.images[TT_MAP_EDGE]=get(0,0,32,32);noStroke();fill(255,64,0);rect(0,0,32,32);allTiles.images[TT_LAVA]=get(0,0,32,32);noStroke();fill(96,96,96);rect(0,0,32,32);stroke(0,64,0);point(4,5);point(5,6);point(6,5);point(4,7);point(6,7);point(8,24);point(8,25);point(9,26);noStroke();fill(128,64,0);ellipse(27,11,3,3);stroke(80,80,0);point(29,18);allTiles.images[TT_WASTELAND]=get(0,0,32,32);noStroke();fill(208,208,208);rect(0,0,32,32);stroke(0,0,0,64);line(6,8,11,14);line(21,11,17,16);line(4,17,8,25);line(18,27,19,31);allTiles.images[TT_MITHRIL]=get(0,0,32,32);
noStroke();fill(128,128,128);rect(0,0,32,32);noFill();stroke(255,0,0);line(8,0,8,10);line(8,10,22,24);line(22,24,31,24);line(0,24,4,24);line(4,24,8,28);line(8,28,8,31);stroke(0,255,0);line(24,0,24,8);line(0,8,24,8);line(28,8,31,8);line(28,8,28,28);line(24,28,28,28);line(24,28,24,31);stroke(0,0,255);line(16,0,16,31);line(0,16,6,16);line(26,16,31,16);ellipse(8.5,16.5,4,4);ellipse(24.5,16.5,4,4);allTiles.images[TT_CYBERMIND]=get(0,0,32,32);
noStroke();fill(240,240,160);rect(0,0,32,32);stroke(120,120,80);fill(112,112,32);ellipse(12,18,2,2);ellipse(25,6,6,2);allTiles.images[TT_DDESERT]=get(0,0,32,32);noStroke();fill(96,180,255);rect(0,0,32,32);allTiles.images[TT_DLAKE]=get(0,0,32,32);noStroke();fill(240,240,240);rect(0,0,32,32);stroke(255,255,255);line(6,8,11,14);line(21,11,17,16);line(4,17,8,25);line(18,27,19,31);allTiles.images[TT_DPLAINS]=get(0,0,32,32);noStroke();fill(96,164,224);rect(0,0,32,32);fill(240,240,240);rect(0,0,8,8);rect(8,0,8,16);rect(0,16,8,8);rect(8,24,16,8);rect(16,16,16,8);rect(24,0,8,8);allTiles.images[TT_DSWAMP]=get(0,0,32,32);background(0,0,0,0);noFill();stroke(255,255,255);line(8,0,8,10);line(8,10,22,24);line(22,24,31,24);line(0,24,4,24);line(4,24,8,28);line(8,28,8,31);line(24,0,24,8);line(0,8,24,8);line(28,8,31,8);line(28,8,28,28);line(24,28,28,28);line(24,28,24,31);line(16,0,16,31);line(0,16,6,16);line(26,16,31,16);stroke(0,0,0);ellipse(8.5,16.5,4,4);ellipse(24.5,16.5,4,4);allTiles.images[TT_DCYBERMIND]=get(0,0,32,32);image(allTiles.images[TT_WASTELAND],16,16);stroke(0,224,255,64);line(0,0,5,32);line(5,0,18,32);line(5,0,32,17);line(18,0,0,17);line(0,12,20,22);line(0,23,32,12);line(20,22,32,32);line(20,22,18,32);line(20,22,32,23);noStroke();fill(128,16,152);ellipse(20,22,4,4);ellipse(23,22,4,4);ellipse(20+3*cos(72),22+3*sin(72),4,4);ellipse(20+3*cos(72),22-3*sin(72),4,4);ellipse(20-3*cos(36),22+3*sin(144),4,4);ellipse(20-3*cos(36),22-3*sin(144),4,4);allTiles.images[TT_DWASTELAND]=get(0,0,32,32);};
make_images();
} //Tile

{
var Reef_Data=function(){
this.health=0;this.healthRecord=0;this.maxHealth=100;this.images=[];};
Reef_Data.prototype.on_new_run_start=function(){
this.health=0;this.healthRecord=0;this.maxHealth=100;};
Reef_Data.prototype.on_recalculate_effects=function(){
var h=this.health;foodBonusFromFishingOnReef+=1*(h>=20)+4*(h>=120)+5*(h>=220)+5*(h>=420);pearlProductionFromReef+=0.1*(h>=40)+0.9*(h>=140)+6*(h>=240)+8*(h>=320)+10*(h>=380)+11*(h>=480);stoneProductionMultiFromReefMagic*=(1+0.1*(h>=60))*(1+0.2*(h>=160))*(1+0.25*(h>=260));maxEvacueesFromReef+=30*(h>=280)+50*(h>=340);mithrilProductionMultiFromReef*=1+0.1*(h>=360);flameOrbConsumptionMultiFromReef*=1-0.2*(h>=460);};
Reef_Data.prototype.on_day_end=function(){
if(this.health>0&&this.health<160&&(this.health<80||random(0,10)<5)){this.health-=1;}this.health=constrain(this.health,0,this.maxHealth);};
Reef_Data.prototype.on_reef_upgraded=function(){
this.maxHealth=100*allBuildings.get_reef_level();};
Reef_Data.prototype.increase_health=function(a){
this.health=min(this.health+a,this.maxHealth);this.healthRecord=max(this.healthRecord,this.health);if(this.healthRecord>=280){g_ResourcePane.evacueesVisible=true;}};
Reef_Data.prototype.make_images=function(){
for(var i=0;i<5;i+=1){this.images[i]=createImage(32,32,RGB);}background(0,0,0,0);noStroke();fill(255,0,0);rect(0,24,8,8);fill(255,0,255);rect(0,20,4,4);rect(8,28,4,4);fill(0,255,128);rect(4,20,4,4);rect(8,24,4,4);stroke(255,0,255);line(1,6,1,20);line(12,30,25,30);line(1,18,6,18);line(13,25,13,30);line(1,15,6,15);line(16,25,16,30);line(1,12,5,12);line(19,26,19,30);line(1,9,3,9);line(22,28,22,30);this.images[0]=get(0,0,32,32);background(0,0,0,0);noStroke();fill(255,0,0);rect(0,24,8,8);fill(255,0,255);rect(0,20,4,4);rect(8,28,4,4);fill(0,255,128);rect(4,20,4,4);rect(8,24,4,4);stroke(255,0,255);line(1,2,1,20);line(12,30,29,30);line(0,18,7,18);line(13,24,13,31);line(1,16,8,16);line(15,23,15,30);line(1,14,7,14);line(17,24,17,30);line(1,12,6,12);line(19,25,19,30);line(1,10,5,10);line(21,26,21,30);line(1,8,4,8);line(23,27,23,30);line(1,6,3,6);line(25,28,25,30);line(1,4,2,4);line(27,29,27,30);stroke(0,255,128);line(5,16,5,20);line(12,26,15,26);line(9,18,9,24);line(8,22,13,22);this.images[1]=get(0,0,32,32);background(0,0,0,0);noStroke();fill(255,0,0);rect(0,24,8,8);fill(255,0,255);rect(0,20,4,4);rect(8,28,4,4);rect(0,0,5,5);rect(27,27,5,5);fill(0,255,128);rect(4,20,4,4);rect(8,24,4,4);stroke(255,0,255);line(2,2,2,20);line(12,29,29,29);line(0,18,7,18);line(13,24,13,31);line(0,16,8,16);line(15,23,15,31);line(0,14,7,14);line(17,24,17,31);line(0,12,6,12);line(19,25,19,31);line(0,10,5,10);line(21,26,21,31);line(0,8,4,8);line(23,27,23,31);line(0,6,4,6);line(25,27,25,31);line(2,2,10,2);line(29,21,29,29);line(6,0,6,4);line(27,25,31,25);line(8,1,8,3);line(28,23,30,23);stroke(0,255,128);line(5,12,5,20);line(12,26,19,26);line(7,14,7,20);line(12,24,17,24);line(9,16,9,24);line(8,22,15,22);line(11,18,11,24);line(8,20,13,20);this.images[2]=get(0,0,32,32);background(0,0,0,0);noStroke();fill(255,0,0);rect(0,24,8,8);rect(28,0,4,4);fill(255,0,255);rect(0,20,4,4);rect(8,28,4,4);rect(0,0,5,5);rect(27,27,5,5);fill(0,255,128);rect(4,20,4,4);rect(8,24,4,4);rect(1,1,3,3);rect(28,28,3,3);stroke(255,0,255);line(2,4,2,20);line(12,29,27,29);line(0,18,7,18);line(13,24,13,31);line(0,16,8,16);line(15,23,15,31);line(0,14,7,14);line(17,24,17,31);line(0,12,6,12);line(19,25,19,31);line(0,10,6,10);line(21,25,21,31);line(0,8,6,8);line(23,25,23,31);line(0,6,4,6);line(25,27,25,31);line(4,2,14,2);line(29,17,29,27);line(6,0,6,6);line(25,25,31,25);line(8,0,8,5);line(26,23,31,23);line(10,0,10,4);line(27,21,31,21);line(12,1,12,3);line(28,19,30,19);stroke(0,255,128);line(5,8,5,26);line(5,26,23,26);line(7,11,7,20);line(12,24,20,24);line(9,14,9,24);line(8,22,17,22);line(11,17,11,24);line(8,20,14,20);point(2,4);point(4,2);point(29,27);point(27,29);stroke(255,0,0);line(21,1,27,1);line(30,4,30,10);line(26,1,26,3);line(28,5,30,5);line(23,3,26,3);line(28,5,28,8);point(24,4);point(27,7);this.images[3]=get(0,0,32,32);background(0,0,0,0);noStroke();fill(255,0,0);rect(0,24,8,8);rect(28,0,4,4);fill(255,0,255);rect(0,20,4,4);rect(8,28,4,4);rect(0,0,5,5);rect(27,27,5,5);fill(0,255,128);rect(4,20,4,4);rect(8,24,4,4);rect(1,1,3,3);rect(28,28,3,3);stroke(255,0,255);line(2,4,2,20);line(12,29,27,29);line(0,18,10,18);line(13,21,13,31);line(0,16,11,16);line(15,20,15,31);line(0,14,9,14);line(17,22,17,31);line(0,12,8,12);line(19,23,19,31);line(0,10,8,10);line(21,23,21,31);line(0,8,8,8);line(23,23,23,31);line(0,6,4,6);line(25,27,25,31);line(4,2,25,2);line(29,6,29,27);line(6,0,6,6);line(25,25,31,25);line(8,0,8,6);line(25,23,31,23);line(10,0,10,8);line(23,21,31,21);line(12,0,12,7);line(24,19,31,19);line(14,0,14,6);line(25,17,31,17);line(16,0,16,5);line(26,15,31,15);line(18,1,18,5);line(26,13,30,13);line(20,1,20,3);line(28,11,30,11);stroke(0,255,128);line(5,8,5,26);line(5,26,23,26);line(7,11,7,20);line(12,24,20,24);line(9,14,9,24);line(8,22,17,22);line(11,17,11,24);line(8,20,14,20);line(2,4,2,7);line(4,2,10,2);line(29,21,29,27);line(24,29,27,29);line(2,7,5,7);line(24,26,24,29);stroke(255,0,0);line(19,1,27,1);line(30,4,30,12);line(26,1,26,3);line(28,5,30,5);line(21,3,26,3);line(28,5,28,10);line(24,4,24,5);line(26,7,27,7);line(20,5,25,5);line(26,6,26,11);point(25,6);this.images[4]=get(0,0,32,32);
};
g_ReefData=new Reef_Data();
g_ReefData.make_images();
} //Reef_Data

{
//BT_IRS buildings need extra data, which is associated with one of these objects
var IRS_Data = function()
{
    //0=not built,1=standard(speed 1.0),2=fast(speed 1.5, variable capacity bonus)
    this.engineType = 0;
    //int in range [0,100] that reperesents the condition as a percentage
    this.engineCondition = 100;
    //Type of rescue pod built here
    //0=not built,1=small (15 people),2=large (32 people),3=lightweight (38 people, fuel discount)
    this.rescuePodType = 0;
    //If true, the pod already has resources put in it (food, fuel)
    this.stocked = false;
    //Total number of days the last round trip took:
    this.totalRoundTripTime = -1;
    //Number of days until the rescue pod returns; -1 = not launched yet
    this.timeUntilReturn = -1;
    this.capacityAtLaunch=0;
    this.launchedThisTurn=false;
    this.openTab=1;
    this.returnReport=false;
    this.returnReportDamageSustained=0;
    this.returnReportPeopleSaved=0;
    this.resourceCapacityAtLaunch=0;
    //0=mana,1=stone,2=gadolinium,3=dark energy
    this.resourceType=0;
    this.level=1;
};
IRS_Data.prototype.get_engine_type_as_string=function(){
switch(this.engineType){case 0:return"not built";case 1:return"standard";case 2:return"fast";default:return"unknown";}};
//Hyperspeed affects travel time.  Engine condition must be >= 30% to work.
IRS_Data.prototype.get_engine_hyperspeed=function(){
if(this.engineCondition<30){return 0;}switch(this.engineType){case 1:return 1*sqrt(0.01*this.engineCondition)*(this.level>4?1.5:1);case 2:return 1.5*pow((this.engineCondition-29)/71,1.5)*(this.level>4?1.5:1);default:return 0;}};
IRS_Data.prototype.get_rescue_pod_type_as_string=function(){
switch(this.rescuePodType){case 0:return"not built";case 1:return"small";case 2:return"large";case 3:return"lightweight";default:return"unknown";}};
//Having Wi-Fi increases this by 1:
IRS_Data.prototype.get_rescue_pod_base_capacity=function(){
var b=g_Diplomacy.get_is_wifi_active()+10*(this.level>4);switch(this.rescuePodType){case 1:return 15+b;case 2:return 32+b;case 3:return 38+b;default:return 0;}};
IRS_Data.prototype.get_rescue_pod_fuel_multi=function(){
if(this.rescuePodType===3){return 0.6+0.4/(1+exp(0.3*(g_Factors.get_swamp_factor()-4)));}return 1;};
IRS_Data.prototype.get_fuel_discount_explanation=function(){
if(this.rescuePodType===3){return"Based on swamp factor";}return"No discount";};
//Different engine types can multiply rescue pod capacity without affecting the
//amount of food or spice needed as supplies:
IRS_Data.prototype.get_engine_capacity_multi=function(){
if(this.engineType===2){return 2*(1-exp(-max(0.2*g_Factors.get_desert_factor(),0)))+1;}return 1;};
IRS_Data.prototype.get_engine_capacity_explanation=function(){
if(this.engineType===2){return"Based on desert factor";}return"No bonus";};
//Amount of iron needed to repair the engine by 10%:
IRS_Data.prototype.get_repair_iron_cost=function(){
switch(this.engineType){case 1:return 10;case 2:return 50;default:return 0;}};
//Amount of mithril needed to repair the engine by 10%:
IRS_Data.prototype.get_repair_mithril_cost=function(){
switch(this.engineType){case 1:return 10;case 2:return 100;default:return 0;}};
IRS_Data.prototype.get_rescue_pod_final_capacity=function(){
return floor(this.get_rescue_pod_base_capacity()*this.get_engine_capacity_multi()*foodColoringMulti*(1+g_TechnologyManager.by_name("Double-Capacity Pods").researched));};
IRS_Data.prototype.get_is_ready_for_launch=function(){
return this.engineType>0&&this.engineCondition>=30&&this.rescuePodType>0&&this.stocked&&!this.returnReport&&this.timeUntilReturn===-1;};
IRS_Data.prototype.get_status_as_string=function(){
if(this.returnReport){return"rescue pod has returned";}if(this.timeUntilReturn>-1){return"waiting for rescue pod to return";}if(this.engineType===0){return"ready to assemble engine";}if(this.engineCondition<30){return"engine is nonfunctional";}if(this.rescuePodType===0){return"ready to construct rescue pod";}if(this.stocked){return"ready for launch";}return"ready to stock with resources";};
IRS_Data.prototype.on_day_end=function(){
this.launchedThisTurn=!1;if(this.timeUntilReturn<0){if((this.level>4)&&this.engineCondition<100){this.engineCondition+=1;}}else{var a=g_PersistentData.get_upgrade_times_purchased("PA");this.timeUntilReturn-=1;if(random(0,10)<5-2*a&&this.engineCondition>1){this.engineCondition-=1;this.returnReportDamageSustained+=1;if(this.engineType===2&&random(0,10)<2-a&&this.engineCondition>5){this.engineCondition-=(a?1:5);this.returnReportDamageSustained+=(a?1:5);}}}if(this.timeUntilReturn===0){if(this.resourceCapacityAtLaunch>0){this.resourceType=floor(random(3.9));if(this.resourceType<2){this.resourceCapacityAtLaunch*=5;}var r=this.resourceCapacityAtLaunch;switch(this.resourceType){case 0:manaResource+=r;break;case 1:stoneResource+=r;break;case 2:gadoliniumResource+=r;break;default:darkEnergyResource+=r;totalDarkEnergyGained+=r;}}this.timeUntilReturn=-1;this.stocked=!1;this.returnReport=!0;this.returnReportPeopleSaved=this.capacityAtLaunch;evacuees+=this.returnReportPeopleSaved;}};
//Returns the number of days a round trip will take or 0 if infinite time:
//Travel takes 10 days if hyperspeed is 1.000.
IRS_Data.prototype.get_estimated_round_trip_time=function(){
var h=this.get_engine_hyperspeed();if(h>0){return round(10/h);}return 0;};
//Returns the amount of supplies needed to stock the pod:
IRS_Data.prototype.get_supplies_dark_energy_cost=function(){
var m=this.get_rescue_pod_fuel_multi()*darkEnergyFuelMultiFromFancyGlove*darkEnergyProductionMultiFromFrosthour*foodColoringMulti;switch(this.engineType){case 1:return 100*m;case 2:return 600*m;default:return 0;}};
IRS_Data.prototype.get_supplies_dark_energy_cost_string=function(){
var c=this.get_supplies_dark_energy_cost();if(Number.isInteger(c)){return c;}return c.toFixed( 3 );};
IRS_Data.prototype.get_supplies_food_cost=function(){
return 5*this.get_rescue_pod_base_capacity();};
IRS_Data.prototype.get_supplies_spice_cost=function(){
return 2*this.get_rescue_pod_base_capacity();};
IRS_Data.prototype.get_indicator_light_color=function(){
if(this.engineType===0||this.rescuePodType===0){return color(0,0,0);}if(this.timeUntilReturn>-1){return color(0,255,0);}if(this.engineCondition<30){if(globalCyclicAnimation%30<15){return color(255,0,0);}return color(128,0,0);}if(!this.stocked){if(globalCyclicAnimation%30<15){return color(0,128,255);}return color(0,64,128);}if(globalCyclicAnimation%60<30){return color(0,128,255);}return color(0,64,128);};
} //IRS_Data

{
//For more info, see old file versions:
var draw_lava_freezer_circle=function(x,y,c,s,f){
if(f){noFill();stroke(c);var X=s*4*sin(8*globalCyclicAnimation),Y=s*4*cos(8*globalCyclicAnimation);line(x+X,y+Y,x-X,y-Y);line(x+Y,y-X,x-Y,y+X);}else{noStroke();fill(c);ellipse(x,y,8*s,8*s);}};
var Building=function(tI,t){
this.tileIndex=tI;this.buildingType=t;this.resourceProduction=0;this.upgradeLevel=1;this.destroyed=!1;if(this.buildingType===BT_IRS){allIRSDatas.push(new IRS_Data());this.resourceProduction=allIRSDatas.length-1;}if(this.buildingType===BT_MER_MALL&&g_PersistentData.currentChallenge==="URC"){this.upgradeLevel=3;this.destroyed=!0;}if(this.buildingType===BT_UNDERWATER_RUINS){var T=allTiles[this.tileIndex].tier;this.destroyed=!0;this.upgradeLevel=constrain(floor(random(T>=2?1.8+0.1*T:1,1+2*T)),1,5);}};
Building.prototype.draw=function(){
this.draw_at(allTiles[this.tileIndex].x-cameraX,allTiles[this.tileIndex].y-cameraY);};
Building.prototype.draw_at = function(x,y)
{
    if(x<-16||(x>width+16&&this.buildingType!==BT_IRS)||y<-16||y>height+16||!this.visible_in_current_side()||!allTiles[this.tileIndex].claimed){return;}
    switch(this.buildingType)
    {
case BT_HOUSE:switch(this.upgradeLevel){case 1:noStroke();fill(128,64,0);rect(x-8,y-8,8,8);stroke(192,160,128);line(x-8,y-8,x-2,y-8);line(x-8,y-8,x-8,y-1);stroke(64,32,0);line(x-1,y-8,x-1,y-1);line(x-7,y-1,x-1,y-1);break;case 2:noStroke();fill(128,64,0);rect(x-8,y-8,8,16);stroke(192,160,128);line(x-8,y-8,x-2,y-8);line(x-8,y-8,x-8,y+7);stroke(64,32,0);line(x-1,y-8,x-1,y+7);line(x-7,y+7,x-1,y+7);break;case 3:noStroke();fill(128,64,0);rect(x-8,y-8,16,16);stroke(192,160,128);line(x-8,y-8,x+6,y-8);line(x-8,y-8,x-8,y+7);stroke(64,32,0);line(x+7,y-8,x+7,y+7);line(x-7,y+7,x+7,y+7);break;case 4:noStroke();fill(0,64,128);rect(x-8,y-8,16,16);stroke(128,160,192);line(x-8,y-8,x+6,y-8);line(x-8,y-8,x-8,y+7);stroke(0,32,64);line(x+7,y-8,x+7,y+7);line(x-7,y+7,x+7,y+7);break;default:noStroke();fill(128,64,0);rect(x+8,y-4,5,8);rect(x-12,y-12,8,14);stroke(192,160,128);line(x+8,y-4,x+11,y-4);line(x-12,y-12,x-6,y-12);line(x-12,y-12,x-12,y+1);stroke(64,32,0);line(x+12,y-4,x+12,y+3);line(x+8,y+3,x+12,y+3);line(x-5,y-12,x-5,y+1);line(x-11,y+1,x-5,y+1);noStroke();fill(0,64,128);rect(x-8,y-8,16,16);stroke(128,160,192);line(x-8,y-8,x+6,y-8);line(x-8,y-8,x-8,y+7);stroke(0,32,64);line(x+7,y-8,x+7,y+7);line(x-7,y+7,x+7,y+7);stroke(0,0,0);fill(160,160,160);rect(x-2,y-2,4,4);if(season===4){noStroke();fill(255,255,0,32);for(var i=3;i<16;i+=1){rect(x-3,y-i,6,2*i);rect(x-i,y-3,2*i,6);}}}if(allSpells.by_name("Insta-Grow").durationLeft>0&&currentScreen!=="max-house-cutscene"){noStroke();fill(allSpells.insta_grow_color());ellipse(x-12,y-12,4,4);}break;
case BT_FARM:noStroke();if(this.destroyed){fill(255,192,0);triangle(x-8,y-8,x+4,y-8,x-8,y+8);triangle(x+8,y-8,x+4,y+8,x+8,y+8);if(this.upgradeLevel>2){fill(128,40,40);rect(x-3,y-5,2,6);if(this.upgradeLevel>4){rect(x+5,y-7,2,6);}}}else{fill(128,255,0);rect(x-8,y-8,16,16);if(this.upgradeLevel>2){fill(255,0,0);rect(x-4,y-8,4,12);if(this.upgradeLevel>4){rect(x+4,y-8,4,12);}}}if(this.upgradeLevel>1){fill(255,255,0);rect(x-8,y-8,4,16);if(this.upgradeLevel>3){rect(x,y-8,4,16);}}if(season===4){fill(240,240,240,192);rect(x-8,y-8,16,16);}if(!this.destroyed&&allSpells.by_name("Insta-Grow").durationLeft>0){fill(allSpells.insta_grow_color());rect(x-8,y-8,16,16);}break;
case BT_COLLECTOR:stroke(32);fill(allBuildings.collector_color(this.upgradeLevel));ellipse(x+8,y-8,8,8);if(g_TechnologyManager.camel_technology_by_name("Swarm Interference").researched&&daysUntilSwarmArrival<=10){noFill();stroke(0);ellipse(x+8,y-8,8*abs(sin(globalCyclicAnimation*8)),8*abs(sin(globalCyclicAnimation*8)));}break;
case BT_MINE:noStroke();if(this.upgradeLevel<4){fill(128,96,64);ellipse(x,y,16-2*(this.upgradeLevel===1),16-2*(this.upgradeLevel===1));if(this.upgradeLevel>1){fill(red(FRONTSIDE_VOID_COLOR),green(FRONTSIDE_VOID_COLOR),blue(FRONTSIDE_VOID_COLOR),32);ellipse(x,y,12,12);if(this.upgradeLevel>2){ellipse(x,y,10,10);}}}else{fill(FRONTSIDE_VOID_COLOR);ellipse(x,y,16,16);if(this.upgradeLevel>4){noFill();stroke(255,0,0);ellipse(x,y,12,12);noStroke();}}if(allTiles[this.tileIndex].tileType===TT_LAKE){if(season===4){fill(96,180,255,180);}else{fill(0,128,255,180);}ellipse(x,y,16,16);}if(this.upgradeLevel>1&&allSpells.by_name("Stonemover").durationLeft>0){fill(255,0,255);for(var i=0;i<12;i+=1){ellipse(x+smgfxx[i],y+smgfxy[i],2,2);}}break;
case BT_MER_MALL:noStroke();fill(224,224,64);var d=4*this.upgradeLevel;if(this.destroyed){arc(x,y,d,d,12,90);arc(x,y+2,d,d,90,148);arc(x,y,d,d,177,352);}else{ellipse(x,y,d,d);if(this.upgradeLevel>3){if(season===4){fill(255,255,255);}else{fill(0,192,0);}ellipse(x-1,y+1,d-12,d-12);ellipse(x+1,y-1,d-12,d-12);}}break;
case BT_ENCHANTING_TABLE:noStroke();fill(64,0,64,season===4?128:255);rect(x-16,y-16,8,8);switch(this.upgradeLevel){case 1:fill(255,0,255);break;case 2:fill(255,192,255);break;case 3:fill(0,255,255);break;case 4:fill(0,255,96);break;default:fill(255,255,255);}if(this.upgradeLevel<4){ellipse(x-12,y-12,4,4);}else{quad(x-16,y-12,x-12,y-16,x-8,y-12,x-12,y-8);}break;
case BT_FURNACE:stroke(0);if(this.upgradeLevel>4){fill(0);}else{fill(255,224,0);}rect(x-16,y,4,4);if(this.upgradeLevel>1){rect(x-16,y-6,4,4);}if(this.upgradeLevel>2){rect(x-10,y,4,4);}if(this.upgradeLevel>3){rect(x-10,y-6,4,4);}break;
case BT_TERRAFORMER:case BT_BACKSIDE_TERRAFORMER:var c=allBuildings.terraformer_color(this.upgradeLevel);if(g_ArtifactManager.by_abbreviation("R").active&&allSpells.by_name("Insta-Grow").durationLeft>0){c=blendColor(c,allSpells.insta_grow_color(),BLEND);}noStroke();fill(c);triangle(x+16,y+5,x+16,y+16,x+5,y+16);stroke(c);line(x,y,x+12,y+12);line(x+2,y-2,x+14,y+10);line(x-2,y+2,x+10,y+14);break;
case BT_REEF:tint(255,255,255,season===4?96:255);image(g_ReefData.images[this.upgradeLevel-1],x,y);tint(255,255,255,255);break;
case BT_SHELTER:noStroke();if(this.upgradeLevel>=3){stroke(255*(this.upgradeLevel>4),255*(this.upgradeLevel===4),255*(this.upgradeLevel<5));}fill(160,160,160);rect(x-16,y+4,24,12,3);if(this.upgradeLevel>=2){fill(192,192,192);rect(x-12,y+6,12,8,4);}if(season===4){noStroke();fill(224,224,224);rect(x-14,y+6,20,8,3);}break;
    case BT_IRS:
        if((currentScreen==="main"||currentScreen==="main-info")&&(allIRSDatas[this.resourceProduction].launchedThisTurn||allIRSDatas[this.resourceProduction].timeUntilReturn===1)){for(var i=y-6;i<y+6;i+=1){stroke(random(0,255),random(0,255),random(0,255));line(0,i,x-32,i);}}noStroke();var col1,col2,chCol;
        switch(this.upgradeLevel){case 1:col1=color(255,0,0);col2=color(192,0,0);chCol=color(230+25*gcaS,0,80+80*gcaC);break;case 2:col1=color(255,255,0);col2=color(192,192,0);chCol=color(230+25*gcaS,200+55*gcaS,50+50*gcaC);break;case 3:col1=color(0,255,96);col2=color(0,192,72);chCol=color(25+25*gcaS,230+25*gcaS,90+90*gcaC);break;case 4:col1=color(224,0,255);col2=color(160,0,128);chCol=color(150+70*gcaS,60+60*gcaC,170+60*gcaS);break;default:col1=color(208,208,208);col2=color(224,224,224);chCol=color(223+32*gcaS,223+32*gcaC,223-32*gcaS);}if(currentScreen==="main"||currentScreen==="main-info"||currentScreen==="IRS"){fill(col1);rect(x-24,y-16,40,8);ellipse(x-24,y-12,8,8);arc(x+6,y+8,24,16,90,180);fill(chCol);quad(x-8,y,x-8,y+8,x-24,y+4,x-24,y-4);fill(col2);rect(x-8,y-16,16,24);arc(x-32,y,24,24,-90,90);rect(x-36,y-1,4,2);}else{fill(col1);rect(x-16,y-16,32,8);arc(x+6,y+8,24,16,90,180);fill(chCol);quad(x-8,y,x-8,y+8,x-16,y+6,x-16,y-2);fill(col2);rect(x-8,y-16,16,24);}stroke(64,64,64);fill(allIRSDatas[this.resourceProduction].get_indicator_light_color());ellipse(x,y,6,6);break;
case BT_MITHRIL_MINE:noStroke();if(this.upgradeLevel<4){fill(128,96,64);ellipse(x,y,16-2*(this.upgradeLevel===1),16-2*(this.upgradeLevel===1));if(this.upgradeLevel>1){fill(red(BACKSIDE_VOID_COLOR),green(BACKSIDE_VOID_COLOR),blue(BACKSIDE_VOID_COLOR),32);ellipse(x,y,12,12);if(this.upgradeLevel>2){ellipse(x,y,10,10);}}}else{fill(BACKSIDE_VOID_COLOR);ellipse(x,y,16,16);if(this.upgradeLevel>4){noFill();stroke(255,0,0);ellipse(x,y,12,12);noStroke();}}if(allTiles[this.tileIndex].backsideTileType===TT_CYBERMIND){noFill();stroke(255,0,0);arc(x+0.5,y+0.5,3,3,0,120);stroke(0,255,0);arc(x+0.5,y+0.5,9,9,120,240);stroke(0,0,255);arc(x+0.5,y+0.5,6,6,240,360);}break;
case BT_LAVA_FREEZER:{var l=(allTiles[this.tileIndex].backsideTileType===TT_LAVA),col=allBuildings.collector_color(this.upgradeLevel);noStroke();fill(128,96,80);if(l){rect(x-8,y-8,16,16);draw_lava_freezer_circle(x-4,y-4,col,1,this.destroyed);draw_lava_freezer_circle(x+4,y+4,col,1,this.destroyed);draw_lava_freezer_circle(x+4,y-4,col,1,this.destroyed);draw_lava_freezer_circle(x-4,y+4,col,1,this.destroyed);}else{rect(x-16,y-16,24,8);rect(x-16,y-16,8,16);draw_lava_freezer_circle(x-12,y-12,col,1,this.destroyed);draw_lava_freezer_circle(x+4,y-12,col,1,this.destroyed);draw_lava_freezer_circle(x-4,y-12,col,1,this.destroyed);draw_lava_freezer_circle(x-12,y-4,col,1,this.destroyed);}if(this.destroyed||!l){break;}if(allSpells.by_name("Mineral Enrichment").durationLeft>0){fill(0,128,255);var dg=globalCyclicAnimation*3;for(var th=0;th<360;th+=40){var cx=x+12*cos(th+dg),cy=y+12*sin(th+dg);triangle(cx-2,cy-sqrt(3),cx+2,cy-sqrt(3),cx,cy+sqrt(3));}}else if(g_ToggleButtonManager.lavaFreezerToggle&&allSpells.by_name("Stonemover" ).durationLeft>0){fill(0,128,255);for(var i=0;i<12;i+=1){ellipse(x+smgfxx[i],y+smgfxy[i],2,2);}}}break;
case BT_UNDERWATER_RUINS:noStroke();if(season===4){fill(115,176,233);}else{fill(134,172,210);}switch(this.upgradeLevel){case 1:quad(x-4,y-5,x+3,y-5,x+5,y+4,x-3,y+6);break;case 2:ellipse(x-4,y-4,7,9);ellipse(x+6,y+2,10,8);rect(x-4,y-4,4,4);break;case 3:rect(x-6,y-6,12,8,2);triangle(x-9,y+4,x+6,y+2,x+1,y+6);triangle(x-3,y-6,x+2,y-15,x+3,y-8);break;case 4:arc(x,y,8,8,-74,234);quad(x-16,y-12,x+2,y-15,x+1,y-10,x-14,y-9);quad(x-4,y+4,x+4,y+7,x+3,y+14,x-6,y+15);break;case 5:quad(x-16,y-16,x-8,y-16,x-6,y-4,x-14,y-8);quad(x-2,y+1,x+8,y,x+9,y+7,x,y+9);stroke(134,172,210);line(x-6,y-4,x,y-1);line(x-14,y+15,x-2,y+9);break;}break;}
};
Building.prototype.type_as_string=function(){
var s="";switch(this.buildingType){case BT_HOUSE:s="your house";break;case BT_FARM:s="farm";break;case BT_COLLECTOR:s="collector";break;case BT_MINE:case BT_MITHRIL_MINE:s="mine";break;case BT_MER_MALL:s="mer mall";break;case BT_ENCHANTING_TABLE:s="ench. table";break;case BT_FURNACE:s="furnace";break;case BT_TERRAFORMER:case BT_BACKSIDE_TERRAFORMER:s="terraformer";break;case BT_REEF:s=g_Diplomacy.merfolkStanding>3?"reef":"???";break;case BT_SHELTER:s="shelter";break;case BT_IRS:s="IRS";break;case BT_LAVA_FREEZER:s=this.destroyed?"cooling fan":"lava freezer";break;case BT_UNDERWATER_RUINS:s="ruins";break;default:s="unknown";}if(this.upgradeLevel>1){s+=" lvl. "+this.upgradeLevel;}return s;};
Building.prototype.get_description = function()
{
    var t=allTiles[this.tileIndex].tileType,T=allTiles[this.tileIndex].backsideTileType;
    switch(this.buildingType)
    {case BT_HOUSE:return season===4?"manipulates seasons":(g_TechnologyManager.get_completion_ratio()<1?"do research here":"where you live");
    case BT_FARM:if(this.destroyed){return"crops were all eaten";}return"+"+g_ResourcePane.formatSI(this.resourceProduction)+" food per day";
    case BT_COLLECTOR:if(g_TechnologyManager.camel_technology_by_name("Swarm Interference").researched&&daysUntilSwarmArrival<=10){return"-70% swarm chance";}return"+"+g_ResourcePane.formatSI(this.resourceProduction)+" mana per day";
    case BT_MINE:if(this.upgradeLevel<2){return t===TT_LAKE?"can't do anything":"manually mine stone";}return"+"+g_ResourcePane.formatSI(this.resourceProduction)+" stone per day";
    case BT_MER_MALL:if(this.destroyed){return"has fallen to ruin";}return"unlocks diplomacy";
    case BT_REEF:return g_Diplomacy.merfolkStanding>3?"various bonuses":"";
    case BT_ENCHANTING_TABLE:return t===TT_SLIMED?"too slimy to use":"unlocks enchanting";
    case BT_FURNACE:if(!g_ToggleButtonManager.furnaceToggle){return"turned off";}if(t===TT_SLIMED){return"too slimy to work";}if(!g_ResourcePane.flameOrbVisible){return"no fuel";}return"smelts stone → iron";
    case BT_TERRAFORMER:if(t===TT_SLIMED){return"too slimy to use";}return"can change tile types";case BT_BACKSIDE_TERRAFORMER:return "can change tile types";
    case BT_SHELTER:return "+"+(25*pow(2,this.upgradeLevel)+g_Diplomacy.get_is_wifi_active())+" max evacuees";
    case BT_IRS:return"rescues evacuees";
    case BT_MITHRIL_MINE:if(g_ToggleButtonManager.mithrilMineToggle){return"+"+g_ResourcePane.formatSI(this.resourceProduction)+" mithril per day";}return"turned off";
    case BT_LAVA_FREEZER:if(this.destroyed){return"- pearl consumption";}if(T!==TT_LAVA){return"no lava to freeze";}if(g_ToggleButtonManager.lavaFreezerToggle){return"+"+this.resourceProduction+" "+(allSpells.by_name("Mineral Enrichment").durationLeft>0?"iron":"stone")+"/day";}return "+"+this.resourceProduction+" "+(allSpells.by_name("Mineral Enrichment").durationLeft>0?"gadolinium":"flame orb")+"/day";
    case BT_UNDERWATER_RUINS:return"explore to find stuff";
    default:return"this is a bug";
    }
};
Building.prototype.visible_in_current_side=function(){
switch(this.buildingType){case BT_HOUSE:return!0;case BT_FARM:case BT_COLLECTOR:case BT_MINE:case BT_MER_MALL:case BT_ENCHANTING_TABLE:case BT_FURNACE:case BT_TERRAFORMER:case BT_SHELTER:case BT_IRS:return !currentlyInBackside;case BT_REEF:if(!g_PersistentData.get_is_reef_unlocked()){return!1;}return g_Diplomacy.merfolkStanding>3&&!currentlyInBackside;case BT_UNDERWATER_RUINS:return g_Diplomacy.merfolkStanding>3&&!currentlyInBackside;case BT_MITHRIL_MINE:case BT_LAVA_FREEZER:case BT_BACKSIDE_TERRAFORMER:return currentlyInBackside;default:return!1;}};
allBuildings.terraformer_color=function(l){
switch(l){case 1:return color(0,80,128);case 2:return color(96,0,128);case 3:return color(224,182,0);case 4:return color(240,128,224);default:return color(255,255,255);}};
allBuildings.collector_color=function(l){
switch(l){case 1:return color(255,128,255);case 2:return color(255,255,255);case 3:return color(0,255,0);case 4:return color(0,255,255);default:return color(128,32,255);}};
allBuildings.get_mer_mall_level=function(){
if(allBuildings.length>=2&&allBuildings[1].buildingType===BT_MER_MALL){return allBuildings[1].upgradeLevel;}return 0;};
allBuildings.get_reef_level=function(){
if(allBuildings.length>=3&&allBuildings[2].buildingType===BT_REEF){return allBuildings[2].upgradeLevel;}return 0;};
allBuildings.count_cooling_fans=function(){
var c=0;allBuildings.forEach(function(b){c+=(b.buildingType===BT_LAVA_FREEZER&&b.destroyed);});return c;};
allBuildings.count_level_5=function(){
var c=0;allBuildings.forEach(function(b){c+=b.upgradeLevel===5;});return c;};
allBuildings.count_of_type=function(T,l){
l=l||0;var c=0;allBuildings.forEach(function(b){c+=(b.buildingType===T&&b.upgradeLevel>=l);});return c;};
var can_build_mine_lvl_4=function(){
return selectedTile>-1&&allSpells.by_name("Dark Attunement").durationLeft>0&&allTiles[selectedTile].hasDarkEnergy;};
var can_build_furnace_lvl_4=function(){return allBuildings.count_of_type(BT_IRS,3)>0;};
var can_build_furnace_lvl_5=function(){return selectedTile>-1&&allSpells.by_name("Dark Attunement").durationLeft>0&&allTiles[selectedTile].hasDarkEnergy;};
var can_build_IRS_lvl_4=function(){
var c=g_ArtifactManager.count_discovered();if(c>1){return!0;}if(c<1){return!1;}return g_ArtifactManager.by_abbreviation("CPU").level===0;};
allBuildings.get_tile_has=function(I,t){
for(var i=0;i<allTiles[I].buildings.length;i+=1){if(allBuildings[allTiles[I].buildings[i]].buildingType===t){return!0;}}return!1;};
building_on_tile=function(I,t){
for(var i=0;i<allTiles[I].buildings.length;i+=1){if(allBuildings[allTiles[I].buildings[i]].buildingType===t){return allTiles[I].buildings[i];}}return-1;};
var building_level_on_tile=function(I,t){
for(var i=0;i<allTiles[I].buildings.length;i+=1){if(allBuildings[allTiles[I].buildings[i]].buildingType===t){return allBuildings[allTiles[I].buildings[i]].upgradeLevel;}}return 0;};
allBuildings.build=function(i,t){
allBuildings.push(new Building(i,t));allTiles[i].buildings.push(allBuildings.length-1);recalculate_building_effects();};
var mithril_mine_on_tile=function(tI){
for(var i=0;i<allTiles[tI].buildings.length;i+=1){if(allBuildings[allTiles[tI].buildings[i]].buildingType===BT_MITHRIL_MINE){return allTiles[tI].buildings[i];}}return-1;};
var cooling_fan_on_tile=function(tI){
for(var i=0;i<allTiles[tI].buildings.length;i+=1){if(allBuildings[allTiles[tI].buildings[i]].buildingType===BT_LAVA_FREEZER&&allBuildings[allTiles[tI].buildings[i]].destroyed){return allTiles[tI].buildings[i];}}return-1;};
var farm_production_winter=function(l){
switch(l){case 1:return 0.01;case 2:return 0.03;case 3:return 0.07;case 4:return 0.12;default:return 0.14;}};
var farm_production_nonwinter=function(l){
switch(l){case 1:return 0.1;case 2:return 0.15;case 3:return 0.25;case 4:return 0.40;default:return 0.44;}};
var furnace_stone_consumption=function(l){return l<3?2:1.8;};
var furnace_flame_orb_consumption_summer=function(l){
switch(l){case 1:return 1;case 2:return 1.1;case 3:return 1.3;case 4:return 1.6;default:return 0;}};
var furnace_flame_orb_consumption_nonsummer=function(l){
switch(l){case 1:return 1;case 2:return 1.2;case 3:return 1.5;case 4:return 1.9;default:return 0;}};
var furnace_flame_orb_consumption=function(l){
return(season===1)?furnace_flame_orb_consumption_summer(l):furnace_flame_orb_consumption_nonsummer(l);};
var furnace_iron_production=function(l){return 0.3+min(0.7*l,3.2)+0.2*(l>=3)+0.4*(g_PersistentData.currentChallenge==="UCC");};
var mithril_mine_iron_consumption=function(l){
switch(l){case 1:return 0.8;case 2:return 1;case 5:return 1.2;default:return 1.4;}};
var manual_mining_min_stone=function(l){
return 1+g_PersistentData.get_challenge_times_completed("UR")+(l>=3);};
var manual_mining_max_stone=function(l){
return 5+g_PersistentData.get_challenge_times_completed("UR")+10*(l===5)+(l>=3);};
var mithril_mine_TT_multi=function(t){
if(t===TT_MITHRIL){return 1;}if(t===TT_WASTELAND){return 0.5;}return 0.1;};
var mithril_mine_deTT_multi=function(t){
if(t===TT_WASTELAND){return 1.2;}return 1;};
var lava_freezer_pearl_consumption=function(l){return max(2,3.5-0.5*l);};
var lava_freezer_flame_orb_production=function(l){
switch(l){case 1:return 10;case 2:return 15;case 3:return 21;case 4:return 25;default:return 29;}};
var lava_freezer_stone_production=function(l){
return 2*lava_freezer_flame_orb_production(l);};
//Has no cost to the player:
var upgrade_all_terraformers_to_level=function(l){
for(var i=0;i<allBuildings.length;i+=1){if(allBuildings[i].buildingType===BT_TERRAFORMER||allBuildings[i].buildingType===BT_BACKSIDE_TERRAFORMER){allBuildings[i].upgradeLevel=max(allBuildings[i].upgradeLevel,l);}}};
var can_afford_collector_upgrade=function(l)
{
    switch(l)
    {
    case 1:return pearlResource>=5&&stoneResource>=5;
    case 2:return gadoliniumResource>=1.25&&stoneResource>=6.5;
    case 3:return stoneResource>=500&&mithrilResource>=20;
    case 4:return darkEnergyResource>=30;
    default:return!1;
    }
};
var pay_collector_upgrade_cost=function(l)
{
    switch(l)
    {
    case 1:pearlResource-=5;stoneResource-=5;break;
    case 2:gadoliniumResource-=1.25;stoneResource-=6.5;break;
    case 3:stoneResource-=500;mithrilResource-=20;break;
    case 4:darkEnergyResource-=30;break;
    }
};
var food_cost_to_manual_mine=function(){
return(g_PersistentData.currentChallenge==="5FC")?max(3,g_PersistentData.get_challenge_times_completed("5F")+1):3;};
var farm_bio_orb_cost_multi=function(){
if(g_TechnologyManager.by_name("Spontaneous Growth").researched){var f=g_Factors.get_plains_factor();return f<=0?1:pow(0.7,0.35*f+1)+0.3;}return 1;};
var setup_start_funcs=function(){
var UCCStartFunc=function(x){var fs=g_TechnologyManager.by_name("Furnace Synergy");fs.description="Does nothing in a UCC";fs.conditionString="free";fs.unlockCondition=function(){return allBuildings.count_of_type(BT_FURNACE)>0;};fs.purchaseCondition=true_func;fs.callback=null_func;g_Diplomacy.cameltechCostMulti=1+0.5*x;};
var StartFunc5FC=function(x){var t=g_TechnologyManager.by_name("Genetic Engineering"),s=g_TechnologyManager.by_name("Spontaneous Growth");t.description="Does nothing in a 5FC";t.conditionString="free";t.unlockCondition=function(){return g_ResourcePane.goldenAppleVisible&&allBuildings.count_of_type(BT_FARM,3);};t.purchaseCondition=true_func;t.callback=null_func;s.conditionString="costs 5 spice, 10 stone";s.purchaseCondition=function(){return spiceResource>=5&&stoneResource>=10;};s.callback=function(){spiceResource-=5;stoneResource-=10;};};
for(var i=0;i<g_PersistentData.challengesList.length;i+=1){switch(g_PersistentData.challengesList[i].abbreviation){case"UC":g_PersistentData.challengesList[i].startRunFunc=UCCStartFunc;break;case"5F":g_PersistentData.challengesList[i].startRunFunc=StartFunc5FC;break;}}};
setup_start_funcs();
} //Building

{
//See past versions of this file for notes on everything here.
var draw_camel=function(x,y,a){stroke(224,224,64);fill(140,96,0);ellipse(x+8*sin(a),y+10,8,4);ellipse(x+8*sin(a)+(a>=90&&a<270?-6:6),y+10,4,4);};
var Creature=function(s,t,l){
this.tileAt=s;this.creatureType=t;this.animation=0;this.markedForDestruction=!1;this.daysToLive=l;if(this.creatureType===CT_FISH||this.creatureType===CT_SLIME||this.creatureType===CT_SPARK){this.animation=floor(random(360));}};
Creature.prototype.visible_in_current_side=function(){
switch(this.creatureType){case CT_TURTLE:case CT_COSMIC:return!0;case CT_DRAGON:return!currentlyInBackside||currentScreen==="end-of-run-cutscene";case CT_SWARM:case CT_BURNING:case CT_FISH:case CT_CAMEL:case CT_SLIME:case CT_TRAIN_HEAD:case CT_TRAIN_BODY:case CT_TRAIN_TAIL:return!currentlyInBackside;case CT_EDGE_FINDER:return!allTiles[this.tileAt].claimed;case CT_SPARK:case CT_FIRE_GIANT:return currentlyInBackside;case CT_DEC_EYE:return allSpells.by_name("Dark Attunement").durationLeft>0;default:return!1;}};
Creature.prototype.draw=function(){
var t=allTiles[this.tileAt];if(this.creatureType!==CT_COSMIC&&!t.revealed){return;}this.draw_at(t.x-cameraX,t.y-cameraY);};
Creature.prototype.draw_at=function(x,y){
var r=(this.creatureType===CT_COSMIC?80:16);if(!this.visible_in_current_side()||x<-r||x>width+r||y<-r||y>height+r){return;}switch(this.creatureType){case CT_SWARM:stroke(0);fill(0);for(var i=0;i<20;i+=1){ellipse(x+random(-14,14),y+random(-14,14),2,2);}break;case CT_DRAGON:stroke(192,0,0);fill(255,0,0);ellipse(x,y,12,6);ellipse(x-7,y,4,4);triangle(x-2,y-1,x-3,y-6,x+1,y-12);triangle(x-2,y,x-3,y+5,x+1,y+11);triangle(x+6,y-1,x+10,y,x+6,y);break;case CT_BURNING:stroke(255,128,0);fill(255,128,0);var mpd=movesPerDay+(g_ArtifactManager.by_abbreviation("GFC").active&&season===1),i=0;for(;i<20*movesLeft/mpd;i+=1){ellipse(x+random(-14,14),y+random(-14,14),2,2);}break;case CT_FISH:noStroke();fill(255,0,0);ellipse(x+8*cos(this.animation),y+8*sin(2*this.animation),4,4);fill(255,64,0);ellipse(x+8*cos(3*this.animation+135),y+8*sin(2*this.animation+90),4,4);this.animation+=1;this.animation%=360;break;case CT_CAMEL:draw_camel(x,y,is_in_cutscene()?0:this.animation);this.animation+=1;this.animation%=360;break;case CT_SLIME:noStroke();var cenX=x+8*cos(this.animation),cenY=y+8*sin(this.animation);fill(32,255,32);quad(cenX-5,cenY,cenX,cenY-5,cenX+5,cenY,cenX,cenY+5);stroke(144,255,144);line(cenX-5,cenY,cenX,cenY-5);stroke(24,128,72);line(cenX,cenY+5,cenX+5,cenY);break;case CT_DEC_EYE:{var dirToC=atan2(mouseY-y,mouseX-x),distToC=min(8,0.1*dist(x,y,mouseX,mouseY));noStroke();fill(0,0,0,64*gcaS+128);ellipse(x,y,30,30);stroke(0);fill(255);ellipse(x+distToC*cos(dirToC),y+distToC*sin(dirToC),4,4);}break;case CT_SPARK:{r=(season===4?1.5:8);var t=this.animation*(season===4?12:1);noStroke();fill(255,255,0);ellipse(x+r*cos(3*t)*cos(t),y+r*cos(3*t)*sin(t),4,4);this.animation+=3;this.animation%=360;}break;
case CT_TRAIN_HEAD:noStroke();fill(255,0,0);rect(x+9,y,5,16);break;case CT_TRAIN_BODY:noStroke();fill(255,0,0);rect(x+9,y-16,5,4);rect(x+9,y-10,5,20);rect(x+9,y+12,5,4);break;case CT_TRAIN_TAIL:noStroke();fill(255,0,0);rect(x+9,y-16,5,16);break;case CT_TURTLE:noStroke();if(currentlyInBackside){fill(224);}else{fill(64,128,64);}ellipse(x,y,20,10);bezier(x+7,y-3,x+17,y-3,x+17,y+3,x+7,y+3);bezier(x+5,y-4,x+5,y-10,x+9,y-12,x+7,y-3);bezier(x+5,y+4,x+5,y+10,x+9,y+12,x+7,y+3);bezier(x-6,y-3,x-6,y-8,x-10,y-7,x-9,y-3);bezier(x-6,y+3,x-6,y+8,x-10,y+7,x-9,y+3);break;case CT_FIRE_GIANT:stroke(128);line(x+2,y-5,x+12,y-5);stroke(80);line(x+3,y-4,x+7,y-4);stroke(205+45*sin(globalCyclicAnimation*3),128,96);fill(192+48*gcaS,0,0);ellipse(x+10,y,6,10);ellipse(x+9,y,4,4);break;case CT_COSMIC:stroke(255);var t=0,l=40+20*gcaC,m=80-l;for(;t<360;t+=36){line(x+10*cos(globalCyclicAnimation+t),y-10*sin(globalCyclicAnimation+t),x+l*cos(globalCyclicAnimation+t),y-l*sin(globalCyclicAnimation+t));line(x+10*cos(globalCyclicAnimation+t),y-10*sin(globalCyclicAnimation+t),x-m*cos(2*globalCyclicAnimation+t),y+m*sin(2*globalCyclicAnimation+t));}noStroke();fill(255,125,0);ellipse(x,y,16,16);break;case CT_EDGE_FINDER:{var dirToC=atan2(mouseY-y,mouseX-x),distToC=min(6,0.1*dist(x,y,mouseX,mouseY)),col=currentlyInBackside?BACKSIDE_VOID_COLOR:FRONTSIDE_VOID_COLOR;noStroke();fill(col,192);bezier(x-14,y,x-6,y-9,x+6,y-9,x+14,y);bezier(x-14,y,x-6,y+9,x+6,y+9,x+14,y);stroke(col);fill(255,125,0);ellipse(x+distToC*cos(dirToC),y+distToC*sin(dirToC)/4,8,8);}break;}};
var tile_random_adjacent=function(o){var d=floor(random(0,4))*90;return tile_at_position(allTiles[o].x+32*cos(d),allTiles[o].y+32*sin(d));};
Creature.prototype.on_day_end=function(){
var nT=-1;if(!g_TechnologyManager.by_name("Dark Chronomancy").researched||allSpells.by_name("Dark Attunement").durationLeft<=0||this.creatureType!==CT_DRAGON){this.daysToLive-=1;}switch(this.creatureType){case CT_SWARM:if(allTiles[this.tileAt].tileType===TT_MAP_EDGE){this.markedForDestruction=!0;break;}if(random(0,10)<8||allTiles[this.tileAt].tileType===TT_LAKE){nT=tile_random_adjacent(this.tileAt);if(nT>-1){this.tileAt=nT;}}var index=building_on_tile(this.tileAt,BT_FARM);if(index>-1){allBuildings[index].destroyed=!0;}if(this.tileAt===selectedTile&&!currentlyInBackside){selectedTile=-1;g_ConstructionManager.on_tile_selected();currentScreen="main";g_Diplomacy.currentlyMeetingWith="noone";}break;
case CT_DRAGON:var duc=g_TechnologyManager.by_name("Dragon-Upgraded Collectors").researched,i=0,L=9;g_Dragon.lastCollectorUpgraded=-1;if(duc){var b=building_on_tile(this.tileAt,BT_COLLECTOR);if(b>-1){L=allBuildings[b].upgradeLevel;if(L<5&&can_afford_collector_upgrade(L)){pay_collector_upgrade_cost(L);allBuildings[b].upgradeLevel+=1;g_Dragon.lastCollectorUpgraded=b;}}}var cet=find_closest_creature(28,CT_SWARM);if(cet===-1){cet=find_closest_creature(28,CT_SLIME);}if(cet===this.tileAt){break;}if(cet>-1){this.tileAt=cet;break;}if(duc){for(;i<allBuildings.length;i+=1){if(allBuildings[i].buildingType===BT_COLLECTOR&&allBuildings[i].upgradeLevel<5){nT=allBuildings[i].tileIndex;break;}}}if(nT<0){nT=tile_random_adjacent(this.tileAt);}if(nT>-1){this.tileAt=nT;}break;
case CT_BURNING:this.markedForDestruction=!0;break;case CT_FISH:if(season===4){this.markedForDestruction=!0;break;}if(g_ReefData.health>=180&&allBuildings.get_tile_has(this.tileAt,BT_REEF)){break;}if(random(0,10)<5){nT=tile_random_adjacent(this.tileAt);if(nT>-1&&allTiles[nT].tileType===TT_LAKE){this.tileAt=nT;}}break;case CT_CAMEL:if(random(0,10)<2){nT=tile_random_adjacent(this.tileAt);if(nT>-1&&allTiles[nT].tileType===TT_DESERT){this.tileAt=nT;}}break;case CT_SLIME:this.animation=floor(random(0,360));if(allTiles[this.tileAt].tileType!==TT_SLIMED||season!==4){nT=tile_random_adjacent(this.tileAt);if(nT>-1){this.tileAt=nT;} }this.daysToLive-=2*(allTiles[this.tileAt].tileType===TT_LAKE);if(allTiles[this.tileAt].tileType===TT_MAP_EDGE){this.markedForDestruction=!0;}break;case CT_SPARK:nT=tile_random_adjacent(this.tileAt);if(nT>-1){this.tileAt=nT;}break;case CT_TURTLE:if(season===4){this.markedForDestruction=!0;break;}nT=tile_random_adjacent(this.tileAt);if(nT>-1&&allTiles[nT].tileType===TT_LAKE&&allTiles[nT].backsideTileType===TT_WASTELAND){this.tileAt=nT;}break;case CT_TILE_GEN_FORCER:if(allTiles[this.tileAt].tileType!==TT_MAP_EDGE){nT=tile_at_position(allTiles[this.tileAt].x-32,allTiles[this.tileAt].y);if(nT>-1){this.tileAt=nT;}}if(allTiles[this.tileAt].tileType===TT_MAP_EDGE){this.markedForDestruction=!0;}break;
case CT_EDGE_FINDER:if(allTiles[this.tileAt].tileType===TT_MAP_EDGE){this.daysToLive+=!allTiles[this.tileAt].claimed;}else{this.daysToLive+=1;nT=tile_at_position(allTiles[this.tileAt].x-32,allTiles[this.tileAt].y);if(nT>-1&&allTiles[nT].revealed){this.tileAt=nT;}}break;
}if(this.daysToLive<1){this.markedForDestruction=!0;}};
Creature.prototype.on_enter_frosthour=function(){
switch(this.creatureType){case CT_SWARM:this.daysToLive=floor(this.daysToLive/2)-10;if(this.daysToLive<1){this.markedForDestruction=!0;}break;case CT_FISH:this.markedForDestruction=!0;break;case CT_TURTLE:this.markedForDestruction=!0;break;}};
Creature.prototype.type_as_string=function(){
var s="";switch(this.creatureType){case CT_SWARM:s="swarm";break;case CT_DRAGON:s="dragon";break;case CT_BURNING:s="burning";break;case CT_FISH:s="fish";break;case CT_CAMEL:s="camel";break;case CT_SLIME:s="slime";break;case CT_DEC_EYE:s="the eye";break;case CT_SPARK:s="spark";break;case CT_TRAIN_HEAD:case CT_TRAIN_BODY:case CT_TRAIN_TAIL:s="train";break;case CT_TURTLE:s=currentlyInBackside?"air turtle":"sea turtle";break;case CT_FIRE_GIANT:s="fire giant";break;case CT_COSMIC:case CT_EDGE_FINDER:while(s.length<6){s+=floor(26*random()+10).toString(36);}break;default:s="unknown";}return s;};
Creature.prototype.get_description=function(){
var s="";switch(this.creatureType){case CT_SWARM:s="enemy";break;case CT_DRAGON:s="your friend";break;case CT_BURNING:s="dead swarm";break;case CT_FISH:s="seafood";break;case CT_CAMEL:case CT_FIRE_GIANT:s="unlocks diplomacy";break;case CT_SLIME:s="it's harmless";break;case CT_DEC_EYE:s="it hears your thoughts";break;case CT_SPARK:s="helps you cast spells";break;case CT_TRAIN_HEAD:case CT_TRAIN_BODY:case CT_TRAIN_TAIL:s="delivers freight";break;case CT_TURTLE:s="can get you bonuses";break;case CT_COSMIC:case CT_EDGE_FINDER:s="cosmic being";var i=0,x;for(;i<3;i+=1){x=floor(random(s.length));s=s.substr(0,x)+"?"+s.substr(x+1);}break;default:s="unknown";}return s;};
g_Dragon=new Creature(-1,CT_DRAGON,0);
g_Dragon.attackRange=50;
g_Dragon.lastCollectorUpgraded=-1;
g_Dragon.on_new_run_start=function(){
g_Dragon.attackRange=g_PersistentData.get_upgrade_effect("FR").base;g_Dragon.tileAt=-1;g_Dragon.markedForDestruction=!1;g_Dragon.daysToLive=0;g_Dragon.lastCollectorUpgraded=-1;};
g_Dragon.fight_enemies=function(){
var iTile,dragonTile=allTiles[g_Dragon.tileAt],i=0,b=0,f=0;for(;i<allCreatures.length;i+=1){iTile=allTiles[allCreatures[i].tileAt];if(allCreatures[i].creatureType===CT_SWARM){if(dist(iTile.x,iTile.y,dragonTile.x,dragonTile.y)<g_Dragon.attackRange){allCreatures[i].creatureType=CT_BURNING;}}if(allCreatures[i].creatureType===CT_SLIME){if(dist(iTile.x,iTile.y,dragonTile.x,dragonTile.y)<g_Dragon.attackRange){allCreatures[i].markedForDestruction=!0;b=random(0.5,2.35);f=b*manaFromSlimeMulti;manaResource+=f;gadoliniumResource+=b*0.1*gadoliniumFromSlimeMulti;g_ResourcePane.gadoliniumVisible=!0;}}}};
g_Dragon.draw_attack_range_visualization=function(){
if(!g_Dragon.visible_in_current_side()||!allTiles[g_Dragon.tileAt].revealed){return;}var iTile,dTile=allTiles[g_Dragon.tileAt],i=0;if(mouseX>=dTile.x-cameraX-16&&mouseX<dTile.x-cameraX+15&&mouseY>=dTile.y-cameraY-16&&mouseY<dTile.y-cameraY+15){noStroke();fill(255,128,0,128);for(;i<allTiles.length;i+=1){iTile=allTiles[i];if(!allTiles[i].revealed){continue;}if(dist(iTile.x,iTile.y,dTile.x,dTile.y)<g_Dragon.attackRange){if(iTile.tileType===TT_MAP_EDGE){rect(0,iTile.y-cameraY-16,iTile.x-cameraX+16,32);}else{rect(iTile.x-cameraX-16,iTile.y-cameraY-16,32,32);}}}}};
g_TrainHead=new Creature(-1,CT_TRAIN_HEAD,0);
g_TrainBody=new Creature(-1,CT_TRAIN_BODY,0);
g_TrainTail=new Creature(-1,CT_TRAIN_TAIL,0);
g_TrainBody.freight=[0,0,0,0,0,0,0,0,0,0,0,0];
g_TrainBody.pastDeliveries=0;
allCreatures.remove_marked_for_destruction=function(){
var i=0;while(i<allCreatures.length){if(allCreatures[i].markedForDestruction){allCreatures.splice(i,1);i=0;}else{i+=1;}}if(g_Dragon.markedForDestruction){g_Dragon.tileAt=-1;g_Dragon.timeToLive=0;g_Dragon.lastCollectorUpgraded=-1;}};
allCreatures.on_enter_frosthour=function(){
allCreatures.forEach(function(c){c.on_enter_frosthour();});allCreatures.remove_marked_for_destruction();};
allCreatures.choose_train_action=function(){
var TT=g_ArtifactManager.by_abbreviation("TT"),cM=TT.active?TT.level+1:1,m=[65536*cM,8192*cM,1024*cM];if(TT.active){if(g_TrainBody.freight[0]===m[0]&&g_TrainBody.freight[1]===m[0]&&g_TrainBody.freight[2]===m[0]&&g_TrainBody.freight[3]===m[0]&&g_TrainBody.freight[4]===m[1]&&g_TrainBody.freight[5]===m[1]&&g_TrainBody.freight[6]===m[1]&&g_TrainBody.freight[7]===m[1]&&g_TrainBody.freight[8]===m[2]&&g_TrainBody.freight[9]===m[2]&&g_TrainBody.freight[10]===m[2]&&g_TrainBody.freight[11]===m[2]){return!1;}if(g_TrainBody.freight.every(function(f){return f>0;})){return random(10)<2;}if(g_TrainBody.freight.every(function(f){return f===0;})){return!0;}}return random(10)<4;};
allCreatures.update_train=function()
{
    var TT=g_ArtifactManager.by_abbreviation("TT"),cM=TT.active?TT.level+1:1;
    if(allBuildings.length<1||allBuildings[0].upgradeLevel<3)
    {g_TrainHead.tileAt=-1;g_TrainHead.timeToLive=0;g_TrainBody.tileAt=-1;g_TrainBody.timeToLive=0;g_TrainTail.tileAt=-1;g_TrainTail.timeToLive=0;g_TrainBody.freight=[0,0,0,0,0,0,0,0,0,0,0,0];g_TrainBody.pastDeliveries=0;return;}
    if(allCreatures.choose_train_action())
    {
        g_TrainHead.tileAt=-1;g_TrainHead.timeToLive=0;
        g_TrainBody.tileAt=-1;g_TrainBody.timeToLive=0;
        g_TrainTail.tileAt=-1;g_TrainTail.timeToLive=0;
        var rR=floor(random(28)),rTTA=-1,rATA=1;
        switch(rR)
        {
        case 0:case 1:case 2:case 3://Food
            rTTA=0;rATA=floor(random(0.05,0.1)*foodResource)+1;break;
        case 4:case 5:case 6:case 7://Mana
            rTTA=1;rATA=floor(random(0.05,0.1)*manaResource)+1;break;
        case 8:case 9:case 10:case 11://Pearl
            if(g_PersistentData.currentChallenge==="URC"){rTTA=-1;break;}
            rTTA=2;rATA=floor(random(0.05,0.1)*pearlResource)+1;break;
        case 12:case 13:case 14:case 15://Stone
            rTTA=3;rATA=floor(random(0.05,0.1)*stoneResource)+1;break;
        case 16:case 17://Spice
            if(!g_ResourcePane.spiceVisible||spiceResource<10){rTTA=-1;break;}
            rTTA=4;rATA=floor(random(0.05,0.1)*spiceResource*0.75);break;
        case 18:case 19://Gadolinium
            if(!g_ResourcePane.gadoliniumVisible||gadoliniumResource<10){rTTA=-1;break;}
            rTTA=5;rATA=floor(random(0.05,0.1)*gadoliniumResource*0.75);break;
        case 20:case 21://Flame orb
            if(!g_ResourcePane.flameOrbVisible||flameOrbResource<10){rTTA=-1;break;}
            rTTA=6;rATA=floor(random(0.05,0.1)*flameOrbResource*0.75);break;
        case 22:case 23://Iron
            if(g_PersistentData.currentChallenge==="UCC"||!g_ResourcePane.ironVisible||ironResource<10){rTTA=-1;break;}
            rTTA=7;rATA=floor(random(0.05,0.1)*ironResource*0.75);break;
        case 24://Golden Apple
            if(!g_ResourcePane.goldenAppleVisible||goldenAppleResource<10){rTTA=-1;break;}
            rTTA=8;rATA=floor(random(0.05,0.1)*goldenAppleResource*0.75);break;
        case 25://Dark energy
            if(g_PersistentData.currentChallenge==="DEC"||!g_ResourcePane.darkEnergyVisible||darkEnergyResource<10){rTTA=-1;break;}
            rTTA=9;rATA=floor(random(0.05,0.1)*darkEnergyResource*0.5);break;
        case 26://Bio-orb
            if(!g_ResourcePane.bioOrbVisible||bioOrbResource<10){rTTA=-1;break;}
            rTTA=10;rATA=floor(random(0.05,0.1)*bioOrbResource*0.5);break;
        case 27://Mithril
            if(!g_ResourcePane.mithrilVisible||mithrilResource<10){rTTA=-1;break;}
            rTTA=11;rATA=floor(random(0.05,0.1)*mithrilResource*0.5);break;
        }
        if(rTTA>-1){g_TrainBody.freight[rTTA]+=rATA;}
        //Train limited cargo space:
        g_TrainBody.freight[0]=min(g_TrainBody.freight[0],65536*cM);//2^16
        g_TrainBody.freight[1]=min(g_TrainBody.freight[1],65536*cM);
        g_TrainBody.freight[2]=min(g_TrainBody.freight[2],65536*cM);
        g_TrainBody.freight[3]=min(g_TrainBody.freight[3],65536*cM);
        g_TrainBody.freight[4]=min(g_TrainBody.freight[4],8192*cM);//2^13
        g_TrainBody.freight[5]=min(g_TrainBody.freight[5],8192*cM);
        g_TrainBody.freight[6]=min(g_TrainBody.freight[6],8192*cM);
        g_TrainBody.freight[7]=min(g_TrainBody.freight[7],8192*cM);
        g_TrainBody.freight[8]=min(g_TrainBody.freight[8],1024*cM);//2^10
        g_TrainBody.freight[9]=min(g_TrainBody.freight[9],1024*cM);
        g_TrainBody.freight[10]=min(g_TrainBody.freight[10],1024*cM);
        g_TrainBody.freight[11]=min(g_TrainBody.freight[11],1024*cM);
        return;
    }
    //Else, pick a random tile along the Train Line:
    if(TT.active&&selectedTile>-1&&allTiles[selectedTile].hasTrainPowerLine)
    {
        g_TrainHead.tileAt=tile_at_position(allTiles[selectedTile].x,allTiles[selectedTile].y-32);
        g_TrainHead.timeToLive=4;
        g_TrainHead.markedForDestruction=!1;
        g_TrainBody.tileAt=selectedTile;
        g_TrainBody.timeToLive=4;
        g_TrainBody.markedForDestruction=!1;
        g_TrainTail.tileAt=tile_at_position(allTiles[selectedTile].x,allTiles[selectedTile].y+32);
        g_TrainTail.timeToLive=4;
        g_TrainTail.markedForDestruction=!1;
        return;
    }
    var index=-1,trials=0;
    for(;trials<50;trials+=1)
    {
        index=floor(random(allTiles.length-0.01));
        if(allTiles[index].hasTrainPowerLine)
        {
            g_TrainHead.tileAt=tile_at_position(allTiles[index].x,allTiles[index].y-32);
            g_TrainHead.timeToLive=4;
            g_TrainHead.markedForDestruction=!1;
            g_TrainBody.tileAt=index;
            g_TrainBody.timeToLive=4;
            g_TrainBody.markedForDestruction=!1;
            g_TrainTail.tileAt=tile_at_position(allTiles[index].x,allTiles[index].y+32);
            g_TrainTail.timeToLive=4;
            g_TrainTail.markedForDestruction=!1;
            return;
        }
    }
    //Else, we ran out of trials!
    g_TrainHead.tileAt=-1;
    g_TrainHead.timeToLive=0;
    g_TrainBody.tileAt=-1;
    g_TrainBody.timeToLive=0;
    g_TrainTail.tileAt=-1;
    g_TrainTail.timeToLive=0;
};
allCreatures.accept_train_delivery=function(){
foodResource+=g_TrainBody.freight[0];manaResource+=g_TrainBody.freight[1];pearlResource+=g_TrainBody.freight[2];stoneResource+=g_TrainBody.freight[3];spiceResource+=g_TrainBody.freight[4];gadoliniumResource+=g_TrainBody.freight[5];flameOrbResource+=g_TrainBody.freight[6];ironResource+=g_TrainBody.freight[7];goldenAppleResource+=g_TrainBody.freight[8];darkEnergyResource+=g_TrainBody.freight[9];bioOrbResource+=g_TrainBody.freight[10];mithrilResource+=g_TrainBody.freight[11];totalDarkEnergyGained+=g_TrainBody.freight[9];for(var i=0;i<12;i+=1){g_TrainBody.freight[i]=0;}g_FlyingText.set_text("Collected resources!",150,300);g_FlyingText.fontColor=color(255,0,0);g_TrainBody.pastDeliveries+=1;currentScreen="main";recalculate_building_effects();movesLeft-=1;};
allCreatures.spawn_tile_gen_forcers=function(){
for(var i=0;i<allTiles.length;i+=1){if(allTiles[i].x===64){allCreatures.push(new Creature(i,CT_TILE_GEN_FORCER,99));}}};
allCreatures.is_giant_on_tile=function(i){return allCreatures.some(function(c){return c.creatureType===CT_FIRE_GIANT&&c.tileAt===i;});};
allCreatures.fedSeaTurtle=0;
allCreatures.fedAirTurtle=0;
var creatures_of_type=function(t){
if(t===CT_DRAGON){return g_Dragon.tileAt>-1;}var c=0,i=0;for(;i<allCreatures.length;i+=1){c+=allCreatures[i].creatureType===t;}return c;};
allCreatures.get_on_tile=function(d,t){
if(t===CT_DRAGON){return g_Dragon.tileAt===d;}for(var i=0;i<allCreatures.length;i+=1){if(allCreatures[i].creatureType===t&&allCreatures[i].tileAt===d){return!0;}}return!1;};
find_closest_creature=function(t,T){
var c=-1,r=-1,d=-1,i=0;for(;i<allCreatures.length;i+=1){var C=allCreatures[i];if(C.creatureType!==T){continue;}d=dist(allTiles[t].x,allTiles[t].y,allTiles[C.tileAt].x,allTiles[C.tileAt].y);if(c<0){c=d;r=C.tileAt;}else{if(d<c){c=d;r=C.tileAt;}}}return r;};
var cost_to_feed_turtle=function(){
return currentlyInBackside?1000+150*allCreatures.fedAirTurtle:500+100*allCreatures.fedSeaTurtle;};
var spawn_fish=function(){
if(season===4){return;}var x=-1,t=0;for(;t<50;t+=1){x=floor(random(0,allTiles.length));if(allTiles[x].tileType===TT_LAKE){allCreatures.push(new Creature(x,CT_FISH,floor(random(10,25))));break;}}};
var spawn_fish_on_reef=function(){
if(season===4){return;}for(var i=0;i<allBuildings.length;i+=1){if(allBuildings[i].buildingType===BT_REEF){allCreatures.push(new Creature(allBuildings[i].tileIndex,CT_FISH,4));break;}}};
var spawn_camel=function(){
if(season===4){return;}var index=-1,d=floor(random(10,30)),tries=0;for(;tries<50;tries+=1){index=floor(random(0,allTiles.length));if(allTiles[index].tileType===TT_DESERT){allCreatures.push(new Creature(index,CT_CAMEL,d));break;}}if(g_PersistentData.currentChallenge!=="UCC"){return;}for(tries=0;tries<50;tries+=1){if(tries>0){index=floor(random(0,allTiles.length));}if(index!==selectedTile&&allTiles[index].backsideTileType===TT_LAVA&&!allTiles[index].hasTrainPowerLine&&building_level_on_tile(index,BT_LAVA_FREEZER)===0){allCreatures.push(new Creature(index,CT_FIRE_GIANT,d));break;}}};
var spawn_slime=function(){
for(var i=0;i<allTiles.length;i+=1){if(allTiles[i].tileType===TT_SLIMED&&random(0,10)<2){allCreatures.push(new Creature(i,CT_SLIME,floor(random(30,60))));break;}}};
var spawn_swarm=function(){
var base=max(20,(g_PersistentData.currentChallenge==="8YC"?0.05:0.15)*dayCount),f=max(3,0.025*dayCount),swi=g_TechnologyManager.camel_technology_by_name("Swarm Interference").researched;for(var i=0;i<allTiles.length;i+=1){switch(allTiles[i].tileType){case TT_DESERT:if(random(10)<1){if(swi&&allBuildings.get_tile_has(i,BT_COLLECTOR)&&random(10)<7){break;}allCreatures.push(new Creature(i,CT_SWARM,floor(base+random(0,f))));}break;case TT_SWAMP:if(random(10)<8){if(swi&&allBuildings.get_tile_has(i,BT_COLLECTOR)&&random(10)<7){break;}allCreatures.push(new Creature(i,CT_SWARM,floor(base+random(0,f))));}break;}}};
var spawn_spark=function(c){
var i=floor(random(0,allTiles.length));if(c&&!allTiles[i].claimed){return;}
allCreatures.push(new Creature(i,CT_SPARK,floor(random(7,9.5))+10*(allSpells.by_name("Spark Music").durationLeft>0&&g_TechnologyManager.by_name("Electric Music").researched)));};
var spawn_turtle=function(){
if(season===4){return;}var i=-1,t=0;for(;t<50;t+=1){i=floor(random(0,allTiles.length));if(allTiles[i].tileType===TT_LAKE&&allTiles[i].backsideTileType===TT_WASTELAND){allCreatures.push(new Creature(i,CT_TURTLE,floor(random(40,80))));break;}}};
var spawn_cosmic=function(){
if(creatures_of_type(CT_COSMIC)){return;}var l=[],i=0;for(;i<allTiles.length;i+=1){if(allTiles[i].tileType===TT_MAP_EDGE&&!allCreatures.get_on_tile(i,CT_DEC_EYE)){l.push(i);}}if(l.length>0){allCreatures.push(new Creature(l[floor(random(0,l.length))],CT_COSMIC,4));}};
var spawn_eye=function(){
var t=0,i=0,x=0;for(;i<allTiles.length&&t<30;i+=1){x=floor(random(0,allTiles.length));t+=1;if(allTiles[x].tileType===TT_MAP_EDGE||allTiles[x].nextToEdge){continue;}if(!allCreatures.get_on_tile(x,CT_DEC_EYE)&&!allCreatures.get_on_tile(x,CT_COSMIC)){allCreatures.push(new Creature(x,CT_DEC_EYE,50));return;}}};
} //Creature

{
//See past versions of this file for more info.
var Artifact=function(n,a,l,i,r,e,g,t,m){
if(m===undefined){throw"Artifact max level was missing!  (Use -1 to set no max.)";}if(!Number.isInteger(m)||(m<1&&m!==-1)){throw"Invalid Artifact max level: "+m;}
this.name=n;this.currentE=!1;this.abbreviation=a;this.lore=l;this.active=!1;this.imageFunc=i;this.onRecalculate=r;this.effectStringFunc=e;this.genElgFunc=g;this.tileElgFunc=t;this.level=0;this.maxLevel=m;};
Artifact.prototype.update_eligibility=function(){this.currentE=this.level===0&&this.genElgFunc();};
Artifact.prototype.is_eligible_in_general=function(){return this.currentE;};
Artifact.prototype.is_eligible_on_tile=function(T){return this.is_eligible_in_general()&&this.tileElgFunc(T);};
Artifact.prototype.get_4_purple_squares_active_slots=function(){return min(3,floor(1.5*sqrt(this.level)));};
var Artifact_Manager=function(){
this.artifactList=[];this.openTab=0;this.lastArtifactFound="";this.totalAPs=0;this.unspentAPs=0;this.shownArtifactMechanicsNotification=!1;this.activeSlots=3;};
Artifact_Manager.prototype.on_new_run_start=function(){
this.artifactList.forEach(function(art){art.level=0;art.active=!1;});this.openTab=0;this.totalAPs=g_PersistentData.totalAPs;this.unspentAPs=this.totalAPs;this.shownArtifactMechanicsNotification=!1;};
Artifact_Manager.prototype.on_recalculate=function(){
this.artifactList.forEach(function(A){A.update_eligibility();if(A.level>0&&A.active){A.onRecalculate();}});};
Artifact_Manager.prototype.draw_3_tab_buttons=function(){
stroke(0,0,0);if(mouseX>=7&&mouseX<131&&mouseY>=7&&mouseY<39){fill(255,255,128);}else{fill(255,255,0);}rect(7,7,124,32);if(mouseX>=138&&mouseX<262&&mouseY>=7&&mouseY<39){fill(128,255,192);}else{fill(0,255,128);}rect(138,7,124,32);if(mouseX>=269&&mouseX<393&&mouseY>=7&&mouseY<39){fill(255,128,255);}else{fill(255,0,255);}rect(269,7,124,32);line(0,46,width,46);fill(0,0,0);textAlign(CENTER,CENTER);textSize(24);text("Find",69,23);text("Manage",200,23);text("Unlock",331,23);textAlign(LEFT,BASELINE);noFill();switch(this.openTab){case 0:rect(9,9,120,28);fill(255,255,0);break;case 2:rect(271,9,120,28);fill(255,0,255);break;default:if(this.openTab===1){rect(140,9,120,28);}fill(0,255,128);}noStroke();rect(0,47,width,height);};
Artifact_Manager.prototype.on_3_tab_buttons_pressed=function(){
if(mouseX>=7&&mouseX<131&&mouseY>=7&&mouseY<39){this.openTab=0;}if(mouseX>=138&&mouseX<262&&mouseY>=7&&mouseY<39){this.openTab=1;}if(mouseX>=269&&mouseX<393&&mouseY>=7&&mouseY<39){this.openTab=2;}};
Artifact_Manager.prototype.draw_artifacts_manage=function(){
textAlign(CENTER,BASELINE);var xDraw=17,yDraw=85,i=0,a,A,upHovered=!1,downHovered=!1,anyHovered=!1;for(;i<this.artifactList.length;i+=1){A=this.artifactList[i];if(A.level===0){continue;}a=anyHovered&&mouseX>=xDraw-1&&mouseX<xDraw+33;if(a){yDraw+=17;}if(A.active){fill(255,255,255,a);}else{fill(128,32,32);}stroke(0);rect(xDraw-1,yDraw-1,34,34);A.imageFunc(xDraw+16,yDraw+16);if(!anyHovered&&mouseX>=xDraw-1&&mouseX<xDraw+33&&mouseY>=yDraw-1&&mouseY<yDraw+50){anyHovered=!0;downHovered=g_PersistentData.totalAPs>0&&mouseX<xDraw+16&&mouseY>=yDraw+33&&A.level>1;upHovered=g_PersistentData.totalAPs>0&&mouseX>=xDraw+16&&mouseY>=yDraw+33&&(A.maxLevel<0||A.level<A.maxLevel);stroke(0);if(g_PersistentData.totalAPs>0&&A.level>1){if(downHovered){fill(128,224,128);}else{fill(0,192,0);}rect(xDraw-1,yDraw+33,17,17);line(xDraw+4,yDraw+41,xDraw+10,yDraw+41);}if(g_PersistentData.totalAPs>0&&(A.maxLevel<0||A.level<A.maxLevel)){if(this.unspentAPs>=A.level){if(upHovered){fill(128,224,128);}else{fill(0,192,0);}}else{if(upHovered){fill(255,128,128);}else{fill(255,0,0);}}rect(xDraw+16,yDraw+33,17,17);line(xDraw+21,yDraw+41,xDraw+27,yDraw+41);line(xDraw+24,yDraw+38,xDraw+24,yDraw+44);}fill(0,0,0);textSize(12);text((upHovered?"Upgrade the ":"")+(downHovered?"Downgrade the ":"")+A.name,width/2,182);if(downHovered){text("Will refund "+(A.level-1)+" Artifact Points, costs 0 actions.",width/2,198);}else if(upHovered){text("Will use "+A.level+" Artifact Points, costs 0 actions.",width/2,198);}else{text(A.active?A.lore:"Not active.",width/2,198);}text(A.effectStringFunc(),width/2,214);text("Level: "+A.level+(A.level===A.maxLevel?" (max)":""),width/2,230);}if(a){yDraw-=17;}xDraw+=36;if(xDraw>341){yDraw+=36;xDraw=17;}}if(!anyHovered){fill(0,0,0);text("Active Artifacts: "+this.count_active()+"/"+this.activeSlots,width/2,198);}textAlign(LEFT,BASELINE);};
Artifact_Manager.prototype.draw_artifacts_activate=function(){
textAlign(CENTER,BASELINE);var xDraw=17,yDraw=85,hovered=!1,i=0,a;for(;i<this.artifactList.length;i+=1){a=this.artifactList[i];if(a.level===0){continue;}hovered=mouseX>=xDraw-1&&mouseX<xDraw+33&&mouseY>=yDraw-1&&mouseY<yDraw+33;if(a.active){fill(255);}else{fill(128,32,32);}stroke(0);rect(xDraw-1,yDraw-1,34,34);if(hovered){ellipse(xDraw+16.5,yDraw+16.5,33,33);}a.imageFunc(xDraw+16,yDraw+16);if(hovered){fill(0);textSize(12);text(a.name,width/2,182);{text(a.active?a.lore:"Not active.",width/2,198);}text(a.effectStringFunc(),width/2,214);text("Level: "+a.level+(a.level===a.maxLevel?" (max)":""),width/2,230);}xDraw+=36;if(xDraw>341){yDraw+=36;xDraw=17;}}textAlign(LEFT,BASELINE);};
Artifact_Manager.prototype.draw_artifacts_unlock=function(){
textAlign(CENTER,BASELINE);var x=17,y=85,w=!1,i=0,a;for(;i<this.artifactList.length;i+=1){a=this.artifactList[i];w=g_PersistentData.get_was_artifact_found(a.abbreviation);
fill(w?255:128);stroke(0);rect(x-1,y-1,34,34);a.imageFunc(x+16,y+16,!w);if(mouseX>=x-1&&mouseX<x+33&&mouseY>=y-1&&mouseY<y+33){fill(0);textSize(12);text(w?a.name:"???",width/2,182);text(w?a.lore:"???",width/2,198);text(w?a.effectStringFunc():"???",width/2,214);if(a.level>0){text("Level: "+a.level+(a.level===a.maxLevel?" (max)":""),width/2,230);}}x+=36;if(x>341){y+=36;x=17;}}textAlign(LEFT,BASELINE);};
Artifact_Manager.prototype.on_click_to_upgrade=function(){
var xDraw=17,yDraw=85,i=0;for(;i<this.artifactList.length;i+=1){var a=this.artifactList[i];if(a.level===0){continue;}if(mouseX>=xDraw-1&&mouseX<xDraw+16&&mouseY>=yDraw+33&&mouseY<yDraw+50){if(a.level>1){a.level-=1;this.unspentAPs+=a.level;}recalculate_building_effects();if(this.count_active()>this.activeSlots){this.deactivate_to_fit();}break;}if(mouseX>=xDraw+16&&mouseX<xDraw+33&&mouseY>=yDraw+33&&mouseY<yDraw+50){if((a.maxLevel<0||a.level<a.maxLevel)&& this.unspentAPs>=a.level){this.unspentAPs-=a.level;a.level+=1;if(!this.shownArtifactMechanicsNotification&&this.totalAPs<75){this.openTab=3;this.shownArtifactMechanicsNotification=!0;}}recalculate_building_effects();break;}xDraw+=36;if(xDraw>341){yDraw+=36;xDraw=17;}}};
Artifact_Manager.prototype.on_click_to_activate=function(){
var xDraw=17,yDraw=85,i=0;for(;i<this.artifactList.length;i+=1){if(this.artifactList[i].level===0){continue;}if(mouseX>=xDraw-1&&mouseX<xDraw+33&&mouseY>=yDraw-1&&mouseY<yDraw+33){if(this.artifactList[i].active){this.artifactList[i].active=!1;}else if(this.count_active()<this.activeSlots){this.artifactList[i].active=!0;}recalculate_building_effects();if(this.count_active()>this.activeSlots){this.deactivate_to_fit();}return;}xDraw+=36;if(xDraw>341){yDraw+=36;xDraw=17;}}};
Artifact_Manager.prototype.deactivate_to_fit=function(){
var count=0;while(this.count_active()>this.activeSlots){var arr=[];for(var i=0;i<this.artifactList.length;i+=1){if(this.artifactList[i].active&&this.artifactList[i].abbreviation!=="4PS"){arr.push(this.artifactList[i].abbreviation);}}this.by_abbreviation(arr[floor(random(arr.length))]).active=!1;count+=1;recalculate_building_effects();}g_FlyingText.set_text("Deactivated "+count+" Artifact"+(count>1?"s":""),mouseX-48,140);g_FlyingText.fontColor=color(0);};
Artifact_Manager.prototype.count_generally_eligible=function(){
var c=0;this.artifactList.forEach(function(A){c+=A.is_eligible_in_general();});return c;};
Artifact_Manager.prototype.count_eligible_on_selected_tile=function(){
if(selectedTile<0||!allTiles[selectedTile].claimed){return 0;}var c=0;this.artifactList.forEach(function(A){c+=A.is_eligible_on_tile(selectedTile);});return c;};
Artifact_Manager.prototype.count_discovered=function(){
var c=0;this.artifactList.forEach(function(A){c+=A.level>0;});return c;};
Artifact_Manager.prototype.count_undiscovered=function(){
var c=0;this.artifactList.forEach(function(A){c+=A.level===0;});return c;};
Artifact_Manager.prototype.count_active=function(){
var c=0;this.artifactList.forEach(function(A){c+=A.active;});return c;};
Artifact_Manager.prototype.search_for_artifacts=function(){
this.lastArtifactFound="";var i=0,A;for(;i<this.artifactList.length;i+=1){A=this.artifactList[i];if(A.is_eligible_on_tile(selectedTile)){this.lastArtifactFound=A.name;g_PersistentData.on_artifact_found(A.abbreviation);A.level=1;A.active=(this.count_active()<this.activeSlots);break;}}if(this.lastArtifactFound!==""){currentScreen="artifact-found";g_FlyingText.ticksToDisplay=0;}else{g_FlyingText.set_text("Found nothing.",14,300);g_FlyingText.fontColor=color(0);}};
Artifact_Manager.prototype.by_name=function(n){
for(var i=0;i<this.artifactList.length;i+=1){if(this.artifactList[i].name===n){return this.artifactList[i];}}return undefined;};
Artifact_Manager.prototype.by_abbreviation=function(a){
for(var i=0;i<this.artifactList.length;i+=1){if(this.artifactList[i].abbreviation===a){return this.artifactList[i];}}return undefined;};
Artifact_Manager.prototype.get_is_CPU_eligible=function(){
if(g_Diplomacy.cybermindTradePurchased[0]+g_Diplomacy.cybermindTradePurchased[1]+g_Diplomacy.cybermindTradePurchased[2]<2){return!1;}for(var i=0;i<allTiles.length;i+=1){if(allTiles[i].claimed&&allTiles[i].backsideTileType===TT_CYBERMIND){return!0;}}return!1;};
Artifact_Manager.prototype.get_ad_level=function(){
var a=this.by_abbreviation("AD");if(a.active){return a.level;}return 0;};
Artifact_Manager.prototype.get_length=function(){return this.artifactList.length;};
Artifact_Manager.prototype.get_sfc=function(){
if(g_PersistentData.currentChallenge==="AAC"){return(g_PersistentData.get_challenge_times_completed("AA")+1)*100*this.count_discovered()+50;}return 50;};
Artifact_Manager.prototype.get_ssc=function(){
if(g_PersistentData.currentChallenge==="AAC"){return(g_PersistentData.get_challenge_times_completed("AA")+1)*sq(this.count_discovered())+10;}return 10;};
Artifact_Manager.prototype.add_artifact=function(n,a,l,i,r,e,g,t,m){this.artifactList.push(new Artifact(n,a,l,i,r,e,g,t,m));};
var draw_tomato=function(x,y,silhouette){
noStroke();if(silhouette){fill(0,0,0);}else{fill(255,0,0);}ellipse(x,y,32,24);if(silhouette){return;}fill(48,128,0);rect(x-1,y-10,3,6);stroke(48,128,0);line(x,y-4,x+6,y-10);line(x,y-4,x-4,y-9);};
var draw_rune_stone=function(x,y,silhouette){
noStroke();if(silhouette){fill(0);}else{fill(96);}quad(x-14,y-9,x+13,y-15,x+6,y+11,x-10,y+15);if(silhouette){return;}stroke(255,255,255,128);line(x-14,y-9,x+13,y-15);stroke(0,0,0,128);line(x+13,y-15,x+6,y+11);line(x-10,y+15,x+6,y+11);stroke(0,255,255);line(x-10,y-5,x-10,y+5);line(x+6,y-5,x+6,y+5);line(x-2,y-5,x-2,y+5);line(x-10,y-5,x-6,y-5);line(x-10,y+5,x-6,y+5);line(x-10,y,x-7,y);line(x+2,y-5,x+6,y-5);line(x+3,y,x+6,y);line(x+2,y+5,x+6,y+5);line(x-6,y-5,x-6,y-3);line(x-6,y+5,x-6,y+3);line(x+2,y-5,x+2,y-3);line(x+2,y+5,x+2,y+3);noStroke();fill(0,255,255);triangle(x-4,y-5,x,y-5,x-1,y-2);triangle(x-4,y+6,x,y+6,x-1,y+3);};
var draw_CPU=function(x,y,silhouette){
noStroke();if(silhouette){fill(0,0,0);}else{fill(128,128,128);}rect(x-14,y-12,6,12);rect(x-8,y-12,22,24);if(silhouette){return;}noFill();stroke(255,0,0);line(x-13,y-11,x+12,y-11);line(x+7,y-11,x+7,y+7);line(x+7,y+7,x+12,y+7);line(x-7,y+4,x,y+4);line(x,y+4,x,y+10);stroke(0,255,0);line(x-13,y-9,x+5,y-9);line(x+5,y-9,x+5,y+9);line(x+5,y+9,x+12,y+9);line(x-13,y-5,x+12,y-5);stroke(0,0,255);line(x-13,y-7,x+12,y-7);line(x+3,y-7,x+3,y+9);line(x-7,y+9,x+3,y+9);ellipse(x-1.5,y,4,4);line(x-2,y+2,x-2,y+9);stroke(255,0,0);point(x+7,y-7);};
var draw_cool_rock=function(x,y,silhouette){
noStroke();if(silhouette){fill(0);}else{fill(128);}arc(x,y,20,20,-10,230);arc(x-2,y,21,21,160,260);triangle(x-6,y-9,x+8,y+2,x-6,y+3);ellipse(x-9,y+3,4,4);if(!silhouette){fill(224);triangle(x-5,y-10,x-1,y+2,x-6,y+3);triangle(x-9,y,x-1,y-2,x-8,y+4);triangle(x+2,y-6,x+5,y+8,x,y+4);arc(x-8,y+1,6,6,90,180);ellipse(x-1,y+2,5,3);fill(96);arc(x-2,y+4,10,10,30,190);}stroke(silhouette?0:64);line(x+4,y-1,x+4,y+4);line(x+6,y-1,x+6,y+6);line(x+8,y-2,x+8,y+3);};
var draw_special_circuit_box=function(x,y,silhouette){
if(silhouette){fill(0,0,0);stroke(0,0,0);}else{fill(208,128,16);stroke(128,88,16);}quad(x+8,y+10,x-10,y+8,x-8,y-10,x+10,y-8);noStroke();if(silhouette){return;}fill(248,208,144);ellipse(x-5,y+4,4,4);ellipse(x,y,4,4);ellipse(x+5,y-4,4,4);};
var draw_fancy_glove=function(x,y,silhouette){
noStroke();if(silhouette){fill(0,0,0);}else{fill(255,176,0);}rect(x-6,y-5,11,8);quad(x-6,y+3,x+5,y+3,x+7,y+12,x-8,y+12);ellipse(x-5,y-5,2.5,12);ellipse(x-2,y-5,2.5,12);ellipse(x+1,y-5,2.5,12);ellipse(x+4,y-5,2.5,12);bezier(x+4,y-3,x+10,y-9,x+11,y-5,x+5,y-1);if(silhouette){return;}fill(255,192,64);quad(x-3,y+2,x+2,y+2,x+4,y+10,x-5,y+10);stroke(64,64,64);point(x-5,y-5);point(x-2,y-5);point(x+1,y-5);point(x+4,y-5);point(x+6,y-3);fill(64,64,64);ellipse(x-0.5,y-1,2,3);};
var draw_4_purple_squares=function(x,y,silhouette){
noStroke();if(silhouette){fill(0,0,0);}else{fill(128,0,255);}rect(x-12, y-4,24,8);rect(x-4,y+4,8,8);if(silhouette){return;}stroke(192,128,255);line(x-12,y-4,x+10,y-4);line(x-12,y-4,x-12,y+3);line(x-4,y-4,x-4,y+11);line(x+4,y-4,x+4,y+3);line(x-4,y+4,x+3,y+4);stroke(64,0,128);line(x-11,y+3,x-5,y+3);line(x-3,y+3,x+3,y+3);line(x+5,y+3,x+11,y+3);line(x-3,y+11,x+3,y+11);line(x-5,y-4,x-5,y+3);line(x+3,y-4,x+3,y+11);line(x+11,y-4,x+11,y+3);};
var draw_shoe=function(x,y,silhouette){
stroke(0,0,0);fill(0,0,0);quad(x-4,y+10,x+4,y+10,x+4,y-10,x-6,y-10);ellipse(x+0.5,y+10,8,5);bezier(x-5,y-10,x-4.7,y-14,x+4,y-16,x+5,y-10);ellipse(x+3,y-6,5,10);ellipse(x-5,y-4,3,8);if(silhouette){return;}noStroke();fill(128,64,0);ellipse(x,y+8,5,7);stroke(255,255,255);noFill();arc(x,y-10,8,5,180,270);arc(x-1,y-10,7,20,150,180);fill(255,255,255,80);noStroke();for(var i=5;i>0;i-=1){ellipse(x,y-3,i,i);}};
var draw_box_of_fastererness=function(x,y,silhouette){
if(silhouette){fill(0,0,0);stroke(0,0,0);}else{fill(16,160,255);stroke(32,96,192);}quad(x+8,y+10,x-10,y+8,x-8,y-10,x+10,y-8);noStroke();if(silhouette){return;}fill(192,208,224);ellipse(x-5,y+4,4,4);ellipse(x,y,4,4);ellipse(x+5,y-4,4,4);};
var draw_inf_H2O_source=function(x,y,silhouette){
noStroke();if(silhouette){fill(0,0,0,128);}else{fill(255,255,0,128);}for(var i=0;i<360;i+=30){arc(x,y,24,24,i,i+15);}if(!silhouette){fill(0,192,255);}else{fill(0,0,0);}for(var i=0;i<9;i+=1){ellipse(x,y+i-6,3*sq(i)/16,12);}};
var draw_ribbon=function(x,y,silhouette){
noStroke();if(silhouette){fill(0,0,0);}else{fill(176,0,0);}triangle(x-14,y-2,x-12,y-2,x-12,y);triangle(x-14,y+2,x-12,y+2,x-12,y);rect(x-12,y-2,6,4);rect(x+6,y-2,6,4);triangle(x+14,y-2,x+12,y-2,x+12,y);triangle(x+14,y+2,x+12,y+2,x+12,y);if(!silhouette){fill(255,0,0);}rect(x-10,y-4,20,4);};
var draw_train_ticket=function(x,y,silhouette){
noStroke();if(silhouette){fill(0,0,0);}else{fill(224,224,224);}rect(x-12,y-7,24,14);triangle(x-14,y-7,x-12,y-7,x-12,y);triangle(x-14,y+7,x-12,y+7,x-12,y);triangle(x+12,y-7,x+14,y,x+12,y);triangle(x+12,y+7,x+14,y,x+12,y);if(!silhouette){stroke(0,0,0);line(x-11,y-6,x+4,y-6);line(x-11,y-4,x-2,y-4);line(x-11,y-2,x,y-2);line(x+3,y+2,x+8,y+2);line(x+3,y+4,x+10,y+4);stroke(255,0,0);line(x+6,y-6,x+8,y-4);line(x+8,y-4,x+6,y-2);line(x+9,y-6,x+11,y-4);line(x+11,y-4,x+9,y-2);}};
var draw_seed=function(x,y,silhouette){
stroke(0,0,0);if(silhouette){fill(0,0,0);}else{fill(128,64,0);}ellipse(x,y,22,10);if(silhouette){return;}stroke(255,255,255,128);line(x-7,y-3,x-7,y-1);line(x-8,y-2,x-6,y-2);line(x-7,y-4,x-7,y);line(x-9,y-2,x-5,y-2);};
var draw_history_textbook=function(x,y,silhouette){
noStroke();if(silhouette){fill(0,0,0);}else{fill(224,224,224);}quad(x-10,y+7,x+5,y+10,x+5,y+15,x-8,y+12);triangle(x-10,y+9.5,x-9,y+12,x-9,y+7);if(silhouette){stroke(0,0,0);fill(0,0,0);}else{stroke(0,0,128);fill(0,0,224);}quad(x-5,y-14,x+9,y-11,x+5,y+10,x-9,y+7);line(x+9,y-7,x+5,y+15);line(x-9,y+12,x+5,y+15);line(x-9,y+7,x-10,y+9.5);line(x-10,y+9.5,x-9,y+12);line(x-10,y+9.5,x-6,y-11.5);line(x-6,y-11.5,x-5,y-14);if(silhouette){return;}stroke(255,255,0);line(x-3,y-10,x+6,y-8);};
var draw_food_coloring=function(x,y,silhouette){
stroke(0,0,0);if(silhouette){fill(0,0,0);}else{fill(0,96,0);}rect(x-3,y-8,6,16);arc(x+0.5,y+8,6,8,0,180);noStroke();if(!silhouette){fill(224,192,128);}quad(x-4,y-12,x+5,y-12,x+4,y-6,x-3,y-6);};
var draw_burning_rectangle=function(x,y,silhouette){
noStroke();fill(0,0,0);if(!silhouette){fill(128,128,128);}rect(x-9.5,y-13.5,19,27);if(!silhouette){fill(192,192,192);rect(x-9.5,y-13.5,19,2);rect(x-9.5,y-13.5,2,27);rect(x-9.5,y+11.5,19,2);rect(x+7.5,y-13.5,2,27);fill(208,208,208);}rect(x-9.5,y-11.5,19,3);if(silhouette){return;}stroke(208,208,208);fill(208,80,0);rect(x-7.5,y-9.5,14,10);line(x-2,y,x+2,y);line(x-2,y+2,x+2,y+2);stroke(128,128,128);line(x-1,y+1,x+1,y+1);stroke(255,255,255);line(x-2,y-10,x+2,y-10);line(x-6,y+7,x+6,y+7);line(x-3,y+9,x+3,y+9);stroke(208,192,128);line(x-3,y+5,x+3,y+5);noStroke();fill(255,80,0);ellipse(x-1,y-3,3,4);ellipse(x+1,y-4,3,3);ellipse(x+3,y-5,2,2);ellipse(x+4,y-6,2,2);};
var draw_pizza=function(x,y,silhouette){
if(silhouette){stroke(0,0,0);fill(0,0,0);}else{stroke(224,208,192);fill(224,128,0);}ellipse(x,y,26,26);if(silhouette){return;}stroke(200,0,0);fill(224,32,32);ellipse(x-4,y-2,4,4);ellipse(x+4,y-5,4,4);ellipse(x-6,y+6,4,4);ellipse(x+3,y+4,4,4);ellipse(x+9,y-1,4,4);stroke(12,120,48);point(x-5,y-6);point(x+4,y-9);point(x-3,y+6);point(x+1,y+3);point(x-2,y+4);point(x-10,y);point(x+7,y-2);point(x+2,y-3);point(x-1,y-4);point(x-5,y-8);point(x+9,y+3);point(x+4,y+8);};
var draw_starlight_circle=function(x,y,silhouette){
noFill();if(silhouette){stroke(0,0,0);}else{stroke(224,160,240);}line(x-14,y,x+14,y);line(x-14,y-1,x+14,y-1);if(!silhouette){stroke(160,160,64);}ellipse(x,y,16,24);ellipse(x,y,17,25.5);ellipse(x,y,18,27);noStroke();if(silhouette){fill(0,0,0);}else{fill(224,160,240);}ellipse(x,y,12,8);if(silhouette){fill(0,0,0,128);}else{fill(224,160,240,128);}ellipse(x,y,16,12);if(silhouette){return;}stroke(224,160,240);line(x+6,y-1,x+10,y-1);line(x+6,y,x+10,y);};
var draw_ancient_doorway=function(x,y,silhouette){
noStroke();fill(64,64,64);if(silhouette){fill(0,0,0);}ellipse(x,y-4,20,20);rect(x-10,y-4,20,19);if(silhouette){return;}stroke(160,224,255);noFill();arc(x,y-4,18,18,180,360);arc(x,y-4,14,14,180,360);stroke(160,224,255,128);rect(x-9,y-5,2,19);rect(x+6,y-5,2,19);line(x-5,y,x-5,y+15);line(x+4,y,x+4,y+15);};
var draw_star_compass=function(x,y,silhouette){
stroke(0,0,0);fill(96,96,96);if(silhouette){fill(0,0,0);}arc(x,y+11,16,8,0,180);line(x-9,y+7,x-9,y+11);line(x+8,y+7,x+8,y+11);noStroke();rect(x-8,y+9,16,2);stroke(0,0,0);if(!silhouette){fill(128,128,128);}ellipse(x,y+7,16,8);fill(0,0,0);triangle(x-12,y-12,x+12,y-12,x,y+7);if(silhouette){return;}stroke(255,255,255);point(x-4,y-6);point(x+8,y-9);point(x+3,y-2);point(x+1,y-1);point(x-1,y+4);point(x,y-8);point(x-11,y-11);point(x-8,y-11);point(x-5,y-9);};
g_ArtifactManager=new Artifact_Manager();
{
    //nameStr, abbrevStr, loreStr, imgFunc, recalcFunc, effectStrFunc, genElgFunc, tileElgFunc, maxLevel
    g_ArtifactManager.add_artifact("History Textbook","HT","Details your home universe's history but without the interesting bits.",draw_history_textbook,function(){textbookTier1Multi=0.5+0.1*floor(min(0.2*this.level,2));textbookTier3Multi=1.3+0.01*this.level-0.01*log(1+exp(30+this.level-g_ArtifactManager.unspentAPs*(1+0.3*log(this.level))*0.5));},function(){if(this.level>0&&this.active){return"Tier 3 production: *"+g_ResourcePane.formatSI(textbookTier3Multi)+" (based on unspent Artifact Points), Tier 1: *"+textbookTier1Multi.toFixed(1);}return"Boosts resource production: Tier 3 at the expense of Tier 1.";},function(){return allBuildings[0].upgradeLevel===5&&season===4;},function(index){return index===28;},-1);
    g_ArtifactManager.add_artifact("Seed","S","Contains great potential for growth.  Has great nutritional value.",draw_seed,function(){flameOrbConsumptionFromSeed=max(61-this.level,1);bioOrbProjectedProductionFromSeed=8*pow(this.level,0.4)+9.87049*pow(this.level-1,0.2);},function(){var a=this.level>0&&this.active;return"Consumes "+(a?flameOrbConsumptionFromSeed+" flame orb/day":"flame orb")+" to produce "+(a?g_ResourcePane.formatSI(bioOrbProjectedProductionFromSeed)+" bio-orb/day.":"bio-orb.");},function(){return allBuildings.count_of_type(BT_FARM,5)>=3;},function(index){return!currentlyInBackside&&building_level_on_tile(index,BT_FARM)===5;},-1);
    g_ArtifactManager.add_artifact("Rune Stone","RS","This ancient stone is attracted to your most advanced mana collectors.",draw_rune_stone,function(){if(season===3){manaProductionMultiFromRuneStoneOriginal=1.4+0.2*this.level;stoneConsumptionFromRuneStone=4;}},function(){if(this.level===0||!this.active){return"Winter only: consumes stone to boost mana production.";}return"Winter only: -4 stone/day, boost mana production by "+(40+20*this.level)+"%.";},function(){return allBuildings.count_of_type(BT_COLLECTOR,5)>2;},function(index){return!currentlyInBackside&&building_level_on_tile(index,BT_COLLECTOR)===5;},-1);
    g_ArtifactManager.add_artifact("Cool Rock","IR","A strong metal traditionally used to make swords.",draw_cool_rock,function(){stoneProductionMultiFromCoolRock=1+0.4*this.level;},function(){return this.level>0&&this.active?"Increases stone production & stone from manual mining by "+40*this.level+"%.":"Boosts stone production & stone from manual mining.";},function(){return allBuildings.count_of_type(BT_MINE,5)>2;},function(index){return!currentlyInBackside&&building_level_on_tile(index,BT_MINE)===5;},-1);
    g_ArtifactManager.add_artifact("Infinite Water Source","H2O","Usually found within wells that measure 2×2 meters.",draw_inf_H2O_source,function(){pearlProductionFromH2O=0.3*g_PersistentData.get_total_challenges_completed();},function(){return(g_PersistentData.get_has_completed_1_challenge()?"+0.3 pearl/day per Challenge":"??? effect")+"; Water Music gives +mana, -flame orb";},function(){return allBuildings.count_of_type(BT_MER_MALL,5)+allBuildings.count_of_type(BT_UNDERWATER_RUINS,5)>0;},function(index){return!currentlyInBackside&&(building_level_on_tile(index,BT_MER_MALL)>4||building_level_on_tile(index,BT_UNDERWATER_RUINS)>4);},-1);
    g_ArtifactManager.add_artifact("Telephone Footwear","TF","Used primarily by secret agents who oppose chaos.",draw_shoe,function(){goldenAppleProductionMultiFromTF=1+0.32*sqrt(this.level);if(season===2){darkEnergyProductionFromTF=g_PersistentData.get_upgrade_effect("TF");}}, function(){if(this.level>0&&this.active){return"*"+g_ResourcePane.formatSI(goldenAppleProductionMultiFromTF)+" golden apple, extra effect in autumn, more enchanting.";}return"Boosts golden apple, extra effect in autumn, more enchanting.";},function(){return allBuildings.count_of_type(BT_ENCHANTING_TABLE,5)>=3;},function(index){return !currentlyInBackside&&building_level_on_tile(index,BT_ENCHANTING_TABLE)===5;},-1);
    g_ArtifactManager.add_artifact("Box of Fastererness","BoF","Its aura makes things go faster.  Furnaces, for example.",draw_box_of_fastererness,function(){fastererness=0.1*pow(this.level,1.5)+1;},function(){return"Furnaces produce & consume "+(this.level>0&&this.active?g_ResourcePane.formatSI(fastererness*100-100)+"% ":"")+"more resources.";},function(){return allBuildings.count_of_type(BT_FURNACE,5)>=(g_PersistentData.currentChallenge==="UCC"?1:3);},function(index){return!currentlyInBackside&&building_level_on_tile(index,BT_FURNACE)===5;},-1);
    g_ArtifactManager.add_artifact("Ribbon","R","Woven from interactions between terraforming & creation itself.",draw_ribbon,function(){bioOrbConsumptionFromRibbon=30*pow(0.9,this.level);foodInternalFromRibbon=sqrt(this.level)*0.142857;},function(){return"Consumes "+(this.level>0&&this.active?g_ResourcePane.formatSI(bioOrbConsumptionFromRibbon)+" bio-orb per day":"bio-orb")+", terraformers produce food.";},function(){return allBuildings.count_of_type(BT_TERRAFORMER,5)>=3&&allBuildings.count_of_type(BT_BACKSIDE_TERRAFORMER,5)>=3;},function(index){return building_level_on_tile(index,currentlyInBackside?BT_BACKSIDE_TERRAFORMER:BT_TERRAFORMER)===5;},-1);
    g_ArtifactManager.add_artifact("Pizza","P","Universally regarded as delicious.",draw_pizza,function(){shelterCostMultiFromPizza=1-0.15*this.level;},function(){if(this.level>0&&this.active){return"Reduces shelter cost by "+(100*(1-shelterCostMultiFromPizza)).toFixed(0)+"%.";}return"Makes shelters cheaper.";},function(){return allBuildings.count_of_type(BT_SHELTER,5)>0;},function(index){return!currentlyInBackside&&building_level_on_tile(index,BT_SHELTER)===5;},6);
    g_ArtifactManager.add_artifact("Star Compass","StC","An ancient race made a map of their universe.",draw_star_compass,null_func,function(){if(this.active){switch(this.level){case 1:return"IRSs now auto-launch.";case 2:return"IRSs now auto-launch & auto-restock.";case 3:return"IRSs now auto-launch, auto-restock, & auto-repair.";}}return"Automates IRSs.";},function(){return allBuildings.count_of_type(BT_IRS,5)>=3;},function(index){return building_level_on_tile(index,BT_IRS)===5&&!currentlyInBackside;},3);
    g_ArtifactManager.add_artifact("Ancient Doorway","AD","Probably has a long history, but you can't figure out how to open it.",draw_ancient_doorway,null_func,function(){if(this.level>0&&this.active){if(this.level>2){return"Allows you to build lava freezers directly on Cybermind tiles.";}if(this.level>1){return"Allows you to build lava freezers directly on wasteland & mithril tiles.";}return"Allows you to build mines directly on wasteland tiles.";}return"Allows you to build certain buildings where you normally couldn't.";},function(){var a=0,c=0;allBuildings.forEach(function(B){if(B.buildingType===BT_MITHRIL_MINE&&B.upgradeLevel===5){a+=1;c+=allTiles[B.tileIndex].backsideTileType===TT_CYBERMIND;}});return a>2&&c>0;},function(index){return currentlyInBackside&&building_level_on_tile(index,BT_MITHRIL_MINE)===5;},3);
    g_ArtifactManager.add_artifact("Burning Rectangle","BR","A \"gift\" from a monster from the Beyond.",draw_burning_rectangle,function(){allSpells.spellCostMulti=constrain(2.2-0.2*this.level,0.2,2);allSpells.payUsingFire=!0;},function(){if(this.level>0&&this.active){var m=allSpells.spellCostMulti;return "Spells cost "+(m>1?(100*m-100).toFixed(0)+"% more ":(m<1?(100-100*m).toFixed(0)+"% less ":""))+"flame orb instead of mana.";}return"Spells cost flame orb instead of mana; affects spell costs.";},function(){if(flameOrbResource<10000){return!1;}var f=0,c=0;allBuildings.forEach(function(b){if(b.buildingType===BT_LAVA_FREEZER&&b.upgradeLevel>4){f+=!b.destroyed;c+=b.destroyed;}});return f>2&&c>2;},function(index){return currentlyInBackside&&building_level_on_tile(index,BT_LAVA_FREEZER)===5;},10);
    g_ArtifactManager.add_artifact("Green Food Coloring","GFC","What did you think it was that made slimes green?",draw_food_coloring,function(){foodColoringMulti=1+0.07*this.level;},function(){if(this.level>0&&this.active){return"+1 action/day in summer, IRS pod capacity & dark energy costs +"+(100*foodColoringMulti-100).toFixed(0)+"%";}return"+1 action per day in summer, increases rescue pod capacity.";},function(){return g_TechnologyManager.get_completion_ratio()===1;},function(index){return index===28;},-1);
    g_ArtifactManager.add_artifact("Central Processing Unit","CPU","Does it even still function?",draw_CPU,function(){g_Diplomacy.cybermindTradeCosts=[100-9*this.level,300-9*this.level,600-9*this.level];},function(){return"Reduces the iron cost of trading with the Cybermind"+(this.level>0&&this.active?" by "+9*this.level+" iron":"")+".";},g_ArtifactManager.get_is_CPU_eligible,function(index){return currentlyInBackside&&allTiles[index].backsideTileType===TT_CYBERMIND;},10);
    g_ArtifactManager.add_artifact("Fancy Glove","FG","It's missing whatever belongs in these slots.",draw_fancy_glove,function(){darkEnergyFuelMultiFromFancyGlove=max(1-0.1*this.level,0.6*pow(0.99,this.level));},function(){return"Provides a fuel cost discount to all dark energy engines."+(this.level>0&&this.active?("  ("+round(100*darkEnergyFuelMultiFromFancyGlove-100)+"%)"):"");},function(){return allBuildings.count_of_type(BT_IRS)>0;},function(index){return currentlyInBackside&&allTiles[index].backsideTileType===TT_MAP_EDGE;},6);
    g_ArtifactManager.add_artifact("Special Circuit Box","SCB","Designed to be compatible with various machines.",draw_special_circuit_box,function(){ironProductionMultiFromSpecialCircuitBox=1+0.2*this.level+0.1*(season===1);flameOrbConsumptionMultiFromSCB=1.5-0.2*(this.level>9);},function(){return this.level>0&&this.active?"Multiplies iron production by *"+g_ResourcePane.formatSI(ironProductionMultiFromSpecialCircuitBox)+", +"+(100*flameOrbConsumptionMultiFromSCB-100)+"% flame orb consumption.":"Boosts iron production (more in summer), consume more flame orb.";},function(){return allBuildings.count_of_type(BT_FURNACE)>0;},function(index){return!currentlyInBackside&&allBuildings.get_tile_has(index,BT_FURNACE);},-1);
    g_ArtifactManager.add_artifact("4 Purple Squares","4PS","Reminds you of an ancient piece of software from your world.",draw_4_purple_squares,function(){g_ArtifactManager.activeSlots+=this.get_4_purple_squares_active_slots();mithrilProductionFrom4PS=pow(this.level,g_PersistentData.get_upgrade_effect("4P"))*1.5;},function(){if(this.level<1||!this.active){return"More slots for active Artifacts, produces mithril.";}var s=this.get_4_purple_squares_active_slots();return"+"+s+" slot"+(s===1?"":"s")+" for active Artifacts, +"+g_ResourcePane.formatSI(mithrilProductionFrom4PS)+" mithril/day";},function(){return g_ArtifactManager.count_discovered()>=3;},function(index){return currentlyInBackside;},-1);
    g_ArtifactManager.add_artifact("Magical Tomato","MT","You found this hovering above your crop fields.",draw_tomato,function(){foodGainedAtEachSpellCast=8+5*pow(this.level-1,0.8064363);},function(){return"Every time a spell is cast, gain "+(this.level===0||!this.active?"some":foodGainedAtEachSpellCast.toFixed(3))+" food.";},function(){return allSpells.count_active_spells()>2&&allBuildings.count_of_type(BT_FARM,2)>0;},function(index){var bldg=building_on_tile(index,BT_FARM);return!currentlyInBackside&&bldg>-1&&!allBuildings[bldg].destroyed&&allBuildings[bldg].buildingType===BT_FARM&&allBuildings[bldg].upgradeLevel>=2;},15);
    g_ArtifactManager.add_artifact("Starlight Circle","SC","Device to capture starlight.  Ancient laws restrict its use.",draw_starlight_circle,function(){resourcesOnSpellCast=0.5*pow(this.level,0.77815125);},function(){if(this.level>0&&this.active){return"When you cast a spell, get "+resourcesOnSpellCast.toFixed(3)+" days' worth of Tier 2 income.";}return"Get Tier 2 resources when you cast spells.";},function(){return goldenAppleResource>=500&&allSpells.every(function(S){return S.castStat>=30;})&&allSpells.count_active_spells()>=3;},function(index){return!0;},10);
    g_ArtifactManager.add_artifact("Train Ticket","TT","Freight trains don’t carry passengers, so why do you have this?",draw_train_ticket,null_func,function(){
var s="Increases";if(this.active){switch(this.level){case 1:s="Doubles";break;case 2:s="Triples";break;case 3:s="Quadruples";break;}}return"Tweaks the Train schedule.  "+s+" Train cargo capacity.";},function(){return g_TrainBody.pastDeliveries>2&&g_Diplomacy.cybermindAllTrades[0].multi>2.29;},function(index){return allTiles[index].hasTrainPowerLine;},3);
    if(g_ArtifactManager.get_length()!==20){throw"Expected 20 Artifacts, got "+g_ArtifactManager.get_length()+" instead.";}
}
} //Artifacts

{
var Tutorial_Condition=function(t,T,c){this.text=t;this.tooltip=T;this.checkFunc=c;};
Tutorial_Condition.prototype.get_text=function(){if(typeof(this.text)==="function"){return this.text();}return this.text;};
Tutorial_Condition.prototype.get_tooltip=function(){if(typeof(this.tooltip)==="function"){return this.tooltip();}return this.tooltip;};
Tutorial_Condition.prototype.check=function(){if(typeof(this.checkFunc)==="function"){return this.checkFunc();}return!1;};
Tutorial_Condition.prototype.color=function(){if(typeof(this.checkFunc)==="function"){if(this.checkFunc()){return color(0,192,0);}return color(255,0,0);}return color(0);};
var Tutorial_Goal=function(s,c){this.skip=s;this.conditions=c;};
Tutorial_Goal.prototype.get_should_skip=function(){
switch(typeof this.skip){case"boolean":return this.skip;case"function":return this.skip();default:throw"Type Error: Tutorial_Goal::skip";}};
Tutorial_Goal.prototype.check=function(){if(this.get_should_skip()){return!0;}return this.conditions.every(function(C){return C.check();});};
Tutorial_Goal.prototype.draw=function(){
var y=74-8*this.conditions.length;textSize(12);stroke(0);fill(255);rect(48,y-20,200,this.conditions.length*16+12,4);this.conditions.forEach(function(C){fill(C.color());text(C.get_text(),58,y);y+=16;});y=74-8*this.conditions.length;this.conditions.forEach(function(C){if(mouseX>=48&&mouseY>=y-12&&mouseX<248&&mouseY<y+4){var t=C.get_tooltip(),i=0,l=0;if(t.length>0){for(;i<t.length;i+=1){l+=t[i]==='\n';}fill(255);rect(52,y+2,192,20+16*l);fill(0);text(t,56,y+16);}}y+=16;});};
var Tutorial_Progress_Counter = function(){
    this.goals=[];
    this.showGoal=!1;
    //When a variable is -1, it means the tutorial is off.
    //Any other value means the tutorial is on.
    this.general=-1;
    this.spells=-1;
    this.swarm=-1;
    this.twoBldgs=-1;
    this.foodFromFish=0;
    this.ticksSinceCompletion=0;
    this.controls=-1;
    this.challenges=-1;
    this.irs=-1;
};
Tutorial_Progress_Counter.prototype.get_is_in_tutorial=function(){return this.general>-1;};
Tutorial_Progress_Counter.prototype.draw=function(){
if(this.goals.length<1){return;}draw_smiley_face(24,60,this.ticksSinceCompletion/30);if(this.ticksSinceCompletion>0){this.ticksSinceCompletion-=1;}if(this.showGoal){this.get_active_goal().draw();}else{var yDraw=66;textSize(16);stroke(0);fill(255);rect(48,46,200,28,4);fill(0);text("Click here to show goals.",58,yDraw);}if(this.get_which_extra()!=="none"){draw_smiley_face(24,280);stroke(0);fill(255);rect(48,266,147,28,4);}};
Tutorial_Progress_Counter.prototype.check_goals=function(){
if(allBuildings[0].upgradeLevel>3){this.disable_tutorial();return;}var G,s=0;while(s<1){G=this.get_active_goal();if(G===undefined){return;}if(G.check()){this.goals.shift();this.general+=1;this.ticksSinceCompletion=30;}else{s=1;}}};
Tutorial_Progress_Counter.prototype.get_active_goal=function(){return this.goals.length>0?this.goals[0]:undefined;};
Tutorial_Progress_Counter.prototype.add_slime_goals=function(){
this.goals.splice(1,0,new Tutorial_Goal(!1,[new Tutorial_Condition("Cast De-Slimification","Can only be cast on tiles that\nare completely covered in slime.",function(){return allSpells.by_name("De-Slimification").castStat>0;}),new Tutorial_Condition(function(){return"Have 5 gadolinium"+(gadoliniumResource<5?" ("+gadoliniumResource.toFixed(1)+"/5.0)":"");},"You can get gadolinium by\nkilling slimes or casting the spell\nDe-Slimification on a slime tile.",function(){return gadoliniumResource>=5;})]));};
Tutorial_Progress_Counter.prototype.add_wm_goals=function(){
this.goals.splice(1,0,new Tutorial_Goal(function(){return dayCount>=300;},[new Tutorial_Condition(function(){var f=g_Factors.lakeFactor;return"Lake factor ≥ 2.0"+(f>19?"":" ("+(f/10).toFixed(1)+"/2.0)");},"The higher, the better.",function(){return g_Factors.lakeFactor>19;}),new Tutorial_Condition(function(){return"Produce 10 mana/day"+(manaNetIncome<10?" ("+manaNetIncome.toFixed(1)+"/10.0)":"");},"Have lots of lvl. 2 mana collectors.",function(){return manaNetIncome>=10;}),new Tutorial_Condition("Cast Water Music","Try it--what does it do?",function(){return allSpells.by_name("Water Music").castStat>0;})]));};
Tutorial_Progress_Counter.prototype.enable_tutorial=function(){
this.general=this.irs=this.challenges=this.spells=this.swarm=this.controls=this.twoBldgs=0;this.goals=[];
var temp="Click on the tile, then click the\nwhite \"+\" button to claim it.";
this.addG(!1,[new Tutorial_Condition("Claim 1 plains tile",temp,function(){return allTiles.has_claimed(TT_PLAINS);}),new Tutorial_Condition("Claim 1 swamp tile",temp,function(){return allTiles.has_claimed(TT_SWAMP);}),new Tutorial_Condition("Claim 1 lake tile",temp,function(){return allTiles.has_claimed(TT_LAKE);}),new Tutorial_Condition("Claim 1 desert tile",temp,function(){return allTiles.has_claimed(TT_DESERT);})]);
this.addG(!1,[new Tutorial_Condition(function(){var b=allBuildings.count_of_type(BT_MINE);return"Build 1 mine"+(b>0?"":" (0/1)");},"Mines can be built on desert tiles.",function(){return allBuildings.count_of_type(BT_MINE)>0;}),new Tutorial_Condition(function(){var b=allBuildings.count_of_type(BT_FARM);return"Build 3 farms"+(b>2?"":" ("+b+"/3)");},"Farms can be built on plains tiles.",function(){return allBuildings.count_of_type(BT_FARM)>2;}),new Tutorial_Condition(function(){var b=allBuildings.count_of_type(BT_COLLECTOR);return"Build 1 collector"+(b>0?"":" (0/1)");},"Collectors can be built on swamp\ntiles, but only if you already built\nat least 1 mine (anywhere) first.",function(){return allBuildings.count_of_type(BT_COLLECTOR)>0;})]);
var aqu=function(){return g_TechnologyManager.by_name("Aqueducts").researched;};
this.addG(aqu,[new Tutorial_Condition(function(){var f=g_Factors.lakeFactor;return"Lake factor ≥ 1.0"+(f>9?"":" ("+(f/10).toFixed(1)+"/1.0)");},"You can see your lake factor in the\nbottom-left corner of the screen if\nyou selected no tile.  Increase\nit by claiming lake tiles.",function(){return g_Factors.lakeFactor>9;}),new Tutorial_Condition("Research the tech \"Aqueducts\"","Research is done at your house\n(on the grey tile in the center).",aqu)]);
this.addG(!1,[new Tutorial_Condition(function(){return"Produce 1 mana/day"+(manaNetIncome<1?" ("+manaNetIncome.toFixed(1)+"/1.0)":"");},"Build more mana collectors to\nincrease the production rate.\nTo get needed stone, mine\nmanually at the mine you built.",function(){return manaNetIncome>=1;}),new Tutorial_Condition(function(){var b=allBuildings.count_of_type(BT_MINE,2);return"Upgrade 3 mines to level 2"+(b>2?"":" ("+b+"/3)");},"Existing mines can be upgraded to\npassively produce stone.\nStone production is highest when\nthe desert factor is far from zero.",function(){return allBuildings.count_of_type(BT_MINE,2)>2;}),new Tutorial_Condition(function(){var b=allBuildings.count_of_type(BT_FARM);return"Build 4 farms"+(b>3?"":" ("+b+"/4)");},"You'll need good food production\nlater, so set it up now.",function(){return allBuildings.count_of_type(BT_FARM)>3;})]);
this.addG(function(){return g_Diplomacy.totalPearlGained>=15;},[new Tutorial_Condition(function(){var f=g_Factors.lakeFactor;return"Lake factor ≥ 2.0"+(f>19?"":" ("+(f/10).toFixed(1)+"/2.0)");},"You can see your lake factor in the\nbottom-left corner of the screen if\nyou selected no tile.  Increase\nit by claiming lake tiles.",function(){return g_Factors.lakeFactor>19;}),new Tutorial_Condition("Find the mer mall","It is hidden on a lake tile\nnot too far from your house.",function(){return allTiles[allBuildings[1].tileIndex].claimed;}),new Tutorial_Condition("Sign the peace treaty","Try diplomacy at the mer mall.",function(){return g_Diplomacy.merfolkTradeUnlocked;})]);
var chr=function(){return g_TechnologyManager.by_name("Chronometer").researched;};
this.addG(!1,[new Tutorial_Condition(function(){return"Produce 3 mana/day"+(manaNetIncome<3?" ("+manaNetIncome.toFixed(1)+"/3.0)":"");},"You will need more mana to\npurchase lots of pearl.",function(){return manaNetIncome>=3;}),new Tutorial_Condition(function(){if(chr()){return"Be able to afford \"Chronometer\"";}var p=pearlResource;return"Have 15 pearl"+(p<15?" ("+p.toFixed(1)+"/15)":"");},"Obtain pearl by selling mana to the\nmerfolk at the mer mall.",function(){return chr()||pearlResource>=15;}),new Tutorial_Condition("Research the tech \"Chronometer\"","This tech is really important!",chr)]);
this.addG(!1,[new Tutorial_Condition("Set up food production:","",function(){return g_Factors.lakeFactor>19&&allBuildings.count_of_type(BT_FARM)>7&&g_TutorialProgress.foodFromFish>=5;}),new Tutorial_Condition("    Lake factor ≥ 2.0","You can see your lake factor in the\nbottom-left corner of the screen if\nyou selected no tile.  Increase\nit by claiming lake tiles.",function(){return g_Factors.lakeFactor>19;}),new Tutorial_Condition(function(){var b=allBuildings.count_of_type(BT_FARM);return"    Build 8 farms"+(b>7?"":" ("+b+"/8)");},"Farms can be built on plains tiles.",function(){return allBuildings.count_of_type(BT_FARM)>7;}),new Tutorial_Condition(function(){var f=g_TutorialProgress.foodFromFish;return"    Gain 5 food from fishing"+(f>=5?"":" ("+floor(f)+"/5)");},"Fish like to swim in lakes.",function(){return g_TutorialProgress.foodFromFish>=5;})]);
this.addG(function(){return dayCount>79;},[new Tutorial_Condition(function(){var f=g_Factors.lakeFactor;return"Lake factor ≥ 2.0"+(f>19?"":" ("+(f/10).toFixed(1)+"/2.0)");},"You can see your lake factor in the\nbottom-left corner of the screen if\nyou selected no tile.  Increase\nit by claiming lake tiles.",function(){return g_Factors.lakeFactor>19;}),new Tutorial_Condition(function(){var b=allBuildings.count_of_type(BT_COLLECTOR,2);return"Upgrade 3 collectors to level 2"+(b>2?"":" ("+b+")");},"Upgraded collectors produce more\nmana.",function(){return allBuildings.count_of_type(BT_COLLECTOR,2)>2;})]);
var sma=new Tutorial_Condition("Stonemover spell active","Stonemover is a spell cast on tiles\nwith level 2+ mines on it.",function(){return allSpells.by_name("Stonemover").durationLeft>0;});
this.addG(function(){return allBuildings.count_of_type(BT_ENCHANTING_TABLE)>4;},[new Tutorial_Condition(function(){var f=g_Factors.lakeFactor;return"Lake factor ≥ 2.0"+(f>19?"":" ("+(f/10).toFixed(1)+"/2.0)");},"A high lake factor boosts\nyour bonus from Aqueducts tech.",function(){return g_Factors.lakeFactor>19;}),new Tutorial_Condition("Desert factor ≤ 0.0","Affects passive resource\nproduction from mines level 2+.",function(){return g_Factors.desertFactor<=0;}),new Tutorial_Condition(function(){return"Produce 5 mana/day"+(manaNetIncome<5?" ("+manaNetIncome.toFixed(1)+"/5.0)":"");},"Build & upgrade collectors to\nincrease the production rate.",function(){return manaNetIncome>=5;}),sma,new Tutorial_Condition(function(){return"Produce 4 stone/day"+(stoneNetIncome<4?" ("+stoneNetIncome.toFixed(1)+"/4.0)":"");},"Mines level 2 produce stone.\nStone production is highest when\nthe desert factor is far from zero.",function(){return stoneNetIncome>=4;})]);
var enc=function(){return g_TechnologyManager.by_name("Enchanting Table").researched;};
this.addG(enc,[new Tutorial_Condition(function(){var x=ceil((20-spiceResource)*0.74),f=foodResource;return"Have "+x+" food"+(f<x?" ("+f.toFixed(1)+"/"+x.toFixed(1)+")":"");},"To get the most food, keep\nyour Aqueducts bonus high.",function(){return foodResource>=ceil((20-spiceResource)*0.74);}),new Tutorial_Condition(function(){var x=ceil((20-spiceResource)*2.5),p=pearlResource;return"Have "+x+" pearl"+(p<x?" ("+p.toFixed(1)+"/"+x.toFixed(1)+")":"");},"To get the most pearl, have high\nmana production & trade with\nthe merfolk.",function(){return pearlResource>=ceil((20-spiceResource)*2.5);})]);
this.addG(enc,[new Tutorial_Condition("Sign the a treaty with the camels","Try diplomacy on the same tile as\na camel.\nCamels wander the desert.",function(){return g_Diplomacy.camelsTradeUnlocked;}),new Tutorial_Condition(function(){var s=spiceResource;return"Have 20 spice"+(s<20?" ("+s.toFixed(1)+"/20.0)":"");},"You can get spice by trading with\nthe camels.  Be quick, since you\neat a little spice every day.",function(){return spiceResource>=20;}),new Tutorial_Condition("Research \"Enchanting Table\"","From here on, many technologies\ncost lots of spice.",enc)]);
this.addG(!1,[new Tutorial_Condition(function(){var b=allBuildings.count_of_type(BT_ENCHANTING_TABLE);return"Build 5 enchanting tables"+(b>4?"":" ("+b+"/5)");},"They can be built on any plains tile.",function(){return allBuildings.count_of_type(BT_ENCHANTING_TABLE)>4;}),new Tutorial_Condition("Research the tech","From here on, many technologies\ncost lots of spice.",function(){return g_TechnologyManager.by_name("Enchanting Table Synergy").researched;}),new Tutorial_Condition("    \"Enchanting Table Synergy\"","From here on, many technologies\ncost lots of spice.",function(){return g_TechnologyManager.by_name("Enchanting Table Synergy").researched;})]);
this.addG(!1,[new Tutorial_Condition(function(){var b=allBuildings.count_of_type(BT_FURNACE);return"Build 1 furnace"+(b>0?"":" (0/1)");},"Furnaces can be built on deserts.",function(){return allBuildings.count_of_type(BT_FURNACE)>0;}),new Tutorial_Condition(function(){var x=max(0,ceil(10-ironResource)),r=flameOrbResource;return"Have "+x+" flame orb"+(x<r?"":" ("+r.toFixed(1)+"/"+x.toFixed(1)+")");},"To get flame orb, visit an\nenchanting table & click the\ngreen circular button, then enchant\npearl to become flame orb.",function(){return flameOrbResource>=ceil(10-ironResource);}),new Tutorial_Condition(function(){var r=ironResource;return"Have 10 iron"+(r<10?" ("+r.toFixed(1)+"/10.0)":"");},"Iron is made by furnaces; they\nconsume flame orb & stone.",function(){return ironResource>=10;})]);
this.addG(!1,[new Tutorial_Condition(function(){return g_Diplomacy.camelsStanding>1?"Camel standing: \"acquaintances\"":"Keep trading with the camels";},"Trading with them increases your\nstanding in their eyes.",function(){return g_Diplomacy.camelsStanding>1;}),new Tutorial_Condition("Purchase a tech from the camels","The camels have unique techs not\nobtainable anywhere else.",function(){return g_TechnologyManager.get_ccr()>0;}),new Tutorial_Condition("Desert factor ≤ -1.0","Affects passive resource\nproduction from mines level 2+.",function(){return g_Factors.desertFactor<=-10;})]);
this.addG(!1,[new Tutorial_Condition("Research \"Better Farming Tools\"","This will help you get food.",function(){return g_TechnologyManager.by_name("Better Farming Tools").researched;}),new Tutorial_Condition(function(){var f=g_Factors.plainsFactor;return"Plains factor ≥ -1.0"+(f>-11?"":" ("+(f/10).toFixed(1)+"/-1.0)");},"You'll need a positive\nplains factor later.",function(){return g_Factors.plainsFactor>-11;}),new Tutorial_Condition(function(){var b=allBuildings.count_of_type(BT_ENCHANTING_TABLE);return"Build 15 enchanting tables"+(b>14?"":" ("+b+"/15)");},"Build more to maximize the\nenchanting synergy bonus!\nIt will save you time later.",function(){return allBuildings.count_of_type(BT_ENCHANTING_TABLE)>14;}),new Tutorial_Condition(function(){var b=allBuildings.count_of_type(BT_FARM,2);return"Upgrade 5 farms to level 2"+(b>4?"":" ("+b+"/5)");},"Note: repairing damaged level 2\nfarms is more efficient than level 1.",function(){return allBuildings.count_of_type(BT_FARM,2)>4;})]);
this.addG(!1,[sma,new Tutorial_Condition(function(){return"Produce 6 stone/day"+(stoneNetIncome<6?" ("+stoneNetIncome.toFixed(1)+"/6.0)":"");},"The Stonemover spell & level 2+\nmines boost production.  Having\na desert factor far from 0 helps.",function(){return stoneNetIncome>=6;}),new Tutorial_Condition(function(){var f=g_Factors.plainsFactor;return"Plains factor ≥ 0.0"+(f>=0?"":" ("+(f/10).toFixed(1)+"/0.0)");},"The higher, the better.",function(){return g_Factors.plainsFactor>=0;}),new Tutorial_Condition(function(){var f=g_Factors.lakeFactor;return"Lake factor ≥ 2.0"+(f>19?"":" ("+(f/10).toFixed(1)+"/2.0)");},"The higher, the better.",function(){return g_Factors.lakeFactor>19;}),new Tutorial_Condition(function(){var b=allBuildings.count_of_type(BT_FARM,2);return"Upgrade 10 farms to level 2"+(b>9?"":" ("+b+"/10)");},"You'll want the food.",function(){return allBuildings.count_of_type(BT_FARM,2)>9;})]);
this.addG(!1,[sma,new Tutorial_Condition(function(){return"Produce 3 stone/day"+(stoneNetIncome<3?" ("+stoneNetIncome.toFixed(1)+"/3.0)":"");},"The Stonemover spell & level 2+\nmines boost production.  Having\na desert factor far from 0 helps.",function(){return stoneNetIncome>=3;}),new Tutorial_Condition(function(){var i=ironProjectedNetIncome;return"Produce 3 iron/day"+(i<3?" ("+i.toFixed(1)+"/3.0)":"");},"Furnaces produce iron, but this\nprocess consumes stone &\nflame orb.",function(){return ironProjectedNetIncome>=3;}),new Tutorial_Condition(function(){var t=g_TechnologyManager.get_ccr();return"Purchase 3 camel techs"+(t<3?" ("+t+"/3)":"");},"Technologies purchased from\nthe camels are expensive & useful.",function(){return g_TechnologyManager.get_ccr()>2;}),new Tutorial_Condition(function(){return g_TechnologyManager.get_ccr()<3?"    Have 50 iron"+(ironResource<50?" ("+ironResource.toFixed(1)+"/50.0)":""):"    Complete!";},"One camel tech requires 50 iron.",function(){return g_TechnologyManager.get_ccr()>2||ironResource>=50;})]);
var pf2Goal=new Tutorial_Condition(function(){var f=g_Factors.plainsFactor;return"Plains factor ≥ 2.0"+(f>19?"":" ("+(f/10).toFixed(1)+"/2.0)");},"It buffs the effect of a tech you\npreviously bought from the camels.",function(){return g_Factors.plainsFactor>19;}),mDone=function(){return mithrilResource>=g_TutorialProgress.mithril_needed();};
this.addG(!1,[new Tutorial_Condition(function(){var b=allBuildings.count_of_type(BT_ENCHANTING_TABLE);return"Build 31 ench. tables"+(b>30?"":" ("+b+"/31)");},"For now, 31 enchanting tables\nraises the synergy bonus enough.\n   (I know this because math...)",function(){return allBuildings.count_of_type(BT_ENCHANTING_TABLE)>30;}),new Tutorial_Condition("Upgrade 1 ench. table to level 2","For now, only 1 needs upgrading.",function(){return allBuildings.count_of_type(BT_ENCHANTING_TABLE,2)>0;}),pf2Goal,new Tutorial_Condition("Desert factor ≤ 2.0","Claim more non-desert tiles!",function(){return g_Factors.desertFactor<=-20;})]);
this.addG(!1,[new Tutorial_Condition(function(){var b=allBuildings.count_of_type(BT_FARM);return"Build 20 farms"+(b>19?"":" ("+b+"/20)");},"Might as well put those tiles\nyou claimed to good use.",function(){return allBuildings.count_of_type(BT_FARM)>19;}),new Tutorial_Condition(function(){var b=allBuildings.count_of_type(BT_MINE,3);return"Upgrade 5 mines to level 3"+(b>4?"":" ("+b+"/5)");},"Mines level 3 produce even\nmore stone than before.",function(){return allBuildings.count_of_type(BT_MINE,3)>4;}),pf2Goal]);
this.addG(!1,[new Tutorial_Condition(function(){if(dayCount<400){return"Get to day 400";}return"Research the tech \"Dark Energy\"";},"",function(){return g_TechnologyManager.by_name("Dark Energy").researched;}),new Tutorial_Condition(function(){if(dayCount<400){return"Collect more resources";}return"Cast Dark Attunement";},function(){if(dayCount<400){return"While you wait";}return"It is a spell that can only be cast\nat your house.  It reveals\nthe location of dark energy.";},function(){return allSpells.by_name("Dark Attunement").castStat>0;}),new Tutorial_Condition("Desert factor ≤ -3.0","Affects passive resource\nproduction from mines level 2+.",function(){return g_Factors.desertFactor<=-30;})]);
this.addG(!1,[new Tutorial_Condition(function(){var b=allBuildings.count_of_type(BT_MINE,4);return"Upgrade 3 mines to level 4"+(b>2?"":" ("+b+"/3)");},"Mines level 4 automatically mine\ndark energy at the cost of mana.",function(){return allBuildings.count_of_type(BT_MINE,4)>2;}),new Tutorial_Condition("Desert factor ≤ -4.0","Affects passive resource\nproduction from mines level 2+.",function(){return g_Factors.desertFactor<=-40;}),new Tutorial_Condition("Produce 0.5 dark energy/day","Dark energy production is affected\nby the desert factor just like stone.",function(){return darkEnergyProjectedNetIncome>=0.5;})]);
this.addG(mDone,[pf2Goal,new Tutorial_Condition(function(){var a=mithrilResource,b=g_TutorialProgress.mithril_needed();return"Have "+b+" mithril"+(a<b?" ("+a.toFixed(0)+"/"+b+")":"");},"Enchant stone into mithril!\nYou will need a lot of it.",mDone),new Tutorial_Condition("Expect this to take a loooong time","Slow & steady wins...",mDone)]);
this.addG(!1,[new Tutorial_Condition(function(){if(dayCount<dayToUnlockDarkEnergy){return"Reach day #"+dayToUnlockDarkEnergy;}var c=allSpells.by_name("Dark Attunement").castStat;return"Cast Dark Attunement 3 times"+(c<3?" ("+c+"/3)":"");},function(){if(dayCount<dayToUnlockDarkEnergy){return"";}return"It is cast at your house.";},function(){return dayCount>=dayToUnlockDarkEnergy&&allSpells.by_name("Dark Attunement").castStat>2;}),new Tutorial_Condition(function(){var b=allBuildings.count_of_type(BT_SHELTER);return"Build 1 shelter"+(b>0?"":" (0/1)");},"Shelters are built on any\ntiles with farms on them.",function(){return allBuildings.count_of_type(BT_SHELTER)>0;}),new Tutorial_Condition(function(){if(!allTiles.has_claimed(TT_MAP_EDGE)){return"Claim 1 map edge tile";}var b=allBuildings.count_of_type(BT_IRS);return"Build 1 IRS"+(b>0?"":" (0/1)");},function(){if(!allTiles.has_claimed(TT_MAP_EDGE)){return"Hint: Go left.";}return"The IRS can only be built on a\ntile next to the left edge of the map."+(allSpells.by_name("Dark Attunement").castStat<3?"\nIt's not unlocked yet though...":"");},function(){return allBuildings.count_of_type(BT_IRS)>0;})]);
this.addG(!1,[new Tutorial_Condition("Launch a rescue pod from the IRS","Using the IRS, follow the steps\nto launch a resuce pod.",function(){return evacuees+evacueesEnRoute>0;})]);
this.addG(!1,[new Tutorial_Condition("You completed the tutorial!","",undefined),new Tutorial_Condition("Continue rescuing evacuees...",function(){return"...until day #"+dayToRunEnd+"...";},undefined)]);
};
Tutorial_Progress_Counter.prototype.addG=function(s,a){this.goals.push(new Tutorial_Goal(s,a));};
Tutorial_Progress_Counter.prototype.disable_tutorial=function(){
this.general=this.irs=this.challenges=this.spells=this.swarm=this.controls=this.twoBldgs=-1;this.goals=[];};
Tutorial_Progress_Counter.prototype.mithril_needed=function(){
var a=0,b=0;allIRSDatas.forEach(function(D){a+=(D.engineType>0);b+=(D.rescuePodType>0);});return 50*(allBuildings.count_of_type(BT_SHELTER)<1)+50*(allIRSDatas.length<1)+50*(a<1)+35*(b<1);};
Tutorial_Progress_Counter.prototype.get_end_day_button_disabled=function(){if(foodResource<2){return!1;}return this.get_is_in_tutorial()&&this.general<7;};
Tutorial_Progress_Counter.prototype.get_spells_disabled=function(){return this.get_is_in_tutorial()&&this.general<9&&dayCount<250;};
Tutorial_Progress_Counter.prototype.get_rview_disabled=function(){return this.get_is_in_tutorial()&&this.general<6;};
Tutorial_Progress_Counter.prototype.get_challenges_disabled=function(){return this.get_is_in_tutorial()&&this.challenges<7;};
Tutorial_Progress_Counter.prototype.get_which_extra=function()
{
    if(currentScreen!=="main"){return"none";}
    if(this.irs===0&&allSpells.by_name("Dark Attunement").castStat>2){return"irs";}
    if(this.swarm===0&&dayCount>=80){return"swarm";}
    if(this.swarm===1&&dayCount>=230){return"slime";}
    if(this.controls===0&&dayCount>=50&&!this.get_rview_disabled()){return"controls";}
    if(this.twoBldgs===0&&(g_TechnologyManager.by_name("Desert Collectors").researched||g_TechnologyManager.by_name("Enchanting Table").researched)){return"2bldgs";}
    return"none";
};
g_TutorialProgress=new Tutorial_Progress_Counter();
} //Tutorial_Progress_Counter

//For more info, check older file versions
recalculate_building_effects = function()
{var pcm=pearlConsumptionMulti;
foodProduction=0;
foodProductionFromHouse=0;
foodProductionFromFarms=0;
foodInternalFromRibbon=0;
foodProjectedProductionFromTerraformers=0;
foodProductionMulti=1;
foodProductionMultiFromUCC=1+0.1*g_PersistentData.get_challenge_times_completed("UC");
foodProductionMultiFromAqueductsOriginal=1;
foodProductionMultiFromAqueducts=1;
foodProductionMultiFromIronTools=1;
foodProductionMultiFromInstaGrow=1;
foodConsumption=0;
foodConsumptionFromHouse=1;
foodConsumptionFromDragons=0;
foodConsumptionMulti=1;
foodConsumptionMultiFromSpice=1;
foodNetIncome=0;
foodBonusFromFishingOnReef=0;
foodGainedAtEachSpellCast=0;

manaProduction=0;
manaProductionFromCollectors=0;
manaProductionFromCollectionPower=0;
manaProductionFromHouse=0;
manaConsumption=0;
manaConsumptionFromAutocasting=0;
manaConsumptionFromMines=0;
manaConsumptionFromLifeSupport=10*currentlyInBackside;
manaConsumptionFromFarms=0;
manaProductionMulti=1;
manaProductionMultiFromMagicOre=1;
manaProductionMultiFromChallengeRules=1;
manaProductionMultiFromRuneStoneOriginal=1;
manaProductionMultiFromRuneStoneFinal=1;
manaProductionMultiFrom8YC=(dayCount<=100?mana_multi_8YC(g_PersistentData.get_challenge_times_completed("8Y")):1);
runeStoneEffectExponent=1;
manaProductionMultiFromH2O=1;
manaConsumptionMulti=1;
manaConsumptionMultiFromFans=1;
manaNetIncome=0;
manaAndGdFromSlimeMultiFrom8YC=pow(1.2,g_PersistentData.get_challenge_times_completed("8Y"));
manaFromSlimeMultiFromTech=1;
manaFromSlimeMulti=1;

pearlProduction=0;
pearlProductionFromReef=0;
pearlProductionFromH2O=0;
pearlConsumption=0;
pearlConsumptionFromLavaFreezers=0;
pearlProductionMulti=1;
pearlProductionMultiFromUltimate=g_PersistentData.get_upgrade_effect("PM");
pearlProductionMultiFromMultiShift=1;
pearlConsumptionMulti=1;
pearlConsumptionMultiFromFans=1;
pearlNetIncome=0;
pearlFromFishMulti=(1+g_TechnologyManager.by_name("Pearl Catcher").researched)*(1+g_TechnologyManager.by_name("Pearl Duplicator").researched)*(1+0.5*g_TechnologyManager.by_name("Pearl Maker").researched);
if(g_TechnologyManager.by_name("Pearl Finder").researched&&season===2){pearlFromFishMulti*=2;}

stoneGuaranteedProduction=0;
stoneProjectedProduction=0;
stoneProductionFromMines=0;
stoneProjectedIncomeFromLavaFreezers=0;
stoneProductionMulti=1;
stoneProductionMultiFromStonemover=1;
stoneProductionMultiFromMineralEnrichment=1;
stoneProductionMultiFromReefMagic=1;
stoneProductionMultiFromChallengeRules=1;
stoneProductionMultiFromCoolRock=1;
stoneConsumption=0;
stoneConsumptionFromRuneStone=0;
stoneConsumptionFromFurnaces=0;
stoneConsumptionMulti=1;
stoneConsumptionMultiFromGiants=g_Diplomacy.giants_get_cons_multi();
stoneNetIncome=0;
generalManualMiningMulti=1;

spiceConsumption=0;
spiceConsumptionFromHouse=0.4;
spiceConsumptionFromDragons=0;
spiceConsumptionFromMines=0;
spiceConsumptionFromInnovation=2*g_TechnologyManager.inn();
spiceConsumptionMulti=1;
spiceNetIncome=0;

gadoliniumProduction=0;
gadoliniumProductionFromMines=0;
gadoliniumProductionFromLavaFreezers=0;
gadoliniumProductionMulti=1;
gadoliniumProductionMultiFromUltimate=1;
gadoliniumNetIncome=0;
gadoliniumFromSlimeMultiFromHouse=1;
gadoliniumFromSlimeMultiFromFrost=1+0.5*(season===4);
gadoliniumFromSlimeMulti=1;

flameOrbProduction=0;
flameOrbProductionFromLavaFreezers=0;
flameOrbProductionFromFireplace=0;
flameOrbConsumption=0;
flameOrbConsumptionFromAutocasting=0;
flameOrbConsumptionFromFurnaces=0;
flameOrbConsumptionFromTerraformers=0;
flameOrbConsumptionFromEtD=0;
flameOrbConsumptionFromSeed=0;
flameOrbProductionMulti=1;
flameOrbProductionMultiFromH2O=1;
flameOrbConsumptionMulti=1;
flameOrbConsumptionMultiFromReef=1;
flameOrbConsumptionMultiFromSCB=1;
flameOrbNetIncome=0;

ironProjectedProduction=0;
ironProjectedIncomeFromFurnaces=0;
ironProjectedIncomeFromLavaFreezers=0;
ironProductionMulti=1;
ironProductionMultiFromUltimate=1;
ironProductionMultiFromHouse=1;
ironProductionMultiFromMineralEnrichment=1;
ironProductionMultiFromSynergy=1;
ironProductionMultiFromSpecialCircuitBox=1;
ironProductionMultiFromGiants=g_Diplomacy.giants_get_prod_multi();
ironConsumption=0;
ironConsumptionFromMithrilMines=0;
ironConsumptionFromUpkeep=0;
ironUpkeepFromHouses=0;
ironUpkeepFromFarms=0;
ironUpkeepFromCollectors=0;
ironUpkeepFromShelters=0;
ironUpkeepFromMines=0;
ironUpkeepFromMithrilMines=0;
ironUpkeepFromTables=0;
ironUpkeepFromIRSs=0;
ironUpkeepFromLavaFreezers=0;
ironUpkeepFromCoolingFans=0;
ironProjectedNetIncome=0;

goldenAppleProjectedProduction=0;
goldenAppleProjectedIncomeFromFarms=0;
goldenAppleProjectedIncomeDueToTables=0;
goldenAppleProductionMulti=1;
goldenAppleProductionMultiFromHouse=1;
goldenAppleProductionMultiFromTF=1;
goldenAppleProductionMultiFromUltimate=g_PersistentData.get_upgrade_effect("GA");
goldenAppleNetIncome=0;

darkEnergyProjectedBaseIncome=0;
darkEnergyProjectedIncomeFromMines=0;
darkEnergyProjectedIncomeFromMithrilMines=0;
darkEnergyProjectedIncomeFromDarkDesert=0;
darkEnergyProductionFromTF=0;
darkEnergyProductionMulti=1;
darkEnergyProductionMultiFromDEC=1;
darkEnergyProductionMultiFromTurtles=pow(1.1,allCreatures.fedAirTurtle);
darkEnergyProductionMultiFromMultiShift=1;
var level3FurnaceCount=0;
darkEnergyProductionMultiFromFurnacesOriginal=1;
darkEnergyProductionMultiFromFurnaces=1;
darkEnergyProductionMultiFromAttunement=1;
darkEnergyProductionMultiFromChallengeRules=1;
darkEnergyProjectedNetIncome=0;
darkEnergyFuelMultiFromFancyGlove=1;

bioOrbProjectedProduction=0;
bioOrbProductionFromInstaGrow=0;
bioOrbProjectedProductionFromSeed=0;
bioOrbProductionMulti=1;
bioOrbConsumption=0;
bioOrbConsumptionFromRibbon=0;
bioOrbNetIncome=0;

mithrilProductionFrom4PS=0;
mithrilGuaranteedProduction=0;
mithrilProjectedBaseIncome=0;
mithrilProjectedIncomeFromMithrilMines=0;
mithrilProjectedIncomeFromFurnaces=0;
mithrilProductionMulti=1;
mithrilProductionMultiFromReef=1;
mithrilProductionMultiFromDrillBit=1;
mithrilProjectedFinalIncome=0;

evacueesEnRoute=0;
maxEvacuees=0;
maxEvacueesBase=0;
maxEvacueesFromSRCs=0;
maxEvacueesFromShelters=0;
maxEvacueesFromWifi=0;
maxEvacueesFromReef=0;
maxEvacueesMulti=1;
maxEvacueesMultiFromHouse=1;
maxEvacueesMultiFromMultiShift=1;
maxEvacueesMultiFromHeatingSystem=1+0.05*g_TechnologyManager.by_name("Heating System").researched;
maxEvacueesMultiFromZoning=g_TechnologyManager.by_name("High-Density Zoning").researched?g_PersistentData.get_upgrade_effect("HA"):1;
maxEvacueesMultiFromFoodBank=1+0.0003*foodGivenToBank;

maxEvacueesRaw=0;

allSpells.spellCostMulti=1;
allSpells.payUsingFire=!1;

innovationMulti=1+0.01*sqrt(10*evacuees)*g_TechnologyManager.inn();
innovationPower=innovationLastConsumed/(spiceConsumptionFromInnovation||1);
lotsOfThingsMultiFromTerraformers=1;
fastererness=1;
textbookTier1Multi=1;
textbookTier3Multi=1;
foodColoringMulti=1;
tier3MultiFromUpkeep=(upkeepLastSatisfiedRatio+1)/2;
tier3MultiFrom3B=g_PersistentData.get_upgrade_effect("3B");
shelterCostMultiFromPizza=1;
resourcesOnSpellCast=0;
enchantingUltimBioOrbPercent=g_PersistentData.get_upgrade_effect("BF")*allBuildings.count_of_type(BT_FARM);

mithrilEnchantingMultiFromSwamp=g_PersistentData.get_upgrade_effect("MS");
enchantingProductMultiFromTurtles=pow(1.1,allCreatures.fedSeaTurtle);
mithrilEnchantingMultiFromMines=1;
    
//Challenge rewards:
maxEvacueesFromSRCs=5*g_PersistentData.get_challenge_times_completed("SR");
darkEnergyProductionMultiFromDEC*=pow(1.04,g_PersistentData.get_challenge_times_completed("DE"));
    
//Challenge rules:
switch(g_PersistentData.currentChallenge)
{
case"DAC":
    manaProductionMultiFromChallengeRules=0.7;
    break;
case"5FC":
    if(g_PersistentData.get_challenge_times_completed("5F")>= 2)
    {stoneProductionMultiFromChallengeRules=0.9;}
    break;
case"RWC":
    if(g_PersistentData.get_challenge_times_completed("RW")>=2)
    {darkEnergyProductionMultiFromChallengeRules=0.8;}
    break;
}
    
    if(season===4)
    {flameOrbConsumptionFromFrosthour=flameOrbResource*0.05;bioOrbConsumptionFromFrosthour=bioOrbResource*0.05;}
    else
    {flameOrbConsumptionFromFrosthour=0;bioOrbConsumptionFromFrosthour=0;}
    
    g_Diplomacy.cybermindTradeCosts=[100,300,600];
    g_ArtifactManager.activeSlots=3;
    g_ArtifactManager.on_recalculate();
    var DACCount=g_PersistentData.get_challenge_times_completed("DA");
    if(g_PersistentData.currentChallenge==="DAC"&&DACCount>=3){g_Diplomacy.cybermindTradeCosts[0]+=5+15*DACCount;g_Diplomacy.cybermindTradeCosts[1]+=15+45*DACCount;g_Diplomacy.cybermindTradeCosts[2]+=30+90*DACCount;}
    
    if(season===0)
    {ironProductionMultiFromUltimate*=g_PersistentData.get_upgrade_effect("IS");}
    
    flameHeartMulti=g_TechnologyManager.camel_technology_by_name("Flame Heart").researched?sqrt(max(g_Factors.get_plains_factor(),0)+1):1;
    enchantingTableSynergyMulti=1+0.4*log(allBuildings.count_of_type(BT_ENCHANTING_TABLE))*g_TechnologyManager.by_name("Enchanting Table Synergy").researched;
    manaFromSlimeMultiFromTech*=(1+g_TechnologyManager.by_name("Slime Separation").researched)*(1+g_TechnologyManager.by_name("Slime Stabilizer").researched);
    manaFromSlimeMulti*=manaAndGdFromSlimeMultiFrom8YC*manaFromSlimeMultiFromTech*manaProductionMultiFromFrosthour;
    ironProductionMultiFromSynergy=g_PersistentData.currentChallenge==="UCC"?1:(1+0.015*allBuildings.count_of_type(BT_FURNACE)*g_TechnologyManager.by_name("Furnace Synergy").researched);
    foodConsumptionFromBank=10*g_TechnologyManager.by_name("Food Bank").researched;
    
    allIRSDatas.forEach(function(d){if(d.timeUntilReturn>-1){evacueesEnRoute+=d.capacityAtLaunch;}});
    
    g_ReefData.on_recalculate_effects();
    
    var H2O=g_ArtifactManager.by_abbreviation("H2O");
    if(H2O.active&&allSpells.by_name("Water Music").durationLeft>0)
    {
        manaProductionMultiFromH2O=1.3+0.1*H2O.level;
        flameOrbProductionMultiFromH2O=0.9-0.4/sqrt(0.1*sq(H2O.level)-0.2*H2O.level+1.1);
    }
    
    var swarmAffected=false,fanSum=1,darkDesertResearched=g_TechnologyManager.by_name("Dark Desert").researched,goldenTables=g_TechnologyManager.camel_technology_by_name("Golden Tables").researched,upgr_CPU=g_PersistentData.get_upgrade_effect("CP"),minEnr=allSpells.by_name("Mineral Enrichment").durationLeft>0,i=0,wifi=g_Diplomacy.get_is_wifi_active(),ucc=g_PersistentData.currentChallenge==="UCC";
    for(i=0;i<allBuildings.length;i+=1)
    {
        //Temporary local reference:
        var bldg=allBuildings[i];
        var frontTileType=allTiles[bldg.tileIndex].tileType,backTileType=allTiles[bldg.tileIndex].backsideTileType;
        switch( bldg.buildingType )
        {
        case BT_HOUSE:
            foodProductionFromHouse+=1+5*(bldg.upgradeLevel>=4);
            gadoliniumFromSlimeMultiFromHouse*=bldg.upgradeLevel;
            flameOrbProductionFromFireplace+=(season===1)*g_PersistentData.get_upgrade_effect("FP");
            if(bldg.upgradeLevel>1)
            {manaProductionFromHouse+=2;ironProductionMultiFromHouse*=1.5;if(bldg.upgradeLevel>2){maxEvacueesMultiFromHouse*=1.1;if(bldg.upgradeLevel===5){goldenAppleProductionMultiFromHouse=1+0.0012*tilesClaimed;}}if(ucc){ironUpkeepFromHouses+=sq(bldg.upgradeLevel-1);}}
            break;
case BT_FARM:
    if(bldg.destroyed){bldg.resourceProduction=0;break;}
    if(ucc&&bldg.upgradeLevel>2)
    {ironUpkeepFromFarms+=bldg.upgradeLevel-2;}
    if(season===3)
    {bldg.resourceProduction=farm_production_winter(bldg.upgradeLevel);}
    else
    {bldg.resourceProduction=farm_production_nonwinter(bldg.upgradeLevel);}
    foodProductionFromFarms+=bldg.resourceProduction;
    if(season!==4&&bldg.upgradeLevel>=4&&g_ToggleButtonManager.goldenFarmToggle)
    {manaConsumptionFromFarms+=bldg.upgradeLevel>4?9:5;goldenAppleProjectedIncomeFromFarms+=bldg.upgradeLevel>4?0.03:0.01;if(goldenTables&&building_level_on_tile(bldg.tileIndex,BT_ENCHANTING_TABLE)>=4){goldenAppleProjectedIncomeDueToTables+=0.02;}}
    break;
        case BT_COLLECTOR:
            if(ucc&&bldg.upgradeLevel>2)
            {ironUpkeepFromCollectors+=sqrt(bldg.upgradeLevel-2);}
            if(frontTileType===TT_SLIMED){bldg.resourceProduction=0;break;}
            swarmAffected=!1;
            for(var j=0;j<allCreatures.length;j+=1)
            {if(allCreatures[j].creatureType!==CT_SWARM){continue;}if(allCreatures[j].tileAt===bldg.tileIndex){swarmAffected=!0;break;}}
            if(swarmAffected){bldg.resourceProduction=0;break;}
            if(frontTileType===TT_SWAMP)
            {bldg.resourceProduction=(season===3?0.21:0.2)*bldg.upgradeLevel;manaProductionFromCollectors+=bldg.resourceProduction;bldg.resourceProduction+=upgr_CPU;manaProductionFromCollectionPower+=upgr_CPU;}
            else if(frontTileType===TT_DESERT)
            {bldg.resourceProduction=(season===3?0.08:0.05)*bldg.upgradeLevel;manaProductionFromCollectors+=bldg.resourceProduction;bldg.resourceProduction+=upgr_CPU;manaProductionFromCollectionPower+=upgr_CPU;}
            else
            {bldg.resourceProduction=0;}
            break;
        case BT_MINE:
            if(bldg.upgradeLevel===1){bldg.resourceProduction=0;break;}
            if(ucc&&bldg.upgradeLevel>2){ironUpkeepFromMines+=0.1*bldg.upgradeLevel;}
            bldg.resourceProduction=0.1*sqrt(abs(g_Factors.get_desert_factor()))+0.1 *(bldg.upgradeLevel>2);
            bldg.resourceProduction*=pow(allTiles[bldg.tileIndex].tier+1,g_PersistentData.get_upgrade_effect("SM"));
            if(frontTileType===TT_LAKE){bldg.resourceProduction*=0.5;}
            stoneProductionFromMines+=bldg.resourceProduction;
            if(bldg.upgradeLevel>3&&g_ToggleButtonManager.darkMineToggle)
            {
                manaConsumptionFromMines+=1.5+3*(bldg.upgradeLevel===5);
                var rawDEProduction=bldg.resourceProduction*0.25;
                if(frontTileType===TT_LAKE)
                {/*Underwater mines--20% more dark energy*/rawDEProduction*=2.4;}
                if(bldg.upgradeLevel===5)
                {
                    rawDEProduction*=5;
                    darkEnergyProjectedIncomeFromDarkDesert+=0.2*(darkDesertResearched&&frontTileType===TT_DESERT);
                }
                darkEnergyProjectedIncomeFromMines+=rawDEProduction;
            }
            break;
        case BT_FURNACE:
            level3FurnaceCount+=(bldg.upgradeLevel>=3);if(!g_ToggleButtonManager.furnaceToggle||frontTileType===TT_SLIMED){break;}if(!g_ResourcePane.flameOrbVisible){break;}stoneConsumptionFromFurnaces+=furnace_stone_consumption(bldg.upgradeLevel)*fastererness;flameOrbConsumptionFromFurnaces+=furnace_flame_orb_consumption(bldg.upgradeLevel)*fastererness;ironProjectedIncomeFromFurnaces+=furnace_iron_production(bldg.upgradeLevel)*fastererness;mithrilProjectedIncomeFromFurnaces+=(0.5*(bldg.upgradeLevel>=4)+0.3*(bldg.upgradeLevel>=5))*fastererness;
            break;
        case BT_TERRAFORMER:case BT_BACKSIDE_TERRAFORMER:if(bldg.buildingType===BT_TERRAFORMER&&frontTileType===TT_SLIMED){break;}
            foodProjectedProductionFromTerraformers+=foodInternalFromRibbon*log(bldg.upgradeLevel+1);
            if(bldg.upgradeLevel<4||!g_ToggleButtonManager.terraformerLvl4Toggle){break;}
            flameOrbConsumptionFromTerraformers+=0.5;
            lotsOfThingsMultiFromTerraformers+=0.01;
            break;
        case BT_ENCHANTING_TABLE:
            if(ucc&&bldg.upgradeLevel>2){ironUpkeepFromTables+=0.1*(bldg.upgradeLevel+7);}
            break;
        case BT_IRS:
            if(ucc){ironUpkeepFromIRSs+=sqrt(bldg.upgradeLevel)*0.5;}
            break;
        case BT_SHELTER:
            maxEvacueesFromShelters+=25*pow(2,bldg.upgradeLevel);
            maxEvacueesFromWifi+=wifi;
            if(ucc){ironUpkeepFromShelters+=pow(bldg.upgradeLevel,1.5);}
            break;
        case BT_MITHRIL_MINE:
            if(ucc&&g_ToggleButtonManager.mithrilMineToggle){ironUpkeepFromMithrilMines+=0.3*bldg.upgradeLevel;}
            mithrilEnchantingMultiFromMines+=0.05*(bldg.upgradeLevel>1);
            var tT=allTiles[bldg.tileIndex].backsideTileType;
            var ttMulti=mithril_mine_TT_multi(tT);
            if(!g_ToggleButtonManager.mithrilMineToggle||ttMulti===0)
            {bldg.resourceProduction=0;break;}
            ironConsumptionFromMithrilMines+=mithril_mine_iron_consumption(bldg.upgradeLevel)*ttMulti;
            bldg.resourceProduction=0.2*sqrt(tilesClaimed*bldg.upgradeLevel)*ttMulti;
            mithrilProjectedIncomeFromMithrilMines+=bldg.resourceProduction;
            if(bldg.upgradeLevel>2)
            {gadoliniumProductionFromMines+=(0.1+0.05*(season===3))*ttMulti;}
            if(bldg.upgradeLevel>3&&g_ToggleButtonManager.mithrilMineDarkToggle){spiceConsumptionFromMines+=3+1.75*(bldg.upgradeLevel===5);darkEnergyProjectedIncomeFromMithrilMines+=(bldg.upgradeLevel===5?2:1)*mithril_mine_deTT_multi(tT);}
            break;
case BT_LAVA_FREEZER:if(bldg.destroyed){bldg.resourceProduction=0;fanSum+=bldg.upgradeLevel;if(ucc){ironUpkeepFromCoolingFans+=sqrt(bldg.upgradeLevel);}break;}if(ucc){ironUpkeepFromLavaFreezers+=bldg.upgradeLevel;}if(backTileType!==TT_LAVA){bldg.resourceProduction=0;break;}if(g_ToggleButtonManager.lavaFreezerToggle){if(minEnr){bldg.resourceProduction=0.7*lava_freezer_stone_production(bldg.upgradeLevel);pearlConsumptionFromLavaFreezers+=lava_freezer_pearl_consumption(bldg.upgradeLevel);ironProjectedIncomeFromLavaFreezers+=bldg.resourceProduction;}else{bldg.resourceProduction=lava_freezer_stone_production(bldg.upgradeLevel);pearlConsumptionFromLavaFreezers+=lava_freezer_pearl_consumption(bldg.upgradeLevel);stoneProjectedIncomeFromLavaFreezers+=bldg.resourceProduction;}}else{if(minEnr){bldg.resourceProduction=0.1*lava_freezer_flame_orb_production(bldg.upgradeLevel);gadoliniumProductionFromLavaFreezers+=bldg.resourceProduction;}else{bldg.resourceProduction=lava_freezer_flame_orb_production(bldg.upgradeLevel);flameOrbProductionFromLavaFreezers+=bldg.resourceProduction;}}break;
        }
    }
    allSpells.forEach(function(s){if(s.durationLeft>0){s.on_recalculation();}});
    
    if(ucc){var frac=dayCount/dayToRunEnd;
    ironUpkeepFromFarms=0.2*pow(ironUpkeepFromFarms,0.7)*frac;
    ironUpkeepFromCollectors=0.2*pow(ironUpkeepFromCollectors,0.8)*sqrt(frac);
    ironUpkeepFromShelters=1.14*pow(ironUpkeepFromShelters,0.8)*frac;
    ironUpkeepFromMines=pow(ironUpkeepFromMines,0.2)*sq(frac);
    ironUpkeepFromMithrilMines=pow(ironUpkeepFromMithrilMines,0.2)*sq(frac);
    ironUpkeepFromTables=log(ironUpkeepFromTables+1)/3*pow(frac,0.2);
    ironUpkeepFromIRSs*=(frac+1)/2;
    ironUpkeepFromLavaFreezers=0.6*pow(ironUpkeepFromLavaFreezers,0.4)*(frac+1)/2;
    ironUpkeepFromCoolingFans=0.15*pow(ironUpkeepFromCoolingFans,0.4)*(frac+1)/2;
    ironConsumptionFromUpkeep+=ironUpkeepFromHouses+ironUpkeepFromFarms+ironUpkeepFromCollectors+ironUpkeepFromShelters+ironUpkeepFromMines+ironUpkeepFromMithrilMines+ironUpkeepFromTables+ironUpkeepFromIRSs+ironUpkeepFromLavaFreezers+ironUpkeepFromCoolingFans;}
    if(g_TechnologyManager.by_name("Lithomancy").researched){var tempC=allSpells.by_name("Stonemover").manaCost;manaConsumptionFromAutocasting=(allSpells.payUsingFire?0:tempC*allSpells.spellCostMulti/5);flameOrbConsumptionFromAutocasting=(allSpells.payUsingFire?tempC*allSpells.spellCostMulti/5:0);}
    foodProduction=foodProductionFromHouse+foodProductionFromFarms+foodProjectedProductionFromTerraformers;
    if(g_Dragon.tileAt>-1)
    {/*Dragon must eat*/foodConsumptionFromDragons+=5;spiceConsumptionFromDragons+=2;}
    
    foodConsumption=foodConsumptionFromHouse+foodConsumptionFromDragons+foodConsumptionFromBank;
    manaProduction=manaProductionFromCollectors+manaProductionFromCollectionPower+manaProductionFromHouse;
    manaConsumption=manaConsumptionFromMines+manaConsumptionFromLifeSupport+manaConsumptionFromFarms+manaConsumptionFromAutocasting;
    pearlProduction=pearlProductionFromReef+pearlProductionFromH2O;
    pearlConsumption=pearlConsumptionFromLavaFreezers;
    stoneGuaranteedProduction=stoneProductionFromMines;
    stoneProjectedProduction=stoneGuaranteedProduction+stoneProjectedIncomeFromLavaFreezers;
    stoneConsumption=stoneConsumptionFromRuneStone+stoneConsumptionFromFurnaces;
    spiceProjectedProduction=flameOrbConsumptionFromEtD;
    spiceConsumption=spiceConsumptionFromHouse+spiceConsumptionFromDragons+spiceConsumptionFromInnovation+spiceConsumptionFromMines;
    gadoliniumProduction=gadoliniumProductionFromMines+gadoliniumProductionFromLavaFreezers;
    flameOrbProduction=flameOrbProductionFromLavaFreezers+flameOrbProductionFromFireplace;
    flameOrbConsumption=flameOrbConsumptionFromFrosthour+flameOrbConsumptionFromFurnaces+flameOrbConsumptionFromTerraformers+flameOrbConsumptionFromEtD+flameOrbConsumptionFromSeed+flameOrbConsumptionFromAutocasting;
    ironProjectedProduction=ironProjectedIncomeFromFurnaces+ironProjectedIncomeFromLavaFreezers;
    ironConsumption=ironConsumptionFromMithrilMines+ironConsumptionFromUpkeep;
    goldenAppleProjectedProduction=goldenAppleProjectedIncomeFromFarms+goldenAppleProjectedIncomeDueToTables;
    darkEnergyProjectedBaseIncome=darkEnergyProductionFromTF+darkEnergyProjectedIncomeFromMines+darkEnergyProjectedIncomeFromDarkDesert+darkEnergyProjectedIncomeFromMithrilMines;
    bioOrbProjectedProduction=bioOrbProductionFromInstaGrow+bioOrbProjectedProductionFromSeed;
    bioOrbConsumption=bioOrbConsumptionFromFrosthour+bioOrbConsumptionFromRibbon;
    mithrilGuaranteedProduction=mithrilProductionFrom4PS;
    mithrilProjectedBaseIncome=mithrilGuaranteedProduction+mithrilProjectedIncomeFromMithrilMines+mithrilProjectedIncomeFromFurnaces;
    maxEvacueesBase=maxEvacueesFromSRCs+maxEvacueesFromShelters+maxEvacueesFromWifi+maxEvacueesFromReef+2000*greetedCosmic;
    
    if(g_TechnologyManager.by_name("Aqueducts").researched)
    {foodProductionMultiFromAqueductsOriginal=0.15*sqrt(max(g_Factors.get_lake_factor(),0))+1;foodProductionMultiFromAqueducts=pow(foodProductionMultiFromAqueductsOriginal, g_PersistentData.get_upgrade_effect("AP"));}
    if(g_TechnologyManager.by_name("Better Farming Tools").researched&&season!==3)
    {foodProductionMultiFromIronTools=1.25;}
    if(g_TechnologyManager.by_name("Magic Ore").researched)
    {manaProductionMultiFromMagicOre=0.03*(allBuildings.count_of_type(BT_MINE)+allBuildings.count_of_type(BT_MITHRIL_MINE))+1;}
    if(g_TechnologyManager.by_name("Hardened Drill Bit").researched)
    {mithrilProductionMultiFromDrillBit=1.4;}
    if(spiceResource>0){foodConsumptionMultiFromSpice=0.8;}
    darkEnergyProductionMultiFromFurnacesOriginal=1+0.18*sqrt(level3FurnaceCount);
    darkEnergyProductionMultiFromFurnaces=pow(darkEnergyProductionMultiFromFurnacesOriginal,g_PersistentData.get_upgrade_effect("EP"));
    var fsf=fanSum*(season===4?100:1);
    pearlConsumptionMultiFromFans=0.75/sqrt(sqrt(fsf))+0.25;
    if(g_TechnologyManager.by_name("Mana Exchanger").researched){
    manaConsumptionMultiFromFans=0.35/sqrt(fsf)+0.65;}
    generalManualMiningMulti=stoneProductionMultiFromCoolRock*(season===4?100:1);
    if(g_TechnologyManager.by_name("Stonelifter").researched)
    {generalManualMiningMulti*=stoneProductionMultiFromStonemover;}
    if(g_TechnologyManager.by_name("Multiplier Shift").researched)
    {pearlProductionMultiFromMultiShift=0.93;darkEnergyProductionMultiFromMultiShift=0.93;maxEvacueesMultiFromMultiShift=1.14;}
    gadoliniumFromSlimeMulti*=manaAndGdFromSlimeMultiFrom8YC*gadoliniumFromSlimeMultiFromCyber*gadoliniumFromSlimeMultiFromHouse*gadoliniumFromSlimeMultiFromFrost;
    gadoliniumProductionMultiFromUltimate=pow(gadoliniumFromSlimeMulti,g_PersistentData.get_upgrade_effect("GM"));
    runeStoneEffectExponent=stoneLastConsumedByRuneStone/(stoneConsumptionFromRuneStone||1);
    manaProductionMultiFromRuneStoneFinal=pow(manaProductionMultiFromRuneStoneOriginal,runeStoneEffectExponent);
    var innovationFinal=pow(innovationMulti,innovationPower);
    foodProductionMulti*=foodProductionMultiFromUCC*foodProductionMultiFromAqueducts*foodProductionMultiFromIronTools*foodProductionMultiFromInstaGrow*foodAppleProductionMultiFromFrosthour*textbookTier1Multi*innovationFinal;
    foodConsumptionMulti*=foodConsumptionMultiFromSpice;
    manaProductionMulti*=manaProductionMultiFromMagicOre*manaProductionMultiFromChallengeRules*manaProductionMultiFromCyber*manaProductionMultiFromRuneStoneFinal*manaProductionMultiFromFrosthour*textbookTier1Multi*innovationFinal*manaProductionMultiFromH2O*manaProductionMultiFrom8YC;
    manaConsumptionMulti*=manaConsumptionMultiFromFans;
    pearlProductionMulti*=pearlProductionMultiFromFrosthour*pearlProductionMultiFromUltimate*pearlProductionMultiFromMultiShift*textbookTier1Multi*innovationFinal;
    pearlConsumptionMulti*=pearlConsumptionMultiFromFans;
    stoneProductionMulti*=stoneProductionMultiFromStonemover*stoneProductionMultiFromMineralEnrichment*stoneProductionMultiFromReefMagic*stoneProductionMultiFromChallengeRules*stoneProductionMultiFromCoolRock*textbookTier1Multi*innovationFinal*stoneProductionMultiFromFrosthour;
    stoneConsumptionMulti*=stoneConsumptionMultiFromGiants;
    spiceConsumptionMulti*=lotsOfThingsMultiFromTerraformers;
    gadoliniumProductionMulti*=gadoliniumProductionMultiFromUltimate;
    flameOrbProductionMulti*=flameOrbProductionMultiFromH2O*dissipation();
    flameOrbConsumptionMulti*=flameOrbConsumptionMultiFromReef*flameOrbConsumptionMultiFromSCB;
    ironProductionMulti*=ironMithrilProductionMultiFromFrosthour*ironProductionMultiFromUltimate*ironProductionMultiFromHouse*ironProductionMultiFromMineralEnrichment*ironProductionMultiFromSynergy*ironProductionMultiFromSpecialCircuitBox*ironProductionMultiFromGiants;
    goldenAppleProductionMulti*=tier3MultiFromUpkeep*lotsOfThingsMultiFromTerraformers*goldenAppleProductionMultiFromHouse*goldenAppleProductionMultiFromTF*foodAppleProductionMultiFromFrosthour*goldenAppleProductionMultiFromUltimate*textbookTier3Multi*tier3MultiFrom3B;
    darkEnergyProductionMulti*=darkEnergyProductionMultiFromFrosthour*darkEnergyProductionMultiFromDEC*tier3MultiFromUpkeep*darkEnergyProductionMultiFromCyber*darkEnergyProductionMultiFromFurnaces*darkEnergyProductionMultiFromTurtles*darkEnergyProductionMultiFromAttunement*darkEnergyProductionMultiFromChallengeRules*textbookTier3Multi*darkEnergyProductionMultiFromMultiShift*tier3MultiFrom3B;
    bioOrbProductionMulti*=tier3MultiFromUpkeep*textbookTier3Multi*tier3MultiFrom3B;
    mithrilProductionMulti*=ironMithrilProductionMultiFromFrosthour*tier3MultiFromUpkeep*mithrilProductionMultiFromReef*lotsOfThingsMultiFromTerraformers*mithrilEnchantingMultiFromSwamp*mithrilProductionMultiFromDrillBit*textbookTier3Multi*tier3MultiFrom3B;
    maxEvacueesMulti*=maxEvacueesMultiFromHouse*maxEvacueesMultiFromHeatingSystem*maxEvacueesMultiFromZoning*maxEvacueesMultiFromFoodBank;
    
    foodNetIncome=foodProduction*foodProductionMulti-foodConsumption*foodConsumptionMulti;
    manaNetIncome=manaProduction*manaProductionMulti-manaConsumption*manaConsumptionMulti;
    pearlNetIncome=pearlProduction*pearlProductionMulti-pearlConsumption*pearlConsumptionMulti;
    stoneNetIncome=stoneProjectedProduction*stoneProductionMulti-stoneConsumption*stoneConsumptionMulti;
    spiceNetIncome=spiceProjectedProduction-spiceConsumption*spiceConsumptionMulti;
    gadoliniumNetIncome=gadoliniumProduction*gadoliniumProductionMulti;
    flameOrbNetIncome=flameOrbProduction*flameOrbProductionMulti-flameOrbConsumption*flameOrbConsumptionMulti;
    ironProjectedNetIncome=ironProjectedProduction*ironProductionMulti-ironConsumption;
    goldenAppleNetIncome=goldenAppleProjectedProduction*goldenAppleProductionMulti;
    darkEnergyProjectedNetIncome=darkEnergyProjectedBaseIncome*darkEnergyProductionMulti;
    bioOrbNetIncome=bioOrbProjectedProduction*bioOrbProductionMulti-bioOrbConsumption;
    mithrilProjectedFinalIncome=mithrilProjectedBaseIncome*mithrilProductionMulti;
    maxEvacueesRaw=maxEvacueesBase*maxEvacueesMulti;
    maxEvacuees=floor(maxEvacueesRaw);
    g_TechnologyManager.nonCamelTechs.forEach(function(t){t.on_recalculate();});
    if(g_TutorialProgress.get_is_in_tutorial()){g_TutorialProgress.check_goals();}
};

var on_season_changed=function(oldSeason){
if(season===4){g_PersistentData.on_enter_frosthour();allCreatures.on_enter_frosthour();allSpells.by_name("Water Music").description=WM_SPELL_DESC[1];allSpells.by_name("Insta-Grow").description=IG_SPELL_DESC[1];g_Diplomacy.camelsStanding-=1;g_ConstructionManager.on_tile_selected();daysUntilSwarmArrival=max(daysUntilSwarmArrival,27);foodAppleProductionMultiFromFrosthour=0;manaProductionMultiFromFrosthour=1.5;pearlProductionMultiFromFrosthour=0;stoneProductionMultiFromFrosthour=2;ironMithrilProductionMultiFromFrosthour=3;darkEnergyProductionMultiFromFrosthour=5;}if(oldSeason===4){allSpells.by_name("Water Music").description=WM_SPELL_DESC[0];allSpells.by_name("Insta-Grow").description=IG_SPELL_DESC[0];foodAppleProductionMultiFromFrosthour=5;manaProductionMultiFromFrosthour=1;pearlProductionMultiFromFrosthour=3;stoneProductionMultiFromFrosthour=1;ironMithrilProductionMultiFromFrosthour=1;darkEnergyProductionMultiFromFrosthour=1;enchantingProductMultiFromFrosthour=3;}else if(oldSeason===0){foodAppleProductionMultiFromFrosthour=1;pearlProductionMultiFromFrosthour=1;enchantingProductMultiFromFrosthour=1;}};

{
//For more info, check older file versions:
var adjust_cost_text=function(o,m,n){if(n===undefined){n=3;}return m===1?o:(o*m).toFixed(n);};
var Construction_Manager=function(){this.allowedTypes=[];this.currentlyViewing=0;};
Construction_Manager.prototype.draw = function()
{
    var index=building_on_tile(selectedTile,this.currentlyViewing),nameStr="",yDraw=144,level=(index>-1)?allBuildings[index].upgradeLevel:1,frontType=allTiles[selectedTile].tileType,backType=allTiles[selectedTile].backsideTileType;
    //Image centerpoint is (200,72)
    switch( this.currentlyViewing )
    {
    case BT_FARM:
        noStroke();if(index>-1&&allBuildings[index].destroyed){fill(255,192,0);triangle(168,40,216,40,168,104);triangle(232,40,216,104,232,104);if(level>2){fill(128,40,40);rect(188,52,8,24);if(level>4){rect(220,52,8,24);}}}else{fill(128,255,0);rect(168,40,64,64);if(level>2){fill(255,0,0);rect(184,40,16,48);if(level>4){rect(216,40,16,48);}}}if(level>1){fill(255,255,0);rect(168,40,16,64);if(level>3){rect(200,40,16,64);}}fill(0,0,0);textSize(18);textAlign(CENTER,BASELINE);nameStr="Farm";if(index>-1){nameStr+=" lvl. "+level;}text("~"+nameStr+"~",width/2,128);textSize(12);textAlign(LEFT,BASELINE);text("A field of crops, yielding edible grains & vegetables.",40,yDraw);yDraw+=16;if(index>-1&&allBuildings[index].destroyed){text("All of the crops were eaten by the swarm.",40,yDraw);yDraw+=16;text("Grows no food.",40,yDraw);yDraw+=16;}else{text("Grows "+farm_production_nonwinter(level)+" food per day, except in winter.",40,yDraw);yDraw+=16;text("Grows "+farm_production_winter(level)+" food per day during winter.",40,yDraw);yDraw+=16;if(level===3&&g_TechnologyManager.camel_technology_by_name("Golden Seeds").researched){yDraw+=16;text("Upgrade to lvl. 4 to begin harvesting "+(g_ResourcePane.goldenAppleVisible?"golden apple.":"a new resource."),40,yDraw);yDraw+=16;}else if(level>3){text("Consumes "+(level>4?9:5)+" mana per day to produce "+(level>4?0.03:0.01)+" golden apple per day.",40,yDraw);yDraw+=16;if(g_TechnologyManager.camel_technology_by_name("Golden Tables").researched&&building_level_on_tile(selectedTile,BT_ENCHANTING_TABLE)>=4){text("+0.02 golden apple/day from the ench. table on this tile",56,yDraw);yDraw+=16;}if(allBuildings[0].upgradeLevel>4){text("Doesn't produce golden apple in frosthour.",56,yDraw);yDraw+=16;}}}if(index===-1){yDraw+=16;text("Cost to build: "+(5+g_PersistentData.get_upgrade_effect("F1"))+" food",96,yDraw);yDraw+=16;}else if(allBuildings[index].destroyed){yDraw+=16;text("Cost to repair: "+(6*(level>=3)+4+g_PersistentData.get_upgrade_effect("F1"))+" food",96,yDraw);yDraw+=16;
if(level===1&&!g_PersistentData.get_has_completed_1_challenge()&&creatures_of_type(CT_SWARM)>4){fill(255*sq(sin(6*globalCyclicAnimation)),0,0);text("If you repair now, it will likely get destroyed again.",64,yDraw);yDraw+=16;fill(0);}}else if(level===1){if(g_TechnologyManager.camel_technology_by_name("High-Yield Seeds").researched){var pC=6+g_PersistentData.get_upgrade_effect("F2");yDraw+=16;text("Cost to upgrade: 3 food, "+(pC>0?pC+" pearl, ":"")+"3 stone",96,yDraw);yDraw+=16;}else if(g_Diplomacy.totalSpiceGained>=10){yDraw+=16;text("To upgrade: do more diplomacy",96,yDraw);yDraw+=16;}}else if(level===2&&g_TechnologyManager.by_name("Farm Lvl. 3").researched){var b=(10-2*g_TechnologyManager.by_name("Slightly Cheaper Farms").researched);yDraw+=16;text("Cost to upgrade: 60 food, "+adjust_cost_text(b,farm_bio_orb_cost_multi())+" bio-orb",96,yDraw);yDraw+=16;}else if(level===3&&g_TechnologyManager.camel_technology_by_name("Golden Seeds").researched){yDraw+=16;text("Cost to upgrade: "+adjust_cost_text(60,farm_bio_orb_cost_multi())+" bio-orb",96,yDraw);yDraw+=16;}else if(level===4&&g_TechnologyManager.by_name("Farm Lvl. 5").researched){yDraw+=16;text("Cost to upgrade: 75 d. energy, 1000 stone, 9 gold apple",96,yDraw);yDraw+=16;}break;
case BT_COLLECTOR:
    stroke(32,32,32);fill(allBuildings.collector_color(level));ellipse(200,72,64,64);
    if(g_TechnologyManager.camel_technology_by_name("Swarm Interference").researched&&daysUntilSwarmArrival<=10){noFill();stroke(0,0,0);ellipse(200,72,64*abs(sin(globalCyclicAnimation*8)),64*abs(sin(globalCyclicAnimation*8)));}
    fill(0,0,0);textSize(18);textAlign(CENTER,BASELINE);nameStr="Collector";if(index>-1){nameStr+=" lvl. "+level;}text("~"+nameStr+"~",width/2,128);textSize(12);textAlign(LEFT,BASELINE);
    if(g_TechnologyManager.camel_technology_by_name("Swarm Interference").researched &&daysUntilSwarmArrival<=10){text("Collects ambient mana present in swamplands.",40,yDraw);yDraw+=16;if(g_TechnologyManager.by_name("Desert Collectors").researched){text("Also collects mana from deserts.",40,yDraw);yDraw+=16;}text("All of your collectors are also emitting a signal",40,yDraw);yDraw+=16;text("that reduces the chance for swarms to spawn here.",64,yDraw);yDraw+=16;}
    else{var CPU=g_PersistentData.get_upgrade_effect("CP");if(g_TechnologyManager.by_name("Desert Collectors").researched){text("If built on a SWAMP: (collects ambient mana)",64,yDraw);yDraw+=16;text("Gathers "+(0.2*level+CPU).toFixed(2)+" mana per day, except during winter",40,yDraw);yDraw+=16;text("Gathers "+(0.21*level+CPU).toFixed(2)+" mana per day during winter",40,yDraw);yDraw+=16;text("If built on a DESERT: (deserts have less ambient mana)",64,yDraw);yDraw+=16;text("Gathers "+(0.05*level+CPU).toFixed(2)+" mana per day, except during winter",40,yDraw);yDraw+=16;text("Gathers "+(0.08*level+CPU).toFixed(2)+" mana per day during winter",40,yDraw);yDraw+=16;}else{text("Collects ambient mana present in swamplands.",40,yDraw);yDraw+=16;text("Gathers "+(0.2*level+CPU).toFixed(2)+" mana per day, except during winter",40,yDraw);yDraw+=16;text("Gathers "+(0.21*level+CPU).toFixed(2)+" mana per day during winter",40,yDraw);yDraw+=16;}}
    if(index===-1){yDraw+=16;text("Cost to build: 2 stone",96,yDraw);yDraw+=16;}else if(level===1&&g_Diplomacy.totalPearlGained>=5){yDraw+=16;text("Cost to upgrade: 5 pearl, 5 stone",96,yDraw);yDraw+=16;}else if(level===2&&g_TechnologyManager.by_name("Collector Lvl. 3").researched){yDraw+=16;text("Cost to upgrade: "+(g_ResourcePane.gadoliniumVisible?"1.25 gadolinium, 6.5 stone":"requires a resource you don't have"),96,yDraw);yDraw+=16;}else if(level===3&&g_TechnologyManager.by_name("Collector Lvls. 4 & 5").researched){yDraw+=16;text("Cost to upgrade: "+(g_ResourcePane.mithrilVisible?"500 stone, 20 mithril":"requires a resource you don't have"),96,yDraw);yDraw+=16;}else if(level===4){yDraw+=16;text("Cost to upgrade: "+(g_ResourcePane.darkEnergyVisible?"30 dark energy":"requires a resource you don't have"),96,yDraw);yDraw+=16;}if(allBuildings.count_of_type(BT_MINE)===0){stroke(0);noFill();rect(100,270,200,30);fill(0);text("Build a mine first.",154,288);}
    break;
    case BT_MINE:
        noStroke();if(level<4){fill(128,96,64);ellipse(200,72,64-8*(level===1),64-8*(level===1));if(level>1){fill(red(FRONTSIDE_VOID_COLOR),green(FRONTSIDE_VOID_COLOR),blue(FRONTSIDE_VOID_COLOR),32);ellipse(200,72,48,48);if(level>2){ellipse(200,72,40,40);}}}else{fill(FRONTSIDE_VOID_COLOR);ellipse(200,72,64,64);if(level>4){noFill();stroke(255,0,0);ellipse(200,72,48,48);noStroke();}}fill(0,0,0);textSize(18);textAlign(CENTER,BASELINE);nameStr="Mine";if(index>-1){nameStr+=" lvl. "+level;}text("~"+nameStr+"~",width/2,128);
        textSize(12);textAlign(LEFT,BASELINE);if(frontType!==TT_LAKE){text("Allows you to go mining: eat "+food_cost_to_manual_mine()+" food to mine "+manual_mining_min_stone(level)+"~"+manual_mining_max_stone(level)+" stone.",40,yDraw);}else{text("You cannot manually mine underwater.",40,yDraw);}yDraw+=16;if(level>1){text("Stone per day is based on the absolute value of the desert factor.",40,yDraw);yDraw+=16;}else{text("Can be upgraded to automagically mine for you",40,yDraw);yDraw+=16;}if(g_TechnologyManager.by_name("Magic Ore").researched){text("Increases mana production by 3% due to Magic Ore tech.",40,yDraw);yDraw+=16;}if(level===3&&can_build_mine_lvl_4()){text("Upgrade it to extract dark energy at the cost of mana.",40,yDraw);yDraw+=16;}if(level>3){text("Consumes "+(level===5?"4.5":"1.5")+" mana/day to extract dark energy.",40,yDraw);yDraw+=16;text("Dark energy is based on the absolute value of the desert factor.",40,yDraw);yDraw+=16;}
        if(frontType===TT_LAKE){text("Underwater mines produce -50% stone"+(level>3?", +20% dark energy":"")+".",40,yDraw);yDraw+=16;}
        else if(frontType===TT_DESERT&&level===5&&g_TechnologyManager.by_name("Dark Desert").researched){text("Produces +0.2 dark energy due to Dark Desert tech.",40,yDraw);yDraw+=16;}if(index===-1){yDraw+=16;text("Cost to build: 7.5 stone",96,yDraw);yDraw+=16;}else{if(level===1){yDraw+=16;text("Cost to upgrade: 5 mana",96,yDraw);yDraw+=16;}if(level===2){yDraw+=16;if(allBuildings.count_of_type(BT_FURNACE)>0){text("Cost to upgrade: 20 stone, "+adjust_cost_text(10,pow(0.9,g_PersistentData.get_challenge_times_completed("DE")))+" iron",96,yDraw);}else if(allBuildings.count_of_type(BT_MINE)<3){text("To upgrade: first, build 3 mines",96,yDraw);}else{text("To upgrade: first, build a furnace",96,yDraw);}yDraw+=16;}if(level===3){yDraw+=16;if(can_build_mine_lvl_4()){text("Cost to upgrade: "+adjust_cost_text(20,pow(0.9,g_PersistentData.get_challenge_times_completed("DE")))+" iron, 3 gadolinium",96,yDraw);}else if(allSpells.by_name("Dark Attunement").durationLeft>0){text("Can only be upgraded on tiles with dark energy",96,yDraw);}else{text("To upgrade: requires a certain spell active",96,yDraw);}yDraw+=16;}if(level===4&&g_TechnologyManager.by_name("Mine Lvl. 5").researched){yDraw+=16;text("Cost to upgrade: 300 mithril, 1000 food, 9 gadolinium",96,yDraw);yDraw+=16;}}break;
    case BT_ENCHANTING_TABLE:
        noStroke();fill(64,0,64);rect(168,40,64,64);switch(level){case 1:fill(255,0,255);break;case 2:fill(255,192,255);break;case 3:fill(0,255,255);break;case 4:fill(0,255,96);break;default:fill(255,255,255);}if(level<4){ellipse(200,72,32,32);}else{quad(168,72,200,40,232,72,200,104);}fill(0,0,0);textSize(18);textAlign(CENTER,BASELINE);nameStr="Enchanting Table";if(index>-1){nameStr+=" lvl. "+level;}text("~"+nameStr+"~",width/2,128);textSize(12);textAlign(LEFT,BASELINE);
        text("Allows you to enchant pearl, turning it into flame orb.",40,yDraw);yDraw+=16;if(level>=2){text("Allows you to refine stone to obtain mithril.",40,yDraw);yDraw+=16;if(level>=3){text("Allows you to enchant flame orb, turning it into bio-orb.",40,yDraw);yDraw+=16;if(level>=4){text("Allows you to enchant golden apple to become various things.",40,yDraw);yDraw+=16;if(level>=5){text("Allows you to turn mana into dark energy.",40,yDraw);yDraw+=16;}}}}text("Enchanting must be done manually.",40,yDraw);yDraw+=16;if(level>=4&&g_TechnologyManager.camel_technology_by_name("Golden Tables").researched){text("Increases the golden apple output of any farms on the same tile.",40,yDraw);yDraw+=16;}
        if(index===-1){yDraw+=16;text("Cost to build: 3 mana, 6 stone",96,yDraw);yDraw+=16;}if(index>-1&&level===1&&g_TechnologyManager.by_name("Enchanting Table Lvl. 2").researched){yDraw+=16;text("Cost to upgrade: 10 mana, 2 spice, 5 iron",96,yDraw);yDraw+=16;}if(level===2&&g_TechnologyManager.by_name("Enchanting Table Lvl. 3").researched){yDraw+=16;text("Cost to upgrade: 500 stone, 300 mana, "+adjust_cost_text(25,g_PersistentData.get_upgrade_effect("E3"),1)+" dark energy",96,yDraw);yDraw+=16;}if(level===3&&allBuildings.count_of_type(BT_FARM,4)>1){yDraw+=16;text("Cost to upgrade: 750 iron",96,yDraw);yDraw+=16;}if(level===4&&g_TechnologyManager.by_name("Enchanting Table Lvl. 5").researched){yDraw+=16;text("To upgrade: enchant golden apple here",96,yDraw);yDraw+=16;}
        break;
    case BT_FURNACE:
        noStroke();fill(0,0,0);switch(level){case 1:rect(168,40,64,64);break;case 2:rect(185.5,40,29,29);rect(185.5,75,29,29);break;case 3:rect(168,40,29,29);rect(168,75,29,29);rect(203,75,29,29);break;case 4:case 5:rect(168,40,29,29);rect(168,75,29,29);rect(203,75,29,29);rect(203,40,29,29);break;}fill(255,224,0);switch(level){case 1:rect(181,53,38,38);break;case 2:rect(191.5,46,17,17);rect(191.5,81,17,17);break;case 3:rect(174,46,17,17);rect(174,81,17,17);rect(209,81,17,17);break;case 4:rect(174,46,17,17);rect(174,81,17,17);rect(209,81,17,17);rect(209,46,17,17);break;}fill(0,0,0);textSize(18);textAlign(CENTER,BASELINE);nameStr="Furnace";if(index>-1){nameStr+=" lvl. "+level;}text("~"+nameStr+"~",width/2,128);textSize(12);textAlign(LEFT,BASELINE);
        {var places=1+2*(fastererness>1&&(level===5||level===1)),focSummer=furnace_flame_orb_consumption_summer(level)*fastererness,focNotSummer=furnace_flame_orb_consumption_nonsummer(level)*fastererness,sc=furnace_stone_consumption(level)*fastererness,ip=furnace_iron_production(level)*fastererness,fCM=g_PersistentData.get_upgrade_effect("FC");
        if(level<4){text("Smelts stone into iron.",40,yDraw);yDraw += 16;}
        else{text("Smelts stone into iron & mithril (+"+((0.5+0.3*(level>=5))*fastererness).toFixed(places)+" mithril/day).",40,yDraw);yDraw+=16;}
        if(level===5){text("Consumes no flame orb; is powered instead by dark energy",40,yDraw);yDraw+=16;}
        if(focSummer===0&&focNotSummer===0){text("-"+sc.toFixed(places)+" stone/day, +"+ip.toFixed(places)+" iron/day",40,yDraw);yDraw+=16;}
        else if(focSummer===focNotSummer){text("-"+sc.toFixed(places)+" stone/day, -"+focSummer.toFixed(places)+" flame orb/day, +"+ip.toFixed(1)+" iron/day",40,yDraw);yDraw+=16;}
        else{text("Summer: -"+sc.toFixed(places)+" stone/day, -"+focSummer.toFixed(places)+" flame orb/day, +"+ip.toFixed(places)+" iron/day",40,yDraw);yDraw+=16;text("Other seasons: -"+sc.toFixed(places)+" stone/day, -"+focNotSummer.toFixed(places)+" flame orb/day, +"+ip.toFixed(places)+" iron/day",40,yDraw);yDraw+=16;}
        if(level>=3){text("Due to Expanded Furnaces tech, increases your",40,yDraw);yDraw+=16;text("dark energy production (scales nonlinearly).",56,yDraw);yDraw+=16;}
        if(g_PersistentData.currentChallenge!=="UCC"&&g_TechnologyManager.by_name("Furnace Synergy").researched){text("Due to Furnace Synergy tech: +1.5% iron production",40,yDraw);yDraw+=16;}
        if(index===-1){var c=16*fCM;var s=(c===16?"16":c.toFixed(3));yDraw+=16;text("Cost to build: "+s+" stone",96,yDraw);yDraw+=16;}
        else
        {
            if(level===1){if(allBuildings.count_of_type(BT_LAVA_FREEZER)>0){var c=100*fCM;var s=(c===100?"100":c.toFixed(3));yDraw+=16;text("Cost to upgrade: "+s+" iron",96,yDraw);yDraw+=16;}else{if(g_TechnologyManager.camel_technology_by_name("Expanded Furnaces").researched){yDraw+=16;text("You haven't yet unlocked lvl. 2 furnaces,",96,yDraw);yDraw+=16;text("so you can't yet build any lvl. 3 ones...",96,yDraw);yDraw+=16;}if(g_Diplomacy.totalSpiceGained>=min(50,g_PersistentData.get_upgrade_effect("H2"))){yDraw+=16;text("To upgrade: "+(allBuildings[0].upgradeLevel>1?"build a new type of building":"reach house lvl. 2"),96,yDraw);yDraw+=16;}}}
            if(level===2&&g_TechnologyManager.camel_technology_by_name("Expanded Furnaces").researched){var c=100*fCM;var s=(c===100?"100":c.toFixed(3));yDraw+=16;text("Cost to upgrade: "+s+" mithril",96,yDraw);yDraw+=16;}
            if(level===3&&can_build_furnace_lvl_4()){var c=1000*fCM,C=200*fCM;var s=(c===1000?"1000":c.toFixed(3)),S=(C===200?"200":C.toFixed(3));yDraw+=16;text("Cost to upgrade: "+s+" stone, "+S+" iron",96,yDraw);yDraw+=16;}
            if(level===4&&g_TechnologyManager.by_name("Ultimate Furnaces").researched){yDraw+=16;if(can_build_furnace_lvl_5()){var c=1800*fCM,C=0.5*fCM;var s=(c===1800?"1800":c.toFixed(3)),S=(C===0.5?"0.5":C.toFixed(3));text("Cost to upgrade: "+s+" mana, "+S+" golden apple",96,yDraw);}else if(allSpells.by_name("Dark Attunement").durationLeft>0){text("Can only be upgraded on tiles with dark energy",96,yDraw);}else{text("To upgrade: requires a certain spell active",96,yDraw);}yDraw+=16;}
        }}
        break;
    case BT_TERRAFORMER:case BT_BACKSIDE_TERRAFORMER:
        var cM=pow(0.98,g_PersistentData.get_challenge_times_completed("RW"));noStroke();fill(allBuildings.terraformer_color(level));triangle(232,82,232,104,210,104);stroke(allBuildings.terraformer_color(level));line(200,72,224,96);line(204,68,228,92);line(196,76,220,100);fill(0,0,0);if(level===5){textSize(12);textAlign(CENTER,CENTER);text("(This image is not missing,\nit's just completely white.)",200,72);}textSize(18);textAlign(CENTER,BASELINE);nameStr="Terraformer";if(index>-1){nameStr+=" lvl. "+level;}text("~"+nameStr+"~",width/2,128);textSize(12);textAlign(LEFT,BASELINE);
        if(level<4){text("Allows you to change the type of this tile.",40,yDraw);yDraw+=16;text("This process gets more expensive each time.",40,yDraw);yDraw+=16;}else{text("Enables terraforming--but the cost increases each time.",40,yDraw);yDraw+=16;}if(level>1){text("Higher level terraformers get a discount.",40,yDraw);yDraw+=16;}if(foodInternalFromRibbon){text("Due to the Ribbon Artifact, produces "+g_ResourcePane.formatSI(log(level+1)*foodInternalFromRibbon)+" food/day",40,yDraw);yDraw+=16;}if(level>3){text("Consumes 0.5 flame orb/day & boosts the following by 1%:",40,yDraw);yDraw+=16;text("Golden apple & mithril production, spice consumption",56,yDraw);yDraw+=16;text("Mithril"+(allBuildings.count_of_type(BT_ENCHANTING_TABLE,5)?" & dark energy":"")+" from enchanting",56,yDraw);yDraw+=16;}if(index===-1){yDraw+=16;text("Cost to build: "+(g_ResourcePane.gadoliniumVisible?adjust_cost_text(12,cM,2)+" iron, "+adjust_cost_text(8,cM,2)+" gadolinium, "+adjust_cost_text(20,cM,2)+" pearl":"requires a resource you don't have"),96,yDraw);yDraw+=16;}else{if(level===1&&g_TechnologyManager.by_name("Terraformer Lvl. 2").researched){yDraw+=16;text("Cost to upgrade: "+adjust_cost_text(5,cM)+" gadolinium, "+adjust_cost_text(40,cM)+" iron",96,yDraw);yDraw+=16;}if(level===2&&g_TechnologyManager.by_name("Terraformer Lvl. 3").researched){yDraw+=16;text("Cost to upgrade: "+adjust_cost_text(275,cM)+" food",96,yDraw);yDraw+=16;}
        if(level===3){if(g_ResourcePane.evacueesVisible){yDraw+=16;
        if(g_TechnologyManager.by_name("Terraformer Lvl. 4").researched){text("Cost to upgrade: "+adjust_cost_text(5,cM)+" bio-orb, "+adjust_cost_text(200,cM)+" stone",96,yDraw);}
        else if(evacuees<100){text("To upgrade: Rescue more evacuees",96,yDraw);}
        else if(!g_ResourcePane.goldenAppleVisible){text("To upgrade: obtain a new resource",96,yDraw);}
        else if(allBuildings.count_of_type(BT_TERRAFORMER,3)<1){text("To upgrade: Build a lvl. 3 terraformer on the frontside",96,yDraw);}
        else if(allBuildings.count_of_type(BT_BACKSIDE_TERRAFORMER,3)<1){text("To upgrade: Build a lvl. 3 terraformer on the backside",96,yDraw);}
        else{text("To upgrade: Requires technology",96,yDraw);}
        yDraw+=16;}}
        if(level===4&&allBuildings.count_of_type(BT_TERRAFORMER,4)>=3&&allBuildings.count_of_type(BT_BACKSIDE_TERRAFORMER,4)>=3){yDraw+=16;text("Cost to upgrade: "+adjust_cost_text(600,cM,0)+" pearl, "+adjust_cost_text(50,cM,0)+" spice, "+adjust_cost_text(15,cM,0)+" dark energy",96,yDraw);yDraw+=16;}}
        break;
    case BT_SHELTER:
        noStroke();if(level>=3){stroke(255*(level>4),255*(level===4),255*(level<5));}fill(160,160,160);rect(168,56,64,32,8);if(level>=2){fill(192,192,192);rect(178.667,61.333,32,21.333,10.667);}fill(0,0,0);textSize(18);textAlign(CENTER,BASELINE);nameStr="Shelter";if(index>-1){nameStr+=" lvl. "+level;}text("~"+nameStr+"~",width/2,128);textSize(12);textAlign(LEFT,BASELINE);text("Can house up to "+25*pow(2,level)+" evacuees"+(g_Diplomacy.get_is_wifi_active()?", +1 from Wi-Fi.":"."),40,yDraw);yDraw+=16;text("The evacuees manage their own resources,",40,yDraw);yDraw+=16;text("so they don't consume any of yours.",64,yDraw);yDraw+=16;
        if(index>-1){if(allBuildings.count_of_type(BT_IRS)>0){text("To receive evacuees, you need to use the IRS.",40,yDraw);}else{text("To receive evacuees, you need a building you haven't built yet.",40,yDraw);yDraw+=16;text("("+(allSpells.by_name("Dark Attunement").castStat<3?"Not yet":"Already")+" unlocked)",64,yDraw);}yDraw+=16;}
        var scm=(season===4?0.5:1)*shelterCostMultiFromPizza;
        if(index===-1)
        {yDraw+=16;text("Cost to build: "+adjust_cost_text(50+g_PersistentData.get_upgrade_effect("S1"),scm,1)+" mithril, "+adjust_cost_text(150,scm,0)+" food, "+adjust_cost_text(50,scm,0)+" stone",96,yDraw);yDraw+=16;}
        else
        {
            if(level===1&&allBuildings.count_of_type(BT_LAVA_FREEZER)>0)
            {yDraw+=16;text("Cost to upgrade: "+adjust_cost_text(2000,scm,0)+" stone, "+adjust_cost_text(1000,scm,0)+" iron",96,yDraw);yDraw+=16;}
            if(level===2&&g_ResourcePane.bioOrbVisible)
            {yDraw+=16;text("Cost to upgrade: "+adjust_cost_text(150,scm,0)+" bio-orb, "+adjust_cost_text(5000,scm,0)+" mithril, "+adjust_cost_text(3000,scm,0)+" pearl",96,yDraw);yDraw+=16;}
            if(level===3)
            {if(g_TechnologyManager.by_name("High-Capacity Shelters").researched){yDraw+=16;text("Cost to upgrade: "+adjust_cost_text(200,scm,0)+" g. apple, "+adjust_cost_text(16000,scm,0)+" mana, "+adjust_cost_text(8000,scm,0)+" fl. orb",96,yDraw);yDraw+=16;}
            else if(allBuildings[0].upgradeLevel===4){yDraw+=16;text("To upgrade: reach house lvl. 5",96,yDraw);yDraw+=16;}
            else if(allBuildings[0].upgradeLevel===5){yDraw+=16;text("To upgrade: "+(allBuildings.count_of_type(BT_FARM,5)?"research technology":"acquire farms lvl. 5"),96,yDraw);yDraw+=16;}
            }
            if(level===4)
            {yDraw+=16;text("Cost to upgrade: "+adjust_cost_text(15000,scm,0)+" iron, "+adjust_cost_text(2800,scm,0)+" d. energy, "+adjust_cost_text(9000,scm,0)+" mith.",96,yDraw);yDraw+=16;}
        }
        if(!allBuildings.get_tile_has(selectedTile,BT_FARM))
        {stroke(0,0,0);noFill();rect(100,270,200,30);fill(0,0,0);text("Build a farm here first.",138,288);}
        break;
    case BT_IRS:
        noStroke();var col1,col2,chCol,iData=(index>-1?allIRSDatas[allBuildings[index].resourceProduction]:undefined);switch(level){case 1:col1=color(255,0,0);col2=color(192,0,0);chCol=color(230+25*gcaS,0,80+80*gcaC);break;case 2:col1=color(255,255,0);col2=color(192,192,0);chCol=color(230+25*gcaS,200+55*gcaS,50+50*gcaC);break;case 3:col1=color(0,255,96);col2=color(0,192,72);chCol=color(25+25*gcaS,230+25*gcaS,90+90*gcaC);break;case 4:col1=color(224,0,255);col2=color(160,0,128);chCol=color(150+70*gcaS,60+60*gcaC,170+60*gcaS);break;default:col1=color(208,208,208);col2=color(224,224,224);chCol=color(223+32*gcaS,223+32*gcaC,223-32*gcaS);}fill(col1);rect(192,56,40,8);ellipse(192,60,8,8);arc(222,80,24,16,90,180);fill(chCol);quad(208,72,208,80,192,76,192,68);fill(col2);rect(208,56,16,24);arc(184,72,24,24,-90,90);rect(180,71,4,2);stroke(64,64,64);fill(index<0?color(0,255,0):iData.get_indicator_light_color());ellipse(216,72,6,6);
        fill(0);textSize(18);textAlign(CENTER,BASELINE);nameStr="IRS";if(index>-1){nameStr+=" lvl. "+level;}text("~"+nameStr+"~",width/2,128);
        textSize(12);
        textAlign(LEFT,BASELINE);
        text( "Interuniversal Rescue System", 40, yDraw );
        yDraw += 16;
        if(index>-1&&iData.engineType>0){text("Engine: "+iData.get_engine_type_as_string(),40,yDraw);yDraw+=16;}
        else if(level>2)
        {text("Unlocked engines: standard, fast",40,yDraw);yDraw+=16;}
        if(index>-1&&iData.rescuePodType>0){text("Rescue pod: "+iData.get_rescue_pod_type_as_string(),40,yDraw);yDraw+=16;}
        else if(level>1)
        {text("Unlocked rescue pods: small, large"+(level>3?", lightweight":""),40,yDraw);yDraw+=16;}
        if(level>4){text("Bonuses from being max level:",40,yDraw);yDraw+=16;text("Engine hyperspeed is boosted by 50%.",56,yDraw);yDraw+=16;text("Engine autorepairs 1% per day for free when not in use.",56,yDraw);yDraw+=16;text("Rescue pod capacity is increased by +10 evacuees.",56,yDraw);yDraw+=16;}
        
        if( index === -1 )
        {
            yDraw += 16;
            text( "Cost to build: 50 mithril, 50 iron, 10 gadolinium", 96, yDraw );
            yDraw += 16;
        }
        else
        {
            if( level === 1 && allBuildings.count_of_type( BT_LAVA_FREEZER ) > 0 )
            {
                yDraw += 16;
                text( "Cost to upgrade: 500 iron", 96, yDraw );
                yDraw += 16;
            }
            if(level===2&&g_TechnologyManager.by_name("Fast Engine").researched)
            {
                yDraw += 16;
                text( "Cost to upgrade: 1000 mithril, 1500 pearl", 96, yDraw );
                yDraw += 16;
            }
            if( level === 3 )
            {
                if( can_build_IRS_lvl_4())
                {
                    yDraw += 16;
                    text( "Cost to upgrade: 7500 flame orb, 100 gadolinium", 96, yDraw );
                    yDraw += 16;
                }
                else if( allBuildings[ 0 ].upgradeLevel >= 4 )
                {
                    yDraw += 16;
                    text( "To unlock the next upgrade, find more Artifacts.", 96, yDraw );
                    yDraw += 16;
                }
            }
            if(level===4&&g_TechnologyManager.by_name("Ultimate IRS").researched)
            {
                yDraw+=16;text("Cost to upgrade: 4000 d. energy, 2000 mith., 1000 spice",96,yDraw);yDraw+=16;
            }
        }
        break;
    case BT_MITHRIL_MINE:
        noStroke();if(level<4){fill(128,96,64);ellipse(200,72,64-8*(level===1),64-8*(level===1));if(level>1){fill(red(BACKSIDE_VOID_COLOR),green(BACKSIDE_VOID_COLOR),blue(BACKSIDE_VOID_COLOR),32);ellipse(200,72,48,48);if(level>2){ellipse(200,72,40,40);}}}else{fill(BACKSIDE_VOID_COLOR);ellipse(200,72,64,64);if(level>4){noFill();stroke(255,0,0);ellipse(200,72,48,48);noStroke();}}
        if(backType===TT_CYBERMIND)
        {
            noFill();
            stroke(255,0,0);arc(200.5,72.5,12,12,0,120);
            stroke(0,255,0);arc(200.5,72.5,36,36,120,240);
            stroke(0,0,255);arc(200.5,72.5,24,24,240,360);
        }
        
        fill(0,0,0);
        textSize(18);textAlign(CENTER,BASELINE);
        nameStr="Mine";
        if(index>-1){nameStr+=" lvl. "+level;}
        text("~"+nameStr+"~",width/2,128);
        textSize(12);textAlign(LEFT,BASELINE);
        var ttMulti=mithril_mine_TT_multi(backType);
        if(ttMulti===1){text("Automatically mines mithril from the ground.",40,yDraw);}
        else{text("Mines mithril.  ("+(100*ttMulti-100)+(backType===TT_CYBERMIND?"%: sharing with the Cybermind)":"% due to tile type)"),40,yDraw);}
        yDraw+=16;
        text("Mithril per day is based on the number of tiles you own.",40,yDraw);yDraw+=16;
        if(g_TechnologyManager.by_name("Magic Ore").researched)
        {
            text("Increases mana production by 3% due to Magic Ore tech.",40,yDraw);yDraw+=16;
        }
        text("Consumes "+(mithril_mine_iron_consumption(level)*ttMulti).toFixed(2)+" iron/day to extract mithril.",40,yDraw);yDraw+=16;
        if(level>1)
        {
            text("Increases mithril from enchanting by 5%"+(level===4?" & produces gadolinium":"")+".",40,yDraw);yDraw+=16;
        }
        if(level>2&&level!==4)
        {
            text("Produces a small amount of gadolinium, more in winter.",40,yDraw);yDraw+=16;
        }
        if(level>3)
        {text("Consumes "+(3+1.75*(level===5))+" spice/day to produce "+((level===5?2:1)*mithril_mine_deTT_multi(backType)).toFixed(1)+" dark energy/day.",40,yDraw);yDraw+=16;}
        if(index===-1)
        {
            yDraw+=16;text("Cost to build: 100 iron, 5 spice",96,yDraw);yDraw+=16;
        }
        else
        {
            if(level===1&&g_TechnologyManager.by_name("Backside Buildings Lvls. 2").researched)
            {
                yDraw+=16;text("Cost to upgrade: 200 flame orb, 400 stone",96,yDraw);yDraw+=16;
            }
            if(level===2&&g_TechnologyManager.by_name("Other Ores").researched)
            {
                yDraw+=16;text("Cost to upgrade: 800 pearl, 300 mithril, 400 stone",96,yDraw);yDraw+=16;
            }
            if(level===3&&g_TechnologyManager.by_name("Backside Dark Energy Mining").researched)
            {
                yDraw+=16;
                if(can_build_mine_lvl_4())
                {text("Cost to upgrade: "+adjust_cost_text(800,pow(0.9,g_PersistentData.get_challenge_times_completed("DE")),0)+" iron, 2000 stone, 150 gadolinium",96,yDraw);}
                else if(allSpells.by_name("Dark Attunement").durationLeft>0)
                {text("Can only be upgraded on tiles with dark energy",96,yDraw);}
                else
                {text("To upgrade: requires a certain spell active",96,yDraw);}
                yDraw+=16;
            }
            if(level===4&&g_TechnologyManager.by_name("Mine Lvl. 5").researched)
            {
                yDraw+=16;text("Cost to upgrade: 2000 pearl, 1000 flame orb, 1000 iron",96,yDraw);yDraw+=16;
            }
        }
        break;
    case BT_LAVA_FREEZER:
        var fan=index>-1&&allBuildings[index].destroyed,col=allBuildings.collector_color(level),lava=backType===TT_LAVA;
        noStroke();
        fill(128,96,80);
        if(lava)
        {rect(168,40,64,64);draw_lava_freezer_circle(184,56,col,4,fan);draw_lava_freezer_circle(216,88,col,4,fan);draw_lava_freezer_circle(216,56,col,4,fan);draw_lava_freezer_circle(184,88,col,4,fan);}
        else
        {rect(168,51,64,21);rect(168,72,21,21);draw_lava_freezer_circle(178.5,61.5,col,2.625,fan);draw_lava_freezer_circle(221.5,61.5,col,2.625,fan);draw_lava_freezer_circle(200,61.5,col,2.625,fan);draw_lava_freezer_circle(178.5,82.5,col,2.625,fan);}
        //Now write some info about it:
        fill( 0, 0, 0 );
        textSize( 18 );
        textAlign( CENTER, BASELINE );
        nameStr = fan?"Cooling Fan":"Lava Freezer";
        if( index > -1 ){nameStr+=" lvl. "+level;}
        text( "~" + nameStr + "~", width / 2, 128 );
        textSize( 12 );
        textAlign( LEFT, BASELINE );
        if(fan)
        {
text("Reduces the pearl consumption multi.",40,yDraw);yDraw+=16;
if(g_TechnologyManager.by_name("Mana Exchanger").researched){
text("By placing mana exchangers next to the heat exchangers,",40,yDraw);yDraw+=16;
text("also reduces the mana consumption multi.",56,yDraw);yDraw+=16;}
        }
        if(!fan&&lava){
text("Has two modes of operation:",40,yDraw);yDraw+=16;
text("1)",40,yDraw);
if(allSpells.by_name("Mineral Enrichment").durationLeft>0)
{
text("Freeze lava to obtain iron",56,yDraw);yDraw+=16;
text("-"+lava_freezer_pearl_consumption(level)+" pearl/day,+"+(0.7*lava_freezer_stone_production(level)).toFixed(1)+" iron/day",56,yDraw);yDraw+=16;
text("2)",40,yDraw);
text("Condense lava into gadolinium",56,yDraw);yDraw+=16;
text("+"+(0.1*lava_freezer_flame_orb_production(level)).toFixed(1)+" gadolinium/day",56,yDraw);yDraw+=16;
}
else
{
text("Freeze lava to obtain stone",56,yDraw);yDraw+=16;
text("-"+lava_freezer_pearl_consumption(level)+" pearl/day,+"+lava_freezer_stone_production(level)+" stone/day",56,yDraw);yDraw+=16;
text("2)",40,yDraw);
text("Condense lava into flame orb",56,yDraw);yDraw+=16;
text("+"+lava_freezer_flame_orb_production(level)+" flame orb/day",56,yDraw);yDraw+=16;
}}
if(!fan&&(!lava||g_TechnologyManager.by_name("Less Restrictive Terraforming").researched))
{
    text("Cannot freeze lava on any non-lava tile type.",40,yDraw);yDraw+=16;
}
        if( index === -1 )
        {
            var flf=g_PersistentData.get_challenge_times_completed("AA"),clf=allBuildings.count_of_type(BT_LAVA_FREEZER);yDraw+=16;text((flf>clf?"Freebies remaining: "+(flf-clf):"Cost to build: 50 iron, 100 mana, 2.5 gadolinium"),96,yDraw);yDraw+=16;
        }
        else if(allTiles[selectedTile].backsideTileType===TT_CYBERMIND&&!fan&&g_TechnologyManager.by_name("Cooling Fans").researched)
        {
            yDraw+=16;text("Can be made into a cooling fan.",96,yDraw);yDraw+=16;text("Cost: 1300 stone, 800 spice, 4 golden apple",96,yDraw);yDraw+=16;
        }
        else
        {
            if(level===1&&g_TechnologyManager.by_name("Backside Buildings Lvls. 2").researched)
            {yDraw+=16;text("Cost to upgrade: 750 mithril, 10 gadolinium",96,yDraw);yDraw+=16;}
            if(level===2&&allBuildings.count_of_type(BT_MITHRIL_MINE,3)>=3)
            {yDraw+=16;text("Cost to upgrade: 90 spice, 6 gadolinium, 75 iron",96,yDraw);yDraw+=16;}
            if(level===3&&g_TechnologyManager.by_name("Advanced Freezers").researched)
            {yDraw+=16;text("Cost to upgrade: 2500 pearl, 6500 mithril, 10000 iron",96,yDraw);yDraw+=16;}
            if(level===4&&g_TechnologyManager.by_name("Reversed Carnot Cycle").researched){yDraw+=16;text("Cost to upgrade: 30k mana, 2500 pearl, 1k dark energy",96,yDraw);yDraw+=16;}
        }
        break;
    }
    
    stroke( 0, 0, 0 );
    if( this.allowedTypes.length > 1 )
    {
        if( mouseX >= 0 && mouseX < 32 && mouseY >= 112 && mouseY < 144 )
        {
            fill( 255, 255, 0 );
        }
        else
        {
            fill( 192, 192, 0 );
        }
        triangle( 0, 128, 32, 112, 32, 144 );
        if( mouseX >= width - 32 && mouseX < width && mouseY >= 112 && mouseY < 144 )
        {
            fill( 255, 255, 0 );
        }
        else
        {
            fill( 192, 192, 0 );
        }
        triangle( width, 128, width - 32, 112, width - 32, 144 );
    }
    
    var buttonText = this.big_button_draw_condition_met();
    if( buttonText.length > 0 )
    {
        textAlign( CENTER, CENTER );
        if( this.big_button_highlight_condition_met())
        {
            if( mouseX >= 100 && mouseX < 300 && mouseY >= 270 && mouseY < 300 )
            {
                if(level<2){fill(0);text("Hotkey: spacebar",width/2,308);}
                fill( 255, 192, 128 );
            }
            else
            {
                fill( 255, 128, 0 );
            }
            textSize( 20 );
        }
        else
        {
            noFill();
            buttonText = "You can't afford this yet.";
            textSize( 12 );
        }
        rect( 100, 270, 200, 30 );
        fill(0);
        text( buttonText, 200, 285 );
        textAlign( LEFT, BASELINE );
    }
};
Construction_Manager.prototype.get_max_allowed_furnaces=function(){
if(g_PersistentData.currentChallenge==="UCC"){return 1;}if(g_TutorialProgress.get_is_in_tutorial()){if(!g_ResourcePane.flameOrbVisible){return 1;}return max(1,floor(stoneProjectedProduction*stoneProductionMulti/stoneProductionMultiFromStonemover*2));}return 999;};
Construction_Manager.prototype.on_tile_selected = function()
{
    if(selectedTile===-1||(currentlyInBackside&&allCreatures.is_giant_on_tile(selectedTile))){this.allowedTypes=[];this.currentlyViewing=0;return;}
    var notEdge=!allTiles[selectedTile].nextToEdge,lf=building_on_tile(selectedTile,BT_LAVA_FREEZER),enc=(building_on_tile(selectedTile,BT_ENCHANTING_TABLE)!==-1)&&g_TechnologyManager.by_name("Enchanting Table").researched;this.allowedTypes=[];switch(currentlyInBackside?allTiles[selectedTile].backsideTileType:allTiles[selectedTile].tileType){case TT_DESERT:if(this.can_build_IRS()){this.allowedTypes.push(BT_IRS);}if(notEdge){this.allowedTypes.push(BT_MINE);}if(g_TechnologyManager.by_name("Desert Collectors").researched){this.allowedTypes.push(BT_COLLECTOR);}if(enc){this.allowedTypes.push(BT_ENCHANTING_TABLE);}if(notEdge){if(allBuildings.count_of_type(BT_MINE)>=3&&(allBuildings.get_tile_has(selectedTile,BT_FURNACE)||allBuildings.count_of_type(BT_FURNACE)<this.get_max_allowed_furnaces())){this.allowedTypes.push(BT_FURNACE);}}if(g_TechnologyManager.by_name("Terraforming").researched){this.allowedTypes.push(BT_TERRAFORMER);}break;case TT_PLAINS:if(this.can_build_IRS()){this.allowedTypes.push(BT_IRS);}if(notEdge){if(allBuildings.get_tile_has(selectedTile,BT_MINE)){this.allowedTypes.push(BT_MINE);}else if(season!==4&&(g_PersistentData.currentChallenge!=="5FC"||allBuildings.get_tile_has(selectedTile,BT_FARM)||allBuildings.count_of_type(BT_FARM)<5)){this.allowedTypes.push(BT_FARM);}}if(g_TechnologyManager.by_name("Enchanting Table").researched){this.allowedTypes.push(BT_ENCHANTING_TABLE);}if(this.can_build_shelter()){this.allowedTypes.push(BT_SHELTER);}if(g_TechnologyManager.by_name("Terraforming").researched){this.allowedTypes.push(BT_TERRAFORMER);}break;case TT_SWAMP:this.allowedTypes.push(BT_COLLECTOR);if(g_TechnologyManager.by_name("Enchanting Table").researched&&(enc||g_PersistentData.get_upgrade_effect("ES"))){this.allowedTypes.push(BT_ENCHANTING_TABLE);}if(g_TechnologyManager.by_name("Terraforming").researched){this.allowedTypes.push(BT_TERRAFORMER);}break;case TT_LAKE:if(season===4){break;}if(notEdge&&g_TechnologyManager.by_name("Underwater Mining").researched){this.allowedTypes.push(BT_MINE);}if(enc){this.allowedTypes.push(BT_ENCHANTING_TABLE);}if(g_TechnologyManager.by_name("Terraforming").researched){this.allowedTypes.push(BT_TERRAFORMER);}break;case TT_MITHRIL:if(g_ArtifactManager.get_ad_level()>1||(lf>-1&&allBuildings[lf].destroyed)){this.allowedTypes.push(BT_LAVA_FREEZER);}if(notEdge){this.allowedTypes.push(BT_MITHRIL_MINE);}if(g_TechnologyManager.by_name("Backside Terraforming").researched){this.allowedTypes.push(BT_BACKSIDE_TERRAFORMER);}break;case TT_LAVA:this.allowedTypes.push(BT_LAVA_FREEZER);if(g_TechnologyManager.by_name("Backside Terraforming").researched){this.allowedTypes.push(BT_BACKSIDE_TERRAFORMER);}break;case TT_CYBERMIND:if(g_ArtifactManager.get_ad_level()>2||(lf>-1&&(allBuildings[lf].destroyed||g_TechnologyManager.by_name("Cooling Fans").researched))){this.allowedTypes.push(BT_LAVA_FREEZER);}if(notEdge&&allBuildings.get_tile_has(selectedTile,BT_MITHRIL_MINE)){this.allowedTypes.push(BT_MITHRIL_MINE);}if(g_TechnologyManager.by_name("Backside Terraforming").researched){this.allowedTypes.push(BT_BACKSIDE_TERRAFORMER);}break;case TT_WASTELAND:if(g_ArtifactManager.get_ad_level()>1||(lf>-1&&allBuildings[lf].destroyed)){this.allowedTypes.push(BT_LAVA_FREEZER);}if(notEdge){if(g_ArtifactManager.get_ad_level()>0||allBuildings.get_tile_has(selectedTile,BT_MITHRIL_MINE)){this.allowedTypes.push(BT_MITHRIL_MINE);}}if(g_TechnologyManager.by_name("Backside Terraforming").researched){this.allowedTypes.push(BT_BACKSIDE_TERRAFORMER);}break;default:this.allowedTypes=[];}this.currentlyViewing=(this.allowedTypes.length>0?this.allowedTypes[0]:0);
};
Construction_Manager.prototype.on_mouse_pressed=function(){
if(mouseX>=0&&mouseX<32&&mouseY>=112&&mouseY<144){this.execute_input("left");return;}if(mouseX>=width-32&&mouseX<width&&mouseY>=112&&mouseY<144){this.execute_input("right");return;}if(mouseX>=100&&mouseX<300&&mouseY>=270&&mouseY<300){this.execute_input("big-button");}};
Construction_Manager.prototype.on_key_pressed=function(){
if(keyCode===LEFT){this.execute_input("left");return;}if(keyCode===RIGHT){this.execute_input("right");return;}if(key.code===32){this.execute_input("big-button");}};
Construction_Manager.prototype.execute_input=function(which){
if(which==="left"){var i=0;for(;i<this.allowedTypes.length;i+=1){if(this.allowedTypes[i]===this.currentlyViewing){break;}}if(i===0){i=this.allowedTypes.length-1;}else{i-=1;}this.currentlyViewing=this.allowedTypes[i];return;}if(which==="right"){var i=0;for(;i<this.allowedTypes.length;i+=1){if(this.allowedTypes[i]===this.currentlyViewing){break;}}if(i===this.allowedTypes.length-1){i=0;}else{i+=1;}this.currentlyViewing=this.allowedTypes[i];return;}if(which==="big-button"){if(this.big_button_draw_condition_met()&&this.big_button_highlight_condition_met()){this.big_button_effect();recalculate_building_effects();}}};
Construction_Manager.prototype.get_can_do = function(cT)
{
	if(selectedTile<0){return!1;}
	var i=building_on_tile(selectedTile,cT),l=(i>-1)?allBuildings[i].upgradeLevel:0,d=(i>-1)?allBuildings[i].destroyed:!1;
	switch(cT)
	{
	case BT_FARM:
	    if(i===-1){return foodResource>=5+g_PersistentData.get_upgrade_effect("F1");}if(d){if(l<3){return foodResource>=4+g_PersistentData.get_upgrade_effect("F1");}else{return foodResource>=10+g_PersistentData.get_upgrade_effect("F1");}}switch(l){case 1:var pC=6+g_PersistentData.get_upgrade_effect("F2");return foodResource>=3&&(pC===0||pearlResource>=pC)&&stoneResource>=3;case 2:return foodResource>=60&&bioOrbResource>=farm_bio_orb_cost_multi()*(10-2*g_TechnologyManager.by_name("Slightly Cheaper Farms").researched);case 3:return bioOrbResource>=farm_bio_orb_cost_multi()*60;case 4:return darkEnergyResource>=75&&stoneResource>=1000&&goldenAppleResource>=9;}return!1;
	case BT_COLLECTOR:
	    if(i>-1){return can_afford_collector_upgrade(l);}return stoneResource>=2;
	case BT_MINE:
	    if(i>-1){var DE=g_PersistentData.get_challenge_times_completed("DE");switch(l){case 1:return manaResource>=5;case 2:return stoneResource>=20&&ironResource>=10*pow(0.9,DE);case 3:return ironResource>=20*pow(0.9,DE)&&gadoliniumResource>=3;case 4:return mithrilResource>=300&&foodResource>=1000&&gadoliniumResource>=9;}}return stoneResource>=7.5;
	case BT_ENCHANTING_TABLE:
	    if(i>-1){switch(l){case 1:return manaResource>=10&&spiceResource>=2&&ironResource>=5;case 2:return stoneResource>=500&&manaResource>=300&&darkEnergyResource>=25*g_PersistentData.get_upgrade_effect("E3");case 3:return ironResource>=750;}}return manaResource>=3&&stoneResource>=6;
	case BT_FURNACE:
	    var fcm=g_PersistentData.get_upgrade_effect("FC");if(i===-1){return stoneResource>=16*fcm;}switch(l){case 1:return ironResource>=100*fcm;case 2:return mithrilResource>=100*fcm;case 3:return stoneResource>=1000*fcm&&ironResource>=200*fcm;case 4:return manaResource>=1800*fcm&&goldenAppleResource>=0.5*fcm;}break;
	case BT_TERRAFORMER:case BT_BACKSIDE_TERRAFORMER:
	    var cM=pow(0.98,g_PersistentData.get_challenge_times_completed("RW"));if(i===-1){return ironResource>=12*cM&&gadoliniumResource>=8*cM&&pearlResource>=20*cM;}switch(l){case 1:return gadoliniumResource>=5*cM&&ironResource>=40*cM;case 2:return foodResource>=275*cM;case 3:return bioOrbResource>=5*cM&&stoneResource>=200*cM;case 4:return pearlResource>=600*cM&&spiceResource>=50*cM&&darkEnergyResource>=15*cM;}break;
	case BT_SHELTER:
	    var scm=(season===4?0.5:1)*shelterCostMultiFromPizza;if(i===-1){return mithrilResource>=scm*(50+g_PersistentData.get_upgrade_effect("S1"))&&foodResource>=scm*150&&stoneResource>=scm*50;}switch(l){case 1:return stoneResource>=scm*2000&&ironResource>=scm*1000;case 2:return bioOrbResource>=scm*150&&mithrilResource>=scm*5000&&pearlResource>=scm*3000;case 3:return goldenAppleResource>=scm*200&&manaResource>=scm*16000&&flameOrbResource>=scm*8000;case 4:return ironResource>=scm*15000&&darkEnergyResource>=scm*2800&&mithrilResource>=scm*9000;}break;
	case BT_IRS:
	    if(i>-1){switch(l){case 1:return ironResource>=500;case 2:return mithrilResource>=1000&&pearlResource>=1500;case 3:return flameOrbResource>=7500&&gadoliniumResource>=100;case 4:return darkEnergyResource>=4000&&mithrilResource>=2000&&spiceResource>=1000;}}return mithrilResource>=50&&ironResource>=50&&gadoliniumResource>=10;
	case BT_MITHRIL_MINE:
	    if(i===-1){return ironResource>=100&&spiceResource>=5;}switch(l){case 1:return flameOrbResource>=200&&stoneResource>=400;case 2:return pearlResource>=800&&mithrilResource>=300&&stoneResource>=400;case 3:return ironResource>=800*pow(0.9,g_PersistentData.get_challenge_times_completed("DE"))&&stoneResource>=2000&&gadoliniumResource>=150;case 4:return pearlResource>=2000&&flameOrbResource>=1000&&ironResource>=1000;}break;
	case BT_LAVA_FREEZER:
	    if(i===-1){if(g_PersistentData.get_challenge_times_completed("AA")>allBuildings.count_of_type(BT_LAVA_FREEZER)){return!0;}return ironResource>=50&&manaResource>=100&&gadoliniumResource>=2.5;}if(allTiles[selectedTile].backsideTileType===TT_CYBERMIND&&!d&&g_TechnologyManager.by_name("Cooling Fans").researched){return stoneResource>=1300&&spiceResource>=800&&goldenAppleResource>=4;}switch(l){case 1:return mithrilResource>=750&&gadoliniumResource>=10;case 2:return spiceResource>=90&&gadoliniumResource>=6&&ironResource>=75;case 3:return pearlResource>=2500&&mithrilResource>=6500&&ironResource>=10000;case 4:return manaResource>=30000&&pearlResource>=2500&&darkEnergyResource>=1000;}
	}
	return!1;
};
Construction_Manager.prototype.get_build_option = function(cT)
{
	if(selectedTile<0){return"";}
	var i=building_on_tile(selectedTile,cT),l=0,d=!1,U="UPGRADE",B="BUILD";
	if(i>-1){l=allBuildings[i].upgradeLevel;d=allBuildings[i].destroyed;}
	switch(cT)
	{
	case BT_FARM:
	    if(i>-1){if(d){return"REPAIR";}switch(l){case 1:if(g_TechnologyManager.camel_technology_by_name("High-Yield Seeds").researched){return U;}break;case 2:if(g_TechnologyManager.by_name("Farm Lvl. 3").researched){return U;}break;case 3:if(g_TechnologyManager.camel_technology_by_name("Golden Seeds").researched){return U;}break;case 4:if(g_TechnologyManager.by_name("Farm Lvl. 5").researched){return U;}break;}return"";}return B;
	case BT_COLLECTOR:
	    if(allBuildings.count_of_type(BT_MINE)===0){return"";}if(i===-1){return B;}switch(l){case 1:if(g_Diplomacy.totalPearlGained>=5){return U;}break;case 2:return g_TechnologyManager.by_name("Collector Lvl. 3").researched?U:"";case 3:if(g_TechnologyManager.by_name("Collector Lvls. 4 & 5").researched){return U;}break;case 4:return U;}return"";
	case BT_MINE:
	    if(i>-1){switch(l){case 1:return U;case 2:if(allBuildings.count_of_type(BT_FURNACE)>0){return U;}break;case 3:if(can_build_mine_lvl_4()){return U;}break;case 4:if(g_TechnologyManager.by_name("Mine Lvl. 5").researched){return U;}break;}return"";}return B;
	case BT_ENCHANTING_TABLE:
	    if(i===-1){return B;}else{switch(l){case 1:if(g_TechnologyManager.by_name("Enchanting Table Lvl. 2").researched){return U;}break;case 2:if(g_TechnologyManager.by_name("Enchanting Table Lvl. 3").researched){return U;}break;case 3:if(allBuildings.count_of_type(BT_FARM,4)>1){return U;}break;}}return"";
	case BT_FURNACE:
	    if(i===-1){return B;}else{switch(l){case 1:if(allBuildings.count_of_type(BT_LAVA_FREEZER)>0){return U;}break;case 2:if(g_TechnologyManager.camel_technology_by_name("Expanded Furnaces").researched){return U;}break;case 3:if(can_build_furnace_lvl_4()){return U;}break;case 4:if(g_TechnologyManager.by_name("Ultimate Furnaces").researched&&can_build_furnace_lvl_5()){return U;}break;}}return"";
	case BT_TERRAFORMER:case BT_BACKSIDE_TERRAFORMER:
	    if(i===-1){return B;}switch(l){case 1:if(g_TechnologyManager.by_name("Terraformer Lvl. 2").researched){return U;}break;case 2:if(g_TechnologyManager.by_name("Terraformer Lvl. 3").researched){return U;}break;case 3:if(g_TechnologyManager.by_name("Terraformer Lvl. 4").researched){return U;}break;case 4:if(allBuildings.count_of_type(BT_TERRAFORMER,4)>2&&allBuildings.count_of_type(BT_BACKSIDE_TERRAFORMER,4)>2){return U;}break;}return "";
	case BT_SHELTER:
	    if(i===-1){if(allBuildings.get_tile_has(selectedTile,BT_FARM)){return B;}return"";}switch(l){case 1:if(allBuildings.count_of_type(BT_LAVA_FREEZER)>0){return U;}break;case 2:if(g_ResourcePane.bioOrbVisible){return U;}break;case 3:if(g_TechnologyManager.by_name("High-Capacity Shelters").researched){return U;}break;case 4:return U;}return"";
	case BT_IRS:
	    if(i===-1){return B;}switch(l){case 1:if(allBuildings.count_of_type(BT_LAVA_FREEZER)>0){return U;}break;case 2:if(g_TechnologyManager.by_name("Fast Engine").researched){return U;}break;case 3:if(can_build_IRS_lvl_4()){return U;}break;case 4:if(g_TechnologyManager.by_name("Ultimate IRS").researched){return U;}break;}return"";
	case BT_MITHRIL_MINE:
	    if(i===-1){return B;}switch(l){case 1:if(g_TechnologyManager.by_name("Backside Buildings Lvls. 2").researched){return U;}break;case 2:if(g_TechnologyManager.by_name("Other Ores").researched){return U;}break;case 3:if(g_TechnologyManager.by_name("Backside Dark Energy Mining").researched&&can_build_mine_lvl_4()){return U;}break;case 4:if(g_TechnologyManager.by_name("Mine Lvl. 5").researched){return U;}break;}return"";
	case BT_LAVA_FREEZER:
	    if(i===-1){return B;}if(allTiles[selectedTile].backsideTileType===TT_CYBERMIND&&!d&&g_TechnologyManager.by_name("Cooling Fans").researched){return"COOLING FAN";}switch(l){case 1:if(g_TechnologyManager.by_name("Backside Buildings Lvls. 2").researched){return U;}break;case 2:if(allBuildings.count_of_type(BT_MITHRIL_MINE,3)>=3){return U;}break;case 3:if(g_TechnologyManager.by_name("Advanced Freezers").researched){return U;}break;case 4:if(g_TechnologyManager.by_name("Reversed Carnot Cycle").researched){return U;}break;}return"";
	}
	throw"Invalid building type!";
};
Construction_Manager.prototype.big_button_draw_condition_met=function(){
return this.get_build_option(this.currentlyViewing);};
Construction_Manager.prototype.big_button_highlight_condition_met=function(){
return this.get_can_do(this.currentlyViewing);};
Construction_Manager.prototype.big_button_effect = function()
{
    var i=building_on_tile(selectedTile,this.currentlyViewing);
    switch(this.currentlyViewing)
    {
    case BT_FARM:if(i>-1){var b=allBuildings[i];if(b.destroyed){b.destroyed=!1;if(b.upgradeLevel<3){foodResource-=4+g_PersistentData.get_upgrade_effect("F1");}else{foodResource-=10+g_PersistentData.get_upgrade_effect("F1");}}else{switch(b.upgradeLevel){case 1:{var p=6+g_PersistentData.get_upgrade_effect("F2");foodResource-=3;if(p>0){pearlResource-=p;}stoneResource-=3;}break;case 2:foodResource-=60;bioOrbResource-=farm_bio_orb_cost_multi()*(10-2*g_TechnologyManager.by_name("Slightly Cheaper Farms").researched);break;case 3:bioOrbResource-=farm_bio_orb_cost_multi()*60;g_ToggleButtonManager.goldenFarmToggleVisible=!0;if(allBuildings.count_of_type(BT_FARM,4)===0){spellHints.push("You can eat 1 Golden Apple to double the\nduration of the next spell you manually cast.");}if(allBuildings.count_of_type(BT_FARM,4)===1){g_FlyingText.set_text("Enchanting table lvl. 4 unlocked!",100,300);g_FlyingText.fontColor=color(0,128,0);}break;case 4:darkEnergyResource-=75;stoneResource-=1000;goldenAppleResource-=9;break;}b.upgradeLevel+=1;}}else{allBuildings.build(selectedTile,BT_FARM);foodResource-=5+g_PersistentData.get_upgrade_effect("F1");}movesLeft-=1;break;
    case BT_COLLECTOR:if(i>-1){var b=allBuildings[i];pay_collector_upgrade_cost(b.upgradeLevel);b.upgradeLevel+=1;movesLeft-=1;}else{allBuildings.build(selectedTile,BT_COLLECTOR);movesLeft-=1;stoneResource-=2;}break;
    case BT_MINE:if(i>-1){var b=allBuildings[i],DE=g_PersistentData.get_challenge_times_completed("DE");switch(b.upgradeLevel){case 1:manaResource-=5;break;case 2:stoneResource-=20;ironResource-=10*pow(0.9,DE);break;case 3:ironResource-=20*pow(0.9,DE);gadoliniumResource-=3;g_ToggleButtonManager.darkMineToggleVisible=!0;break;case 4:mithrilResource-=300;foodResource-=1000;gadoliniumResource-=9;break;}b.upgradeLevel+=1;movesLeft-=1;}else{allBuildings.build(selectedTile,BT_MINE);movesLeft-=1;stoneResource-=7.5;if(allBuildings.count_of_type(BT_MINE)===3){this.on_tile_selected();this.currentlyViewing=BT_MINE;g_FlyingText.set_text("New building type unlocked!",100,300);g_FlyingText.fontColor=color(0,128,0);}}break;
    case BT_ENCHANTING_TABLE:if(i>-1){var b=allBuildings[i];switch(b.upgradeLevel){case 1:manaResource-=10;spiceResource-=2;ironResource-=5;break;case 2:manaResource-=300;stoneResource-=500;darkEnergyResource-=25*g_PersistentData.get_upgrade_effect("E3");break;case 3:ironResource-=750;break;}b.upgradeLevel+=1;}else{allBuildings.build(selectedTile,BT_ENCHANTING_TABLE);manaResource-=3;stoneResource-=6;}movesLeft-=1;break;
    case BT_FURNACE:var fcm=g_PersistentData.get_upgrade_effect("FC");if(i>-1){var b=allBuildings[i];switch(b.upgradeLevel){case 1:ironResource-=100*fcm;break;case 2:mithrilResource-=100*fcm;break;case 3:stoneResource-=1000*fcm;ironResource-=200*fcm;break;case 4:manaResource-=1800*fcm;goldenAppleResource-=0.5*fcm;}b.upgradeLevel+=1;}else{allBuildings.build(selectedTile,BT_FURNACE);stoneResource-=16*fcm;g_ToggleButtonManager.furnaceToggleVisible=!0;if(allBuildings.count_of_type(BT_FURNACE)===1){g_FlyingText.set_text("Mine lvl. 3 unlocked!",100,300);g_FlyingText.fontColor=color(0,128,0);if(g_PersistentData.currentChallenge==="UCC"){allTiles[selectedTile].hasDarkEnergy=!0;}}}movesLeft-=1;break;
    case BT_TERRAFORMER:case BT_BACKSIDE_TERRAFORMER:var cM=pow(0.98,g_PersistentData.get_challenge_times_completed("RW"));if(i>-1){var b=allBuildings[i];switch(b.upgradeLevel){case 1:gadoliniumResource-=5*cM;ironResource-=40*cM;break;case 2:foodResource-=275*cM;break;case 3:g_ToggleButtonManager.terraformerLvl4ToggleVisible=!0;bioOrbResource-=5*cM;stoneResource-=200*cM;if((this.currentlyViewing===BT_TERRAFORMER&&allBuildings.count_of_type(BT_BACKSIDE_TERRAFORMER,4)>=3&&allBuildings.count_of_type(BT_TERRAFORMER,4)===2)||(this.currentlyViewing===BT_BACKSIDE_TERRAFORMER&&allBuildings.count_of_type(BT_TERRAFORMER,4)>=3&&allBuildings.count_of_type(BT_BACKSIDE_TERRAFORMER,4)===2)){g_FlyingText.set_text("Terraformer lvl. 5 unlocked!",100,300);g_FlyingText.fontColor=color(0,128,0);}break;case 4:pearlResource-=600*cM;spiceResource-=50*cM;darkEnergyResource-=15*cM;break;}b.upgradeLevel+=1;}else{allBuildings.build(selectedTile,this.currentlyViewing);ironResource-=12*cM;gadoliniumResource-=8*cM;pearlResource-=20*cM;}movesLeft-=1;break;
    case BT_SHELTER:var scm=(season===4?0.5:1)*shelterCostMultiFromPizza;g_ResourcePane.evacueesVisible=!0;if(i>-1){var b=allBuildings[i];switch(b.upgradeLevel){case 1:stoneResource-=scm*2000;ironResource-=scm*1000;break;case 2:bioOrbResource-=scm*150;mithrilResource-=scm*5000;pearlResource-=scm*3000;break;case 3:goldenAppleResource-=scm*200;manaResource-=scm*16000;flameOrbResource-=scm*8000;break;case 4:ironResource-=scm*15000;darkEnergyResource-=scm*2800;mithrilResource-=scm*9000;break;}b.upgradeLevel+=1;}else{allBuildings.build(selectedTile,BT_SHELTER);mithrilResource-=scm*(50+g_PersistentData.get_upgrade_effect("S1"));foodResource-=scm*150;stoneResource-=scm*50;}movesLeft-=1;break;
    case BT_IRS:g_ResourcePane.evacueesVisible=!0;if(i>-1){var b=allBuildings[i];switch(b.upgradeLevel){case 1:ironResource-=500;break;case 2:mithrilResource-=1000;pearlResource-=1500;if(allBuildings.count_of_type(BT_IRS,3)===0){g_FlyingText.set_text("Furnace lvl. 4 unlocked!",100,300);g_FlyingText.fontColor=color(0,128,0);}break;case 3:flameOrbResource-=7500;gadoliniumResource-=100;break;case 4:darkEnergyResource-=4000;mithrilResource-=2000;spiceResource-=1000;break;}b.upgradeLevel+=1;allIRSDatas[b.resourceProduction].level=b.upgradeLevel;}else{allBuildings.build(selectedTile,BT_IRS);mithrilResource-=50;ironResource-=50;gadoliniumResource-=10;}movesLeft-=1;break;
    case BT_MITHRIL_MINE:
if(i>-1){var b=allBuildings[i];switch(b.upgradeLevel){case 1:flameOrbResource-=200;stoneResource-=400;break;case 2:pearlResource-=800;mithrilResource-=300;stoneResource-=400;if(allBuildings.count_of_type(BT_MITHRIL_MINE,3)===2){g_FlyingText.set_text("Lava freezer lvl. 3 unlocked!",100,300);g_FlyingText.fontColor=color(0,128,0);}break;case 3:ironResource-=800*pow(0.9,g_PersistentData.get_challenge_times_completed("DE"));stoneResource-=2000;gadoliniumResource-=150;g_ToggleButtonManager.mithrilMineDarkToggleVisible=!0;break;case 4:pearlResource-=2000;flameOrbResource-=1000;ironResource-=1000;break;}b.upgradeLevel+=1;}else{allBuildings.build(selectedTile,BT_MITHRIL_MINE);ironResource-=100;spiceResource-=5;g_ToggleButtonManager.mithrilMineToggleVisible=!0;}movesLeft-=1;break;
    case BT_LAVA_FREEZER:if(i>-1){var b=allBuildings[i];if(allTiles[selectedTile].backsideTileType===TT_CYBERMIND&&!b.destroyed&&g_TechnologyManager.by_name("Cooling Fans").researched){b.destroyed=!0;stoneResource-=1300;spiceResource-=800;goldenAppleResource-=4;movesLeft-=1;return;}switch(b.upgradeLevel){case 1:mithrilResource-=750;gadoliniumResource-=10;break;case 2:spiceResource-=90;gadoliniumResource-=6;ironResource-=75;if(!allBuildings.count_of_type(BT_LAVA_FREEZER,3)){g_FlyingText.set_text("New spell unlocked!",100,300);g_FlyingText.fontColor=color(0,128,0);}break;case 3:pearlResource-=2500;mithrilResource-=6500;ironResource-=10000;break;case 4:manaResource-=30000;pearlResource-=2500;darkEnergyResource-=1000;break;}b.upgradeLevel+=1;}else{if(g_PersistentData.get_challenge_times_completed("AA")<=allBuildings.count_of_type(BT_LAVA_FREEZER)){ironResource-=50;manaResource-=100;gadoliniumResource-=2.5;}allBuildings.build(selectedTile,BT_LAVA_FREEZER);if(allBuildings.count_of_type(BT_LAVA_FREEZER)===1){g_ToggleButtonManager.lavaFreezerToggleVisible=!0;g_FlyingText.set_text("New lvl. 2 buildings unlocked!",100,300);g_FlyingText.fontColor=color(0,128,0);}}movesLeft-=1;break;
    }
};
Construction_Manager.prototype.can_do_anything_on_tile=function(){
if(selectedTile<0){return!1;}var i=0,l=this.allowedTypes.length;if(l<1){return!1;}for(;i<l;i+=1){if(this.get_build_option(this.allowedTypes[i])&&this.get_can_do(this.allowedTypes[i])){return!0;}}return!1;};
Construction_Manager.prototype.can_build_IRS=function(){
if(selectedTile<0){return!1;}var s=allTiles[selectedTile];if(allSpells.by_name("Dark Attunement").castStat>=3&&s.nextToEdge){var t=tile_at_position(s.x-32,s.y);return t>-1&&allTiles[t].claimed;}return!1;};
Construction_Manager.prototype.can_build_shelter=function(){
return g_ResourcePane.mithrilVisible&&(this.allowedTypes.indexOf(BT_FARM)!==-1||(season===4&&allBuildings.get_tile_has(selectedTile,BT_FARM)));};
g_ConstructionManager=new Construction_Manager();
} //Construction_Manager

{
//See past versions of this file for more info.
var firstSpellHint="Try casting each spell at least 3 times,\nthen check your research lab\nto see if there is anything new.";
var Spell=function(n,D,E,d,t,c,rF,sF,eF,cF,uF,aF){
this.name=n;this.description=D;this.extendedDescription=E;this.duration=d;this.unlockFunc=uF;this.tileType=t;this.manaCost=c;this.condition=cF;this.on_recalculation=rF;this.on_duration_start=sF;this.on_duration_end=eF;this.durationLeft=0;this.castStat=0;this.castableAnywhere=aF;this.recastable=!1;if(typeof(aF)!=="function"){throw"error in "+n+" spell";}};
Spell.prototype.get_can_cast=function(){
return canCastSpells&&(this.durationLeft===0||this.recastable)&&selectedTile>-1&&(currentlyInBackside?allTiles[selectedTile].backsideTileType:allTiles[selectedTile].tileType)===this.tileType&&allTiles[selectedTile].claimed&&(allSpells.payUsingFire?flameOrbResource:manaResource)>=this.manaCost*allSpells.spellCostMulti&&this.unlockFunc&&this.condition();};
Spell.prototype.cast=function(){
if(!this.get_can_cast()){return!1;}this.castStat+=1+(g_PersistentData.get_upgrade_effect("GC")-1)*allSpells.goldenAppleEaten;if(this.durationLeft>0){this.on_duration_end();}this.durationLeft=max(this.durationLeft,this.duration*(1+allSpells.goldenAppleEaten));if(allSpells.payUsingFire){flameOrbResource-=this.manaCost*allSpells.spellCostMulti;}else{manaResource-=this.manaCost*allSpells.spellCostMulti;}allSpells.goldenAppleEaten=!1;movesLeft-=1;this.on_duration_start();if(foodGainedAtEachSpellCast>0){foodResource+=foodGainedAtEachSpellCast;var t="Gained "+g_ResourcePane.formatSI(foodGainedAtEachSpellCast)+" food.";if(g_FlyingText.ticksToDisplay<60){g_FlyingText.set_text(t,mouseX,mouseY);g_FlyingText.fontColor=color(255,0,0);}else{g_FlyingText.text+="\n"+t;}}if(resourcesOnSpellCast>0){spiceResource=max(0,spiceResource+resourcesOnSpellCast*spiceNetIncome);gadoliniumResource=max(0,gadoliniumResource+resourcesOnSpellCast*gadoliniumNetIncome);flameOrbResource=max(0,flameOrbResource+resourcesOnSpellCast*flameOrbNetIncome);ironResource=max(0,ironResource+resourcesOnSpellCast*ironProjectedNetIncome);var t="Gained "+g_ResourcePane.formatSI(resourcesOnSpellCast)+" days of Tier 2 income.";if(g_FlyingText.ticksToDisplay<60){g_FlyingText.set_text(t,mouseX,mouseY);g_FlyingText.fontColor=color(255,0,0);}else{g_FlyingText.text+="\n"+t;}}if(g_PersistentData.currentChallenge==="AAC"){this.manaCost+=10*(g_PersistentData.get_challenge_times_completed("AA")+1);}recalculate_building_effects();allSpells.check_remove_hint();return!0;};
Spell.prototype.autocast=function(){
this.castStat+=1;if(this.durationLeft>0){this.on_duration_end();}this.durationLeft=max(this.durationLeft,this.duration);this.on_duration_start();if(foodGainedAtEachSpellCast>0){foodResource+=foodGainedAtEachSpellCast;}if(resourcesOnSpellCast>0){spiceResource=max(0,spiceResource+resourcesOnSpellCast*spiceNetIncome);gadoliniumResource=max(0,gadoliniumResource+resourcesOnSpellCast*gadoliniumNetIncome);flameOrbResource=max(0,flameOrbResource+resourcesOnSpellCast*flameOrbNetIncome);ironResource=max(0,ironResource+resourcesOnSpellCast*ironProjectedNetIncome);}recalculate_building_effects();return!0;};
Spell.prototype.on_day_end=function(){
if(this.name!=="Dark Attunement"&&g_TechnologyManager.by_name("Dark Chronomancy").researched&&allSpells.by_name("Dark Attunement").durationLeft>0){return;}if(this.durationLeft>0){this.durationLeft-=1;if(this.durationLeft===0){this.on_duration_end();recalculate_building_effects();}}};
allSpells.scrollOffset=0;
allSpells.scrollVelocity=0;
allSpells.spellCostMulti=1;
allSpells.payUsingFire=!1;
allSpells.goldenAppleEaten=!1;
//The spells screen has some subscreens:
//0 = main, 1 = extended descriptions, 2 = hints
allSpells.subscreen=0;
//See past versions of this file for notes
allSpells.water_music_base_pearl_from_fishing=function(){
var l=g_Factors.get_lake_factor();return l>0?sqrt(l*2+1):exp(l);};
allSpells.scroll_offset_update=function(){
if(allSpells.count_unlocked_spells()+g_ResourcePane.goldenAppleVisible<=3){allSpells.scrollOffset=0;allSpells.scrollVelocity=0;return;}var up=(keyIsPressed&&keyCode===UP)||(mouseIsPressed&&mouseX>=width-32&&mouseX<width&&mouseY>=38&&mouseY<70),down=(keyIsPressed&&keyCode===DOWN)||(mouseIsPressed&&mouseX>=width-32&&mouseX<width&&mouseY>=height-142&&mouseY<height-110);stroke(0,0,0);if(mouseX>=width-32&&mouseX<width&&mouseY>=38&&mouseY<70){fill(255,255,0);}else{fill(192,192,0);}triangle(width-32,70,width-16,38,width,70);if(mouseX>=width-32&&mouseX<width&&mouseY>=height-142&&mouseY<height-110){fill(255,255,0);}else{fill(192,192,0);}triangle(width-32,height-142,width-16,height-110,width,height-142);if(up&&!down){allSpells.scrollVelocity-=1;}if(down&&!up){allSpells.scrollVelocity+=1;}if(up===down){if(allSpells.scrollVelocity>=1){allSpells.scrollVelocity-=1;}else if(allSpells.scrollVelocity<=-1){allSpells.scrollVelocity+=1;}else{allSpells.scrollVelocity=0;}}allSpells.scrollVelocity=constrain(allSpells.scrollVelocity,-8,8);allSpells.scrollOffset+=allSpells.scrollVelocity;allSpells.scrollOffset=constrain(allSpells.scrollOffset,-32,64*allSpells.count_unlocked_spells()-64);};
allSpells.by_name=function(str){
for(var i=0;i<allSpells.length;i+=1){if(allSpells[i].name===str){return allSpells[i];}}return undefined;};
allSpells.count_unlocked_spells=function(){
var c=0;allSpells.forEach(function(s){c+=s.unlockFunc();});return c;};
allSpells.count_active_spells=function(){
var c=0;allSpells.forEach(function(s){c+=s.durationLeft>0;});return c;};
allSpells.count_for_notification=function(){
var c=0;allSpells.forEach(function(s){c+=s.castStat===0&&s.unlockFunc()&&(allSpells.payUsingFire?flameOrbResource:manaResource)>=s.manaCost*allSpells.spellCostMulti&&s.castableAnywhere();});return c;};
allSpells.check_remove_hint=function(){
if(allSpells.every(function(S){return S.castStat>=3;})&&spellHints[0]===firstSpellHint){spellHints.shift();}};
allSpells.insta_grow_color=function(){return color(255,0,255,255*sq(gcaS)*min(allSpells.by_name("Insta-Grow").castStat*0.1,1));};
var spark_on_selected_tile=function(){return allCreatures.get_on_tile(selectedTile,CT_SPARK);};
allSpells.setup_spells = function()
{
    spellHints.push(firstSpellHint);
    //Spell parameters: name, descripton, extendedDescription, duration, tileType,
    //manaCost, recalculateFunc, startFunc, endFunc, conditionFunc, unlockFunc, castableAnywhere:
    allSpells.push(new Spell("Stonemover",SM_SPELL_DESC[0],SM_SPELL_LORE[0],5,TT_DESERT,10,function(){stoneProductionMultiFromStonemover=4-g_TechnologyManager.by_name("Lithomancy").researched;},null_func,null_func,function(){return selectedTile>-1&&!g_TechnologyManager.by_name("Lithomancy").researched&&building_level_on_tile(selectedTile,BT_MINE)>=2;},function(){return!currentlyInBackside;},function(){return allBuildings.count_of_type(BT_MINE,2)>0&&!g_TechnologyManager.by_name("Lithomancy").researched;}));
    allSpells.push(new Spell("Mineral Enrichment","Lava freezers produce iron or gadolinium instead","This spell uses a spark to transform the nature of the lava being frozen.  Must be cast while standing at a lava freezer.",5,TT_LAVA,1000,function(){if(g_TechnologyManager.by_name("Mineral Enhancement").researched){stoneProductionMultiFromMineralEnrichment=1+0.2*sqrt(allSpells.count_active_spells());}if(g_TechnologyManager.by_name("Mineral Refinement").researched){ironProductionMultiFromMineralEnrichment=1+0.01*allBuildings.count_of_type(BT_LAVA_FREEZER);}},function(){var i=0;for(;i<allCreatures.length;i+=1){if(allCreatures[i].creatureType===CT_SPARK&&allCreatures[i].tileAt===selectedTile){break;}}allCreatures.splice(i,1);},null_func,function(){return spark_on_selected_tile()&&allBuildings.get_tile_has(selectedTile,BT_LAVA_FREEZER);},function(){return allBuildings.count_of_type(BT_LAVA_FREEZER,3)&&currentlyInBackside;},function(){return allCreatures.some(function(c){return c.creatureType===CT_SPARK&&allTiles[c.tileAt].claimed&&allTiles[c.tileAt].backsideTileType===TT_LAVA&&allBuildings.get_tile_has(c.tileAt,BT_LAVA_FREEZER);});}));
    allSpells.push(new Spell("Awaken the Dragon","He eats 5 food/day & will kill enemies for you","Cast on a plains tile.  The dragon is a friend of yours.  As long as he is awake he will eat 5 food per day.  If you run out of food, he will go back to sleep.",10,TT_PLAINS,10,null_func,function(){g_Dragon.markedForDestruction=!1;g_Dragon.daysToLive=this.durationLeft;g_Dragon.tileAt=selectedTile;g_Dragon.fight_enemies();allCreatures.remove_marked_for_destruction();if(g_TechnologyManager.by_name("I\'m Waking Up").researched){this.duration+=2;}},null_func,true_func,function(){return dayCount>=70&&!currentlyInBackside;},function(){return allTiles.some(function(t){return t.claimed&&t.tileType===TT_PLAINS;});}));
    allSpells.push(new Spell("Empower the Dragon","Increase the range of his fire breath","This spell uses a spark to enchance the dragon's abilities; his fire breath will extend farther.  The effects of this spell are not permanent, ending after day ",2,TT_MITHRIL,2000,function(){flameOrbConsumptionFromEtD=10*g_TechnologyManager.by_name("Enchanted Dragonfire").researched;},function(){g_Dragon.attackRange+=g_PersistentData.get_upgrade_effect("FR").EtD;this.manaCost+=(500-216*g_TechnologyManager.by_name("Blazing Dragonfire").researched)/(1+g_TechnologyManager.by_name("Efficient Dragonfire").researched);var i=0;for(;i<allCreatures.length;i+=1){if(allCreatures[i].creatureType===CT_SPARK&&allCreatures[i].tileAt===selectedTile){break;}}allCreatures.splice(i,1);},null_func,spark_on_selected_tile,function(){return g_TechnologyManager.by_name("Empower the Dragon").researched&&currentlyInBackside;},function(){return allCreatures.some(function(c){return c.creatureType===CT_SPARK&&allTiles[c.tileAt].claimed&&allTiles[c.tileAt].backsideTileType===TT_MITHRIL;});}));
    allSpells.push(new Spell("Water Music",WM_SPELL_DESC[0],(g_PersistentData.currentChallenge==="URC"?"A spell you learned from a book you read,":"A spell that the merfolk taught you,")+" to help when food is scarce.  Speeds up the life cycles of several species of edible fish.",3,TT_LAKE,75,null_func,function(){var r=50+50*g_TechnologyManager.by_name("Sea Symphony").researched,i=0,S=allTiles[selectedTile],T;for(;i<allTiles.length;i+=1){T=allTiles[i];if(!T.claimed){continue;}if(T.tileType!==TT_LAKE){continue;}if(dist(T.x,T.y,S.x,S.y)<r){allCreatures.push(new Creature(i,CT_FISH,100));}}if(g_TechnologyManager.by_name("Coral Music").researched&&allBuildings.get_tile_has(selectedTile,BT_REEF)&&allBuildings.get_reef_level()<5){if(g_ReefData.health===g_ReefData.maxHealth){allBuildings[2].upgradeLevel+=1;g_ReefData.on_reef_upgraded();g_FlyingText.set_text("Upgraded reef!",mouseX,mouseY);}else{g_FlyingText.set_text("Failed to upgrade the reef!\nRequires "+g_ReefData.maxHealth+"% health.",mouseX,mouseY);}g_FlyingText.fontColor=color(0,0,255);}if(g_TechnologyManager.by_name("Lake Music").researched){g_Factors.start_lake_music();}},function(){if(g_TechnologyManager.by_name("Lake Music").researched){g_Factors.end_lake_music();}},function(){return season!==4;},function(){return g_Diplomacy.merfolkStanding>=5&&!currentlyInBackside;},function(){return season!==4;}));
    allSpells.push(new Spell("Spark Music","Sacrifice a spark to kill swarms","Harness the energy of a spark to create a shockwave on the frontside that kills all swarms & slimes in a certain radius.  Must be cast on a tile with a spark.",3,TT_WASTELAND,750,null_func,function(){var RADIUS=180+240*g_TechnologyManager.by_name("Far-Reaching Music").researched,swarmsKilled=0,slimesKilled=0,baseManaFound=0,finalManaFound=0,gadoliniumFound=0,i=0;for(;i<allCreatures.length;i+=1){var cre=allCreatures[i];if(cre.creatureType!==CT_SWARM&&cre.creatureType!==CT_SLIME){continue;}if(dist(allTiles[cre.tileAt].x,allTiles[cre.tileAt].y,allTiles[selectedTile].x,allTiles[selectedTile].y)<=RADIUS){if(cre.creatureType===CT_SWARM){cre.creatureType=CT_BURNING;swarmsKilled+=1;}else{baseManaFound=random(0.5,2.35);finalManaFound+=baseManaFound*manaFromSlimeMulti;gadoliniumFound+=baseManaFound*0.1*gadoliniumFromSlimeMulti;g_ResourcePane.gadoliniumVisible=!0;slimesKilled+=1;cre.markedForDestruction=!0;}}}manaResource+=finalManaFound;gadoliniumResource+=gadoliniumFound;var fm=g_TechnologyManager.by_name("Flare Music").researched;if(fm){manaResource+=50*sqrt(swarmsKilled);}for(i=0;i<allCreatures.length;i+=1){var cre=allCreatures[i];if(cre.creatureType===CT_SPARK&&cre.tileAt===selectedTile){cre.markedForDestruction=!0;break;}}allCreatures.remove_marked_for_destruction();g_FlyingText.set_text("Electrocuted "+swarmsKilled+" swarm"+(swarmsKilled!==1?"s":"")+(fm&&swarmsKilled?", +"+g_ResourcePane.formatSI(50*sqrt(swarmsKilled))+" mana":""),mouseX,mouseY);if(slimesKilled>0){g_FlyingText.text+="\nElectrocuted "+slimesKilled+" slime"+(slimesKilled!==1?"s":"")+": +"+g_ResourcePane.formatSI(finalManaFound)+" mana, +"+g_ResourcePane.formatSI(gadoliniumFound)+" gadolinium";}g_FlyingText.fontColor=color(0,0,255);},null_func,spark_on_selected_tile,function(){return g_Diplomacy.merfolkStanding>=5&&currentlyInBackside;},function(){return allCreatures.some(function(c){return c.creatureType===CT_SPARK&&allTiles[c.tileAt].claimed&&allTiles[c.tileAt].backsideTileType===TT_WASTELAND;});}));
    allSpells.push(new Spell("De-Slimification",g_PersistentData.get_upgrade_effect("DA")?"Reverts up to 5 slime tiles back into swamps":"Reverts a slime tile back into a swamp","Slime is made from mana mixed with gadolinium.  This spell extracts both, leaving behind harmless volatile compounds that evaporate.",2,TT_SLIMED,25,null_func,deslime_selected_tile,null_func,true_func,function(){return dayCount>=200&&!currentlyInBackside;},function(){return allTiles.some(function(t){return t.claimed&&t.tileType===TT_SLIMED;});}));
    allSpells.push(new Spell("Dark Attunement","See & harvest dark energy",DA_SPELL_LORE[0],5,TT_PAVED_OVER,60,function(){darkEnergyProductionMultiFromAttunement=1+0.7*g_TechnologyManager.by_name("Boosted Attunement").researched;if(g_TechnologyManager.by_name("Metabolic Attunement").researched){foodConsumptionFromHouse=0;spiceConsumptionFromHouse=0;}},function(){if(this.castStat>=3&&!deCutscene2Shown){g_FlyingText.set_text("New building type unlocked!",64,224);g_FlyingText.fontColor=color(0);nextScreen="spells";currentScreen="dark-energy-cutscene-2";cutsceneTickCounter=0;deCutscene2Shown=!0;}if(!greetedCosmic&&this.castStat>=100&&gadoliniumResource>=1000){spawn_cosmic();}if(g_TechnologyManager.by_name("Electric Attunement").researched){allCreatures.push(new Creature(28,CT_SPARK,999));}},null_func,true_func,function(){return g_TechnologyManager.by_name("Dark Energy").researched;},true_func));
    allSpells.push(new Spell("Insta-Grow","Repairs all farms within its radius",IG_SPELL_LORE[0],4,TT_PLAINS,max(200,1500-10*g_PersistentData.get_challenge_times_completed("5F")),function(){foodProductionMultiFromInstaGrow=1+0.01*this.castStat;if(g_TechnologyManager.by_name("Green-Grow").researched){bioOrbProductionFromInstaGrow=(0.663*atan(g_Factors.get_plains_factor()-8.8+sqrt(this.castStat))+61.67);}},function(){if(selectedTile<0){throw"Expected to have selected a tile, instead we have no tile selected.";}var r=256+20*g_PersistentData.get_challenge_times_completed("5F"),rL=4+g_PersistentData.get_upgrade_effect("F1"),rH=6+rL,n=0,f=0;allBuildings.forEach(function(b){if(b.buildingType===BT_FARM&&b.destroyed&&dist(allTiles[selectedTile].x,allTiles[selectedTile].y,allTiles[b.tileIndex].x,allTiles[b.tileIndex].y)<=r){if(b.upgradeLevel<3){if(foodResource>=rL){foodResource-=rL;f+=rL;b.destroyed=!1;n+=1;}}else{if(foodResource>=rH){foodResource-=rH;f+=rH;b.destroyed=!1;n+=1;}}}});g_FlyingText.set_text("Repaired "+n+" farm"+(n===1?"":"s")+(f>0?"\n-"+f.toFixed(1)+" food":""),64,224);g_FlyingText.fontColor=color(0,0,255);recalculate_building_effects();if(g_TechnologyManager.by_name("Plains-Grow").researched){g_Factors.start_plains_grow();}},function(){if(g_TechnologyManager.by_name("Plains-Grow").researched){g_Factors.end_plains_grow();}},function(){if(season===4||selectedTile===-1){return false;}var index=building_on_tile(selectedTile,BT_FARM);if(index>-1){return g_TechnologyManager.by_name("Magic-Grow").researched||allBuildings[index].destroyed;}return false;},function(){return g_TechnologyManager.by_name("Insta-Grow").researched&&!currentlyInBackside;},function(){return season!==4&&allBuildings.some(function(b){return b.destroyed&&b.buildingType===BT_FARM;});}));
};
spellHints.currentlyShowing=0;
spellHints.select_next=function(){if(spellHints.length<2){spellHints.currentlyShowing=0;return;}spellHints.currentlyShowing=(spellHints.currentlyShowing+1)%spellHints.length;};
spellHints.get_str=function(){return spellHints.currentlyShowing>=spellHints.length?"There are no hints to show you right now.":spellHints[spellHints.currentlyShowing];};
} //Spell

{
//For more info, see previous file versions:
var map_west_edge_x=function(y){return round32(32*(0.5*((sq(mapEdgeRandomFactor)+1)%2)*sin(2.8125*y)+(0.25+0.5*mapEdgeRandomFactor)*cos((mapEdgeRandomFactor-0.25)*5.625*y)-mapEdgeRandomFactor*sin(0.5625*y)-3.25-1.5*abs(mapEdgeRandomFactor)));};
var world_postgeneration_ver4=function(x,y){
var j=x/32-2,i=y/32-2,multi=3+i/2,type=0,noiseScale=0.35,shift=-0.8,mapEdgeX=0;if(x<0){mapEdgeX=map_west_edge_x(y);}if(x<0&&mapEdgeX>x){return!1;}if(x<0&&mapEdgeX===x){type=TT_MAP_EDGE;}else{type=floor(multi*noise(noiseScale*i,noiseScale*j,PerlinNoiseRandomFactor)+shift);while(type>TT_SWAMP){type-=4;}while(type<TT_DESERT){type+=4;}type=constrain(type,TT_DESERT,TT_SWAMP);}if(x<0&&x===mapEdgeX+32&&y===64){type=TT_DESERT;}allTiles.push(new Tile(x,y,type));if(x<0&&x===mapEdgeX+32){allTiles[allTiles.length-1].nextToEdge=!0;}return!0;};
var world_generation_ver4=function(){
var INITIAL_MAP_WIDTH=8,i=0,j=0;noiseDetail(3,0.7);for(;i<INITIAL_MAP_WIDTH;i+=1){for(j=0;j<INITIAL_MAP_WIDTH;j+=1){world_postgeneration_ver4(64+32*j,64+32*i);}}};
var world_postgeneration_ver5=function(x,y){
var j=x/32-2,i=y/32-2,multi=3+i/2+0.01*j*j,type=0,noiseScale=0.35,shift=-0.8,mapEdgeX=0;if(x<0){mapEdgeX=map_west_edge_x(y);}if((x<0&&mapEdgeX>x)||y<64||y>288){return!1;}if(x<0&&mapEdgeX===x){type=TT_MAP_EDGE;}else{type=floor(multi*noise(noiseScale*i,noiseScale*j/4,PerlinNoiseRandomFactor)+shift);while(type>TT_SWAMP){type-=4;}while(type<TT_DESERT){type+=4;}type=constrain(type,TT_DESERT,TT_SWAMP);}if(x<0&&x===mapEdgeX+32&&y===64){type=TT_DESERT;}allTiles.push(new Tile(x,y,type));if(x<0&&x===mapEdgeX+32){allTiles[allTiles.length-1].nextToEdge=!0;}return!0;};
var world_generation_ver5=function(){
var INITIAL_MAP_WIDTH=8,i=0,j=0;noiseDetail(3,0.7);for(;i<INITIAL_MAP_WIDTH;i+=1){for(j=0;j<INITIAL_MAP_WIDTH;j+=1){world_postgeneration_ver5(64+32*j,64+32*i);}}};
var worldgen_master_func=function(o){
var i=0,s=!1,t=0,c;if(o===4){world_generation_ver4();}else if(o===5){world_generation_ver5();}else{throw"Invalid worldgen option; note some were removed in this version";}allTiles[28].tileType=TT_PAVED_OVER;allTiles[28].backsideTileType=TT_PAVED_OVER;allTiles[28].hasDarkEnergy=!1;allTiles[28].claim();tilesClaimed=1;for(;i<allTiles.length;i+=1){if(sq(allTiles[i].x-allTiles[28].x)+sq(allTiles[i].y-allTiles[28].y)<1600){allTiles[i].revealed=!0;}}allBuildings.build(28,BT_HOUSE);allCreatures.spawn_tile_gen_forcers();while(!s&&t<50){c=floor(random(0,allTiles.length));if(allTiles[c].tileType===TT_LAKE){allTiles[c].hasDarkEnergy=!1;allBuildings.build(c,BT_MER_MALL);s=!0;break;}t+=1;}if(!s){c=18;allTiles[c].tileType=TT_LAKE;allTiles[c].hasDarkEnergy=!1;allBuildings.build(c,BT_MER_MALL);s=!0;}if(g_PersistentData.get_is_reef_unlocked()){s=!1;t=0;while(!s&&t<50){c=floor(random(0,allTiles.length));if(allTiles[c].tileType===TT_LAKE&&!allBuildings.get_tile_has(c,BT_MER_MALL)){allTiles[c].hasDarkEnergy=!1;allBuildings.build(c,BT_REEF);s=!0;break;}t+=1;}if(!s){c=19;if(allBuildings.get_tile_has(c,BT_MER_MALL)){c=18;}allTiles[c].tileType=TT_LAKE;allTiles[c].hasDarkEnergy=!1;allBuildings.build(c,BT_REEF);s=!0;}}for(i=0;i<5;i+=1){spawn_fish();}recalculate_building_effects();if(g_TutorialProgress.get_is_in_tutorial()){currentScreen="tutorial-intro-stage";}else{currentScreen="opening-cutscene";ticksToShowDayNumber=60;cutsceneTickCounter=0;nextScreen="main";}
};
} //Worldgen

{
var Flying_Text=function(){
this.text="";this.fontColor=color(0);this.x=0;this.y=0;this.ticksToDisplay=0;};
Flying_Text.prototype.draw=function(){
if(this.ticksToDisplay>0){fill(this.fontColor);textSize(12);text(this.text,this.x,this.y);this.y-=1;this.ticksToDisplay-=1;}};
Flying_Text.prototype.set_text=function(newText,xPos,yPos){
this.text=newText;this.x=xPos;this.y=yPos;this.ticksToDisplay=60;};
g_FlyingText=new Flying_Text();
g_EnchTableFlyingText=new Flying_Text();
var Ench_Table_Animation=function(t){this.ticks=8;this.tileAt=t;};
Ench_Table_Animation.prototype.draw=function(){
if((currentScreen==="main"||currentScreen==="main-info")&&!currentlyInBackside&&this.ticks<34){var x=allTiles[this.tileAt].x-cameraX,y=allTiles[this.tileAt].y-cameraY,t=this.ticks;if(t<32){stroke(255,0,255);line(x-16+t,y-16,x-16+t,y-17+t);line(x-16,y-16+t,x-16+t,y-16+t);}if(t>=10){stroke(255,0,255,128);line(x-18+t,y-16,x-18+t,y-19+t);line(x-16,y-18+t,x-18+t,y-18+t);}}this.ticks+=1;};
Ench_Table_Animation.prototype.get_is_animation_completed=function(){
return this.ticks>=34;};
allEnchTableAnimations=[];
allEnchTableAnimations.add=function(){
if(selectedTile>-1&&selectedTile<allTiles.length){allEnchTableAnimations.push(new Ench_Table_Animation(selectedTile));}};
allEnchTableAnimations.draw_all=function(){
allEnchTableAnimations.forEach(function(a){a.draw();});for(var i=0;i<allEnchTableAnimations.length;i+=1){if(allEnchTableAnimations[i].get_is_animation_completed()){allEnchTableAnimations.splice(i,1);i=0;}else{i+=1;}}};
var Gold_Claim_Animation=function(t){this.ticks=0;this.tileAt=t;};
Gold_Claim_Animation.prototype.draw=function(){
if((currentScreen==="main"||currentScreen==="main-info")&&this.ticks<29){var x=allTiles[this.tileAt].x-cameraX,y=allTiles[this.tileAt].y-cameraY;noStroke();fill(255,255,192,205-sq(this.ticks)/4);if(allTiles[this.tileAt].tileType===TT_MAP_EDGE){rect(0,y-16,x+16,32);}else{rect(x-16,y-16,32,32);}}this.ticks+=goldenClaimTilesLeft===0;};
Gold_Claim_Animation.prototype.get_is_animation_completed=function(){
return this.ticks>=29;};
allGoldClaimAnimations=[];
allGoldClaimAnimations.add=function(){
if(selectedTile>-1&&selectedTile<allTiles.length){allGoldClaimAnimations.push(new Gold_Claim_Animation(selectedTile));}};
allGoldClaimAnimations.draw_all=function(){
allGoldClaimAnimations.forEach(function(a){a.draw();});for(var i=0;i<allGoldClaimAnimations.length;i+=1){if(allGoldClaimAnimations[i].get_is_animation_completed()){allGoldClaimAnimations.splice(i,1);i=0;}else{i+=1;}}};
var RWC_Limiter_Animation=function(x,y){this.x=x;this.y=y;this.opacity=255;};
RWC_Limiter_Animation.prototype.draw=function(){if(this.opacity<=0){return;}if(currentScreen==="main"||currentScreen==="main-info"){tint(255,255,255,this.opacity);image(rwcLimiter,this.x-cameraX,this.y-cameraY);tint(255,255,255,255);this.opacity-=26;}else{this.opacity=0;}};
allRWCLimiterAnimations=[];
allRWCLimiterAnimations.add=function(x,y){allRWCLimiterAnimations.push(new RWC_Limiter_Animation(x,y));};
allRWCLimiterAnimations.draw_all=function(){allRWCLimiterAnimations.forEach(function(a){a.draw();});for(var i=0;i<allRWCLimiterAnimations.length;i+=1){if(allRWCLimiterAnimations[i].opacity<=0){allRWCLimiterAnimations.splice(i,1);i=0;}else{i+=1;}}};
} //Animations

{
//For more info, see old file versions:
var Technology_Manager=function(){
this.nonCamelTechs=[];this.camelTechs=[];this.scrollOffset=0;this.scrollVelocity=0;};
Technology_Manager.prototype.screen_offset_update=function(){
if(this.count_visible_in_tech_screen()<5){this.scrollOffset = 0;this.scrollVelocity = 0;return;}var u=(keyIsPressed&&keyCode===UP)||(mouseIsPressed&&mouseX>=width-32&&mouseX<width&&mouseY>=37&&mouseY<69);var d=(keyIsPressed&&keyCode===DOWN)||(mouseIsPressed&&mouseX>=width-32&&mouseX<width&&mouseY>=height-142&&mouseY<height-110);if(u&&!d){this.scrollVelocity-=1;}if(d&&!u){this.scrollVelocity+=1;}if(u===d){if(this.scrollVelocity>=1){this.scrollVelocity-=1;}else if(this.scrollVelocity<=-1){this.scrollVelocity+=1;}else{this.scrollVelocity=0;}}this.scrollVelocity=constrain(this.scrollVelocity,-8,8);this.scrollOffset+=this.scrollVelocity;this.scrollOffset=constrain(this.scrollOffset,-164,56*(this.count_visible_in_tech_screen()-2));};
var Technology=function(n,d,t,s,u,b,c){
this.name=n;this.description=d;this.conditionString=s;this.unlockCondition=u;this.purchaseCondition=b;this.callback=c;this.researched=!1;this.isCamelTechnology=t;this.ucMet=!1;this.pcMet=!1;};
Technology.prototype.on_recalculate=function(){
if(this.researched){return;}this.ucMet=this.unlockCondition();this.pcMet=this.purchaseCondition();};
Technology.prototype.can_research=function(){
return!this.isCamelTechnology&&!this.researched&&this.ucMet&&this.pcMet;};
Technology.prototype.research=function(){
if(this.can_research()){this.researched=!0;this.callback();recalculate_building_effects();movesLeft-=1;}};
Technology.prototype.get_visible_in_tech_screen=function(){
if(this.isCamelTechnology){return this.researched&&g_PersistentData.techOptionsShowPurchasedFromCamels;}if(this.researched){return g_PersistentData.techOptionsShowPurchased;}if(this.ucMet){return this.pcMet?g_PersistentData.techOptionsShowAvailable:g_PersistentData.techOptionsShowUnavailable;}return!1;};
Technology_Manager.prototype.check_count_techs=function(){
if(this.camelTechs.length+this.nonCamelTechs.length===100){return;}throw"The wrong number of technologies loaded!";};
Technology_Manager.prototype.by_name=function(s){
for(var i=0;i<this.nonCamelTechs.length;i+=1){if(this.nonCamelTechs[i].name===s){return this.nonCamelTechs[i];}}throw"No tech with name "+s+" was found!\nPerhaps it was a camel tech?";};
Technology_Manager.prototype.camel_technology_by_name=function(s){
for(var i=0;i<this.camelTechs.length;i+=1){if(this.camelTechs[i].name===s){return this.camelTechs[i];}}throw"No tech with name "+s+" was found!\nPerhaps it was a non-camel tech?";};
Technology_Manager.prototype.get_completion_ratio=function(){
var r=0,F=function(t){r+=t.researched;};this.nonCamelTechs.forEach(F);this.camelTechs.forEach(F);return r/(this.nonCamelTechs.length+this.camelTechs.length);};
Technology_Manager.prototype.get_ccr=function(){
var c=0;this.camelTechs.forEach(function(T){c+=T.researched;});return c;};
Technology_Manager.prototype.count_available=function(){
var c=0;this.nonCamelTechs.forEach(function(t){c+=t.can_research();});return c;};
Technology_Manager.prototype.count_visible_in_tech_screen=function(){
var c=0,F=function(t){c+=t.get_visible_in_tech_screen();};this.nonCamelTechs.forEach(F);this.camelTechs.forEach(F);return c;};
Technology_Manager.prototype.get_farms_required_for_insta_grow_tech=function(){
return max(1,15-2*g_PersistentData.get_challenge_times_completed("5F"));};
Technology_Manager.prototype.get_pearl_cost_for_chronometer_tech=function(){
return max(0,15-3*g_PersistentData.get_challenge_times_completed("UR"));};
Technology_Manager.prototype.get_mithril_cost_for_house_lvl_3=function(){
return max(200,3000-50*g_PersistentData.get_challenge_times_completed("8Y"));};
Technology_Manager.prototype.get_tiles_for_land_grabbing_tech=function(){
return max(30,200-10*g_PersistentData.get_challenge_times_completed("RW"));};
Technology_Manager.prototype.add_technology=function(n,d,c,u,p,C){
this.nonCamelTechs.push(new Technology(n,d,!1,c,u,p,C));};
Technology_Manager.prototype.add_camel_technology=function(n,d){
this.camelTechs.push(new Technology(n,d,!0,"",null_func,null_func,null_func));};
Technology_Manager.prototype.inn=function(){
return this.camel_technology_by_name("Innovation").researched;};
Technology_Manager.prototype.setup_techs = function()
{
    var aac=g_PersistentData.currentChallenge==="AAC";
    //Spice
    var HLSC2=g_PersistentData.get_upgrade_effect("H2"),HLSC3=g_PersistentData.get_upgrade_effect("H3"),HLMC3=this.get_mithril_cost_for_house_lvl_3(),ettc=aac?180:20,CL3=g_PersistentData.get_upgrade_effect("C3");
    //Bio-Orb
    var HLBOC4=g_PersistentData.get_upgrade_effect("H4"),HLBOC5=g_PersistentData.get_upgrade_effect("H5").bo;
    //Golden apple
    var HLGAC5=g_PersistentData.get_upgrade_effect("H5").ga,MSGAC=g_PersistentData.get_upgrade_effect("Ms"),GEGAC=1000;
    //Pearl cost for Chronometer:
    var PCC=this.get_pearl_cost_for_chronometer_tech();
    //Farms:
    var frfigt=g_TechnologyManager.get_farms_required_for_insta_grow_tech(),fbboc=g_PersistentData.get_upgrade_effect("FB");
    //Clear:
    this.nonCamelTechs=[];this.camelTechs=[];
    
    if(aac){
    this.add_technology("Aqueducts","Increase food production based on the lake factor","lake factor ≥ 3.0, 1000 stone",function(){return allBuildings.count_of_type(BT_FARM)>2;},function(){return g_Factors.get_lake_factor()>=3&&stoneResource>=1000;},function(){stoneResource-=1000;});
    this.add_technology("Desert Collectors","Mana collectors can be built on deserts","costs 150 mana",function(){return allBuildings.count_of_type(BT_MINE,3)>2;},function(){return manaResource>=150;},function(){manaResource-=150;});
    }else{
    this.add_technology("Aqueducts","Increase food production based on the lake factor","lake factor ≥ 1.0",true_func,function(){return g_Factors.get_lake_factor()>=1;},null_func);
    this.add_technology("Desert Collectors","Mana collectors can be built on deserts","costs 15 mana",true_func,function(){return manaResource>=15;},function(){manaResource-=15;});
    }
    this.add_technology("Underwater Mining","Mines can be built underwater","sink a mine underwater, 120 spice",function(){return allBuildings.count_of_type(BT_TERRAFORMER)>0;},function(){return spiceResource>=120&&allBuildings.some(function(e){return e.buildingType===BT_MINE&&allTiles[e.tileIndex].tileType===TT_LAKE;});},function(){spiceResource-=120;});
    this.add_technology("Chronometer","+1 action per day, starting tomorrow",(PCC>0?("costs "+PCC+" pearl"):"free"),function(){return g_Diplomacy.totalPearlGained>0&&(g_Diplomacy.merfolkStanding>=5||!aac);},function(){return pearlResource>=PCC;},function(){pearlResource-=PCC;movesPerDay+=1;});
    if(aac){this.add_technology("Magic Ore","+3% mana production per mine you have","costs 500 spice, have 9 mines",function(){return allBuildings.count_of_type(BT_FURNACE)>0;},function(){return spiceResource>=500&&allBuildings.count_of_type(BT_MINE)+allBuildings.count_of_type(BT_MITHRIL_MINE)>=9;},function(){spiceResource-=500;});}
    else{this.add_technology("Magic Ore","+3% mana production per mine you have","have 3 mines",true_func,function(){return allBuildings.count_of_type(BT_MINE)+allBuildings.count_of_type(BT_MITHRIL_MINE)>=3;},null_func);}
    if(aac){this.add_technology("Better Farming Tools","Food production is boosted 25%, except in winter","costs 72 iron, 120 spice",function(){return g_TechnologyManager.camel_technology_by_name("High-Yield Seeds").researched;},function(){return spiceResource>=120&&ironResource>=72;},function(){spiceResource-=120;ironResource-=72;});}else{this.add_technology("Better Farming Tools","Food production is boosted 25%, except in winter","costs 6 iron, 10 spice",function(){return g_TechnologyManager.camel_technology_by_name("High-Yield Seeds").researched;},function(){return spiceResource>=10&&ironResource>=6;},function(){spiceResource-=10;ironResource-=6;});}
    this.add_technology("Hardened Drill Bit","Boosts mithril production by 40%.","7 mines, 175 mithril, 100 spice",function(){return allBuildings.count_of_type(BT_MITHRIL_MINE)>=3;},function(){return spiceResource>=100&&mithrilResource>=175&&allBuildings.count_of_type(BT_MITHRIL_MINE)>=7;},function(){spiceResource-=100;mithrilResource-=175;});
    this.add_technology("Food Bank","Consumes 10 food/day to increase max evacuees",fbboc+" bio-orb, 5000 stone, 4000 iron",function(){return totalBioOrbGainedFromEnchanting>=fbboc&&allBuildings.count_of_type(BT_SHELTER)>=3;},function(){return bioOrbResource>=fbboc&&stoneResource>=5000&&ironResource>=4000;},function(){bioOrbResource-=fbboc;stoneResource-=5000;ironResource-=4000;});
    this.add_technology("Farm Lvl. 3","Produces more food","costs 100 spice, 10 bio-orb",function(){return g_ResourcePane.bioOrbVisible&&allBuildings.count_of_type(BT_FARM,2)>=3;},function(){return spiceResource>=100&&bioOrbResource>=10;},function(){spiceResource-=100;bioOrbResource-=10;});
    this.add_technology("Slightly Cheaper Farms","Lvl. 3 farms cost less bio-orb","costs 45 spice",function(){return allBuildings.count_of_type(BT_FARM,3)>=1;},function(){return spiceResource>=45;},function(){spiceResource-=45;});
    this.add_technology("Spontaneous Growth","Farms cost less bio-orb based on plains factor","costs 5000 spice, 10000 stone",function(){return allBuildings.count_of_type(BT_FARM,4)>=3;},function(){return spiceResource>=5000&&stoneResource>=10000;},function(){spiceResource-=5000;stoneResource-=10000;});
    this.add_technology("Farm Lvl. 5","Produces more golden apple","costs 2000 spice, 30 golden apple",function(){return allBuildings.count_of_type(BT_FARM,4)>2&&allBuildings[0].upgradeLevel===5;},function(){return spiceResource>=2000&&goldenAppleResource>=30;},function(){spiceResource-=2000;goldenAppleResource-=30;});
    this.add_technology("Genetic Engineering","Instantly upgrade all existing farms to lvl. 3","costs "+GEGAC+" golden apple",function(){return g_ResourcePane.goldenAppleVisible&&allBuildings.count_of_type(BT_FARM,3);},function(){return goldenAppleResource>=GEGAC;},function(){goldenAppleResource-=GEGAC;allBuildings.forEach(function(B){if(B.buildingType===BT_FARM&&B.upgradeLevel<3){B.upgradeLevel=3;}});});
    this.add_technology("High-Capacity Shelters","Unlocks shelter lvls. 4~5","costs 3000 spice, 200 bio-orb",function(){return allBuildings.count_of_type(BT_SHELTER,3)>0&&allBuildings.count_of_type(BT_FARM,5)>0;},function(){return spiceResource>=3000&&bioOrbResource>=200;},function(){spiceResource-=3000;bioOrbResource-=200;});
    this.add_technology("Pearl Catcher","With spell Water Music: *2 pearl from fishing","costs 10 spice",function(){return allSpells.by_name("Water Music").castStat>=3&&g_ResourcePane.spiceVisible;},function(){return spiceResource>=10;},function(){spiceResource-=10;});
    this.add_technology("Sea Symphony","Increases radius of Water Music spell.","5 casts, costs 50 pearl",function(){return g_TechnologyManager.by_name("Pearl Catcher").researched;},function(){return allSpells.by_name("Water Music").castStat>=5&&pearlResource>=50;},function(){pearlResource-=50;});
    this.add_technology("Pearl Finder","Water Music: *2 pearl from fishing in autumn","10 casts, 200 spice, 10 bio-orb",function(){return g_TechnologyManager.by_name("Sea Symphony").researched&&g_ResourcePane.bioOrbVisible;},function(){return allSpells.by_name("Water Music").castStat>=10&&spiceResource>=200&&bioOrbResource>=10;},function(){spiceResource-=200;bioOrbResource-=10;});
    this.add_technology("Pearl Duplicator","Water Music: *2 pearl from fishing, +mana cost","30 casts, 5000 bio-orb",function(){return g_TechnologyManager.by_name("Pearl Finder").researched&&totalBioOrbGainedFromEnchanting>5000;},function(){return allSpells.by_name("Water Music").castStat>=30&&bioOrbResource>=5000;},function(){bioOrbResource-=5000;allSpells.by_name("Water Music").manaCost+=35;});
    this.add_technology("Pearl Maker","Water Music: *1.5 pearl from fishing, +mana cost","40 casts, 15000 bio-orb",function(){return g_TechnologyManager.by_name("Pearl Duplicator").researched;},function(){return allSpells.by_name("Water Music").castStat>=40&&bioOrbResource>=15000;},function(){bioOrbResource-=15000;allSpells.by_name("Water Music").manaCost+=35;});
    this.add_technology("Coral Music","Water Music can upgrade the reef, + mana cost","100% health, costs 50 bio-orb",function(){return allSpells.by_name("Water Music").castStat>=3&&g_ReefData.healthRecord>=100&&g_ResourcePane.bioOrbVisible;},function(){return bioOrbResource>=50&&g_ReefData.health>=100;},function(){bioOrbResource-=50;allSpells.by_name("Water Music").manaCost+=15;allSpells.by_name("Water Music").extendedDescription+="  Also helps corals to grow.";});
    this.add_technology("Lake Music","Water Music increases the lake factor by 6.0","20 casts, 200 bio-orb, 2000 pearl",function(){return g_TechnologyManager.by_name("Pearl Finder").researched&&g_TechnologyManager.by_name("Coral Music").researched;},function(){return allSpells.by_name("Water Music").castStat>=20&&bioOrbResource>=200&&pearlResource>=2000;},function(){bioOrbResource-=200;pearlResource-=2000;if(allSpells.by_name("Water Music").durationLeft>0){g_Factors.start_lake_music();}});
    this.add_technology("Electric Music","While Spark Music is active, more sparks spawn","costs 30 bio-orb",function(){return allSpells.by_name("Spark Music").castStat>=3&&totalBioOrbGainedFromEnchanting>=30;},function(){return bioOrbResource>=30;},function(){bioOrbResource-=30;});
    this.add_technology("Far-Reaching Music","Spark Music gets a larger radius, + mana cost","15 casts, costs 300 bio-orb",function(){return g_TechnologyManager.by_name("Electric Music").researched&&totalBioOrbGainedFromEnchanting>=330;},function(){return bioOrbResource>=300&&allSpells.by_name("Spark Music").castStat>=15;},function(){bioOrbResource-=300;allSpells.by_name("Spark Music").manaCost+=150;});
    this.add_technology("Flare Music","Spark Music gives mana when killing swarms","30 casts, 10000 spice",function(){return g_TechnologyManager.by_name("Far-Reaching Music").researched;},function(){return spiceResource>=10000&&allSpells.by_name("Spark Music").castStat>=30;},function(){spiceResource-=10000;});
    this.add_technology("Stonecrusher","Stonemover spell duration: +2 days","10 casts, costs 7 spice",function(){return allSpells.by_name("Stonemover").castStat>=3;},function(){return allSpells.by_name("Stonemover").castStat>=10&&spiceResource>=7;},function(){spiceResource-=7;allSpells.by_name("Stonemover").duration+=2;allSpells.by_name("Mineral Enrichment").duration+=2;});
    this.add_technology("Stonesplitter","Stonemover spell: duration & mana cost increased","15 casts, costs 60 spice",function(){return g_TechnologyManager.by_name("Stonecrusher").researched;},function(){return allSpells.by_name("Stonemover").castStat>=15&&spiceResource>=60;},function(){spiceResource-=60;allSpells.by_name("Stonemover").duration+=3;allSpells.by_name("Stonemover").manaCost+=4;allSpells.by_name("Mineral Enrichment").duration+=3;allSpells.by_name("Mineral Enrichment").manaCost+=40;});
    this.add_technology("Stonelifter","Stonemover spell also affects manual mining","30 casts, costs 50 spice",function(){return g_TechnologyManager.by_name("Stonesplitter").researched;},function(){return allSpells.by_name("Stonemover").castStat>=30&&spiceResource>=50;},function(){spiceResource-=50;});
    this.add_technology("Lithomancy","Autocast Stonemover continuously but weaker","2500 spice, 1200 dark energy",function(){return allBuildings[0].upgradeLevel>2&&totalDarkEnergyGained>99&&g_TechnologyManager.by_name("Stonecrusher").researched;},function(){return spiceResource>=2500&&darkEnergyResource>=1200;},function(){spiceResource-=2500;darkEnergyResource-=1200;var s=allSpells.by_name("Stonemover");s.description=SM_SPELL_DESC[1];s.extendedDescription=SM_SPELL_LORE[1];s.recastable=!0;s.autocast();s.durationLeft=9;});
    this.add_technology("Mineral Enhancement","The spell increases stone based on active spells.","8 casts, costs 25 bio-orb",function(){return allSpells.by_name("Mineral Enrichment").castStat>=3;},function(){return allSpells.by_name("Mineral Enrichment").castStat>=8&&bioOrbResource>=25;},function(){bioOrbResource-=25;});
    this.add_technology("Mineral Refinement","Spell iron prod. +1% per lava freezer or cooling fan","14 casts, costs 70 bio-orb",function(){return g_TechnologyManager.by_name("Mineral Enhancement").researched&&allBuildings.count_cooling_fans();},function(){return allSpells.by_name("Mineral Enrichment").castStat>=14&&bioOrbResource>=70;},function(){bioOrbResource-=70;});
    this.add_technology("Mineral Processing","Mineral Enrichment: cost & duration decreased","30 casts, costs 100 bio-orb",function(){return g_TechnologyManager.by_name("Mineral Refinement").researched&&g_TechnologyManager.by_name("Stonesplitter").researched;},function(){return allSpells.by_name("Mineral Enrichment").castStat>=30&&bioOrbResource>=100;},function(){bioOrbResource-=100;allSpells.by_name("Mineral Enrichment").duration-=5;allSpells.by_name("Mineral Enrichment").manaCost-=390;});
    this.add_technology("Heating System","Increases max evacuees by 5%.","costs 10000 flame orb",function(){return allBuildings.count_of_type(BT_SHELTER)>0&&allBuildings.count_of_type(BT_LAVA_FREEZER,2)>2;},function(){return flameOrbResource>=10000;},function(){flameOrbResource-=10000;});
    this.add_technology("High-Density Zoning","Increases max evacuees by "+(100*g_PersistentData.get_upgrade_effect("HA")-100).toFixed(0)+"%.","costs 100k spice",function(){return evacuees>999&&g_Diplomacy.totalSpiceGained>=10000;},function(){return spiceResource>=100000;},function(){spiceResource-=100000;});
    this.add_technology("Terraforming","New type of building",g_PersistentData.currentChallenge==="URC"?"resp. camels, costs 20 spice":"resp. camels, merfolk, 20 spice",function(){return g_ResourcePane.gadoliniumVisible&&tilesClaimed>=64&&g_PersistentData.get_has_completed_1_challenge();},function(){return(g_Diplomacy.merfolkStanding>5||g_PersistentData.currentChallenge==="URC")&&g_Diplomacy.camelsStanding>5&&spiceResource>=20;},function(){spiceResource-=20;});
    this.add_technology("Backside Terraforming","Terraform the backside","costs 50 spice",function(){return allBuildings[0].upgradeLevel>=2&&g_TechnologyManager.by_name("Terraforming").researched;},function(){return spiceResource>=50;},function(){spiceResource-=50;});
    this.add_technology("Less Restrictive Terraforming","For tiles with Lava freezers & mines","costs 950 pearl, 4 golden apple",function(){return allBuildings.count_of_type(BT_BACKSIDE_TERRAFORMER,4)>0&&allBuildings.count_of_type(BT_LAVA_FREEZER)&&allBuildings.count_of_type(BT_MITHRIL_MINE);},function(){return pearlResource>=950&&goldenAppleResource>=4;},function(){pearlResource-=950;goldenAppleResource-=4;});
    this.add_technology("Terraformer Lvl. 2","Upgrades all existing terraformers","costs 20 bio-orb",function(){return g_ResourcePane.bioOrbVisible&&allBuildings.count_of_type(BT_TERRAFORMER)+allBuildings.count_of_type(BT_BACKSIDE_TERRAFORMER)>=3;},function(){return bioOrbResource>=20;},function(){bioOrbResource-=20;upgrade_all_terraformers_to_level(2);});
    this.add_technology("Terraformer Lvl. 3","Upgrades all existing terraformers","terraform 10 tiles, 400 bio-orb",function(){return g_TechnologyManager.by_name("Terraformer Lvl. 2").researched&&g_ArtifactManager.count_discovered();},function(){return tilesTerraformed>=10&&bioOrbResource>=400;},function(){bioOrbResource-=400;upgrade_all_terraformers_to_level(3);});
    this.add_technology("Terraformer Lvl. 4","They boost some production & consumption values.","costs 6 golden apple & 800 spice",function(){return g_ResourcePane.goldenAppleVisible&&allBuildings.count_of_type(BT_TERRAFORMER,3)>0&&allBuildings.count_of_type(BT_BACKSIDE_TERRAFORMER,3)>0&&evacuees>=100;},function(){return goldenAppleResource>=6&&spiceResource>=800;},function(){goldenAppleResource-=6;spiceResource-=800;upgrade_all_terraformers_to_level(3);});
    this.add_technology("Upgrade All Terraformers","Instant-upgrade to lvl. 5","9999 golden apple (so expensive!)",function(){return allBuildings.count_of_type(BT_TERRAFORMER,5)+allBuildings.count_of_type(BT_BACKSIDE_TERRAFORMER,5)>0;},function(){return goldenAppleResource>=9999;},function(){goldenAppleResource-=9999;upgrade_all_terraformers_to_level(5);});
    this.add_technology("Cooling Fans","Upgraded from lava freezers on Cybermind tiles", "costs 300 bio-orb, 750 pearl",function(){return totalBioOrbGainedFromEnchanting>=720&&allBuildings.some(function(b){return b.buildingType===BT_LAVA_FREEZER&&allTiles[b.tileIndex].backsideTileType===TT_CYBERMIND;});},function(){return bioOrbResource>=300&&pearlResource>=750;},function(){bioOrbResource-=300;pearlResource-=750;});
    this.add_technology("Mana Exchanger","Cooling fans also reduce mana consumption","costs 160 bio-orb",function(){return allBuildings.count_cooling_fans()>=3;},function(){return bioOrbResource>=160;},function(){bioOrbResource-=160;});
    this.add_technology("Enchanting Table","New type of building (built on plains"+(g_PersistentData.get_upgrade_effect("ES")?" or swamps":"")+")","costs "+ettc+" spice",true_func,function(){return spiceResource>=ettc;},function(){spiceResource-=ettc;});
    if(aac){this.add_technology("Enchanting Table Synergy","Each enchanting table boosts each other","15 ench. tables, 120 flame orb",function(){return allBuildings.count_of_type(BT_ENCHANTING_TABLE)>0&&g_TechnologyManager.by_name("Enchanting Table").researched;},function(){return allBuildings.count_of_type(BT_ENCHANTING_TABLE)>=15&&flameOrbResource>=120;},function(){flameOrbResource-=120;});
    this.add_technology("Enchanting Table Lvl. 2","Allows you to refine mithril from stone","30 ench. tables, 80 iron",function(){return allBuildings.count_of_type(BT_ENCHANTING_TABLE)>1&&g_TechnologyManager.by_name("Enchanting Table").researched;},function(){return allBuildings.count_of_type(BT_ENCHANTING_TABLE)>=30&&ironResource>=80;},function(){ironResource-=80;});}
    else{this.add_technology("Enchanting Table Synergy","Each enchanting table boosts each other","2 ench. tables, costs 4 spice",function(){return allBuildings.count_of_type(BT_ENCHANTING_TABLE)>0&&g_TechnologyManager.by_name("Enchanting Table").researched;},function(){return allBuildings.count_of_type(BT_ENCHANTING_TABLE)>=2&&spiceResource>=4;},function(){spiceResource-=4;});
    this.add_technology("Enchanting Table Lvl. 2","Allows you to refine mithril from stone","5 ench. tables, costs 12 spice",function(){return allBuildings.count_of_type(BT_ENCHANTING_TABLE)>1&&g_TechnologyManager.by_name("Enchanting Table").researched;},function(){return allBuildings.count_of_type(BT_ENCHANTING_TABLE)>=5&&spiceResource>=12;},function(){spiceResource-=12;});}
    this.add_technology("Enchanting Table Lvl. 3","Allows you to get bio-orb","15 tables, 200 spice, 500 flame orb",function(){return g_ResourcePane.darkEnergyVisible&&allBuildings[0].upgradeLevel>=3&&allBuildings.count_of_type(BT_ENCHANTING_TABLE,2)>=1;},function(){return allBuildings.count_of_type(BT_ENCHANTING_TABLE)>=15&&spiceResource>=200&&flameOrbResource>=500;},function(){spiceResource-=200;flameOrbResource-=500;});
    this.add_technology("Enchanting Table Lvl. 5","Auto-upgrade lvl. 4 tables when used","costs 400 bio-orb",function(){return totalBioOrbGainedFromEnchanting>=400&&allBuildings.count_of_type(BT_ENCHANTING_TABLE,4)>=3;},function(){return bioOrbResource>=400;},function(){bioOrbResource-=400;});
    this.add_technology("Backside Dark Energy Mining","Unlocks mines lvl. 4 in the backside","costs 400 golden apple",function(){return allBuildings[0].upgradeLevel>4&&allSpells.by_name("Dark Attunement").castStat>=3&&allBuildings.count_of_type(BT_MITHRIL_MINE,3)>=3;},function(){return goldenAppleResource>=400;},function(){goldenAppleResource-=400;});
    this.add_technology("Mine Lvl. 5","Produces more dark energy","100 dark energy, 130 bio-orb",function(){return evacuees>=350&&g_ResourcePane.darkEnergyVisible&&g_ResourcePane.bioOrbVisible&&allBuildings.count_of_type(BT_MINE,4)>=1;},function(){return darkEnergyResource>=100&&bioOrbResource>=130;},function(){darkEnergyResource-=100;bioOrbResource-=130;});
    this.add_technology("Collector Lvl. 3","What it says on the tin","costs "+CL3+" spice",function(){return g_ResourcePane.gadoliniumVisible&&allBuildings.count_of_type(BT_COLLECTOR,2)>2&&g_Diplomacy.totalSpiceGained>=CL3;},function(){return spiceResource>=CL3;},function(){spiceResource-=CL3;});
    this.add_technology("Collector Lvls. 4 & 5","Highest levels of mana collector","swamp factor ≥ 5.0, costs 80 spice",function(){return g_PersistentData.get_total_challenges_completed()>2&&allBuildings.count_of_type(BT_COLLECTOR,3)>=1;},function(){return g_Factors.get_swamp_factor()>=5&&spiceResource>=80;},function(){spiceResource-=80;});
    this.add_technology("Dragon-Upgraded Collectors","The dragon will upgrade collectors on his tile","spell active, 400 food, 1 g. apple",function(){return g_ResourcePane.goldenAppleVisible&&allBuildings.count_of_type(BT_COLLECTOR,5)>2&&allSpells.by_name("Awaken the Dragon").castStat>=3;},function(){return foodResource>=400&&goldenAppleResource>=1&&creatures_of_type(CT_DRAGON)>0;},function(){foodResource-=400;goldenAppleResource-=1;spellHints.push("The dragon upgrades a collector when leaving a tile.\nIt uses the same amount of resources as normal.\nThe dragon won't build any new collectors.");allSpells.by_name("Awaken the Dragon").description="He will kill enemies & upgrade collectors for you";});
    this.add_technology("I\'m Waking Up","Awaken the Dragon: each cast increases duration","30 casts, spell active, 1000 spice",function(){return g_TechnologyManager.by_name("Dragon-Upgraded Collectors").researched;},function(){return spiceResource>=1000&&creatures_of_type(CT_DRAGON)>0&&allSpells.by_name("Awaken the Dragon").castStat>=30;},function(){spiceResource-=1000;});
    this.add_technology("Furnace Synergy","+1.5% iron production per furnace you have","costs 10 bio-orb",function(){return allBuildings[0].upgradeLevel>=4&&allBuildings.count_of_type(BT_FURNACE)>=3;},function(){return bioOrbResource>=10;},function(){bioOrbResource-=10;});
    this.add_technology("Ultimate Furnaces","Unlocks furnace lvl. 5","furnace lvl. 4, costs 222 bio-orb",function(){return g_ResourcePane.goldenAppleVisible&&allBuildings.count_of_type(BT_MITHRIL_MINE,3)>0&&g_TechnologyManager.by_name("Dark Energy").researched&&g_TechnologyManager.by_name("Furnace Synergy").researched;},function(){return allBuildings.count_of_type(BT_FURNACE,4)&&bioOrbResource>=222;},function(){bioOrbResource-=222;});
    this.add_technology("Backside Buildings Lvls. 2","Improved lava freezers & mithril mines","costs 250 bio-orb",function(){return totalBioOrbGainedFromEnchanting>=250&&allBuildings.count_of_type(BT_LAVA_FREEZER)>=3&&allBuildings.count_of_type(BT_MITHRIL_MINE)>=3;},function(){return bioOrbResource>=250;},function(){bioOrbResource-=250;});
    this.add_technology("Other Ores","Unlocks mines in the backside lvl. 3","costs 175 bio-orb",function(){return allBuildings.count_of_type(BT_MITHRIL_MINE,2)>=3;},function(){return bioOrbResource>=175;},function(){bioOrbResource-=175;});
    this.add_technology("Advanced Freezers","Unlocks lava freezers lvl. 4","costs 300 golden apple",function(){return allBuildings[0].upgradeLevel>4&&allBuildings.count_of_type(BT_LAVA_FREEZER,3)>=3;},function(){return goldenAppleResource>=300;},function(){goldenAppleResource-=300;});
    this.add_technology("Reversed Carnot Cycle","Unlocks lava freezers lvl. 5","costs 2000 bio-orb",function(){return totalDarkEnergyGained>=1000&&allBuildings.count_of_type(BT_LAVA_FREEZER,4)>0;},function(){return bioOrbResource>=2000;},function(){bioOrbResource-=2000;});
    this.add_technology("Dark Energy","Unlocks a new spell to detect dark energy",(g_PersistentData.currentChallenge==="UCC"?"1 furnace, ":"")+"costs 30 spice",function(){return dayCount>=dayToUnlockDarkEnergy;},function(){return spiceResource>=30&&(allBuildings.count_of_type(BT_FURNACE)>=1||g_PersistentData.currentChallenge!=="UCC");},function(){spiceResource-=30;spellHints.push("While Dark Attunement is active,\nyou can upgrade buildings\nthat require dark energy.");});
    this.add_technology("Sharp Attunement","Dark Attunement duration & mana cost increased","15 casts, costs 40 bio-orb",function(){return g_ResourcePane.bioOrbVisible&&allSpells.by_name("Dark Attunement").castStat>=3;},function(){return bioOrbResource>=40&&allSpells.by_name("Dark Attunement").castStat>=15;},function(){bioOrbResource-=40;allSpells.by_name("Dark Attunement").duration+=4;allSpells.by_name("Dark Attunement").manaCost+=40;});
    this.add_technology("Boosted Attunement","Dark Attunement: *1.7 production, +100 mana cost","costs 75 bio-orb",function(){return g_TechnologyManager.by_name("Sharp Attunement").researched;},function(){return bioOrbResource>=75;},function(){bioOrbResource-=75;var spell=allSpells.by_name("Dark Attunement");spell.manaCost+=100;spell.extendedDescription=DA_SPELL_LORE[1];spell.description+=", *1.7 dark energy production";});
    this.add_technology("Meditative Attunement","Dark Attunement: +1 day duration","30 casts, costs 100 spice",function(){return g_TechnologyManager.by_name("Boosted Attunement").researched;},function(){return spiceResource>=100&&allSpells.by_name("Dark Attunement").castStat>=30;},function(){spiceResource-=100;allSpells.by_name("Dark Attunement").duration+=1;});
    this.add_technology("Electric Attunement","Dark Attunement spawns a spark when cast","60 casts, costs 100 bio-orb",function(){return g_TechnologyManager.by_name("Meditative Attunement").researched;},function(){return bioOrbResource>=100&&allSpells.by_name("Dark Attunement").castStat>=60;},function(){bioOrbResource-=100;allSpells.by_name("Dark Attunement").extendedDescription=DA_SPELL_LORE[2];});
    this.add_technology("Metabolic Attunement","You don't eat food or spice with the spell active","80 casts, costs 42 bio-orb",function(){return g_TechnologyManager.by_name("Electric Attunement").researched;},function(){return bioOrbResource>=42&&allSpells.by_name("Dark Attunement").castStat>=80;},function(){bioOrbResource-=42;});
    this.add_technology("Impatient Attunement","Recast Dark Attunement to restore its duration","100 casts, costs 950 spice",function(){return g_TechnologyManager.by_name("Metabolic Attunement").researched;},function(){return spiceResource>=950&&allSpells.by_name("Dark Attunement").castStat>=100;},function(){var s=allSpells.by_name("Dark Attunement");spiceResource-=950;s.extendedDescription=DA_SPELL_LORE[3];s.recastable=!0;});
    this.add_technology("Dark Chronomancy","Dark Attunement pauses other spells' duration ticks","120 casts, costs 500 golden apple",function(){return g_ResourcePane.goldenAppleVisible&&g_TechnologyManager.by_name("Impatient Attunement").researched;},function(){return goldenAppleResource>=500&&allSpells.by_name("Dark Attunement").castStat>=120;},function(){goldenAppleResource-=500;});
    this.add_technology("Dark Desert","Lvl. 5 mines on deserts produce extra dark energy","desert factor ≥ 2, 90 bio-orb",function(){return allBuildings.count_of_type(BT_MINE,5)>0;},function(){return g_Factors.get_desert_factor()>=2&&bioOrbResource>=90;},function(){bioOrbResource-=90;});
    this.add_technology("Multiplier Shift","-7% pearl, -7% dark energy, +14% max evacuees","costs "+MSGAC+" golden apple",function(){return g_ReefData.healthRecord>300&&totalDarkEnergyGained>=1000&&g_ResourcePane.goldenAppleVisible&&evacuees>0;},function(){return goldenAppleResource>=MSGAC;},function(){goldenAppleResource-=MSGAC;});
    this.add_technology("Fast Engine","Unlocks interuniversal rescue system lvl. 3","200 bio-orb, rescue 200 people",function(){return g_ResourcePane.bioOrbVisible&&allBuildings.count_of_type(BT_IRS,2)>=1;},function(){return evacuees>=200&&bioOrbResource>=200;},function(){bioOrbResource-=200;});
    this.add_technology("Ultimate IRS","Unlocks interuniversal rescue system lvl. 5","costs 1000 golden apple",function(){return allBuildings[0].upgradeLevel>4&&allBuildings.count_of_type(BT_IRS,4)>0;},function(){return goldenAppleResource>=1000;},function(){goldenAppleResource-=1000;});
    this.add_technology("Loop-Unraveling Mining Pods","Level 5 buildings boost Mining Pods tech","costs 80 golden apple",function(){return g_ResourcePane.goldenAppleVisible&&g_TechnologyManager.camel_technology_by_name("Mining Pods").researched&&evacuees>=500;},function(){return goldenAppleResource>=80;},function(){goldenAppleResource-=80;});
    this.add_technology("Double-Capacity Pods","Doubles capacity of all rescue pods","costs 1000 golden apple",function(){if(evacuees<1){return!1;}var f=g_PersistentData.statLastFrosthours;return f>1||(f>0&&season!==4);},function(){return goldenAppleResource>=1000;},function(){goldenAppleResource-=1000;});
    this.add_technology("Slime Separation","*2 mana from slime","costs 20 spice",function(){return allSpells.by_name("De-Slimification").castStat>=3;},function(){return spiceResource>=20;},function(){spiceResource-=20;});
    this.add_technology("Slime Melter","De-Slimification mana cost: -5","40 casts, costs 5 spice",function(){return g_TechnologyManager.by_name("Slime Separation").researched;},function(){return allSpells.by_name("De-Slimification").castStat>=40&&spiceResource>=5;},function(){spiceResource-=5;allSpells.by_name("De-Slimification").manaCost-=5;});
    this.add_technology("Insta-Grow","Unlocks a new spell to repair farms",frfigt+ " farm"+(frfigt===1?"":"s")+", costs 75 spice",function(){return g_Diplomacy.camelsStanding>5&&allBuildings.count_of_type(BT_FARM)>=min(3,frfigt);},function(){return allBuildings.count_of_type(BT_FARM)>=frfigt&&spiceResource>=75;},function(){spiceResource-=75;});
    this.add_technology("Efficient-Grow","Insta-Grow spell cost: -100 mana","costs 60 spice",function(){return allSpells.by_name("Insta-Grow").castStat>=3;},function(){return spiceResource>=60;},function(){spiceResource-=60;allSpells.by_name("Insta-Grow").manaCost-=100;});
    this.add_technology("Magic-Grow","Insta-Grow can be cast on ANY farm","costs 5 golden apple",function(){return(allSpells.by_name("Insta-Grow").castStat>2||allSpells.by_name("Dark Attunement").castStat>99)&&g_ResourcePane.goldenAppleVisible;},function(){return goldenAppleResource>=5;},function(){goldenAppleResource-=5;allSpells.by_name("Insta-Grow").extendedDescription=IG_SPELL_LORE[1];});
    this.add_technology("Green-Grow","Insta-Grow makes bio-orb based on plains factor","15 casts, 25 golden apple",function(){return g_TechnologyManager.by_name("Magic-Grow").researched&&allBuildings[0].upgradeLevel>4;},function(){return allSpells.by_name("Insta-Grow").castStat>=15&&goldenAppleResource>=25;},function(){goldenAppleResource-=25;});
    this.add_technology("Plains-Grow","Insta-Grow increases the plains factor by 6.0","50 casts, 100 golden apple",function(){return g_TechnologyManager.by_name("Green-Grow").researched;},function(){return allSpells.by_name("Insta-Grow").castStat>=50&&goldenAppleResource>=100;},function(){goldenAppleResource-=100;if(allSpells.by_name("Insta-Grow").durationLeft>0){g_Factors.start_plains_grow();}});
    this.add_technology("Empower the Dragon","Unlocks a new spell, cast in the backside","costs 50 bio-orb",function(){return totalBioOrbGainedFromEnchanting>=50&&allBuildings[0].upgradeLevel>=2&&allSpells.by_name("Awaken the Dragon").castStat>=3;},function(){return bioOrbResource>=50;},function(){bioOrbResource-=50;});
    this.add_technology("Enchanted Dragonfire","Empower the Dragon: turns 10 fl. orb/day → spice","5 casts, costs 50 bio-orb",function(){return allSpells.by_name("Empower the Dragon").castStat>=3;},function(){return allSpells.by_name("Empower the Dragon").castStat>=5&&bioOrbResource>=50;},function(){bioOrbResource-=50;});
    this.add_technology("Blazing Dragonfire","Empower the Dragon: + duration, - cost increase","6 casts, costs 75 gadolinium",function(){return allSpells.by_name("Empower the Dragon").castStat>=5;},function(){return allSpells.by_name("Empower the Dragon").castStat>=6&&gadoliniumResource>=75;},function(){gadoliniumResource-=75;allSpells.by_name("Empower the Dragon").duration+=7;});
    this.add_technology("Efficient Dragonfire","Empower the Dragon: slower cost increase","30 casts, 1000 bio-orb",function(){return g_TechnologyManager.by_name("Blazing Dragonfire").researched;},function(){return allSpells.by_name("Empower the Dragon").castStat>=30&&bioOrbResource>=1000;},function(){bioOrbResource-=1000;});
    this.add_technology("Fishing Net","Fish all fish on the same tile","95% reef health, costs 60 spice",function(){return g_ReefData.healthRecord>=60;},function(){return g_ReefData.health>=95&&spiceResource>=60;},function(){spiceResource-=60;});
    this.add_technology("Slime Stabilizer","More slime creatures, *2 mana from slime","costs 10 gadolinium & 10 bio-orb",function(){return g_ArtifactManager.count_discovered()>=3&&allSpells.by_name("De-Slimification").castStat>=5;},function(){return gadoliniumResource>=10&&bioOrbResource>=10;},function(){gadoliniumResource-=10;bioOrbResource-=10;});
    this.add_technology("Turtles","Allows sea turtles & air turtles to spawn","costs 250 spice, 100 bio-orb",function(){return g_ResourcePane.bioOrbVisible;},function(){return spiceResource>=250&&bioOrbResource>=100;},function(){spiceResource-=250;bioOrbResource-=100;});
    this.add_technology("Land Grabbing","Eat golden apple to claim more land at once","costs 1 golden apple & 200 bio-orb.",function(){return tilesClaimed>=g_TechnologyManager.get_tiles_for_land_grabbing_tech()&&totalBioOrbGainedFromEnchanting>=200&&g_ResourcePane.goldenAppleVisible;},function(){return goldenAppleResource>=1&&bioOrbResource>=200;},function(){goldenAppleResource-=1;bioOrbResource-=200;});
    this.add_technology("House Lvl. 2","Provides various bonuses","costs 100 iron, "+HLSC2+" spice",function(){return g_ResourcePane.ironVisible&&g_Diplomacy.totalSpiceGained>=HLSC2;},function(){return spiceResource>=HLSC2&&ironResource>=100;},function(){spiceResource-=HLSC2;ironResource-=100;allBuildings[0].upgradeLevel+=1;currentScreen="house-upgraded";movesLeft+=1;});
    this.add_technology("House Lvl. 3","Provides various bonuses","costs "+HLMC3+" mithril, "+HLSC3+" spice",function(){return g_ResourcePane.mithrilVisible&&allBuildings[0].upgradeLevel===2&&g_Diplomacy.totalSpiceGained>=HLSC2+HLSC3;},function(){return spiceResource>=HLSC3&&mithrilResource>=HLMC3;},function(){spiceResource-=HLSC3;mithrilResource-=HLMC3;allBuildings[0].upgradeLevel+=1;currentScreen="house-upgraded";movesLeft+=1;});
    this.add_technology("House Lvl. 4","Provides various bonuses","costs "+HLBOC4+" bio-orb, 10000 stone",function(){return totalBioOrbGainedFromEnchanting>=HLBOC4&&allBuildings[0].upgradeLevel===3;},function(){return bioOrbResource>=HLBOC4&&stoneResource>=10000;},function(){bioOrbResource-=HLBOC4;stoneResource-=10000;allBuildings[0].upgradeLevel+=1;currentScreen="house-upgraded";movesLeft+=1;});
    this.add_technology("House Lvl. 5","Provides various bonuses",HLGAC5+" golden apple, "+HLBOC5+" bio-orb",function(){return g_ResourcePane.goldenAppleVisible&&totalBioOrbGainedFromEnchanting>=HLBOC4+HLBOC5&&allBuildings[0].upgradeLevel===4;},function(){return goldenAppleResource>=HLGAC5&&bioOrbResource>=HLBOC5;},function(){goldenAppleResource-=HLGAC5;bioOrbResource-=HLBOC5;allBuildings[0].upgradeLevel+=1;nextScreen="house-upgraded";currentScreen="max-house-cutscene";cutsceneTickCounter=0;movesLeft+=1;movesPerDay+=1;});
    this.add_camel_technology("High-Yield Seeds","Unlocks farms lvl. 2");this.add_camel_technology("Flame Heart","Enchanting yields more flame orb");this.add_camel_technology("Swarm Interference","Collectors may prevent swarms from spawning");this.add_camel_technology("Expanded Furnaces","Unlocks furnaces lvl. 3");this.add_camel_technology("Golden Seeds","Unlocks farms lvl. 4");this.add_camel_technology("Golden Tables","Ench. tables lvl. 4+ help farms grow golden apple");this.add_camel_technology("Mining Pods","Rescue pods also collect resources");this.add_camel_technology("Innovation","Increase production of Tier 1 resources");
};
g_TechnologyManager = new Technology_Manager();
} //Technology & Technology_Manager

{
//For more info, see old file versions:
var check_resource_variable=function(r,a){
switch(r){case"food":return foodResource>=a;case"mana":return manaResource>=a;case"pearl":return pearlResource>=a;case"stone":return stoneResource>=a;case"spice":return spiceResource>=a;case"gadolinium":return gadoliniumResource>=a;case"flame orb":return flameOrbResource>=a;case"iron":return ironResource>=a;case"golden apple":return goldenAppleResource>=a;case"dark energy":return darkEnergyResource>=a;case"bio-orb":return bioOrbResource>=a;case"mithril":return mithrilResource>=a;default:throw"Unknown resource variable!";}};
var add_resource_variable=function(r,a){
if(!a){return;}switch(r){case"food":foodResource+=a;break;case"mana":manaResource+=a;break;case"pearl":pearlResource+=a;break;case"stone":stoneResource+=a;break;case"spice":spiceResource+=a;g_ResourcePane.spiceVisible=!0;break;case"gadolinium":gadoliniumResource+=a;g_ResourcePane.gadoliniumVisible=!0;break;case"flame orb":flameOrbResource+=a;g_ResourcePane.flameOrbVisible=!0;break;case"iron":ironResource+=a;g_ResourcePane.ironVisible=!0;break;case"golden apple":goldenAppleResource+=a;g_ResourcePane.goldenAppleVisible=!0;break;case"dark energy":darkEnergyResource+=a;g_ResourcePane.darkEnergyVisible=!0;totalDarkEnergyGained+=a;break;case"bio-orb":bioOrbResource+=a;g_ResourcePane.bioOrbVisible=!0;break;case"mithril":mithrilResource+=a;g_ResourcePane.mithrilVisible=!0;break;default:throw"Unknown resource variable!";}};
var get_multi_list_entry=function(mL,r){
for(var i=0;i<mL.length;i+=1){if(mL[i].type===r){return mL[i].amount;}}return 1;};
var Trade=function(b,s,c){
this.buyType=b;if(typeof(b)==="object"){this.buyAmount=[];for(var i=0;i<b.length;i+=1){this.buyAmount.push(0);}}else{this.buyAmount=0;}this.sellType=s;if(typeof(s)==="object"){this.sellAmount=[];for(var i=0;i<s.length;i+=1){this.sellAmount.push(0);}}else{this.sellAmount=0;}this.cooldownTime=c;this.cooldownRemaining=0;};
Trade.prototype.get_can_trade=function(mL){
if(this.cooldownRemaining>0){return!1;}if(typeof(this.buyType)==="object"){for(var i=0;i<this.buyType.length;i+=1){if(!check_resource_variable(this.buyType[i],this.buyAmount[i]*get_multi_list_entry(mL,this.buyType[i]))){return!1;}}return!0;}return check_resource_variable(this.buyType,this.buyAmount*get_multi_list_entry(mL,this.buyType));};
Trade.prototype.update_cooldown=function(){if(this.cooldownRemaining>0){this.cooldownRemaining-=1;}};
Trade.prototype.perform_trade=function(mL){
if(!this.get_can_trade(mL)){return;}if(typeof(this.buyType)==="object"){for(var i=0;i<this.buyType.length;i+=1){add_resource_variable(this.buyType[i],-this.buyAmount[i]*get_multi_list_entry(mL,this.buyType[i]));}}else{add_resource_variable(this.buyType,-this.buyAmount*get_multi_list_entry(mL,this.buyType));}if(typeof(this.sellType)==="object"){for(var i=0;i<this.sellType.length;i+=1){add_resource_variable(this.sellType[i],this.sellAmount[i]*get_multi_list_entry(mL,this.sellType[i]));}}else{add_resource_variable(this.sellType,this.sellAmount*get_multi_list_entry(mL,this.sellType));}this.cooldownRemaining=this.cooldownTime;};
Trade.prototype.get_buy_string=function(mL){
var retStr="Give: ",thingsAdded=0;if(typeof(this.buyType)==="object"){for(var i=0;i<this.buyType.length;i+=1){if(this.buyAmount[i]>0){var multi=get_multi_list_entry(mL,this.buyType[i]);if(thingsAdded>0){retStr+=", ";}retStr+=g_ResourcePane.formatSI(this.buyAmount[i])+" "+this.buyType[i];if(multi!==1){retStr+=" ("+g_ResourcePane.formatSI(this.buyAmount[i]*multi)+" with bonus)";}thingsAdded+=1;}}}else{if(this.buyAmount>0){var multi=get_multi_list_entry(mL,this.buyType);retStr+=g_ResourcePane.formatSI(this.buyAmount)+" "+this.buyType;if(multi!==1){retStr+=" ("+g_ResourcePane.formatSI(this.buyAmount*multi)+" with bonus)";}thingsAdded+=1;}}if(thingsAdded===0){retStr+="nothing";}return retStr;};
Trade.prototype.get_sell_string=function(mL){
var retStr="Gain: ",thingsAdded=0;if(typeof(this.sellType)==="object"){for(var i=0;i<this.sellType.length;i+=1){if(this.sellAmount[i]>0){var multi=get_multi_list_entry(mL,this.sellType[i]);if(thingsAdded>0){retStr+=", ";}retStr+=g_ResourcePane.formatSI(this.sellAmount[i])+" "+this.sellType[i];if(multi!==1){retStr+=" ("+g_ResourcePane.formatSI(this.sellAmount[i]*multi)+" with bonus)";}thingsAdded+=1;}}}else{if(this.sellAmount>0){var multi=get_multi_list_entry(mL,this.sellType);retStr+=g_ResourcePane.formatSI(this.sellAmount)+" "+this.sellType;if(multi!==1){retStr+=" ("+g_ResourcePane.formatSI(this.sellAmount*multi)+" with bonus)";}thingsAdded+=1;}}if(thingsAdded===0){retStr+="nothing";}return retStr;};
//Standings: ≤1=neutral|1~3=acquaintances|3~5=friendly|5~7=respected|>7=allies
var Diplomacy = function()
{
    this.totalPearlGained=0;
    this.totalSpiceGained=0;
    this.tradesWithGiants=0;
    this.standingIncreaseMulti=min(9,1+0.5*g_PersistentData.get_challenge_times_completed("AA"));
    this.merfolkTradeUnlocked=!1;
    this.merfolkStanding=0;
    this.focusedTrade=0;
    this.merfolkTrades=[new Trade(["mana","food"],"pearl",0),new Trade(["pearl","mana"],["stone","gadolinium"],0),new Trade(["iron","food"],"pearl",0)];
    this.merfolkScreenOffset=0;
    this.merfolkBonusScreenOffset=0;
    this.merfolkBonusScreenVelocity=0;
    this.cameltechCostMulti=1;
    this.camelsTradeUnlocked=!1;
    this.camelsStanding=-0.5;
    this.camelsTrade=new Trade(["food","pearl"],"spice",0);
    this.cybermindTradeUnlocked=!1;
    this.cybermindStanding=0;
    //The allowed parameter is used to disable certain trades but ONLY by reason of
    //being in a certain Challenge, for example, pearl trading in a URC.
    this.cybermindAllTrades=[{type:"mana prod.",multi:2,allowed:!0},{type:"pearl trading",multi:10,allowed:!0},{type:"spice trading",multi:5,allowed:!0},{type:"gado. from slime",multi:1.75,allowed:!0},{type:"dark energy",multi:3,allowed:!0},{type:"from enchanting",multi:2,allowed:!0}];
    this.cybermindCurrentTrades=[0,1,2];
    this.cybermindTradeCosts=[100,300,600];
    this.cybermindTradePurchased=[!1,!1,!1];
    this.cybermindDaysUntilRefresh=60;
    //noone, merfolk, merfolk/nbonuses, reef, camels, cybermind
    this.currentlyMeetingWith="noone";
    
    this.randomize_merfolk_trades();
    this.randomize_camels_trade();
    this.randomize_cybermind_trades();
    
this.camels_get_resistant_seeds_offered=function(){
return season!==4&&this.camel_technology_unlocked()&&!g_TechnologyManager.camel_technology_by_name("High-Yield Seeds").researched;};
this.camels_get_can_buy_resistant_seeds=function(){
return this.camels_get_resistant_seeds_offered()&&stoneResource>=65*this.cameltechCostMulti;};
this.camels_buy_resistant_seeds=function(){
if(this.camels_get_can_buy_resistant_seeds()){stoneResource-=65*this.cameltechCostMulti;
g_TechnologyManager.camel_technology_by_name("High-Yield Seeds").researched=!0;if(g_PersistentData.currentChallenge!=="DAC"){this.camelsStanding+=0.7*this.standingIncreaseMulti;}this.on_any_camel_interaction();recalculate_building_effects();}};

this.camels_get_flame_heart_offered=function(){
return season!==4&&this.camel_technology_unlocked()&&g_TechnologyManager.camel_technology_by_name("High-Yield Seeds").researched&&!g_TechnologyManager.camel_technology_by_name("Flame Heart").researched;};
this.camels_get_can_buy_flame_heart=function(){
return this.camels_get_flame_heart_offered()&&foodResource>=100*this.cameltechCostMulti;};
this.camels_buy_flame_heart=function(){
if(this.camels_get_can_buy_flame_heart()){foodResource-=100*this.cameltechCostMulti;g_TechnologyManager.camel_technology_by_name("Flame Heart").researched=!0;if(g_PersistentData.currentChallenge!=="DAC"){this.camelsStanding+=0.5*this.standingIncreaseMulti;}this.on_any_camel_interaction();recalculate_building_effects();}};

this.camels_get_swarm_interference_offered=function(){
return season!==4&&this.camelsStanding>3&&g_TechnologyManager.camel_technology_by_name("Flame Heart").researched&&!g_TechnologyManager.camel_technology_by_name("Swarm Interference").researched;};
this.camels_get_can_buy_swarm_interference=function(){
return this.camels_get_swarm_interference_offered()&&ironResource>=50*this.cameltechCostMulti;};
this.camels_buy_swarm_interference=function(){
if(this.camels_get_can_buy_swarm_interference()){ironResource-=50*this.cameltechCostMulti;g_TechnologyManager.camel_technology_by_name("Swarm Interference").researched=!0;if(g_PersistentData.currentChallenge!=="DAC"){this.camelsStanding+=0.4*this.standingIncreaseMulti;}this.on_any_camel_interaction();recalculate_building_effects();}};

this.camels_get_expanded_furnaces_offered=function(){
return season!==4&&this.camelsStanding>3&&allBuildings[0].upgradeLevel>1&&g_TechnologyManager.camel_technology_by_name("Swarm Interference").researched&&!g_TechnologyManager.camel_technology_by_name("Expanded Furnaces").researched;};
this.camels_get_can_buy_expanded_furnaces=function(){
return this.camels_get_expanded_furnaces_offered()&&stoneResource>=8000*this.cameltechCostMulti;};
this.camels_buy_expanded_furnaces=function(){
if(this.camels_get_can_buy_expanded_furnaces()){stoneResource-=8000*this.cameltechCostMulti;g_TechnologyManager.camel_technology_by_name("Expanded Furnaces").researched=!0;if(g_PersistentData.currentChallenge!=="DAC"){this.camelsStanding+=0.2*this.standingIncreaseMulti;}this.on_any_camel_interaction();recalculate_building_effects();}};

this.camels_get_golden_seeds_offered=function(){
return season!==4&&this.camelsStanding>5&&g_TechnologyManager.camel_technology_by_name("Expanded Furnaces").researched&&!g_TechnologyManager.camel_technology_by_name("Golden Seeds").researched;};
this.camels_get_can_buy_golden_seeds=function(){
return this.camels_get_golden_seeds_offered()&&pearlResource>=10000*this.cameltechCostMulti&&mithrilResource>=4000*this.cameltechCostMulti&&allBuildings.count_of_type(BT_FARM,3)>=1;};
this.camels_buy_golden_seeds=function(){
if(this.camels_get_can_buy_golden_seeds()){pearlResource-=10000*this.cameltechCostMulti;mithrilResource-=4000*this.cameltechCostMulti;g_TechnologyManager.camel_technology_by_name("Golden Seeds").researched=!0;if(g_PersistentData.currentChallenge!=="DAC"){this.camelsStanding+=0.4*this.standingIncreaseMulti;}this.on_any_camel_interaction();recalculate_building_effects();}};

this.camels_get_golden_tables_offered=function(){
return season!==4&&this.camelsStanding>5&&g_TechnologyManager.camel_technology_by_name("Golden Seeds").researched&&!g_TechnologyManager.camel_technology_by_name("Golden Tables").researched;};
this.camels_get_can_buy_golden_tables=function(){
return this.camels_get_golden_tables_offered()&&darkEnergyResource>=500*this.cameltechCostMulti&&ironResource>=5000*this.cameltechCostMulti&&allBuildings.count_of_type(BT_ENCHANTING_TABLE,4)>=5;};
this.camels_buy_golden_tables=function(){
if(this.camels_get_can_buy_golden_tables()){darkEnergyResource-=500*this.cameltechCostMulti;ironResource-=5000*this.cameltechCostMulti;g_TechnologyManager.camel_technology_by_name("Golden Tables").researched=!0;if(g_PersistentData.currentChallenge!=="DAC"){this.camelsStanding+=0.1*this.standingIncreaseMulti;}this.on_any_camel_interaction();recalculate_building_effects();}};

this.camels_get_mining_pods_offered=function(){
return season!==4&&this.camelsStanding>7&&g_TechnologyManager.camel_technology_by_name("Golden Tables").researched&&!g_TechnologyManager.camel_technology_by_name("Mining Pods").researched;};
this.camels_get_can_buy_mining_pods=function(){
return this.camels_get_mining_pods_offered()&&ironResource>=10000*this.cameltechCostMulti&&gadoliniumResource>=100*this.cameltechCostMulti&&allBuildings.count_of_type(BT_IRS)>=1;};
this.camels_buy_mining_pods=function(){
if(this.camels_get_can_buy_mining_pods()){ironResource-=10000*this.cameltechCostMulti;gadoliniumResource-=100*this.cameltechCostMulti;g_TechnologyManager.camel_technology_by_name("Mining Pods").researched=!0;if(g_PersistentData.currentChallenge!=="DAC"){this.camelsStanding+=0.2*this.standingIncreaseMulti;}this.on_any_camel_interaction();recalculate_building_effects();}};

this.camels_get_innovation_offered=function(){
return season!==4&&this.camelsStanding>7&&g_TechnologyManager.camel_technology_by_name("Mining Pods").researched&&!g_TechnologyManager.inn();};
this.camels_get_can_buy_innovation=function(){
return this.camels_get_innovation_offered()&&mithrilResource>=10000*this.cameltechCostMulti&&goldenAppleResource>=20*this.cameltechCostMulti;};
this.camels_buy_innovation=function(){
if(this.camels_get_can_buy_innovation()){mithrilResource-=10000*this.cameltechCostMulti;goldenAppleResource-=20*this.cameltechCostMulti;g_TechnologyManager.camel_technology_by_name("Innovation").researched=!0;innovationLastConsumed=2;if(g_PersistentData.currentChallenge!=="DAC"){this.camelsStanding+=0.6*this.standingIncreaseMulti;}this.on_any_camel_interaction();recalculate_building_effects();}};
};
//Resets all variables to default values:
Diplomacy.prototype.on_new_run_start = function( challengeAbbreviation )
{
    this.totalPearlGained = 0;
    this.totalSpiceGained = 0;
    this.tradesWithGiants=0;
    this.standingIncreaseMulti=min(9,1+0.5*g_PersistentData.get_challenge_times_completed("AA"));
    this.merfolkTradeUnlocked = false;
    this.merfolkStanding = 0;
    this.focusedTrade=0;
    this.merfolkTrades = [
        new Trade(["mana","food"],"pearl",0),
        new Trade(["pearl","mana"],["stone","gadolinium"],0),
        new Trade(["iron","food"],"pearl",0)];
    this.merfolkScreenOffset = 0;
    this.merfolkBonusScreenOffset = 0;
    this.merfolkBonusScreenVelocity = 0;
    this.cameltechCostMulti=1;
    this.camelsTradeUnlocked = false;
    this.camelsStanding = -0.5;
    this.camelsTrade=new Trade(["food","pearl"],"spice",0);
    
    this.cybermindTradeUnlocked = 0;
    this.cybermindStanding = 0;
    this.cybermindAllTrades=[{type:"mana prod.",multi:2,allowed:true},{type:"pearl trading",multi:10,allowed:challengeAbbreviation!=="URC"},{type:"spice trading",multi:5,allowed:true},{type:"gado. from slime",multi:1.75,allowed:true},{type:"dark energy",multi:3,allowed:true},{type:"from enchanting",multi:2,allowed:true}];
    this.cybermindCurrentTrades = [ 0, 1, 2 ];
    this.cybermindTradeCosts = [ 100, 300, 600 ];
    this.cybermindTradePurchased = [ false, false, false ];
    this.cybermindDaysUntilRefresh = 60;
    
    this.currentlyMeetingWith = "noone";
    this.randomize_merfolk_trades();
    this.randomize_camels_trade();
    this.randomize_cybermind_trades();
};
Diplomacy.prototype.randomize_merfolk_trades=function(){
var mT=this.merfolkTrades,lv=allBuildings.get_mer_mall_level(),DACCount=g_PersistentData.get_challenge_times_completed("DA"),pearlAdd=0.5*DACCount+5*(lv>3),foodAdd=0.8*DACCount,hardDAC=g_PersistentData.currentChallenge==="DAC"&&DACCount>=3;mT[0].buyAmount[0]=random(4,16);mT[0].buyAmount[1]=hardDAC*random(3,5);mT[0].sellAmount=random(3,9)+pearlAdd;mT[1].buyAmount[0]=random(4,6);mT[1].buyAmount[1]=hardDAC*(mT[1].buyAmount[0]-1);mT[1].sellAmount[0]=random(6,9);mT[1].sellAmount[1]=0;mT[2].buyAmount[0]=random(2,6)-0.5*(lv>1);mT[2].buyAmount[1]=hardDAC*4;mT[2].sellAmount=mT[2].buyAmount[0]*random(1.8,3)+pearlAdd;if(mT.length>=5){mT[3].buyAmount[0]=random(40,50);mT[3].buyAmount[1]=hardDAC*0.25*mT[3].buyAmount[0];mT[3].sellAmount=random(2,3)+2*(lv>2);mT[4].buyAmount[0]=50+hardDAC*30;mT[4].buyAmount[1]=8;mT[4].sellAmount[0]=40+foodAdd;mT[4].sellAmount[1]=1*(lv>4);}if(mT.length>=7){var randFac=random(0.4,0.67);mT[5].buyAmount[0]=random(40,60);mT[5].buyAmount[1]=hardDAC*mT[5].buyAmount[0]*randFac;mT[5].sellAmount[0]=random(50,70);mT[5].sellAmount[1]=mT[5].buyAmount[0]*randFac;mT[6].buyAmount[0]=random(40,160);mT[6].buyAmount[1]=hardDAC*random(30,50);mT[6].sellAmount=random(30,90)+pearlAdd;}if(mT.length>=8){mT[7].buyAmount[0]=random(5,20);mT[7].buyAmount[1]=hardDAC*50;mT[7].sellAmount[0]=mT[7].buyAmount[0];mT[7].sellAmount[1]=pow(this.merfolkStanding,0.8)+foodAdd;}};
Diplomacy.prototype.randomize_camels_trade=function(){
var f4=allBuildings.count_of_type(BT_FARM,4)>0,hardURC=g_PersistentData.currentChallenge==="URC"&&g_PersistentData.get_challenge_times_completed("UR")>=2;this.camelsTrade.buyAmount[1]=random(2,6)+(hardURC?0.002*max(dayCount-100,0):0);if(f4||random(10)<7){this.camelsTrade.buyAmount[0]=random(1,4)*(1+f4);}else{this.camelsTrade.buyAmount[0]=0;}this.camelsTrade.sellAmount=0.5*this.camelsTrade.buyAmount[1];if(pearlResource>=1000&&spiceResource<9000){this.camelsTrade.buyAmount[1]*=10;this.camelsTrade.sellAmount*=6;}if(g_PersistentData.currentChallenge==="DAC"&&g_PersistentData.get_challenge_times_completed("DA")>=3){this.camelsTrade.buyAmount[0]*=3;this.camelsTrade.buyAmount[1]*=3;}};
Diplomacy.prototype.randomize_cybermind_trades=function(){
this.cybermindCurrentTrades[0]=floor(random(0,6));this.cybermindCurrentTrades[1]=floor(random(0,6));this.cybermindCurrentTrades[2]=floor(random(0,6));while(this.cybermindCurrentTrades[1]===this.cybermindCurrentTrades[0]){this.cybermindCurrentTrades[1]=floor(random(0,6));}while(this.cybermindCurrentTrades[2]===this.cybermindCurrentTrades[1]||this.cybermindCurrentTrades[2]===this.cybermindCurrentTrades[0]){this.cybermindCurrentTrades[2]=floor(random(0,6));}};
Diplomacy.prototype.standing_as_string=function(s){if(s>7){return"allies";}if(s>5){return"respected";}if(s>3){return"friendly";}if(s>1){return"acquaintances";}return"neutral";};
Diplomacy.prototype.merfolk_get_standing_as_string=function(){return this.standing_as_string(this.merfolkStanding);};
Diplomacy.prototype.camels_get_standing_as_string=function(){return this.standing_as_string(this.camelsStanding);};
Diplomacy.prototype.spr=function(s){
if(s>7){return 1;}if(s>5){return constrain((s-5)/2,0.01,0.99);}if(s>3){return constrain((s-3)/2,0.01,0.99);}if(s>1){return constrain((s-1)/2,0.01,0.99);}return 0;};
Diplomacy.prototype.merfolk_get_spr=function(s){return this.spr(this.merfolkStanding);};
Diplomacy.prototype.camels_get_spr=function(s){return this.spr(this.camelsStanding);};
Diplomacy.prototype.cybermind_get_standing_as_string=function(){return this.standing_as_string(this.cybermindStanding);};
Diplomacy.prototype.giants_get_next_cost=function(){return 2000*(this.tradesWithGiants+1);};
Diplomacy.prototype.giants_get_prod_multi=function(){return sq(this.tradesWithGiants)/20+this.tradesWithGiants/4+1;};
Diplomacy.prototype.giants_get_cons_multi=function(){return 1+0.3*this.tradesWithGiants;};
Diplomacy.prototype.giants_perform_trade=function(){
var c=this.giants_get_next_cost();if(spiceResource>=c){spiceResource-=c;this.tradesWithGiants+=1;recalculate_building_effects();}};
Diplomacy.prototype.merfolk_get_multi_list=function(){
var mL=[{type:"stone",amount:this.merfolk_get_stone_multi()}],DACs=g_PersistentData.get_challenge_times_completed("DA"),pearlMulti=pearlTradeMultiFromCyber,GdMulti=sqrt(gadoliniumFromSlimeMulti);if(season===2){pearlMulti*=1.25;}if(season===3){GdMulti*=2;}if(pearlMulti!==1){mL.push({type:"pearl",amount:pearlMulti});}if(DACs>2){mL.push({type:"dark energy",amount:0.7*sqrt(DACs)});}if(GdMulti!==1){mL.push({type:"gadolinium",amount:GdMulti});}if(allBuildings.get_mer_mall_level()>4){mL.push({type:"mana",amount:0.93});}return mL;};
Diplomacy.prototype.merfolk_get_buy_string=function(i){return this.merfolkTrades[i].get_buy_string(this.merfolk_get_multi_list());};
Diplomacy.prototype.merfolk_get_sell_string=function(i){return this.merfolkTrades[i].get_sell_string(this.merfolk_get_multi_list());};
Diplomacy.prototype.merfolk_get_can_trade=function(i){return this.merfolkTradeUnlocked&&this.merfolkTrades[i].get_can_trade(this.merfolk_get_multi_list());};
Diplomacy.prototype.merfolk_perform_trade=function(x){
if(this.merfolk_get_can_trade(x)){var o=this.merfolkStanding,tr=this.merfolkTrades[x],i=0;tr.perform_trade(this.merfolk_get_multi_list());if(typeof(tr.sellType)==="object"){for(;i<tr.sellType.length;i+=1){this.totalPearlGained+=tr.sellAmount[i]*(tr.sellType[i]==="pearl");}}else{this.totalPearlGained+=tr.sellAmount*(tr.sellType==="pearl");}this.merfolkStanding+=this.standingIncreaseMulti*((this.merfolkStanding<5)?0.15:0.01);if(this.standing_as_string(this.merfolkStanding)==="respected"&&this.standing_as_string(o)!=="respected"){g_FlyingText.set_text("New spell unlocked!",64,288);g_FlyingText.fontColor=color(0,128,0);currentScreen="water-music-cutscene";nextScreen="diplomacy";cutsceneTickCounter=0;if(g_TutorialProgress.get_is_in_tutorial()){g_TutorialProgress.add_wm_goals();}}this.randomize_merfolk_trades();recalculate_building_effects();movesLeft-=1;}};
Diplomacy.prototype.merfolk_get_trade_item_visual_width=function(i){
textSize(12);return this.merfolkTrades[i].cooldownRemaining?128:max(128,max(textWidth(this.merfolk_get_buy_string(i))+24,textWidth(this.merfolk_get_sell_string(i))+24));};
Diplomacy.prototype.merfolk_get_upgrade_mall_offered=function(){
if(season===4||allBuildings.length<2||!allTiles[allBuildings[1].tileIndex].claimed||this.merfolkStanding<=7||allBuildings[1].destroyed){return!1;}switch(allBuildings.get_mer_mall_level()){case 1:return g_ResourcePane.mithrilVisible;case 2:return g_ReefData.health>=440;case 3:return g_ArtifactManager.count_discovered()>=2;case 4:return allBuildings.length>=200;default:return!1;}};
Diplomacy.prototype.merfolk_get_upgrade_mall_cost_string=function(){
if(this.merfolkStanding<=7){return"";}switch(allBuildings.get_mer_mall_level()){case 1:return g_ResourcePane.mithrilVisible?"Costs 1000 stone, 20 mithril.":"Requires a resource you don't have yet.";case 2:return g_ReefData.health>=440?"Costs 1000 food, 100 bio-orb.":(g_PersistentData.get_is_reef_unlocked()?"The reef isn't healthy enough yet.":"Requires ???");case 3:var d=g_ArtifactManager.count_discovered();if(d>=2){return"Costs 4000 pearl, 1000 mithril.";}if(d===1){return"Requires that you have any 2 Artifacts.";}return"Requires ???";case 4:return allBuildings.length>=200?"Costs "+(g_ResourcePane.goldenAppleVisible?"64 golden apple":"???")+", 6400 iron.":"Have 200 buildings first.";default:return"An error has occurred.";}};
Diplomacy.prototype.merfolk_get_can_upgrade_mall=function(){
if(!this.merfolk_get_upgrade_mall_offered()){return!1;}switch(allBuildings.get_mer_mall_level()){case 1:return stoneResource>=1000&&mithrilResource>=20;case 2:return foodResource>=1000&&bioOrbResource>=100;case 3:return pearlResource>=4000&&mithrilResource>=1000;case 4:return goldenAppleResource>=64&&ironResource>=6400;default:return!1;}};
Diplomacy.prototype.merfolk_upgrade_mall=function(){
switch(allBuildings.get_mer_mall_level()){case 1:this.merfolkTrades.push(new Trade(["flame orb","mana"],"dark energy",12));this.merfolkTrades.push(new Trade(["mana","pearl"],["food","gadolinium"],2));stoneResource-=1000;mithrilResource-=20;break;case 2:this.merfolkTrades.push(new Trade(["pearl","mana"],["stone","iron"],7));this.merfolkTrades.push(new Trade(["mana","food"],"pearl",2));this.merfolkTrades[3].cooldownTime=10;foodResource-=1000;bioOrbResource-=100;break;case 3:this.merfolkTrades.push(new Trade(["bio-orb","mana"],["dark energy","food"],3));this.merfolkTrades[3].cooldownTime=8;this.merfolkTrades[4].cooldownTime=0;pearlResource-=4000;mithrilResource-=1000;break;case 4:goldenAppleResource-=64;ironResource-=6400;break;}allBuildings[1].upgradeLevel+=1;movesLeft-=1;this.randomize_merfolk_trades();recalculate_building_effects();};
Diplomacy.prototype.camel_technology_unlocked=function(){return this.camelsStanding>1;};
Diplomacy.prototype.get_should_display_camel_tech_notification=function(){
return this.camels_get_can_buy_resistant_seeds()||this.camels_get_can_buy_flame_heart()||this.camels_get_can_buy_swarm_interference()||this.camels_get_can_buy_expanded_furnaces()||this.camels_get_can_buy_golden_seeds()||this.camels_get_can_buy_golden_tables()||this.camels_get_can_buy_mining_pods()||this.camels_get_can_buy_innovation();};
Diplomacy.prototype.camels_get_spice_multi=function(){
var m=1*g_PersistentData.get_upgrade_effect("ST")*spiceTradeMultiFromCyber,s=this.camelsStanding;if(s>=3){m*=1.2;if(s>=5){m*=1.2;if(s>=7){m*=1.2;}}}if(g_TechnologyManager.camel_technology_by_name("Flame Heart").researched){m*=1.05;}if(allBuildings[0].upgradeLevel>=3){m*=1.75;}if(g_TechnologyManager.camel_technology_by_name("Golden Seeds").researched){m*=1.05;}return m;};
Diplomacy.prototype.merfolk_get_stone_multi=function(){return(sqrt(dayCount)/20+1)*pow(1.05,g_PersistentData.get_challenge_times_completed("DA"));};
Diplomacy.prototype.cybermind_get_spawn_spark_cost=function(){
return pow(2,floor(creatures_of_type(CT_SPARK)/50))*max(5000,0.01*min(stoneResource,pow(10,9)))*(1+0.75*(g_PersistentData.currentChallenge==="DAC"&&g_PersistentData.get_challenge_times_completed("DA")>=3));};
Diplomacy.prototype.cybermind_get_cooling_fan_cost=function(l){
return 6000-1000*l+1650*(g_PersistentData.currentChallenge==="DAC"&&g_PersistentData.get_challenge_times_completed("DA")>=3);};
Diplomacy.prototype.cybermind_get_buy_string=function(i){
var m=mithril_mine_on_tile(selectedTile),f=cooling_fan_on_tile(selectedTile),c=this.cybermind_get_trade_cost(i);if(i===0&&selectedTile>-1&&m>-1){c=this.cybermind_get_spawn_spark_cost();if(!Number.isInteger(c)){c=g_ResourcePane.formatSI(c);}return"Give: "+c+" stone";}if(i===1&&selectedTile>-1&&f>-1){c=this.cybermind_get_cooling_fan_cost(allBuildings[f].upgradeLevel);if(!Number.isInteger(c)){c=g_ResourcePane.formatSI(c);}return"Give: "+c+" stone";}if(i===2&&selectedTile>-1&&m>-1&&f>-1){return g_PersistentData.get_has_wifi()?"You already received the gift!":"The Cybermind offers a gift!";}if(!this.cybermindAllTrades[this.cybermindCurrentTrades[i]].allowed){return"The Cybermind won't sell this";}if(!Number.isInteger(c)){c=g_ResourcePane.formatSI(c);}return"Give: "+c+" iron";};
Diplomacy.prototype.cybermind_get_bonus_string=function(x){
switch(x){case 0:case 1:case 2:var i=this.cybermindCurrentTrades[x];return"*"+this.cybermindAllTrades[i].multi.toFixed(2)+" " +(i===4&&g_PersistentData.statTotalPeopleSaved===0&&!g_ResourcePane.darkEnergyVisible?"to ???":this.cybermindAllTrades[i].type);default:return"Error";}};
Diplomacy.prototype.cybermind_get_sell_string=function(i){
var m=mithril_mine_on_tile(selectedTile),f=cooling_fan_on_tile(selectedTile);if(i===0&&selectedTile>-1&&m>-1){var n=allBuildings[m].upgradeLevel;return"Gain: spawn "+n+" spark"+(n>1?"s":"");}if(i===1&&selectedTile>-1&&f>-1){return"Gain: increased trading multis";}if(i===2&&selectedTile>-1&&m>-1&&f>-1){return"It's something called \"Wi-Fi.\"";}if(this.cybermindAllTrades[this.cybermindCurrentTrades[i]].allowed){return"Gain: "+this.cybermind_get_bonus_string(i);}return"because you're in a "+g_PersistentData.currentChallenge+".";};
Diplomacy.prototype.cybermind_get_can_trade=function(i){
if(!this.cybermindTradeUnlocked){return!1;}var m=mithril_mine_on_tile(selectedTile),f=cooling_fan_on_tile(selectedTile);if(i===0&&selectedTile>-1&&m>-1){return stoneResource>=this.cybermind_get_spawn_spark_cost();}if(i===1&&selectedTile>-1&&f>-1){return stoneResource>=this.cybermind_get_cooling_fan_cost(allBuildings[f].upgradeLevel);}if(i===2&&selectedTile>-1&&m>-1&&f>-1){return!1;}return!this.cybermindTradePurchased[i]&&ironResource>=this.cybermind_get_trade_cost(i)&&this.cybermindAllTrades[this.cybermindCurrentTrades[i]].allowed;};
Diplomacy.prototype.cybermind_get_cant_afford=function(i){
if(!this.cybermindTradeUnlocked){return!1;}var m=mithril_mine_on_tile(selectedTile),f=cooling_fan_on_tile(selectedTile);if(i===0&&selectedTile>-1&&m>-1){return stoneResource<this.cybermind_get_spawn_spark_cost();}if(i===1&&selectedTile>-1&&f>-1){return stoneResource<this.cybermind_get_cooling_fan_cost(allBuildings[f].upgradeLevel);}if(i===2&&selectedTile>-1&&m>-1&&f>-1){return!1;}return!this.cybermindTradePurchased[i]&&ironResource<this.cybermind_get_trade_cost(i)&&this.cybermindAllTrades[this.cybermindCurrentTrades[i]].allowed;};
Diplomacy.prototype.cybermind_perform_trade=function(i){
if(!this.cybermind_get_can_trade(i)){return;}var m=mithril_mine_on_tile(selectedTile),f=cooling_fan_on_tile(selectedTile);if(i===0&&selectedTile>-1&&m>-1){stoneResource-=this.cybermind_get_spawn_spark_cost();var n=allBuildings[m].upgradeLevel,t,j=0;for(;j<n;j+=1){t=new Creature(selectedTile,CT_SPARK,99);t.animation=9*j;allCreatures.push(t);}g_FlyingText.set_text("Spawned "+n+" spark"+(n>1?"s":""),52,176);g_FlyingText.fontColor=color(0);recalculate_building_effects();return;}if(i===1&&selectedTile>-1&&f>-1){stoneResource-=this.cybermind_get_cooling_fan_cost(allBuildings[f].upgradeLevel);this.increase_cybermind_multis(0.1*allBuildings[f].upgradeLevel+0.1,color(0));recalculate_building_effects();return;}var r=this.cybermindAllTrades[this.cybermindCurrentTrades[i]];ironResource-=this.cybermind_get_trade_cost(i);switch(r.type){case"mana prod.":manaProductionMultiFromCyber*=r.multi;break;case"pearl trading":pearlTradeMultiFromCyber*=r.multi;break;case"spice trading":spiceTradeMultiFromCyber*=r.multi;break;case"gado. from slime":gadoliniumFromSlimeMultiFromCyber*=r.multi;break;case"dark energy":darkEnergyProductionMultiFromCyber*=r.multi;break;case"from enchanting":enchantingProductMultiFromCyber*=r.multi;break;}this.cybermindTradePurchased[i]=!0;recalculate_building_effects();};
Diplomacy.prototype.update_trade_cooldowns=function(){
this.merfolkTrades.forEach(function(mt){mt.update_cooldown();});this.camelsTrade.update_cooldown();this.cybermindDaysUntilRefresh-=1;if(this.cybermindDaysUntilRefresh<=0){/*Reset Cybermind trading bonuses*/manaProductionMultiFromCyber=1;pearlTradeMultiFromCyber=1;spiceTradeMultiFromCyber=1;gadoliniumFromSlimeMultiFromCyber=1;darkEnergyProductionMultiFromCyber=1;enchantingProductMultiFromCyber=1;this.cybermindTradePurchased=[!1,!1,!1];this.cybermindDaysUntilRefresh=60;this.randomize_cybermind_trades();}};
Diplomacy.prototype.merfolk_screen_offset_update=function(){
var tW=0,i=0,tX=0;for(;i<this.merfolkTrades.length;i+=1){tW+=this.merfolk_get_trade_item_visual_width(i);}if(this.merfolkStanding<=7||allBuildings.get_mer_mall_level()>4){this.focusedTrade=max(this.focusedTrade,0);}if(this.focusedTrade<0){tX=284;}else{tX=200-floor(this.merfolk_get_trade_item_visual_width(this.focusedTrade)/2);for(var i=0;i<this.focusedTrade&&i<this.merfolkTrades.length;i+=1){tX-=this.merfolk_get_trade_item_visual_width(i);}}if(abs(tX-this.merfolkScreenOffset)<1){this.merfolkScreenOffset=tX;}else{this.merfolkScreenOffset=(this.merfolkScreenOffset+tX)/2;}this.merfolkScreenOffset=constrain(this.merfolkScreenOffset,132-tW,allBuildings.get_mer_mall_level()===5?64:284);};
Diplomacy.prototype.merfolk_bonuses_expected_lines=function(){
var l=allBuildings.get_mer_mall_level(),d=g_PersistentData.get_challenge_times_completed("DA"),c=3+3*(d>0)+2*(season===2)+2*(pearlTradeMultiFromCyber!==1)+2*(d>2&&l>1)+2*(d>=3&&g_PersistentData.currentChallenge==="DAC")+2*(l>1)+2*(l>3)+2*(l>2);if(l>1&d>0){c+=2+(l>3);}if(l>4){c+=4+2*(season===3);}return c;};
Diplomacy.prototype.merfolk_bonus_screen_offset_update=function(){
var l=this.merfolk_bonuses_expected_lines();if(l<7){this.merfolkBonusScreenVelocity=0;this.merfolkBonusScreenOffset=0;return;}var u=(keyIsPressed&&keyCode===UP)||(mouseIsPressed&&mouseX>=width-32&&mouseX<width&&mouseY>=37&&mouseY<69),d=(keyIsPressed&&keyCode===DOWN)||(mouseIsPressed&&mouseX>=width-32&&mouseX<width&&mouseY>=height-142&&mouseY<height-110);if(u&&!d){this.merfolkBonusScreenVelocity-=1;}if(d&&!u){this.merfolkBonusScreenVelocity+=1;}if(u===d){if(this.merfolkBonusScreenVelocity>=1){this.merfolkBonusScreenVelocity-=1;}else if(this.merfolkBonusScreenVelocity<=-1){this.merfolkBonusScreenVelocity+=1;}else{this.merfolkBonusScreenVelocity=0;}}this.merfolkBonusScreenVelocity=constrain(this.merfolkBonusScreenVelocity,-8,8);this.merfolkBonusScreenOffset+=this.merfolkBonusScreenVelocity;this.merfolkBonusScreenOffset=constrain(this.merfolkBonusScreenOffset,-72,16*l-96);};
Diplomacy.prototype.cybermind_get_trade_cost=function(i){return this.cybermindTradeCosts[i];};
Diplomacy.prototype.increase_cybermind_multis=function(a,c){
var i=0,T;for(;i<this.cybermindAllTrades.length;i+=1){switch(this.cybermindAllTrades[i].type){case"mana prod.":this.cybermindAllTrades[i].multi+=0.1*a;break;case"pearl trading":this.cybermindAllTrades[i].multi+=0.8*a;break;case"spice trading":this.cybermindAllTrades[i].multi+=0.2*a;break;case"gado. from slime":this.cybermindAllTrades[i].multi+=0.1*a;break;case"dark energy":this.cybermindAllTrades[i].multi+=0.2*a;break;case"from enchanting":this.cybermindAllTrades[i].multi+=0.4*a;break;default:throw"Unrecognized Cybermind trade!";}}for(i=0;i<3;i+=1){if(!this.cybermindTradePurchased[i]){continue;}T=this.cybermindAllTrades[this.cybermindCurrentTrades[i]];switch(T.type){case"mana prod.":manaProductionMultiFromCyber=T.multi;break;case"pearl trading":pearlTradeMultiFromCyber=T.multi;break;case"spice trading":spiceTradeMultiFromCyber=T.multi;break;case"gado. from slime":gadoliniumFromSlimeMultiFromCyber=T.multi;break;case"dark energy":darkEnergyProductionMultiFromCyber=T.multi;break;case"from enchanting":enchantingProductMultiFromCyber=T.multi;break;}}g_FlyingText.set_text("Increased Cybermind trade bonuses",200,mouseY);g_FlyingText.fontColor=c;};
Diplomacy.prototype.increase_merfolk_standing_on_reef_donation = function(v1,v2){
if(this.merfolkStanding<5){this.merfolkStanding+=v1*this.standingIncreaseMulti;if(this.merfolkStanding>=5){this.merfolkStanding=4.99;}}else{this.merfolkStanding+=v2*this.standingIncreaseMulti;}};
Diplomacy.prototype.on_any_camel_interaction=function(){
for(var i=0;i<allCreatures.length;i+=1){if(allCreatures[i].creatureType===CT_CAMEL&&allCreatures[i].tileAt===selectedTile){allCreatures[i].daysToLive=max(3,allCreatures[i].daysToLive);}}};
Diplomacy.prototype.camels_get_multi_list=function(){return[{type:"spice",amount:this.camels_get_spice_multi()}];};
Diplomacy.prototype.camels_get_buy_string=function(){return this.camelsTrade.get_buy_string(this.camels_get_multi_list());};
Diplomacy.prototype.camels_get_sell_string=function(){return this.camelsTrade.get_sell_string(this.camels_get_multi_list());};
Diplomacy.prototype.camels_get_can_trade=function(){if(!this.camelsTradeUnlocked||season===4){return!1;}return this.camelsTrade.get_can_trade(this.camels_get_multi_list());};
Diplomacy.prototype.camels_perform_trade=function(){
if(!this.camels_get_can_trade()){return;}var s=this.camels_get_spice_multi(),m=this.camels_get_multi_list();this.camelsTrade.perform_trade(m);if(typeof(this.camelsTrade.sellType)==="object"){for(var i=0;i<this.camelsTrade.sellType.length;i+=1){if(this.camelsTrade.sellType[i]==="spice"){this.totalSpiceGained+=this.camelsTrade.sellAmount[i]*s;}}}else{if(this.camelsTrade.sellType==="spice"){this.totalSpiceGained+=this.camelsTrade.sellAmount*s;}}this.camelsStanding+=0.1*this.standingIncreaseMulti;if(this.totalSpiceGained>pow(10,6)&&this.camelsStanding<8){this.camelsStanding+=8*this.standingIncreaseMulti;}this.randomize_camels_trade();this.on_any_camel_interaction();recalculate_building_effects();};
Diplomacy.prototype.get_is_wifi_active=function(){return g_PersistentData.get_has_wifi()&&this.cybermindStanding>=4;};
g_Diplomacy=new Diplomacy();
} //Diplomacy & Trade

{
var IRS_mpc=function(l){return l*pow(evacuees,0.4);};
var IRS_mpc_multi=function(){return g_TechnologyManager.by_name("Loop-Unraveling Mining Pods").researched?(1+0.03*sqrt(g_PersistentData.statTotalLevel5+allBuildings.count_level_5())):1;};
var can_assemble_dark_energy_engine_1=function(){
if(currentScreen!=="IRS"){return!1;}var I=allIRSDatas[allBuildings[building_on_tile(selectedTile,BT_IRS)].resourceProduction];return I.openTab===2&&I.engineType===0&&pearlResource>=40&&flameOrbResource>=40&&ironResource>=50&&mithrilResource>=50&&gadoliniumResource>=5;};
var assemble_dark_energy_engine_1=function(){
pearlResource-=40;flameOrbResource-=40;ironResource-=50;mithrilResource-=50;gadoliniumResource-=5;allIRSDatas[allBuildings[building_on_tile(selectedTile,BT_IRS)].resourceProduction].engineType=1;movesLeft-=1;recalculate_building_effects();};
var can_assemble_dark_energy_engine_2=function(){
if(currentScreen!=="IRS"){return!1;}var B=allBuildings[building_on_tile(selectedTile,BT_IRS)];if(B.upgradeLevel<3){return!1;}var I=allIRSDatas[B.resourceProduction];return I.openTab===2&&I.engineType===0&&spiceResource>=80&&flameOrbResource>=300&&ironResource>=250&&mithrilResource>=500&&manaResource>=7500;};
var assemble_dark_energy_engine_2=function(){
spiceResource-=80;flameOrbResource-=300;ironResource-=250;mithrilResource-=500;manaResource-=7500;allIRSDatas[allBuildings[building_on_tile(selectedTile,BT_IRS)].resourceProduction].engineType=2;movesLeft-=1;recalculate_building_effects();};
var can_repair_dark_energy_engine=function(){
if(currentScreen!=="IRS"){return!1;}var I=allIRSDatas[allBuildings[building_on_tile(selectedTile,BT_IRS)].resourceProduction];return I.openTab===2&&I.engineType!==0&&ironResource>=I.get_repair_iron_cost()&&mithrilResource>=I.get_repair_mithril_cost()&&I.engineCondition<=90&&I.timeUntilReturn===-1;};
var repair_dark_energy_engine_worker=function(d){
ironResource-=d.get_repair_iron_cost();mithrilResource-=d.get_repair_mithril_cost();d.engineCondition+=10;};
var repair_dark_energy_engine=function(){
repair_dark_energy_engine_worker(allIRSDatas[allBuildings[building_on_tile(selectedTile,BT_IRS)].resourceProduction]);movesLeft-=1;recalculate_building_effects();};
var can_construct_rescue_pod_1=function(){
if(currentScreen!=="IRS"){return!1;}var I=allIRSDatas[allBuildings[building_on_tile(selectedTile,BT_IRS )].resourceProduction];return I.openTab===3&&I.engineType!==0&&I.rescuePodType===0&&manaResource>=100&&ironResource>=80&&mithrilResource>=35&&pearlResource>=30;};
var construct_rescue_pod_1=function(){
manaResource-=100;ironResource-=80;mithrilResource-=35;pearlResource-=30;allIRSDatas[allBuildings[building_on_tile(selectedTile,BT_IRS)].resourceProduction].rescuePodType=1;movesLeft-=1;recalculate_building_effects();};
var can_construct_rescue_pod_2=function(){
if(currentScreen!=="IRS"){return!1;}var B=allBuildings[building_on_tile(selectedTile,BT_IRS)];if(B.upgradeLevel<2){return!1;}var I=allIRSDatas[B.resourceProduction];return I.openTab===3&&I.engineType!==0&&I.rescuePodType===0&&manaResource>=1000&&ironResource>=200&&mithrilResource>=100&&gadoliniumResource>=30;};
var construct_rescue_pod_2=function(){
manaResource-=1000;ironResource-=200;mithrilResource-=100;gadoliniumResource-=30;allIRSDatas[allBuildings[building_on_tile(selectedTile,BT_IRS)].resourceProduction].rescuePodType=2;movesLeft-=1;recalculate_building_effects();};
var can_construct_rescue_pod_3=function(){
if(currentScreen!=="IRS"){return!1;}var B=allBuildings[building_on_tile(selectedTile,BT_IRS)];if(B.upgradeLevel<4){return!1;}var I=allIRSDatas[B.resourceProduction];return I.openTab ===3&&I.engineType!==0&&I.rescuePodType ===0&&manaResource>=6500&&mithrilResource>=1000&&gadoliniumResource>=100&&bioOrbResource>=90;};
var construct_rescue_pod_3=function(){
manaResource-=6500;mithrilResource-=1000;gadoliniumResource-=100;bioOrbResource-=90;allIRSDatas[allBuildings[building_on_tile(selectedTile,BT_IRS)].resourceProduction].rescuePodType=3;movesLeft-=1;recalculate_building_effects();};
var can_supply_rescue_pod=function(){
if(currentScreen!=="IRS"){return!1;}var I=allIRSDatas[allBuildings[building_on_tile(selectedTile,BT_IRS)].resourceProduction];return I.openTab===3&&I.engineType!==0&&I.rescuePodType!==0&&!I.stocked&&darkEnergyResource>=I.get_supplies_dark_energy_cost()&&foodResource>=I.get_supplies_food_cost()&&spiceResource>=I.get_supplies_spice_cost();};
var supply_pod_worker=function(d){
darkEnergyResource-=d.get_supplies_dark_energy_cost();foodResource-=d.get_supplies_food_cost();spiceResource-=d.get_supplies_spice_cost();d.stocked=!0;};
var supply_rescue_pod=function(){
supply_pod_worker(allIRSDatas[allBuildings[building_on_tile(selectedTile,BT_IRS)].resourceProduction]);movesLeft-=1;recalculate_building_effects();};
var can_launch_rescue_pod=function(){
if(currentScreen!=="IRS"){return!1;}var I=allIRSDatas[allBuildings[building_on_tile(selectedTile,BT_IRS)].resourceProduction];if(evacuees+evacueesEnRoute+I.get_rescue_pod_final_capacity()>maxEvacuees){return!1;}return I.openTab===4&&I.get_is_ready_for_launch();};
var launch_pod_worker=function(d){
d.capacityAtLaunch=d.get_rescue_pod_final_capacity();evacueesEnRoute+=d.capacityAtLaunch;d.totalRoundTripTime=d.get_estimated_round_trip_time();d.timeUntilReturn=d.totalRoundTripTime;d.launchedThisTurn=!0;d.resourceCapacityAtLaunch=g_TechnologyManager.camel_technology_by_name("Mining Pods").researched?IRS_mpc(d.level)*IRS_mpc_multi():0;};
var launch_rescue_pod=function(){
launch_pod_worker(allIRSDatas[allBuildings[building_on_tile(selectedTile,BT_IRS)].resourceProduction]);movesLeft-=1;recalculate_building_effects();};
var can_close_return_report=function(){
if(currentScreen!=="IRS"){return!1;}var d=allIRSDatas[allBuildings[building_on_tile(selectedTile,BT_IRS)].resourceProduction];return d.openTab===4&&d.returnReport;};
var close_return_report=function(){
var d=allIRSDatas[allBuildings[building_on_tile(selectedTile,BT_IRS)].resourceProduction];d.returnReport=!1;d.returnReportPeopleSaved=0;d.returnReportDamageSustained=0;};
var run_star_compass=function(){
var A=g_ArtifactManager.by_abbreviation("StC"),L=A.level;if(!A.active){return;}allIRSDatas.forEach(function(d){if(d.engineType===0||d.rescuePodType===0||d.timeUntilReturn!==-1){return;}d.returnReport=!1;var c=L>2&&d.engineCondition<91&&ironResource>=d.get_repair_iron_cost()&&mithrilResource>=d.get_repair_mithril_cost();if(c||!d.get_is_ready_for_launch()){if(L>1&&!d.stocked&&darkEnergyResource>=d.get_supplies_dark_energy_cost()&&foodResource>=d.get_supplies_food_cost()&&spiceResource>=d.get_supplies_spice_cost()){supply_pod_worker(d);}if(c){repair_dark_energy_engine_worker(d);}}else{if(evacuees+evacueesEnRoute+d.get_rescue_pod_final_capacity()<=maxEvacuees){launch_pod_worker(d);}}});};
} //IRS-related button functions

{
//For more info see old file versions:
var Button=function(X,Y,w,h,bT,hT,co,ca){
this.x=X;this.y=Y;this.width=w;this.height=h;this.text=bT;this.hoverText=hT;this.conditionFunc=co;this.callbackFunc=ca;this.defaultColor=color(0,128,0);this.highlightColor=color(0,255,0);this.hotkey="";if(this.text.substring(0,6)==="Spells"||this.text==="Artifacts"||this.text===" Artifacts"||this.text==="Return"){this.defaultColor=color(128,128,0);this.highlightColor=color(255,255,0);}if(this.text.substring(0,7)==="Upgrade"){this.defaultColor=color(255,128,0);this.highlightColor=color(255,192,128);}if(this.text==="i"||this.text==="Challenge Info"){this.defaultColor=color(0,192,192);this.highlightColor=color(128,224,224);}this.circular=this.text==="i";};
Button.prototype.hovered=function(){
if(this.circular){return 2*dist(mouseX,mouseY,this.x+this.width/2,this.y+this.width/2)<=this.width;}return mouseX>=this.x&&mouseX<this.x+this.width&&mouseY>=this.y&&mouseY<this.y+this.height;};
Button.prototype.draw=function(){
if(!this.conditionFunc()){return;}var h=this.hovered()&&ticksToShowDayNumber===0;stroke(0);fill(this.defaultColor);if(h){fill(this.highlightColor);}if(this.circular){ellipse(this.x+this.width/2,this.y+this.width/2,this.width,this.width);}else{rect(this.x,this.y,this.width,this.height);}fill(0);textSize(12);text(this.text,this.x+4,this.y+12+4*!this.circular);if(h){text(this.hoverText,this.x+4,this.y+38);}};
Button.prototype.on_mouse_pressed=function(){if(this.conditionFunc()&&this.hovered()&&ticksToShowDayNumber===0){this.callbackFunc();return!0;}return!1;};
Button.prototype.on_key_typed=function(){if(this.conditionFunc()&&key.toString().toUpperCase()===this.hotkey.toUpperCase()){this.callbackFunc();return!0;}return!1;};
var allButtons=[];
allButtons.draw=function(){allButtons.forEach(function(b){b.draw();});};
allButtons.on_mouse_pressed=function(){for(var i=0;i<allButtons.length;i+=1){if(allButtons[i].on_mouse_pressed()){return;}}};
allButtons.on_key_typed=function(){for(var i=0;i<allButtons.length;i+=1){if(allButtons[i].on_key_typed()){return;}}};
var add_button=function(x,y,w,h,bT,hT,co,ca){allButtons.push(new Button(x,y,w,h,bT,hT,co,ca));};
var add_button_hotkey=function(x,y,w,h,bT,hT,co,ca,k){add_button(x,y,w,h,bT,hT,co,ca);allButtons[allButtons.length-1].hotkey=k;};
var can_go_fishing=function(){
if(selectedTile!==-1&&allTiles[selectedTile].claimed&&allTiles[selectedTile].tileType===TT_LAKE&&!currentlyInBackside){var f=!1,t=!1,i=0;for(;i<allCreatures.length;i+=1){var c=allCreatures[i];if(c.creatureType===CT_FISH&&c.tileAt===selectedTile){f=!0;}if(c.creatureType===CT_TURTLE&&c.tileAt===selectedTile){t=!0;}}return!t&&f;}return!1;};
var food_multi_from_fishing=function(){var x=g_PersistentData.get_challenge_times_completed("UC");return x<3?1+0.3*x:1.6+0.1*x;};
var go_mining_button_visible=function(){return!currentlyInBackside&&allTiles[selectedTile].tileType!==TT_LAKE&&allBuildings.get_tile_has(selectedTile,BT_MINE);};
var research_button_visible=function(){return allBuildings.get_tile_has(selectedTile,BT_HOUSE);};
var DEC_eye_button_visible=function(){return selectedTile>-1&&allTiles[selectedTile].claimed&&allCreatures.get_on_tile(selectedTile,CT_DEC_EYE)&&allSpells.by_name("Dark Attunement").durationLeft>0;};
var cosmic_button_visible=function(){return selectedTile>-1&&allTiles[selectedTile].claimed&&allCreatures.get_on_tile(selectedTile,CT_COSMIC);};
var enchant_button_visible=function(){
if(currentlyInBackside||selectedTile<0||!allTiles[selectedTile].claimed||allTiles[selectedTile].tileType===TT_SLIMED||g_TrainHead.tileAt===selectedTile||g_TrainBody.tileAt===selectedTile||g_TrainTail.tileAt===selectedTile){return!1;}return allBuildings.get_tile_has(selectedTile,BT_ENCHANTING_TABLE);};
var URC_explore_button_visible=function(){
return g_PersistentData.currentChallenge==="URC"&&!currentlyInBackside&&selectedTile>-1&&allTiles[selectedTile].claimed&&(allBuildings.get_tile_has(selectedTile,BT_MER_MALL)||(allBuildings.get_tile_has(selectedTile,BT_UNDERWATER_RUINS)&&g_Diplomacy.merfolkStanding>3));};
var TAB_effect_switch_sides=function(){
if(allCreatures.get_on_tile(28,CT_SWARM)){return;}currentlyInBackside=!currentlyInBackside;recalculate_building_effects();movesLeft-=1;if(!backsideCutsceneShown){backsideCutsceneShown=!0;nextScreen="main";currentScreen="backside-cutscene";cutsceneTickCounter=0;}allSpells.scrollOffset=0;allSpells.scrollVelocity=0;};
var get_can_afford_URC_explore = function()
{
    //First, we need to figure out which place we're exploring:
    if( selectedTile < 0 || !allTiles[ selectedTile ].claimed )
    {
        return false;
    }
    if( allBuildings.get_tile_has( selectedTile, BT_MER_MALL ))
    {
        //Okay, we're exploring the mer mall.  Costs 10 food, 20 mana.
        return foodResource >= 10 && manaResource >= 20;
    }
    var index = building_on_tile( selectedTile, BT_UNDERWATER_RUINS );
    if( index === -1 )
    {
        return false;
    }
    switch( allBuildings[ index ].upgradeLevel )
    {
    case 1: return foodResource >= 6;
    case 2: return foodResource >= 10 && manaResource >= 3;
    case 3: return foodResource >= 14 && stoneResource >= 20;
    case 4: return foodResource >= 20 && flameOrbResource >= 15;
    case 5: return foodResource >= 25 && mithrilResource >= 40;
    }
    //Else, unknown situation:
    return false;
};
var get_URC_explore_cost_string = function()
{
    //First, we need to figure out which place we're exploring:
    if( selectedTile < 0 || !allTiles[ selectedTile ].claimed )
    {
        return "";
    }
    if( allBuildings.get_tile_has( selectedTile, BT_MER_MALL ))
    {
        //Okay, we're exploring the mer mall.  Costs 10 food, 20 mana.
        return "-10 food, -20 mana";
    }
    var index = building_on_tile( selectedTile, BT_UNDERWATER_RUINS );
    if( index === -1 )
    {
        return "";
    }
    switch( allBuildings[ index ].upgradeLevel )
    {
    case 1: return "-6 food";
    case 2: return "-10 food, -3 mana";
    case 3: return "-14 food, -20 stone";
    case 4:
        if( g_ResourcePane.flameOrbVisible )
        {
            return "-20 food, -15 fl. orb";
        }
        //Else:
        return "costs ???";
    case 5:
        if( g_ResourcePane.mithrilVisible )
        {
            return "-25 food, -40 mithril";
        }
        //Else:
        return "costs ???";
    }
    //Else, unknown situation:
    return "";
};
var build_button_visible=function(){
if(selectedTile<0||!allTiles[selectedTile].claimed||allBuildings.get_tile_has(selectedTile,BT_HOUSE)){return!1;}if(!currentlyInBackside){if(allBuildings.get_tile_has(selectedTile,BT_MER_MALL)||allBuildings.get_tile_has(selectedTile,BT_REEF)||allBuildings.get_tile_has(selectedTile,BT_UNDERWATER_RUINS)){return!1;}}return g_ConstructionManager.allowedTypes.length>0;};
var can_kill_slime=function(){
if(selectedTile!==-1&&allTiles[selectedTile].claimed){for(var i=0;i<allCreatures.length;i+=1){if(allCreatures[i].creatureType===CT_SLIME&&allCreatures[i].tileAt===selectedTile){return foodResource>=FOOD_TO_KILL_SLIME;}}}return!1;};
var info_button_visible=function(){
if(currentScreen==="tutorial-controls"){return g_TutorialProgress.controls>14;}if(g_TutorialProgress.get_rview_disabled()){return!1;}if(goldenClaimTilesLeft>0||currentScreen==="frontend"||currentScreen==="play-menu"||currentScreen==="credits"||currentScreen==="changelog"||currentScreen==="tutorial-intro-stage"||currentScreen==="tutorial-end-of-run"||currentScreen==="load-error-message"||currentScreen==="end-of-run"||currentScreen==="challenges"||currentScreen==="ultimate-shop"||currentScreen==="persistent-statistics"||currentScreen==="artifact-persistent-statistics"||currentScreen==="savegame"||currentScreen==="artifact-found"||is_in_cutscene()||currentScreen.includes("breakdown")||currentScreen==="choose-season"||currentScreen==="quit-confirm"||currentScreen==="tutorial-swarm"||currentScreen==="tutorial-slimes"||currentScreen==="mid-run-challenge-info"||currentScreen==="certificate-of-completion"){return!1;}return selectedTile===-1||currentScreen==="build"||currentScreen==="diplomacy"||currentScreen==="research"||currentScreen==="spells"||currentScreen==="terraforming"||currentScreen==="enchanting"||currentScreen==="IRS"||currentScreen==="artifacts";};
var info_button_effect=function(s){
if(currentScreen!==s){currentScreen=s;}else{currentScreen="main";}selectedTile=-1;g_ConstructionManager.on_tile_selected();g_Diplomacy.currentlyMeetingWith="noone";breakdownTab=1;};
base_flame_orb_from_enchanting=function(){var x=g_PersistentData.get_challenge_times_completed("SR");return x<5?2+0.1*x*x:x-0.5;};
var can_enchant = function(num)
{
    num=num||1;
    if(currentScreen!=="enchanting"||enchantingScreenSelection===5){return!1;}
    var level=building_level_on_tile(selectedTile,BT_ENCHANTING_TABLE);
    if(level<=enchantingScreenSelection){return!1;}
    var manaCostMulti=(level>=3)?1.3:1,epm=enchantingPriceMulti;
    if(enchantingScreenSelection>1&&upkeepLastSatisfiedRatio<1){return!1;}
    switch(enchantingScreenSelection)
    {
    case 0:return manaResource>=4*manaCostMulti*num*epm&&pearlResource>=2*enchantingPearlCostMulti*num*epm;
    case 1:return manaResource>=50*manaCostMulti*num*epm&&flameOrbResource>=5*num*epm&&stoneResource>=50*num*epm;
    case 2:return flameOrbResource>=50*num*epm&&spiceResource>=g_PersistentData.get_upgrade_effect("SB")*num*epm;
    case 3:return gadoliniumResource>=5*num*epm&&goldenAppleResource>=1*num*epm;
    case 4:return manaResource>=1000*manaCostMulti*num*epm;
    default:return!1;
    }
};
var perform_enchanting=function(num){
num=num||1;var level=building_level_on_tile(selectedTile,BT_ENCHANTING_TABLE),manaCostMulti=(level>=3)?1.3:1,mithrilMultiFromLvl5=1+4*(level===5),everythingMulti=enchantingTableSynergyMulti*enchantingProductMultiFromCyber*enchantingProductMultiFromTurtles*enchantingProductMultiFromFrosthour,multiToMithril=mithrilEnchantingMultiFromSwamp*mithrilEnchantingMultiFromMines*mithrilMultiFromLvl5*lotsOfThingsMultiFromTerraformers,ultimBioOrbMulti=1+0.01*enchantingUltimBioOrbPercent,epm=enchantingPriceMulti;switch(enchantingScreenSelection){case 0:var flameOrbMade=base_flame_orb_from_enchanting()*flameHeartMulti*dissipation()*everythingMulti*num;manaResource-=4*manaCostMulti*num*epm;pearlResource-=2*enchantingPearlCostMulti*num*epm;flameOrbResource+=flameOrbMade;g_ResourcePane.flameOrbVisible=!0;g_FlyingText.set_text("+"+g_ResourcePane.formatSI(flameOrbMade)+" flame orb",250,224);break;case 1:var mithrilMade=1*multiToMithril*everythingMulti*num;manaResource-=50*manaCostMulti*num*epm;flameOrbResource-=5*num*epm;stoneResource-=50*num*epm;mithrilResource+=mithrilMade;g_ResourcePane.mithrilVisible=!0;g_FlyingText.set_text("+"+g_ResourcePane.formatSI(mithrilMade)+" mithril",250,224);break;case 2:var baseBioOrb=1+2*(allBuildings[0].upgradeLevel>=4),bioOrbMade=baseBioOrb*ultimBioOrbMulti*everythingMulti*num;flameOrbResource-=50*num*epm;spiceResource-=g_PersistentData.get_upgrade_effect("SB")*num*epm;bioOrbResource+=bioOrbMade;totalBioOrbGainedFromEnchanting+=bioOrbMade;g_ResourcePane.bioOrbVisible=!0;g_FlyingText.set_text("+"+g_ResourcePane.formatSI(bioOrbMade)+" bio-orb",250,224);break;case 3:var flameOrbMade=base_flame_orb_from_enchanting()*flameHeartMulti*dissipation()*everythingMulti*num,mithrilMade=2*multiToMithril*everythingMulti*num,baseBioOrb=1+2*(allBuildings[0].upgradeLevel>=4),bioOrbMade=baseBioOrb*ultimBioOrbMulti*everythingMulti*num;gadoliniumResource-=5*num*epm;goldenAppleResource-=1*num*epm;flameOrbResource+=flameOrbMade;g_ResourcePane.flameOrbVisible=!0;mithrilResource+=mithrilMade;g_ResourcePane.mithrilVisible=!0;bioOrbResource+=bioOrbMade;g_ResourcePane.bioOrbVisible=!0;totalBioOrbGainedFromEnchanting+=bioOrbMade;g_FlyingText.set_text("+"+g_ResourcePane.formatSI(flameOrbMade)+" flame orb, +"+g_ResourcePane.formatSI(mithrilMade)+" mithril, +"+g_ResourcePane.formatSI(bioOrbMade)+" bio-orb",100,300);if(level<5&&g_TechnologyManager.by_name("Enchanting Table Lvl. 5").researched){allBuildings[building_on_tile(selectedTile,BT_ENCHANTING_TABLE)].upgradeLevel+=1;g_FlyingText.text+="\nUpgraded the enchanting table!";}break;case 4:var darkEnergyMade=5*lotsOfThingsMultiFromTerraformers*everythingMulti*num;manaResource-=1000*manaCostMulti*num*epm;darkEnergyResource+=darkEnergyMade;g_ResourcePane.darkEnergyVisible=!0;totalDarkEnergyGained+=darkEnergyMade;g_FlyingText.set_text("+"+g_ResourcePane.formatSI(darkEnergyMade)+" dark energy",250,224);break;}g_FlyingText.fontColor=color(255,0,0);movesLeft-=1;recalculate_building_effects();};
var is_spells_button_visible=function(){return goldenClaimTilesLeft===0&&(currentScreen==="main"||currentScreen==="main-info")&&!g_TutorialProgress.get_spells_disabled();};
{
    //For the tutorials:
    add_button(235,346,32,24,"Next","",function(){return currentScreen==="tutorial-intro-stage"||currentScreen==="tutorial-end-of-run";},function(){if(currentScreen==="tutorial-end-of-run"){currentScreen="end-of-run";return;}g_TutorialProgress.general+=1;if(g_TutorialProgress.general===5){currentScreen="opening-cutscene";ticksToShowDayNumber=60;cutsceneTickCounter=0;nextScreen="main";}});
    add_button(330,275,34,24,"Next","",function(){return currentScreen==="challenges"&&g_PersistentData.currentChallenge==="SRC"&&g_TutorialProgress.get_is_in_tutorial()&&g_TutorialProgress.challenges<7;},function(){g_TutorialProgress.challenges+=1;});
    add_button(270,275,54,24,"Previous","",function(){return currentScreen==="challenges"&&g_PersistentData.currentChallenge==="SRC"&&g_TutorialProgress.get_is_in_tutorial()&&g_TutorialProgress.challenges>0;},function(){g_TutorialProgress.challenges-=1;});
    add_button(110,346,54,24,"Previous","",function(){return currentScreen==="tutorial-intro-stage"&&g_TutorialProgress.general>0;},function(){g_TutorialProgress.general-=1;});
    add_button(52,268,139,24,"More info about swarms!","",function(){return g_TutorialProgress.get_which_extra()==="swarm";},function(){currentScreen="tutorial-swarm";});
    add_button(52,268,139,24,"More info about slimes!","",function(){return g_TutorialProgress.get_which_extra()==="slime";},function(){currentScreen="tutorial-slimes";});
    add_button(52,268,139,24,"Hint about buildings!","",function(){return g_TutorialProgress.get_which_extra()==="2bldgs";},function(){currentScreen="tutorial-2-bldgs";});
    add_button(67,268,109,24,"Additional controls.","",function(){return g_TutorialProgress.get_which_extra()==="controls";},function(){currentScreen="tutorial-controls";});
    add_button(74,268,95,24,"Hint about IRSs!","",function(){return g_TutorialProgress.get_which_extra()==="irs";},function(){currentScreen="tutorial-irs";});
    add_button(width/2-29,height-48,58,24,"Continue","",function(){return currentScreen==="tutorial-swarm"||currentScreen==="tutorial-slimes";},function(){if(g_TutorialProgress.swarm!==1){currentScreen="main";}g_TutorialProgress.swarm+=1;if(g_TutorialProgress.swarm===3){g_TutorialProgress.swarm=-1;}});
    add_button(width/2-29,height-48,58,24,"Continue","",function(){return currentScreen==="tutorial-irs";},function(){currentScreen="main";g_TutorialProgress.irs=-1;});
    add_button(width/2-29,height-48,58,24,"Continue","",function(){return currentScreen==="tutorial-2-bldgs";},function(){g_TutorialProgress.twoBldgs=-1;currentScreen="main";});
    add_button(235,260,32,24,"Next","",function(){return currentScreen==="spells"&&g_TutorialProgress.spells>-1;},function(){g_TutorialProgress.spells+=1;if(g_TutorialProgress.spells===5){g_TutorialProgress.spells=-1;}});
    add_button(110,260,54,24,"Previous","",function(){return currentScreen==="spells"&&g_TutorialProgress.spells>0;},function(){g_TutorialProgress.spells-=1;});
    add_button(210,160,101,24,"Link to the tutorial","",function(){return currentScreen==="credits";},function(){println("https://www.khanacademy.org/computer-programming/image-tutorial-hope/6740408654856192");});
    add_button_hotkey(width-52,64,52,24,"End day","",function(){return goldenClaimTilesLeft===0&&(currentScreen==="main"||currentScreen==="main-info")&&!g_TutorialProgress.get_end_day_button_disabled();},function(){movesLeft=0;},"E");
    
    //Resource breakdown infoviews:
    add_button(160,height-75,12,12,"i","",function(){if(info_button_visible()){switch(g_ResourcePane.tierShowing){case 1:return!0;case 2:return g_ResourcePane.spiceVisible;case 3:return g_ResourcePane.goldenAppleVisible;}}return!1;},function(){switch(g_ResourcePane.tierShowing){case 1:info_button_effect("food-breakdown");break;case 2:info_button_effect("spice-breakdown");break;case 3:info_button_effect("golden-apple-breakdown");break;}});
    add_button(160,height-59,12,12,"i","",function(){if(info_button_visible()){switch(g_ResourcePane.tierShowing){case 1:return!0;case 2:return g_ResourcePane.gadoliniumVisible;case 3:return g_ResourcePane.darkEnergyVisible;}}return!1;},function(){switch(g_ResourcePane.tierShowing){case 1:info_button_effect("mana-breakdown");break;case 2:info_button_effect("gadolinium-breakdown");break;case 3:info_button_effect("dark-energy-breakdown");break;}});
    add_button(160,height-43,12,12,"i","",function(){if(info_button_visible()){switch(g_ResourcePane.tierShowing){case 1:return!0;case 2:return g_ResourcePane.flameOrbVisible;case 3:return g_ResourcePane.bioOrbVisible;}}return!1;},function(){switch(g_ResourcePane.tierShowing){case 1:info_button_effect("pearl-breakdown");break;case 2:info_button_effect("flame-orb-breakdown");break;case 3:info_button_effect("bio-orb-breakdown");break;}});
    add_button(160,height-27,12,12,"i","",function(){if(info_button_visible()){switch(g_ResourcePane.tierShowing){case 1:return!0;case 2:return g_ResourcePane.ironVisible;case 3:return g_ResourcePane.mithrilVisible;}}return!1;},function(){switch(g_ResourcePane.tierShowing){case 1:info_button_effect("stone-breakdown");break;case 2:info_button_effect("iron-breakdown");break;case 3:info_button_effect("mithril-breakdown");break;}});
    add_button(250,height-24,12,12,"i","",function(){return info_button_visible()&&g_ResourcePane.tierShowing===4;},function(){info_button_effect("max-evacuees-breakdown");});
    add_button_hotkey(175,height-64,50,24,"  Back","",function(){return currentScreen.includes("breakdown");},function(){currentScreen="main";},'\b');
    //This button here is kinda the universal "go-back-to-main-screen" button:
    add_button_hotkey(width-54,height-110,64,24,"Back","",function(){return currentScreen==="build"||currentScreen==="research"||currentScreen==="diplomacy"||currentScreen==="spells"||currentScreen==="terraforming"||currentScreen==="enchanting"||currentScreen==="IRS"||currentScreen==="power-train-line"||currentScreen==="artifacts";},function(){currentScreen="main";g_Diplomacy.currentlyMeetingWith="noone";if(g_ArtifactManager.openTab===4){g_ArtifactManager.openTab=1;}},'\b');
    add_button_hotkey(width/2-92,132,48,24,"Trade?","",function(){return currentScreen==="diplomacy"&&g_Diplomacy.currentlyMeetingWith==="camels"&&g_Diplomacy.camels_get_can_trade();},function(){g_Diplomacy.camels_perform_trade();recalculate_building_effects();movesLeft-=1;},' ');
    add_button_hotkey(width/2-92,164,48,24,"Trade?","",function(){return currentScreen==="diplomacy"&&g_Diplomacy.currentlyMeetingWith==="fire giants"&&spiceResource>=g_Diplomacy.giants_get_next_cost();},function(){g_Diplomacy.giants_perform_trade();movesLeft-=1;},' ');
    add_button(68,144,22,24,"20","",function(){return currentScreen==="diplomacy"&&g_Diplomacy.currentlyMeetingWith==="reef"&&manaResource>=20&&allBuildings.get_reef_level()<3&&g_ReefData.health<500;},function(){manaResource-=20;g_Diplomacy.increase_merfolk_standing_on_reef_donation(0.15,0.01);g_ReefData.increase_health(2*pow(0.5,allBuildings.get_reef_level()-1));g_FlyingText.set_text(g_PersistentData.currentChallenge==="URC"?"Infused!":"Donated!",68,122);g_FlyingText.fontColor=color(0,128,0);recalculate_building_effects();movesLeft-=1;});
    add_button(92,144,22,24,"80","",function(){return currentScreen==="diplomacy"&&g_Diplomacy.currentlyMeetingWith==="reef"&&manaResource>=80&&allBuildings.get_reef_level()<5&&g_ReefData.health<500;},function(){manaResource-=80;g_Diplomacy.increase_merfolk_standing_on_reef_donation(0.75,0.05);g_ReefData.increase_health(8*pow(0.5,allBuildings.get_reef_level()-1));g_FlyingText.set_text(g_PersistentData.currentChallenge==="URC"?"Infused!":"Donated!",68,122);g_FlyingText.fontColor=color(0,128,0);recalculate_building_effects();movesLeft-=1;});
    add_button(116,144,28,24,"320","",function(){return currentScreen==="diplomacy"&&g_Diplomacy.currentlyMeetingWith==="reef"&&manaResource>=320&&g_ReefData.health<500;},function(){manaResource-=320;g_Diplomacy.increase_merfolk_standing_on_reef_donation(3.75,0.25);g_ReefData.increase_health(32*pow(0.5,allBuildings.get_reef_level()-1));g_FlyingText.set_text(g_PersistentData.currentChallenge==="URC"?"Infused!":"Donated!",68,122);g_FlyingText.fontColor=color(0,128,0);recalculate_building_effects();movesLeft-=1;});
    add_button(146,144,34,24,"1280","",function(){return currentScreen==="diplomacy"&&g_Diplomacy.currentlyMeetingWith==="reef"&&manaResource>=1280&&allBuildings.get_reef_level()>1&&g_ReefData.health<500;},function(){manaResource-=1280;g_Diplomacy.increase_merfolk_standing_on_reef_donation(18.75,1.25);g_ReefData.increase_health(128*pow(0.5,allBuildings.get_reef_level()-1));g_FlyingText.set_text(g_PersistentData.currentChallenge==="URC"?"Infused!":"Donated!",68,122);g_FlyingText.fontColor=color(0,128,0);recalculate_building_effects();movesLeft-=1;});
    add_button(182,144,34,24,"5120","",function(){return currentScreen==="diplomacy"&&g_Diplomacy.currentlyMeetingWith==="reef"&&manaResource>=5120&&allBuildings.get_reef_level()>3&&g_ReefData.health<500;},function(){manaResource-=5120;g_Diplomacy.increase_merfolk_standing_on_reef_donation(93.75,6.25);g_ReefData.increase_health(512*pow(0.5,allBuildings.get_reef_level()-1));g_FlyingText.set_text(g_PersistentData.currentChallenge==="URC"?"Infused!":"Donated!",68,122);g_FlyingText.fontColor=color(0,128,0);recalculate_building_effects();movesLeft-=1;});
    //Trading with camels:
    add_button(64,236,72,24,"Give stone?","",function(){return currentScreen==="diplomacy"&&g_Diplomacy.currentlyMeetingWith==="camels"&&g_Diplomacy.camels_get_can_buy_resistant_seeds();},function(){g_Diplomacy.camels_buy_resistant_seeds();movesLeft-=1;});
    add_button(64,228,86,24,"Give food aid?","",function(){return currentScreen==="diplomacy"&&g_Diplomacy.currentlyMeetingWith==="camels"&&g_Diplomacy.camels_get_can_buy_flame_heart();},function(){g_Diplomacy.camels_buy_flame_heart();movesLeft-=1;});
    add_button(64,244,62,24,"Give iron?","",function(){return currentScreen==="diplomacy"&&g_Diplomacy.currentlyMeetingWith==="camels"&&g_Diplomacy.camels_get_can_buy_swarm_interference();},function(){g_Diplomacy.camels_buy_swarm_interference();movesLeft-=1;});
    add_button(64,244,72,24,"Give stone?","",function(){return currentScreen==="diplomacy"&&g_Diplomacy.currentlyMeetingWith==="camels"&&g_Diplomacy.camels_get_can_buy_expanded_furnaces();},function(){g_Diplomacy.camels_buy_expanded_furnaces();movesLeft-=1;});
    add_button(64,240,118,24,"Give pearl & mithril?","",function(){return currentScreen==="diplomacy"&&g_Diplomacy.currentlyMeetingWith==="camels"&&g_Diplomacy.camels_get_can_buy_golden_seeds();},function(){g_Diplomacy.camels_buy_golden_seeds();movesLeft-=1;});
    add_button(64,240,140,24,"Give iron & dark energy?","",function(){return currentScreen==="diplomacy"&&g_Diplomacy.currentlyMeetingWith==="camels"&&g_Diplomacy.camels_get_can_buy_golden_tables();},function(){g_Diplomacy.camels_buy_golden_tables();movesLeft-=1;});
    add_button(64,256,140,24,"Give iron & gadolinium?","",function(){return currentScreen==="diplomacy"&&g_Diplomacy.currentlyMeetingWith==="camels"&&g_Diplomacy.camels_get_can_buy_mining_pods();},function(){g_Diplomacy.camels_buy_mining_pods();movesLeft-=1;});
    add_button(64,272,222,24,"Give away your hard-earned resources?","",function(){return currentScreen==="diplomacy"&&g_Diplomacy.currentlyMeetingWith==="camels"&&g_Diplomacy.camels_get_can_buy_innovation();},function(){g_Diplomacy.camels_buy_innovation();movesLeft-=1;});
    add_button_hotkey(width-42,96,64,24,"Spells","",function(){if(selectedTile<0){return!1;}return allTiles[selectedTile].claimed&&is_spells_button_visible();},function(){currentScreen="spells";spellHints.select_next();},"S");
    add_button_hotkey(173,58,55,24,"Next hint","Want more hints?",function(){return currentScreen==="spells"&&allSpells.subscreen===2&&spellHints.length>1;},spellHints.select_next,"N");
    //Diplomacy:
    add_button_hotkey(192,194,32,24,"Sign","Unlocks trade with the merfolk",function(){return currentScreen==="diplomacy"&&g_Diplomacy.currentlyMeetingWith==="merfolk"&&!g_Diplomacy.merfolkTradeUnlocked;},function(){g_Diplomacy.merfolkTradeUnlocked=!0;recalculate_building_effects();movesLeft-=1;},"Y");
    add_button_hotkey(192,214,32,24,"Sign","Unlocks trade with the camels",function(){return currentScreen==="diplomacy"&&g_Diplomacy.currentlyMeetingWith==="camels"&&!g_Diplomacy.camelsTradeUnlocked&&season!==4;},function(){g_Diplomacy.camelsTradeUnlocked=!0;g_Diplomacy.on_any_camel_interaction();recalculate_building_effects();movesLeft-=1;},"Y");
    add_button_hotkey(150,200,32,24,"Yes","Unlocks trade with the Cybermind",function(){if(g_Diplomacy.cybermindTradeUnlocked){return!1;}return currentScreen==="diplomacy"&&g_Diplomacy.currentlyMeetingWith==="cybermind";},function(){g_Diplomacy.cybermindTradeUnlocked=!0;g_Diplomacy.cybermindStanding=1.25;movesLeft-=1;if(g_PersistentData.get_has_wifi()){g_Diplomacy.cybermindStanding=4;g_PersistentData.unlock_wifi();recalculate_building_effects();}},"Y");
    add_button_hotkey(250,200,32,24,"No","Maybe tomorrow?",function(){if(g_Diplomacy.cybermindTradeUnlocked){return!1;}return currentScreen==="diplomacy"&&g_Diplomacy.currentlyMeetingWith==="cybermind";},function(){currentScreen="main";g_Diplomacy.currentlyMeetingWith="noone";},"N");
    add_button_hotkey(70,280,88,24,"Show bonuses","",function(){return g_Diplomacy.merfolkTradeUnlocked&&currentScreen==="diplomacy"&&g_Diplomacy.currentlyMeetingWith==="merfolk";},function(){g_Diplomacy.currentlyMeetingWith="merfolk\nbonuses";},"B");
    add_button_hotkey(70,280,88,24,"Hide bonuses","",function(){return g_Diplomacy.merfolkTradeUnlocked&&currentScreen==="diplomacy"&&g_Diplomacy.currentlyMeetingWith==="merfolk\nbonuses";},function(){g_Diplomacy.currentlyMeetingWith="merfolk";},"B");
    add_button(70,200,49,24,"Cancel","Terraform later.",function(){return currentScreen==="terraforming-confirm-camels"||currentScreen==="terraforming-confirm-fish"||currentScreen==="terraforming-confirm-turtle";},function(){currentScreen="main";});
    add_button(230,200,58,24,"Continue","Terraform now!",function(){return currentScreen==="terraforming-confirm-camels"||currentScreen==="terraforming-confirm-fish"||currentScreen==="terraforming-confirm-turtle";},function(){currentScreen="terraforming";});
    add_button_hotkey(200,224,54,24,"Enchant","",can_enchant,perform_enchanting,' ');
    add_button(258,224,20,24,"x3","",function(){var a=g_ArtifactManager.by_abbreviation("TF");return a.active&&can_enchant(3);},function(){perform_enchanting(3);});
    add_button(282,224,20,24,"x9","",function(){var a=g_ArtifactManager.by_abbreviation("TF");return a.active&&a.level>=5&&can_enchant(9);},function(){perform_enchanting(9);});
    //IRS GUI:
    add_button_hotkey(100,204,74,24,"Assemble","",can_assemble_dark_energy_engine_1,assemble_dark_energy_engine_1,'S');
    add_button_hotkey(width/2+96,204,74,24,"Assemble","",can_assemble_dark_energy_engine_2,assemble_dark_energy_engine_2,'F');
    add_button_hotkey(width/2-37,238,74,24,"Repair","",can_repair_dark_energy_engine,repair_dark_energy_engine,' ');
    add_button_hotkey(100,188,74,24,"Construct", "",can_construct_rescue_pod_1,construct_rescue_pod_1,'S');
    add_button_hotkey(width/2+96,188,74,24,"Construct","",can_construct_rescue_pod_2,construct_rescue_pod_2,'L');
    add_button_hotkey(width/2+30,276,74,24,"Construct","",can_construct_rescue_pod_3,construct_rescue_pod_3,'I');
    add_button_hotkey(width/2-37,220,74,24,"Supply","",can_supply_rescue_pod,supply_rescue_pod,' ');
    add_button_hotkey(width/2-27,180,54,24,"Launch","",can_launch_rescue_pod,launch_rescue_pod,' ');
    add_button_hotkey(width/2-22,232,46,24,"Accept","",can_close_return_report,close_return_report,' ');
    add_button_hotkey(width/2-29,height-48,58,24,"Continue","",function(){return currentScreen==="DEC-eye"||currentScreen==="greeting"||currentScreen==="house-upgraded";},function(){if(currentScreen==="house-upgraded"){currentScreen="research";}else{currentScreen="main";}movesLeft-=1;recalculate_building_effects();},' ');
    add_button(151,280,98,24,"Accept delivery?","Get everything listed above.",function(){if(currentlyInBackside||currentScreen!=="power-train-line"){return!1;}return g_TrainBody.freight.some(function(x){return x>0;});},allCreatures.accept_train_delivery);
    //Cybermind trading:
    add_button_hotkey(64,160,48,24,"Trade?","",function(){return currentScreen==="diplomacy"&&g_Diplomacy.currentlyMeetingWith==="cybermind"&&g_Diplomacy.cybermind_get_can_trade(0);},function(){g_Diplomacy.cybermind_perform_trade(0);movesLeft-=1;},'1');
    add_button_hotkey(width/2+36,160,48,24,"Trade?","",function(){return currentScreen==="diplomacy"&&g_Diplomacy.currentlyMeetingWith==="cybermind"&&g_Diplomacy.cybermind_get_can_trade(1);},function(){g_Diplomacy.cybermind_perform_trade(1);movesLeft-=1;},'2');
    add_button_hotkey(width/4+50,266,48,24,"Trade?","",function(){return currentScreen==="diplomacy"&&g_Diplomacy.currentlyMeetingWith==="cybermind"&&g_Diplomacy.cybermind_get_can_trade(2);},function(){g_Diplomacy.cybermind_perform_trade(2);movesLeft-=1;},'3');
    add_button_hotkey(width/4+50,266,51,24,"Accept?","",function(){return!g_PersistentData.get_has_wifi()&&currentScreen==="diplomacy"&&g_Diplomacy.currentlyMeetingWith==="cybermind"&&g_Diplomacy.cybermindTradeUnlocked&&mithril_mine_on_tile(selectedTile)>-1&&cooling_fan_on_tile(selectedTile)>-1;},function(){g_PersistentData.unlock_wifi();g_Diplomacy.cybermindStanding=4;movesLeft-=1;recalculate_building_effects();},'3');
    //Golden claiming:
    add_button_hotkey(270,height-80,45,24,"Cancel","No refunds available",function(){return goldenClaimTilesLeft>0&&(currentScreen==="main"||currentScreen==="main-info")&&tilesClaimed<allTiles.length;},function(){goldenClaimTilesLeft=0;},'\b');
    add_button_hotkey(270,height-80,40,24,"Finish","You claimed every tile!",function(){return goldenClaimTilesLeft>0&&(currentScreen==="main"||currentScreen==="main-info")&&tilesClaimed>=allTiles.length;},function(){goldenClaimTilesLeft=0;},'\b');
    //Buttons related to saving:
    add_button(10,220,90,24,"Get save string","Copy this & paste into a text document",function(){return currentScreen==="savegame";},function(){println(g_PersistentData.make_save_string());});
    add_button(width/2-36,340,72,24,"Main menu","",function(){return currentScreen==="load-error-message"||currentScreen==="play-menu"||currentScreen==="credits"||currentScreen==="changelog";},function(){currentScreen="frontend";});
    add_button(148,340,104,24,"Exit to main menu","You will lose all of your progress.",function(){return currentScreen==="savegame";},function(){currentScreen="quit-confirm";});
    //Buttons related to Artifacts:
    add_button_hotkey(-3,37,56,24," Artifacts","",function(){return goldenClaimTilesLeft===0&&(currentScreen==="main"||currentScreen==="main-info")&&allBuildings.length>0&&allBuildings[0].upgradeLevel>=4;},function(){currentScreen="artifacts";if(g_ArtifactManager.openTab===4){g_ArtifactManager.openTab=1;}},"A");
    add_button_hotkey(143,256,113,24,"Search for Artifacts.","",function(){return currentScreen==="artifacts"&&g_ArtifactManager.openTab===0&&foodResource>=g_ArtifactManager.get_sfc()&&spiceResource>=g_ArtifactManager.get_ssc()&&g_ArtifactManager.count_eligible_on_selected_tile()>0;},function(){foodResource-=g_ArtifactManager.get_sfc();spiceResource-=g_ArtifactManager.get_ssc();g_ArtifactManager.search_for_artifacts();recalculate_building_effects();movesLeft-=1;},"S");
    add_button(width/2-29,height-48,58,24,"Continue","",function(){return currentScreen==="artifact-found";},function(){currentScreen="artifacts";});
    add_button_hotkey(width/2+32,284,51,24,"Artifacts","",function(){return currentScreen==="persistent-statistics"&&g_PersistentData.totalAPs>0;},function(){currentScreen="artifact-persistent-statistics";},"A");
    add_button_hotkey(width/2-22,314,44,24,"Return","",function(){return currentScreen==="artifact-persistent-statistics";},function(){currentScreen="persistent-statistics";},"A");
    add_button(width/2-18,256,36,24,"Okay","",function(){return currentScreen==="artifacts"&&g_ArtifactManager.openTab===3;},function(){g_ArtifactManager.openTab=1;});
    add_button(270,56,110,24,"Activate/Deactivate","Costs 1 action",function(){if(currentScreen!=="artifacts"){return!1;}if(g_ArtifactManager.openTab!==1){return!1;}return g_ArtifactManager.count_discovered()>=3;},function(){g_ArtifactManager.openTab=4;movesLeft-=1;});
    add_button(270,56,110,24,"Done?","",function(){return currentScreen==="artifacts"&&g_ArtifactManager.openTab===4;},function(){g_ArtifactManager.openTab=1;});
    add_button(55,36,65,24,"Production","",function(){if(breakdownTab===1){return!1;}return currentScreen==="food-breakdown"||currentScreen==="mana-breakdown"||currentScreen==="pearl-breakdown"||currentScreen==="stone-breakdown"||currentScreen==="spice-breakdown"||currentScreen==="gadolinium-breakdown"||currentScreen==="flame-orb-breakdown"||currentScreen==="iron-breakdown";},function(){breakdownTab=1;});
    add_button(124,36,46,24,"Fishing","",function(){if(breakdownTab===2){return!1;}return currentScreen==="food-breakdown"||(currentScreen==="pearl-breakdown"&&g_PersistentData.statHighestWaterCast+allSpells.by_name("Water Music").castStat);},function(){breakdownTab=2;});
    add_button(174,36,38,24,"Slime","",function(){if(breakdownTab===3){return!1;}if(currentScreen!=="mana-breakdown"&&currentScreen!=="gadolinium-breakdown"){return!1;}return dayCount>=200||g_PersistentData.get_has_completed_1_challenge();},function(){breakdownTab=3;});
    add_button(216,36,43,24,"Mining","",function(){if(breakdownTab===4){return!1;}return currentScreen==="stone-breakdown";},function(){breakdownTab=4;});
    add_button(263,36,82,24,"On Spell Cast","",function(){if(breakdownTab===5){return!1;}return (currentScreen==="food-breakdown"&&g_PersistentData.get_was_artifact_found("MT"))||((currentScreen==="spice-breakdown"||currentScreen==="gadolinium-breakdown"||currentScreen==="flame-orb-breakdown"||currentScreen==="iron-breakdown")&&g_PersistentData.get_was_artifact_found("SC"));},function(){breakdownTab=5;});
    add_button(285,8,85,24,"Challenge Info","",function(){return goldenClaimTilesLeft===0&&(currentScreen==="main"||currentScreen==="main-info"||currentScreen==="diplomacy");},function(){nextScreen=currentScreen;currentScreen="mid-run-challenge-info";});
    add_button_hotkey(width/2-29,height-48,58,24,"Continue","",function(){return currentScreen==="mid-run-challenge-info"||currentScreen==="tutorial-intro";},function(){currentScreen=nextScreen;},' ');
}
} //Button

//This function checks to see if the day has ended.
//If it has, it handles all events at day end & time advances to the next day:
check_day_end = function()
{try{
var ribbonEffectFulfilled=1;
if(movesLeft>0||goldenClaimTilesLeft>0){return;}
canCastSpells=!0;dayCount+=1;movesLeft=movesPerDay;ticksToShowDayNumber=60;daysUntilSwarmArrival-=1;g_Diplomacy.update_trade_cooldowns();
foodResource+=(foodProduction-foodProjectedProductionFromTerraformers)*foodProductionMulti;
foodResource-=foodConsumptionFromHouse*foodConsumptionMulti;
if(foodResource<0){foodResource=0;movesLeft=1;canCastSpells=!1;}
foodResource-=foodConsumptionFromDragons*foodConsumptionMulti;
if(foodResource<0){g_Dragon.markedForDestruction=!0;var s=allSpells.by_name("Awaken the Dragon");s.durationLeft=min(s.durationLeft,2);foodResource=0;}
if(foodResource>0&&g_TechnologyManager.by_name("Food Bank").researched){var f=min(foodResource,foodConsumptionFromBank*foodConsumptionMulti);foodResource-=f;foodGivenToBank+=f/foodConsumptionMulti;}
manaResource+=manaProduction*manaProductionMulti;
manaResource-=manaConsumptionFromLifeSupport*manaConsumptionMulti;
if(manaResource<0){movesLeft=1;manaResource=0;canCastSpells=!1;}
manaResource=max(0,manaResource-manaConsumptionFromAutocasting*manaConsumptionMulti);
pearlResource+=pearlProduction*pearlProductionMulti;
stoneResource+=stoneGuaranteedProduction*stoneProductionMulti;
if(stoneConsumptionFromRuneStone>0){var a=min(stoneResource,stoneConsumptionFromRuneStone*stoneConsumptionMulti);stoneLastConsumedByRuneStone=a/stoneConsumptionMulti;stoneResource-=a;}
if(season!==3){stoneLastConsumedByRuneStone=4;}
spiceResource=max(spiceResource-(spiceConsumption-spiceConsumptionFromInnovation-spiceConsumptionFromMines)*spiceConsumptionMulti,0);
if(spiceConsumptionFromInnovation>0){var a=min(spiceResource,spiceConsumptionFromInnovation*spiceConsumptionMulti);innovationLastConsumed=a/spiceConsumptionMulti;spiceResource=max(spiceResource-a,0);}
gadoliniumResource+=gadoliniumProductionFromLavaFreezers*gadoliniumProductionMulti;
flameOrbResource+=flameOrbProduction*flameOrbProductionMulti;
flameOrbResource=max(flameOrbResource-(flameOrbConsumptionFromFrosthour+flameOrbConsumptionFromTerraformers+flameOrbConsumptionFromAutocasting)*flameOrbConsumptionMulti,0);
if(flameOrbConsumptionFromEtD>0){var a=min(flameOrbResource,flameOrbConsumptionFromEtD*flameOrbConsumptionMulti),c=a/flameOrbConsumptionMulti;flameOrbResource=max(flameOrbResource-a,0);spiceResource+=c;}
if(flameOrbConsumptionFromSeed>0){var a=min(flameOrbResource,flameOrbConsumptionFromSeed*flameOrbConsumptionMulti),p=(a/flameOrbConsumptionMulti)/flameOrbConsumptionFromSeed;flameOrbResource=max(flameOrbResource-a,0);bioOrbResource+=bioOrbProjectedProductionFromSeed*p*bioOrbProductionMulti;}
ironResource-=ironConsumptionFromUpkeep;
if(ironResource<0){upkeepLastSatisfiedRatio=ironResource/ironConsumptionFromUpkeep+1;ironResource=0;}else{upkeepLastSatisfiedRatio=1;}
darkEnergyResource+=darkEnergyProductionFromTF*darkEnergyProductionMulti;
totalDarkEnergyGained+=darkEnergyProductionFromTF*darkEnergyProductionMulti;
bioOrbResource+=bioOrbProductionFromInstaGrow*bioOrbProductionMulti;
bioOrbResource=max(bioOrbResource-bioOrbConsumptionFromFrosthour,0);
if(foodInternalFromRibbon>0){ribbonEffectFulfilled=min(1,bioOrbResource/bioOrbConsumptionFromRibbon);bioOrbResource=max(0,bioOrbResource-bioOrbConsumptionFromRibbon);}
mithrilResource+=mithrilGuaranteedProduction*mithrilProductionMulti;
//Run all buildings that consume resources:
var darkDesertResearched=g_TechnologyManager.by_name("Dark Desert").researched,goldenTables=g_TechnologyManager.camel_technology_by_name("Golden Tables").researched,minEnr=allSpells.by_name("Mineral Enrichment").durationLeft>0;
allBuildings.forEach(function(building)
{
    if(g_ToggleButtonManager.furnaceToggle&&building.buildingType===BT_FURNACE&&allTiles[building.tileIndex].tileType!==TT_SLIMED)
    {
        //FURNACE
        if(stoneResource>=furnace_stone_consumption(building.upgradeLevel)*fastererness*stoneConsumptionMulti&&flameOrbResource>=furnace_flame_orb_consumption(building.upgradeLevel)*fastererness*flameOrbConsumptionMulti)
        {stoneResource-=furnace_stone_consumption(building.upgradeLevel)*fastererness*stoneConsumptionMulti;flameOrbResource-=furnace_flame_orb_consumption(building.upgradeLevel)*fastererness*flameOrbConsumptionMulti;ironResource+=furnace_iron_production(building.upgradeLevel)*fastererness*ironProductionMulti;if(building.upgradeLevel>=4){mithrilResource+=(0.5+0.3*(building.upgradeLevel>=5))*fastererness*mithrilProductionMulti;g_ResourcePane.mithrilVisible=!0;}g_ResourcePane.ironVisible=!0;}
    }
    if( g_ToggleButtonManager.darkMineToggle && building.buildingType === BT_MINE && building.upgradeLevel > 3 )
    {
        //DARK MINE (lvl.4+ [F])
        if( manaResource >= (1.5 + 3 *( building.upgradeLevel === 5 ))*manaConsumptionMulti)
        {
            manaResource -= (1.5 + 3 *( building.upgradeLevel === 5 ))*manaConsumptionMulti;
            var rawDEGained = building.resourceProduction * 0.25;
            if( allTiles[ building.tileIndex ].tileType === TT_LAKE )
            {
                rawDEGained *= 2.4;
            }
            if( building.upgradeLevel === 5 )
            {
                rawDEGained *= 5;
                rawDEGained += 0.2 *( darkDesertResearched && allTiles[ building.tileIndex ].tileType === TT_DESERT );
            }
            darkEnergyResource += rawDEGained * darkEnergyProductionMulti;
            totalDarkEnergyGained += rawDEGained * darkEnergyProductionMulti;
            g_ResourcePane.darkEnergyVisible = true;
        }
    }
    if(g_ToggleButtonManager.mithrilMineToggle&&building.buildingType===BT_MITHRIL_MINE)
    {
        var tT=allTiles[building.tileIndex].backsideTileType;
        var ttMulti=mithril_mine_TT_multi(tT);
        if(ttMulti>0&&ironResource>=mithril_mine_iron_consumption(building.upgradeLevel)*ttMulti)
        {
            ironResource-=mithril_mine_iron_consumption(building.upgradeLevel)*ttMulti;
            mithrilResource+=building.resourceProduction*mithrilProductionMulti;
            g_ResourcePane.mithrilVisible=true;
            if(building.upgradeLevel>2){gadoliniumResource+=(0.1+0.05*(season===3))*ttMulti*gadoliniumProductionMulti;}
        }
        if(building.upgradeLevel>3&&ttMulti>0&&g_ToggleButtonManager.mithrilMineDarkToggle)
        {
            var s=(3+1.75*(building.upgradeLevel===5))*spiceConsumptionMulti;
            if(spiceResource>=s)
            {
                spiceResource-=s;
                var rawDE=(building.upgradeLevel===5?2:1)*mithril_mine_deTT_multi(tT)*darkEnergyProductionMulti;
                darkEnergyResource+=rawDE;totalDarkEnergyGained+=rawDE;
                g_ResourcePane.darkEnergyVisible=!0;
            }
        }
    }
    if(g_ToggleButtonManager.lavaFreezerToggle&&building.buildingType===BT_LAVA_FREEZER&&allTiles[building.tileIndex].backsideTileType===TT_LAVA)
    {if(pearlResource>=lava_freezer_pearl_consumption(building.upgradeLevel)*pearlConsumptionMulti){pearlResource-=lava_freezer_pearl_consumption(building.upgradeLevel)*pearlConsumptionMulti;if(minEnr){ironResource+=0.7*lava_freezer_stone_production(building.upgradeLevel)*ironProductionMulti;}else{stoneResource+=lava_freezer_stone_production(building.upgradeLevel)*stoneProductionMulti;}}}
    if(season!==4&&g_ToggleButtonManager.goldenFarmToggle&&building.buildingType===BT_FARM&&building.upgradeLevel>3&&!building.destroyed)
    {var tempM=(building.upgradeLevel>4?9:5),tempG=(building.upgradeLevel>4?0.03:0.01);if(manaResource>=tempM*manaConsumptionMulti){manaResource-=tempM*manaConsumptionMulti;goldenAppleResource+=tempG*goldenAppleProductionMulti;g_ResourcePane.goldenAppleVisible=!0;if(goldenTables&&building_level_on_tile(building.tileIndex,BT_ENCHANTING_TABLE)>=4){goldenAppleResource+=0.02*goldenAppleProductionMulti;}}}
    if(foodInternalFromRibbon>0&&((building.buildingType===BT_TERRAFORMER&&allTiles[building.tileIndex].tileType!==TT_SLIMED)||building.buildingType===BT_BACKSIDE_TERRAFORMER))
    {foodResource+=log(building.upgradeLevel+1)*foodInternalFromRibbon*ribbonEffectFulfilled*foodProductionMulti;}
});
allSpells.forEach(function(s){s.on_day_end();});allIRSDatas.forEach(function(d){d.on_day_end();});run_star_compass();if(random(10)<4){spawn_fish();}if(allSpells.by_name("Spark Music").durationLeft>0&&g_TechnologyManager.by_name("Electric Music").researched){spawn_spark(!0);spawn_spark(!0);spawn_spark(!0);spawn_spark(!0);spawn_spark(!0);}else{if(random(10)<8){spawn_spark(!1);}}if(g_ReefData.health>=80&&random(10)<8){spawn_fish_on_reef();}var rwcs=g_PersistentData.get_challenge_times_completed("RW");
if(creatures_of_type(CT_CAMEL)<max(2,0.01*allTiles.length)+ceil(dayCount/250)&&random(10)<6){spawn_camel();}
if(g_TechnologyManager.by_name("Turtles").researched&&random(10)<1){spawn_turtle();}if(dayCount===70){var txt="The dragon will use his fire to fight enemies.\nHe prioritizes more dangerous enemies\n& enemies closer to your house.";if(spellHints.every(function(h){return h!==txt;})){spellHints.push(txt);spellHints.push("When the dragon is awake, you can\nhover over him with the cursor\nto see the range of his fire breath.");}}if(dayCount===200){var txt="If slime is removed from a tile,\nslimes may no longer spawn\nthere, but swarms might.";if(spellHints.every(function(h){return h!==txt;})){spellHints.push(txt);}}if(daysUntilSwarmArrival===0){spawn_swarm();daysUntilSwarmArrival=floor(random(90,101))-30*(g_PersistentData.currentChallenge==="8YC");}if(dayCount>=200&&dayCount%10===0){tileSlimed=slime_tile();}else{tileSlimed=!1;}if(dayCount>200&&creatures_of_type(CT_SLIME)<10+15*g_TechnologyManager.by_name("Slime Stabilizer").researched){spawn_slime();}if(g_PersistentData.currentChallenge==="DEC"&&dayCount>=250&&dayCount%50===0){spawn_eye();}allCreatures.forEach(function(c){c.on_day_end();});if(g_Dragon.tileAt>-1){g_Dragon.on_day_end();g_Dragon.fight_enemies();}allCreatures.update_train();allCreatures.remove_marked_for_destruction();
var swarmAtPlayerHouse=!1;allCreatures.forEach(function(creature){if(creature.creatureType===CT_SWARM&&allBuildings.get_tile_has(creature.tileAt,BT_HOUSE)){swarmAtPlayerHouse=!0;}});
if(swarmAtPlayerHouse&&movesLeft>1&&!currentlyInBackside){movesLeft-=1;}
if(selectedTile>-1&&g_Diplomacy.currentlyMeetingWith==="camels"&&currentScreen==="diplomacy"&&!allCreatures.get_on_tile(selectedTile,CT_CAMEL)){g_Diplomacy.currentlyMeetingWith="noone";currentScreen="main";}
if(selectedTile>-1&&g_Diplomacy.currentlyMeetingWith==="fire giants"&&currentScreen==="diplomacy"&&!allCreatures.get_on_tile(selectedTile,CT_FIRE_GIANT)){g_Diplomacy.currentlyMeetingWith="noone";currentScreen="main";}
if(dayCount%25===1)
{var tempS=season;season+=1;if(season>3){season=0;var tempT=g_ConstructionManager.currentlyViewing;g_ConstructionManager.on_tile_selected();if(g_ConstructionManager.allowedTypes.includes(tempT)){g_ConstructionManager.currentlyViewing=tempT;}}on_season_changed(tempS);if(season===3&&allBuildings[0].upgradeLevel===5){nextScreen="main";currentScreen="choose-season";}}
//Reef health falls over time:
g_ReefData.on_day_end();
if(dayCount%5===0&&g_TechnologyManager.by_name("Lithomancy").researched)
{var tempS=allSpells.by_name("Stonemover");tempS.autocast();tempS.durationLeft=9;}
if(g_PersistentData.get_total_challenges_completed()<3&&dayCount===180){allCreatures.push(new Creature(floor(random(0,7.9))*8,CT_EDGE_FINDER,1));}
//At day dayToUnlockDarkEnergy, a new cutscene is shown:
if( dayCount === dayToUnlockDarkEnergy )
{
    nextScreen = currentScreen;
    currentScreen = "dark-energy-cutscene";
    cutsceneTickCounter = 0;
}
if(dayCount===dayToRunEnd-100)
{
    nextScreen = currentScreen;
    currentScreen = "time-loop-cutscene-1";
    cutsceneTickCounter = 0;
}
if(dayCount===dayToRunEnd-50)
{
    nextScreen = currentScreen;
    currentScreen = "time-loop-cutscene-2";
    cutsceneTickCounter = 0;
}
if(dayCount===dayToRunEnd-10)
{
    nextScreen = currentScreen;
    currentScreen = "time-loop-cutscene-3";
    cutsceneTickCounter = 0;
}
if(g_TutorialProgress.get_is_in_tutorial()&&dayCount===250){g_TutorialProgress.add_slime_goals();}
if(g_ArtifactManager.by_abbreviation("GFC").active&&season===1){movesLeft+=1;}
recalculate_building_effects();
//There is a time limit.  If it runs out, the game ends!
if(dayCount>dayToRunEnd)
{
    movesLeft = 0;
    nextScreen=g_TutorialProgress.get_is_in_tutorial()?"tutorial-end-of-run":"end-of-run";
    currentScreen = "end-of-run-cutscene";
    selectedTile = -1;
    ticksToShowDayNumber = 0;
    g_PersistentData.on_run_end();
}}catch(err){println("Error in check_day_end()");println(err);if(err.message){println(err.message);}}
};

{
//For more info, see old file versions:
var tile_at_position=function(x,y){
x=round32(x);y=round32(y);for(var i=0;i<allTiles.length;i+=1){if(x>=allTiles[i].x-16&&x<allTiles[i].x+16&&y>=allTiles[i].y-16&&y<allTiles[i].y+16){return i;}}if(allTiles.length<500){if(worldgenOption===4&&world_postgeneration_ver4(x,y)){return allTiles.length-1;}if(worldgenOption===5&&world_postgeneration_ver5(x,y)){return allTiles.length-1;}}return-1;};
var spell_under_cursor=function(){
if(mouseX<16||mouseX>48||mouseY<=37||mouseY>=height-86){return-1;}var y=64-allSpells.scrollOffset+80*g_ResourcePane.goldenAppleVisible;for(var i=0;i<allSpells.length;i+=1){if(!allSpells[i].unlockFunc()){continue;}if(mouseY>=y+16&&mouseY<y+48){return i;}y+=80;}return-1;};
var merfolk_trade_under_cursor=function(){
if(mouseY<132||mouseY>=156){return-1;}var c=-1,x=g_Diplomacy.merfolkScreenOffset;for(var i=0;i<g_Diplomacy.merfolkTrades.length;x+=g_Diplomacy.merfolk_get_trade_item_visual_width(i),i+=1){if(g_Diplomacy.merfolk_get_can_trade(i)){if(mouseX>=x+8&&mouseX<x+56){c=i;break;}}}return c;};
var research_under_cursor=function(){
if(mouseX<48||mouseX>width-60||mouseY<37||mouseY>=height-86){return-1;}var yDraw=56-g_TechnologyManager.scrollOffset,i=0;for(;i<g_TechnologyManager.nonCamelTechs.length;i+=1){if(!g_TechnologyManager.nonCamelTechs[i].get_visible_in_tech_screen()){continue;}if(mouseY>=yDraw-14&&mouseY<yDraw+34){return i;}yDraw+=56;}for(i=0;i<g_TechnologyManager.camelTechs.length;i+=1){if(!g_TechnologyManager.camelTechs[i].get_visible_in_tech_screen()){continue;}if(mouseY>=yDraw-14&&mouseY<yDraw+34){return i+g_TechnologyManager.nonCamelTechs.length;}yDraw+=56;}return-1;};
var tile_under_cursor=function(){
if(mouseY>=height-86||mouseY<37){return-1;}var left=0,right=0,top=0,bottom=0,i=0;for(;i<allTiles.length;i+=1){if(!allTiles[i].revealed){continue;}left=(allTiles[i].tileType===TT_MAP_EDGE)?-1:allTiles[i].x-cameraX-16;right=allTiles[i].x-cameraX+16;top=allTiles[i].y-cameraY-16;bottom=allTiles[i].y-cameraY+16;if(mouseX>=left&&mouseX<right&&mouseY>=top&&mouseY<bottom){return i;}}return-1;};
//This function attemps to select the given tile; if unsuccessful does nothing.
//If successful, performs the action & all of its consequent effects.
var attempt_select_tile=function(which,d)
{
    if(d===undefined){d=1;}
    //The player cannot select a tile with a CT_SWARM on the same side:
    if(!currentlyInBackside&&which>-1)
    {
        for(var i=0;i<allCreatures.length;i+=1)
        {if(allCreatures[i].tileAt===which&&allCreatures[i].creatureType===CT_SWARM){which=-1;break;}}
    }
    //Now that we have a valid tile, select it:
    if(which>-1)
    {
        selectedTile=(d&&selectedTile===which)?-1:which;
        g_ConstructionManager.on_tile_selected();
        if(selectedTile>-1&&goldenClaimTilesLeft>0&&!allTiles[selectedTile].claimed)
        {
            //Golden claim:
            var c=allTiles[selectedTile].food_cost_to_claim();
            if(foodResource>=c)
            {
                if(c>0)
                {
                    foodResource-=c;
                    g_FlyingText.set_text("-"+c+" food",allTiles[selectedTile].x-cameraX,allTiles[selectedTile].y-cameraY);
                    g_FlyingText.fontColor=color(255,128,0);
                }
                claim_tile();
                allGoldClaimAnimations.add();
                goldenClaimTilesLeft-=1;
            }
            else
            {
                g_FlyingText.set_text("Not enough food",allTiles[selectedTile].x-cameraX,allTiles[selectedTile].y-cameraY);
                g_FlyingText.fontColor=color(255,128,0);
            }
        }
        if(currentScreen==="main-info"&&(selectedTile<0||!allTiles[selectedTile].claimed)){currentScreen="main";}
    }
};
var on_player_clicked_tech_notification=function()
{
    if(g_TechnologyManager.count_available()>0){if(currentlyInBackside||!allCreatures.get_on_tile(28,CT_SWARM)){if(selectedTile===28){currentScreen="research";return!0;}attempt_select_tile(28,0);}return!0;}
    if(g_Diplomacy.get_should_display_camel_tech_notification()){if(currentlyInBackside){if(selectedTile===28){TAB_effect_switch_sides();}else{attempt_select_tile(28,0);}return!0;}if(selectedTile>-1&&allTiles[selectedTile].claimed&&allCreatures.get_on_tile(selectedTile,CT_CAMEL)){currentScreen="diplomacy";g_Diplomacy.currentlyMeetingWith="camels";return!0;}var cT=-1,rT=-1,tT=-1,i=0;for(;i<allCreatures.length;i+=1){if(allCreatures[i].creatureType!==CT_CAMEL){continue;}tT=allCreatures[i].tileAt;if(allTiles[tT].claimed){if(!allCreatures.get_on_tile(tT,CT_SWARM)){cT=tT;}}else if(allTiles[tT].revealed){if(!allCreatures.get_on_tile(tT,CT_SWARM)){rT=tT;}}}if(cT>-1){attempt_select_tile(cT,0);}else if(rT>-1){attempt_select_tile(rT,0);}return!0;}
    if(g_Diplomacy.merfolk_get_can_upgrade_mall()){if(currentlyInBackside){if(selectedTile===28){TAB_effect_switch_sides();}else{attempt_select_tile(28,0);}return!0;}var t=-1;if(allBuildings.length>1){t=allBuildings[1].tileIndex;}if(allCreatures.get_on_tile(t,CT_SWARM)){t=-1;}if(t>-1){if(selectedTile>-1&&selectedTile===t){currentScreen="diplomacy";g_Diplomacy.currentlyMeetingWith="merfolk";}else{attempt_select_tile(t,0);}g_Diplomacy.merfolkScreenOffset=284;g_Diplomacy.focusedTrade=-1;}return!0;}
    if(g_PersistentData.currentChallenge==="UCC"){var l=-1,i=0,tI=-1;for(;i<allBuildings.length;i+=1){if(allBuildings[i].buildingType===BT_FURNACE){l=allBuildings[i].upgradeLevel;tI=allBuildings[i].tileIndex;break;}}if(l===-1&&allBuildings.count_of_type(BT_MINE)>=3){if(currentlyInBackside){if(selectedTile===28){TAB_effect_switch_sides();}else{attempt_select_tile(28,0);}return!0;}if(selectedTile>-1&&allTiles[selectedTile].tileType===TT_DESERT){currentScreen="build";g_ConstructionManager.currentlyViewing=BT_FURNACE;return!0;}for(i=0;i<allBuildings.length;i+=1){var z=allBuildings[i].tileIndex;if(allBuildings[i].buildingType===BT_MINE&&!allCreatures.get_on_tile(z,CT_SWARM)){attempt_select_tile(z,0);break;}}return!0;}else if(l===1&&allBuildings.count_of_type(BT_LAVA_FREEZER)||l===2&&g_TechnologyManager.camel_technology_by_name("Expanded Furnaces").researched||l===3&&can_build_furnace_lvl_4()||l===4&&g_TechnologyManager.by_name("Ultimate Furnaces").researched&&allSpells.by_name("Dark Attunement").durationLeft>0){if(currentlyInBackside){if(selectedTile===28){TAB_effect_switch_sides();}else{attempt_select_tile(28,0);}return!0;}if(!allCreatures.get_on_tile(tI,CT_SWARM)){if(selectedTile===tI){currentScreen="build";g_ConstructionManager.currentlyViewing=BT_FURNACE;}else{attempt_select_tile(tI,0);}}return!0;}}
    return!1;
};
} // "which _____ is under the cursor"

{
//For more info, see old file versions:
var draw_lines=function(){
if(allBuildings[0].upgradeLevel<3){return;}noStroke();var lineColor=currentlyInBackside?color(0,128,128):color(64,32,0),voidColor=currentlyInBackside?BACKSIDE_VOID_COLOR:FRONTSIDE_VOID_COLOR;fill(lineColor);if(worldgenOption===5){rect(trainPowerLineX+10-cameraX,max(-cameraY,0),3,height);if(cameraY<30){arc(trainPowerLineX-17-cameraX,-cameraY,60,60,270,360);rect(190-cameraX,-30-cameraY,trainPowerLineX-207,3);fill(voidColor);ellipse(trainPowerLineX-17-cameraX,-cameraY,54,54);if(currentlyInBackside){var t=0,o=60*sin((season===4?0.5:2)*globalCyclicAnimation%90),r=32;noFill();stroke(96,96,128);ellipse(166-cameraX,-29+24*sqrt(3)-cameraY,8,8);arc(190-cameraX,-29-cameraY,22,22,-6*o+20,-6*o+340);stroke(64,64,64+64*cos(2*globalCyclicAnimation%90));ellipse(190-cameraX,-29-cameraY,62,62);ellipse(190-cameraX,-29-cameraY,66,66);ellipse(166-cameraX,-29+24*sqrt(3)-cameraY,18,18);noStroke();fill(64,64,64);ellipse(190-cameraX,-29-cameraY,16,16);for(t=0;t<360;t+=60){r=max(0,16-abs(t+o-240))+32;ellipse(190+r*cos(t+o)-cameraX,-29-r*sin(t+o)-cameraY,16,16);}}else{if(g_TrainBody.tileAt===-1&&dayCount%3<2){fill(255,0,0);rect(184-cameraX,-31-cameraY,20,5);rect(206-cameraX,-31-cameraY,20,5);rect(228-cameraX,-31-cameraY,20,5);}draw_camel(140-cameraX,-32-cameraY,globalCyclicAnimation);draw_camel(210-cameraX,-50-cameraY,globalCyclicAnimation+90);noStroke();fill(64,64,64);if(season===4){fill(128,128,128);}rect(180-cameraX,-32-cameraY,20,7);triangle(180-cameraX,-25-cameraY,224-cameraX,-25-cameraY,208-cameraX,-6-cameraY);triangle(156-cameraX,-32-cameraY,200-cameraX,-32-cameraY,172-cameraX,-51-cameraY);rect(162-cameraX,-27-cameraY,16,16);if(season!==4){fill(96,96,96);rect(166-cameraX,-23-cameraY,8,8,3);ellipse(170-cameraX,-38-cameraY,6,6);ellipse(179-cameraX,-36-cameraY,6,6);ellipse(188-cameraX,-34-cameraY,6,6);ellipse(190-cameraX,-26-cameraY,6,6);}}}if(cameraY>-80){arc(trainPowerLineX+40-cameraX,360-cameraY,60,60,90,180);arc(trainPowerLineX+40-cameraX,417-cameraY,60,60,270,360);rect(trainPowerLineX+67-cameraX,417-cameraY,3,height);fill(voidColor);ellipse(trainPowerLineX+40-cameraX,360-cameraY,54,54);ellipse(trainPowerLineX+40-cameraX,417-cameraY,54,54);}}else{rect(trainPowerLineX+10-cameraX,0,3,height);}};
var render_artifacts_notification=function(){
if(allBuildings[0].upgradeLevel<4){return;}var n=g_ArtifactManager.count_generally_eligible();if(n){fill(255,255,0);stroke(0,0,0);ellipse(26,72,24,24);fill(0,0,0);textAlign(CENTER,CENTER);textSize(12);text(n,26,73);textAlign(LEFT,BASELINE);}};
var render_spells_notification=function(){
if(g_TutorialProgress.get_spells_disabled()){return;}var n=allSpells.count_for_notification();if(n){fill(255,255,0);stroke(0,0,0);ellipse(width-50,108,24,24);fill(0,0,0);textAlign(CENTER,CENTER);textSize(12);text(n,width-50,109);textAlign(LEFT,BASELINE);}};
var draw_spell_screen_bar=function(s,x,y,t){
var theta=t%360,bC=color(0,0,0);if(y<24||y>height-70){return;}switch(s.tileType){case TT_PAVED_OVER:bC=color(128,128,128);break;case TT_DESERT:bC=color(224,224,64);break;case TT_PLAINS:bC=color(0,192,0);break;case TT_LAKE:bC=color(0,128,255);break;case TT_SLIMED:bC=color(32,255,32);break;case TT_LAVA:bC=color(255,0.25*(128-64*gcaS),0);break;case TT_MITHRIL:bC=color(208,208,208);break;case TT_WASTELAND:bC=color(96,96,96);break;}for(var i=0;i<255;i+=1,x+=1){stroke(red(bC),green(bC),blue(bC),255-i);if(s.durationLeft>0&&abs(x-map(theta,0,360,0,width))<16){line(x,y-14,x,y+2);}else{line(x,y-12,x,y);}if(x>width){break;}}};
var render_tiles_and_buildings=function(){
if(currentlyInBackside){background(BACKSIDE_VOID_COLOR);}else{background(FRONTSIDE_VOID_COLOR);}draw_lines();allTiles.forEach(function(T){T.draw();});allBuildings.forEach(function(B){if(B.buildingType===BT_TERRAFORMER||B.buildingType===BT_BACKSIDE_TERRAFORMER){B.draw();}});allBuildings.forEach(function(B){if(B.buildingType!==BT_TERRAFORMER&&B.buildingType!==BT_BACKSIDE_TERRAFORMER&&B.buildingType!==BT_IRS){B.draw();}});allBuildings.forEach(function(B){if(B.buildingType===BT_IRS){B.draw();}});if(g_TrainHead.tileAt>-1){g_TrainHead.draw();}if(g_TrainBody.tileAt>-1){g_TrainBody.draw();}if(g_TrainTail.tileAt>-1){g_TrainTail.draw();}allCreatures.forEach(function(C){C.draw();});if(g_Dragon.tileAt>-1){g_Dragon.draw();g_Dragon.draw_attack_range_visualization();}if(allSpells.by_name("Dark Attunement").durationLeft>0){allTiles.forEach(function(t){t.draw_dark_energy();});}if(selectedTile!==-1){var st=allTiles[selectedTile];stroke(0,0,0);fill(255,255,255,64);if(st.tileType===TT_MAP_EDGE){rect(-2,st.y-cameraY-17,st.x-cameraX+18,33);}else{rect(st.x-cameraX-17,st.y-cameraY-17,33,33);}}};
//For more info, see old file versions:
var render_selected_tile=function(x,y){
if(selectedTile<0){return;}var i=0,st=allTiles[selectedTile];st.draw_at(x,y);for(i=0;i<st.buildings.length;i+=1){if(allBuildings[st.buildings[i]].buildingType===BT_TERRAFORMER||allBuildings[st.buildings[i]].buildingType===BT_BACKSIDE_TERRAFORMER){allBuildings[st.buildings[i]].draw_at(x,y);}}for(i=0;i<st.buildings.length;i+=1){if(allBuildings[st.buildings[i]].buildingType!==BT_TERRAFORMER&&allBuildings[st.buildings[i]].buildingType!==BT_BACKSIDE_TERRAFORMER&&allBuildings[i].buildingType!==BT_IRS){allBuildings[st.buildings[i]].draw_at(x,y);}}for(i=0;i<st.buildings.length;i+=1){if(allBuildings[st.buildings[i]].buildingType===BT_IRS){allBuildings[st.buildings[i]].draw_at(x,y);}}};
var render_reef_healthbar_info=function(){
var rh=g_ReefData.health,rhr=g_ReefData.healthRecord,reefLevel=allBuildings.get_reef_level();if(reefScreenShowBonuses){var bonusText=["","","","","","","",""];if(rhr<20){bonusText[0]="20% - ???";}else{if(rh>=420){bonusText[0]="420% - Fishing on this tile: +5 food (+15 total)";}else if(rh>=220){bonusText[0]="220% - Fishing on this tile: +5 food (+10 total)";}else if(rh>=120){bonusText[0]="120% - Fishing on this tile: +4 food (+5 total)";}else{bonusText[0]="20% - Fishing on this tile: +1 food";}}if(rhr<40){bonusText[1]="40% - ???";}else{if(rh>=480){bonusText[1]="480% - Produces 11 more pearl/day (36 total)";}else if(rh>=380){bonusText[1]="380% - Produces 10 more pearl/day (25 total)";}else if(rh>=320){bonusText[1]="320% - Produces 8 more pearl/day (15 total)";}else if(rh>=240){bonusText[1]="240% - Produces 6 more pearl/day (7 total)";}else if(rh>=140){bonusText[1]="140% - Produces 0.9 more pearl/day (1 total)";}else{bonusText[1]="40% - Produces 0.1 pearl/day";}}if(rhr<60){bonusText[2]="60% - ???";}else{if(rh>=260){bonusText[2]="260% - Stone production increased by 25% (*1.65 total)";}else if(rh>=160){bonusText[2]="160% - Stone production increased by 20% (*1.32 total)";}else{bonusText[2]="60% - Stone production is increased by 10%";}}if(rhr<80){bonusText[3]="80% - ???";}else{if(rh>=180){bonusText[3]="180% - Fish spawn here more often & will not leave";}else{bonusText[3]="80% - Fish spawn on this tile more often";}}if(reefLevel>=3){if(rhr<280){bonusText[4]="280% - ???";}else if(rh>=340){bonusText[4]="340% - Add +50 max evacuees (80 total)";}else{bonusText[4]="280% - Add +30 max evacuees";}}if(reefLevel>=4){if(rhr<360){bonusText[5]="360% - ???";}else{bonusText[5]="360% - Mithril production is increased by 10%";}}if(reefLevel>=5){if(rhr<440){bonusText[6]="440% - ???";}else{if(g_PersistentData.currentChallenge === "URC"){bonusText[6]="440% - (Not available in a URC.)";}else{bonusText[6]="440% - Unlocks mer mall lvl. 3";}}if(rhr<460){bonusText[7]="460% - ???";}else{bonusText[7]="460% - Decreases flame orb consumption by 20%.";}}for(var i=0;i<bonusText.length;i+= 1){text(bonusText[i],64,192+16*i);}}else{var tempStr;text("The bar on the right shows reef health.",64,192);if(rh===500){tempStr="The reef literally cannot get any healthier than this!";}else if(rh>=100){tempStr="Thanks to your help,it's super healthy!";}else if(rh>=90){tempStr="Thanks to your help,it's doing fantastic!";}else if(rh>=80){tempStr="It's doing great!";}else if(rh>=70){tempStr="It's doing very well right now.";}else if(rh>=60){tempStr="It's doing well right now.";}else if(rh>=50){tempStr="It's okay,but could be better.";}else if(rh>=40){tempStr="It's below average.";}else if(rh>=30){tempStr="It's doing poorly.";}else if(rh>=20){tempStr="It's sick.  Please help.";}else if(rh>=10){tempStr="It's super sick.  Please help.";}else{tempStr="It needs your help.  Please help.";}text(tempStr,64,208);if(rh<500){text("Reef health goes up when you "+(g_PersistentData.currentChallenge==="URC"?"give it mana.":"donate mana."),64,224);}if(rh<80){text("Reef health falls over time.",64,240);}else if(rh<160){text("Reef health falls slowly over time.",64,240);}else{text("Reef health no longer falls over time.",64,240);}text("Click on the healthbar to see what bonuses you get.",64,256);if(reefLevel<5&&rh===g_ReefData.maxHealth&&g_TechnologyManager.by_name("Coral Music").researched){text("Cast Water Music on this tile to upgrade the Reef.",64,288);}}};
var render_tech_notification=function(){
var c=g_TechnologyManager.count_available(),h=mouseX>=width-32&&mouseY>=32&&mouseY<64;stroke(0,0,0);if(c>0){if(h){fill(128,224,128);}else{fill(0,192,0);}quad(width-16,32,width,48,width-16,64,width-32,48);fill(255,255,255);ellipse(width-16,56,6,6);triangle(width-16,52,width-19,40,width-13,40);if(h){fill(128,224,224);rect(width-132,32,100,32);fill(0,0,0);textAlign(CENTER,CENTER);textSize(12);if(mouseIsPressed){text("Go to your house\nto research.",width-82,48);}else if(c===1){text(c+" tech available",width-82,48);}else{text(c+" techs available",width-82,48);}textAlign(LEFT,BASELINE);}}else if(g_Diplomacy.get_should_display_camel_tech_notification()){if(h){fill(240,240,160);}else{fill(224,224,64);}quad(width-16,32,width,48,width-16,64,width-32,48);fill(255,255,255);ellipse(width-16,56,6,6);triangle(width-16,52,width-19,40,width-13,40);if(h){fill(128,224,224);rect(width-132,32,100,32);fill(0,0,0);textAlign(CENTER,CENTER);textSize(12);if(mouseIsPressed){text("Find a camel\nto buy tech.",width-82,48);}else{text("Camel tech\navailable.",width-82,48);}textAlign(LEFT,BASELINE);}}else if(g_Diplomacy.merfolk_get_can_upgrade_mall()){if(h){fill(255,192,128);}else{fill(255,128,0);}ellipse(width-16,48,32,32);fill(255,255,255);ellipse(width-16,56,6,6);triangle(width-16,52,width-19,40,width-13,40);if(h){fill(128,224,224);rect(width-162,32,130,32);fill(0,0,0);textAlign(CENTER,CENTER);textSize(12);if(mouseIsPressed){text("Talk with the merfolk to\nupgrade the mer mall.",width-97,48);}else{text("Upgrade available\nfor the mer mall!",width-97,48);}textAlign(LEFT,BASELINE);}}else if(g_PersistentData.currentChallenge==="UCC"){var t1="",t2="",l=-1,i=0;for(;i<allBuildings.length;i+=1){if(allBuildings[i].buildingType===BT_FURNACE){l=allBuildings[i].upgradeLevel;break;}}if(l===-1&&allBuildings.count_of_type(BT_MINE)>=3){t1="Eligible to\nbuild a furnace!";t2="Build a furnace soon.";}if(l===1&&allBuildings.count_of_type(BT_LAVA_FREEZER)||l===2&&g_TechnologyManager.camel_technology_by_name("Expanded Furnaces").researched||l===3&&can_build_furnace_lvl_4()||l===4&&g_TechnologyManager.by_name("Ultimate Furnaces").researched&&allSpells.by_name("Dark Attunement").durationLeft>0){t1="Furnace upgrade\nnow available!";t2="Upgrade your\nfurnace soon.";}if(t1.length&&t2.length){if(h){fill(255,240,128);}else{fill(255,224,0);}ellipse(width-16,48,32,32);fill(255,255,255);ellipse(width-16,56,6,6);triangle(width-16,52,width-19,40,width-13,40);if(h){fill(128,224,224);rect(width-162,32,130,32);fill(0,0,0);textAlign(CENTER,CENTER);textSize(12);if(mouseIsPressed){text(t2,width-97,48);}else{text(t1,width-97,48);}textAlign(LEFT,BASELINE);}}}};

var draw_cybermind_power_line_terraforming_thing=function(){
var x=width*7/8,y=176;noFill();stroke(255,0,0);line(x-8,140,x-8,y-16);ellipse(x-7.5,138.5,4,4);line(x-40,y+8,x-16,y+8);line(x-40,138,x-40,y+8);line(x-40,138,x-18,138);ellipse(x-15.5,138.5,4,4);line(x+16,y+8,x+24,y+8);line(x+24,y+8,x+24,y+24);line(x+13,y+24,x+24,y+24);fill(255,0,0);ellipse(x+11.5,y+24.5,4,4);noFill();line(x-8,y+16,x-26,y+34);ellipse(x-27.5,y+35.5,4,4);stroke(0,255,0);line(x-30,y-8,x-16,y-8);line(x-30,y-8,x-30,y+16);ellipse(x-29.5,y+18.5,4,4);line(x+8,y-16,x+11,y-19);line(x+11,104,x+11,y-19);fill(0,255,0);ellipse(x+11.5,y-25.5,4,4);ellipse(x+11.5,132.5,4,4);ellipse(x+11.5,120.5,4,4);ellipse(x+11.5,102.5,4,4);noFill();line(x+13,132,x+30,132);line(x+30,132,x+30,y-8);line(x+16,y-8,x+30,y-8);line(x+13,120,width,120);line(x+8,y+16,x-6,y+30);line(x-28.5,y+19,x-17.5,y+30);line(x-17,y+30,x-7,y+30);stroke(0,0,255);line(x+16,y,x+26,y);line(x+26,y,x+26,y+40);line(x+26,y+40,width,y+40);line(x,y+16,x,y+40);ellipse(x+0.5,y+42.5,4,4);line(x+2,y+42,width,y+42);fill(0,0,255);ellipse(x+11.5,y+42.5,4,4);noFill();line(x+12,y+41.5,x+15,y+38.5);line(x+15,y+38,x+28,y+38);line(x+28,140,x+28,y+38);line(x+18,140,x+28,140);ellipse(x+16.5,140.5,4,4);line(x-56,y,x-16,y);ellipse(x-57.5,y+0.5,4,4);line(x-58,y-20,x-58,y-2);line(x-58,y-20,x-42,y-20);line(x-42,126,x-42,y-20);ellipse(x-41.5,124.5,4,4);line(x-63.5,y-5.5,x-59,y-1);line(x-64,y-22,x-64,y-6);line(x-64,y-22,x-30,y-22);ellipse(x-27.5,y-21.5,4,4);arc(x-57.5,y+0.5,10,10,0,225);line(x,y-16,x-5.5,y-21.5);line(x-12,y-22,x-6,y-22);line(x-12,147,x-12,y-22);ellipse(x-11.5,145.5,4,4);};
var draw_resource_breakdown_title=function(t){
var s=32;fill(0);for(;s>5;s-=1){textSize(s);if(textWidth(t)<width-32){break;}}text(t,16,32);};
var draw_enchanting_button_silhouettes=function()
{
    var art=g_ArtifactManager.by_abbreviation("TF");
    var do3=art.active,do9=art.active&&art.level>=5,y=mouseY>=224&&mouseY<248;
    stroke(0,0,0);noFill();
    rect(200,224,54,24);
    text("Enchant",204,240);
    if(mouseX>=200&&mouseX<254&&y)
    {
        text(can_enchant()?"Ingredients → Products":"Can't afford!",204,262);
    }
    if(do3)
    {
        rect(258,224,20,24);
    text("x3",262,240);
        if(mouseX>=258&&mouseX<278&&y)
        {
            text(can_enchant(3)?"3x Ingredients → 3x Products":"Can't afford!",204,262);
        }
    }
    if(do9)
    {
        rect(282,224,20,24);
    text("x9",286,240);
    if(mouseX>=282&&mouseX<302&&y)
    {
        text(can_enchant(9)?"9x Ingredients → 9x Products":"Can't afford!",204,262);
    }
    }
};
} //Supplemental rendering

{
//For more info, see old file versions:
var terraformSpiceCost=function(l){return 10*pow(terraform_cost_multi(l),tilesTerraformed);};
var terraformManaCost=function(l){return 80*pow(terraform_cost_multi(l),tilesTerraformed)*(1-0.15*(l===5));};
var terraformFlameOrbCost=function(l){return 20*pow(terraform_cost_multi(l),tilesTerraformed)-(l===5)*0.47*sq(tilesTerraformed);};
var terraformSpecificCost=function(l){return 50*pow(terraform_cost_multi(l),tilesTerraformed);};
var can_afford_terraforming=function(t,l){
var s=0;switch(t){case TT_PLAINS:case TT_MITHRIL:s=foodResource;break;case TT_DESERT:case TT_LAVA:s=stoneResource;break;case TT_LAKE:case TT_WASTELAND:s=pearlResource;break;case TT_SWAMP:case TT_CYBERMIND:return spiceResource>=terraformSpiceCost(l)&&manaResource>=terraformManaCost(l)+terraformSpecificCost(l)&&flameOrbResource>=terraformFlameOrbCost(l);}return spiceResource>=terraformSpiceCost(l)&&manaResource>=terraformManaCost(l)&&flameOrbResource>=terraformFlameOrbCost(l)&&s>=terraformSpecificCost(l);};
var pay_terraforming_costs=function(t,l){
switch(t){case TT_PLAINS:case TT_MITHRIL:spiceResource-=terraformSpiceCost(l);manaResource-=terraformManaCost(l);flameOrbResource-=terraformFlameOrbCost(l);foodResource-=terraformSpecificCost(l);break;case TT_DESERT:case TT_LAVA:spiceResource-=terraformSpiceCost(l);manaResource-=terraformManaCost(l);flameOrbResource-=terraformFlameOrbCost(l);stoneResource-=terraformSpecificCost(l);break;case TT_LAKE:case TT_WASTELAND:spiceResource-=terraformSpiceCost(l);manaResource-=terraformManaCost(l);flameOrbResource-=terraformFlameOrbCost(l);pearlResource-=terraformSpecificCost(l);break;case TT_SWAMP:case TT_CYBERMIND:spiceResource-=terraformSpiceCost(l);manaResource-=terraformManaCost(l)+terraformSpecificCost(l);flameOrbResource-=terraformFlameOrbCost(l);break;}};
var can_terraform_selected_tile=function(newType){
if(selectedTile===-1||allTiles[selectedTile].tileType===newType||allTiles[selectedTile].backsideTileType===newType){return!1;}var bldgs=allTiles[selectedTile].buildings,lrt=g_TechnologyManager.by_name("Less Restrictive Terraforming").researched,i=0;for(;i<bldgs.length;i+=1){var B=allBuildings[bldgs[i]];if(!B.visible_in_current_side()){continue;}switch(B.buildingType){case BT_MINE:if(newType===TT_SWAMP){return!1;}break;case BT_FARM:if(newType!==TT_PLAINS){return!1;}break;case BT_COLLECTOR:if(newType!==TT_SWAMP&&!g_TechnologyManager.by_name("Desert Collectors").researched){return!1;}break;case BT_FURNACE:if(newType===TT_LAKE){return!1;}break;case BT_IRS:if(newType===TT_LAKE||newType===TT_SWAMP){return!1;}break;case BT_LAVA_FREEZER:if(newType!==TT_LAVA&&!lrt){return!1;}if(B.destroyed&&newType===TT_LAVA){return!1;}break;case BT_MITHRIL_MINE:if(newType!==TT_MITHRIL&&(!lrt||newType===TT_LAVA)){return!1;}break;}}return!0;};
var terraform_selected_tile=function(newType){
if(selectedTile===-1){return;}if(!currentlyInBackside){switch(allTiles[selectedTile].tileType){case TT_PLAINS:g_Factors.remove_plains_tile();break;case TT_DESERT:g_Factors.remove_desert_tile();break;case TT_SWAMP:g_Factors.remove_swamp_tile();break;case TT_LAKE:g_Factors.remove_lake_tile();break;}switch(newType){case TT_PLAINS:g_Factors.add_plains_tile();break;case TT_DESERT:g_Factors.add_desert_tile();break;case TT_SWAMP:g_Factors.add_swamp_tile();break;case TT_LAKE:g_Factors.add_lake_tile();break;}allTiles[selectedTile].tileType=newType;var camelsRemoved=0,i=0;while(i<allCreatures.length){if(allCreatures[i].creatureType===CT_FISH&&allCreatures[i].tileAt===selectedTile){allCreatures.splice(i,1);continue;}if(allCreatures[i].creatureType===CT_CAMEL&&allCreatures[i].tileAt===selectedTile){camelsRemoved+=1;allCreatures.splice(i,1);continue;}if(allCreatures[i].creatureType===CT_TURTLE&&allCreatures[i].tileAt===selectedTile){allCreatures.splice(i,1);continue;}i+=1;}g_Diplomacy.camelsStanding-=0.5*camelsRemoved;}else{allTiles[selectedTile].backsideTileType=newType;for(var i=0;i<allCreatures.length;){if(allCreatures[i].creatureType===CT_TURTLE&&allCreatures[i].tileAt===selectedTile){allCreatures.splice(i,1);continue;}i+=1;}}tilesTerraformed+=1;if(newType===TT_CYBERMIND&&allBuildings[0].upgradeLevel>=3&&allTiles[selectedTile].hasTrainPowerLine){g_Diplomacy.increase_cybermind_multis(1,color(255,255,255));}movesLeft-=1;recalculate_building_effects();g_ConstructionManager.on_tile_selected();currentScreen="main";};
} //Terraforming helpers

{
var lineThingy=function(t){return-0.0000725*t*t*t+2.4*t+200;};
var draw_book_cover=function(y){
stroke(64,32,0);fill(128,64,0);rect(width/2-75,y,150,225);stroke(255,255,0);noFill();arc(width/2-61,y+211,24,24,90,180);line(width/2-73,y+223,width/2-61,y+223);line(width/2-73,y+223,width/2-73,y+211);arc(width/2-61,y+14,24,24,180,270);line(width/2-73,y+2,width/2-61,y+2);line(width/2-73,y+2,width/2-73,y+14);arc(width/2+61,y+14,24,24,270,360);line(width/2+73,y+2,width/2+61,y+2);line(width/2+73,y+2,width/2+73,y+14);arc(width/2+61,y+211,24,24,0,90);line(width/2+73,y+223,width/2+61,y+223);line(width/2+73,y+223,width/2+73,y+211);fill(255,255,0);textAlign(CENTER,BASELINE);textSize(20);text("Intro to\nAQUAMANCY",width/2,y+40);};
var draw_open_book=function(y){
stroke(64,32,0);fill(128,64,0);rect(width/2-150,y,300,225);noStroke();fill(224,240,240);rect(width/2-145,y+2,290,221);stroke(0,0,0);line(width/2,y+2,width/2,y+223);};
var draw_fish_spell=function(y){
var x=width/2-75;if(cutsceneTickCounter>=270){noStroke();fill(255,64,0);triangle(100,y+100,100,y+130,120,y+115);ellipse(130,y+115,40,30);}if(cutsceneTickCounter>=280){fill(255,0,0);triangle(110,y+110,110,y+140,130,y+125);ellipse(140,y+125,40,30);}noFill();stroke(224,0,224);ellipse(x,y+120,100,100);arc(x,y+120,110,110,3*cutsceneTickCounter%360,3*cutsceneTickCounter%360+40*sin(3*cutsceneTickCounter)+60);arc(x,y+120,120,120,360-(2*cutsceneTickCounter%360),380-(2*cutsceneTickCounter%360));};
var draw_pearl_spell=function(y){
fill(224,224,224);noStroke();for(var i=0;i<10;i+=1){if(i<(cutsceneTickCounter-430)/10){ellipse(width/2+6*cos(30*i)+75,y+16*i+38,12,12);}}stroke(224,0,224);line(width/2+56,y+60*sin(2*cutsceneTickCounter)+102,width/2+56,y+60*sin(2*cutsceneTickCounter)+122);line(width/2+94,y-60*sin(2*cutsceneTickCounter)+102,width/2+94,y-60*sin(2*cutsceneTickCounter)+122);};
var draw_dark_energy_engine=function(){
var x=0;if(cutsceneTickCounter>=1250){x=2*(cutsceneTickCounter-1250);}noStroke();for(var i=110;i<190;i+=20){if(cutsceneTickCounter>=1185-1.5*i){fill(255,160,0);}else{fill(224,0,255);}ellipse(i+x,180,10,10);ellipse(i+x,250,10,10);}fill(128,96,32);triangle(60+x,190,140+x,215,60+x,240);fill(0,255,128);triangle(200+x,185,200+x,205,160+x,195);fill(192,192,192);rect(90+x,180,100,70,10);fill(224,224,224);rect(100+x,190,40,30,5);fill(255,64,64);ellipse(175+x,235,10,10);};
var draw_dark_energy_stream=function(o){
if(o>960){return;}noStroke();fill(0,0,0);var d=max(-0.2*o+196,5),x=200;if(o<920){x=0.2*sq(o-920)+200;}else{x=-0.2*o+384;}ellipse(x,195,d,d);};
var draw_universe_dots=function(){
if(cutsceneTickCounter>60){stroke(255,255,255);if(cutsceneTickCounter<2200){line(80,274,183,232);}if(cutsceneTickCounter>80){line(120,196,183,232);}if(cutsceneTickCounter>100){line(183,232,207,303);line(292,267,207,303);}if(cutsceneTickCounter>120){line(292,267,392,207);}if(cutsceneTickCounter>140 && cutsceneTickCounter<2200){line(57,339,80,274);}if(cutsceneTickCounter>160){line(292,267,372,339);}if(cutsceneTickCounter>180){if(cutsceneTickCounter<2200){line(4,211,80,274);}line(4,211,120,196);}if(cutsceneTickCounter>200){line(57,339,-24,281);}if(cutsceneTickCounter>220){line(451,288,372,339);}}noStroke();if(cutsceneTickCounter<940){fill(255,255,255);ellipse(80,274,min(cutsceneTickCounter/2,20),min(cutsceneTickCounter/2,20));}else if(cutsceneTickCounter<2200){var T=cutsceneTickCounter%360,r=6*sin(5*T)+20;fill(255,128,0);ellipse(80,274,r,r);if(r<=20){stroke(255,128,0);noFill();arc(80,274,20,20,T,T+90);arc(80,274,20,20,T+180,T+270);noStroke();}fill(255,255,255);}if(cutsceneTickCounter>20){ellipse(183,232,min((cutsceneTickCounter-20)/2,20),min((cutsceneTickCounter-20)/2,20));}if(cutsceneTickCounter>40){ellipse(292,267,min(cutsceneTickCounter-40,20),min(cutsceneTickCounter-40,20));}if(cutsceneTickCounter>60){ellipse(120,196,min(cutsceneTickCounter-60,20),min(cutsceneTickCounter-60,20));}if(cutsceneTickCounter>80){ellipse(207,303,min(cutsceneTickCounter-80,20),min(cutsceneTickCounter-80,20));}if(cutsceneTickCounter>100){ellipse(392,207,min(cutsceneTickCounter-100,20),min(cutsceneTickCounter-100,20));}if(cutsceneTickCounter>120){ellipse(57,339,min(cutsceneTickCounter-120,20),min(cutsceneTickCounter-120,20));}if(cutsceneTickCounter>140){ellipse(372,339,min(cutsceneTickCounter-140,20),min(cutsceneTickCounter-140,20));}if(cutsceneTickCounter>160){ellipse(4,211,min(cutsceneTickCounter-160,20),min(cutsceneTickCounter-160,20));}if(cutsceneTickCounter>=2200){fill(255,128,0);var t=40*(1-exp(-0.01*(cutsceneTickCounter-2200))),d=8*exp(-0.006*(cutsceneTickCounter-2200)),i=0;for(;i<360;i+=30){ellipse(80+t*cos(i),274+t*sin(i),d,d);}}};
var draw_cutscene_buttons=function(L){
noStroke();fill(0);rect(0,350,width,50);if(mouseY>=350){fill(64,64,64);if(mouseX<width/2){rect(0,350,width/2,50);}else{rect(width/2,350,width/2,50);}}var s=cutsceneTickCounter-L;if(s>=0&&s<=15){fill(255,255,255,map(s,0,15,255,0));rect(width/2,350,width/2,50);}fill(255,255,255);textAlign(CENTER,CENTER);textSize(20);text(cutsceneTickCounter>=L?"Continue?":"Skip?",3*width/4,375);text("Replay?",width/4,375);textAlign(LEFT,BASELINE);if(cutsceneTickCounter>=L){noStroke();fill(0,192,0);if(mouseY>=350&&mouseX>=width/2){fill(128,224,128);}var x=363+10*sin(7*globalCyclicAnimation);triangle(x,355,x+20,375,x,395);}};
var render_opening_cutscene=function(){
var o=0,i=0;noStroke();if(cutsceneTickCounter<680||cutsceneTickCounter>1225){background(0,0,0);}else{background(255,255,255);}fill(0,0,0);rect(0,350,width,50);if(cutsceneTickCounter>395&&cutsceneTickCounter<680){stroke(255,255,255);for(i=0;i<350;i+=1){o=width+80-2*(cutsceneTickCounter-395)+50*sin(i)+25*cos(2*i)-11*sin(4*i);line(o,i,max(o+1,width),i);}noStroke();fill(0,0,0);ellipse(width+60-2*(cutsceneTickCounter-395),280,40,24);}if(cutsceneTickCounter>650&&cutsceneTickCounter<800){stroke(100*sin(cutsceneTickCounter)+100,100*cos(cutsceneTickCounter)+100,-100*sin(cutsceneTickCounter)+100);for(i=0;i<350;i+=1){o=width+60-4*(cutsceneTickCounter-650)+35*cos(i)+10*sin(5*i)-8*cos(0.02*i*i);line(o,i,max(o+1,width),i);}}if(cutsceneTickCounter>725&&cutsceneTickCounter<1230){var l=min(255,1225-cutsceneTickCounter);for(i=0;i<350;i+=1){if(i>=allTiles[28].y-16&&i<allTiles[28].y+16){stroke(random(0,255),random(0,255),random(0,255));}else{stroke(random(0,l),random(0,l),random(0,l));}if(cutsceneTickCounter<800){o=width+40-8*(cutsceneTickCounter-725)+20*sin(i)-2*cos(6*i)+sqrt(abs(i-200));}else{o=0;}line(o,i,max(o+1,width),i);}}if(cutsceneTickCounter>=1230){for(i=allTiles[28].y-16;i<allTiles[28].y+16;i+=1){stroke(random(0,255),random(0,255),random(0,255));line(0,i,width,i);}}if(cutsceneTickCounter<650){stroke(min(255,cutsceneTickCounter));for(i=0;i<25;i+=1){point(random(192),random(30)+145);}}allTiles[28].draw_at(192,160);noStroke();fill(0,0,0,max(255-cutsceneTickCounter,0));rect(176,144,32,32);allBuildings[0].draw_at(192,160);if(cutsceneTickCounter>15&&cutsceneTickCounter<400){stroke(255,255,255);line(allTiles[28].x,allTiles[28].y,250,200);textSize(12);fill(255,255,255);text("Your house",254,206);}if(cutsceneTickCounter>120&&cutsceneTickCounter<400){line(allTiles[28].x+16,allTiles[28].y-16,250,100);line(250,85,250,115);text("The tile your house\nis set on",254,96);}if(cutsceneTickCounter>1245){textSize(12);fill(255,255,255);text("So, as your house traveled at immense speeds through the cosmos, you & your companion slumbered, until one day...you woke up.",50,50,300,height);}draw_cutscene_buttons(1350);cutsceneTickCounter+=1;};
var render_water_music_cutscene=function(){
background(0,0,0);if(cutsceneTickCounter<250){if(cutsceneTickCounter<100&&g_PersistentData.currentChallenge!=="URC"){draw_book_cover(100-sq(0.2*cutsceneTickCounter-20));}else{draw_book_cover(100);if(g_PersistentData.currentChallenge==="URC"&&cutsceneTickCounter<85){noStroke();fill(0,0,0,255-3*cutsceneTickCounter);rect(0,0,width,height);}}}else{draw_open_book(100);draw_fish_spell(100);if(cutsceneTickCounter>=430){draw_pearl_spell(100);}}fill(255,255,255);textSize(12);textAlign(LEFT,BASELINE);if(cutsceneTickCounter<300&&g_PersistentData.currentChallenge==="URC"){text("As you explore the ruined structure, it becomes clear that it has been vacant for years.  While exploring a pearl shop, you find a sack of pearl & also a book lying on the floor.",50,32,width-100,300);}if(g_PersistentData.currentChallenge!=="URC"&&cutsceneTickCounter>=80&&cutsceneTickCounter<300){text("As you leave the mall with your purchases, another merman approaches.  You recognize him as the Mayor.\nHe hands you a book.",50,32,width-100,300);}if(cutsceneTickCounter>=320&&cutsceneTickCounter<760){text("The book explains how to make fish spawn using the power of magic & how to get pearl directly from fishing (based on the lake factor).",50,32,width-100,300);}if(cutsceneTickCounter>=770){text((g_PersistentData.currentChallenge==="URC"?"You retrieve the sack of 10 pearl":"You thank the Mayor for the gift")+" & return to your house, pondering what you just read...but what would you do with so much seafood?",50,32,width-100,300);}draw_cutscene_buttons(900);cutsceneTickCounter+=1;};
var render_dark_energy_cutscene=function(){
if(cutsceneTickCounter<880||cutsceneTickCounter>1250){background(0,0,0);}else{background(255,255,255);}if(cutsceneTickCounter<420){textSize(18);fill(255,255,255,min(255,840-cutsceneTickCounter*2));text("You remember something you learned in history class.",20,60-0.3*cutsceneTickCounter,width-40,300);if(cutsceneTickCounter>=150){text("When dark energy was first discovered, no one realized that its power could be harnessed.",20,160-0.3*cutsceneTickCounter,width-40,300);}}if(cutsceneTickCounter>=880&&cutsceneTickCounter<1010){draw_dark_energy_stream(cutsceneTickCounter);draw_dark_energy_stream(cutsceneTickCounter-10);draw_dark_energy_stream(cutsceneTickCounter-20);draw_dark_energy_stream(cutsceneTickCounter-30);draw_dark_energy_stream(cutsceneTickCounter-40);draw_dark_energy_stream(cutsceneTickCounter-50);}if(cutsceneTickCounter>=1020&&cutsceneTickCounter<1250){for(var i=max(0,1235-cutsceneTickCounter);i<min(350,-805+cutsceneTickCounter);i+=1){stroke(random(0,255),random(0,255),random(0,255));line(0,i,width,i);}}if(cutsceneTickCounter>=1250&&cutsceneTickCounter<1505){var l=1505-cutsceneTickCounter,i=0;for(;i<350;i+=1){stroke(random(0,l),random(0,l),random(0,l));line(0,i,width,i);}}if(cutsceneTickCounter>=390&&cutsceneTickCounter<1455){draw_dark_energy_engine();textSize(12);stroke(255,255,255);fill(255,255,255);if(cutsceneTickCounter>=450&&cutsceneTickCounter<850){line(205,195,265,220);text("Input dark energy here",269,226);}if(cutsceneTickCounter>=470&&cutsceneTickCounter<855){line(150,170,160,140);text("Steering nodes",100,138);}if(cutsceneTickCounter>=490&&cutsceneTickCounter<860){line(70,215,90,270);text("Hyperspeed nozzle",50,284);}if(cutsceneTickCounter>=510&&cutsceneTickCounter<865){line(120,205,80,120);text("Navigation computer",20,118);}if(cutsceneTickCounter>=530&&cutsceneTickCounter<870){line(175,235,220,260);text("Emergency stop",224,266);}}if(cutsceneTickCounter>=550&&cutsceneTickCounter<880){textSize(18);fill(255,255,255);text("The invention of the dark energy engine promised to revolutionize science & technology.",20,35,width-40,300);}if(cutsceneTickCounter>=1505){textSize(18);fill(255,255,255);text("Dark energy engines allowed scientists to send probes to the edge of the universe, where they discovered something surprising.  Their universe was only one of hundreds in existence.",20,135,width-40,300);}draw_cutscene_buttons(1800);cutsceneTickCounter+=1;};
var render_dark_energy_cutscene_2=function(){
background(0,0,0);textSize(18);fill(255,255,255);if(cutsceneTickCounter<240){var y=60-0.2*min(180,cutsceneTickCounter)-1.4*max(cutsceneTickCounter-180,0);text("There is only one way to travel from one universe to the next.",20,y,width-40,300);}if(cutsceneTickCounter>=240&&cutsceneTickCounter<600){text("The distance between universes is so vast...",20-0.00007*pow(cutsceneTickCounter-420,3),60);}if(cutsceneTickCounter>=450&&cutsceneTickCounter<810){text("Only a dark energy engine is fast enough...",20-0.00007*pow(cutsceneTickCounter-630,3),90);}if(cutsceneTickCounter>=660&&cutsceneTickCounter<1020){text("But dark energy is so hard to acquire...",20+0.00007*pow(cutsceneTickCounter-840,3),60);}if(cutsceneTickCounter>=870&&cutsceneTickCounter<1230){text("That by the time of the Calamity...",20+0.00007*pow(cutsceneTickCounter-1050,3),90);}if(cutsceneTickCounter>=1080&&cutsceneTickCounter<1440){text("There only was enough for 1 engine...",20-0.00007*pow(cutsceneTickCounter-1260,3),60);}if(cutsceneTickCounter>=1290&&cutsceneTickCounter<1650){text("The engine that brought you to this universe...",20-0.00007*pow(cutsceneTickCounter-1470,3),90);}if(cutsceneTickCounter>=1500&&cutsceneTickCounter<1860){text("So they sent you with a mission...",20+0.00007*pow(cutsceneTickCounter-1680,3),60);}if(cutsceneTickCounter>=1710&&cutsceneTickCounter<2070){text("To rescue EVERYBODY.",20+0.00007*pow(cutsceneTickCounter-1890,3),90);}if(cutsceneTickCounter>=1920&&cutsceneTickCounter<2280){text("Time is running short, & when it runs out...",20-0.00007*pow(cutsceneTickCounter-2100,3),60);}if(cutsceneTickCounter>=2130&&cutsceneTickCounter<2490){text("Trillions of souls will perish.",20-0.00007*pow(cutsceneTickCounter-2310,3),90);}draw_universe_dots();draw_cutscene_buttons(2550);cutsceneTickCounter+=1;};
var render_time_loop_cutscene=function(whichVersion){
var oldSide=currentlyInBackside,oldCameraX=cameraX,oldCameraY=cameraY,mag=0,dir=random(360),i=0,d=0,o=0;currentlyInBackside=!1;if(whichVersion===1){if(cutsceneTickCounter>=180&&cutsceneTickCounter<440){mag=random(3)*exp(-0.02*(cutsceneTickCounter-180));}}else{if(cutsceneTickCounter>=180&&cutsceneTickCounter<330){mag=random(3)*exp(-0.02*(cutsceneTickCounter-180));}if(cutsceneTickCounter>=330&&cutsceneTickCounter<405){mag=random(5);}if(cutsceneTickCounter>=406&&cutsceneTickCounter<420){mag=random(5)*-1/3*(cutsceneTickCounter-420);}}cameraX=mag*cos(dir);cameraY=mag*sin(dir);background(0,0,0);draw_lines();allTiles.forEach(function(T){T.draw();});allBuildings.forEach(function(B){if(B.buildingType===BT_TERRAFORMER||B.buildingType===BT_BACKSIDE_TERRAFORMER){B.draw();}});allBuildings.forEach(function(B){if(B.buildingType!==BT_TERRAFORMER&&B.buildingType!==BT_BACKSIDE_TERRAFORMER&&B.buildingType!==BT_IRS){B.draw();}});allBuildings.forEach(function(B){if(B.buildingType===BT_IRS){B.draw();}});allCreatures.forEach(function(C){C.draw();});if(allSpells.by_name("Dark Attunement").durationLeft>0){allTiles.forEach(function(T){T.draw_dark_energy();});}noStroke();fill(0,0,0,max(255-cutsceneTickCounter,128));rect(0,0,width,height);if(cutsceneTickCounter<90){fill(255,255,255);textSize(36);text("That night...",40,40);}else if(cutsceneTickCounter<180){fill(255,255,255);textSize(36);text("As you slept...",40,40);}if(cutsceneTickCounter>=180&&cutsceneTickCounter<440){d=200*(1-exp(-0.03*(cutsceneTickCounter-180)));fill(0,255,0,constrain(435-cutsceneTickCounter,0,255));ellipse(allTiles[28].x-cameraX,allTiles[28].y-cameraY,d,d);}if(whichVersion!==1){if(cutsceneTickCounter>=330&&cutsceneTickCounter<420){d=0.1*sq(cutsceneTickCounter-330);fill(0,255,0);ellipse(allTiles[28].x,allTiles[28].y,d,d);}if(cutsceneTickCounter>=420&&cutsceneTickCounter<550){fill(0,255,0,constrain(255-2*(cutsceneTickCounter-420),0,255));rect(0,0,width,height);}if(whichVersion===3&&cutsceneTickCounter>=420){stroke(0,255,0);o=2*(cutsceneTickCounter%16);for(i=o;i<width;i+=32){line(i,0,i,height);}for(i=height-o-1;i>=0;i-=32){line(0,i,width,i);}}}g_Dragon.draw_at(allTiles[28].x-cameraX,allTiles[28].y-cameraY);cameraX=oldCameraX;cameraY=oldCameraY;currentlyInBackside=oldSide;draw_cutscene_buttons(600);cutsceneTickCounter+=1;};
var render_end_of_run_cutscene=function(){
background(0);var v=g_PersistentData.get_total_challenges_completed()>1;if(cutsceneTickCounter>=360&&cutsceneTickCounter<1440){var diameter=60*abs(sin(cutsceneTickCounter));fill(0,255,0);ellipse(200,175,diameter,diameter);}if(cutsceneTickCounter<150){g_Dragon.draw_at(200-0.00007*pow(cutsceneTickCounter-150,3),175);}else if(cutsceneTickCounter<1560){g_Dragon.draw_at(200,175);}else if(cutsceneTickCounter<1710){g_Dragon.draw_at(200-0.00007*pow(cutsceneTickCounter-1560,3),175);}noStroke();textSize(18);fill(255,255,255);if(cutsceneTickCounter>=90&&cutsceneTickCounter<450){text(v?"Your companion has a now-familiar message for you.  For the past 3 years, he's practiced his time-manipulation abilities.":"Your companion has a message for you.  Apparently, ever since arriving in this new universe, he has been learning to control time.",20,40,width-40,300);}if(cutsceneTickCounter>=480&&cutsceneTickCounter<750){text(v?"Trillions of souls yet remain in your home universe--but the time loop field will give you as much time as you need to save all of them.":(evacuees>0?"Your were unable to save everybody":"You didn't save anybody")+" from your home universe--but your companion informs you that you can have another chance.",20,40,width-40,300);}if(cutsceneTickCounter>=780&&cutsceneTickCounter<1110){text(v?"Once again, the time loop field is active.  Whenever you run out of time, you can start over.":"Your companion has successfully managed to create a time loop field.  Whenever you run out of time, you can start over to "+(evacuees>0?"continue rescuing people.":"try again."),20,40,width-40,300);}if(cutsceneTickCounter>=1140&&cutsceneTickCounter<1470){text("When the time loop brings you back to day #1, you will lose everything you worked so hard to build--but with strong enough magic, you might be able to acquire permanent improvements.",20,40,width-40,300);}if(cutsceneTickCounter>=1500&&cutsceneTickCounter<1650){text("He also informs you that the time loop will activate in 3 seconds.",20,40,width-40,300);}if(cutsceneTickCounter>=1740&&cutsceneTickCounter<1800){fill(0,255,0,constrain(256-sq(0.55*(cutsceneTickCounter-1770)),0,255));rect(0,0,width,height);}draw_cutscene_buttons(1800);cutsceneTickCounter+=1;};
var render_backside_cutscene=function(){
if(cutsceneTickCounter<990){background(0,0,0);}else{background(BACKSIDE_VOID_COLOR);}if(cutsceneTickCounter>=30&&cutsceneTickCounter<120){noStroke();fill(255,0,0,315-2*cutsceneTickCounter);rect(0,0,width,height);}if(cutsceneTickCounter>=120 &&cutsceneTickCounter<248){noStroke();fill(255,0,0,495-2*cutsceneTickCounter);rect(0,0,width,height);}if(cutsceneTickCounter>=300&&cutsceneTickCounter<428){noStroke();fill(255,0,0,855-2*cutsceneTickCounter);rect(0,0,width,height);}if(cutsceneTickCounter>=450&&cutsceneTickCounter<578){noStroke();fill(255,0,0,1155-2*cutsceneTickCounter);rect(0,0,width,height);}if(cutsceneTickCounter>=600&&cutsceneTickCounter<728){noStroke();fill(255,0,0,1455-2*cutsceneTickCounter);rect(0,0,width,height);}if(cutsceneTickCounter>=750&&cutsceneTickCounter<905){var m1=cutsceneTickCounter-750;noStroke();fill(128,32,255,-m1*m1*m1/2000+0.1158*m1*m1-7.6*m1+255);rect(0,0,width,height);}if(cutsceneTickCounter>=990){var offset=floor(map(4*globalCyclicAnimation%360,0,360,0,32));stroke(0,255,0);fill(0,255,0);for(var i=offset;i<width;i+=32){for(var j=-offset;j<height-50;j+=32){point(i,j);}}ellipse(293,51,8,8);if(cutsceneTickCounter<1001){noStroke();fill(0,0,0,255-25*(cutsceneTickCounter-990));rect(0,0,width,height);}}if(cutsceneTickCounter>=30&&cutsceneTickCounter<300){fill(255,0,0);textSize(18);text("As you step out of the portal,",50,100);if(cutsceneTickCounter>=120){text("the first thing you notice is the air.",75,124);}}if(cutsceneTickCounter>=300&&cutsceneTickCounter<600){fill(255,0,0);textSize(22);text("Breathing hurts.",100,200);if(cutsceneTickCounter>=450){textSize(18);text("The air is toxic.",50,80);}}if(cutsceneTickCounter>=600&&cutsceneTickCounter<750){fill(255,0,0);textSize(18);text("Instinctively, you reach out",75,160);text("with your magic.",100,184);}if(cutsceneTickCounter>=750&&cutsceneTickCounter<990){fill(255,255,255);textSize(18);if(cutsceneTickCounter<980){text("You're safe for now.",75+0.0001*pow(cutsceneTickCounter-830,3),80);}if(cutsceneTickCounter>=900){text("The next thing you notice is the sky.",50,160);}}if(cutsceneTickCounter>=1040){var wf=g_PersistentData.get_has_wifi();fill(255,255,255);textSize(18);if(cutsceneTickCounter<1240){text(wf?"A mysterious sensation tells you":"An unknown voice",20,280+4*sin(2*cutsceneTickCounter));if(cutsceneTickCounter>=1070){text(wf?"there is 1 available Wi-Fi network.":"whispers in your mind...",40,304+4*cos(2*cutsceneTickCounter));}}else{text(wf?"The Cybermind calls.":"Soon, you realize that the voice isn't coming from the stars.",40,100,width-80,300);if(cutsceneTickCounter>=1400){text(wf?"Friendly circuitry, spread across the land...":"The voice is coming from that giant computer circuit over there...",40,230,width-80,300);}}}draw_cutscene_buttons(1500);cutsceneTickCounter+=1;};
var render_max_house_cutscene=function(){
background(0,0,0);var x=0;if(cutsceneTickCounter<240){fill(255,255,255,min(255,-5*(cutsceneTickCounter-240)));x=cutsceneTickCounter<30?-sq(cutsceneTickCounter-30)/15+32:32;text("As you finish upgrading your house,",x,64);}if(cutsceneTickCounter>=45&&cutsceneTickCounter<360){fill(255,255,255,min(255,-5*(cutsceneTickCounter-360)));x=cutsceneTickCounter<120?-sq(cutsceneTickCounter-120)/15+32:32;text("you reflect on how far you've come.",x,96);}if(g_PersistentData.statTotalPeopleSaved>=10&&cutsceneTickCounter>=300&&cutsceneTickCounter<480){fill(255,255,255,min(255,-5*(cutsceneTickCounter-480)));x=cutsceneTickCounter<405?-sq(cutsceneTickCounter-405)/15+32:32;text("You've rescued a total of",x,160);text(g_PersistentData.statTotalPeopleSaved+" lives.",x+32,192);}if(cutsceneTickCounter>=360&&cutsceneTickCounter<540){fill(255,255,255,min(255,-5*(cutsceneTickCounter-540)));x=cutsceneTickCounter<465?-sq(cutsceneTickCounter-465)/15+32:32;text("Your great technological progress...",x,224);}if(cutsceneTickCounter>=420&&cutsceneTickCounter<600){fill(255,255,255,min(255,-5*(cutsceneTickCounter-600)));x=cutsceneTickCounter<525?-sq(cutsceneTickCounter-525)/15+32:32;text("The buildings you've constructed...",x,256);}if(cutsceneTickCounter>=480&&cutsceneTickCounter<660){fill(255,255,255,min(255,-5*(cutsceneTickCounter-660)));x=cutsceneTickCounter<585?-sq(cutsceneTickCounter-585)/15+32:32;text("The resources you've collected...",x,288);}if(cutsceneTickCounter>=600&&cutsceneTickCounter<810){fill(255,255,255,min(255,-5*(cutsceneTickCounter-780)));x=cutsceneTickCounter<695?-sq(cutsceneTickCounter-695)/15+32:32;text("You have developed a plan",x,64);x=cutsceneTickCounter<725?-sq(cutsceneTickCounter-725)/15+32:32;text("to acquire more resources",x,96);x=cutsceneTickCounter<755?-sq(cutsceneTickCounter-755)/15+32:32;text("by manipulating",x,128);fill(255,255,255);text("the environment.",x+145,128);}
if(cutsceneTickCounter>=810&&cutsceneTickCounter<1050){fill(255,255,255);text(cutsceneTickCounter<815||cutsceneTickCounter>=820?">>seasons<<":"the environment",177,128);if(cutsceneTickCounter>=840){text("spring",160,160);if(cutsceneTickCounter>=850){text("summer",160,192);if(cutsceneTickCounter>=860){text("autumn",160,224);if(cutsceneTickCounter>=870){text("winter",160,256);if(cutsceneTickCounter>=900){var th=6*cutsceneTickCounter;fill(200+50*sin(th),200+50*sin(th+120),200+50*sin(th+240));text("TECHNOLOGICAL PROGRESS",50,288);}}}}}}
if(cutsceneTickCounter>=870&&cutsceneTickCounter<1150){fill(255,255,255,constrain(255-2.5*(cutsceneTickCounter-1050),0,255));text("You build a weather machine,",32,32);text("affixing it to your roof.",64,64);}if(cutsceneTickCounter>=1020&&cutsceneTickCounter<1170){x=2*(cutsceneTickCounter-1020)-48;draw_camel(min(x+16,200),180,0);draw_camel(min(x,200),170,0);draw_camel(min(x,200),190,0);}if(cutsceneTickCounter>=1170&&cutsceneTickCounter<1350){draw_camel(200,170,0);draw_camel(200,180,0);draw_camel(200,190,0);fill(255,255,255);text("The camels know of your plans.",32,32);if(cutsceneTickCounter>=1230){text("The camels dislike your plans.",64,64);}if(cutsceneTickCounter>=1290){text("If you follow through...",96,96);}}if(cutsceneTickCounter>=1350&&cutsceneTickCounter<1500){x=200-2*(cutsceneTickCounter-1350);draw_camel(min(x,200),180,180);draw_camel(min(x+16,200),170,180);draw_camel(min(x+16,200),190,180);}if(cutsceneTickCounter>=1410){fill(255,255,255);textAlign(CENTER,BASELINE);text("It will hurt your trade agreements.",width/2,128);textAlign(LEFT,BASELINE);}stroke(255,255,255);if(cutsceneTickCounter>=150&&cutsceneTickCounter<=390){var x1=cutsceneTickCounter>180?lineThingy(cutsceneTickCounter-285):32,x2=cutsceneTickCounter<360?lineThingy(cutsceneTickCounter-255):368;line(x1,108,x2,108);line(x1,172,x2,172);}if(cutsceneTickCounter>=180&&cutsceneTickCounter<360){var temp=allBuildings[0].upgradeLevel;allBuildings[0].upgradeLevel=floor((cutsceneTickCounter-135)/45);render_selected_tile(lineThingy(cutsceneTickCounter-270),140);allBuildings[0].upgradeLevel=temp;}draw_cutscene_buttons(1500);cutsceneTickCounter+=1;};
var render_photosensitivity=function(){
var a=0,c=cutsceneTickCounter;background(0);if(c<90){a=c*2.83333333333;}else if(c<210){a=255;}else if(c<300){a=850-c*2.83333333333;}fill(255,255,255,a);textSize(36);textAlign(CENTER,CENTER);text("PHOTOSENSITIVITY",width/2,height/3-18);text("WARNING",width/2,height/3+18);textSize(16);if(c<60||c>=360){a=0;}else if(c<150){a=c*2.83333333333-170;}else if(c<270){a=255;}else{a=1020-c*2.83333333333;}fill(255,255,255,a);text("This game has some content which may\npotentially trigger seizures for people\nwith photosensitive epilepsy.",width/2,2*height/3);textAlign(LEFT,BASELINE);if(c<390){cutsceneTickCounter+=1;}else{currentScreen="play-menu";photosensitivityShown=true;}};
} //Cutscenes

{
var display_innovation_bonus=function(y){
if(!g_TechnologyManager.inn()){return 0;}var r=32;text(g_ResourcePane.format_multi("Innovation (camel tech)",pow(innovationMulti,innovationPower)),32,y);if(innovationPower!==1){text("Original: *"+innovationMulti.toFixed(3),48,y+16);text("(Based on evacuees)",64,y+32);text("Spice shortage: ^"+innovationPower.toFixed(3),48,y+48);r+=32;}else{text("(Based on evacuees)",48,y+16);}return r;};
var display_textbook_penalty=function(y){
var r=0;if(textbookTier1Multi!==1){text(g_ResourcePane.format_multi("History Textbook Artifact",textbookTier1Multi),32,y);r+=16;}return r;};
var display_textbook_bonus=function(y){
if(textbookTier3Multi===1){return 0;}text(g_ResourcePane.format_multi("History Textbook Artifact",textbookTier3Multi),32,y);text("(Based on unspent Artifact Points)",48,y+16);return 32;};
var display_3B_bonus=function(y){
var r=0;if(tier3MultiFrom3B!==1){text(g_ResourcePane.format_multi("Tier 3 Boost Ultimate Upgrade",tier3MultiFrom3B),32,y);r+=16;}return r;};
var display_disclaimer=function(){
stroke(0);fill(224);rect(25,height-38,width-50,24);fill(0);text("‡ Actual production may be less in event of resource shortages.",31,height-22);};
var display_upkeep_penalty=function(y){
if(tier3MultiFromUpkeep!==1){text(g_ResourcePane.format_multi("Upkeep satisfaction",tier3MultiFromUpkeep),32,y);text("(Iron upkeep was only "+(100*upkeepLastSatisfiedRatio).toFixed(3)+"% satisfied yesterday.)",48,y+16);return 32;}return 0;};
var display_spell_trigger_breakdown=function(){
var mt=g_PersistentData.get_was_artifact_found("MT"),sc=g_PersistentData.get_was_artifact_found("SC");textAlign(CENTER,BASELINE);textSize(20);if(mt){text("FOOD GAINED ON SPELL CASTS",width/2,100);}if(sc){text("TIER 2 RESOURCES GAINED",width/2,200);text("ON SPELL CASTS",width/2,224);}textSize(12);if(mt){if(g_ArtifactManager.by_abbreviation("MT").active){text("From Magical Tomato: "+foodGainedAtEachSpellCast.toFixed(3),width/2,116);if(g_ResourcePane.goldenAppleVisible){text("(If you use a golden apple, you don't get any extra.)",width/2,132);}}else{text("To get food on spell casts, use the Magical Tomato Artifact.",width/2,116);}}if(sc){if(resourcesOnSpellCast>0){text("From Starlight Circle: "+resourcesOnSpellCast.toFixed(3)+" days' worth of net income.",width/2,240);text("Spice: "+(resourcesOnSpellCast*spiceNetIncome).toFixed(3),width/2,256);text("Gadolinium: "+(resourcesOnSpellCast*gadoliniumNetIncome).toFixed(3),width/2,272);text("Flame orb: "+(resourcesOnSpellCast*flameOrbNetIncome).toFixed(3),width/2,288);text("Iron: "+(resourcesOnSpellCast*ironProjectedNetIncome).toFixed(3),width/2,304);if(g_ResourcePane.goldenAppleVisible){text("(If you use a golden apple, you don't get any extra.)",width/2,320);}}else{text("To get Tier 2 resources on spell casts, use the Starlight Circle Artifact.",width/2,240);}}textAlign(LEFT,BASELINE);};
var render_food_breakdown = function()
{
    var grp=g_ResourcePane,form=grp.format_multi,yDraw=80,disclaimer=!1,s=g_PersistentData.get_was_artifact_found("MT");
    grp.uConsY=-32;
    draw_resource_breakdown_title("Food resource breakdown");
    line(0,64,400,64);
    fill(128);rect(174,36,38,24);rect(216,36,43,24);
    noFill();rect(55,36,65,24);rect(124,36,46,24);if(!s){fill(255,0,0);}rect(263,36,82,24);
    fill(0);textSize(12);
    text("Production",59,52);text("Fishing",128,52);text(s?"On Spell Cast":"???",267,52);
    if(breakdownTab===2)
    {
        var fMin=1,fMax=2.5,fMin2=fMin+foodBonusFromFishingOnReef,fMax2=fMax+foodBonusFromFishingOnReef,fm=food_multi_from_fishing();
        text("FOOD FROM FISHING",16,yDraw);yDraw+=16;
        text("Base: "+fMin.toFixed(3)+"~"+fMax.toFixed(3),16,yDraw);yDraw+=16;
        text("(In increments of 0.500)",32,yDraw);yDraw+=16;
        if(foodBonusFromFishingOnReef){text("Bonus from fishing on the reef: +"+foodBonusFromFishingOnReef.toFixed(3),16,yDraw);yDraw+=16;}
        text("Multi: *"+fm.toFixed(3),16,yDraw);yDraw+=16;
        if(fm!==1){text(form("UCC rewards",fm),32,yDraw);yDraw+=16;}
        line(8,yDraw-4,216,yDraw-4);yDraw+=16;
        text("Finalized food from fishing: "+(fMin*fm).toFixed(3)+"~"+(fMax*fm).toFixed(3),16,yDraw);yDraw+=16;
        if(foodBonusFromFishingOnReef)
        {
            text("Finalized on reef: "+(fMin2*fm).toFixed(3)+"~"+(fMax2*fm).toFixed(3),16,yDraw);yDraw+=16;
        }
        return;
    }
    if(breakdownTab===5)
    {
        display_spell_trigger_breakdown();
        return;
    }
    
    text("PER DAY STATS",16,yDraw);yDraw+=16;
    grp.bProdY=foodProduction===0?-32:yDraw;
    text("Food production: "+foodProduction.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.bProd){
    if(foodProductionFromHouse>0)
    {text("House: "+foodProductionFromHouse.toFixed(3),32,yDraw);yDraw+=16;}
    if(foodProductionFromFarms>0)
    {text("Farms: "+foodProductionFromFarms.toFixed(3),32,yDraw);yDraw+=16;if(season===3){text("(Farms output less in winter)",48,yDraw);yDraw+=16;}}
    if(foodProjectedProductionFromTerraformers>0)
    {text("‡ Terraformers: "+foodProjectedProductionFromTerraformers.toFixed(3),32,yDraw);yDraw+=16;text("(Due to Ribbon Artifact)",48,yDraw);yDraw+=16;disclaimer=!0;}}
    grp.bConsY=yDraw;
    text("Food consumption: "+foodConsumption.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.bCons){
    text("You: "+foodConsumptionFromHouse.toFixed(3),32,yDraw);yDraw+=16;
    if(foodConsumptionFromHouse===0){text("(You aren't hungry, because of dark energy.)",48,yDraw);yDraw+=16;}
    if(foodConsumptionFromDragons>0){text("Dragon: "+foodConsumptionFromDragons.toFixed(3),32,yDraw);yDraw+=16;}
    if(foodConsumptionFromBank>0){text("Food Bank: "+foodConsumptionFromBank.toFixed(3),32,yDraw);yDraw+=16;}}
    grp.pMultY=(foodProductionMulti===1&&!g_TechnologyManager.by_name("Aqueducts").researched&&!g_TechnologyManager.inn())?-32:yDraw;
    text("Food production multi: *"+foodProductionMulti.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.pMult){
    if(foodProductionMultiFromUCC!==1){text(form("UCC rewards",foodProductionMultiFromUCC),32,yDraw);yDraw+=16;}
    if(foodAppleProductionMultiFromFrosthour!==1){text(form("Currently in "+season_to_string(),foodAppleProductionMultiFromFrosthour),32,yDraw);yDraw+=16;}
    yDraw+=display_textbook_penalty(yDraw);
    if(g_TechnologyManager.by_name("Aqueducts").researched){text(form("Aqueducts tech",foodProductionMultiFromAqueducts),32,yDraw);yDraw+=16;if(g_PersistentData.get_upgrade_effect("AP")!==1){text("Original: *"+foodProductionMultiFromAqueductsOriginal.toFixed(3),48,yDraw);yDraw+=16;text("(Based on lake factor)",64,yDraw);yDraw+=16;text("Exponent (from Ultimate Upgrades): ^"+g_PersistentData.get_upgrade_effect("AP").toFixed(3),48,yDraw);yDraw+=16;}}
    if(foodProductionMultiFromIronTools!==1){text(form("Better Farming Tools tech",foodProductionMultiFromIronTools),32,yDraw);yDraw+=16;}
    yDraw+=display_innovation_bonus(yDraw);}
    if(foodProductionMultiFromInstaGrow!==1){text(form("Insta-Grow spell",foodProductionMultiFromInstaGrow),32,yDraw);yDraw+=16;}
    grp.cMultY=foodConsumptionMulti===1?-32:yDraw;
    text("Food consumption multi: *"+foodConsumptionMulti.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.cMult){
    if(spiceResource>0)
    {text(form("Spice",foodConsumptionMultiFromSpice),32,yDraw);yDraw+=16;}}
    stroke(0,0,0);line(8,yDraw-4,216,yDraw-4);yDraw+=16;
    text("Finalized food production: "+(foodProduction*foodProductionMulti).toFixed(3),16,yDraw);yDraw+=16;
    text("Finalized food consumption: "+(foodConsumption*foodConsumptionMulti).toFixed(3),16,yDraw);yDraw+=16;
    line(8,yDraw-4,216,yDraw-4);yDraw+=16;
    text("Food net income: "+foodNetIncome.toFixed(3),16,yDraw);yDraw+=16;
    if(disclaimer){display_disclaimer();}
    grp.display_expander_buttons();
};
var render_mana_breakdown = function()
{
    var grp=g_ResourcePane,form=grp.format_multi,yDraw=80,s=dayCount>199||g_PersistentData.get_has_completed_1_challenge();
    grp.uConsY=-32;
    draw_resource_breakdown_title("Mana resource breakdown");
    line(0,64,400,64);
    fill(128);rect(124,36,46,24);rect(216,36,43,24);rect(263,36,82,24);
    noFill();rect(55,36,65,24);if(!s){fill(255,0,0);}rect(174,36,38,24);
    fill(0);textSize(12);
    text("Production",59,52);text(s?"Slime":"???",178,52);
    if(breakdownTab===3)
    {
        text("MANA MULTIPLIER FROM SLIME",16,80);
        yDraw=96;
        if(manaAndGdFromSlimeMultiFrom8YC!==1){text(form("8YC Rewards",manaAndGdFromSlimeMultiFrom8YC),16,yDraw);yDraw+=16;}
        if(manaProductionMultiFromFrosthour!==1){text(form("Frosthour",manaProductionMultiFromFrosthour),16,yDraw);yDraw+=16;}
        if(manaFromSlimeMultiFromTech!==1){text(form("Technologies",manaFromSlimeMultiFromTech),16,yDraw);yDraw+=16;}
        if(yDraw===96){text(form("No multipliers",1),16,yDraw);yDraw+=16;}
        line(8,yDraw-4,216,yDraw-4);yDraw+=16;
        text("Final multi: *"+manaFromSlimeMulti.toFixed(3),16,yDraw);yDraw+=16;
        return;
    }
    text("PER DAY STATS",16,yDraw);yDraw+=16;
    grp.bProdY=(manaProduction===0&&!g_TechnologyManager.inn())?-32:yDraw;
    text("Mana production: "+manaProduction.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.bProd){
    if(manaProductionFromCollectors+manaProductionFromCollectionPower>0){text("Collectors: "+(manaProductionFromCollectors+manaProductionFromCollectionPower).toFixed(3),32,yDraw);yDraw+=16;if(manaProductionFromCollectionPower>0){text("Base: "+manaProductionFromCollectors.toFixed(3),48,yDraw);yDraw+=16;}if(season===3){text("(Collectors boosted by winter)",48+16*(manaProductionFromCollectionPower>0),yDraw);yDraw+=16;}if(manaProductionFromCollectionPower>0){text("Ultimate Upgrades: "+manaProductionFromCollectionPower.toFixed(3),48,yDraw);yDraw+=16;}}
    if(manaProductionFromHouse>0){text("House: "+manaProductionFromHouse.toFixed(3),32,yDraw);yDraw+=16;}}
    grp.bConsY=manaConsumption===0?-32:yDraw;
    text("Mana consumption: "+manaConsumption.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.bCons){
    if(manaConsumptionFromLifeSupport>0){text("Life support: "+manaConsumptionFromLifeSupport.toFixed(3),32,yDraw);yDraw+=16;}
    if(manaConsumptionFromAutocasting>0){text("Autocasting: "+manaConsumptionFromAutocasting.toFixed(3),32,yDraw);yDraw+=16;}
    if(manaConsumptionFromMines>0){text((allBuildings[0].upgradeLevel>1?"Frontside m":"M")+"ines (lvl. 4+): "+manaConsumptionFromMines.toFixed(3),32,yDraw);yDraw+=16;}
    if(manaConsumptionFromFarms>0){text("Farms (lvl. 4+): "+manaConsumptionFromFarms.toFixed(3),32,yDraw);yDraw+=16;}}
    grp.pMultY=(manaProductionMulti===1&&!g_TechnologyManager.inn())?-32:yDraw;
    text("Mana production multi: *"+manaProductionMulti.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.pMult){
    if(manaProductionMultiFrom8YC!==1){text(form("8YCs",manaProductionMultiFrom8YC),32,yDraw);yDraw+=16;text("(Expires after "+(dayCount<100?"day 100 ends":"today")+".)",48,yDraw);yDraw+=16;}
    if(manaProductionMultiFromChallengeRules!==1){text(form("Currently in "+g_PersistentData.currentChallenge,manaProductionMultiFromChallengeRules),32,yDraw);yDraw+=16;}
    if(manaProductionMultiFromFrosthour!==1){text(form("Currently in "+season_to_string(),manaProductionMultiFromFrosthour),32,yDraw);yDraw+=16;}
    if(manaProductionMultiFromRuneStoneOriginal!==1){text(form("Rune Stone Artifact",manaProductionMultiFromRuneStoneFinal),32,yDraw);yDraw+=16;text("(Only in winter.)",48,yDraw);yDraw+=16;if(runeStoneEffectExponent!==1){text("Original: *"+manaProductionMultiFromRuneStoneOriginal.toFixed(3),48,yDraw);yDraw+=16;text("Stone shortage: ^"+runeStoneEffectExponent.toFixed(3),48,yDraw);yDraw+=16;}}
    yDraw+=display_textbook_penalty(yDraw);
    if(manaProductionMultiFromMagicOre!==1){text(form("Magic Ore tech",manaProductionMultiFromMagicOre),32,yDraw);yDraw+=16;}
    yDraw+=display_innovation_bonus(yDraw);
    if(manaProductionMultiFromCyber!==1){text(form("Cybermind trade",manaProductionMultiFromCyber),32,yDraw);yDraw+=16;}
    if(manaProductionMultiFromH2O!==1){text(form("Water Music spell",manaProductionMultiFromH2O),32,yDraw);yDraw+=16;text("(Due to Infinite Water Source.)",48,yDraw);yDraw+=16;}}
    grp.cMultY=manaConsumptionMulti===1?-32:yDraw;
    text("Mana consumption multi: *"+manaConsumptionMulti.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.cMult){
    if(manaConsumptionMultiFromFans!==1)
    {text(form("Cooling fans",manaConsumptionMultiFromFans),32,yDraw);yDraw+=16;if(season===4){text("(They count *100 in frosthour)",48,yDraw);yDraw+=16;}}}
    stroke(0,0,0);line(8,yDraw-4,216,yDraw-4);yDraw+=16;
    text("Finalized mana production: "+(manaProduction*manaProductionMulti).toFixed(3),16,yDraw);yDraw+=16;
    text("Finalized mana consumption: "+(manaConsumption*manaConsumptionMulti).toFixed(3),16,yDraw);yDraw+=16;
    line(8,yDraw-4,216,yDraw-4);yDraw+=16;
    text("Mana net income: "+manaNetIncome.toFixed(3),16,yDraw);yDraw+=16;
    grp.display_expander_buttons();
};
var render_pearl_breakdown = function()
{
    var grp=g_ResourcePane,form=grp.format_multi,yDraw=80,f=g_PersistentData.statHighestWaterCast+allSpells.by_name("Water Music").castStat>0;
    grp.uConsY=-32;
    draw_resource_breakdown_title("Pearl resource breakdown");
    line(0,64,400,64);
    fill(128);rect(174,36,38,24);rect(216,36,43,24);rect(263,36,82,24);
    noFill();rect(55,36,65,24);if(!f){fill(255,0,0);}rect(124,36,46,24);
    fill(0);textSize(12);
    text("Production",59,52);text(f?"Fishing":"???",128,52);
    if(breakdownTab===2)
    {
        if(allSpells.by_name("Water Music").durationLeft>0)
        {
            var fishBase=allSpells.water_music_base_pearl_from_fishing(),totalMulti=pearlFromFishMulti*pearlProductionMultiFromUltimate;
            yDraw=80;
            text("PEARL FROM FISHING",16,yDraw);yDraw+=16;
            text("Base: "+fishBase.toFixed(3),16,yDraw);yDraw+=16;
            text("(Based on Lake Factor)",32,yDraw);yDraw+=16;
            text("Multi: *"+totalMulti.toFixed(3),16,yDraw);yDraw+=16;
            if(pearlProductionMultiFromUltimate!==1){text(form("Ultimate Upgrades",pearlProductionMultiFromUltimate),32,yDraw);yDraw+=16;}
            text(form("Technologies",pearlFromFishMulti),32,yDraw);yDraw+=16;
            line(8,yDraw-4,216,yDraw-4);yDraw+=16;
            text("Final: "+(fishBase*totalMulti).toFixed(3),16,yDraw);yDraw+=16;
        }
        else
        {
            textAlign(CENTER,CENTER);
            textSize(20);
            text("You can only gain pearl from fishing",width/2,180);
            text("while Water Music is active.",width/2,200);
            textAlign(LEFT,BASELINE);
        }
        return;
    }
    text("PER DAY STATS",16,yDraw);yDraw+=16;
    grp.bProdY=pearlProduction===0?-32:yDraw;
    text("Pearl production: "+pearlProduction.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.bProd){
    if(pearlProductionFromReef>0){text("Reef: "+pearlProductionFromReef.toFixed(3),32,yDraw);yDraw+=16;}
    if(pearlProductionFromH2O>0){text("Infinite Water Source Artifact: "+pearlProductionFromH2O.toFixed(3),32,yDraw);yDraw+=16;text("(0.3 per Challenge completed.)",48,yDraw);yDraw+=16;}}
    grp.bConsY=pearlConsumption===0?-32:yDraw;
    text("Pearl consumption: "+pearlConsumption.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.bCons){
    if(pearlConsumptionFromLavaFreezers>0){text("Lava freezers: "+pearlConsumptionFromLavaFreezers.toFixed(3),32,yDraw);yDraw+=16;}}
    grp.pMultY=(pearlProductionMulti===1&&!g_TechnologyManager.inn())?-32:yDraw;
    text("Pearl production multi: *"+pearlProductionMulti.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.pMult){
    if(pearlProductionMultiFromUltimate!==1){text(form("Ultimate Upgrades",pearlProductionMultiFromUltimate),32,yDraw);yDraw+=16;}
    if(pearlProductionMultiFromFrosthour!==1){text(form("Currently in "+season_to_string(),pearlProductionMultiFromFrosthour),32,yDraw);yDraw+=16;}
    yDraw+=display_textbook_penalty(yDraw);
    if(pearlProductionMultiFromMultiShift!==1){text(form("Multi Shift tech",pearlProductionMultiFromMultiShift),32,yDraw);yDraw+=16;}
    yDraw+=display_innovation_bonus(yDraw);}
    grp.cMultY=pearlConsumptionMulti===1?-32:yDraw;
    text("Pearl consumption multi: *"+pearlConsumptionMulti.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.cMult){if(pearlConsumptionMultiFromFans!==1){text(form("Cooling fans",pearlConsumptionMultiFromFans),32,yDraw);yDraw+=16;if(season===4){text("(They count *100 in frosthour)",48,yDraw);yDraw+=16;}}}
    stroke(0,0,0);line(8,yDraw-4,216,yDraw-4);yDraw+=16;
    text("Finalized pearl production: "+(pearlProduction*pearlProductionMulti).toFixed(3),16,yDraw);yDraw+=16;
    text("Finalized pearl consumption: "+(pearlConsumption*pearlConsumptionMulti).toFixed(3),16,yDraw);yDraw+=16;
    line(8,yDraw-4,216,yDraw-4);yDraw+=16;
    text("Pearl net income: "+pearlNetIncome.toFixed(3),16,yDraw);yDraw+=16;
    grp.display_expander_buttons();
};
var render_stone_breakdown = function()
{
    var grp=g_ResourcePane,form=grp.format_multi,yDraw=80,disclaimer=!1,nm=allBuildings.count_of_type(BT_MINE,2);
    grp.uConsY=-32;
    draw_resource_breakdown_title("Stone resource breakdown");
    line(0,64,400,64);
    fill(128);rect(124,36,46,24);rect(174,36,38,24);rect(263,36,82,24);
    noFill();rect(55,36,65,24);rect(216,36,43,24);
    fill(0);textSize(12);
    text("Production",59,52);text("Mining",220,52);
    if(breakdownTab===4)
    {
        var urc=g_PersistentData.get_challenge_times_completed("UR"),m=[0,0,0,0,0],l=1,varMult=g_PersistentData.get_upgrade_times_purchased("SM")>0,fM=1+(99*(season===4)),sM=g_TechnologyManager.by_name("Stonelifter").researched?stoneProductionMultiFromStonemover:1;
        for(;l<6;l+=1){m[l-1]=allBuildings.count_of_type(BT_MINE,l);}
        if(m[0]<1)
        {
            textAlign(CENTER,CENTER);
            textSize(20);
            text("You must build a mine",width/2,180);
            text("in order to go mining!",width/2,200);
            textSize(8);
            text("(I'm sure you knew that already...)",width/2,300);
            textAlign(LEFT,BASELINE);
            return;
        }
        yDraw=80;
        text("MANUAL MINING",16,yDraw);yDraw+=16;
        text("Base: random; varies with mine level",16,yDraw);yDraw+=16;
        for(l=1;l<6;l+=1)
        {
            if(m[l-1]<1){break;}
            text("Level "+l+": "+(manual_mining_min_stone(l)-urc).toFixed(3)+"~"+(manual_mining_max_stone(l)-urc).toFixed(3),32,yDraw);yDraw+=16;
        }
        if(urc){text("URC Rewards: +"+urc.toFixed(3),32,yDraw);yDraw+=16;}
        text("Multi: "+(varMult?"varies":(fM*stoneProductionMultiFromCoolRock*sM).toFixed(3)),16,yDraw);yDraw+=16;
        if(varMult){text("Ultimate Upgrades: varies",32,yDraw);yDraw+=16;text("(Based on distance from your house)",48,yDraw);yDraw+=16;}
        if(fM!==1){text(form("Currently in "+season_to_string(),fM),32,yDraw);yDraw+=16;}
        if(stoneProductionMultiFromCoolRock!==1){text(form("Cool Rock Artifact",stoneProductionMultiFromCoolRock),32,yDraw);yDraw+=16;}
        if(sM!==1){text(form("Stonemover spell",sM),32,yDraw);yDraw+=16;}
        line(8,yDraw-4,216,yDraw-4);yDraw+=16;
        text("Final: random; varies with mine level"+(varMult?" & location":""),16,yDraw);yDraw+=16;
        return;
    }
    text("PER DAY STATS",16,yDraw);yDraw+=16;
    grp.bProdY=(stoneProjectedProduction===0&&!nm)?-32:yDraw;
    text("Stone production: "+stoneProjectedProduction.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.bProd){if(nm){text((allBuildings[0].upgradeLevel>1?"Frontside m":"M")+"ines lvl. 2+: "+stoneProductionFromMines.toFixed(3),32,yDraw);yDraw+=16;text("(Based on absolute value of desert factor)",48,yDraw);yDraw+=16;if(g_PersistentData.get_upgrade_times_purchased("SM")>0){text("(Based on each mine's distance from your house)",48,yDraw);yDraw+=16;}}
    if(stoneProjectedIncomeFromLavaFreezers>0){text("‡ Lava freezers: "+stoneProjectedIncomeFromLavaFreezers.toFixed(3),32,yDraw);yDraw+=16;disclaimer=!0;}}
    grp.bConsY=stoneConsumption===0?-32:yDraw;
    text("Stone consumption: "+stoneConsumption.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.bCons){
    if(stoneConsumptionFromRuneStone>0){text("Rune Stone Artifact: "+stoneConsumptionFromRuneStone.toFixed(3),32,yDraw);
    
    yDraw+=16;text("(Only in winter.)",48,yDraw);yDraw+=16;}
    if(stoneConsumptionFromFurnaces>0){text("Furnaces: "+stoneConsumptionFromFurnaces.toFixed(3),32,yDraw);yDraw+=16;if(fastererness!==1){text("Fastererness: +"+(100*fastererness-100).toFixed(3)+"%",48,yDraw);yDraw+=16;}}}
    grp.pMultY=(stoneProductionMulti===1&&!g_TechnologyManager.inn())?-32:yDraw;
    text("Stone production multi: *"+stoneProductionMulti.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.pMult){
    if(stoneProductionMultiFromChallengeRules!==1){text(form("Currently in "+g_PersistentData.currentChallenge,stoneProductionMultiFromChallengeRules),32,yDraw);yDraw+=16;}
    if(stoneProductionMultiFromFrosthour!==1){text(form("Currently in "+season_to_string(),stoneProductionMultiFromFrosthour),32,yDraw);yDraw+=16;}
    if(stoneProductionMultiFromCoolRock!==1){text(form("Cool Rock Artifact",stoneProductionMultiFromCoolRock),32,yDraw);yDraw+=16;}
    yDraw+=display_textbook_penalty(yDraw);
    if(stoneProductionMultiFromReefMagic!==1){text(form("Reef magic",stoneProductionMultiFromReefMagic),32,yDraw);yDraw+=16;}
    yDraw+=display_innovation_bonus(yDraw);
    if(stoneProductionMultiFromStonemover!==1){text(form("Stonemover spell",stoneProductionMultiFromStonemover),32,yDraw);yDraw+=16;}
    if(stoneProductionMultiFromMineralEnrichment!==1){text(form("Mineral Enrichment spell",stoneProductionMultiFromMineralEnrichment),32,yDraw);yDraw+=16;text("(Based on the number of active spells.)",48,yDraw);yDraw+=16;}
    }
    grp.cMultY=stoneConsumptionMulti===1?-32:yDraw;
    text("Stone consumption multi: *"+stoneConsumptionMulti.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.cMult){
    if(stoneConsumptionMultiFromGiants!==1){text(form("Fire giant trade",stoneConsumptionMultiFromGiants),32,yDraw);yDraw+=16;}}
    stroke(0,0,0);line(8,yDraw-4,216,yDraw-4);yDraw+=16;
    text("Finalized stone production: "+(stoneProjectedProduction*stoneProductionMulti).toFixed(3),16,yDraw);yDraw+=16;
    text("Finalized stone consumption: "+(stoneConsumption*stoneConsumptionMulti).toFixed(3),16,yDraw);yDraw+=16;
    line(8,yDraw-4,216,yDraw-4);yDraw+=16;
    text("Stone net income: "+stoneNetIncome.toFixed(3),16,yDraw);yDraw+=16;
    if(disclaimer){display_disclaimer();}
    grp.display_expander_buttons();
};
var render_spice_breakdown = function()
{
    var grp=g_ResourcePane,form=grp.format_multi,yDraw=80,disclaimer=!1,sp=g_PersistentData.get_was_artifact_found("SC");
    grp.uConsY=-32;
    draw_resource_breakdown_title("Spice resource breakdown");
    line(0,64,400,64);
    fill(128);rect(124,36,46,24);rect(174,36,38,24);rect(216,36,43,24);
    noFill();rect(55,36,65,24);if(!sp){fill(255,0,0);}rect(263,36,82,24);
    fill(0);textSize(12);
    text("Production",59,52);text(sp?"On Spell Cast":"???",267,52);
    if(breakdownTab===5)
    {
        display_spell_trigger_breakdown();
        return;
    }
    text("PER DAY STATS",16,yDraw);yDraw+=16;
    grp.bProdY=spiceProjectedProduction===0?-32:yDraw;
    text("Spice production: "+spiceProjectedProduction.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.bProd){if(flameOrbConsumptionFromEtD>0){text("‡ Empower the Dragon spell: "+flameOrbConsumptionFromEtD.toFixed(3),32,yDraw);yDraw+=16;disclaimer=!0;}}
    grp.bConsY=yDraw;
    text("Spice consumption: "+spiceConsumption.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.bCons){text("You: "+spiceConsumptionFromHouse.toFixed(3),32,yDraw);yDraw+=16;
    if(spiceConsumptionFromHouse===0){text("(You aren't hungry, because of dark energy.)",48,yDraw);yDraw+=16;}
    if(spiceConsumptionFromDragons>0){text("Dragon: "+spiceConsumptionFromDragons.toFixed(3),32,yDraw);yDraw+=16;}
    if(spiceConsumptionFromMines>0){text("Backside mines (lvl. 4+): "+spiceConsumptionFromMines.toFixed(3),32,yDraw);yDraw+=16;}
    if(spiceConsumptionFromInnovation>0){text("Innovation (camel tech): "+spiceConsumptionFromInnovation.toFixed(3),32,yDraw);
    
    yDraw+=16;}}
    grp.pMultY=-32;
    text("Spice production multi: *"+(1).toFixed(3),16,yDraw);yDraw+=16;
    grp.cMultY=spiceConsumptionMulti===1?-32:yDraw;
    text("Spice consumption multi: *"+spiceConsumptionMulti.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.cMult){
    if(lotsOfThingsMultiFromTerraformers!==1){text(form("Terraformers (lvl. 4+)",lotsOfThingsMultiFromTerraformers),32,yDraw);yDraw+=16;}}
    stroke(0,0,0);line(8,yDraw-4,216,yDraw-4);yDraw+=16;
    text("Finalized spice production: "+(spiceProjectedProduction).toFixed(3),16,yDraw);yDraw+=16;
    text("Finalized spice consumption: "+(spiceConsumption*spiceConsumptionMulti).toFixed(3),16,yDraw);yDraw+=16;
    line(8,yDraw-4,216,yDraw-4);yDraw+=16;
    text("Spice net income: "+spiceNetIncome.toFixed(3),16,yDraw);yDraw+=16;
    if(disclaimer){display_disclaimer();}
    grp.display_expander_buttons();
};
var render_gadolinium_breakdown = function()
{
    var grp=g_ResourcePane,form=grp.format_multi,yDraw=80,s=dayCount>199||g_PersistentData.get_has_completed_1_challenge(),sp=g_PersistentData.get_was_artifact_found("SC");
    grp.uConsY=-32;
    draw_resource_breakdown_title("Gadolinium resource breakdown");
    line(0,64,400,64);
    fill(128);rect(124,36,46,24);rect(216,36,43,24);
    noFill();rect(55,36,65,24);if(!s){fill(255,0,0);}rect(174,36,38,24);noFill();if(!sp){fill(255,0,0);}rect(263,36,82,24);
    fill(0);textSize(12);
    text("Production",59,52);text(s?"Slime":"???",178,52);text(sp?"On Spell Cast":"???",267,52);
    if(breakdownTab===3)
    {
        text("GADOLINIUM MULTIPLIER FROM SLIME",16,yDraw);yDraw+=16;
        if(manaAndGdFromSlimeMultiFrom8YC!==1){text(form("8YC rewards",manaAndGdFromSlimeMultiFrom8YC),16,yDraw);yDraw+=16;}
        if(gadoliniumFromSlimeMultiFromFrost!==1){text(form("Frosthour",gadoliniumFromSlimeMultiFromFrost),16,yDraw);yDraw+=16;}
        if(gadoliniumFromSlimeMultiFromHouse!==1){text(form("House lvl. "+allBuildings[0].upgradeLevel,gadoliniumFromSlimeMultiFromHouse),16,yDraw);yDraw+=16;}
        if(gadoliniumFromSlimeMultiFromCyber!==1){text(form("Cybermind trade",gadoliniumFromSlimeMultiFromCyber),16,yDraw);yDraw+=16;}
        if(yDraw===96){text(form("No multipliers",1),16,yDraw);yDraw+=16;}
        line(8,yDraw-4,216,yDraw-4);yDraw+=16;
        text("Final multi: *"+gadoliniumFromSlimeMulti.toFixed(3),16,yDraw);yDraw+=16;
        return;
    }
    if(breakdownTab===5)
    {
        display_spell_trigger_breakdown();
        return;
    }
    text("PER DAY STATS",16,yDraw);yDraw+=16;
    grp.bProdY=gadoliniumProduction===0?-32:yDraw;
    text("Gadolinium production: "+gadoliniumProduction.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.bProd){if(gadoliniumProductionFromMines>0)
    {text("Backside mines (lvl. 3+): "+gadoliniumProductionFromMines.toFixed(3),32,yDraw);yDraw+=16;if(season===3){text("(Boosted by winter)",48,yDraw);yDraw+=16;}}
    if(gadoliniumProductionFromLavaFreezers>0){text("Lava freezers: "+gadoliniumProductionFromLavaFreezers.toFixed(3),32,yDraw);yDraw+=16;}}
    grp.bConsY=-32;
    text("Gadolinium consumption: "+(0).toFixed(3),16,yDraw);yDraw+=16;
    grp.pMultY=g_PersistentData.get_upgrade_times_purchased("GM")<1?-32:yDraw;
    text("Gadolinium production multi: *"+(gadoliniumProductionMulti).toFixed(3),16,yDraw);yDraw+=16;
    if(grp.pMult){if(g_PersistentData.get_upgrade_times_purchased("GM")>0){text(form("Ultimate Upgrades",gadoliniumProductionMultiFromUltimate),32,yDraw);yDraw+=16;
    text(form("Multi from slime",gadoliniumFromSlimeMulti),48,yDraw);yDraw+=16;
    text("Amount transferred: ^"+g_PersistentData.get_upgrade_effect("GM").toFixed(3),48,yDraw);yDraw+=16;
    }}
    grp.cMultY=-32;
    text("Gadolinium consumption multi: *"+(1).toFixed(3),16,yDraw);yDraw+=16;
    stroke(0,0,0);line(8,yDraw-4,216,yDraw-4);yDraw+=16;
    text("Finalized gadolinium production: "+(gadoliniumProduction*gadoliniumProductionMulti).toFixed(3),16,yDraw);yDraw+=16;
    text("Finalized gadolinium consumption: "+(0).toFixed(3),16,yDraw);yDraw+=16;
    line(8,yDraw-4,216,yDraw-4);yDraw+=16;
    text("Gadolinium net income: "+gadoliniumNetIncome.toFixed(3),16,yDraw);yDraw+=16;
    grp.display_expander_buttons();
};
var render_flame_orb_breakdown = function()
{
    var yDraw=80,grp=g_ResourcePane,form=grp.format_multi,sp=g_PersistentData.get_was_artifact_found("SC");
    grp.uConsY=-32;
    draw_resource_breakdown_title("Flame orb resource breakdown");
    line(0,64,400,64);
    fill(128);rect(124,36,46,24);rect(174,36,38,24);rect(216,36,43,24);
    noFill();rect(55,36,65,24);if(!sp){fill(255,0,0);}rect(263,36,82,24);
    fill(0);textSize(12);
    text("Production",59,52);text(sp?"On Spell Cast":"???",267,52);
    if(breakdownTab===5)
    {
        display_spell_trigger_breakdown();
        return;
    }
    text("PER DAY STATS",16,yDraw);yDraw+=16;
    grp.bProdY=flameOrbProduction===0?-32:yDraw;
    text("Flame orb production: "+flameOrbProduction.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.bProd){if(flameOrbProductionFromLavaFreezers>0){text("Lava freezers: "+flameOrbProductionFromLavaFreezers.toFixed(3),32,yDraw);yDraw+=16;}if(flameOrbProductionFromFireplace>0){text("House (fireplace): "+flameOrbProductionFromFireplace.toFixed(3),32,yDraw);yDraw+=16;text("(Ultimate Upgrade, scales with house level, summer only)",48,yDraw);yDraw+=16;}}
    grp.bConsY=(flameOrbConsumption===0)&&(season!==4)?-32:yDraw;
    text("Flame orb consumption: "+flameOrbConsumption.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.bCons){
    if(flameOrbConsumptionFromFrosthour>0||season===4){text("Frosthour (decay): "+flameOrbConsumptionFromFrosthour.toFixed(3),32,yDraw);yDraw+=16;}
    if(flameOrbConsumptionFromAutocasting>0){text("Autocasting: "+flameOrbConsumptionFromAutocasting.toFixed(3),32,yDraw);yDraw+=16;}
    if(flameOrbConsumptionFromTerraformers>0){text("Terraformers (lvl. 4+): "+flameOrbConsumptionFromTerraformers.toFixed(3),32,yDraw);yDraw+=16;}
    if(flameOrbConsumptionFromEtD>0){text("Empower the Dragon spell: "+flameOrbConsumptionFromEtD.toFixed(3),32,yDraw);yDraw+=16;}
    if(flameOrbConsumptionFromSeed>0){text("Seed Artifact: "+flameOrbConsumptionFromSeed.toFixed(3),32,yDraw);yDraw+=16;}
    if(flameOrbConsumptionFromFurnaces>0){text("Furnaces: "+flameOrbConsumptionFromFurnaces.toFixed(3),32,yDraw);yDraw+=16;if(fastererness!==1){text("Fastererness: +"+(100*fastererness-100).toFixed(3)+"%",48,yDraw);yDraw+=16;}}}
    grp.pMultY=flameOrbProductionMulti===1?-32:yDraw;
    text("Flame orb production multi: *"+flameOrbProductionMulti.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.pMult){
    if(flameOrbProductionMultiFromH2O!==1){text(form("Water Music spell",flameOrbProductionMultiFromH2O),32,yDraw);yDraw+=16;text("(Due to Infinite Water Source.)",48,yDraw);yDraw+=16;}
    if(dissipation()!==1){text(form("Thermal dissipation",dissipation()),32,yDraw);yDraw+=16;text("(Due to having too much flame orb.)",48,yDraw);yDraw+=16;}}
    grp.cMultY=flameOrbConsumptionMulti===1?-32:yDraw;
    text("Flame orb consumption multi: *"+flameOrbConsumptionMulti.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.cMult){
    if(flameOrbConsumptionMultiFromSCB!==1){text(form("Special Circuit Box Artifact",flameOrbConsumptionMultiFromSCB),32,yDraw);yDraw+=16;}
    if(flameOrbConsumptionMultiFromReef!==1){text(form("Reef magic",flameOrbConsumptionMultiFromReef),32,yDraw);yDraw+=16;}}
    stroke(0,0,0);line(8,yDraw-4,216,yDraw-4);yDraw+=16;
    text("Finalized flame orb production: "+(flameOrbProduction*flameOrbProductionMulti).toFixed(3),16,yDraw);yDraw+=16;
    text("Finalized flame orb consumption: "+(flameOrbConsumption*flameOrbConsumptionMulti).toFixed(3),16,yDraw);yDraw+=16;
    line(8,yDraw-4,216,yDraw-4);yDraw+=16;
    text("Flame orb net income: "+flameOrbNetIncome.toFixed(3),16,yDraw);yDraw+=16;
    grp.display_expander_buttons();
};
var render_iron_breakdown = function()
{
    var grp=g_ResourcePane,form=grp.format_multi,yDraw=80,disclaimer=!1,sp=g_PersistentData.get_was_artifact_found("SC");
    grp.uConsY=-32;
    draw_resource_breakdown_title("Iron resource breakdown");
    line(0,64,400,64);
    fill(128);rect(124,36,46,24);rect(174,36,38,24);rect(216,36,43,24);
    noFill();rect(55,36,65,24);if(!sp){fill(255,0,0);}rect(263,36,82,24);
    fill(0);textSize(12);
    text("Production",59,52);text(sp?"On Spell Cast":"???",267,52);
    if(breakdownTab===5)
    {
        display_spell_trigger_breakdown();
        return;
    }
    text("PER DAY STATS",16,yDraw);yDraw+=16;
    grp.bProdY=ironProjectedProduction===0?-32:yDraw;
    text("Iron production: "+ironProjectedProduction.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.bProd){
    if(ironProjectedIncomeFromFurnaces>0){text("‡ Furnaces: "+ironProjectedIncomeFromFurnaces.toFixed(3),32,yDraw);yDraw+=16;disclaimer=!0;var ucc=g_PersistentData.currentChallenge==="UCC";if(ucc){var bonus=0.4*allBuildings.count_of_type(BT_FURNACE)*fastererness;text((fastererness===1?"Base: ":"With bonus: ")+(ironProjectedIncomeFromFurnaces-bonus).toFixed(3),48,yDraw);yDraw+=16;if(fastererness!==1){text("Fastererness: +"+(100*fastererness-100).toFixed(3)+"%",64,yDraw);yDraw+=16;}text("Currently in "+g_PersistentData.currentChallenge+": "+bonus.toFixed(3),48,yDraw);yDraw+=16;}if(fastererness!==1){text("Fastererness: +"+(100*fastererness-100).toFixed(3)+"%",48+16*ucc,yDraw);yDraw+=16;}}
    if(ironProjectedIncomeFromLavaFreezers>0){text("‡ Lava freezers: "+ironProjectedIncomeFromLavaFreezers.toFixed(3),32,yDraw);yDraw+=16;disclaimer=!0;}}
    grp.bConsY=(ironConsumption===0&&g_PersistentData.currentChallenge!=="UCC")?-32:yDraw;
    text("Iron consumption: "+ironConsumption.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.bCons){
    if(g_PersistentData.currentChallenge==="UCC")
    {
        grp.uConsY=ironConsumptionFromUpkeep===0?-32:yDraw;
        text("Upkeep costs: "+ironConsumptionFromUpkeep.toFixed(3),32,yDraw);yDraw+=16;
        if(grp.uCons){
        if(ironUpkeepFromHouses){text("House (lvl. 2+): "+ironUpkeepFromHouses.toFixed(3),48,yDraw);yDraw+=16;}
        if(ironUpkeepFromFarms){text("Farms (lvl. 3+): "+ironUpkeepFromFarms.toFixed(3),48,yDraw);yDraw+=16;}
        if(ironUpkeepFromCollectors){text("Collectors (lvl. 3+): "+ironUpkeepFromCollectors.toFixed(3),48,yDraw);yDraw+=16;}
        if(ironUpkeepFromShelters){text("Shelters: "+ironUpkeepFromShelters.toFixed(3),48,yDraw);yDraw+=16;}
        if(ironUpkeepFromMines){text("Mines ("+(allBuildings.count_of_type(BT_MITHRIL_MINE)>0?"frontside, ":"")+"lvl. 3+): "+ironUpkeepFromMines.toFixed(3),48,yDraw);yDraw+=16;}
        if(ironUpkeepFromMithrilMines){text("Mines (backside): "+ironUpkeepFromMithrilMines.toFixed(3),48,yDraw);yDraw+=16;}
        if(ironUpkeepFromTables){text("Enchanting tables (lvl. 3+): "+ironUpkeepFromTables.toFixed(3),48,yDraw);yDraw+=16;}
        if(ironUpkeepFromIRSs){text("IRSs: "+ironUpkeepFromIRSs.toFixed(3),48,yDraw);yDraw+=16;}
        if(ironUpkeepFromLavaFreezers){text("Lava freezers: "+ironUpkeepFromLavaFreezers.toFixed(3),48,yDraw);yDraw+=16;}
        if(ironUpkeepFromCoolingFans){text("Cooling fans: "+ironUpkeepFromCoolingFans.toFixed(3),48,yDraw);yDraw+=16;}}
    }
    if(ironConsumptionFromMithrilMines>0)
    {text("Mithril mines: "+ironConsumptionFromMithrilMines.toFixed(3),32,yDraw);yDraw+=16;}}
    grp.pMultY=ironProductionMulti===1?-32:yDraw;
    text("Iron production multi: *"+ironProductionMulti.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.pMult){
    if(ironProductionMultiFromUltimate!==1){text(form("Ultimate Upgrades",ironProductionMultiFromUltimate),32,yDraw);yDraw+=16;text("(Only in spring.)",48,yDraw);yDraw+=16;}
    if(ironMithrilProductionMultiFromFrosthour!==1){text(form("Currently in "+season_to_string(),ironMithrilProductionMultiFromFrosthour),32,yDraw);yDraw+=16;}
    if(ironProductionMultiFromSpecialCircuitBox!==1){text(form("Special Circuit Box Artifact",ironProductionMultiFromSpecialCircuitBox),32,yDraw);yDraw+=16;}
    if(ironProductionMultiFromHouse!==1){text(form("House",ironProductionMultiFromHouse),32,yDraw);yDraw+=16;}
    if(ironProductionMultiFromSynergy!==1){text(form("Furnace Synergy tech",ironProductionMultiFromSynergy),32,yDraw);yDraw+=16;}
    if(ironProductionMultiFromMineralEnrichment!==1){text(form("Mineral Enrichment spell",ironProductionMultiFromMineralEnrichment),32,yDraw);yDraw+=16;text("(1% per lava freezer or cooling fan)",48,yDraw);yDraw+=16;}
    if(ironProductionMultiFromGiants!==1){text(form("Fire giant trade",ironProductionMultiFromGiants),32,yDraw);yDraw+=16;}}
    grp.cMultY=-32;
    text("Iron consumption multi: *"+(1).toFixed(3),16,yDraw);yDraw+=16;
    stroke(0,0,0);line(8,yDraw-4,216,yDraw-4);yDraw+=16;
    text("Finalized iron production: "+(ironProjectedProduction*ironProductionMulti).toFixed(3),16,yDraw);yDraw+=16;
    text("Finalized iron consumption: "+(ironConsumption).toFixed(3),16,yDraw);yDraw+=16;
    line(8,yDraw-4,216,yDraw-4);yDraw+=16;
    text("Iron net income: "+ironProjectedNetIncome.toFixed(3),16,yDraw);yDraw+=16;
    if(disclaimer){display_disclaimer();}
    grp.display_expander_buttons();
};
var render_golden_apple_breakdown = function()
{
    var grp=g_ResourcePane,form=grp.format_multi,yDraw=56,disclaimer=!1;
    grp.uConsY=-32;
    draw_resource_breakdown_title("Golden apple resource breakdown");
    line(0,40,400,40);
    textSize(12);
    text("PER DAY STATS",16,yDraw);yDraw+=16;
    grp.bProdY=goldenAppleProjectedProduction===0?-32:yDraw;
    text("Golden apple production: "+goldenAppleProjectedProduction.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.bProd){
    if(goldenAppleProjectedIncomeFromFarms+goldenAppleProjectedIncomeDueToTables>0){text("‡ Farms (lvl. 4+): "+(goldenAppleProjectedIncomeFromFarms+goldenAppleProjectedIncomeDueToTables).toFixed(3),32,yDraw);yDraw+=16;if(goldenAppleProjectedIncomeDueToTables){text("Base: "+goldenAppleProjectedIncomeFromFarms.toFixed(3),48,yDraw);yDraw+=16;text("Ench. tables: "+goldenAppleProjectedIncomeDueToTables.toFixed(3),48,yDraw);yDraw+=16;}disclaimer=!0;}}
    grp.bConsY=-32;
    text("Golden apple consumption: "+(0).toFixed(3),16,yDraw);yDraw+=16;
    grp.pMultY=goldenAppleProductionMulti===1?-32:yDraw;
    text("Golden apple production multi: *"+goldenAppleProductionMulti.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.pMult){
    yDraw+=display_3B_bonus(yDraw);
    if(goldenAppleProductionMultiFromUltimate!==1){text(form("Ultimate Upgrades",goldenAppleProductionMultiFromUltimate),32,yDraw);yDraw+=16;}
    yDraw+=display_upkeep_penalty(yDraw);
    if(foodAppleProductionMultiFromFrosthour!==1){text(form("Currently in "+season_to_string(),foodAppleProductionMultiFromFrosthour),32,yDraw);yDraw+=16;}
    if(goldenAppleProductionMultiFromTF!==1){text(form("Telephone Footwear Artifact",goldenAppleProductionMultiFromTF),32,yDraw);yDraw+=16;}
    yDraw+=display_textbook_bonus(yDraw);
    if(lotsOfThingsMultiFromTerraformers!==1){text(form("Terraformers (lvl. 4+)",lotsOfThingsMultiFromTerraformers),32,yDraw);yDraw+=16;}
    if(goldenAppleProductionMultiFromHouse!==1){text(form("House",goldenAppleProductionMultiFromHouse),32,yDraw);yDraw+=16;text("(Based on number of tiles claimed)",48,yDraw);yDraw+=16;}}
    grp.cMultY=-32;
    text("Golden apple consumption multi: *"+(1).toFixed(3),16,yDraw);yDraw+=16;
    stroke(0,0,0);line(8,yDraw-4,216,yDraw-4);yDraw+=16;
    text("Finalized golden apple production: "+(goldenAppleProjectedProduction*goldenAppleProductionMulti).toFixed(3),16,yDraw);yDraw+=16;
    text("Finalized golden apple consumption: "+(0).toFixed(3),16,yDraw);yDraw+=16;
    line(8,yDraw-4,216,yDraw-4);yDraw+=16;
    text("Golden apple net income: "+goldenAppleNetIncome.toFixed(3),16,yDraw);yDraw+=16;
    if(disclaimer){display_disclaimer();}
    grp.display_expander_buttons();
};
var render_dark_energy_breakdown = function()
{
    var grp=g_ResourcePane,form=grp.format_multi,yDraw=56,disclaimer=!1,dec=g_PersistentData.currentChallenge==="DEC",decTarget=100*pow(4,g_PersistentData.get_challenge_times_completed("DE"));
    grp.uConsY=-32;
    draw_resource_breakdown_title("Dark energy resource breakdown");stroke(0);fill(224);rect(50,yDraw-16,width-100,24+16*dec);if(dec){if(totalDarkEnergyGained>=decTarget){fill(0,224+31*gcaS,0);}else{fill(0,192,0);}noStroke();rect(51,yDraw-15,(width-101)*constrain(totalDarkEnergyGained/decTarget,0,1),39);}
    fill(0);textSize(12);textAlign(CENTER,BASELINE);text("Total dark energy gained: "+grp.formatSI(totalDarkEnergyGained),width/2,yDraw);if(dec){text("DEC Progress: "+(100*min(1,totalDarkEnergyGained/decTarget)).toFixed(3)+"%",width/2,yDraw+16);}textAlign(LEFT,BASELINE);yDraw+=24+16*dec;
    line(0,yDraw-12,400,yDraw-12);yDraw+=4;
    text("PER DAY STATS",16,yDraw);yDraw+=16;
    grp.bProdY=darkEnergyProjectedBaseIncome===0?-32:yDraw;
    text("Dark energy production: "+darkEnergyProjectedBaseIncome.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.bProd){
    if(darkEnergyProjectedIncomeFromMines+darkEnergyProjectedIncomeFromDarkDesert>0){text("‡ "+(darkEnergyProjectedIncomeFromMithrilMines>0?"Frontside m":"M")+"ines (lvl. 4+): "+(darkEnergyProjectedIncomeFromMines+darkEnergyProjectedIncomeFromDarkDesert).toFixed(3),32,yDraw);yDraw+=16;if(darkEnergyProjectedIncomeFromDarkDesert>0){text("Base: "+darkEnergyProjectedIncomeFromMines.toFixed(3),48,yDraw);yDraw+=16;text("(Based on absolute value of desert factor)",64,yDraw);yDraw+=16;if(g_PersistentData.get_upgrade_times_purchased("SM")>0){text("(Based on each mine's distance from your house)",64,yDraw);yDraw+=16;}text("Dark Desert tech: "+darkEnergyProjectedIncomeFromDarkDesert.toFixed(3),48,yDraw);yDraw+=16;}else{text("(Based on absolute value of desert factor)",48,yDraw);yDraw+=16;if(g_PersistentData.get_upgrade_times_purchased("SM")>0){text("(Based on each mine's distance from your house)",48,yDraw);yDraw+=16;}}disclaimer=!0;}
    if(darkEnergyProjectedIncomeFromMithrilMines>0){text("‡ Backside mines (lvl. 4+): "+(darkEnergyProjectedIncomeFromMithrilMines).toFixed(3),32,yDraw);yDraw+=16;disclaimer=!0;}
    if(darkEnergyProductionFromTF>0){text("Telephone Footwear Artifact: "+darkEnergyProductionFromTF.toFixed(3),32,yDraw);yDraw+=16;text("(Only in autumn.)",48,yDraw);yDraw+=16;}}
    grp.bConsY=-32;
    text("Dark energy consumption: "+(0).toFixed(3),16,yDraw);yDraw+=16;
    grp.pMultY=darkEnergyProductionMulti===1?-32:yDraw;
    text("Dark energy production multi: *"+darkEnergyProductionMulti.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.pMult){
    yDraw+=display_3B_bonus(yDraw);
    if(darkEnergyProductionMultiFromDEC!==1){text(form("DEC rewards",darkEnergyProductionMultiFromDEC),32,yDraw);yDraw+=16;}
    if(darkEnergyProductionMultiFromChallengeRules!==1){text(form("Currently in "+g_PersistentData.currentChallenge,darkEnergyProductionMultiFromChallengeRules),32,yDraw);yDraw+=16;}
    yDraw+=display_upkeep_penalty(yDraw);
    if(darkEnergyProductionMultiFromFrosthour!==1){text(form("Currently in "+season_to_string(),darkEnergyProductionMultiFromFrosthour),32,yDraw);yDraw+=16;}
    yDraw+=display_textbook_bonus(yDraw);
    if(darkEnergyProductionMultiFromFurnaces!==1){text(form("Expanded Furnaces (lvl. 3+)",darkEnergyProductionMultiFromFurnaces),32,yDraw);yDraw+=16;if(g_PersistentData.get_upgrade_effect("EP")!==1){text("Original: *"+darkEnergyProductionMultiFromFurnacesOriginal.toFixed(3),48,yDraw);yDraw+=16;text("Exponent (from Ultimate Upgrades): ^"+g_PersistentData.get_upgrade_effect("EP").toFixed(3),48,yDraw);yDraw+=16;}}
    if(darkEnergyProductionMultiFromMultiShift!==1){text(form("Multi Shift tech",darkEnergyProductionMultiFromMultiShift),32,yDraw);yDraw+=16;}
    if(darkEnergyProductionMultiFromAttunement!==1){text(form("Dark Attunement spell",darkEnergyProductionMultiFromAttunement),32,yDraw);yDraw+=16;}
    if(darkEnergyProductionMultiFromCyber!==1){text(form("Cybermind trade",darkEnergyProductionMultiFromCyber),32,yDraw);yDraw+=16;}
    if(darkEnergyProductionMultiFromTurtles!==1){text(form("Air turtles bonus",darkEnergyProductionMultiFromTurtles),32,yDraw);yDraw+=16;}}
    grp.cMultY=-32;
    text("Dark energy consumption multi: *"+(1).toFixed(3),16,yDraw);yDraw+=16;
    stroke(0,0,0);line(8,yDraw-4,216,yDraw-4);yDraw+=16;
    text("Finalized dark energy production: "+(darkEnergyProjectedIncomeFromMines*darkEnergyProductionMulti).toFixed(3),16,yDraw);yDraw+=16;
    text("Finalized dark energy consumption: "+(0).toFixed(3),16,yDraw);yDraw+=16;
    line(8,yDraw-4,216,yDraw-4);yDraw+=16;
    text("Dark energy net income: "+darkEnergyProjectedNetIncome.toFixed(3),16,yDraw);yDraw+=16;
    fill(0,0,0);textSize(12);
    if(disclaimer){display_disclaimer();}
    grp.display_expander_buttons();
};
var render_bio_orb_breakdown = function()
{
    var grp=g_ResourcePane,yDraw=56,disclaimer=!1;
    grp.uConsY=-32;
    draw_resource_breakdown_title("Bio-orb resource breakdown");
    line(0,40,400,40);
    textSize(12);
    text("PER DAY STATS",16,yDraw);yDraw+=16;
    grp.bProdY=bioOrbProjectedProduction===0?-32:yDraw;
    text("Bio-orb production: "+bioOrbProjectedProduction.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.bProd){
    if(bioOrbProductionFromInstaGrow>0){text("Insta-Grow spell: "+bioOrbProductionFromInstaGrow.toFixed(3),32,yDraw);yDraw+=16;text("(Based on the plains factor.)",48,yDraw);yDraw+=16;}
    if(bioOrbProjectedProductionFromSeed>0){text("‡ Seed Artifact: "+bioOrbProjectedProductionFromSeed.toFixed(3),32,yDraw);yDraw+=16;disclaimer=!0;}}
    grp.bConsY=(bioOrbConsumption===0&&season!==4)?-32:yDraw;
    text("Bio-orb consumption: "+bioOrbConsumption.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.bCons){
    if(bioOrbConsumptionFromFrosthour>0||season===4){text("Frosthour (decay): "+bioOrbConsumptionFromFrosthour.toFixed(3),32,yDraw);yDraw+=16;}
    if(bioOrbConsumptionFromRibbon>0){text("Ribbon Artifact: "+bioOrbConsumptionFromRibbon.toFixed(3),32,yDraw);yDraw+=16;}}
    grp.pMultY=bioOrbProductionMulti===1?-32:yDraw;
    text("Bio-orb production multi: *"+bioOrbProductionMulti.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.pMult){yDraw+=display_3B_bonus(yDraw);yDraw+=display_upkeep_penalty(yDraw);yDraw+=display_textbook_bonus(yDraw);}
    grp.cMultY=-32;
    text("Bio-orb consumption multi: *"+(1).toFixed(3),16,yDraw);yDraw+=16;
    stroke(0,0,0);line(8,yDraw-4,216,yDraw-4);yDraw+=16;
    text("Finalized bio-orb production: "+(bioOrbProjectedProduction*bioOrbProductionMulti).toFixed(3),16,yDraw);yDraw+=16;
    text("Finalized bio-orb consumption: "+(bioOrbConsumption*1).toFixed(3),16,yDraw);yDraw+=16;
    line(8,yDraw-4,216,yDraw-4);yDraw+=16;
    text("Bio-orb net income: "+bioOrbNetIncome.toFixed(3),16,yDraw);yDraw+=16;
    if(disclaimer){display_disclaimer();}
    grp.display_expander_buttons();
};
var render_mithril_breakdown = function()
{
    var grp=g_ResourcePane,form=grp.format_multi,yDraw=56,disclaimer=!1;
    grp.uConsY=-32;
    draw_resource_breakdown_title("Mithril resource breakdown");
    line(0,40,400,40);
    textSize(12);
    text("PER DAY STATS",16,yDraw);yDraw+=16;
    grp.bProdY=mithrilProjectedBaseIncome===0?-32:yDraw;
    text("Mithril production: "+mithrilProjectedBaseIncome.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.bProd){
    if(mithrilProjectedIncomeFromMithrilMines>0){text("‡ Backside mines: "+mithrilProjectedIncomeFromMithrilMines.toFixed(3),32,yDraw);yDraw+=16;text("(Based on tiles claimed)",48,yDraw);yDraw+=16;disclaimer=!0;}
    if(mithrilProjectedIncomeFromFurnaces>0){text("‡ Furnaces (lvl. 4+): "+mithrilProjectedIncomeFromFurnaces.toFixed(3),32,yDraw);yDraw+=16;disclaimer=!0;if(fastererness!==1){text("Fastererness: +"+(100*fastererness-100).toFixed(3)+"%",48,yDraw);yDraw+=16;}}
    if(mithrilProductionFrom4PS>0){text("4 Purple Squares Artifact: "+mithrilProductionFrom4PS.toFixed(3),32,yDraw);yDraw+=16;}}
    grp.bConsY=-32;
    text("Mithril consumption: "+(0).toFixed(3),16,yDraw);yDraw+=16;
    grp.pMultY=(mithrilProductionMulti===1&&g_PersistentData.get_upgrade_times_purchased("MS")<1)?-32:yDraw;
    text("Mithril production multi: *"+mithrilProductionMulti.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.pMult){
    yDraw+=display_3B_bonus(yDraw);
    if(g_PersistentData.get_upgrade_times_purchased("MS")>0){text(form("Ultimate Upgrades",mithrilEnchantingMultiFromSwamp),32,yDraw);yDraw+=16;text("(Based on swamp factor)",48,yDraw);yDraw+=16;}
    yDraw+=display_upkeep_penalty(yDraw);
    if(ironMithrilProductionMultiFromFrosthour!==1){text(form("Currently in "+season_to_string(),ironMithrilProductionMultiFromFrosthour),32,yDraw);yDraw+=16;}
    yDraw+=display_textbook_bonus(yDraw);
    if(mithrilProductionMultiFromReef!==1){text(form("Reef magic",mithrilProductionMultiFromReef),32,yDraw);yDraw+=16;}
    if(lotsOfThingsMultiFromTerraformers!==1){text(form("Terraformers (lvl. 4+)",lotsOfThingsMultiFromTerraformers),32,yDraw);yDraw+=16;}
    if(mithrilProductionMultiFromDrillBit!==1){text(form("Drill Bit tech",mithrilProductionMultiFromDrillBit),32,yDraw);yDraw+=16;}}
    grp.cMultY=-32;
    text("Mithril consumption multi: *"+(1).toFixed(3),16,yDraw);yDraw+=16;
    stroke(0,0,0);line(8,yDraw-4,216,yDraw-4);yDraw+=16;
    text("Finalized mithril production: "+mithrilProjectedFinalIncome.toFixed(3),16,yDraw);yDraw+=16;
    text("Finalized mithril consumption: "+(0).toFixed(3),16,yDraw);yDraw+=16;
    line(8,yDraw-4,216,yDraw-4);yDraw+=16;
    text("Mithril net income: "+mithrilProjectedFinalIncome.toFixed(3),16,yDraw);yDraw+=16;
    if(disclaimer){display_disclaimer();}
    grp.display_expander_buttons();
};
var render_max_evacuees_breakdown = function()
{
    var grp=g_ResourcePane,form=grp.format_multi,yDraw=56,fb=g_TechnologyManager.by_name("Food Bank").researched;
    grp.bConsY=grp.uConsY=grp.cMultY=-32;
    draw_resource_breakdown_title("Maximum evacuees breakdown");
    line(0,40,400,40);
    textSize(12);
    text("FACTORS THAT AFFECT THIS PARTICULAR STAT",16,yDraw);yDraw+=16;
    grp.bProdY=(maxEvacueesBase===0&&!greetedCosmic)?-32:yDraw;
    text("Base max evacuees: "+maxEvacueesBase,16,yDraw);yDraw+=16;
    if(grp.bProd){
    if(maxEvacueesFromSRCs>0){text("SRC rewards: "+maxEvacueesFromSRCs,32,yDraw);yDraw+=16;}
    if(maxEvacueesFromShelters+maxEvacueesFromWifi>0)
    {text("Shelters: "+(maxEvacueesFromShelters+maxEvacueesFromWifi),32,yDraw);yDraw+=16;if(maxEvacueesFromWifi>0){text("Base: "+maxEvacueesFromShelters,48,yDraw);yDraw+=16;text("Wi-Fi: "+maxEvacueesFromWifi,48,yDraw);yDraw+=16;}}
    if(maxEvacueesFromReef>0){text("Reef: "+maxEvacueesFromReef,32,yDraw);yDraw+=16;}
    if(greetedCosmic){text("Help from outside: "+2000*greetedCosmic,32,yDraw);yDraw+=16;}}
    grp.pMultY=(maxEvacueesMulti===1&&!fb)?-32:yDraw;
    text("Max evacuees multi: *"+maxEvacueesMulti.toFixed(3),16,yDraw);yDraw+=16;
    if(grp.pMult){
    if(maxEvacueesMultiFromHouse!==1){text(form("House (lvl. 3+)",maxEvacueesMultiFromHouse),32,yDraw);yDraw+=16;}
    if(maxEvacueesMultiFromHeatingSystem!==1){text(form("Heating System tech",maxEvacueesMultiFromHeatingSystem),32,yDraw);yDraw+=16;}
    if(maxEvacueesMultiFromMultiShift!==1){text(form("Multi Shift tech",maxEvacueesMultiFromMultiShift),32,yDraw);yDraw+=16;}
    if(maxEvacueesMultiFromZoning!==1){text(form("High-Density Zoning tech",maxEvacueesMultiFromZoning),32,yDraw);yDraw+=16;}
    if(fb){text(form("Food Bank",maxEvacueesMultiFromFoodBank),32,yDraw);yDraw+=16;}
    }
    stroke(0);line(8,yDraw-4,216,yDraw-4);yDraw+=16;
    text("Max evacuees (raw): "+maxEvacueesRaw.toFixed(3),16,yDraw);yDraw+=16;
    line(8,yDraw-4,216,yDraw-4);yDraw+=16;
    text("Max evacuees: "+maxEvacuees,16,yDraw);yDraw+=16;
    text("(The final value is equal to the raw value rounded down.)",32,yDraw);yDraw+=16;
    grp.display_expander_buttons();
};
} //Resource breakdowns

{
var render_frontend=function(){
textAlign(CENTER,BASELINE);fill(0);textSize(60);text("LAND GRAB",width/2,100);textSize(12);text("A game by Brent Call",width/2,116);textSize(24);textAlign(CENTER,CENTER);if(mouseX>=125&&mouseY>=175&&mouseX<275&&mouseY<225){fill(128,255,128);}else{fill(0,255,0);}stroke(0);rect(125,175,150,50);fill(0);text("Play Game",200,200);if(mouseX>=125&&mouseY>=250&&mouseX<275&&mouseY<300){fill(128,255,255);}else{fill(0,255,255);}stroke(0);rect(125,250,150,50);fill(0);text("Credits",200,275);textAlign(LEFT,BASELINE);};
var render_play_menu=function(){
var newGameHovered=mouseX>=50&&mouseY>=125&&mouseX<200&&mouseY<175,loadGameHovered=mouseX>=50&&mouseY>=225&&mouseX<200&&mouseY<275,tutorialHovered=mouseX>=60&&mouseY>=183&&mouseX<164&&mouseY<199;background(255,160,64);textAlign(CENTER,BASELINE);textSize(32);fill(0,0,0);text("Play the game",width/2,78);textSize(24);textAlign(CENTER,CENTER);if(newGameHovered){fill(128,255,128);}else{fill(0,255,0);}stroke(0,0,0);rect(50,125,150,50);fill(0,0,0);text("New Game",125,150);if(loadGameHovered){fill(128,255,128);}else{fill(0,255,0);}if(g_LoadString.length<1){fill(85);}stroke(0,0,0);rect(50,225,150,50);fill(0,0,0);text("Load Game",125,250);textAlign(LEFT,BASELINE);textSize(12);text("Enable tutorial?",60,195);if(tutorialHovered){fill(255,255,255,128);}else{noFill();}rect(155,185,9,9);if(g_TutorialProgress.get_is_in_tutorial()){fill(0,255,0);beginShape();vertex(160,192);vertex(167,185);vertex(165,183);vertex(160,188);vertex(158,186);vertex(156,188);vertex(160,192);endShape();}fill(0,0,0);if(newGameHovered){text("Start a brand-new game.",210,156);}if(tutorialHovered){text("Recommended for new players.",210,195);}if(loadGameHovered){text("Continue where you left off.",210,240);text("Paste your save string into",210,256);text("the game's source code.",226,272);}textSize(12);textAlign(CENTER,BASELINE);text("FYI this game has no sound.",width/2,328);textAlign(LEFT,BASELINE);};
var render_credits=function(){
background(192,255,255);textAlign(CENTER,CENTER);stroke(0);if(mouseX>=10&&mouseX<width/2-5&&mouseY>=10&&mouseY<60){fill(128,255,255);}else{fill(0,255,255);}rect(10,10,width/2-15,50);rect(12,12,width/2-19,46);if(mouseX>=width/2+5&&mouseX<width-10&&mouseY>=10&&mouseY<60){fill(232,232,128);}else{fill(208,208,0);}rect(width/2+5,10,width/2-15,50);textSize(32);fill(0);text("Credits",width/4,35);text("Changelog",3*width/4,35);textSize(16);textAlign(LEFT,BASELINE);text(g_Credits.positions[floor(map(globalCyclicAnimation,0,360,0,g_Credits.positions.length))]+":",30,100);text("Brent Call",200,100);text("Special thanks:",30,140);text("Iron Programming",200,140);text("Grant",200,210);text("Playtesting:",30,260);textSize(12);text("(For the tutorial on using images)",210,156);text("(For the Pizza)",210,226);text(g_Credits.playtesters.join(", "),200,250,200,400);};
var render_changelog=function(){
background(255,255,0);textAlign(CENTER,CENTER);stroke(0);if(mouseX>=10&&mouseX<width/2-5&&mouseY>=10&&mouseY<60){fill(128,255,255);}else{fill(0,255,255);}rect(10,10,width/2-15,50);if(mouseX>=width/2+5&&mouseX<width-10&&mouseY>=10&&mouseY<60){fill(232,232,128);}else{fill(208,208,0);}rect(width/2+5,10,width/2-15,50);rect(width/2+7,12,width/2-19,46);textSize(32);fill(0);text("Credits",width/4,35);text("Changelog",3*width/4,35);textSize(16);text("26 January 2023 - v1.0.0\nInitial release.",width/2,height/2);textAlign(LEFT,BASELINE);};
var render_loading_error_screen=function(){
background(255,0,0);fill(0,0,0);textSize(18);if(g_LoadString.length<1){text("You need to put in a save string!",20,40);text("To do that, go to the top of the code for this program & find the line that begins with \"var g_LoadString.\"  Then replace the double quotes with the save string you copied from the savegame menu the last time you played.  Then restart the program.",20,100,width-40,300);return;}text("There was an error in your save string!",20,40);text("Error details:",20,60);textSize(12);text(g_PersistentData.loadErrorMessage,40,80);textSize(18);text("Make sure your save string is EXACTLY the same as how you copied it from the savegame menu.",20,160,width-40,300);text("Paste in the correct save string, restart the program, & try again.",20,290,width-40,300);};
var render_tutorial_intro=function(){
background(96);draw_smiley_face(50,200);stroke(0);fill(255);rect(80,122,240,76,6);rect(80,202,240,76,6);textSize(16);fill(0);text("Hi, I'm the developer!",90,144);text("I'm here to guide you through",90,164);text("the tutorial of Land Grab!",90,184);text("The object of this game is to",90,224);text("rescue as many evacuees as",90,244);text("possible from a natural diaster.",90,264);};
var render_tutorial_challenges=function()
{
    noStroke();fill(128,160,160);var o;
    if(!g_PersistentData.get_current_challenge_unlocked()){rect(70,90,330,300);o=95+5*sin(6*globalCyclicAnimation);fill(255,0,0);triangle(o-20,56,o,36,o,76);
    draw_smiley_face(114,210);stroke(0);fill(255);textAlign(LEFT,BASELINE);rect(140,152,240,56,6);rect(140,212,240,56,6);fill(0);textSize(16);text("You can't do these Challenges",150,174);text("yet, so do an SRC first!",150,194);text("Once you unlock these, they",150,234);text("will all give you unique rewards!",150,254);
    return;}
    if(g_TutorialProgress.challenges<3){rect(70,70,330,260);}else{rect(70,170,330,160);}draw_smiley_face(114,210);
    o=1+g_TutorialProgress.challenges+" of 8";
    stroke(0);fill(255);textAlign(LEFT,BASELINE);if(g_TutorialProgress.challenges===4){rect(140,132,240,76,6);}else{rect(140,152,240,56,6);}rect(140,212,240,56,6);rect(180,272,textWidth(o)+20,30,6);
    switch(g_TutorialProgress.challenges){case 0:rect(320,272,54,30,6);break;case 7:rect(260,272,74,30,6);break;default:rect(260,272,114,30,6);break;}fill(0);textSize(16);text(o,190,294);
    switch(g_TutorialProgress.challenges){case 0:text("To rescue evacuees, you need",150,174);text("to do a Challenge!",150,194);text("For every 10 evacuees saved,",150,234);text("you also get 1 Ultimate Point.",150,254);break;case 1:text("Ultimate Points can be spent",150,174);text("to buy permanent Upgrades!",150,194);text("These Upgrades are a main",150,234);text("method of progression.",150,254);o=60+5*sin(6*globalCyclicAnimation);noStroke();fill(255,0,0);triangle(130,o,150,o-20,170,o);break;case 2:text("This list shows all the",150,174);text("Challenges in the game.",150,194);text("We'll start with an SRC.",150,234);text("You'll unlock the others later.",150,254);noFill();stroke(255,0,0);var o=min(height-44,g_PersistentData.challengesList.length*28+4);ellipse(36,40+o/2,64,o);ellipse(36,56,52,20);break;case 3:text("Each Challenge has specific",150,174);text("goals & restrictions.",150,194);text("As you can see, the goal of",150,234);text("the SRC is to get 100 evacuees.",150,254);break;case 4:text("A Challenge usually takes 2~3",150,154);text("hours to complete, but if",150,174);text("you're new it'll be longer.",150,194);text("If you don't have that much time",150,234);text("then this game isn't for you.",150,254);break;case 5:text("Most Challenges are 1000",150,174);text("ingame days (10 ingame years).",150,194);text("When the 1000th day ends,",150,234);text("nearly everything is reset.",150,254);break;case 6:text("In each Challenge, you'll need",150,174);text("to build up production from zero.",150,194);text("Also, you can't save",150,234);text("mid-Challenge.",150,254);break;default:text("If you like, you may explore",150,174);text("the tabs & menus...",150,194);text("When you're ready, start the",150,234);text("Challenge using the button!",150,254);stroke(255,0,0);noFill();ellipse(236,368,256,40);}
};
var render_tutorial_intro_stage = function()
{
    background(96);var g=g_TutorialProgress.general;switch(g){case 0:case 2:draw_smiley_face(50,130);break;case 1:case 3:draw_smiley_face(50,230);break;default:var d1=dist(50,180,mouseX,mouseY),r1=random(-4,4),r2=random(-4,4);if(d1<30){var d2=atan2(mouseY-180,mouseX-50);draw_smiley_face(50+r1-(30-d1)*cos(d2),180+r2-(30-d1)*sin(d2));}else{draw_smiley_face(50+r1,180+r2);}}stroke(0);fill(255);if(g<4){rect(80,92,240,76,6);}if(g===1||g===3){rect(80,192,240,76,6);}if(g>3){rect(80,142,240,76,6);}textSize(16);fill(0);
    if( g < 2 )
    {
        text( "WARNING:", 90, 114 );
        text( "The next save point is a couple", 90, 134 );
        text( "hours away at least.", 90, 154 );
    }
    if(g === 1 )
    {
        text( "If you want something quick &", 90, 214 );
        text( "simple, leave now.  Otherwise,", 90, 234 );
        text( "get comfortable & we'll begin.", 90, 254 );
    }
    if( g === 2 || g === 3 )
    {
        text( "This is a resource management", 90, 114 );
        text( "game.  Build buildings, use", 90, 134 );
        text( "magic, research techs...", 90, 154 );
    }
    if( g === 3 )
    {
        text( "...build up as much as you can", 90, 214 );
        text( "to rescue as many evacuees", 90, 234 );
        text( "as possible before day #1000.", 90, 254 );
    }
    if( g > 3 )
    {
        text( "Oh & I hope you like cutscenes", 90, 164 );
        text( "because here's a cutscene but", 90, 184 );
        text( "you can skip it if you want!", 90, 204 );
    }
    fill(255);rect(170,343,60,30,6);fill(0);textSize(12);textAlign(CENTER,BASELINE);text((g+1)+" of 5",width/2,363);textAlign(LEFT,BASELINE);
};
var render_tutorial_end_of_run = function()
{
    background(96);draw_smiley_face(50,180);stroke(0);fill(255);rect(80,142,240,76,6);textSize(16);fill(0);textAlign(LEFT,BASELINE);
    text( "This is the end of the tutorial.", 90, 164 );
    text( "Make sure to save your", 90, 184 );
    text( "game before you leave!", 90, 204 );
};
var render_tutorial_swarm = function()
{
    background(96);
    draw_smiley_face(50,80+100/(1+exp(-0.4*(mouseY-130))));
    stroke(0);fill(255);
    rect(80,42,240,76,6);rect(80,142,240,76,6);
    fill(0);textSize(16);
    text( "The swarms sound scary, right?", 90, 64 );
    text( "But it's okay!  They temporarily", 90, 84 );
    text( "decrease your production...", 90, 104 );
    text( "Swarms can't harm you.  They", 90, 164 );
    text( "leave on their own eventually.", 90, 184 );
    text( "Afterwards, you can rebuild.", 90, 204 );
    
    image(allTiles.images[TT_PLAINS],200,260);
    stroke(0);fill(0);for(var i=0;i<20;i+=1){ellipse(random(186,214),random(246,274),2,2);}
};
var render_tutorial_slimes = function()
{
    background(96);
    draw_smiley_face(50,80+100/(1+exp(-0.4*(mouseY-130))));
    stroke(0);fill(255);
    rect(80,42,240,76,6);rect(80,142,240,76,6);
    fill(0);textSize(16);
    
    if(g_TutorialProgress.swarm===1)
    {
        text( "Slimes are harmless enemies.", 90, 64 );
        text( "They're a source of gadolinium.", 90, 84 );
        text( "You can kill them manually...", 90, 104 );
        text( "...or you can wake the dragon", 90, 164 );
        text( "& have him automatically", 90, 184 );
        text( "kill slimes for you.", 90, 204 );
        
        var positions=[200,260,230,230,180,250,140,250],i=0;
        for(i=0;i+1<positions.length;i+=2)
        {
            noStroke();var cenX=positions[i],cenY=positions[i+1];fill(32,255,32);quad(cenX-5,cenY,cenX,cenY-5,cenX+5,cenY,cenX,cenY+5);stroke(144,255,144);line(cenX-5,cenY,cenX,cenY-5);stroke(24,128,72);line(cenX,cenY+5,cenX+5,cenY);
        }
    }
    else
    {
        text( "Slimes appear only on slimed", 90, 64 );
        text( "tiles, which were originally", 90, 84 );
        text( "swamps.  You can cast...", 90, 104 );
        text( "...De-Slimification to remove the", 90, 164 );
        text( "slime to get a burst of mana", 90, 184 );
        text( "& gadolinium resources.", 90, 204 );
        image(allTiles.images[TT_SLIMED],216,260);
        image(allTiles.images[TT_SWAMP],184,260);
    }
};
var render_tutorial_2_buildings = function()
{
    background(96);draw_smiley_face(50,180);stroke(0);fill(255);rect(80,142,240,76,6);fill(0);textSize(16);
    text("You can build multiple",90,164);
    text("buildings on the same tile.",90,184);
    text("Try it out!",160,204);
    if(g_TechnologyManager.by_name("Desert Collectors").researched){image(allTiles.images[TT_DESERT],168,260);noStroke();fill(128,96,64);ellipse(168,260,14,14);stroke(32);fill(allBuildings.collector_color(1));ellipse(176,252,8,8);if(allBuildings.count_of_type(BT_MINE)>2){stroke(0);fill(255,224,0);rect(152,260,4,4);}}
    if(g_TechnologyManager.by_name("Enchanting Table").researched){image(allTiles.images[TT_PLAINS],232,260);noStroke();fill(128,255,0);rect(224,252,16,16);fill(64,0,64);rect(216,244,8,8);fill(255,0,255);ellipse(220,248,4,4);}
};
var render_tutorial_controls = function()
{
    background(96);
    draw_smiley_face(50,80+100/(1+exp(-0.4*(mouseY-130))));
    stroke(0);fill(255);
    rect(80,42,240,76,6);rect(80,142,240,76,6);
    fill(0);textSize(16);
    
    if(g_TutorialProgress.controls<15)
    {
        text( "You can click on the currently", 90, 64 );
        text( "selected tile to deselect it,", 90, 84 );
        text( "or use arrow keys to move.", 90, 104 );
        text( "Hover on the lower left corner", 90, 164 );
        text( "of the resource pane to view", 90, 184 );
        text( "the entire thing.", 90, 204 );
        if(mouseX<118&&mouseY>=height-86){g_ResourcePane.render();g_TutorialProgress.controls+=1;}else{g_ResourcePane.render_factors();}
    }
    else
    {
        text( "Breakdown screens show you", 90, 64 );
        text( "everything that affects resource", 90, 84 );
        text( "production or consumption.", 90, 104 );
        text( "Click an     button to open a", 90, 174 );
        text( "breakdown screen right now!", 90, 194 );
        fill(0,192,192);ellipse(158,168,12,12);fill(0);textSize(12);text("i",156,174);
        g_ResourcePane.render();
    }
};
var render_tutorial_irs = function()
{
    background(96);draw_smiley_face(50,100+100/(1+exp(-0.4*(mouseY-150))));stroke(0);fill(255);rect(80,62,240,76,6);rect(80,162,240,76,6);fill(0);textSize(16);
    text("The IRS is required to win",90,84);
    text("most Challenges, but it can be",90,104);
    text("tricky to build one.",90,124);
    text("You need a desert or plains tile",90,184);
    text("next to a map edge tile, & you",90,204);
    text("need to claim the map edge.",90,224);noStroke();fill(255,255,255,128);ellipse(260,294,120,50);
    fill(FRONTSIDE_VOID_COLOR);rect(0,260,200,64);
    image(allTiles.images[TT_PLAINS],200,276);rect(184,260,8,8);rect(184,276,8,8);rect(192,268,8,8);
    image(allTiles.images[TT_DESERT],200,308);rect(184,300,8,8);rect(192,316,8,8);
    stroke(255);var o=floor(map(4*globalCyclicAnimation%360,0,360,0,32)),i=152+o;for(;i>-1;i-=32){point(i,291-o);point(i,323-o);}
    noFill();stroke(255,0,0);ellipse(198,296,30,68);ellipse(201,290,38,62);ellipse(200,292,30,64);ellipse(205,297,30,62);
    fill(224,0,0);text("Build here!",224,300);
};
var render_general_info=function(){
var t="Tiles claimed: "+tilesClaimed+"/500";textSize(12);fill(255);stroke(0);rect(-5,-5,width+10,42);if(goldenClaimTilesLeft>0){rect(-10,height-86,width+20,88);}fill(0);if(goldenClaimTilesLeft>0){if(tilesClaimed<allTiles.length){text("Click on an unclaimed tile to instantly claim it.",48,16);text("Or you can click the Cancel button to end early.",48,32);}else{text("You claimed every tile, so click the Finish button to end this.",40,24);}text(t,260,height-8);textSize(24);text("Remaining: "+goldenClaimTilesLeft,120,height-32);return;}text("Day #"+dayCount+", actions left: "+movesLeft,1,16);text(t,140,16);var s=season_to_string(),d=daysUntilSwarmArrival;text("~"+s.substr(0,1).toUpperCase()+s.substr(1)+"~",16,32);if(d<11){text("Swarm arrival: "+d+" day"+(d===1?"":"s"),140,32);}stroke(0);fill(255);};
var render_general_info_tooltips=function(){
if(goldenClaimTilesLeft>0){return;}textSize(12);stroke(0);fill(255);if(mouseX<=50&&mouseY<=18){rect(80,50,106,40);fill(0);text("The run ends after",84,66);text("day #"+dayToRunEnd+".",84,82);}if(mouseX>50&&mouseX<=130&&mouseY<=18){rect(80,50,130,40);fill(0);text("How many more things",84,66);text("you can do today.",84,82);}if(mouseX>140&&mouseX<=260&&mouseY<=18){rect(140,50,136,40);fill(0);text("Number of tiles claimed,",144,66);text("compared to the limit.",144,82);}if(mouseX<=90&&mouseY>18&&mouseY<37){rect(80,50,140,56);fill(0);text("Each season has its own",84,66);text("bonuses/penalties.",84,82);text(dayCount<dayToRunEnd-24?"Next season: day #"+(1+25*ceil(dayCount/25)):"This is the last season!",84,98);}if(daysUntilSwarmArrival<11&&mouseX>140&&mouseX<=260&&mouseY>18&&mouseY<37){rect(140,50,155,24);fill(0);text("Yes, you read that correctly.",144,66);}};
var render_diplomacy_screen = function()
{
    textAlign(CENTER,BASELINE);textSize(20);fill(0);var titleText="";if(g_Diplomacy.currentlyMeetingWith==="reef"){titleText="DIPLOMACY WITH"+(g_PersistentData.currentChallenge==="URC"?"...NOBODY":" THE MERFOLK");}else{titleText="DIPLOMACY WITH THE "+g_Diplomacy.currentlyMeetingWith.toUpperCase();}text(titleText,width/2,64);textAlign(LEFT,BASELINE);
    switch(g_Diplomacy.currentlyMeetingWith)
    {
    case "merfolk":
        textSize(12);
        text("Standing: "+g_Diplomacy.merfolk_get_standing_as_string(), 64, 80);
        if(g_Diplomacy.merfolkTradeUnlocked)
        {
            var angleDeg=4*globalCyclicAnimation,xPos=g_Diplomacy.merfolkScreenOffset,mml=allBuildings.get_mer_mall_level();
            g_Diplomacy.merfolk_screen_offset_update();
            //Triangle buttons:
            stroke(0);
            if(g_Diplomacy.focusedTrade>-1*(g_Diplomacy.merfolkStanding>7&&mml<5)){
            if(mouseX>=0&&mouseX<32&&mouseY>=176&&mouseY<208)
            {fill(255,255,0);}
            else
            {fill(192,192,0);}
            triangle(0,192,32,176,32,208);}
            if(g_Diplomacy.focusedTrade<g_Diplomacy.merfolkTrades.length-1){
            if(mouseX>=width-32&&mouseX<width&&mouseY>=176&&mouseY<208)
            {fill(255,255,0);}
            else
            {fill(192,192,0);}
            triangle(width,192,width-32,176,width-32,208);}
            if(g_Diplomacy.merfolkStanding>7&&mml<5)
            {
                xPos-=240;stroke(0);fill(240,240,160);rect(xPos,96,224,64);fill(0);
                text("Upgrade the mer mall to level " +(mml+1)+ ":",xPos+4,112);
                text(g_Diplomacy.merfolk_get_upgrade_mall_cost_string(),xPos+4,128);
                if(g_Diplomacy.merfolk_get_can_upgrade_mall()){if(mouseX>=xPos+40&&mouseX<xPos+184&&mouseY>=132&&mouseY<154){fill(255,192,128);}else{fill(255,128,0);}rect(xPos+40,132,144,24);fill(0);textAlign(CENTER,CENTER);text("UPGRADE",xPos+112,144);textAlign(LEFT,BASELINE);}
                else if(g_Diplomacy.merfolk_get_upgrade_mall_offered()){noFill();rect(xPos+40,132,144,24);fill(0);textAlign(CENTER,CENTER);text("Can't afford!",xPos+112,144);textAlign(LEFT,BASELINE);}
                else if(allBuildings.get_mer_mall_level()===4&&allBuildings.length<200){text("Progress: "+allBuildings.length+"/200",xPos+20,144);}
                xPos+=240;
            }
            
            for(var i=0;i<g_Diplomacy.merfolkTrades.length;xPos+=g_Diplomacy.merfolk_get_trade_item_visual_width(i),i+=1)
            {
                stroke(0,0,0);
                fill(128,255,255);
                rect(xPos,96,g_Diplomacy.merfolk_get_trade_item_visual_width(i)- 16,64);
                if(g_Diplomacy.merfolkTrades[i].cooldownRemaining>0)
                {stroke(0,0,0);noFill();ellipse(xPos+56,128,32,32);line(xPos+56,128,xPos+56+16*cos(angleDeg),128+16*sin(angleDeg));fill(0,0,0);textAlign(CENTER,CENTER);textSize(18);text(g_Diplomacy.merfolkTrades[i].cooldownRemaining,xPos+56,128);textAlign(LEFT,BASELINE);continue;}
                if(!g_Diplomacy.merfolk_get_can_trade(i))
                {noStroke();fill(255,64,64);rect(xPos+1,99,g_Diplomacy.merfolk_get_trade_item_visual_width(i)- 17, 16);}
                fill(0,0,0);textSize(12);
                text(g_Diplomacy.merfolk_get_buy_string(i),xPos+4,112);
                text(g_Diplomacy.merfolk_get_sell_string(i),xPos+4,128);stroke(0,0,0);
                if(g_Diplomacy.merfolk_get_can_trade(i))
                {if(mouseX>=xPos+8&&mouseX<xPos+56&&mouseY>=132&&mouseY<156){fill(0,255,0);}else{fill(0,128,0);}rect(xPos+8,132,48,24);fill(0);text("Trade?",xPos+12,148);}else
                {noFill();rect(xPos+8,132,72,24);fill(0);text("Can't afford!",xPos+12,148);}
            }
            textSize(12);
            if(g_PersistentData.currentChallenge==="DAC"&&g_Diplomacy.merfolkStanding>1&&g_Diplomacy.merfolkStanding<=7)
            {var ratio=g_Diplomacy.merfolk_get_spr();stroke(0);text("Progress to next standing: "+(100*ratio).toFixed(0)+"%",64,200);fill(0,192,192);rect(80,206,ratio*240,20);noFill();rect(80,206,240,20);fill(0);}
            else if(g_Diplomacy.merfolkStanding>5&&allSpells.by_name("Water Music").castStat<3)
            {text("Visit the spells menu to see a spell the merfolk taught you.",64,192,300,height);}
            else if(g_Diplomacy.merfolkStanding<=5)
            {text("Earn the respect of the merfolk & they'll give you a gift of knowledge.",64,192,300,height);}
            if(g_Diplomacy.merfolk_get_upgrade_mall_offered())
            {text("Upgrade available for the mer mall!",64,224,300,height);text("Scroll all the way to the left to view it.",64,240,300,height);}
            else if(mml>1&&mml<4)
            {text("New trades are available!",64,224,300,height);}
        }
        else
        {text("The merfolk are curious about you.  They are willing to offer you peace.  If you sign their treaty, you will be granted access into their shopping mall, where you can buy & sell resources.",64,96,300,height);text("Sign the peace treaty?",64,200,300,height);}
        break;
    case "merfolk\nbonuses":
        textSize(12);stroke(0,0,0);
        var yDraw=116,mmLevel=allBuildings.get_mer_mall_level(),DACCount=g_PersistentData.get_challenge_times_completed("DA"),form=g_ResourcePane.format_multi;
        //Each time you update this, also update Diplomacy.prototype.merfolk_bonuses_expected_lines()
        if(g_Diplomacy.merfolk_bonuses_expected_lines()>=7){if(mouseX>=width-32&&mouseX<width&&mouseY>=37&&mouseY<69){fill(255,255,0);}else{fill(192,192,0);}triangle(width-32,69,width-16,37,width,69);if(mouseX>=width-32&&mouseX<width&&mouseY>=height-142&&mouseY<height-110){fill(255,255,0);}else{fill(192,192,0);}triangle(width-32,height-142,width-16,height-110,width,height-142);}
        g_Diplomacy.merfolk_bonus_screen_offset_update();
        yDraw-=g_Diplomacy.merfolkBonusScreenOffset;
        fill(0,0,0);
        if(mmLevel>4)
        {
            text(form("Buying/selling mana",0.93),48,yDraw);yDraw+=16;
            text("(Due to mer mall lvl. 5.)",64,yDraw);yDraw+=16;
        }
        text(form("Buying/selling stone",g_Diplomacy.merfolk_get_stone_multi()),48,yDraw);yDraw+=16;
        text("(Increases every day.)",64,yDraw);yDraw+=16;
        if(DACCount>0)
        {text("(Increases exponentially based on DACs completed.)",64,yDraw);yDraw+=16;}
        if(season===2)
        {text(form("Buying/selling pearl:",1.25),48,yDraw);yDraw+=16;text("(Only during autumn.)",64,yDraw);yDraw+=16;}
        if(pearlTradeMultiFromCyber!==1)
        {text(form("Buying/selling pearl:",pearlTradeMultiFromCyber),48,yDraw);yDraw+=16;text("(Purchased from Cybermind.)",64,yDraw);yDraw+=16;}
        if(mmLevel>4)
        {
            text(form("Buying/selling gadolinium",sqrt(gadoliniumFromSlimeMulti)),48,yDraw);yDraw+=16;
            text("(Square root of gadolinium from slime multi.)",64,yDraw);yDraw+=16;
            if(season===3)
            {
                text(form("Gadolinium",2),48,yDraw);yDraw+=16;
                text("(Only during winter.)",64,yDraw);yDraw+=16;
            }
        }
        if(DACCount>2&&mmLevel>1)
        {text(form("Buying/selling dark energy",0.7*sqrt(DACCount)),48,yDraw);yDraw+=16;text("(Due to DACs.)",64,yDraw);yDraw+=16;}
        line(50,yDraw-6,width-50,yDraw-6);yDraw+=16;
        if(mmLevel>1&&DACCount>0)
        {
            text("Selling food: +"+(0.8*DACCount).toFixed(1),48,yDraw);yDraw+=16;
            text("(Due to DACs.)",64,yDraw);yDraw+=16;
            if(mmLevel>3)
            {text("(Cooldown also decreased, due to lvl. 4+ mer mall.)",64,yDraw);yDraw+=16;}
        }
        if(g_PersistentData.currentChallenge==="DAC"&&DACCount>=3)
        {text("Buying anything costs more mana or food.",48,yDraw);yDraw+=16;text("(Due to Challenge rules.)",64,yDraw);yDraw+=16;}
        if(DACCount>0)
        {text("Selling pearl: +"+(0.5*DACCount).toFixed(1),48,yDraw);yDraw+=16;text("(If buying mana or iron, due to DACs.)",64,yDraw);yDraw+=16;}
        if(mmLevel>3)
        {text("Selling pearl: +5",48,yDraw);yDraw+=16;text("(Due to lvl. 4+ mer mall.)",64,yDraw);yDraw+=16;}
        if(mmLevel>1)
        {text("Buying iron: -0.5",48,yDraw);yDraw+=16;text("(Due to lvl. 2+ mer mall.)",64,yDraw);yDraw+=16;}
        if(mmLevel>2)
        {text("Selling dark energy: +2, cooldown also decreased",48,yDraw);yDraw+=16;text("(If buying flame orb, due to lvl. 3+ mer mall.)",64,yDraw);yDraw+=16;}
        stroke(0);fill(255);rect(32,0,width-64,100);fill(0);textSize(20);textAlign(CENTER,BASELINE);text(titleText,width/2,64);textAlign(LEFT,BASELINE);
        break;
    case "reef":
        //For more info, check older file versions
        textSize(12);
        if(g_PersistentData.currentChallenge!=="URC"){text("Standing: "+g_Diplomacy.merfolk_get_standing_as_string(),64,80);}
        if(g_ReefData.health<500)
        {text((g_PersistentData.currentChallenge==="URC"?"No one is there to help you protect the reef!":"The merfolk would like help protecting the reef!"),64,96);}
        else
        {text((g_PersistentData.currentChallenge==="URC"?"You have protected the reef!":"The merfolk thank you for protecting the reef!"),64,96);}
        stroke(0,0,0);
        if(g_ReefData.health<500)
        {fill(128,255,255);rect(64,106,160,64);}
        else
        {fill(213);rect(64,106,g_PersistentData.currentChallenge==="URC"?226:222,40);}
        fill(0);
        if(g_ReefData.health<500)
        {
            text((g_PersistentData.currentChallenge==="URC"?"Infuse the reef with mana?":"Donate mana to help them?"),68,122);
            text("Helps improve reef health.",68,138);
            noFill();
            switch(allBuildings.get_reef_level()){case 1:case 2:rect(68,144,22,24);text("20",72,160);break;case 3:case 4:rect(92,144,22,24);text("80",96,160);break;default:rect(116,144,28,24);text("320",120,160);}
        }
        else
        {
            text((g_PersistentData.currentChallenge==="URC"?"You cannot give the reef any more mana.":"The merfolk no longer accept donations."),68,122);
            text("The reef has reached perfect health!",68,138);
        }
        if(g_ReefData.healthRecord===0){break;}
        var healthBarTop=round(map(g_ReefData.health,0,g_ReefData.maxHealth,250,100)),recordLineTop=round(map(g_ReefData.healthRecord,0,g_ReefData.maxHealth,250,100)),tempStr=g_ReefData.health+"%";
        noFill();stroke(0,0,0);rect(width-28,100,24,150);if(mouseX>=width-28&&mouseY>=100&&mouseY<250){fill(128,192,255);}else{fill(0,128,255);}rect(width-28,healthBarTop,24,250-healthBarTop);if(g_ReefData.healthRecord>g_ReefData.health&&g_ReefData.healthRecord<g_ReefData.maxHealth){line(width-28,recordLineTop,width-4,recordLineTop);}textAlign(RIGHT,BASELINE);fill(0,0,0);text(tempStr,width-32,healthBarTop-2);line(width-32-textWidth(tempStr),healthBarTop,width-20,healthBarTop);textAlign(LEFT,BASELINE);render_reef_healthbar_info();
        break;
    case "camels":
        textSize(12);
        text("Standing: "+g_Diplomacy.camels_get_standing_as_string(),64,80);
        if(g_Diplomacy.camelsTradeUnlocked){text("Bonus spice: "+g_ResourcePane.formatSI(100*g_Diplomacy.camels_get_spice_multi()-100)+"%",240,80);}
        if(season===4)
        {textSize(14);text("The camels hate frosthour.\n\nThey aren't willing to talk to you until spring.", 64, 150);textSize(12);}
        else if(g_Diplomacy.camelsTradeUnlocked&&season!==4)
        {
            var xPos=width/2-110;stroke(0);fill(224,224,64);rect(xPos,96,220,64);if(!g_Diplomacy.camels_get_can_trade()){noStroke();fill(255,64,64);rect(xPos+1,99,219,16);}
            fill(0);
            text(g_Diplomacy.camels_get_buy_string(),xPos+4,112);
            text(g_Diplomacy.camels_get_sell_string(),xPos+4,128);
            if(!g_Diplomacy.camels_get_can_trade()){stroke(0);noFill();rect(width/2-92,132,72,24);text("Can't afford!",width/2-88,148);}
            if(g_PersistentData.currentChallenge==="DAC"&&g_Diplomacy.camelsStanding>1&&g_Diplomacy.camelsStanding<=7)
            {var ratio=g_Diplomacy.camels_get_spr();stroke(0);text("Progress to next standing: "+(100*ratio).toFixed(0)+"%",64,286);fill(0,192,192);rect(80,292,ratio*240,20);noFill();rect(80,292,240,20);}fill(0);
            if(g_Diplomacy.camels_get_resistant_seeds_offered())
            {
                text("The camels are planning to build some public works to improve their cities.  To do that, they need stone to work with.  If you give them "+(65*g_Diplomacy.cameltechCostMulti)+" stone, they will share with you technology for improved farms.",64,168,300,height);
            }
            else if(g_Diplomacy.camels_get_flame_heart_offered())
            {
                text("There is a shortage of food in the desert.  If you provide food aid to them ("+(100*g_Diplomacy.cameltechCostMulti)+" food), they will share with you a secret for getting more flame orb from enchanting.",64,176,300,height);
            }
            else if(g_Diplomacy.camels_get_swarm_interference_offered())
            {
                text("The camels need iron for some type of secret project they're working on.  If you give them "+(50*g_Diplomacy.cameltechCostMulti)+" iron, they will cause your collectors to reduce the chance for swarms to spawn on the same tile as them.",64,176,300,height);
            }
            else if(g_Diplomacy.camels_get_expanded_furnaces_offered())
            {
                text("The camels need more stone for a highway they're building.  If you give them "+(8000*g_Diplomacy.cameltechCostMulti)+" stone, they will teach you how to build lvl. 3 furnaces, which will boost your production of a rare resource.",64,176,300,height);
            }
            else if(g_Diplomacy.camels_get_golden_seeds_offered())
            {
                if(allBuildings.count_of_type(BT_FARM,3)>=1)
                {text("The camels need "+(4000*g_Diplomacy.cameltechCostMulti)+" mithril & "+(10000*g_Diplomacy.cameltechCostMulti)+" pearl.  Apparently, pearl is the secret to fusion power.  They aren't willing to share their fusion reactor design, but they will share a design for improved farms.",64,172,300,height);}
                else
                {text("You need to build a level 3 farm before the camels will sell any more technology to you.",64,172,300,height);}
            }
            else if(g_Diplomacy.camels_get_golden_tables_offered())
            {
                if(allBuildings.count_of_type(BT_ENCHANTING_TABLE,4)>=5)
                {text("The camels are willing to sell you a technology that makes level 4+ enchanting tables increase the golden apple output of any farms on the same tile.  The price is "+(5000*g_Diplomacy.cameltechCostMulti)+" iron & "+(500*g_Diplomacy.cameltechCostMulti)+" dark energy.",64,172,300,height);}
                else
                {text("You need to build 5 level 4 enchanting tables before the camels will sell any more technology to you.",64,172,300,height);}
            }
            else if(g_Diplomacy.camels_get_mining_pods_offered())
            {
                if(allBuildings.count_of_type(BT_IRS)>0)
                {text("The camels are working on a system to harvest resources from the space in between universes.  They're willing to share it with you, for the price of "+(10000*g_Diplomacy.cameltechCostMulti)+" iron & "+(100*g_Diplomacy.cameltechCostMulti)+" gadolinium.",64,172,300,height);}
                else
                {text("You can't buy any more tech from camels until you've built a certain type of building.",64,172,300,height);}
            }
            else if(g_Diplomacy.camels_get_innovation_offered())
            {text("The camels wish to build a grand library.  For a contribution of "+(10000*g_Diplomacy.cameltechCostMulti)+" mithril & "+(20*g_Diplomacy.cameltechCostMulti)+" golden apple, your production of Tier 1 resources (food, mana, pearl, stone) will increase based on the number of evacuees you've saved.  NOTE: Consumes 2 spice/day.",64,176,300,height);}
        }
        else
        {text("The camels are an ancient desert people who curiously seem to know a lot about who you are & why you have come here.  They are willing to give you some rare resources, for a price.  If you sign their treaty, you will be allowed to trade with them.",64,96,300,height);text("Sign the peace treaty?",64,220,300,height);}
        break;
    case "cybermind":
        textSize(12);text("Standing: "+g_Diplomacy.cybermind_get_standing_as_string(),64,80);
        if(g_Diplomacy.cybermindTradeUnlocked)
        {var mtI=mithril_mine_on_tile(selectedTile),cFI=cooling_fan_on_tile(selectedTile);if(g_Diplomacy.cybermindTradePurchased[0]){stroke(255,0,0);fill(255,0,0);line(0,142,40,142);line(16,176,40,176);ellipse(16.5,176.5,4,4);line(40,190,40,202);line(0,202,40,202);}if(g_Diplomacy.cybermindTradePurchased[1]){stroke(0,255,0);fill(0,255,0);line(width-60,84,width-60,100);line(width-60,84,width,84);line(width-40,100,width,100);line(width-40,180,width-40,220);ellipse(width-39.5,220.5,4,4);line(width-30,220,width,250);ellipse(width-29.5,220.5,4,4);}if(g_Diplomacy.cybermindTradePurchased[2]){stroke(0,0,255);fill(0,0,255);line(width/2,244,3*width/4+2,244);line(3*width/4+2,244,3*width/4+2,height);line(width/2,250,3*width/4,250);line(3*width/4,250,3*width/4,height);line(64,290,width/2,290);ellipse(64.5,290.5,4,4);}stroke(0,0,0);fill(255,128,128);rect(32,96,width/2-36,100);fill(128,255,128);rect(width/2+4,96,width/2-36,100);fill(128,128,255);if(mtI>-1&&cFI>-1&&g_PersistentData.get_has_wifi()){fill(224,224,255);}rect(width/4+18,202,width/2-36,100);if(mtI>-1){fill(255);stroke(0);ellipse(width/2-36,172,32,32);stroke(0,0,255);line(width/2-36,150,width/2-36,170);stroke(0,255,0);line(width/2-54,172,width/2-36,172);stroke(255,0,0);line(width/2-36,172,width/2-20,188);stroke(0);fill(0);line(g_Diplomacy.cybermind_get_can_trade(0)?100:136,172,width/2-52,172);line(width/2-36,145,width/2-36,156);ellipse(width/2-35.5,145.5,4,4);line(width/2-36+8*sqrt(2),172+8*sqrt(2),width/2-20,188);ellipse(width/2-19.5,188.5,4,4);allBuildings[mtI].draw_at(width/2-36,172);}if(cFI>-1){fill(255,255,255);stroke(0,0,0);rect(width-80,160,32,24);stroke(255,0,0);line(width-72,172,width-72,183);stroke(0,255,0);line(width-64,161,width-64,183);stroke(0,0,255);line(width-56,172,width-48,180);stroke(0,0,0);fill(0,0,0);line(width-72,184,width-72,192);ellipse(width-71.5,192.5,4,4);line(width-64,184,width-64,189);ellipse(width-63.5,189.5,4,4);line(width-64,137,width-64,160);ellipse(width-63.5,137.5,4,4);line(width-47,181,width-40,188
);if(g_Diplomacy.cybermindTradePurchased[1]){line(width-40,188,width-40,196);}else{ellipse(width-39.5,188.5,4,4);}allBuildings[cFI].draw_at(width-60,180);if(mtI>-1){noStroke();fill(255,255,255);rect(260,280,26,26);stroke(0,0,0);line(260,280,260,302);line(260,280,282,280);line(270,238,270,280);line(278,238,278,280);fill(0,0,0);ellipse(270.5,238.5,4,4);ellipse(278.5,238.5,4,4);stroke(255,0,0);line(270,281,270,290);stroke(0,0,255);line(278,281,278,290);stroke(0,255,0);fill(0,255,0);line(286,238,286,290);ellipse(286.5,238.5,4,4);allBuildings[cFI].draw_at(282,302);allBuildings[mtI].draw_at(282,302);}}stroke(0);fill(0);
if(g_Diplomacy.cybermindTradePurchased[0]&&mtI<0){text("Already bought:",36,112);text(g_Diplomacy.cybermind_get_bonus_string(0),36,128);text("Bonus will end in "+g_Diplomacy.cybermindDaysUntilRefresh+" days.",36,144);}else{text(g_Diplomacy.cybermind_get_buy_string(0),36,112);text(g_Diplomacy.cybermind_get_sell_string(0),36,128);if(g_Diplomacy.cybermind_get_cant_afford(0)){noFill();rect(64,160,72,24);text("Can't afford!",68,176);}
}if(g_Diplomacy.cybermindTradePurchased[1]&&cFI<0){text("Already bought:",width/2+8,112);text(g_Diplomacy.cybermind_get_bonus_string(1),width/2+8,128);text("Bonus will end in "+g_Diplomacy.cybermindDaysUntilRefresh+" days.",width/2+8,144);}else{text(g_Diplomacy.cybermind_get_buy_string(1),width/2+8,112);text(g_Diplomacy.cybermind_get_sell_string(1),width/2+8,128);if(g_Diplomacy.cybermind_get_cant_afford(1)){noFill();rect(width/2+36,160,72,24);text("Can't afford!",width/2+40,176);}}if(g_Diplomacy.cybermindTradePurchased[2]&&(mtI<0||cFI<0)){text("Already bought:",width/4+22,218);text(g_Diplomacy.cybermind_get_bonus_string(2),width/4+22,234);text("Bonus will end in "+g_Diplomacy.cybermindDaysUntilRefresh+" days.",width/4+22,250);}else{text(g_Diplomacy.cybermind_get_buy_string(2),width/4+22,218);text(g_Diplomacy.cybermind_get_sell_string(2),width/4+22,234);if(g_Diplomacy.cybermind_get_cant_afford(2)&&(mtI<0||cFI<0)){noFill();rect(width/4+50,266,72,24);text("Can't afford!",width/4+54,282);}}if(g_Diplomacy.get_is_wifi_active()){stroke(0,0,0);fill(255,255,255);rect(4,264,width/4+8,38);fill(0,0,0);text("Wi-Fi active: +1 to",8,278);text("pod & shelter size",8,294);}if(g_Diplomacy.cybermindDaysUntilRefresh===1){text("Market will refresh\nin 1 day.",8,240);}else{text("Market will refresh\nin "+g_Diplomacy.cybermindDaysUntilRefresh+" days.",8,240);}noFill();rect(4,224,width/4+8,36);}
        else
        {text("The Cybermind's voice is not sound--it is instead a curling, calculating influence at the edges of your mind.  The Cybermind is nearly as old as the universe & has epic powers.  For a price, you may have a piece of these powers.",64,96,300,height);text(g_PersistentData.get_has_wifi()?"Log on to the Wi-Fi?":"Would you like to buy stuff?",64,180,300,height);}
        break;
    case "fire giants":
        textSize(12);
        text("Standing: "+(g_Diplomacy.tradesWithGiants?"neutral":"completely disinterested"),64,80);
        var xPos=width/2-120,nextC=g_Diplomacy.giants_get_next_cost();
        stroke(0);
        fill(255,160,0);
        rect(xPos,96,240,96);
        if(spiceResource<nextC)
        {noStroke();fill(255,64,64);rect(xPos+1,99,219,16);}
        fill(0);
        text("Give: "+g_ResourcePane.formatSI(nextC)+" spice",xPos+4,112);
        text("Gain: increased iron production multi",xPos+4,128);
		text("Current iron production multi: *"+g_ResourcePane.formatSI(ironProductionMultiFromGiants),xPos+4,144);
		text("Current stone consumption multi: *"+g_ResourcePane.formatSI(stoneConsumptionMultiFromGiants),xPos+4,160);
		text("The fire giants don't have an interest in outsiders, but they really like to eat spicy food.",64,216,300,height);
		if(spiceResource<g_Diplomacy.giants_get_next_cost()){stroke(0);noFill();rect(width/2-92,164,72,24);text("Can't afford!",width/2-88,180);}
        break;
    }
};
var render_research_screen=function(){
var yDraw=56-g_TechnologyManager.scrollOffset,displayed=0,i=0;g_TechnologyManager.screen_offset_update();textSize(12);stroke(0,0,0);for(;i<g_TechnologyManager.nonCamelTechs.length;i+=1){var nct=g_TechnologyManager.nonCamelTechs[i];if(!nct.get_visible_in_tech_screen()){continue;}var hov=mouseX>=48&&mouseX<width-60&&mouseY>=yDraw-14&&mouseY<yDraw+34&&mouseY>=37&&mouseY<height-86;if(nct.researched){fill(255,255,255);}else{if(nct.pcMet){if(hov){fill(0,255,0);}else{fill(0,128,0);}}else{fill(255,0,0);}}rect(48,yDraw-14,width-108,48);if(nct.name.substr(0,5)==="House"){fill(255,128,0);if(hov&&!nct.researched&&nct.pcMet){fill(255,192,128);}rect(50,yDraw+4,12,28);}fill(0,0,0);if(nct.researched){text(nct.name+"     researched",52,yDraw);}else{text(nct.name+"     not researched yet",52,yDraw);}text(nct.description,64,yDraw+16);if(!nct.researched){text("Requirements: "+nct.conditionString,64,yDraw+32);}yDraw+=56;displayed+=1;}for(i=0;i<g_TechnologyManager.camelTechs.length;i+=1){if(!g_TechnologyManager.camelTechs[i].get_visible_in_tech_screen()){continue;}fill(224,224,64);rect(48,yDraw-14,width-108,48);fill(0,0,0);text(g_TechnologyManager.camelTechs[i].name+"     purchased from camels",52,yDraw);text(g_TechnologyManager.camelTechs[i].description,64,yDraw+16);yDraw+=56;displayed+=1;}if(displayed<1){if(!g_PersistentData.techOptionsShowPurchasedFromCamels&&!g_PersistentData.techOptionsShowPurchased&&!g_PersistentData.techOptionsShowAvailable&&!g_PersistentData.techOptionsShowUnavailable){text("Your filters are set to hide everything.",64,164);}else{text((g_TechnologyManager.get_completion_ratio()===1&&(g_PersistentData.techOptionsShowAvailable||g_PersistentData.techOptionsShowUnavailable))?"You researched all technologies!":"No unlocked technologies match your selected filters.",64,164);}}if(g_TechnologyManager.count_visible_in_tech_screen()>=5){stroke(0,0,0);if(mouseX>=width-32&&mouseX<width&&mouseY>=37&&mouseY<69){fill(255,255,0);}else{fill(192,192,0);}triangle(width-32,69,width-16,37,width,69);if(mouseX>=width-32&&mouseX<width&&mouseY>=height-142&&mouseY<height-110){fill(255,255,0);}else{fill(192,192,0);}triangle(width-32,height-142,width-16,height-110,width,height-142);}fill(255,255,255);rect(-5,-5,width+10,42);textSize(32);fill(0,0,0);text("Research lab",16,32);textSize(12);text("Each costs 1 action to research.",224,16);text("Progress: "+(100*g_TechnologyManager.get_completion_ratio()).toFixed(0)+"%",224,32);
var cC=ticksToShowDayNumber===0&&mouseX>=16&&mouseX<32,showP=g_PersistentData.techOptionsShowPurchased,showA=g_PersistentData.techOptionsShowAvailable,showU=g_PersistentData.techOptionsShowUnavailable,showC=g_PersistentData.techOptionsShowPurchasedFromCamels;textSize(12);textAlign(CENTER,CENTER);stroke(0,0,0);fill(255,255,255);rect(16,48,16,16);if(showP){noFill();ellipse(24.5,56,6,6);ellipse(24.5,56,16,8);}if(cC&&mouseY>=48&&mouseY<64){noFill();rect(14,46,20,20);fill(0,255,255);rect(48,40,140,32);fill(0,0,0);text((showP?"Hide":"Show")+" researched techs",118,56);}fill(0,128,0);rect(16,80,16,16);if(showA){noFill();ellipse(24.5,88,6,6);ellipse(24.5,88,16,8);}if(cC&&mouseY>=80&&mouseY<96){noFill();rect(14,78,20,20);fill(0,255,255);rect(48,72,140,32);fill(0,0,0);text((showA?"Hide":"Show")+" available techs",118,88);}fill(255,0,0);rect(16,112,16,16);if(showU){noFill();ellipse(24.5,120,6,6);ellipse(24.5,120,16,8);}if(cC&&mouseY>=112&&mouseY<128){noFill();rect(14,110,20,20);fill(0,255,255);rect(48,104,140,32);fill(0,0,0);text((showU?"Hide":"Show")+" unavailable techs",118,120);}if(g_Diplomacy.camel_technology_unlocked()){fill(224,224,64);rect(16,144,16,16);if(showC){noFill();ellipse(24.5,152,6,6);ellipse(24.5,152,16,8);}if(cC&&mouseY>=144&&mouseY<160){noFill();rect(14,142,20,20);fill(0,255,255);rect(48,104,192,96);line(48,130,240,130);fill(0,0,0);text((showC?"Hide":"Show")+" purchased from camels",144,118);text("These technologies cannot be\nresearched in this lab; they must\nbe bought directly from the camels\nin the diplomacy screen.",144,164);}}textAlign(LEFT,BASELINE);};
var render_build_screen=function(){
var s=season_to_string();stroke(0);fill(255);rect(-5,-5,width+10,42);line(250,0,250,37);fill(128);rect(width-33,-1,33,33);textSize(32);fill(0);text("Build",16,32);textSize(12);text("Day #"+dayCount+", actions left: "+movesLeft,96,16);text("~"+s.substr(0,1).toUpperCase()+s.substr(1)+"~",112,32);textSize(18);text("Selected tile:",256,22);render_selected_tile(width-16,16);g_ConstructionManager.draw();};
var render_tutorial_spells = function()
{
    if(g_TutorialProgress.spells<0){return;}
    draw_smiley_face(50,240);stroke(0);fill(255);rect(80,192,240,96,6);textSize(16);fill(0);var textX=90,textY=[214,234,254,274];
    switch(g_TutorialProgress.spells)
    {
    case 0:
        text("This menu is for casting spells.",textX,textY[0]);
        text("Spells need 3 things.  First,",textX,textY[1]);
        text("each spell has a mana cost.",textX,textY[2]);
        break;
    case 1:
        text("Second, each spell can only be",textX,textY[0]+10);
        text("cast on a particular tile type.",textX,textY[1]+10);
        break;
    case 2:
        text("The color of the bar tells you",textX,textY[0]);
        text("which type of tile the spell",textX,textY[1]);
        text("requires.",textX,textY[2]);
        break;
    case 3:
        text("The third condition is different",textX,textY[0]);
        text("for different spells; click the",textX,textY[1]);
        text("\"Info\" tab to see it.",textX,textY[2]);
        break;
    case 4:
        text("One more thing: check out the",textX,textY[0]);
        text("\"Hints\" tab to see spell-related",textX,textY[1]);
        text("hints for spells you unlocked.",textX,textY[2]);
    }
    text(g_TutorialProgress.spells+1+" of 5",textX+90,textY[3]);
    noFill();
};
var render_spells_screen=function(){
var angleDeg=4*globalCyclicAnimation,yDraw=64-allSpells.scrollOffset,spellHighlightColor=allSpells.goldenAppleEaten?color(255,255,255):color(255,255,0),spellNotHighlightColor=allSpells.goldenAppleEaten?color(255,255,128):color(128,128,0);fill(0,0,0);textSize(12);
if(allSpells.subscreen!==2&&g_ResourcePane.goldenAppleVisible){if(goldenAppleResource>=1&&!allSpells.goldenAppleEaten){stroke(0,0,0);fill((mouseX>=16&&mouseX<48&&mouseY>=yDraw+16&&mouseY<yDraw+48&&mouseY>37&&mouseY<height-86)?color(255,255,255):color(255,255,128));rect(16,yDraw+16,32,32);}else if(allSpells.goldenAppleEaten){stroke(0,0,0);fill(255,255,0);ellipse(32,yDraw+32,32,32);line(32-8*sqrt(3),yDraw+24,31+8*sqrt(3),yDraw+24);line(32-8*sqrt(3),yDraw+40,31+8*sqrt(3),yDraw+40);fill(0,0,0);textAlign(CENTER,CENTER);text("YUM",32,yDraw+32);textAlign(LEFT,BASELINE);}else{noStroke();fill(224,224,224);rect(16,yDraw+16,32,32);}noStroke();fill(255,255,0);rect(124,yDraw-12-2*allSpells.goldenAppleEaten,280,12+4*allSpells.goldenAppleEaten);fill(0,0,0);text("Eat a Golden Apple",16,yDraw);yDraw+=16;if(allSpells.subscreen===1){text("Golden apple has magic-amplifying properties & therefore it is great for magic users.  After eating one, some of your powers increase temporarily.",64,yDraw,300,height);yDraw+=64;}else{text("Doubles the duration of the next spell you manually cast.",64,yDraw);yDraw+=16;text("It counts as "+g_PersistentData.get_upgrade_effect("GC")+" casts for the cast stat.",64,yDraw);yDraw+=16;text("Costs 1 golden apple.",64,yDraw);yDraw+=32;}}
if(allSpells.subscreen!==2){allSpells.forEach(function(spell){
    if(!spell.unlockFunc()){return;}var lith=spell.name==="Stonemover"&&g_TechnologyManager.by_name("Lithomancy").researched,angle=(g_TechnologyManager.by_name("Dark Chronomancy").researched&&allSpells.by_name("Dark Attunement").durationLeft>0&&spell.name!=="Dark Attunement"&&!lith)?163:angleDeg;if(!lith&&!canCastSpells){return;}var canCast=spell.get_can_cast();if(canCast){stroke(0);fill((mouseX>=16&&mouseX<48&&mouseY>=yDraw+16&&mouseY<yDraw+48&&mouseY>37&&mouseY<height-86)?spellHighlightColor:spellNotHighlightColor);}else{noStroke();fill(224,224,224);}if(spell.durationLeft===0||(canCast&&spell.recastable)){rect(16,yDraw+16,32,32);}if(spell.durationLeft>0){stroke(0,0,0);noFill();if(!canCast){ellipse(32,yDraw+32,32,32);}line(32,yDraw+32,32+16*cos(angle),yDraw+32+16*sin(angle));fill(0,0,0);textAlign(CENTER,CENTER);textSize(18+14*lith);text(lith?"∞":spell.durationLeft,32,yDraw+32);textAlign(LEFT,BASELINE);}fill(0,0,0);textSize(12);text(spell.name,16,yDraw);draw_spell_screen_bar(spell,16+textWidth(spell.name+" "),yDraw,angle);yDraw+=16;if(allSpells.subscreen===1){text(spell.extendedDescription,64,yDraw,300,height);yDraw+=64;}else{var mText="Cost: "+adjust_cost_text(spell.manaCost,allSpells.spellCostMulti,1)+(allSpells.payUsingFire?" flame orb":" mana");text(spell.description,64,yDraw);yDraw+=16;text("Duration: "+(lith?"5 (∞) days":spell.duration+(allSpells.goldenAppleEaten?" * 2 days":" days")),64,yDraw);text(mText,192,yDraw);yDraw+=16;if(spell.castStat){text("Times cast: "+spell.castStat,64,yDraw);}if(lith){text("Remaining duration: ∞ days",192,yDraw);}else if(spell.durationLeft>0){text("Remaining duration: "+spell.durationLeft+" day"+(spell.durationLeft===1?"":"s"),192,yDraw);}
    if(g_TutorialProgress.spells>-1){stroke(255,0,0);noFill();
    switch(g_TutorialProgress.spells)
    {
        case 0:
    ellipse(192+textWidth(mText)/2,yDraw-20,100,30);break;
    case 1:case 2:rect(12+textWidth(spell.name+" "),yDraw-64,263,20,6);
    }}
    yDraw+=32;}});}
    if(allSpells.subscreen===2){fill(0,0,0);text("Unlocked hints: "+spellHints.length,16,74);textSize(16);textAlign(CENTER,CENTER);var nA=(g_ArtifactManager.by_abbreviation("MT").level===0)+(g_ArtifactManager.by_abbreviation("SC").level===0),disp=nA>0&&allBuildings[0].upgradeLevel>3;text(spellHints.get_str(),width/2,(height-46)/2-32*disp);if(disp){text("There "+(nA===1?"is":"are")+" still "+nA+" Artifact"+(nA===1?"":"s")+" left to find related to spells.",width/2,(height-46)/2+32*disp);}textAlign(LEFT,BASELINE);}else if(yDraw===64-allSpells.scrollOffset||!canCastSpells){fill(0,0,0);if(!canCastSpells){fill(128+127*sin(6*globalCyclicAnimation),0,0);}textSize(16);textAlign(CENTER,CENTER);text(canCastSpells?"No spells are\ncurrently available.":"Right now you can't\ncast spells because\nyou're feeling unwell.",width/2,(height-46)/2);textAlign(LEFT,BASELINE);}stroke(0,0,0);fill(255,255,255);rect(-5,-5,width+10,42);line(250,0,250,37);fill(128,128,128);rect(width-33,-1,33,33);stroke(0,0,0);if(mouseX>=4&&mouseY>=3&&mouseX<82&&mouseY<34){fill(255,255,128);}else{fill(255,255,0);}rect(4,3,78,31);if(mouseX>=86&&mouseY>=3&&mouseX<164&&mouseY<34){fill(128,255,255);}else{fill(0,255,255);}rect(86,3,78,31);if(mouseX>=168&&mouseY>=3&&mouseX<246&&mouseY<34){fill(192,255,192);}else{fill(128,255,128);}rect(168,3,78,31);textSize(24);fill(0,0,0);textAlign(CENTER,CENTER);text("Spells",43,18.5);text("Info",125,18.5);text("Hints",207,18.5);textAlign(LEFT,BASELINE);noFill();rect(6+82*allSpells.subscreen,5,74,27);if(selectedTile>-1){if(allTiles[selectedTile].claimed){textSize(18);text("Selected tile:",256,22);}else{textSize(12);text("You can only cast",256,16);text("on claimed tiles.",256,32);}render_selected_tile(width-16,16);}else{textSize(12);text("Select a tile to",256,16);text("cast a spell on it.",256,32);}if(allSpells.subscreen!==2){allSpells.scroll_offset_update();}
    if(g_TutorialProgress.spells>-1){stroke(0);fill(255,0,0);switch(g_TutorialProgress.spells){case 3:triangle(100,60,125,30,150,60);break;case 4:triangle(182,60,207,30,229,60);}}
};
var render_terraforming_screen_frontside = function()
{
    var actualTileType=allTiles[selectedTile].tileType,level=allBuildings[building_on_tile(selectedTile,BT_TERRAFORMER)].upgradeLevel,s=season_to_string();stroke(0);fill(255);rect(-5,-2,width+10,42);fill(0);textSize(12);text("Day #"+dayCount+", actions left: "+movesLeft,230,16);text("~"+s.substr(0,1).toUpperCase()+s.substr(1)+"~",246,32);textSize(32);fill(0);text("Terraforming",16,32);render_selected_tile(width/2,80);allTiles[selectedTile].tileType=TT_PLAINS;render_selected_tile(width*1/8,176);allTiles[selectedTile].tileType=TT_DESERT;render_selected_tile(width*3/8,176);allTiles[selectedTile].tileType=TT_LAKE;render_selected_tile(width*5/8,176);allTiles[selectedTile].tileType=TT_SWAMP;render_selected_tile(width*7/8,176);allTiles[selectedTile].tileType=actualTileType;noFill();stroke(0);line(width/2-14,98,width/2-14,120);line(width/8-0.5,120,width*1/8-0.5,157);line(width/8-0.5,120,width/2-14,120);line(width/2-5,98,width/2-5,129);line(width*3/8-0.5,129,width*3/8-0.5,157);line(width*3/8-0.5,129,width/2-5,129);line(width/2+4,98,width/2+4,129);line(width*5/8-0.5,129,width*5/8-0.5,157);line(width*5/8-0.5,129,width/2+4,129);line(width/2+13,98,width/2+13,120);line(width*7/8-0.5,120,width*7/8-0.5,157);line(width*7/8-0.5,120,width/2+13,120);rect(width/2-19,61,37,37);if(actualTileType===TT_PLAINS){fill(128,128,128,192);}else{if(!can_terraform_selected_tile(TT_PLAINS)){fill(255,0,0,192);}else{noFill();}}rect(width/8-19,157,37,37);if(actualTileType===TT_DESERT){fill(128,128,128,192);}else{if(!can_terraform_selected_tile(TT_DESERT)){fill(255,0,0,192);}else{noFill();}}rect(width*3/8-19,157,37,37);if(actualTileType===TT_LAKE){fill(128,128,128,192);}else{if(!can_terraform_selected_tile(TT_LAKE)){fill(255,0,0,192);}else{noFill();}}rect(width*5/8-19,157,37,37);if(actualTileType===TT_SWAMP){fill(128,128,128,192);}else{if(!can_terraform_selected_tile(TT_SWAMP)){fill(255,0,0,192);}else{noFill();}}rect(width*7/8-19,157,37,37);textSize(12);textAlign(CENTER,BASELINE);
    if( mouseX >= width * 1 / 8 - 16 && mouseX < width * 1 / 8 + 16 && mouseY >= 160 && mouseY < 192 )
    {
        if( actualTileType === TT_PLAINS )
        {
            fill( 0, 0, 0 );
            text( "The tile already has that type.", width / 2, 216 );
        }
        else if( !can_terraform_selected_tile( TT_PLAINS ))
        {
            fill( 0, 0, 0 );
            text( "Something is preventing this operation.", width / 2, 216 );
            text( "Most likely, a building is incompatible with this tile type.", width / 2, 232 );
        }
        else
        {
            noFill();
            rect( width * 1 / 8 - 22, 154, 43, 43 );
            fill( 0, 0, 0 );
            text( "Cost to terraform:", width / 2, 216 );
            text(g_ResourcePane.formatSI(terraformSpiceCost(level))+" spice, "+g_ResourcePane.formatSI(terraformManaCost(level))+" mana, "+g_ResourcePane.formatSI(terraformFlameOrbCost(level))+" flame orb (common to all)",width/2,232);
            text(g_ResourcePane.formatSI(terraformSpecificCost(level))+ " food (specific to plains)", width / 2, 248 );
            textSize( 18 );
            if( can_afford_terraforming( TT_PLAINS, level ))
            {
                fill( 0, 128, 0 );
                text( "Click to terraform", width / 2, 270 );
            }
            else
            {
                fill( 128, 0, 0 );
                text( "Cannot afford.", width / 2, 270 );
            }
        }
    }
    if( mouseX >= width * 3 / 8 - 16 && mouseX < width * 3 / 8 + 16 && mouseY >= 160 && mouseY < 192 )
    {
        if( actualTileType === TT_DESERT )
        {
            fill( 0, 0, 0 );
            text( "The tile already has that type.", width / 2, 216 );
        }
        else if( !can_terraform_selected_tile( TT_DESERT ))
        {
            fill( 0, 0, 0 );
            text( "Something is preventing this operation.", width / 2, 216 );
            text( "Most likely, a building is incompatible with this tile type.", width / 2, 232 );
        }
        else
        {
            noFill();
            rect( width * 3 / 8 - 22, 154, 43, 43 );
            fill( 0, 0, 0 );
            text( "Cost to terraform:", width / 2, 216 );
            text(g_ResourcePane.formatSI(terraformSpiceCost(level))+ " spice, "+g_ResourcePane.formatSI(terraformManaCost(level))+" mana, "+g_ResourcePane.formatSI(terraformFlameOrbCost(level))+" flame orb (common to all)",width/2,232);
            text(g_ResourcePane.formatSI(terraformSpecificCost(level))+ " stone (specific to desert)", width / 2, 248 );
            textSize( 18 );
            if( can_afford_terraforming( TT_DESERT, level ))
            {
                fill( 0, 128, 0 );
                text( "Click to terraform", width / 2, 270 );
            }
            else
            {
                fill( 128, 0, 0 );
                text( "Cannot afford.", width / 2, 270 );
            }
        }
    }
    if( mouseX >= width * 5 / 8 - 16 && mouseX < width * 5 / 8 + 16 && mouseY >= 160 && mouseY < 192 )
    {
        if( actualTileType === TT_LAKE )
        {
            fill( 0, 0, 0 );
            text( "The tile already has that type.", width / 2, 216 );
        }
        else if( !can_terraform_selected_tile( TT_LAKE ))
        {
            fill( 0, 0, 0 );
            text( "Something is preventing this operation.", width / 2, 216 );
            text( "Most likely, a building is incompatible with this tile type.", width / 2, 232 );
        }
        else
        {
            noFill();
            rect( width * 5 / 8 - 22, 154, 43, 43 );
            fill( 0, 0, 0 );
            text( "Cost to terraform:", width / 2, 216 );
            text(g_ResourcePane.formatSI(terraformSpiceCost(level))+" spice, "+g_ResourcePane.formatSI(terraformManaCost(level))+" mana, "+g_ResourcePane.formatSI(terraformFlameOrbCost(level))+" flame orb (common to all)",width/2,232);
            text(g_ResourcePane.formatSI(terraformSpecificCost(level))+ " pearl (specific to lake)", width / 2, 248 );
            textSize( 18 );
            if( can_afford_terraforming( TT_LAKE, level ))
            {
                fill( 0, 128, 0 );
                text( "Click to terraform", width / 2, 270 );
            }
            else
            {
                fill( 128, 0, 0 );
                text( "Cannot afford.", width / 2, 270 );
            }
        }
    
        }
    if( mouseX >= width * 7 / 8 - 16 && mouseX < width * 7 / 8 + 16 && mouseY >= 160 && mouseY < 192 )
    {
        if( actualTileType === TT_SWAMP )
        {
            fill( 0, 0, 0 );
            text( "The tile already has that type.", width / 2, 216 );
        }
        else if( !can_terraform_selected_tile( TT_SWAMP ))
        {
            fill( 0, 0, 0 );
            text( "Something is preventing this operation.", width / 2, 216 );
            text( "Most likely, a building is incompatible with this tile type.", width / 2, 232 );
        }
        else
        {
            noFill();
            rect( width * 7 / 8 - 22, 154, 43, 43 );
            fill( 0, 0, 0 );
            text( "Cost to terraform:", width / 2, 216 );
            text(g_ResourcePane.formatSI(terraformSpiceCost(level))+" spice, "+g_ResourcePane.formatSI(terraformManaCost(level))+" mana, "+g_ResourcePane.formatSI(terraformFlameOrbCost(level))+" flame orb (common to all)",width/2,232);
            text(g_ResourcePane.formatSI(terraformSpecificCost(level))+ " mana (specific to swamp)", width / 2, 248 );
            textSize( 18 );
            if( can_afford_terraforming( TT_SWAMP, level ))
            {
                fill( 0, 128, 0 );
                text( "Click to terraform", width / 2, 270 );
            }
            else
            {
                fill( 128, 0, 0 );
                text( "Cannot afford.", width / 2, 270 );
            }
        }
    }
    textAlign( LEFT, BASELINE );
};
var render_terraforming_screen_backside = function()
{
    var actualTileType=allTiles[selectedTile].backsideTileType,level=allBuildings[building_on_tile(selectedTile,BT_BACKSIDE_TERRAFORMER)].upgradeLevel,s=season_to_string();
stroke(0);fill(255);rect(-5,-2,width+10,42);fill(0);textSize(12);text("Day #"+dayCount+", actions left: "+movesLeft,230,16);text("~"+s.substr(0,1).toUpperCase()+s.substr(1)+"~",246,32);textSize(32);fill(0,0,0);text("Terraforming",16,32);render_selected_tile(width/2,80);allTiles[selectedTile].backsideTileType=TT_MITHRIL;render_selected_tile(width*1/8,176);allTiles[selectedTile].backsideTileType=TT_LAVA;render_selected_tile(width*3/8,176);allTiles[selectedTile].backsideTileType=TT_WASTELAND;render_selected_tile(width*5/8,176);allTiles[selectedTile].backsideTileType=TT_CYBERMIND;render_selected_tile(width*7/8,176);if(allBuildings[0].upgradeLevel>=3&&allTiles[selectedTile].hasTrainPowerLine){draw_cybermind_power_line_terraforming_thing();}allTiles[selectedTile].backsideTileType=actualTileType;noFill();stroke(0,0,0);line(width/2-14,98,width/2-14,120);line(width*1/8-0.5,120,width*1/8-0.5,157);line(width*1/8-0.5,120,width/2-14,120);line(width/2-5,98,width/2-5,129);line(width*3/8-0.5,129,width*3/8-0.5,157);line(width*3/8-0.5,129,width/2-5,129);line(width/2+4,98,width/2+4,129);line(width*5/8-0.5,129,width*5/8-0.5,157);line(width*5/8-0.5,129,width/2+4,129);line(width/2+13,98,width/2+13,120);line(width*7/8-0.5,120,width*7/8-0.5,157);line(width*7/8-0.5,120,width/2+13,120);
    
    //Draw rectangles around each of the 5 tiles drawn above:
    rect( width / 2 - 19, 61, 37, 37 );
    if( actualTileType === TT_MITHRIL )
    {
        fill( 128, 128, 128, 192 );
    }
    else
    {
        if( !can_terraform_selected_tile( TT_MITHRIL ))
        {
            fill( 255, 0, 0, 192 );
        }
        else
        {
            noFill();
        }
    }
    rect( width * 1 / 8 - 19, 157, 37, 37 );
    if( actualTileType === TT_LAVA )
    {
        fill( 128, 128, 128, 192 );
    }
    else
    {
        if( !can_terraform_selected_tile( TT_LAVA ))
        {
            fill( 255, 0, 0, 192 );
        }
        else
        {
            noFill();
        }
    }
    rect( width * 3 / 8 - 19, 157, 37, 37 );
    if( actualTileType === TT_WASTELAND )
    {
        fill( 128, 128, 128, 192 );
    }
    else
    {
        if( !can_terraform_selected_tile( TT_WASTELAND ))
        {
            fill( 255, 0, 0, 192 );
        }
        else
        {
            noFill();
        }
    }
    rect( width * 5 / 8 - 19, 157, 37, 37 );
    if( actualTileType === TT_CYBERMIND )
    {
        fill( 128, 128, 128, 192 );
    }
    else
    {
        if( !can_terraform_selected_tile( TT_CYBERMIND ))
        {
            fill( 255, 0, 0, 192 );
        }
        else
        {
            noFill();
        }
    }
    rect( width * 7 / 8 - 19, 157, 37, 37 );
    
    //Now, if the player hovers over a tile type, highlight it:
    textSize( 12 );
    textAlign( CENTER, BASELINE );
    if( mouseX >= width * 1 / 8 - 16 && mouseX < width * 1 / 8 + 16 && mouseY >= 160 && mouseY < 192 )
    {
        if( actualTileType === TT_MITHRIL )
        {
            fill( 0, 0, 0 );
            text( "The tile already has that type.", width / 2, 216 );
        }
        else if( !can_terraform_selected_tile( TT_MITHRIL ))
        {
            fill( 0, 0, 0 );
            text( "Something is preventing this operation.", width / 2, 216 );
            text( "Most likely, a building is incompatible with this tile type.", width / 2, 232 );
        }
        else
        {
            noFill();
            rect( width * 1 / 8 - 22, 154, 43, 43 );
            fill( 0, 0, 0 );
            text( "Cost to terraform:", width / 2, 216 );
            text(g_ResourcePane.formatSI(terraformSpiceCost(level))+ " spice, " +g_ResourcePane.formatSI(terraformManaCost(level))+ " mana, " +g_ResourcePane.formatSI(terraformFlameOrbCost(level))+ " flame orb (common to all)", width / 2, 232 );
            text(g_ResourcePane.formatSI(terraformSpecificCost(level))+ " food (specific to mithril)", width / 2, 248 );
            textSize( 18 );
            if( can_afford_terraforming( TT_MITHRIL, level ))
            {
                fill( 0, 128, 0 );
                text( "Click to terraform", width / 2, 270 );
            }
            else
            {
                fill( 128, 0, 0 );
                text( "Cannot afford.", width / 2, 270 );
            }
        }
    }
    if( mouseX >= width * 3 / 8 - 16 && mouseX < width * 3 / 8 + 16 && mouseY >= 160 && mouseY < 192 )
    {
        if( actualTileType === TT_LAVA )
        {
            fill( 0, 0, 0 );
            text( "The tile already has that type.", width / 2, 216 );
        }
        else if( !can_terraform_selected_tile( TT_LAVA ))
        {
            fill( 0, 0, 0 );
            text( "Something is preventing this operation.", width / 2, 216 );
            text( "Most likely, a building is incompatible with this tile type.", width / 2, 232 );
        }
        else
        {
            noFill();
            rect( width * 3 / 8 - 22, 154, 43, 43 );
            fill( 0, 0, 0 );
            text( "Cost to terraform:", width / 2, 216 );
            text(g_ResourcePane.formatSI(terraformSpiceCost(level))+ " spice, " +g_ResourcePane.formatSI(terraformManaCost(level))+ " mana, " +g_ResourcePane.formatSI(terraformFlameOrbCost(level))+ " flame orb (common to all)", width / 2, 232 );
            text(g_ResourcePane.formatSI(terraformSpecificCost(level))+ " stone (specific to lava)", width / 2, 248 );
            textSize( 18 );
            if( can_afford_terraforming( TT_DESERT, level ))
            {
                fill( 0, 128, 0 );
                text( "Click to terraform", width / 2, 270 );
            }
            else
            {
                fill( 128, 0, 0 );
                text( "Cannot afford.", width / 2, 270 );
            }
        }
    }
    if( mouseX >= width * 5 / 8 - 16 && mouseX < width * 5 / 8 + 16 && mouseY >= 160 && mouseY < 192 )
    {
        if( actualTileType === TT_WASTELAND )
        {
            fill( 0, 0, 0 );
            text( "The tile already has that type.", width / 2, 216 );
        }
        else if( !can_terraform_selected_tile( TT_WASTELAND ))
        {
            fill( 0, 0, 0 );
            text( "Something is preventing this operation.", width / 2, 216 );
            text( "Most likely, a building is incompatible with this tile type.", width / 2, 232 );
        }
        else
        {
            noFill();
            rect( width * 5 / 8 - 22, 154, 43, 43 );
            fill( 0, 0, 0 );
            text( "Cost to terraform:", width / 2, 216 );
            text(g_ResourcePane.formatSI(terraformSpiceCost(level))+ " spice, " +g_ResourcePane.formatSI(terraformManaCost(level))+ " mana, " +g_ResourcePane.formatSI(terraformFlameOrbCost(level))+ " flame orb (common to all)", width / 2, 232 );
            text(g_ResourcePane.formatSI(terraformSpecificCost(level))+ " pearl (specific to wasteland)", width / 2, 248 );
            textSize( 18 );
            if( can_afford_terraforming( TT_LAKE, level ))
            {
                fill( 0, 128, 0 );
                text( "Click to terraform", width / 2, 270 );
            }
            else
            {
                fill( 128, 0, 0 );
                text( "Cannot afford.", width / 2, 270 );
            }
        }
    }
    if( mouseX >= width * 7 / 8 - 16 && mouseX < width * 7 / 8 + 16 && mouseY >= 160 && mouseY < 192 )
    {
        if( actualTileType === TT_CYBERMIND )
        {
            fill( 0, 0, 0 );
            text( "The tile already has that type.", width / 2, 216 );
        }
        else if( !can_terraform_selected_tile( TT_CYBERMIND ))
        {
            fill( 0, 0, 0 );
            text( "Something is preventing this operation.", width / 2, 216 );
            text( "Most likely, a building is incompatible with this tile type.", width / 2, 232 );
        }
        else
        {
            noFill();
            rect( width * 7 / 8 - 22, 154, 43, 43 );
            fill( 0, 0, 0 );
            text( "Cost to terraform:", width / 2, 216 );
            text(g_ResourcePane.formatSI(terraformSpiceCost(level))+ " spice, " +g_ResourcePane.formatSI(terraformManaCost(level))+ " mana, " +g_ResourcePane.formatSI(terraformFlameOrbCost(level))+ " flame orb (common to all)", width / 2, 232 );
            text(g_ResourcePane.formatSI(terraformSpecificCost(level))+ " mana (specific to Cybermind)", width / 2, 248 );
            textSize( 18 );
            if( can_afford_terraforming( TT_CYBERMIND, level ))
            {
                fill( 0, 128, 0 );
                text( "Click to terraform", width / 2, 270 );
            }
            else
            {
                fill( 128, 0, 0 );
                text( "Cannot afford.", width / 2, 270 );
            }
            if( allBuildings[ 0 ].upgradeLevel >= 3 && allTiles[ selectedTile ].hasTrainPowerLine )
            {
                fill( 0, 0, 0 );
                textSize( 12 );
                text( "Will improve bonuses from Cybermind trade.", 180, 308 );
            }
        }
    }
    textAlign( LEFT, BASELINE );
};
var render_terraforming_confirm_screen=function(){
background(255,192,192);fill(0,0,0);textSize(24);textAlign(CENTER,BASELINE);text("Are you sure?",width/2,100);textSize(12);if(currentScreen==="terraforming-confirm-camels"){text("There are camels on this tile.  If you terraform now, it may upset the camel government.  Perhaps you could wait for the camels to leave this tile?",(width-300)/2,140,300,300);}if(currentScreen==="terraforming-confirm-fish"){text("There are fish on this tile.  If you terraform now, they will die & you will not be able to harvest them for food.",(width-300)/2,140,300,300);}if(currentScreen==="terraforming-confirm-turtle"){text("There is a turtle on this tile.  If you terraform now, it will die & you will not be able to feed it to get bonuses.",(width-300)/2,140,300,300);}textAlign(LEFT,BASELINE);};
var render_enchanting_screen = function()
{
    var level=building_level_on_tile(selectedTile,BT_ENCHANTING_TABLE),hovered=!1,tabStr="",manaCostMulti=(level>=3)?1.3:1,mithrilMultiFromLvl5=1+4*(level===5),ultimBioOrbMulti=1+0.01*enchantingUltimBioOrbPercent,epm=enchantingPriceMulti;
    stroke(0);textSize(12);textAlign(CENTER,CENTER);for(var i=0;i<6;i+=1){if(i===5){fill(0,255,255);hovered=mouseX>=4&&mouseX<52&&mouseY>=4+50*i&&mouseY<52+50*i;if(hovered){fill(128,255,255);}tabStr="Multis";}else if(i<level){if(i>1&&upkeepLastSatisfiedRatio<1){fill(128);hovered=!1;}else{fill(255,0,255);hovered=mouseX>=4&&mouseX<52&&mouseY>=4+50*i&&mouseY<52+50*i;if(hovered){fill(255,128,255);}}switch(i){case 0:tabStr="Flame\nOrb";break;case 1:tabStr="Mithril";break;case 2:tabStr="Bio-Orb";break;case 3:tabStr="Various";break;case 4:tabStr="Dark\nEnergy";break;default:tabStr="";}}else{fill(128);hovered=!1;tabStr="???";}rect(4,4+50*i,48,48);if(i===enchantingScreenSelection){noFill();rect(6,6+50*i,44,44);}fill(0);text(tabStr,28,28+50*i);}
    textAlign(CENTER, BASELINE);
    textSize(18);
    if(enchantingScreenSelection<level||enchantingScreenSelection===5)
    {
        line(57,38,width,38);
        line(57,40,width,40);
        var everythingMulti=enchantingTableSynergyMulti*enchantingProductMultiFromCyber*enchantingProductMultiFromTurtles*enchantingProductMultiFromFrosthour,baseBioOrb=1+2*(allBuildings[0].upgradeLevel>=4),baseFlameOrb=base_flame_orb_from_enchanting(),finalFlameOrbMulti=flameHeartMulti*dissipation()*everythingMulti,multiToMithril=mithrilEnchantingMultiFromSwamp*mithrilEnchantingMultiFromMines*mithrilMultiFromLvl5*lotsOfThingsMultiFromTerraformers;
        switch(enchantingScreenSelection)
        {
        case 0: //Flame Orb:
            text("Pearl → Flame Orb",width/2+26,32);
            textSize(12);
            textAlign(LEFT,BASELINE);
            text("Ingredients",110,64);
            text("MANA",70,80);
            text("4.000 (base)",70,96);
            text("*"+g_ResourcePane.formatSI(manaCostMulti*epm)+" (multi)",70,112);
            text("="+g_ResourcePane.formatSI(4*manaCostMulti*epm)+" (final)",70,128);
            text("PEARL",160,80);
            text("2.000 (base)",160,96);
            text("*"+g_ResourcePane.formatSI(enchantingPearlCostMulti*epm)+" (multi)",160,112);
            text("="+g_ResourcePane.formatSI(2*enchantingPearlCostMulti*epm)+" (final)",160,128);
            text("Product",290,64);
            text("FLAME ORB",280,80);
            text(g_ResourcePane.formatSI(baseFlameOrb)+" (base)",280,96);
            text("*"+g_ResourcePane.formatSI(finalFlameOrbMulti)+" (multi)",280,112);
            text("="+g_ResourcePane.formatSI(baseFlameOrb*finalFlameOrbMulti)+" (final)",280,128);
            draw_enchanting_button_silhouettes();
            break;
        case 1: //Mithril:
            text("Stone → Mithril",width/2+26,32);
            textSize(12);
            textAlign(LEFT,BASELINE);
            text("Ingredients",200,64);
            text("MANA",70,80);
            text("50.000 (base)",70,96);
            text("*"+g_ResourcePane.formatSI(manaCostMulti*epm)+" (multi)",70,112);
            text("="+g_ResourcePane.formatSI(50*manaCostMulti*epm)+" (final)",70,128);
            text("STONE",175,80);
            text("50.000 (base)",175,96);
            text("*"+g_ResourcePane.formatSI(epm)+" (multi)",175,112);
            text("="+g_ResourcePane.formatSI(50*epm)+" (final)",175,128);
            text("FLAME ORB",280,80);
            text("5.000 (base)",280,96);
            text("*"+g_ResourcePane.formatSI(epm)+" (multi)",280,112);
            text("="+g_ResourcePane.formatSI(5*epm)+" (final)",280,128);
            text("Product",200,144);
            text("MITHRIL",190,160);
            text("1.000 (base)",190,176);
            text("*"+g_ResourcePane.formatSI(multiToMithril*everythingMulti)+" (multi)",190,192);
            text("="+g_ResourcePane.formatSI(1*multiToMithril*everythingMulti)+" (final)",190,208);
            draw_enchanting_button_silhouettes();
            break;
        case 2: //Bio-Orb:
var spiceBase=g_PersistentData.get_upgrade_effect("SB");
text("Flame Orb → Bio-Orb",width/2+26,32);
if(upkeepLastSatisfiedRatio<1){text("Iron upkeep costs not satisfied!",width/2+26,160);break;}
textSize(12);
textAlign(LEFT,BASELINE);
if(spiceBase>0)
{text("Ingredients",110,64);text("FLAME ORB",70,80);text("50.000 (base)",70,96);text("*"+g_ResourcePane.formatSI(epm)+" (multi)",70,112);text("="+g_ResourcePane.formatSI(50*epm)+" (final)",70,128);text("SPICE",160,80);text(g_ResourcePane.formatSI(spiceBase)+" (base)",160,96);text("*"+g_ResourcePane.formatSI(epm)+" (multi)",160,112);text("="+g_ResourcePane.formatSI(spiceBase*epm)+" (final)",160,128);}
else
{text("Ingredient",130,64);text("FLAME ORB",130,80);text("50.000 (base)",130,96);text("*"+g_ResourcePane.formatSI(epm)+" (multi)",130,112);text("="+g_ResourcePane.formatSI(50*epm)+" (final)",130,128);}
text("Product",290,64);
text("BIO-ORB",280,80);
text(g_ResourcePane.formatSI(baseBioOrb)+" (base)",280,96);
text("*"+g_ResourcePane.formatSI(ultimBioOrbMulti*everythingMulti)+" (multi)",280,112);
text("="+g_ResourcePane.formatSI(baseBioOrb*ultimBioOrbMulti*everythingMulti)+" (final)",280,128);
draw_enchanting_button_silhouettes();
            break;
        case 3: //Various things:
text("Golden Apple → Various Things",width/2+26,32);
if(upkeepLastSatisfiedRatio<1){text("Iron upkeep costs not satisfied!",width/2+26,160);break;}
textSize(12);
textAlign(LEFT,BASELINE);
text("Ingredients",180,64);
text("GADOLINIUM",100,80);
text("5.000 (base)",100,96);
text("*"+g_ResourcePane.formatSI(epm)+" (multi)",100,112);
text("="+g_ResourcePane.formatSI(5*epm)+" (final)",100,128);
text("GOLDEN APPLE",250,80);
text("1.000 (base)",250,96);
text("*"+g_ResourcePane.formatSI(epm)+" (multi)",250,112);
text("="+g_ResourcePane.formatSI(1*epm)+" (final)",250,128);
text("Products",200,144);
text("FLAME ORB",70,160);
text(g_ResourcePane.formatSI(baseFlameOrb)+" (base)",70,176);
text("*"+g_ResourcePane.formatSI(finalFlameOrbMulti)+" (multi)",70,192);
text("="+g_ResourcePane.formatSI(baseFlameOrb*finalFlameOrbMulti)+" (final)",70,208);
text("MITHRIL",180,160);
text("2.000 (base)",180,176);
text("*"+g_ResourcePane.formatSI(multiToMithril*everythingMulti)+" (multi)",180,192);
text("="+g_ResourcePane.formatSI(2*multiToMithril*everythingMulti)+" (final)",180,208);
text("BIO-ORB",290,160);
text(g_ResourcePane.formatSI(baseBioOrb)+" (base)",290,176);
text("*"+g_ResourcePane.formatSI(ultimBioOrbMulti*everythingMulti)+" (multi)",290,192);
text("="+g_ResourcePane.formatSI(baseBioOrb*ultimBioOrbMulti*everythingMulti)+" (final)",290,208);
draw_enchanting_button_silhouettes();
		    break;
		case 4://Dark energy
text("Mana → Dark Energy",width/2+26,32);
if(upkeepLastSatisfiedRatio<1){text("Iron upkeep costs not satisfied!",width/2+26,160);break;}
textSize(12);
textAlign(LEFT,BASELINE);
text("Ingredient",110,64);
text("MANA",100,80);
text("1000.000 (base)",100,96);
text("*"+g_ResourcePane.formatSI(manaCostMulti*epm)+" (multi)",100,112);
text("="+g_ResourcePane.formatSI(1000*manaCostMulti*epm)+" (final)",100,128);
text("Product",260,64);
text("DARK ENERGY",250,80);
text("5.000 (base)",250,96);
text("*"+g_ResourcePane.formatSI(lotsOfThingsMultiFromTerraformers*everythingMulti)+" (multi)",250,112);
text("="+g_ResourcePane.formatSI(5*lotsOfThingsMultiFromTerraformers*everythingMulti)+" (final)",250,128);
draw_enchanting_button_silhouettes();
		    break;
        case 5: //Multis
            text("Multipliers for Enchanting", width/2+26, 32);
            textSize(12);
            textAlign(LEFT, BASELINE);
            var yDraw=64;
            if(enchantingProductMultiFromFrosthour!==1){text("Bonus products: "+(100*enchantingProductMultiFromFrosthour-100).toFixed(3)+"% (currently in "+season_to_string()+")",60,yDraw);yDraw+=16;}
            if(g_TechnologyManager.by_name("Enchanting Table Synergy").researched){text("Bonus products: "+(100*enchantingTableSynergyMulti-100).toFixed(3)+"% (each table boosts each other)",60,yDraw);yDraw+=16;}
            if(enchantingProductMultiFromCyber!==1){text("Bonus products: "+(100*enchantingProductMultiFromCyber-100).toFixed(3)+"% (from the Cybermind)",60,yDraw);yDraw+=16;}
            if(allCreatures.fedSeaTurtle>0){text("Bonus products from sea turtles: "+(100*enchantingProductMultiFromTurtles-100).toFixed(3)+"%",60,yDraw);yDraw+=16;}
            if(g_TechnologyManager.camel_technology_by_name("Flame Heart").researched){text("Bonus flame orb: "+(100*flameHeartMulti-100).toFixed(3)+"% (based on plains factor)",60,yDraw);yDraw+=16;}
            if(dissipation()!==1){text("Flame orb created: "+(100*dissipation()-100).toFixed(3)+"% (from thermal dissipation)",60,yDraw);yDraw+=16;}
            if(level>=2)
            {
                if(g_PersistentData.get_upgrade_times_purchased("MS")>0){text("Bonus mithril: "+(100*mithrilEnchantingMultiFromSwamp-100).toFixed(3)+"% (based on swamp factor)",60,yDraw);yDraw+=16;}
                if(mithrilEnchantingMultiFromMines!==1){text("Bonus mithril: "+(100*mithrilEnchantingMultiFromMines-100).toFixed(3)+"% (due to lvl. 2 mithril mines)",60,yDraw);yDraw+=16;}
                if(lotsOfThingsMultiFromTerraformers!==1){text("Bonus mithril: "+(100*lotsOfThingsMultiFromTerraformers-100).toFixed(3)+"% (due to terraformers lvl. 4+)",60,yDraw);yDraw+=16;}
            }
            if(mithrilMultiFromLvl5!==1){text("Bonus mithril: "+(100*mithrilMultiFromLvl5-100).toFixed(3)+"% (due to being lvl. 5)",60,yDraw);yDraw+=16;}
            if(level>=3&&ultimBioOrbMulti!==1){text("Bonus bio-orb: "+enchantingUltimBioOrbPercent.toFixed(3)+"% (based on farms & Ultimate Upgrades)",60,yDraw);yDraw+=16;}
            if(level===5&&lotsOfThingsMultiFromTerraformers!==1){text("Bonus dark energy: "+(100*lotsOfThingsMultiFromTerraformers-100).toFixed(3)+"% (due to terraformers lvl. 4+)",60,yDraw);yDraw+=16;}
            if(manaCostMulti!==1||enchantingPearlCostMulti!==1||epm!==1){line(60,yDraw-8,width,yDraw-8);yDraw+=8;}
            if(manaCostMulti!==1){text("Mana cost increase: "+(100*manaCostMulti-100).toFixed(3)+"% (due to being lvl. 3)",60,yDraw);yDraw+=16;}
            if(enchantingPearlCostMulti!==1){text("Pearl cost increase: "+(100*enchantingPearlCostMulti-100).toFixed(3)+"% (currently in "+g_PersistentData.currentChallenge+")",60,yDraw);yDraw+=16;}
            if(epm!==1){text("All prices increase: "+(100*epm-100).toFixed(3)+"% (currently in "+g_PersistentData.currentChallenge+")",60,yDraw);yDraw+=16;}
            if(yDraw===64){text("You have not unlocked any multiplicative bonuses yet.",60,yDraw);}
            break;
        }
    }
    else
    {
        text("Requires enchanting table lvl. " +(enchantingScreenSelection+1), width/2+26, 140);
    }
    
    textAlign(LEFT, BASELINE);
};
var render_IRS_screen = function()
{
fill(0);textSize(20);textAlign(CENTER,BASELINE);text("Interuniversal Rescue System",200,32);var irs=allBuildings[building_on_tile(selectedTile,BT_IRS)],irsData=allIRSDatas[irs.resourceProduction];irs.draw_at(width-16,16);stroke(0);line(0,56,width,56);fill(0);
textSize(12);
text("Current status: "+irsData.get_status_as_string(),200,48);
if(mouseX>=4&&mouseX<width/4-4&&mouseY>=60&&mouseY<92){fill(128,255,255);}
else{fill(0,255,255);}
rect(4,60,width/4-8,32);
if(irsData.openTab===1){rect(6,62,width/4-12,28);}
if(mouseX>=width/4+4&&mouseX<width/2-4&&mouseY>=60&&mouseY<92){fill(240,240,240);}
else{fill(224,224,224);}
rect(width/4+4,60,width/4-8,32);
if(irsData.openTab===2){rect(width/4+6,62,width/4-12,28);}
if(mouseX>=width/2+4&&mouseX<3*width/4-4&&mouseY>=60&&mouseY<92){fill(128,224,160);}
else{fill(0,192,64);}
rect(width/2+4,60,width/4-8,32);
if(irsData.openTab===3){rect(width/2+6,62,width/4-12,28);}
if(mouseX>=3*width/4+4&&mouseX<width-4&&mouseY>=60&&mouseY<92){fill(255,160,160);}
else{fill(255,64,64);}
rect(3*width/4+4,60,width/4-8,32);
if(irsData.openTab===4){rect(3*width/4+6,62,width/4-12,28);}
fill(0,0,0);
textAlign(CENTER,CENTER);
text("How to Use",width/8,72);
text("an IRS",width/8,84);
textSize(16);
text("Engine",3*width/8,76);
text("Rescue Pod",5*width/8,76);
text("Launch",7*width/8,76);
textAlign(LEFT,BASELINE);
textSize(12);
    switch(irsData.openTab)
    {
    case 1://How to use the IRS:
        stroke(0,0,0);
        fill(0,255,255);
        rect(4,96,width-8,height-186);
        fill(0,0,0);
        textSize(20);textAlign(CENTER,BASELINE);
        text("~Using an IRS~",width/2,134);textAlign(LEFT,BASELINE);
        line(142,136,180,136);
        line(192,136,257,136);
        textSize(12);
        text("1) To use an IRS, first assemble a dark energy engine & construct",24,152);text("a rescue pod (can only be done once per IRS).",38,168);
        text("2) Supply the pod with resources, then launch it.  Repeat this step",24,184);
        text("whenever the pod returns.",38,200);
        text("3) From time to time, you may need to repair the engine.",24,216);
        if(allBuildings.count_of_type(BT_IRS,2)){
        text("4) Upgraded IRSs have more options, but you can't change the",24,232);text("engine or rescue pod after it's built.",38,248);}
        break;
    case 2://Engine:
        stroke(0,0,0);
        fill(224,224,224);
        if(irsData.timeUntilReturn>-1)
        {
            rect(60,height/2-12,width-120,30);fill(0,0,0);textAlign(CENTER,CENTER);textSize(16);text("Wait for the pod to return first!",width/2,height/2+3);text("Current engine:",width/2,116);textSize(12);text("Type: "+irsData.get_engine_type_as_string(),width/2,132);textAlign(LEFT,BASELINE);break;
        }
        rect(4,96,width-8,height-186);
        fill(0,0,0);
        if(irsData.engineType===0)
        {
            textAlign(CENTER,BASELINE);textSize(16);
            text("Choose a dark energy engine to assemble:",width/2,116);textSize(12);
            if(irsData.level>4){text("Max level IRS: all hyperspeeds boosted by 50%",width/2,260);}
            noFill();rect(8,122,width/2-12,112);rect(width/2+4,122,width/2-12,112);textAlign(LEFT,BASELINE);
            text("Standard Dark Energy Engine",12,136);
            text((irsData.level>4?"Base h":"H")+"yperspeed: 1.0",20,152);
            text("All standard stats",20,168);
            text("Cost: 40 pearl, 40 flame orb,\n50 iron, 50 mithril, 5 gadolinium",20,184);
            if(pearlResource<40||flameOrbResource<40||ironResource<50||mithrilResource<50||gadoliniumResource<5)
            {
                noFill();
                rect(100,204,74,24);
                text("Can't afford!",104,220);
            }
            if(irs.upgradeLevel<3)
            {
                text("???",width/2+8,136);
                rect(width/2+96,204,74,24);
                text("Locked",width/2+100,220);
            }
            else
            {
                text("Fast Dark Energy Engine",width/2+8,136);
                text((irsData.level>4?"Base h":"H")+"yperspeed: 1.5",width/2+16,152);
                text("Capacity based on desert factor",width/2+16,168);
                text("Cost: 80 spice, 300 flame orb,\n250 iron, 500 mithril, 7500 mana",width/2+16,184);
                if(spiceResource<80||flameOrbResource<300||ironResource<250||mithrilResource<500||manaResource<7500)
                {
                    noFill();
                    rect(width/2+96,204,74,24);
                    text("Can't afford!",width/2+100,220);
                }
            }
        }
        else
        {
            textAlign(CENTER,BASELINE);
            textSize(16);
            text("Current engine stats:",width/2,116);
            textSize(12);
            text("Type: "+irsData.get_engine_type_as_string(),width/2,132);
            text("Condition: "+irsData.engineCondition+"%",width/2,148);
            text("Hyperspeed: "+irsData.get_engine_hyperspeed().toFixed(3)+(irsData.level>4?" (boosted by level 5 IRS)":""),width/2,164);
            text("Pod capacity bonus: "+g_ResourcePane.formatSI(100*irsData.get_engine_capacity_multi()-100)+"% ("+irsData.get_engine_capacity_explanation()+")",width/2,180);
            text("Fuel required: "+irsData.get_supplies_dark_energy_cost_string()+" dark energy"+(darkEnergyProductionMultiFromFrosthour===1?"":" (*"+darkEnergyProductionMultiFromFrosthour+" from frosthour)")+(foodColoringMulti===1?"":" (+"+(100*foodColoringMulti-100).toFixed(0)+"% by Artifacts)"),width/2,196);
            if(irsData.level>4&&irsData.engineCondition<100){text("Autorepair: 1% per day when not in use",width/2,212);}
            if(irsData.engineCondition<=90)
            {
                text("Repair cost: "+irsData.get_repair_iron_cost()+" iron, "+irsData.get_repair_mithril_cost()+" mithril",width/2,228);if(ironResource<irsData.get_repair_iron_cost()||mithrilResource<irsData.get_repair_mithril_cost()){stroke(0);noFill();rect(width/2-37,238,74,24);text("Can't afford!",width/2,254);}
            }else if(irsData.engineCondition<100){text("Repairs not needed yet.",width/2,228);}
            textAlign(LEFT,BASELINE);
        }
        break;
    case 3:
        stroke(0,0,0);
        fill(0,194,64);
        if(irsData.timeUntilReturn>-1)
        {
            rect(60,height/2-12,width-120,30);fill(0,0,0);textAlign(CENTER,CENTER);textSize(16);text("Wait for the pod to return first!",width/2,height/2+3);text("Current pod:",width/2,116);textSize(12);text("Type: "+irsData.get_rescue_pod_type_as_string(),width/2,132);textAlign(LEFT,BASELINE);break;
        }
        if(irsData.engineType===0)
        {
            rect(60,height/2-12,width-120,30);
            fill(0,0,0);
            textAlign(CENTER,CENTER);
            textSize(16);
            text("You must assemble an engine first!",width/2,height/2+3);
            textAlign(LEFT,BASELINE);
            break;
        }
        rect(4,96,width-8,height-186);
        fill(0,0,0);
        if(irsData.rescuePodType===0)
        {
            var wfStr=(g_Diplomacy.get_is_wifi_active()?"+1":"")+(irsData.level>4?"+10":"");
            textAlign(CENTER,BASELINE);
            textSize(16);
            text("Choose a pod to construct:",width/2,116);
            noFill();
            rect(8,122,width/2-12,96);
            rect(width/2+4,122,width/2-12,96);
            rect(50,222,260,84);
            rect(100,188,74,24);
            rect(width/2+96,188,74,24);
            rect(width/2+30,276,74,24);
            textAlign(LEFT,BASELINE);
            textSize(12);
            text("Small Rescue Pod",12,136);
            text("Capacity: 15"+wfStr,20,152);
            text("Cost: 100 mana, 80 iron,\n35 mithril, 30 pearl",20,168);
            if(manaResource<100||ironResource<80||mithrilResource<35||pearlResource<30)
            {text("Can't afford!",104,204);}
            if(irs.upgradeLevel===1)
            {text("???",width/2+8,136);text("Locked",width/2+100,204);}
            else
            {
                text("Large Rescue Pod",width/2+8,136);
                text("Capacity: 32"+wfStr,width/2+16,152);
                text("Cost: 1000 mana, 200 iron,\n100 mithril, 30 gadolinium",width/2+16,168);
                if(manaResource<1000||ironResource<200||mithrilResource<100||gadoliniumResource<30)
                {text("Can't afford!",width/2+100,204);}
            }
            if(irs.upgradeLevel<4)
            {text("???",54,236);text("Locked",width/2+34,292);}
            else
            {
                text("Lightweight Rescue Pod",54,236);
                text("Capacity: 38"+wfStr,62,252);
                text("Fuel discount based on swamp factor",64,268);
                text("Cost: 6500 mana, 1000 mithril,\n100 gadolinium, 90 bio-orb",62,284);
                if(manaResource<6500||mithrilResource<1000||gadoliniumResource<100||bioOrbResource<90)
                {text("Can't afford!",width/2+34,292);}
            }
            
        }
        else
        {
            var bStr="",capNum=irsData.get_rescue_pod_base_capacity(),techMulti=1+g_TechnologyManager.by_name("Double-Capacity Pods").researched;
            if(g_Diplomacy.get_is_wifi_active()){bStr=" (+1 from Wi-Fi)";capNum-=1;}
            if(irsData.level>4){bStr+=" (+10 from lvl. 5)";capNum-=10;}
            textAlign(CENTER,BASELINE);
            textSize(16);
            text("Current pod stats:",width/2,116);
            textSize(12);
            text("Type: "+irsData.get_rescue_pod_type_as_string(),width/2,132);
            text((irsData.get_engine_capacity_multi()*foodColoringMulti*techMulti===1?"C":"Base c")+"apacity: " +capNum+ " evacuees"+bStr,width/2,148);
            text("Fuel requirement discount: -"+abs(100-100*irsData.get_rescue_pod_fuel_multi()).toFixed(3)+"% ("+irsData.get_fuel_discount_explanation()+ ")",width/2,164);
            if(foodColoringMulti!==1){text("Capacity is increased "+(100*techMulti*foodColoringMulti-100).toFixed(0)+"% due to Artifacts"+(techMulti===1?"":" & tech")+".",width/2,180);}
            else if(techMulti!==1){text("Capacity is increased "+(100*techMulti-100).toFixed(0)+"% due to technologies.",width/2,180);}
            noFill();
            if(irsData.stocked)
            {text("Supplies loaded!",width/2,212);}
            else
            {
                textAlign(LEFT,BASELINE);
                rect(width/5,184,3*width/5,64);
                text("Pod needs the following supplies:\n"+irsData.get_supplies_dark_energy_cost_string()+" dark energy, "+irsData.get_supplies_food_cost()+" food, "+irsData.get_supplies_spice_cost()+" spice",width/5+4,200);
                if(darkEnergyResource<irsData.get_supplies_dark_energy_cost()||foodResource<irsData.get_supplies_food_cost()||spiceResource<irsData.get_supplies_spice_cost())
                {
                    rect(width/2-37,220,74,24);
                    text("Can't afford!",width/2-33,236);
                }
            }
            textAlign(LEFT,BASELINE);
        }
        break;
    case 4:
        if(!irsData.get_is_ready_for_launch()&&irsData.timeUntilReturn===-1&&!irsData.returnReport)
        {
            stroke(0,0,0);
            fill(255,64,64);
            rect(60,height/2-12,width-120,30);
            fill(0,0,0);
            textAlign(CENTER,CENTER);
            textSize(16);
            if(irsData.engineType===0)
            {text("You must assemble an engine first!",width/2,height/2+3);}
            else if(irsData.engineCondition<30)
            {text("You must repair the engine first!",width/2,height/2+3);}
            else if(irsData.rescuePodType===0)
            {text("You must construct a pod first!",width/2,height/2+3);}
            else if(!irsData.stocked)
            {text("You must fill the pod with supplies first!",width/2,height/2+3);}
            textAlign(LEFT,BASELINE);
            break;
        }
        stroke(0);fill(255,64,64);
        if(irsData.returnReport)
        {
            rect(84,128,width-168,140);fill(0);textAlign(CENTER,CENTER);textSize(20);text("~Trip Summary~",width/2,148);line(138,157,159,157);line(165,157,251,157);line(259,157,262,157);textSize(12);
            text("The rescue pod returned safely!",width/2,170);
            text("Damage to engine: "+irsData.returnReportDamageSustained+"%",width/2,186);
            text("Evacuees saved: "+irsData.returnReportPeopleSaved,width/2,202);
            text("Total round trip time: "+irsData.totalRoundTripTime+" days",width/2,218);
            textAlign(LEFT,BASELINE);
            if(irsData.resourceCapacityAtLaunch>0)
            {
                var rN,txt,tW,hov;switch(irsData.resourceType){case 0:rN="mana";break;case 1:rN="stone";break;case 2:rN="gadolinium";break;default:rN="dark energy";}txt="Resources mined: "+g_ResourcePane.formatSI(irsData.resourceCapacityAtLaunch)+" "+rN;tW=textWidth(txt);
                hov=mouseX>=36&&mouseX<44+tW&&mouseY>=260&&mouseY<284;
                fill(255,hov?96:64,hov?96:64);rect(36,260,tW+8,24);fill(0);text(txt,40,276);
                if(hov){text("(Due to the Mining Pods tech.)",40,298);}
            }
            break;
        }
        rect(4,96,width-8,height-186);
        if(irsData.timeUntilReturn===-1)
        {
            fill(0,0,0);
            textAlign(CENTER,CENTER);
            textSize(16);
            text("Ready for launch!",width/2,116);
            textSize(12);
            text("Estimated total round trip time: "+irsData.get_estimated_round_trip_time()+" days",width/2,132);
            text("Estimated pod capacity: "+irsData.get_rescue_pod_final_capacity(),width/2,148);
            text("Launch the pod to rescue people from your home universe!",width/2,164);
            if(evacuees+evacueesEnRoute+irsData.get_rescue_pod_final_capacity()>maxEvacuees)
            {
                text("Not enough space for the evacuees!",width/2,212);
                text("To increase, build & upgrade shelters.",width/2,228);
            }
            textAlign(LEFT,BASELINE);
            if(g_TechnologyManager.camel_technology_by_name("Mining Pods").researched)
            {
                var mpcBase=IRS_mpc(irs.upgradeLevel),mpcMulti=IRS_mpc_multi();
                text("Will bring back some resources: "+g_ResourcePane.formatSI(mpcBase)+(mpcMulti!==1?" ("+g_ResourcePane.formatSI(mpcBase*mpcMulti)+" with bonus)":""),32,256);
                text("~stone (*5) or mana (*5) or gadolinium or dark energy~",32,272);
                if(mpcMulti!==1)
                {text(g_ResourcePane.format_multi("Total level 5 buildings built across all runs",mpcMulti),32,288);}
            }
        }
        else //Not returned yet!
        {
            fill(0,0,0);
            textAlign(CENTER,CENTER);
            textSize(16);
            text("Pod has launched!",width/2,116);
            textSize(12);
            text("Estimated total round trip time: "+irsData.totalRoundTripTime+" days",width/2,132);
            text("Estimated time to return: "+irsData.timeUntilReturn+" days",width/2,148);
            var angleDeg=4*globalCyclicAnimation;
            stroke(0,0,0);
            noFill();
            ellipse(width/2,height/2+3,32,32);
            line(width/2,height/2+3,width/2+16*cos(angleDeg),height/2+3+16*sin(angleDeg));
            fill(0,0,0);
            textSize(18);
            text(irsData.timeUntilReturn,width/2,height/2+3);
            textAlign(LEFT,BASELINE);
            textSize(12);
            if(irsData.resourceCapacityAtLaunch>0)
            {
                text("Will bring back some resources: "+g_ResourcePane.formatSI(irsData.resourceCapacityAtLaunch),32,256);
                text("~stone (*5) or mana (*5) or gadolinium or dark energy~",32,272);
            }
        }
        break;
    }
};
var render_day_start=function(){
if(!canCastSpells){fill(255,0,0,max(0,24*ticksToShowDayNumber-1185));rect(0,0,width,height);}textAlign(CENTER,BASELINE);noStroke();if(daysUntilSwarmArrival<=10||tileSlimed){fill(255,255,0,128);}else{if(dayCount>dayToRunEnd-20){fill(0,255,255,128);}else{fill(192,192,192,128);}}rect(0,0,width,height);if(dayCount>dayToRunEnd-20){textSize(40);fill(0,0,0);if(dayToRunEnd-dayCount===0){text("Today is the last day!",width/2,50);}else{text((dayToRunEnd-dayCount+1)+" days remain!",width/2,50);}}if(daysUntilSwarmArrival<=10){textSize(25);fill(255,0,0);if(daysUntilSwarmArrival===1){text("Swarm arrives tomorrow!",width/2,150);}else{text("Swarm arrives in "+daysUntilSwarmArrival+" days!",width/2,150);}}if(tileSlimed){textSize(25);fill(255,0,0);text("The slimes are coming!",width/2,300);}textSize(50);fill(0,0,0);text("Day #"+String(dayCount),width/2,200);if(dayCount%25===1&&currentScreen!=="choose-season"){text((season_to_string()).toUpperCase(),width/2,250);}textAlign(LEFT,BASELINE);if(g_Dragon.lastCollectorUpgraded>-1){var B=allBuildings[g_Dragon.lastCollectorUpgraded];fill(255,255,255,192);rect(80,100,240,22);B.draw_at(80,118);B.draw_at(304,118);textSize(16);fill(0,0,0);text("Collector upgraded to level "+B.upgradeLevel+"!",96,116);}};
var render_DEC_eye_screen=function(){
background(64,64,64);fill(255,255,255);textSize(16);text(DECEyeGazingText,32,300);noStroke();var dr=atan2(mouseY-150,mouseX-width/2),ds=min(32,0.4*dist(width/2,150,mouseX,mouseY));fill(0,0,0,64*gcaS+128);ellipse(width/2,150,120,120);stroke(0,0,0);fill(255,255,255);ellipse(width/2+ds*cos(dr),150+ds*sin(dr),16,16);};
var render_greet_screen=function(){
background(64);fill(255);textAlign(CENTER,BASELINE);textSize(16);text(DECEyeGazingText,width/2,290);stroke(255);var a=asin(mouseX/200-1)+acos(mouseY/200-1),t=0,l=160+80*cos(a),m=320-l;for(;t<360;t+=36){line(width/2+40*cos(a+t),150-40*sin(a+t),width/2+l*cos(a+t),150-l*sin(a+t));line(width/2+40*cos(a+t),150-40*sin(a+t),width/2-m*cos(2*a+t),150+m*sin(2*a+t));}noStroke();fill(255,125,0);ellipse(width/2,150,64,64);textAlign(LEFT,BASELINE);};
var render_house_upgraded_screen=function(){
var l=allBuildings[0].upgradeLevel,tX=width/2;background(0,255,0);textAlign(CENTER,CENTER);textSize(24);fill(0);stroke(0);text("House Upgraded to Level "+l+"!",tX,98);line(width/8,110,7*width/8,110);textSize(18);switch(l){case 2:text("Bonuses:",tX,140);text("+2 mana/day",tX,160);text("*2 gadolinium from slime",tX,180);text("*1.5 iron production",tX,200);text("New Feature:",tX,240);text("Access the backside",tX,260);break;case 3:text("Bonuses:",tX,140);text("10% more max evacuees",tX,160);text("*1.5 gadolinium from slime",tX,180);text("75% more spice from trading",tX,200);text("New Feature:",tX,240);text("Train Line & Power Line",tX,260);break;case 4:text("Bonuses:",tX,140);text("+5 food/day",tX,160);text("*1.3 gadolinium from slime",tX,180);var tle=(width-textWidth("*1.3 gadolinium from slime"))/2;line(tle+textWidth("*1."),172,tle+textWidth("*1.3")-1,172);text("+2 base bio-orb from enchanting",tX,200);text("New Feature:",tX,240);text("Unlocked Artifacts",tX,260);break;case 5:text("Bonuses:",tX,140);text("+1 action per day",tX,160);text("*1.25 gadolinium from slime",tX,180);text("0.12% more golden apple per claimed tile",tX,200);text("New Feature:",tX,240);text("5th season available",tX,260);break;}textAlign(LEFT,BASELINE);};
var render_lines_screen = function()
{
    if(currentlyInBackside){background(128,255,255);}else{background(192,160,128);}fill(0);textAlign(CENTER,CENTER);textSize(30);
    if(currentlyInBackside){text("Power Line",200,50);textSize(12);if(g_TechnologyManager.by_name("Backside Terraforming").researched){noStroke();fill(96,192,192);rect(26,226,240,200);fill(0);text("The Power Line can increase the multis from Cybermind trading.",200,125);text("Whenever a tile on this Power Line is terraformed to be a", 200, 150);text("Cybermind tile, it increases all bonuses from Cybermind trade.",200,166);text("Terraforming to other tile types has no effect.",200,191);textAlign(LEFT,CENTER);text("Get bonuses!",180,270);text("No effect.",180,360);textAlign(CENTER,CENTER);textSize(36);text("→",105,266);text("→",105,356);image(allTiles.images[TT_MITHRIL],50,250);image(allTiles.images[TT_WASTELAND],60,270);image(allTiles.images[TT_LAVA],70,290);for(var i=-16;i<16;i+=8){for(var j=-16;j<16;j+=8){fill(255,0,0,128+64*sin(globalCyclicAnimation+2*(i+j)));rect(70+i,290+j,8,8);}}image(allTiles.images[TT_CYBERMIND],150,270);image(allTiles.images[TT_CYBERMIND],60,360);image(allTiles.images[TT_MITHRIL],140,340);image(allTiles.images[TT_WASTELAND],150,360);image(allTiles.images[TT_LAVA ],160,380);for(var i=-16;i<16;i+=8){for(var j=-16;j<16;j+=8){fill(255,0,0,128+64*sin(globalCyclicAnimation+2*(i+j)));rect(160+i,380+j,8,8);}}fill(0,255,255);rect(60,234,3,20);rect(70,254,3,20);rect(80,274,3,32);rect(160,254,3,32);rect(70,344,3,32);rect(150,324,3,20);rect(160,344,3,20);rect(170,364,3,32);}else{text("The Power Line can get you certain bonuses...",200,170);text("...but it requires technology that you don't have yet!",200,190);}}
    else
    {
        //Train Line
        text( "Train Line", 200, 50 );
        textSize( 12 );
        stroke( 0, 0, 0 );
        fill( 224, 208, 192 );
        rect( 5, 184, 390, 70 );
        line( 135, 184, 135, 254 );
        line( 265, 184, 265, 254 );
        fill( 0, 0, 0 );
        text( "Periodically, the Train will pick up resources & deliver them to you.\nSimply click the button to pick up all of the items listed in the table below.", 200, 100 );
        text( "How it works: the more of a certain resource you have, the more the\ntrain will pick up, but the Train can only store a certain maximum\namount of cargo of each type before it gets full.", 200, 150 );
        textAlign( LEFT, BASELINE );
        text( "Food: " + g_TrainBody.freight[ 0 ], 10, 200 );
        text( "Mana: " + g_TrainBody.freight[ 1 ], 10, 216 );
        text( "Pearl: " + g_TrainBody.freight[ 2 ], 10, 232 );
        if( g_PersistentData.currentChallenge === "URC" )
        {
            var right = 10 + textWidth( "Pearl: 0" );
            line( 10, 224, right, 232 );line( 10, 232, right, 224 );
            if( mouseX >= 10 && mouseX < right && mouseY >= 224 && mouseY < 232 )
            {
                textAlign( CENTER, BASELINE );
                text( "You can't get pearl from the Train in a URC.", 200, 272 );
                textAlign( LEFT, BASELINE );
            }
        }
        text( "Stone: " + g_TrainBody.freight[ 3 ], 10, 248 );
        if( g_ResourcePane.spiceVisible )
        {
            text( "Spice: " + g_TrainBody.freight[ 4 ], 140, 200 );
        }
        if( g_ResourcePane.gadoliniumVisible )
        {
            text( "Gadolinium: " + g_TrainBody.freight[ 5 ], 140, 216 );
        }
        if( g_ResourcePane.flameOrbVisible )
        {
            text( "Flame Orb: " + g_TrainBody.freight[ 6 ], 140, 232 );
        }
        if( g_ResourcePane.ironVisible )
        {
            text("Iron: "+g_TrainBody.freight[7],140,248);
            if(g_PersistentData.currentChallenge==="UCC"){var right=140+textWidth("Iron: 0");line(140,240,right,248);line(140,248,right,240);if(mouseX>=140&&mouseX<right&&mouseY>=240&&mouseY<248){textAlign(CENTER,BASELINE);text("You can't get iron from the Train in a UCC.",200,272);textAlign(LEFT,BASELINE);}}
        }
        if( g_ResourcePane.goldenAppleVisible )
        {
            text( "Golden Apple: " + g_TrainBody.freight[ 8 ], 270, 200 );
        }
        if( g_ResourcePane.darkEnergyVisible )
        {
            text( "Dark Energy: " + g_TrainBody.freight[ 9 ], 270, 216 );
            if( g_PersistentData.currentChallenge === "DEC" )
            {
                var right = 270 + textWidth( "Dark Energy: 0" );
                line( 270, 208, right, 216 );line( 270, 216, right, 208 );
                if( mouseX >= 270 && mouseX < right && mouseY >= 208 && mouseY < 216 )
                {
                    textAlign( CENTER, BASELINE );
                    text( "You can't get dark energy from the Train in a DEC.", 200, 272 );
                    textAlign( LEFT, BASELINE );
                }
            }
        }
        if( g_ResourcePane.bioOrbVisible )
        {
            text( "Bio-Orb: " + g_TrainBody.freight[ 10 ], 270, 232 );
        }
        if( g_ResourcePane.mithrilVisible )
        {
            text( "Mithril: " + g_TrainBody.freight[ 11 ], 270, 248 );
        }
        if( g_TrainBody.freight.every( function( x ) { return x === 0; }))
        {
            text( "Accept delivery?", 155, 296 );
            if( mouseX >= 151 && mouseY >= 280 && mouseX < 249 && mouseY < 304 )
            {
                text( "No cargo to deliver yet.", 155, 318 );
            }
            noFill();
            rect( 151, 280, 98, 24 );
        }
        if(g_TrainBody.pastDeliveries)
        {
            textAlign(CENTER,BASELINE);
            text("You have previously received "+g_TrainBody.pastDeliveries+" deliver"+(g_TrainBody.pastDeliveries===1?"y.":"ies."),200,380);
        }
    }
    textAlign( LEFT, BASELINE );
};
var render_TAB_infobox = function()
{
    var st=allTiles[selectedTile],yDraw=96;
    stroke(0);fill(128,255,255);rect(80,80,width-160,height-160);textAlign(LEFT,BASELINE);textSize(12);fill(0);text("Tile type: "+(currentlyInBackside?st.backside_type_as_string():st.type_as_string()),96,yDraw);
    yDraw+=32;if(st.hasDarkEnergy&&allSpells.by_name("Dark Attunement").durationLeft>0){noStroke();fill(0,0,0,64*gcaS+128);ellipse(236,92,8,8);fill(0,0,0);text("Dark energy!",244,96);}if(st.hasTrainPowerLine&&allBuildings[0].upgradeLevel>=3){noStroke();if(currentlyInBackside){fill(0,255,255);rect(236,104,3,8);fill(0,0,0);text("Power Line!",244,112);}else{fill(128,64,0);rect(236,104,3,8);fill(0,0,0);text("Train Line!",244,112);}}
    if(st.claimed&&st.buildings)
    {
        text("Buildings:",96,yDraw);yDraw+=16;
        var bldgsListed=0,bldg,i=0;
        for(;i<st.buildings.length;i+=1){bldg=allBuildings[st.buildings[i]];if(bldg.visible_in_current_side()){text(bldg.type_as_string(),104,yDraw);text(bldg.get_description(),200,yDraw);yDraw+=16;bldgsListed+=1;}}
        if(bldgsListed===0){text("none",104,yDraw);yDraw+=16;}text("Entities:",96,yDraw);yDraw+=16;text("you",104,yDraw);text("selected this tile",200,yDraw);yDraw+=16;
        if(currentlyInBackside&&st.backsideTileType===TT_CYBERMIND){text("the Cybermind",104,yDraw);text("unlocks diplomacy",200,yDraw);yDraw+=16;}
        if(g_Dragon.tileAt===selectedTile&&!currentlyInBackside){text(g_Dragon.type_as_string(),104,yDraw);text(g_Dragon.get_description(),200,yDraw);yDraw+=16;}
        if(g_TrainHead.tileAt===selectedTile&&!currentlyInBackside){text(g_TrainHead.type_as_string(),104,yDraw);text(g_TrainHead.get_description(),200,yDraw);yDraw+=16;}
        if(g_TrainBody.tileAt===selectedTile&&!currentlyInBackside){text(g_TrainBody.type_as_string(),104,yDraw);text(g_TrainBody.get_description(),200,yDraw);yDraw+=16;}
        if(g_TrainTail.tileAt===selectedTile&&!currentlyInBackside){text(g_TrainTail.type_as_string(),104,yDraw);text(g_TrainTail.get_description(),200,yDraw);yDraw+=16;}
        for(i=0;i<allCreatures.length;i+=1){if(allCreatures[i].tileAt===selectedTile&&allCreatures[i].visible_in_current_side()){text(allCreatures[i].type_as_string(),104,yDraw);text(allCreatures[i].get_description(),200,yDraw);yDraw+=16;}}
    }
};
var render_artifact_found_screen=function(){
var a=g_ArtifactManager.by_name(g_ArtifactManager.lastArtifactFound),x=width/2,y=height/2;background(255,255,0);textSize(24);fill(0,0,0);textAlign(CENTER,CENTER);text("You found an Artifact!",x,y-32);a.imageFunc(x,y);fill(0,0,0);text(a.name,x,y+32);textSize(12);text(a.lore,x,y+56);text(a.effectStringFunc(),x,y+72);textAlign(LEFT,BASELINE);};
var render_artifacts_screen = function()
{
    background(255);
    g_ArtifactManager.draw_3_tab_buttons();
    switch(g_ArtifactManager.openTab)
    {
    case 0: //Find tab
        fill(0);if(g_ArtifactManager.count_undiscovered()===0){textSize(16);textAlign(CENTER,CENTER);text("You have found all of the Artifacts!\n~~ Good job! ~~\nThere are no more Artifacts left to find.",width/2,(height-46)/2);textAlign(LEFT,BASELINE);break;}
        textSize(12);text("Number of Artifacts you are currently eligible to find:",32,64);text("(This is based on what stuff you've unlocked, etc.)",32,80);textSize(24);
        var genElgCount=g_ArtifactManager.count_generally_eligible();
        text(genElgCount,320,78);
        if(genElgCount===0){textSize(12);text("At the moment, you are not eligible to find any Artifacts.",32,112);text("However, there are more Artifacts out there for you to find.",32,128);text("Try upgrading more buildings or casting more spells.",32,144);break;}
        stroke(0);fill(128);rect(239,95,33,33);fill(0);
        if(selectedTile>-1){textSize(18);text("Selected tile:",128,118);render_selected_tile(256,112);}else{textSize(12);text("Select a tile to find",128,112);text("Artifacts on it.",128,128);textSize(14);text("You must select a tile before you can find Artifacts!",41.5,200);stroke(0);line(42,204,width-42,204);break;}
        if(!allTiles[selectedTile].claimed){fill(0);textSize(14);text("You can only find Artifacts on tiles you have already claimed!",10,200);stroke(0);line(30,204,width-30,204);break;}
        fill(0);textSize(12);text("Each Artifact has its own requirements in order to find it.",32,160);text("The Artifacts are hidden on tiles that correspond to those",32,176);text("requirements, so you may have to look around for them.",32,192);text("Artifacts that could be found on this tile:",32,232);textSize(24);
        {var eC=g_ArtifactManager.count_eligible_on_selected_tile();text(eC,320,238);textSize(12);noFill();stroke(0);rect(143,256,113,24);text("Search for Artifacts.",147,272);if(mouseX>=143&&mouseX<256&&mouseY>=256&&mouseY<280){if(eC>0){text("Costs "+g_ArtifactManager.get_sfc()+" food, "+g_ArtifactManager.get_ssc()+" spice",147,294);}else{text("No Artifacts to find on this tile.",147,294);text("Perhaps try a different tile.",147,310);}}}
        break;
    case 1: //Manage tab
        fill(0);
        if(g_ArtifactManager.count_discovered()===0){textSize(16);textAlign(CENTER,CENTER);text("You don't have any Artifacts right now.\nGo to the Find tab (top left) to search for some.\nArtifacts can give you cool bonuses.",width/2,(height-46)/2);textAlign(LEFT,BASELINE);break;}
        textSize( 12 );
        var numUndis=g_ArtifactManager.count_undiscovered();
        if(numUndis>0){text("You currently have "+g_ArtifactManager.count_discovered()+" Artifacts.",32,64);text(numUndis>1?"You still have "+numUndis+" Artifacts left to find.":"You only have 1 Artifact left to find!", 32, 80 );}else{text("You found all "+g_ArtifactManager.count_discovered()+" Artifacts!",32,70);}
        g_ArtifactManager.draw_artifacts_manage();
        if(g_PersistentData.totalAPs>0){fill(0);stroke(0);line(0,240,width,240);text("Artifact Points: "+g_ArtifactManager.totalAPs+" (total)    "+g_ArtifactManager.unspentAPs+" (unspent)",32,256);text("At the end of this run, you will get 1 Artifact Point for",48,272);text("each Artifact you found.  You can use Artifact Points to",32,288);text("upgrade your Artifacts.",32,304);}
        if(ticksToShowDayNumber<1&&g_ArtifactManager.count_discovered()>=3&&mouseX>=270&&mouseY>=56&&mouseX<380&&mouseY<80){noStroke();fill(255,255,255,192);rect(270,80,110,18);}
        break;
    case 2: //Unlock tab
        g_ArtifactManager.draw_artifacts_unlock();
        break;
    case 3: //Artifact mechanics notification
        textSize( 16 );
        fill( 0, 0, 0 );
        text( "~UPGRADING ARTIFACTS~", 32, 66 );
        text( "Use Artifact Points to increase the power of", 64, 94 );
        text( "your Artifacts.  Whenever you want, you can", 32, 114 );
        text( "downgrade your Artifacts to get your Artifact", 32, 134 );
        text( "Points back.  At the end of a run, all Artifact", 32, 154 );
        text( "Points will be returned to you, so you can never", 32, 174 );
        text( "lose Artifact Points.", 32, 194 );
        text( "Feel free to experiment with various", 64, 214 );
        text( "configurations of Artifacts at different levels.", 32, 234 );
        break;
    case 4:
        fill(0);
        textSize(12);
        text("Click an Artifact to activate/deactivate it.",32,64);
        text("Active: "+g_ArtifactManager.count_active()+"/"+g_ArtifactManager.activeSlots,32,80);
        g_ArtifactManager.draw_artifacts_activate();
        break;
    }
};
var render_choose_season_screen=function(){
var tX=[width/4,3*width/4];stroke(0);line(0,72,width,72);line(width/2,72,width/2,height);if(mouseY>72&&mouseY<height-30){noStroke();fill(0,255,255,map(mouseY,height-30,72,0,255));if(mouseX<width/2){rect(0,73,width/2,height);}else{rect(width/2+1,73,width/2,height);}}stroke(0);fill(0);textSize(36);textAlign(CENTER,BASELINE);text("CHOOSE A SEASON",width/2,55);for(var i=0;i<2;i+=1){if(mouseX>=tX[i]-70&&mouseX<tX[i]+70&&mouseY>=88&&mouseY<114){fill(128,240,128);}else{fill(0,224,0);}rect(tX[i]-70,88,140,26,4);}fill(0);textSize(20);text("WINTER",tX[0],110);text("FROSTHOUR",tX[1],110);textSize(12);textAlign(CENTER,BASELINE);var yDraw=134;if(allBuildings.count_of_type(BT_FARM)){text("Farms produce less food",tX[0],yDraw);yDraw+=16;}if(allBuildings.count_of_type(BT_COLLECTOR)){text("Collectors produce more mana",tX[0],yDraw);yDraw+=16;}if(allBuildings.count_of_type(BT_MITHRIL_MINE,3)){text("Mines produce more gadolinium",tX[0],yDraw);yDraw+=16;}if(g_TechnologyManager.by_name("Better Farming Tools").researched){text("Better Farming Tools deactivates",tX[0],yDraw);yDraw+=16;}if(allBuildings.count_of_type(BT_MER_MALL,5)){text("Merfolk trade double gadolinium",tX[0],yDraw);yDraw+=16;}if(g_ArtifactManager.by_abbreviation("RS").level){text("Rune Stone Artifact activates",tX[0],yDraw);yDraw+=16;}yDraw=134;text("No food/pearl/golden apple prod.",tX[1],yDraw);yDraw+=16;text("Food/apple *5, pearl *3 next spring",tX[1],yDraw);yDraw+=16;text("50% more mana production",tX[1],yDraw);yDraw+=16;text("Doubled stone production",tX[1],yDraw);yDraw+=16;text("*1.5 gadolinium from slime",tX[1],yDraw);yDraw+=16;text("Flame & bio-orb decay 5%/day",tX[1],yDraw);yDraw+=16;text("Tripled iron & mithril production",tX[1],yDraw);yDraw+=16;if(g_ResourcePane.darkEnergyVisible){text("*5 dark energy prod."+(allBuildings.count_of_type(BT_IRS)?", engine cons.":""),tX[1],yDraw);yDraw+=16;}text("Some things can't be built",tX[1],yDraw);yDraw+=16;text("Half cost shelters",tX[1],yDraw);yDraw+=16;if(allBuildings.count_of_type(BT_MINE)){text("*100 manual mining",tX[1],yDraw);yDraw+=16;}if(allBuildings.count_of_type(BT_ENCHANTING_TABLE)){text("No enchanting, *3 next spring",tX[1],yDraw);yDraw+=16;}if(allBuildings.count_cooling_fans()){text("Cooling fans count *100",tX[1],yDraw);yDraw+=16;}if(g_Diplomacy.merfolkStanding>3){text("Can't use reef"+(g_Diplomacy.merfolkStanding>=5?" or Water Music":""),tX[1],yDraw);yDraw+=16;}if(g_PersistentData.currentChallenge==="URC"){text("Can't explore underwater ruins",tX[1],yDraw);yDraw+=16;}else{if(g_Diplomacy.merfolkTradeUnlocked){text("No interactions with the merfolk",tX[1],yDraw);yDraw+=16;}}if(g_Diplomacy.camelsTradeUnlocked){text("Disappoint the camels",tX[1],yDraw);yDraw+=16;}text("No fish"+(g_TechnologyManager.by_name("Turtles").researched?" or turtles":""),tX[1],yDraw);yDraw+=16;};
var render_quit_confirm_screen=function(){
background(255,0,0);stroke(0);if(mouseX>=25&&mouseY>=150&&mouseX<100&&mouseY<225){fill(255,192,192);}else{fill(255,128,128);}rect(25,150,75,75);if(mouseX>=300&&mouseY>=150&&mouseX<375&&mouseY<225){fill(128,240,128);}else{fill(0,224,0);}rect(300,150,75,75);fill(0,0,0);textSize(38);textAlign(CENTER,BASELINE);text("Are you sure?",width/2,60);textSize(24);text("You will lose ALL of your progress.",width/2,100);textSize(16);text("(Unless you saved your game data in a safe place.)",width/2,130);textAlign(CENTER,CENTER);textSize(24);text("NO!",62.5,187.5);text("YES!",337.5,187.5);textAlign(LEFT,BASELINE);};
var render_mid_run_ci_screen=function(){
background(128,160,160);stroke(0);line(0,100,width,100);fill(0);var c,i=0;for(;i<g_PersistentData.challengesList.length;i+=1){c=g_PersistentData.challengesList[i];if(c.abbreviation===g_PersistentData.currentChallenge.substring(0,2)){textSize(24);textAlign(CENTER,BASELINE);text(c.name,width/2,96);textAlign(LEFT,BASELINE);textSize(12);text(c.descFunc1(c.timesCompleted),24,108,width-48,height);break;}}if(g_TutorialProgress.get_is_in_tutorial()){draw_smiley_face(50,250);stroke(0);fill(255);rect(80,212,240,76,6);fill(0);textSize(16);text("This screen shows you all",90,234);text("details about the Challenge",90,254);text("that you're currently in.",90,274);}if(g_PersistentData.currentChallenge==="DEC"){var dT=100*pow(4,g_PersistentData.get_challenge_times_completed("DE")),p=constrain(totalDarkEnergyGained/dT,0,1);stroke(0);fill(192);rect(100,220,200,24);if(totalDarkEnergyGained>=dT){fill(0,224+31*gcaS,0);}else{fill(0,192,0);}noStroke();rect(101,221,199*p,23);textAlign(CENTER,CENTER);textSize(12);fill(0);text("Dark energy produced: "+g_ResourcePane.formatSI(totalDarkEnergyGained)+"/"+g_ResourcePane.formatSI(dT),width/2,212);text((100*p).toFixed(3)+"%",width/2,233);textAlign(LEFT,BASELINE);}};
var render_certificate_of_completion=function(){
stroke(0);noFill();line(4,4,40,4);line(4,4,4,40);line(360,4,396,4);line(396,4,396,40);line(396,360,396,396);line(360,396,396,396);line(4,396,40,396);line(4,360,4,396);arc(40,10,11,11,-90,90);arc(40,391,11,11,-90,90);arc(360,10,11,11,90,270);arc(360,391,11,11,90,270);arc(10,40,11,11,0,180);arc(390,40,11,11,0,180);arc(10,360,11,11,-180,0);arc(390,360,11,11,-180,0);line(20,20,179,20);line(180,20,200,0);line(200,0,220,20);line(220,20,380,20);line(380,20,380,179);line(380,180,400,200);line(400,200,380,220);line(380,220,380,380);line(220,380,380,380);line(200,400,220,380);line(180,380,200,400);line(20,380,179,380);line(20,220,20,380);line(0,200,20,220);line(20,180,0,200);line(20,20,20,180);line(30,260,140,370);line(260,370,370,260);line(260,30,370,140);line(140,30,30,140);textSize(24);textAlign(CENTER,CENTER);fill(0);text("This document certifies that",200,170);text("have completed the game.",200,230);textSize(18);text("You've done it all & seen it all.",200,130);text("Thank you for playing.",200,270);textSize(36);text("YOU",200,200);textSize(12);text("Land Grab",115,10);text("Certificate of Completion",285,390);textAlign(LEFT,CENTER);};
} //Rendering

{
var g_ICE_TOO_THICK="The ice is too thick.";
var TAB_effect_claim=function(){
var s=allTiles[selectedTile],c=s.food_cost_to_claim();if(c>0){foodResource-=c;g_FlyingText.set_text("-"+c+" food",s.x-cameraX,s.y-cameraY);g_FlyingText.fontColor=color(255,128,0);}claim_tile();movesLeft-=1;};
var TAB_effect_golden_claim=function(){
var o=selectedTile;goldenAppleResource-=1;goldenClaimTilesLeft=5;selectedTile=-1;g_ConstructionManager.on_tile_selected();movesLeft-=1;attempt_select_tile(o);};
var TAB_effect_fish=function(){
var foodFound=0,pearlFound=0,pearlMulti=pearlFromFishMulti*pearlProductionMultiFromUltimate,findPearl=allSpells.by_name("Water Music").durationLeft>0,hasReef=allBuildings.get_tile_has(selectedTile,BT_REEF),fishingNetTech=g_TechnologyManager.by_name("Fishing Net").researched,i=0;while(i<allCreatures.length){if(allCreatures[i].creatureType===CT_FISH&&allCreatures[i].tileAt===selectedTile){foodFound+=0.5*floor(random(2,6));foodFound+=hasReef*foodBonusFromFishingOnReef;if(findPearl){pearlFound+=pearlMulti*allSpells.water_music_base_pearl_from_fishing();}allCreatures.splice(i,1);if(!fishingNetTech){break;}}else{i+=1;}}foodFound*=food_multi_from_fishing();foodResource+=foodFound;g_TutorialProgress.foodFromFish+=foodFound;pearlResource+=pearlFound;g_FlyingText.set_text("+"+foodFound.toFixed(1)+" food",min(256,allTiles[selectedTile].x-cameraX-16),allTiles[selectedTile].y-cameraY);if(pearlFound>0){g_FlyingText.text+=", +"+g_ResourcePane.formatSI(pearlFound)+" pearl";}g_FlyingText.fontColor=color(255,0,0);movesLeft-=1;recalculate_building_effects();};
var TAB_effect_build=function(){currentScreen="build";};
var TAB_effect_research=function(){currentScreen="research";};
var TAB_effect_diplomacy_merfolk=function(){currentScreen="diplomacy";g_Diplomacy.currentlyMeetingWith="merfolk";};
var TAB_effect_diplomacy_reef=function(){currentScreen="diplomacy";g_Diplomacy.currentlyMeetingWith="reef";reefScreenShowBonuses=!1;};
var TAB_effect_diplomacy_camels=function(){currentScreen="diplomacy";g_Diplomacy.currentlyMeetingWith="camels";};
var TAB_effect_diplomacy_cybermind=function(){currentScreen="diplomacy";g_Diplomacy.currentlyMeetingWith="cybermind";};
var TAB_effect_diplomacy_giants=function(){currentScreen="diplomacy";g_Diplomacy.currentlyMeetingWith="fire giants";};
var TAB_effect_kill_slime=function(){
movesLeft-=1;foodResource-=FOOD_TO_KILL_SLIME;var a=random(0.5,2.35),b=a*manaFromSlimeMulti,c=a*0.1*gadoliniumFromSlimeMulti,st=allTiles[selectedTile];manaResource+=b;gadoliniumResource+=c;g_ResourcePane.gadoliniumVisible=!0;g_FlyingText.set_text("+"+g_ResourcePane.formatSI(b)+" mana, +"+g_ResourcePane.formatSI(c)+" gadolinium",st.x-cameraX-16,st.y-cameraY);g_FlyingText.fontColor=color(255,0,0);var i=0;for(;i<allCreatures.length;i+=1){if(allCreatures[i].creatureType===CT_SLIME&&allCreatures[i].tileAt===selectedTile){break;}}allCreatures.splice(i,1);recalculate_building_effects();};
var TAB_effect_go_mining=function(){
var b=allBuildings[building_on_tile(selectedTile,BT_MINE)],l=b.upgradeLevel,s=random(manual_mining_min_stone(l),manual_mining_max_stone(l));s*=generalManualMiningMulti*pow(allTiles[selectedTile].tier+1,g_PersistentData.get_upgrade_effect("SM"));stoneResource+=s;foodResource-=food_cost_to_manual_mine();g_FlyingText.set_text("+"+g_ResourcePane.formatSI(s)+" stone",allTiles[selectedTile].x-cameraX-16,allTiles[selectedTile].y-cameraY);g_FlyingText.fontColor=color(255,0,0);recalculate_building_effects();movesLeft-=1;};
var TAB_effect_enchant=function(){currentScreen="enchanting";};
var TAB_effect_info=function(){currentScreen=(currentScreen==="main")?"main-info":"main";};
var TAB_effect_terraform=function(){
if(allCreatures.get_on_tile(selectedTile,CT_TURTLE)){currentScreen="terraforming-confirm-turtle";return;}if(!currentlyInBackside&&allCreatures.get_on_tile(selectedTile,CT_FISH)){currentScreen="terraforming-confirm-fish";return;}if(!currentlyInBackside&&allCreatures.get_on_tile(selectedTile,CT_CAMEL)){currentScreen="terraforming-confirm-camels";return;}currentScreen="terraforming";};
var TAB_effect_IRS=function(){currentScreen="IRS";};
var TAB_effect_DEC_eye=function(){
darkEnergyResource-=500;DECEyeGazingText="";var S=allSpells.by_name("Dark Attunement");if(S.manaCost>1){S.manaCost=1;DECEyeGazingText+="Dark Attunement spell now only costs 1 mana\n";}else{S.duration+=1;DECEyeGazingText+="Dark Attunement spell duration: +1\n";}spiceResource+=100;g_ResourcePane.spiceVisible=!0;gadoliniumResource+=100;g_ResourcePane.gadoliniumVisible=!0;flameOrbResource+=100;g_ResourcePane.flameOrbVisible=!0;ironResource+=100;g_ResourcePane.ironVisible=!0;DECEyeGazingText+="+100 spice, gadolinium, flame orb, iron\n";if(!allTiles[selectedTile].hasDarkEnergy){allTiles[selectedTile].hasDarkEnergy=!0;DECEyeGazingText+="This tile now has dark energy on it\n";}currentScreen="DEC-eye";recalculate_building_effects();};
var TAB_effect_greet=function(){
darkEnergyResource-=15000;greetedCosmic=!0;g_PersistentData.on_greet_cosmic();g_ResourcePane.evacueesVisible=!0;switch(g_PersistentData.statCosmic){case 1:DECEyeGazingText="The being congratulates you on your accomplishment.\n(The voice speaks directly to your mind, not your ears.)";break;case 2:DECEyeGazingText="The being is pleased that you have returned.\n(She sounds as if amused by something.)";break;default:DECEyeGazingText="The being laments that she isn't allowed to help\nyou more often.  (She thanks you for the snacks.)";break;}DECEyeGazingText+="\n+2000 max evacuees";currentScreen="greeting";recalculate_building_effects();};
var TAB_effect_train_power_line=function(){currentScreen="power-train-line";};
var TAB_effect_URC_explore=function(){
if(selectedTile<0||!allTiles[selectedTile].claimed){return;}var st=allTiles[selectedTile];if(allBuildings.get_tile_has(selectedTile,BT_MER_MALL)){foodResource-=10;manaResource-=20;if(g_Diplomacy.merfolkStanding<7.5){pearlResource+=10;g_Diplomacy.totalPearlGained+=10;g_FlyingText.set_text("+10 pearl, new spell unlocked!",st.x-cameraX-16,st.y-cameraY);g_FlyingText.fontColor=color(0,128,0);nextScreen=currentScreen;currentScreen="water-music-cutscene";cutsceneTickCounter=0;g_Diplomacy.merfolkStanding=7.5;}else{var pearlGained=pow(2000-dayCount,0.53)*random(0.16,0.24);pearlResource+=pearlGained;g_FlyingText.set_text("+"+g_ResourcePane.formatSI(pearlGained)+" pearl",st.x-cameraX-16,st.y-cameraY);g_FlyingText.fontColor=color(255,0,0);}}else{switch(building_level_on_tile(selectedTile,BT_UNDERWATER_RUINS)){case 1:foodResource-=6;var pearlGained=random(4,7);pearlResource+=pearlGained;g_FlyingText.set_text("+"+g_ResourcePane.formatSI(pearlGained)+" pearl",st.x-cameraX-16,st.y-cameraY);g_FlyingText.fontColor=color(255,0,0);break;case 2:foodResource-=10;manaResource-=3;var pearlGained=random(4,10),stoneGained=random(0.08,0.12)*dayCount;pearlResource+=pearlGained;stoneResource+=stoneGained;g_FlyingText.set_text("+"+g_ResourcePane.formatSI(pearlGained)+" pearl, +"+g_ResourcePane.formatSI(stoneGained)+" stone",st.x-cameraX-16,st.y-cameraY);g_FlyingText.fontColor=color(255,0,0);break;case 3:foodResource-=14;stoneResource-=20;var pearlGained=random(6.3,17),gadoliniumGained=random(0.000008,0.000012)*sq(dayCount);pearlResource+=pearlGained;gadoliniumResource+=gadoliniumGained;g_ResourcePane.gadoliniumVisible=!0;g_FlyingText.set_text("+"+g_ResourcePane.formatSI(pearlGained)+" pearl, +"+g_ResourcePane.formatSI(gadoliniumGained)+" gadolinium",st.x-cameraX-16,st.y-cameraY);g_FlyingText.fontColor=color(255,0,0);break;case 4:foodResource-=20;flameOrbResource-=15;var pearlGained=random(3)<1?20:0,darkEnergyGained=random(0.4,2)+log(darkEnergyProductionMultiFromDEC);darkEnergyResource+=darkEnergyGained;totalDarkEnergyGained+=darkEnergyGained;g_ResourcePane.darkEnergyVisible=!0;pearlResource+=pearlGained;g_FlyingText.set_text("+"+g_ResourcePane.formatSI(darkEnergyGained)+" dark energy"+(pearlGained>0?", "+g_ResourcePane.formatSI(pearlGained)+" pearl":""),st.x-cameraX-16,st.y-cameraY);g_FlyingText.fontColor=color(255,0,0);break;case 5:foodResource-=25;mithrilResource-=40;var pearlGained=random(50,150);pearlResource+=pearlGained;g_FlyingText.set_text("+"+g_ResourcePane.formatSI(pearlGained)+" pearl",st.x-cameraX-16,st.y-cameraY);g_FlyingText.fontColor=color(255,0,0);break;default:throw"Unknown explore URC ruins situation.";}}movesLeft-=1;recalculate_building_effects();};
var TAB_effect_feed_turtle=function(){
var c=color(255,128,0);
if(currentlyInBackside){mithrilResource-=cost_to_feed_turtle();allCreatures.fedAirTurtle+=1;var s=allTiles[selectedTile],t=tile_at_position(s.x,s.y-32);if(t>-1&&allTiles[t].backsideTileType===TT_LAVA){c=color(0,0,0);}}else{foodResource-=cost_to_feed_turtle();allCreatures.fedSeaTurtle+=1;}g_FlyingText.set_text("Turtle fed!",allTiles[selectedTile].x-cameraX-16,allTiles[selectedTile].y-cameraY);g_FlyingText.fontColor=c;recalculate_building_effects();movesLeft-=1;};
var draw_TABs = function()
{
    if(selectedTile===-1){return;}
    if(mouseX<118&&mouseY>=height-86){g_ResourcePane.render();return;}
    var tile=allTiles[selectedTile],hov=!1,halfW=width/2,yAlign=height-48,textY0=height-22,textY1=height-6,textX=258;stroke(0);fill(255);rect(-10,height-86,width+20,88);g_ResourcePane.render_factors();
    //Claim button [FB]:
    if(!tile.claimed)
    {var cant=foodResource<tile.food_cost_to_claim();if(selectedTile>=0&&!allTiles[selectedTile].claimed){fill(0);textSize(12);var a=120,b=height-64,c=b+16,d=c+16,e=d+16,f="+0.3",g=" -0.1";switch(allTiles[selectedTile].tileType){case TT_PLAINS:text(f,a,b);text(g,a,c);text(g,a,d);text(g,a,e);break;case TT_SWAMP:text(g,a,b);text(f,a,c);text(g,a,d);text(g,a,e);break;case TT_LAKE:text(g,a,b);text(g,a,c);text(f,a,d);text(g,a,e);break;case TT_DESERT:text(g,a,b);text(g,a,c);text(g,a,d);text(f,a,e);}}hov=mouseX>=halfW-16&&mouseX<halfW+16&&mouseY>=yAlign-16&&mouseY<yAlign+16&&ticksToShowDayNumber===0;stroke(0);if(hov){fill(128,224,128);}else{fill(0,192,0);}if(cant){fill(64);}ellipse(halfW,yAlign,24,24);noStroke();fill(255);rect(halfW-8,yAlign-2,16,4);rect(halfW-2,yAlign-8,4,16);if(hov){fill(0);textSize(12);textAlign(CENTER,BASELINE);text("Claim Land"+(tile.food_cost_to_claim()>0?" (-"+tile.food_cost_to_claim()+" food)":"")+" [Hotkey: C]",textX,textY0);text(cant?"Not enough food.":"Claim land before doing anything there.",textX,textY1);}}
    //Golden Claim [FB]
    if(!tile.claimed&&g_TechnologyManager.by_name("Land Grabbing").researched)
    {var c=goldenAppleResource<1;hov=mouseX>=halfW+16&&mouseX<halfW+48&&mouseY>=yAlign-16&&mouseY<yAlign+16&&ticksToShowDayNumber===0;stroke(0);if(c){fill(64);}else{if(hov){fill(192,160,128);}else{fill(128,64,0);}}rect(halfW+30,yAlign-10,3,8);noFill();ellipse(halfW+32,yAlign,24,24);if(goldenAppleResource<1){fill(170,170,170);}else{fill(255,255,128*hov);}ellipse(halfW+32,yAlign+2,16,16);noStroke();fill(255);ellipse(halfW+28,yAlign,4,4);ellipse(halfW+29,yAlign-1,4,4);ellipse(halfW+30,yAlign-2,4,4);if(hov){fill(0);textSize(12);textAlign(CENTER,BASELINE);text("Golden Claim (-1 g. apple) [Hotkey: G]",textX,textY0);text(c?"Not enough golden apple.":"Claim up to 5 tiles at once.",textX,textY1);}}
    //Fish button [F]:
    if(can_go_fishing())
    {hov=mouseX>=halfW+16&&mouseX<halfW+48&&mouseY>=yAlign-16&&mouseY<yAlign+16&&ticksToShowDayNumber===0;stroke(0);if(hov){fill(128,192,255);}else{fill(0,128,255);}ellipse(halfW+32,yAlign,24,24);noStroke();fill(255,0,0);ellipse(halfW+28,yAlign-4,4,4);fill(255,64,0);ellipse(halfW+36,yAlign+4,4,4);if(hov){fill(0);textSize(12);textAlign(CENTER,BASELINE);text("Fish [Hotkey: F]",textX,textY0);var t="Gain food";if(allSpells.by_name("Water Music").durationLeft>0){t+=" & pearl";}t+=".";text(t,textX,textY1);}}
    //IRS button [F]:
    if(allBuildings.get_tile_has(selectedTile,BT_IRS)&&!currentlyInBackside)
    {hov=mouseX>=halfW+16&&mouseX<halfW+48&&mouseY>=yAlign-16&&mouseY<yAlign+16&&ticksToShowDayNumber===0;stroke(0);if(hov){fill(128);}else{fill(0);}ellipse(halfW+32,yAlign,24,24);noStroke();if(hov){fill(224,0,0);}else{fill(192,0,0);}arc(halfW+32,yAlign,18,18,-90,90);rect(halfW+30,yAlign-1,2,2);if(hov){fill(0);textSize(12);textAlign(CENTER,BASELINE);text("IRS [Hotkey: R]",textX,textY0);text("Interuniversal rescue system",textX,textY1);}}
    //Feed the turtles button [FB]:
    if(allTiles[selectedTile].claimed&&allCreatures.get_on_tile(selectedTile,CT_TURTLE))
    {hov=mouseX>=halfW+16&&mouseX<halfW+48&&mouseY>=yAlign-16&&mouseY<yAlign+16&&ticksToShowDayNumber===0;stroke(0);if(currentlyInBackside){if(hov){fill(176);}else{fill(96);}if(mithrilResource<cost_to_feed_turtle()){fill(48);}}else{if(hov){fill(128,192,255);}else{fill(0,128,255);}if(foodResource<cost_to_feed_turtle()){fill(128);}}ellipse(halfW+32,yAlign,24,24);noStroke();if(currentlyInBackside){fill(224);if(mithrilResource<cost_to_feed_turtle()){fill(112);}}else{fill(64,128,64);if(foodResource<cost_to_feed_turtle()){fill(85);}}ellipse(halfW+32,yAlign,15,8);bezier(halfW+37,yAlign-2,halfW+44,yAlign-2,halfW+44,yAlign+2,halfW+37,yAlign+2);bezier(halfW+36,yAlign-3,halfW+36,yAlign-8,halfW+39,yAlign-9,halfW+37,yAlign-2);bezier(halfW+36,yAlign+3,halfW+36,yAlign+8,halfW+39,yAlign+9,halfW+37,yAlign+2);bezier(halfW+27,yAlign-2,halfW+27,yAlign-6,halfW+24,yAlign-5,halfW+25,yAlign-2);bezier(halfW+27,yAlign+2,halfW+27,yAlign+6,halfW+24,yAlign+5,halfW+25,yAlign+2);if(hov){fill(0,0,0);textSize(12);textAlign(CENTER,BASELINE);if(currentlyInBackside){text("Feed the Air Turtle (-"+cost_to_feed_turtle()+" mithril) [Hotkey: F]",textX,textY0);text(mithrilResource<cost_to_feed_turtle()?"Not enough mithril.":"Increase dark energy production by 10%.",textX,textY1);}else{text("Feed the Sea Turtle (-"+cost_to_feed_turtle()+" food) [Hotkey: F]",textX,textY0);text(foodResource<cost_to_feed_turtle()?"Not enough food.":"Increase all enchanting rewards by 10%.",textX,textY1);}}}
    //Build button [FB]:
    if(build_button_visible())
    {hov=mouseX>=halfW-48&&mouseX<halfW-16&&mouseY>=yAlign-16&&mouseY<yAlign+16&&ticksToShowDayNumber===0;stroke(0);var cna=g_ConstructionManager.can_do_anything_on_tile();if(hov){fill(255,192,128);}else{fill(255,128,0);}arc(halfW-32,yAlign,24,24,90,270);if(!cna){fill(hov?192:128);}arc(halfW-32,yAlign,24,24,-90,90);fill(0,0,0);textAlign(CENTER,CENTER);textSize(20);text("B",halfW-32,yAlign);if(hov){fill(0,0,0);textSize(12);textAlign(CENTER,BASELINE);text("Build [Hotkey: B]",textX,textY0);text(cna?(dayCount>79||g_PersistentData.get_has_completed_1_challenge()?"Build, upgrade, or repair a structure.":"Build or upgrade a structure."):"You currently can't afford anything.",textX,textY1);}}
    //Switch sides button:
    if(selectedTile===28&&allBuildings[0].upgradeLevel>1)
    {hov=mouseX>=halfW-48&&mouseX<halfW-16&&mouseY>=yAlign-16&&mouseY<yAlign+16&&ticksToShowDayNumber===0;var B=allCreatures.get_on_tile(28,CT_SWARM);stroke(0);if(hov){fill(224,128,224);}else{fill(192,0,192);}if(B){fill(128);}ellipse(halfW-32,yAlign,24,24);if(hov){fill(0);textSize(12);textAlign(CENTER,BASELINE);if(currentlyInBackside){text("Go to the Frontside [Hotkey: B]",textX,textY0);if(B){text("Something is blocking the portal on the other side.",textX,textY1);}else{text("Return to the normal version of the world.",textX,textY1);}}else{text("Go to the Backside [Hotkey: B]",textX,textY0);if(B){text("Something is blocking the portal on the other side.",textX,textY1);}else{text("Travel to the alternate version of the world.",textX,textY1);}}}}
    //Research button [FB]:
    if(research_button_visible())
    {hov=mouseX>=halfW-80&&mouseX<halfW-48&&mouseY>=yAlign-16&&mouseY<yAlign+16&&ticksToShowDayNumber===0;stroke(0,0,0);if(hov){fill(128,192,128);}else{fill(0,128,0);}ellipse(halfW-64,yAlign,24,24);noStroke();fill(0,255,255);triangle(halfW-71,yAlign-2,halfW-64,yAlign-9,halfW-57,yAlign-2);rect(halfW-66,yAlign-2,4,10);if(hov){fill(0,0,0);textSize(12);textAlign(CENTER,BASELINE);text("Research [Hotkey: R]",textX,textY0);text(g_TechnologyManager.get_completion_ratio()===1?"You researched all technologies!":"Discover new technologies.  ("+g_TechnologyManager.count_available()+" available)",textX,textY1);}}
    //Diplomacy button [F] merfolk/reef/camels, [B] Cybermind:
    var merfolk=!currentlyInBackside&&allBuildings.get_tile_has(selectedTile,BT_MER_MALL);
    var reef=!currentlyInBackside&&g_Diplomacy.merfolkStanding>3&&allBuildings.get_tile_has(selectedTile,BT_REEF);
    var camels=!currentlyInBackside&&allCreatures.get_on_tile(selectedTile,CT_CAMEL);
    var cmind=currentlyInBackside&&selectedTile>-1&&allTiles[selectedTile].backsideTileType===TT_CYBERMIND;
    var giants=currentlyInBackside&&allCreatures.is_giant_on_tile(selectedTile);
    if(tile.claimed&&(merfolk||camels||reef||cmind||giants))
    {
        hov=mouseX>=halfW-80&&mouseX<halfW-48&&mouseY>=yAlign-16&&mouseY<yAlign+16&&ticksToShowDayNumber===0;
        stroke(0,0,0);
        fill(hov?128:0,255,255);
        if((merfolk||reef)&&season===4){fill(170,170,170);}
        if(merfolk&&g_PersistentData.currentChallenge==="URC"){fill(170,170,170);}
        ellipse(halfW-64,yAlign,24,24);
        line(halfW-64,yAlign-12,halfW-64,yAlign+12);
        line(halfW-64,yAlign,halfW-64+6*sqrt(2),yAlign+6*sqrt(2));
        line(halfW-64,yAlign,halfW-64-6*sqrt(2),yAlign+6*sqrt(2));
        if(hov)
        {
            fill(0,0,0);
            textSize(12);
            textAlign(CENTER,BASELINE);
            text("Diplomacy [Hotkey: D]",textX,textY0);
            if(merfolk)
            {if(season===4){text(g_ICE_TOO_THICK,textX,textY1);}else if(g_PersistentData.currentChallenge==="URC"){text("No one is there!  Not even 1 merperson...",textX,textY1);}else{text("Peace with merfolk.",textX,textY1);}}
            if(reef)
            {if(season===4){text(g_ICE_TOO_THICK,textX,textY1);}else if(g_PersistentData.currentChallenge==="URC"){text("Protect the environment.",textX,textY1);}else{text("Help the merfolk protect the environment.",textX,textY1);}}
            if(camels)
            {text("Peace with camels.",textX,textY1);}
            if(cmind)
            {text("Trade with the Cybermind.",textX,textY1);}
            if(giants)
            {text("Business transactions with the fire giants.",textX,textY1);}
        }
    }
    //Kill slime button [F]:
    if(allTiles[selectedTile].claimed&&allCreatures.get_on_tile(selectedTile,CT_SLIME)&&!currentlyInBackside){var c=foodResource<FOOD_TO_KILL_SLIME;hov=mouseX>=halfW+48&&mouseX<halfW+80&&mouseY>=yAlign-16&&mouseY<yAlign+16&&ticksToShowDayNumber===0;stroke(0);if(hov){fill(144,255,144);}else{fill(32,255,32);}if(c){fill(107);}ellipse(halfW+64,yAlign,24,24);line(halfW+60,yAlign-6,halfW+68,yAlign+6);line(halfW+63,yAlign+5,halfW+69,yAlign+1);if(hov){fill(0);textSize(12);textAlign(CENTER,BASELINE);text("Kill a Slime (-"+FOOD_TO_KILL_SLIME+" food) [Hotkey: K]",textX,textY0);text(c?"Not enough food.":"Gain mana & gadolinium.",textX,textY1);}}
    //Go mining button [F]:
    if(go_mining_button_visible())
    {var c=foodResource<food_cost_to_manual_mine();hov=mouseX>=halfW+16&&mouseX<halfW+48&&mouseY>=yAlign-16&&mouseY<yAlign+16&&ticksToShowDayNumber===0;stroke(0);if(hov){fill(240,240,160);}else{fill(224,224,64);}if(tile.tileType===TT_PLAINS){if(hov){fill(128,224,128);}else{fill(0,192,0);}}if(c){fill(171);}ellipse(halfW+32,yAlign,24,24);noStroke();if(hov){fill(192,176,160);}else{fill(128,96,64);}if(c){fill(96);}ellipse(halfW+32,yAlign,12,12);if(hov){fill(0);textSize(12);textAlign(CENTER,BASELINE);text("Go Mining (-"+food_cost_to_manual_mine()+" food) [Hotkey: M]",textX,textY0);if(c){text("Not enough food.",textX,textY1);}else{var lvl=building_level_on_tile(selectedTile,BT_MINE),tempStr="Gain "+manual_mining_min_stone(lvl)+"~"+manual_mining_max_stone(lvl)+" stone.",multi=pow(allTiles[selectedTile].tier+1,g_PersistentData.get_upgrade_effect("SM"));if(generalManualMiningMulti!==1){tempStr+=" (*"+g_ResourcePane.formatSI(generalManualMiningMulti)+")";}if(multi!==1){tempStr+=" (*"+g_ResourcePane.formatSI(multi)+")";}text(tempStr,textX,textY1);}}}
    //Enchant button [F]:
    if(enchant_button_visible()){hov=mouseX>=halfW+144&&mouseX<halfW+176&&mouseY>=yAlign-16&&mouseY<yAlign+16&&ticksToShowDayNumber===0;var t=g_TechnologyManager.by_name("Enchanting Table").researched,c=t&&season!==4;stroke(0);switch(tile.tileType){case TT_DESERT:if(!c){fill(171);break;}if(hov){fill(240,240,160);}else{fill(224,224,64);}break;case TT_LAKE:if(!c){fill(128);break;}if(hov){fill(128,192,255);}else{fill(0,128,255);}break;case TT_SWAMP:if(!c){fill(43);break;}if(hov){fill(128,192,128);}else{fill(0,128,0);}break;default:if(!c){fill(64);break;}if(hov){fill(128,224,128);}else{fill(0,192,0);}}ellipse(halfW+160,yAlign,24,24);noStroke();fill(64,0,64);if(!c){fill(43);}rect(halfW+156,yAlign-4,8,8);fill(255,0,255);if(!c){fill(170);}ellipse(halfW+160,yAlign,4,4);if(hov){fill(0);textSize(12);textAlign(CENTER,BASELINE);text("Enchant [Hotkey: N]",textX,textY0);if(t){text((season===4?"Enchanting doesn't work in frosthour.":"Transform one substance into another."),textX,textY1);}else{text("You must research Enchanting Table tech first!",textX,textY1);}}}
    //Info button [FB]:
    if( tile.claimed )
    {
        hov=mouseX>=halfW-16&&mouseX<halfW+16&&mouseY>=yAlign-16&&mouseY<yAlign+16&&ticksToShowDayNumber===0;stroke(0);fill(hov?128:0,255,255);ellipse(halfW,yAlign,24,24);fill(0);textAlign(CENTER,CENTER);textSize(20);text("i",halfW,yAlign);if(hov){fill(0);textSize(12);textAlign(CENTER,BASELINE);text("Info [Hotkey: I]",textX,textY0);if(currentScreen==="main"){text("Click to see more info.",textX,textY1);}else{text("Click again to hide the info.",textX,textY1);}}
    }
    //Terraform button:
    if(allBuildings.get_tile_has(selectedTile,currentlyInBackside?BT_BACKSIDE_TERRAFORMER:BT_TERRAFORMER)&&(currentlyInBackside?!allCreatures.is_giant_on_tile(selectedTile):tile.tileType!==TT_SLIMED))
    {
        hov=mouseX>=halfW+80&&mouseX<halfW+112&&mouseY>=yAlign-16&&mouseY<yAlign+16&&ticksToShowDayNumber===0;stroke(0);fill(hov?224:192);ellipse(halfW+96,yAlign,24,24);
        noStroke();if(currentlyInBackside){fill(208,208,208);rect(halfW+88,yAlign-8,8,8);fill(255,64,0);rect(halfW+96,yAlign-8,8,8);fill(96,96,96);rect(halfW+88,yAlign,8,8);fill(128,128,128);rect(halfW+96,yAlign,8,8);stroke(255,0,0);line(halfW+98,yAlign,halfW+98,yAlign+7);stroke(0,255,0);line(halfW+100,yAlign,halfW+100,yAlign+7);stroke(0,0,255);line(halfW+103,yAlign,halfW+103,yAlign+7);}else{fill(0,192,0);rect(halfW+88,yAlign-8,8,8);fill(224,224,64);rect(halfW+96,yAlign-8,8,8);fill(0,128,255);rect(halfW+88,yAlign,8,8);fill(0,96,192);rect(halfW+96,yAlign,8,8);fill(0,128,0);rect(halfW+96,yAlign,4,4);rect(halfW+100,yAlign+4,4,4);}if(hov){fill(0);textSize(12);textAlign(CENTER,BASELINE);text("Terraform [Hotkey: T]",textX,textY0);text("Change the tile type.",textX,textY1);}
    }
    //Cosmic button:
    if(cosmic_button_visible())
    {
        hov=mouseX>=halfW+112&&mouseX<halfW+144&&mouseY>=yAlign-16&&mouseY<yAlign+16&&ticksToShowDayNumber===0;stroke(0);fill(hov&&!greetedCosmic&&darkEnergyResource>=15000?128:0);ellipse(halfW+128,yAlign,24,24);stroke(255);for(var t=9;t<180;t+=36){line(halfW+128-10*cos(t),yAlign-10*sin(t),halfW+128+10*cos(t),yAlign+10*sin(t));}noStroke();if(hov){fill(255,192,128);}else{fill(255,128,0);}if(greetedCosmic||darkEnergyResource<15000){fill(128);}ellipse(halfW+128,yAlign,12,12);if(hov){fill(0);textSize(12);textAlign(CENTER,BASELINE);text((g_PersistentData.statCosmic<3?"Greet ??? ??? ???":"Greet a Cosmic Being")+(greetedCosmic?"":" (-15k d. energy)")+" [Hotkey: G]",textX,textY0);text(greetedCosmic?(g_PersistentData.statCosmic<3?"??? has ??? ??? already":"She has helped you already."):(darkEnergyResource<15000?"Not enough dark energy.":(g_PersistentData.statCosmic<3?"??? might be ??? to ??? ???":"She might be willing to help you.")),textX,textY1);}
    }
    //DEC eye button:
    if(DEC_eye_button_visible())
    {
        hov=mouseX>=halfW+112&&mouseX<halfW+144&&mouseY>=yAlign-16&&mouseY<yAlign+16&&ticksToShowDayNumber===0;stroke(0);fill(hov&&darkEnergyResource>=500?128:0);ellipse(halfW+128,yAlign,24,24);fill(255);ellipse(halfW+128,yAlign,4,4);
        if(hov){fill(0);textSize(12);textAlign(CENTER,BASELINE);text("Gaze Into the Eye (-500 dark energy) [Hotkey: G]",textX,textY0);text(darkEnergyResource<500?"Not enough dark energy.":"Can you hear its thoughts?  It hears yours.",textX,textY1);}
    }
    //URC explore button:
    if(URC_explore_button_visible())
    {hov=mouseX>=halfW+112&&mouseX<halfW+144&&mouseY>=yAlign-16&&mouseY<yAlign+16&&ticksToShowDayNumber===0;stroke(0,0,0);if(hov){fill(128,160,192);}else{fill(0,64,128);}if(season===4||!get_can_afford_URC_explore()){fill(64,64,64);}ellipse(halfW+128,yAlign,24,24);noStroke();fill(0,0,0);rect(halfW+116,yAlign-2,6,4);arc(halfW+124,yAlign,8,8,90,270);if(hov){fill(240,240,128);}else{fill(224,224,0);}if(season===4||!get_can_afford_URC_explore()){fill(149,149,149);}arc(halfW+128,yAlign,22,22,-27,27);quad(halfW+124,yAlign-4,halfW+137,yAlign-5.5,halfW+137,yAlign+5.5,halfW+124,yAlign+4);if(hov){fill(0,0,0);textSize(12);textAlign(CENTER,BASELINE);text("Explore the Ruins ("+get_URC_explore_cost_string()+") [Hotkey: X]",textX,textY0);text(season===4?g_ICE_TOO_THICK:(!get_can_afford_URC_explore()?"Not enough resources.":"Who knows what treasures you may find?"),textX,textY1);}}
    //Power line button [B]:
    if(allTiles[selectedTile].claimed&&allTiles[selectedTile].hasTrainPowerLine&&allBuildings[0].upgradeLevel>=3&&currentlyInBackside)
    {hov=mouseX>=halfW+144&&mouseX<halfW+176&&mouseY>=yAlign-16&&mouseY<yAlign+16&&ticksToShowDayNumber===0;stroke(0);if(hov){fill(176);}else{fill(96);}ellipse(halfW+160,yAlign,24,24);noStroke();if(hov){fill(128,255,255);}else{fill(0,255,255);}rect(halfW+159,yAlign-11,3,22);if(hov){fill(0);textSize(12);textAlign(CENTER,BASELINE);text("Examine the Power Line [Hotkey: P]",textX,textY0);text("It's an energy conduit.  What's it for?",textX,textY1);}}
    //Accept a Delivery From the Train button [F]:
    if(allTiles[selectedTile].claimed&&allTiles[selectedTile].hasTrainPowerLine&&allBuildings[0].upgradeLevel>=3&&!currentlyInBackside&&(g_TrainHead.tileAt===selectedTile||g_TrainBody.tileAt===selectedTile||g_TrainTail.tileAt===selectedTile))
    {hov=mouseX>=halfW+144&&mouseX<halfW+176&&mouseY>=yAlign-16&&mouseY<yAlign+16&&ticksToShowDayNumber===0;stroke(0);if(hov){fill(240,240,160);}else{fill(224,224,64);}ellipse(halfW+160,yAlign,24,24);noStroke();if(hov){fill(192,160,128);}else{fill(128,64,0);}rect(halfW+159,yAlign-11,3,22);fill(255,0,0);rect(halfW+158,yAlign-8,5,16);if(hov){fill(0);textSize(12);textAlign(CENTER,BASELINE);text("Accept a Delivery From the Train [Hotkey: P]",textX,textY0);text("The Train periodically delivers freight to you.",textX,textY1);}}
    textAlign(LEFT,BASELINE);
};
var on_TAB_mouse_pressed = function()
{
    if( selectedTile === -1 ){return;}
    //Check y-pos first:
    if(mouseY<height-64||mouseY>=height-32){return;}
    var tile=allTiles[selectedTile],halfW=width/2;
    
    //Claim button or info button [FB]:
    if( mouseX >= halfW - 16 && mouseX < halfW + 16 )
    {
        if( !tile.claimed )
        {
            if( foodResource >= tile.food_cost_to_claim())
            {TAB_effect_claim();return;}
        }
        else
        {TAB_effect_info();return;}
    }
    //Fish button [F] or IRS button [F] or feed turtle button [FB] or golden claim button [FB] or manual mine button [F]:
    if( mouseX >= halfW + 16 && mouseX < halfW + 48 )
    {
        if( !tile.claimed && g_TechnologyManager.by_name( "Land Grabbing" ).researched && goldenAppleResource >= 1 )
        {TAB_effect_golden_claim();}
        else if(go_mining_button_visible()&&foodResource>=food_cost_to_manual_mine())
        {TAB_effect_go_mining();}
        else if(can_go_fishing())
        {TAB_effect_fish();}
        else if(allBuildings.get_tile_has(selectedTile,BT_IRS)&&!currentlyInBackside)
        {TAB_effect_IRS();}
        else if(tile.claimed&&allCreatures.get_on_tile(selectedTile,CT_TURTLE))
        {if((currentlyInBackside?mithrilResource:foodResource)>=cost_to_feed_turtle()){TAB_effect_feed_turtle();}}
        return;
    }
    //Build button or switch sides button [FB]:
    if( mouseX >= halfW - 48 && mouseX < halfW - 16 )
    {
        if( selectedTile === 28 && allBuildings[ 0 ].upgradeLevel > 1 )
        {TAB_effect_switch_sides();}
        else if(build_button_visible())
        {TAB_effect_build();}
        return;
    }
    //Research button or Diplomacy button [FB]:
    if( mouseX >= halfW - 80 && mouseX < halfW - 48 )
    {
        if(research_button_visible())
        {TAB_effect_research();return;}
        var merfolk=!currentlyInBackside&&season!==4&&g_PersistentData.currentChallenge!=="URC"&&allBuildings.get_tile_has(selectedTile,BT_MER_MALL);
        var reef=!currentlyInBackside&&season!==4&&g_Diplomacy.merfolkStanding>3&&allBuildings.get_tile_has(selectedTile,BT_REEF);
        var camels=!currentlyInBackside&&allCreatures.get_on_tile(selectedTile,CT_CAMEL);
        var cmind=currentlyInBackside&&selectedTile>-1&&allTiles[selectedTile].backsideTileType===TT_CYBERMIND;
        var giants=currentlyInBackside&&allCreatures.is_giant_on_tile(selectedTile);
        if(tile.claimed)
        {
            if(merfolk){TAB_effect_diplomacy_merfolk();}
            if(reef){TAB_effect_diplomacy_reef();}
            if(camels){TAB_effect_diplomacy_camels();}
            if(cmind){TAB_effect_diplomacy_cybermind();}
            if(giants){TAB_effect_diplomacy_giants();}
        }
    }
    //Kill slime button [F]:
    if( mouseX >= halfW + 48 && mouseX < halfW + 80 )
    {
        if(!currentlyInBackside&&can_kill_slime()){TAB_effect_kill_slime();}
    }
    //Enchant button [F], Power/Train line button [FB]:
    if( mouseX >= halfW + 144 && mouseX < halfW + 176 )
    {
        if(tile.claimed&&tile.hasTrainPowerLine&&allBuildings[0].upgradeLevel>=3){if(currentlyInBackside||g_TrainHead.tileAt===selectedTile||g_TrainBody.tileAt===selectedTile||g_TrainTail.tileAt===selectedTile){TAB_effect_train_power_line();}}
        else if(enchant_button_visible()&&g_TechnologyManager.by_name("Enchanting Table").researched&&season!==4){TAB_effect_enchant();}
        return;
    }
    //Terraform button [FB]:
    if( mouseX >= halfW + 80 && mouseX < halfW + 112 )
    {
        if(allBuildings.get_tile_has(selectedTile,currentlyInBackside?BT_BACKSIDE_TERRAFORMER:BT_TERRAFORMER)&&(currentlyInBackside?!allCreatures.is_giant_on_tile(selectedTile):tile.tileType!==TT_SLIMED))
        {
            TAB_effect_terraform();
        }
    }
    //DEC eye button [FB] or URC explore button [F]:
    if( mouseX >= halfW + 112 && mouseX < halfW + 144 )
    {
        if(DEC_eye_button_visible()&&darkEnergyResource>=500){TAB_effect_DEC_eye();return;}
        if(!greetedCosmic&&cosmic_button_visible()&&darkEnergyResource>=15000){TAB_effect_greet();return;}
        if(URC_explore_button_visible&&get_can_afford_URC_explore()&&season!==4)
        {
            TAB_effect_URC_explore();
            return;
        }
    }
};
var on_TAB_key_pressed = function()
{
    if(selectedTile===-1){return;}
    var tile=allTiles[selectedTile],hotkey=key.toString().toUpperCase();
    //Claim button:
    if(hotkey==="C"){if(!tile.claimed&&foodResource>=tile.food_cost_to_claim()){TAB_effect_claim();return;}}
    if(hotkey==="I"){if(tile.claimed){TAB_effect_info();return;}}
    //Fish button or feed the turtles button:
    if(hotkey==="F"){if(can_go_fishing()){TAB_effect_fish();return;}else if(tile.claimed&&allCreatures.get_on_tile(selectedTile,CT_TURTLE)){if((currentlyInBackside?mithrilResource:foodResource)>=cost_to_feed_turtle()){TAB_effect_feed_turtle();}return;}}
    //Build button or switch sides button:
    if(hotkey==="B"){if(selectedTile===28&&allBuildings[0].upgradeLevel>1){TAB_effect_switch_sides();return;}else if(build_button_visible()){TAB_effect_build();return;}}
    //Research button or IRS button:
    if(hotkey==="R"){if(research_button_visible()){TAB_effect_research();return;}if(allBuildings.get_tile_has(selectedTile,BT_IRS)&&!currentlyInBackside){TAB_effect_IRS();return;}}
    //Diplomacy button:
    if(hotkey==="D"){var merfolk=!currentlyInBackside&&season!==4&&g_PersistentData.currentChallenge!=="URC"&&allBuildings.get_tile_has(selectedTile,BT_MER_MALL);var reef=!currentlyInBackside&&season!==4&&g_Diplomacy.merfolkStanding>3&&allBuildings.get_tile_has(selectedTile,BT_REEF);var camels=!currentlyInBackside&&allCreatures.get_on_tile(selectedTile,CT_CAMEL);var cmind=currentlyInBackside&&selectedTile>-1&&allTiles[selectedTile].backsideTileType===TT_CYBERMIND;var giants=currentlyInBackside&&allCreatures.is_giant_on_tile(selectedTile);if(tile.claimed){if(merfolk){TAB_effect_diplomacy_merfolk();return;}if(reef){TAB_effect_diplomacy_reef();return;}if(camels){TAB_effect_diplomacy_camels();return;}if(cmind){TAB_effect_diplomacy_cybermind();return;}if(giants){TAB_effect_diplomacy_giants();return;}}}
    //Kill slime button:
    if(hotkey==="K"){if(!currentlyInBackside&&can_kill_slime()){TAB_effect_kill_slime();}}
    //Go mining button [F]:
    if(hotkey==="M"){if(go_mining_button_visible()&&foodResource>=food_cost_to_manual_mine()){TAB_effect_go_mining();return;}}
    //Enchant button:
    if(hotkey==="N"){if(enchant_button_visible()&&g_TechnologyManager.by_name("Enchanting Table").researched&&season!==4){TAB_effect_enchant();return;}}
    //Terraform button:
    if(hotkey==="T"){if(allBuildings.get_tile_has(selectedTile,currentlyInBackside?BT_BACKSIDE_TERRAFORMER:BT_TERRAFORMER)&&(currentlyInBackside?!allCreatures.is_giant_on_tile(selectedTile):tile.tileType!==TT_SLIMED)){TAB_effect_terraform();return;}}
    //DEC eye, cosmic, or golden claim button:
    if(hotkey==="G"){if(!tile.claimed&&g_TechnologyManager.by_name("Land Grabbing").researched&&goldenAppleResource>=1){TAB_effect_golden_claim();return;}if(DEC_eye_button_visible()&&darkEnergyResource>=500){TAB_effect_DEC_eye();return;}if(!greetedCosmic&&cosmic_button_visible()&&darkEnergyResource>=15000){TAB_effect_greet();return;}}
    if(hotkey==="P"){if(!tile.claimed||!tile.hasTrainPowerLine||allBuildings[0].upgradeLevel<3){return;}if(currentlyInBackside){TAB_effect_train_power_line();return;}if(!currentlyInBackside&&(g_TrainHead.tileAt===selectedTile||g_TrainBody.tileAt===selectedTile||g_TrainTail.tileAt===selectedTile)){TAB_effect_train_power_line();return;}}
    //URC Explore button:
    if(hotkey==="X"){if(URC_explore_button_visible&&get_can_afford_URC_explore()&&season!==4){TAB_effect_URC_explore();return;}}
};
} //Tile Action Buttons

//Main function:
var draw=function(){
try{background(255);globalCyclicAnimation+=1;globalCyclicAnimation%=360;gcaS=sin(globalCyclicAnimation);gcaC=cos(globalCyclicAnimation);for(var i=0;i<12;i+=1){smgfxx[i]=12*cos(30*i+globalCyclicAnimation);smgfxy[i]=-12*sin(30*i+globalCyclicAnimation);}switch(currentScreen){case"DEC-eye":case"greeting":case"house-upgraded":case"power-train-line":case"main":case"main-info":case "research":case "diplomacy":case "build":case "spells":case "terraforming":case "enchanting":case "IRS":check_day_end();break;case"artifacts":if(g_ArtifactManager.openTab!==4){check_day_end();}break;}
switch(currentScreen){case"frontend":render_frontend();break;case"photosensitivity":render_photosensitivity();return;case"credits":render_credits();break;case"changelog":render_changelog();break;case"play-menu":render_play_menu();break;case"load-error-message":render_loading_error_screen();break;case"tutorial-intro":render_tutorial_intro();break;case"tutorial-intro-stage":render_tutorial_intro_stage();break;case"tutorial-end-of-run":render_tutorial_end_of_run();break;case"end-of-run":g_PersistentData.render_end_of_run_screen();break;case"opening-cutscene":render_opening_cutscene();break;case"water-music-cutscene":render_water_music_cutscene();break;case"dark-energy-cutscene":render_dark_energy_cutscene();break;case"dark-energy-cutscene-2":render_dark_energy_cutscene_2();break;case"time-loop-cutscene-1":render_time_loop_cutscene(1);break;case"time-loop-cutscene-2":render_time_loop_cutscene(2);break;case"time-loop-cutscene-3":render_time_loop_cutscene(3);break;case"end-of-run-cutscene":render_end_of_run_cutscene();break;case"backside-cutscene":render_backside_cutscene();break;case"max-house-cutscene":render_max_house_cutscene();break;case"terraforming-confirm-turtle":case"terraforming-confirm-fish":case"terraforming-confirm-camels":render_terraforming_confirm_screen();break;case"DEC-eye":render_DEC_eye_screen();break;case"greeting":render_greet_screen();break;case"house-upgraded":render_house_upgraded_screen();break;case"power-train-line":render_lines_screen();break;case"artifacts":render_artifacts_screen();g_ResourcePane.render();break;case"artifact-found":render_artifact_found_screen();break;case"choose-season":render_choose_season_screen();break;case"challenges":g_PersistentData.render_challenges_screen();if(g_TutorialProgress.get_is_in_tutorial()){render_tutorial_challenges();}break;case"ultimate-shop":g_PersistentData.render_ultimate_shop_screen();break;case"persistent-statistics":case"artifact-persistent-statistics":g_PersistentData.render_persistent_statistics_screen();break;case"savegame":g_PersistentData.render_savegame_screen();break;case"quit-confirm":render_quit_confirm_screen();break;case"tutorial-swarm":render_tutorial_swarm();break;case"tutorial-slimes":render_tutorial_slimes();break;case"tutorial-2-bldgs":render_tutorial_2_buildings();break;case"tutorial-controls":render_tutorial_controls();break;case"tutorial-irs":render_tutorial_irs();break;
case"main":case"main-info":if(selectedTile>=0){var X=allTiles[selectedTile].x-width/2,Y=allTiles[selectedTile].y-height/2+24,x=cameraX-X,y=cameraY-Y;if(abs(x)<1){cameraX=X;}else{cameraX-=x/4;}if(abs(y)<1){cameraY=Y;}else{cameraY-=y/4;}}render_tiles_and_buildings();allEnchTableAnimations.draw_all();allGoldClaimAnimations.draw_all();allRWCLimiterAnimations.draw_all();render_general_info();if(g_TutorialProgress.get_is_in_tutorial()){g_TutorialProgress.draw();}if(!g_TutorialProgress.get_is_in_tutorial()||!g_TutorialProgress.showGoal){render_general_info_tooltips();}if(goldenClaimTilesLeft===0){render_tech_notification();render_artifacts_notification();render_spells_notification();g_ToggleButtonManager.draw();}if(goldenClaimTilesLeft>0){g_ResourcePane.render_factors();}else if(selectedTile===-1){g_ResourcePane.render();}else{draw_TABs();if(currentScreen==="main-info"){render_TAB_infobox();}}if(is_spells_button_visible()&&(selectedTile<0||(selectedTile>-1&&!allTiles[selectedTile].claimed))){stroke(0);fill(85);rect(width-42,96,64,24);fill(0);textSize(12);text("Spells",width-38,112);}break;case"food-breakdown":render_food_breakdown();break;case"mana-breakdown":render_mana_breakdown();break;case"pearl-breakdown":render_pearl_breakdown();break;case"stone-breakdown":render_stone_breakdown();break;case"spice-breakdown":render_spice_breakdown();break;case"gadolinium-breakdown":render_gadolinium_breakdown();break;case"flame-orb-breakdown":render_flame_orb_breakdown();break;case"iron-breakdown":render_iron_breakdown();break;case"golden-apple-breakdown":render_golden_apple_breakdown();break;case"dark-energy-breakdown":render_dark_energy_breakdown();break;case"bio-orb-breakdown":render_bio_orb_breakdown();break;case"mithril-breakdown":render_mithril_breakdown();break;case"max-evacuees-breakdown":render_max_evacuees_breakdown();break;case"mid-run-challenge-info":render_mid_run_ci_screen();break;case"certificate-of-completion":render_certificate_of_completion();break;case"research":render_research_screen();g_ResourcePane.render();break;case"diplomacy":render_diplomacy_screen();render_general_info();g_ResourcePane.render();break;case"build":render_build_screen();g_ResourcePane.render();break;case"spells":render_spells_screen();g_ResourcePane.render();if(g_TutorialProgress.get_is_in_tutorial()){render_tutorial_spells();}break;case"terraforming":if(currentlyInBackside){render_terraforming_screen_backside();}else{render_terraforming_screen_frontside();}g_ResourcePane.render();break;case"enchanting":render_enchanting_screen();g_ResourcePane.render();break;case"IRS":render_IRS_screen();g_ResourcePane.render();break;}if(!is_in_cutscene()){g_FlyingText.draw();g_EnchTableFlyingText.draw();allButtons.draw();if(ticksToShowDayNumber>0){render_day_start();ticksToShowDayNumber-=1;}}}catch(err){println("Error in the main draw() function");println(err);if(err.message){println(err.message);}}};

var resource_pane_gets_key_input=function(){
if(currentScreen==="tutorial-controls"){if(g_TutorialProgress.controls<15){return mouseX<118&&mouseY>=height-86;}else{return!0;}}return!(selectedTile>-1&&(currentScreen==="main"||currentScreen==="main-info")&&(mouseX>=118||mouseY<height-86));};

var mousePressed=function(){
try{if(ticksToShowDayNumber>0&&!is_in_cutscene()){ticksToShowDayNumber=0;return;}if(is_in_cutscene()&&mouseY>=350){if(mouseX<width/2){cutsceneTickCounter=0;}else{currentScreen=nextScreen;cutsceneTickCounter=0;}return;}switch(currentScreen){case"frontend":if(mouseX>=125&&mouseY>=175&&mouseX<275&&mouseY<225){cutsceneTickCounter=0;currentScreen=photosensitivityShown?"play-menu":"photosensitivity";if(g_LoadString.length<1){g_TutorialProgress.enable_tutorial();}g_TutorialProgress.general=constrain(g_TutorialProgress.general,-1,0);return;}if(mouseX>=125&&mouseY>=250&&mouseX<275&&mouseY<300){currentScreen="credits";return;}break;case"play-menu":if(mouseX>=50&&mouseY>=125&&mouseX<200&&mouseY<175){if(g_TutorialProgress.get_is_in_tutorial()){currentScreen="tutorial-intro";nextScreen="challenges";return;}currentScreen="challenges";return;}if(mouseX>=50&&mouseY>=225&&mouseX<200&&mouseY<275){g_TutorialProgress.disable_tutorial();if(g_LoadString.length===0){currentScreen="load-error-message";return;}if(g_PersistentData.load_from_save_string()){currentScreen="savegame";return;}else{currentScreen="load-error-message";return;}}if(mouseX>=60&&mouseY>=183&&mouseX<164&&mouseY<199){if(!g_TutorialProgress.get_is_in_tutorial()){g_TutorialProgress.enable_tutorial();}else{g_TutorialProgress.disable_tutorial();}}break;case"credits":case"changelog":if(mouseX>=10&&mouseX<width/2-5&&mouseY>=10&&mouseY<60){currentScreen="credits";return;}if(mouseX>=width/2+5&&mouseX<width-10&&mouseY>=10&&mouseY<60){currentScreen="changelog";return;}break;case"main":case"main-info":if(currentScreen==="main-info"&&mouseX>=80&&mouseX<width-80&&mouseY>=80&&mouseY<height-80){break;}if(mouseY>=height-86&&goldenClaimTilesLeft===0){if(selectedTile<0){g_ResourcePane.on_mouse_pressed();}else{on_TAB_mouse_pressed();return;}break;}if(goldenClaimTilesLeft===0&&g_ToggleButtonManager.on_mouse_pressed()){return;}if(mouseX>=width-32&&mouseY>=32&&mouseY<64&&goldenClaimTilesLeft===0){if(on_player_clicked_tech_notification()){return;}}if(g_TutorialProgress.get_is_in_tutorial()&&g_TutorialProgress.goals.length){if(dist(24,60,mouseX,mouseY)<=20||(mouseX>=48&&mouseY>=(g_TutorialProgress.showGoal?54-8*g_TutorialProgress.get_active_goal().conditions.length:46)&&mouseX<248&&mouseY<(g_TutorialProgress.showGoal?66+8*g_TutorialProgress.get_active_goal().conditions.length:74))){g_TutorialProgress.showGoal=!g_TutorialProgress.showGoal;return;}}{var bH=!1,i=0;for(;i<allButtons.length;i+=1){if(allButtons[i].hovered()&&allButtons[i].conditionFunc()){bH=!0;break;}}if(bH){break;}}var w=tile_under_cursor();if(w<0&&currentScreen==="main-info"){currentScreen="main";return;}attempt_select_tile(w);if(worldgenOption===5){if(mouseY<48-cameraY){allRWCLimiterAnimations.add(round32(mouseX+cameraX),32);}else if(mouseY>=304-cameraY){allRWCLimiterAnimations.add(round32(mouseX+cameraX),320);}}if(w>=0){return;}break;
case"food-breakdown":case"mana-breakdown":case"pearl-breakdown":case"stone-breakdown":case"spice-breakdown":case"gadolinium-breakdown":case"flame-orb-breakdown":case"iron-breakdown":case"golden-apple-breakdown":case"dark-energy-breakdown":case"bio-orb-breakdown":case"mithril-breakdown":case"max-evacuees-breakdown":if(g_ResourcePane.click_expander_button()){return;}break;case"research":if(mouseY>=height-86){g_ResourcePane.on_mouse_pressed();break;}if(mouseX>=16&&mouseY>=48&&mouseX<32&&mouseY<64){g_PersistentData.techOptionsShowPurchased=!g_PersistentData.techOptionsShowPurchased;return;}if(mouseX>=16&&mouseY>=80&&mouseX<32&&mouseY<96){g_PersistentData.techOptionsShowAvailable=!g_PersistentData.techOptionsShowAvailable;return;}if(mouseX>=16&&mouseY>=112&&mouseX<32&&mouseY<128){g_PersistentData.techOptionsShowUnavailable=!g_PersistentData.techOptionsShowUnavailable;return;}if(g_Diplomacy.camel_technology_unlocked()&&mouseX>=16&&mouseY>=144&&mouseX<32&&mouseY<160){g_PersistentData.techOptionsShowPurchasedFromCamels=!g_PersistentData.techOptionsShowPurchasedFromCamels;return;}{var R=research_under_cursor();if(R>-1&&R<g_TechnologyManager.nonCamelTechs.length&&g_TechnologyManager.nonCamelTechs[R].can_research()){g_TechnologyManager.nonCamelTechs[R].research();return;}}break;case"build":if(mouseY>=height-86){g_ResourcePane.on_mouse_pressed();break;}g_ConstructionManager.on_mouse_pressed();break;case"diplomacy":if(mouseY>=height-86){g_ResourcePane.on_mouse_pressed();break;}if(g_Diplomacy.currentlyMeetingWith==="merfolk"){if(mouseX>=0&&mouseX<32&&mouseY>=176&&mouseY<208){if(g_Diplomacy.focusedTrade>-1){g_Diplomacy.focusedTrade-=1;}return;}if(mouseX>=width-32&&mouseX<width&&mouseY>=176&&mouseY<208){if(g_Diplomacy.focusedTrade<g_Diplomacy.merfolkTrades.length-1){g_Diplomacy.focusedTrade+=1;}return;}if(g_Diplomacy.merfolkTradeUnlocked){var c=merfolk_trade_under_cursor(),x=g_Diplomacy.merfolkScreenOffset-240;if(c>-1){g_Diplomacy.merfolk_perform_trade(c);return;}if(g_Diplomacy.merfolk_get_can_upgrade_mall()){if(mouseX>=x+40&&mouseX<x+184&&mouseY>=132&&mouseY<154){g_Diplomacy.merfolk_upgrade_mall();return;}}}}else if(g_Diplomacy.currentlyMeetingWith==="reef"){if(g_ReefData.healthRecord>0&&mouseX>=width-28&&mouseY>=100&&mouseY<250){reefScreenShowBonuses=!reefScreenShowBonuses;return;}}break;case"spells":if(mouseY>=3&&mouseY<34){if(mouseX>=4&&mouseX<82){allSpells.subscreen=0;}if(mouseX>=86&&mouseX<164){allSpells.subscreen=1;}if(mouseX>=168&&mouseX<246){allSpells.subscreen=2;}break;}if(mouseY>=height-86){g_ResourcePane.on_mouse_pressed();break;}if(allSpells.subscreen!==2){if(g_ResourcePane.goldenAppleVisible&&goldenAppleResource>=1&&!allSpells.goldenAppleEaten&&mouseX>=16&&mouseX<48&&mouseY>=80-allSpells.scrollOffset&&mouseY<112-allSpells.scrollOffset&&mouseY>37&&mouseY<height-86){goldenAppleResource-=1;movesLeft-=1;allSpells.goldenAppleEaten=!0;}var S=spell_under_cursor();if(S>-1){allSpells[S].cast();return;}}break;
case"terraforming":if(mouseY>=height-86){g_ResourcePane.on_mouse_pressed();break;}if(mouseY>=160&&mouseY<192){var cT,lv=allBuildings[building_on_tile(selectedTile,currentlyInBackside?BT_BACKSIDE_TERRAFORMER:BT_TERRAFORMER)].upgradeLevel;if(mouseX>=width*1/8-16&&mouseX<width*1/8+16){cT=currentlyInBackside?TT_MITHRIL:TT_PLAINS;if(can_terraform_selected_tile(cT)&&can_afford_terraforming(TT_PLAINS,lv)){pay_terraforming_costs(cT,lv);terraform_selected_tile(cT);}return;}if(mouseX>=width*3/8-16&&mouseX<width*3/8+16){cT=currentlyInBackside?TT_LAVA:TT_DESERT;if(can_terraform_selected_tile(cT)&&can_afford_terraforming(TT_DESERT,lv)){pay_terraforming_costs(cT,lv);terraform_selected_tile(cT);}return;}if(mouseX>=width*5/8-16&&mouseX<width*5/8+16){cT=currentlyInBackside?TT_WASTELAND:TT_LAKE;if(can_terraform_selected_tile(cT)&&can_afford_terraforming(TT_LAKE,lv)){pay_terraforming_costs(cT,lv);terraform_selected_tile(cT);}return;}if(mouseX>=width*7/8-16&&mouseX<width*7/8+16){cT=currentlyInBackside?TT_CYBERMIND:TT_SWAMP;if(can_terraform_selected_tile(cT)&&can_afford_terraforming(cT,lv)){pay_terraforming_costs(cT,lv);terraform_selected_tile(cT);}return;}}break;case"enchanting":if(mouseY>=height-86){g_ResourcePane.on_mouse_pressed();break;}if(mouseX>=4&&mouseX<52){for(var i=0;i<6;i+=1){if(mouseY>=4+50*i&&mouseY<52+50*i){enchantingScreenSelection=i;return;}}break;}break;case"IRS":if(mouseY>=height-86){g_ResourcePane.on_mouse_pressed();break;}if(mouseY>=60&&mouseY<92){var D=allIRSDatas[allBuildings[building_on_tile(selectedTile,BT_IRS)].resourceProduction];if(mouseX>=4&&mouseX<width/4-4){D.openTab=1;return;}if(mouseX>=width/4+4&&mouseX<width/2-4){D.openTab=2;return;}if(mouseX>=width/2+4&&mouseX<3*width/4-4){D.openTab=3;return;}if(mouseX>=3*width/4+4&&mouseX<width-4){D.openTab=4;return;}}break;case"artifacts":if(mouseY<46){g_ArtifactManager.on_3_tab_buttons_pressed();break;}if(mouseY>=height-86){g_ResourcePane.on_mouse_pressed();break;}switch(g_ArtifactManager.openTab){case 1:g_ArtifactManager.on_click_to_upgrade();break;case 4:g_ArtifactManager.on_click_to_activate();break;}break;case"choose-season":if(mouseX>=width/4-70&&mouseX<width/4+70&&mouseY>=88&&mouseY<114){season=3;recalculate_building_effects();currentScreen=nextScreen;ticksToShowDayNumber=60;return;}if(mouseX>=3*width/4-70&&mouseX<3*width/4+70&&mouseY>=88&&mouseY<114){season=4;on_season_changed(3);recalculate_building_effects();currentScreen=nextScreen;ticksToShowDayNumber=60;return;}break;case"end-of-run":if(mouseX>=140&&mouseY>=335&&mouseX<260&&mouseY<375){currentScreen="challenges";return;}break;case"challenges":if(g_PersistentData.on_4_page_buttons_pressed()){break;}if(mouseX>=112&&mouseX<width-40&&mouseY>=height-48&&mouseY<height-16&&g_PersistentData.get_current_challenge_unlocked()&&!g_TutorialProgress.get_challenges_disabled()){g_PersistentData.start_new_run();worldgen_master_func(worldgenOption);return;}g_PersistentData.choose_challenge();break;case"ultimate-shop":if(!g_PersistentData.on_4_page_buttons_pressed()){g_PersistentData.purchase_ultimate_upgrade();}break;case"persistent-statistics":if(mouseX>=66&&mouseY>=325&&mouseX<334&&mouseY<375&&g_PersistentData.get_is_certificate_unlocked()){currentScreen="certificate-of-completion";return;}g_PersistentData.on_4_page_buttons_pressed();break;case"artifact-persistent-statistics":case"savegame":g_PersistentData.on_4_page_buttons_pressed();break;case"quit-confirm":if(mouseY>=150&&mouseY<225){if(mouseX>=25&&mouseX<100){currentScreen="savegame";return;}if(mouseX>=300&&mouseX<375){g_PersistentData.erase_all_data();currentScreen="frontend";return;}}break;case"certificate-of-completion":currentScreen="persistent-statistics";return;case"tutorial-controls":if(g_TutorialProgress.controls>14){g_ResourcePane.on_mouse_pressed();}break;}allButtons.on_mouse_pressed();}catch(err){println("Error in mousePressed()");println(err);if(err.message){println(err.message);}}};

var keyPressed=function(){
try{if(keyCode===SHIFT){shiftPressed=!0;return;}if(ticksToShowDayNumber>0&&!is_in_cutscene()){if(keyCode===UP||keyCode===DOWN||keyCode===LEFT||keyCode===RIGHT){ticksToShowDayNumber=0;}return;}if(shiftPressed&&resource_pane_gets_key_input){if(keyCode===LEFT&&currentScreen!=="ultimate-shop"){g_ResourcePane.move_left();return;}if(keyCode===RIGHT&&currentScreen!=="ultimate-shop"){g_ResourcePane.move_right();return;}}switch(currentScreen){case"build":if(keyCode===LEFT||keyCode===RIGHT){g_ConstructionManager.on_key_pressed();}return;case"ultimate-shop":if(keyCode===LEFT||keyCode===RIGHT){g_PersistentData.ultimate_shop_on_key_pressed();}return;case"main":case"main-info":var st=selectedTile;if(st>-1){var c=-1;if(keyCode===LEFT){c=tile_at_position(allTiles[st].x-32,allTiles[st].y);}else if(keyCode===RIGHT){c=tile_at_position(allTiles[st].x+32,allTiles[st].y);}else if(keyCode===UP){c=tile_at_position(allTiles[st].x,allTiles[st].y-32);if(c===-1&&allTiles[st].x<0){for(var i=0;i<allTiles.length;i+=1){if(allTiles[i].tileType===TT_MAP_EDGE&&allTiles[i].y===allTiles[st].y-32&&allTiles[i].x>=allTiles[st].x){c=i;break;}}}if(worldgenOption===5&&allTiles[st].y===64){allRWCLimiterAnimations.add(allTiles[st].x,32);}}else if(keyCode===DOWN){c=tile_at_position(allTiles[st].x,allTiles[st].y+32);if(c===-1&&allTiles[st].x<0){for(var i=0;i<allTiles.length;i+=1){if(allTiles[i].tileType===TT_MAP_EDGE&&allTiles[i].y===allTiles[st].y+32&&allTiles[i].x>=allTiles[st].x){c=i;break;}}}if(worldgenOption===5&&allTiles[st].y===288){allRWCLimiterAnimations.add(allTiles[st].x,320);}}if(c>-1&&allTiles[c].revealed){attempt_select_tile(c);}}return;case"challenges":if(keyCode===UP){g_PersistentData.choose_previous_challenge();}else if(keyCode===DOWN){g_PersistentData.choose_next_challenge();}return;case"spells":if(keyCode===LEFT&&allSpells.subscreen>0){allSpells.subscreen-=1;}else if(keyCode===RIGHT&&allSpells.subscreen<2){allSpells.subscreen+=1;}return;case"diplomacy":if(g_Diplomacy.currentlyMeetingWith==="merfolk"){if(keyCode===LEFT&&g_Diplomacy.focusedTrade>-1){g_Diplomacy.focusedTrade-=1;return;}if(keyCode===RIGHT&&g_Diplomacy.focusedTrade<g_Diplomacy.merfolkTrades.length-1){g_Diplomacy.focusedTrade+=1;return;}}break;case"IRS":{var d=allIRSDatas[allBuildings[building_on_tile(selectedTile,BT_IRS)].resourceProduction];if(keyCode===LEFT&&d.openTab>1){d.openTab-=1;return;}if(keyCode===RIGHT&&d.openTab<4){d.openTab+=1;return;}}break;case"artifacts":if(keyCode===LEFT&&g_ArtifactManager.openTab>0&&g_ArtifactManager.openTab<3){g_ArtifactManager.openTab-=1;return;}if(keyCode===RIGHT&&g_ArtifactManager.openTab<2){g_ArtifactManager.openTab+=1;return;}break;}}catch(err){println("Error in keyPressed()");println(err);if(err.message){println(err.message);}}};

var keyReleased=function(){
try{if(keyCode===SHIFT){shiftPressed=!1;}}catch(err){println("Error in keyReleased()");println(err);if(err.message){println(err.message);}}};

var keyTyped=function(){
try{if(ticksToShowDayNumber>0&&!is_in_cutscene()){ticksToShowDayNumber=0;return;}switch(currentScreen){case"main":case"main-info":if(key.toString().toUpperCase()==='H'){attempt_select_tile(28);return;}if(key.toString().toUpperCase()==='Q'&&g_TutorialProgress.get_is_in_tutorial()&&g_TutorialProgress.goals.length){g_TutorialProgress.showGoal=!g_TutorialProgress.showGoal;return;}if(goldenClaimTilesLeft===0){if(key.toString()==='\b'){attempt_select_tile(selectedTile);return;}if(selectedTile>-1){on_TAB_key_pressed();}}break;case"diplomacy":if(g_Diplomacy.currentlyMeetingWith==="merfolk"){if(key.code===32){if(g_Diplomacy.focusedTrade<0){if(g_Diplomacy.merfolk_get_can_upgrade_mall()){g_Diplomacy.merfolk_upgrade_mall();}return;}g_Diplomacy.merfolk_perform_trade(g_Diplomacy.focusedTrade);return;}}break;case"enchanting":if(key.code>=49&&key.code<=54){enchantingScreenSelection=key.code-49;return;}break;case"IRS":if(key.code>=49&&key.code<=52){allIRSDatas[allBuildings[building_on_tile(selectedTile,BT_IRS)].resourceProduction].openTab=key.code-48;return;}break;case"build":if(key.code===32){g_ConstructionManager.on_key_pressed();return;}break;case"artifacts":if(key.code>=49&&key.code<=51){g_ArtifactManager.openTab=key.code-49;return;}if(key.code===32&&g_ArtifactManager.openTab===3){g_ArtifactManager.openTab=1;return;}break;case"spells":if(key.code>=49&&key.code<=51){allSpells.subscreen=key.code-49;return;}break;case"challenges":case"ultimate-shop":case"persistent-statistics":case"artifact-persistent-statistics":case"savegame":if(g_PersistentData.on_4_page_key_pressed()){return;}break;case"artifact-found":if(key.code===32){currentScreen="artifacts";return;}break;case"power-train-line":if(key.code===32&&!currentlyInBackside&&g_TrainBody.freight.some(function(x){return x>0;})){allCreatures.accept_train_delivery();return;}break;case"certificate-of-completion":currentScreen="persistent-statistics";return;}allButtons.on_key_typed();}catch(err){println("Error in keyTyped()");println(err);if(err.message){println(err.message);}}};
//Wow, this is a lot of code.