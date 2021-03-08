Include.addScript('/Heavy/Utils/HeavyDataStorage.js');

class B787_10_FMC_HeavyConfigurationPage {
	static ShowPage1(fmc) {
		fmc.clearDisplay();
		fmc.setTemplate([
			['HEAVY CONFIGURATION'],
			[''],
			['', 'FUEL PUMPS ON'],
			[''],
			[''],
			[''],
			[''],
			[''],
			[''],
			[''],
			[''],
			[''],
			['<BACK']
		]);


		fmc.onLeftInput[5] = () => {
			B787_10_FMC_HeavyPage.ShowPage1(fmc);
		}

		fmc.onRightInput[0] = () => {
			SimVar.SetSimVarValue('K:FUELSYSTEM_PUMP_ON', 'Number', 1);
			SimVar.SetSimVarValue('K:FUELSYSTEM_PUMP_ON', 'Number', 2);
			SimVar.SetSimVarValue('K:FUELSYSTEM_PUMP_ON', 'Number', 3);
			SimVar.SetSimVarValue('K:FUELSYSTEM_PUMP_ON', 'Number', 4);
			SimVar.SetSimVarValue('K:FUELSYSTEM_PUMP_ON', 'Number', 5);
			SimVar.SetSimVarValue('K:FUELSYSTEM_PUMP_ON', 'Number', 6);
			B787_10_FMC_HeavyConfigurationPage.ShowPage1(fmc);
		}


		fmc.updateSideButtonActiveStatus();
	}
}