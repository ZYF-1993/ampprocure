export type CatalogHighlight = {
  label: string
  value: string
}

export type CatalogProduct = {
  id: string
  slug: string
  name: string
  category: string
  categoryCode: string
  catalogPage: number
  models: readonly string[]
  highlights: readonly CatalogHighlight[]
  technicalSummary: string
}

export const CATALOG_PRODUCTS = [
  {
    "id": "modified-inverter-10",
    "slug": "150w-modified-sine-wave-power-inverter-10",
    "name": "150W Modified Sine Wave Power Inverter",
    "category": "Modified Sine Wave Power Inverter",
    "categoryCode": "modified-inverter",
    "catalogPage": 10,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "M-150W-12V",
      "M-150W-24V",
      "M-150W-48V"
    ],
    "highlights": [
      {
        "label": "Rated Power",
        "value": "150W"
      },
      {
        "label": "Peak Power",
        "value": "300W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "(50Hz\u00b12Hz) or (60Hz\u00b12Hz)"
      },
      {
        "label": "Output Waveform",
        "value": "Modified sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "88% 90% 92% \"Alarm Bi\" with 2s interval +red and green lights flashing alternately"
      }
    ],
    "technicalSummary": "150W Modified sine wave power inverter Technicalparameters Model M-150W-12V M-150W-24V M-150W-48V Rated Power 150W PeakPower 300W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22640.2A \u22640.12A \u22640.08A Output Frequency (50Hz\u00b12Hz) or (60Hz\u00b12Hz) Output Waveform Modified sine wave Display / USB Output Votlage/ Current 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency 88% 90% 92% \"Alarm Bi\" with 2s interval +red and green lights flashing alternately Low Voltage Protection restart automatically whenvoltagerecover\" Over Voltage Protection \" Alarm \"BiBi\"\" with 1s interval +red and green lights flashing alternately restart automaticallywhenvoltage recover\" Over Load Protection If it is closed after twice recover, it need restart manually.\" Over TempProtection \"Alarm \"BiBiBi\" with 1s interval +red and green lights flashing alternately restart when temp recover\" Short Circuit Protection Yes DC Reverse ConnectionProtection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v Low Voltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v Over VoltageProtection Range 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0C~50\u2103 Cooling Method Fan cooling (Temperature control) Unit Size (mm) N.W/G.W(kg) 02."
  },
  {
    "id": "modified-inverter-11",
    "slug": "300w-modified-sine-wave-power-inverter-11",
    "name": "300W Modified Sine Wave Power Inverter",
    "category": "Modified Sine Wave Power Inverter",
    "categoryCode": "modified-inverter",
    "catalogPage": 11,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "M-300W-12V",
      "M-300W-24V",
      "M-300W-48V"
    ],
    "highlights": [
      {
        "label": "Rated Power",
        "value": "300W"
      },
      {
        "label": "Peak Power",
        "value": "600W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "(50Hz\u00b12Hz) or (60Hz\u00b12Hz)"
      },
      {
        "label": "Output Waveform",
        "value": "Modified sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "88% 90% 92% \"AlarmBi\" with 2s interval +red and green lights flashing alternately"
      }
    ],
    "technicalSummary": "300W Modified sine wave powerinverter Technicalparameters Model M-300W-12V M-300W-24V M-300W-48V Rated Power 300W Peak Power 600W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22640.35A \u22640.15A \u22640.1A Output Frequency (50Hz\u00b12Hz) or (60Hz\u00b12Hz) Output Waveform Modified sine wave Display USB Output Votlage/ Current 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency 88% 90% 92% \"AlarmBi\" with 2s interval +red and green lights flashing alternately Low Voltage Protection restart automatically when voltage recover\" Over Voltage Protection \" Alarm \"BiBi with 1s interval +red and green lights flashing alternately restart automatically when voltage recover\" \"Alarm\"Bi\" continously +red light flashing / restart automatically when load power recover; OverLoad Protection If it is closed after twice recover, it need restart manually.\" \"Alarm\"BiBiBi\"\" with 1s interval +red and green lights flashing alternately Over Temp Protection restart when temp recover\" Short Circuit Protection Yes DC Reverse ConnectionProtection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v Low Voltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v Over Voltage Protection Range 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0C~50\u00b0\u2103 Cooling Method Fan cooling (Temperature control) Unit Size (mm) 177mm*106mm*60mm N.W/G.W(kg) 0.64kg/0.88kg . 03."
  },
  {
    "id": "modified-inverter-12",
    "slug": "500w-modified-sine-wave-power-inverter-12",
    "name": "500W Modified Sine Wave Power Inverter",
    "category": "Modified Sine Wave Power Inverter",
    "categoryCode": "modified-inverter",
    "catalogPage": 12,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "M-500W-12V",
      "M-500W-24V",
      "M-500W-48V"
    ],
    "highlights": [
      {
        "label": "Rated Power",
        "value": "500W"
      },
      {
        "label": "Peak Power",
        "value": "1000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "(50Hz\u00b12Hz) or (60Hz\u00b12Hz)"
      },
      {
        "label": "Output Waveform",
        "value": "Modified sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "88% 90% 92%"
      }
    ],
    "technicalSummary": "500W Modifiedsinewave power inverter Technicalparameters Model M-500W-12V M-500W-24V M-500W-48V Rated Power 500W Peak Power 1000W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22640.5A \u22640.3A \u22640.2A Output Frequency (50Hz\u00b12Hz) or (60Hz\u00b12Hz) Output Waveform Modified sine wave Display / USB Output Votlage/ Current 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency 88% %06 92% Low Voltage Protection \"Alarm Bi\" with 2s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverVoltageProtection \"Alarm \"BiBi\"\" with 1s interval +red and green lights flashing alternately restartautomaticallywhenvoltagerecover\" Over Load Protection If it is closed after twice recover, it need restart manually.\" Over Temp Protection restart when temp recover\" Short Circuit Protection Yes DC Reverse ConnectionProtection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v Low Voltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v OverVoltageProtectionRange 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0C~50\u00b0\u2103 Cooling Method Fan cooling (Temperature control) Unit Size 218mm*106mm*60mm N.W/G.W 0.9kg/1.19kg 04"
  },
  {
    "id": "modified-inverter-13",
    "slug": "600w-modified-sine-wave-power-inverter-13",
    "name": "600W Modified Sine Wave Power Inverter",
    "category": "Modified Sine Wave Power Inverter",
    "categoryCode": "modified-inverter",
    "catalogPage": 13,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "M-600W-12V",
      "M-600W-24V",
      "M-600W-48V"
    ],
    "highlights": [
      {
        "label": "Rated Power",
        "value": "600W"
      },
      {
        "label": "Peak Power",
        "value": "1200W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "(50Hz\u00b12Hz) or (60Hz\u00b12Hz)"
      },
      {
        "label": "Output Waveform",
        "value": "Modified sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "88% 90% 92%"
      }
    ],
    "technicalSummary": "600W Modified sine wave power inverter Technicalparameters Model M-600W-12V M-600W-24V M-600W-48V Rated Power 600W PeakPower 1200W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22640.5A \u22640.3A \u22640.2A Output Frequency (50Hz\u00b12Hz) or (60Hz\u00b12Hz) Output Waveform Modified sine wave Display / USB Output Votlage/ Current 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency 88% %06 92% Low Voltage Protection \"Alarm \"Bi with 2s interval +red and green lights flashing alternately restart automatically when voltage recover\" \"Alarm BiBi\" with 1s interval +red and green lights flashing alternately Over Voltage Protection restart automatically when voltagerecover\" \"Alarm\"Bi continously +red light flashing /restart automatically when load powerrecover; Over Load Protection If it is closed after twice recover,it need restart manually.\" Over Temp Protection restart when temp recover\" Short CircuitProtection Yes DCReverse Connection Protection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v Low Voltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v OverVoltageProtectionRange 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0C~50\u00b0\u2103 Cooling Method Fan cooling (Temperature control) Unit Size 218mm*106mm*60mm N.W/G.W 0.9kg/1.19kg 05."
  },
  {
    "id": "modified-inverter-14",
    "slug": "1000w-modified-sine-wave-power-inverter-14",
    "name": "1000W Modified Sine Wave Power Inverter",
    "category": "Modified Sine Wave Power Inverter",
    "categoryCode": "modified-inverter",
    "catalogPage": 14,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "M-1000W-12V",
      "M-1000W-24V",
      "M-1000W-48V"
    ],
    "highlights": [
      {
        "label": "Rated Power",
        "value": "1000W"
      },
      {
        "label": "Peak Power",
        "value": "2000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "(50Hz\u00b12Hz) or (60Hz\u00b12Hz)"
      },
      {
        "label": "Output Waveform",
        "value": "Modified sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "88% 90% 92%"
      }
    ],
    "technicalSummary": "1000W Modified sine wave power inverter Technicalparameters Model M-1000W-12V M-1000W-24V M-1000W-48V Rated Power 1000W PeakPower 2000W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22640.5A \u22640.3A \u22640.2A Output Frequency (50Hz\u00b12Hz) or (60Hz\u00b12Hz) Output Waveform Modified sine wave Display / USB Output Votlage/Current 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency 88% 90% 92% Low Voltage Protection \"Alarm \"Bi\" with 2s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverVoltageProtection \"Alarm\"BiBi\"\" with 1s interval +red and green lights flashing alternately restartautomaticallywhenvoltagerecover\" Over Load Protection If it is closed after twice recover, it need restart manually.\" Over Temp Protection \"Alarm \"BiBiBi with 1s interval +red and green lights flashing alternately restart when temprecover\" Short CircuitProtection Yes DC Reverse ConnectionProtection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v Low Voltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v OverVoltageProtectionRange 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0C~50\u00b0\u2103 Cooling Method Fan cooling (Temperature control) Unit Size 275mm*135mm*76mm N.W/G.W 1.64kg/2.08kg .06."
  },
  {
    "id": "modified-inverter-15",
    "slug": "1200w-modified-sine-wave-power-inverter-15",
    "name": "1200W Modified Sine Wave Power Inverter",
    "category": "Modified Sine Wave Power Inverter",
    "categoryCode": "modified-inverter",
    "catalogPage": 15,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "M-1200W-12V",
      "M-1200W-24V",
      "M-1200W-48V"
    ],
    "highlights": [
      {
        "label": "Rated Power",
        "value": "1200W"
      },
      {
        "label": "Peak Power",
        "value": "2400W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "(50Hz\u00b12Hz) or (60Hz\u00b12Hz)"
      },
      {
        "label": "Output Waveform",
        "value": "Modified sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "88% 90% 92%"
      }
    ],
    "technicalSummary": "1200W Modified sinewave power inverter Technicalparameters Model M-1200W-12V M-1200W-24V M-1200W-48V Rated Power 1200W Peak Power 2400W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22640.5A \u22640.3A \u22640.2A Output Frequency (50Hz\u00b12Hz) or (60Hz\u00b12Hz) Output Waveform Modified sine wave Display LED or LCD display USB Output Votlage/ Current 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency 88% 90% 92% Low Voltage Protection \"Alarm Bi\" with 2s interval +red and green lights flashing alternately restartautomaticallywhenvoltagerecover\" OverVoltageProtection \"Alarm \"BiBi\"\" with 1s interval +red and green lights flashing alternately restart automatically when voltagerecover\" Over Load Protection If it is closed after twice recover, it need restart manually.\" Over Temp Protection restart when temp recover\" Short Circuit Protection Yes DC Reverse ConnectionProtection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v Low Voltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v OverVoltageProtectionRange 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0C~50\u00b0\u2103 Cooling Method Fan cooling (Temperature control) Unit Size 275mm*135mm*76mm N.W/G.W 1.64kg/2.08kg 07"
  },
  {
    "id": "modified-inverter-16",
    "slug": "1500w-modified-sine-wave-power-inverter-16",
    "name": "1500W Modified Sine Wave Power Inverter",
    "category": "Modified Sine Wave Power Inverter",
    "categoryCode": "modified-inverter",
    "catalogPage": 16,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "M-1500W-12V",
      "M-1500W-24V",
      "M-1500W-48V"
    ],
    "highlights": [
      {
        "label": "Rated Power",
        "value": "1500W"
      },
      {
        "label": "Peak Power",
        "value": "3000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "(50Hz\u00b12Hz) or (60Hz\u00b12Hz)"
      },
      {
        "label": "Output Waveform",
        "value": "Modified sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "88% 90% 92%"
      }
    ],
    "technicalSummary": "1500W Modifiedsinewave power inverter Technical parameters Model M-1500W-12V M-1500W-24V M-1500W-48V Rated Power 1500W PeakPower 3000W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage(Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22640.5A \u22640.3A \u22640.2A Output Frequency (50Hz\u00b12Hz) or (60Hz\u00b12Hz) Output Waveform Modified sine wave Display LED or LCD display USB Output Votlage/ Current 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency 88% %06 92% Low Voltage Protection \"Alarm \"\"Bi\"\" with 2s interval +red and green lights flashing alternately restart automatically when voltagerecover\" OverVoltageProtection \"Alarm \"BiBi\"\" with 1s interval +red and green lights flashing alternately restartautomaticallywhenvoltagerecover\" Over Load Protection \"Alarm \"Bi\" continously +red light flashing /restart automatically when load power recover; If it is closed after twice recover, it need restart manually.\" Over Temp Protection restart when temprecover\" Short CircuitProtection Yes DC Reverse ConnectionProtection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v Low Voltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v Over Voltage Protection Range 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0C~50\u00b0\u2103 Cooling Method Fan cooling (Temperature control) Unit Size 310mm*180mm*76mm N.W/G.W 3.0kg/3.65kg .08"
  },
  {
    "id": "modified-inverter-17",
    "slug": "2000w-modified-sine-wave-17",
    "name": "2000W Modified sine wave",
    "category": "Modified Sine Wave Power Inverter",
    "categoryCode": "modified-inverter",
    "catalogPage": 17,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "M-2000W-12V",
      "M-2000W-24V",
      "M-2000W-48V"
    ],
    "highlights": [
      {
        "label": "Rated Power",
        "value": "2000W"
      },
      {
        "label": "Peak Power",
        "value": "4000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "(50Hz\u00b12Hz) or (60Hz\u00b12Hz)"
      },
      {
        "label": "Output Waveform",
        "value": "Modified sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "88% 90% 92%"
      }
    ],
    "technicalSummary": "2000W Modified sine wave power inverter Technicalparameters Model M-2000W-12V M-2000W-24V M-2000W-48V Rated Power 2000W PeakPower 4000W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22640.6A \u22640.4A \u22640.25A Output Frequency (50Hz\u00b12Hz) or (60Hz\u00b12Hz) Output Waveform Modified sine wave Display LED or LCD display USB Output Votlage/ Current 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency 88% %06 92% Low Voltage Protection \"Alarm \"\"Bi\"\" with 2s interval +red and green lights flashing alternately restart automatically when voltagerecover\" OverVoltageProtection \"Alarm \"BiBi\"\" with 1s interval +red and green lights flashing alternately restart automatically when voltagerecover\" Over Load Protection \"Alarm \"Bi\" continously +red light flashing /restart automatically when load power recover; If it is closed after twice recover,it need restart manually.\" Over Temp Protection restart when temprecover\" Short Circuit Protection Yes DC Reverse ConnectionProtection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v Low Voltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v Over Voltage Protection Range 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0C~50\u00b0\u2103 Cooling Method Fan cooling (Temperature control) Unit Size 350mm*180mm*76mm N.W/G.W 3.85kg/4.5kg 09"
  },
  {
    "id": "modified-inverter-18",
    "slug": "3000w-modified-sine-wave-18",
    "name": "3000W Modified sine wave",
    "category": "Modified Sine Wave Power Inverter",
    "categoryCode": "modified-inverter",
    "catalogPage": 18,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "M-3000W-12V",
      "M-3000W-24V",
      "M-3000W-48V"
    ],
    "highlights": [
      {
        "label": "Rated Power",
        "value": "3000W"
      },
      {
        "label": "Peak Power",
        "value": "6000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "(50Hz\u00b12Hz) or (60Hz\u00b12Hz)"
      },
      {
        "label": "Output Waveform",
        "value": "Modified sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "88% 90% 92%"
      }
    ],
    "technicalSummary": "3000W Modified sine wave powerinverter Technicalparameters Model M-3000W-12V M-3000W-24V M-3000W-48V Rated Power 3000W PeakPower 6000W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22640.9A \u22640.5A \u22640.35A Output Frequency (50Hz\u00b12Hz) or (60Hz\u00b12Hz) Output Waveform Modified sine wave Display LED or LCD display USB Output Votlage/ Current 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency 88% 90% 92% Low Voltage Protection \"Alarm Bi\" with 2s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverVoltage Protection \"Alarm\"BiBi\"\" with 1s interval +red and green lights flashing alternately restart automatically when voltagerecover\"\" Over Load Protection If it is closed after twice recover, it need restart manually.\" Over Temp Protection restart when temp recover\" Short CircuitProtection Yes DC Reverse ConnectionProtection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v Low Voltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v OverVoltageProtectionRange 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0C~50\u00b0\u2103 Cooling Method Fan cooling (Temperature control) Unit Size 405mm*210mm*92mm N.W/G.W 5.35kg/6.35kg 10."
  },
  {
    "id": "modified-inverter-19",
    "slug": "4000w-modified-sine-wave-19",
    "name": "4000W Modified sine wave",
    "category": "Modified Sine Wave Power Inverter",
    "categoryCode": "modified-inverter",
    "catalogPage": 19,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "M-4000W-12V",
      "M-4000W-24V",
      "M-4000W-48V"
    ],
    "highlights": [
      {
        "label": "Rated Power",
        "value": "4000W"
      },
      {
        "label": "Peak Power",
        "value": "8000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "(50Hz\u00b12Hz) or (60Hz\u00b12Hz)"
      },
      {
        "label": "Output Waveform",
        "value": "Modified sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "88% 90% 92%"
      }
    ],
    "technicalSummary": "4000W Modified sine wave powerinverter \u96ea Technicalparameters Model M-4000W-12V M-4000W-24V M-4000W-48V Rated Power 4000W PeakPower 8000W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22640.9A \u22640.5A \u22640.35A Output Frequency (50Hz\u00b12Hz) or (60Hz\u00b12Hz) Output Waveform Modified sine wave Display LED or LCD display USB Output Votlage/ Current 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency 88% 90% 92% Low Voltage Protection \"Alarm Bi\" with 2s interval +red and green lights flashing alternately restart automatically whenvoltagerecover\" OverVoltage Protection \"Alarm\"BiBi\"\" with 1s interval +red and green lights flashing alternately restartautomaticallywhenvoltagerecover\" Over Load Protection If it is closed after twice recover, it need restart manually.\" Over Temp Protection restart when temp recover\" Short Circuit Protection Yes DC Reverse ConnectionProtection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v Low Voltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v OverVoltage Protection Range 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0C~50\u00b0\u2103 Cooling Method Fan cooling (Temperature control) Unit Size N.W/G.W 11"
  },
  {
    "id": "modified-inverter-20",
    "slug": "5000w-modified-sine-wave-20",
    "name": "5000W Modified sine wave",
    "category": "Modified Sine Wave Power Inverter",
    "categoryCode": "modified-inverter",
    "catalogPage": 20,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "M-5000W-12V",
      "M-5000W-24V",
      "M-5000W-48V"
    ],
    "highlights": [
      {
        "label": "Rated Power",
        "value": "5000W"
      },
      {
        "label": "Peak Power",
        "value": "10000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "(50Hz\u00b12Hz) or (60Hz\u00b12Hz)"
      },
      {
        "label": "Output Waveform",
        "value": "Modified sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "88% 90% 92%"
      }
    ],
    "technicalSummary": "5000W Modified sine wave powerinverter Technicalparameters Model M-5000W-12V M-5000W-24V M-5000W-48V Rated Power 5000W PeakPower 10000W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22640.9A \u22640.5A \u22640.35A Output Frequency (50Hz\u00b12Hz) or (60Hz\u00b12Hz) Output Waveform Modified sine wave Display LED or LCD display USB Output Votlage/ Current 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency 88% 90% 92% Low Voltage Protection \"Alarm Bi\" with 2s interval +red and green lights flashing alternately restartautomaticallywhenvoltagerecover\" OverVoltage Protection \"Alarm\"BiBi\"\" with 1s interval +red and green lights flashing alternately restartautomaticallywhenvoltagerecover\" Over Load Protection If it is closed after twice recover, it need restart manually.\" Over Temp Protection restart when temp recover\" Short Circuit Protection Yes DCReverse ConnectionProtection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v Low Voltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v OverVoltage Protection Range 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0C~50\u00b0\u2103 Cooling Method Fan cooling (Temperature control) Unit Size N.W/G.W 12"
  },
  {
    "id": "modified-inverter-21",
    "slug": "6000w-modified-sine-wave-21",
    "name": "6000W Modified sine wave",
    "category": "Modified Sine Wave Power Inverter",
    "categoryCode": "modified-inverter",
    "catalogPage": 21,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "M-6000W-12V",
      "M-6000W-24V",
      "M-6000W-48V"
    ],
    "highlights": [
      {
        "label": "Rated Power",
        "value": "6000W"
      },
      {
        "label": "Peak Power",
        "value": "12000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "(50Hz\u00b12Hz) or (60Hz\u00b12Hz)"
      },
      {
        "label": "Output Waveform",
        "value": "Modified sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "88% 90% 92%"
      }
    ],
    "technicalSummary": "6000W Modified sine wave power inverter Technicalparameters Model M-6000W-12V M-6000W-24V M-6000W-48V Rated Power 6000W PeakPower 12000W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22640.9A \u22640.5A \u22640.35A Output Frequency (50Hz\u00b12Hz) or (60Hz\u00b12Hz) Output Waveform Modified sine wave Display LED or LCD display USB Output Votlage/Current 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency 88% %06 92% Low Voltage Protection \"Alarm \"\"Bi\"\" with 2s interval +red and green lights flashing alternately restart automatically when voltagerecover\" OverVoltage Protection \"Alarm \"BiBi\"\" with 1s interval +red and green lights flashing alternately restart automatically when voltagerecover\" Over Load Protection \"Alarm \"Bi\" continously +red light flashing /restart automatically when load power recover; If it is closed after twice recover,it need restart manually.\" Over Temp Protection restart when temprecover\" Short Circuit Protection Yes DC Reverse ConnectionProtection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v Low Voltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v Over Voltage Protection Range 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0C~50\u00b0\u2103 Cooling Method Fan cooling(Temperature control) Unit Size 490mm*210mm*151mm N.W/G.W 9.7kg 13"
  },
  {
    "id": "pure-inverter-23",
    "slug": "150w-pure-sine-wave-power-inverter-23",
    "name": "150W Pure Sine Wave Power Inverter",
    "category": "Pure Sine Wave Power Inverter",
    "categoryCode": "pure-inverter",
    "catalogPage": 23,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "P-150W-12V",
      "P-150W-24V",
      "P-150W-48V"
    ],
    "highlights": [
      {
        "label": "Rated Power",
        "value": "150W"
      },
      {
        "label": "Peak Power",
        "value": "300W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "(50Hz\u00b12Hz) or (60Hz\u00b12Hz)"
      },
      {
        "label": "Output Waveform",
        "value": "Pure sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V@3.4A,9V@2A,12V@1.5A(Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "89% 91% 93% \"Alarm Bi\" with 2s interval +red and green lights flashing alternately"
      }
    ],
    "technicalSummary": "150W Pure sinewave power inverter Technicalparameters Model P-150W-12V P-150W-24V P-150W-48V Rated Power 150W Peak Power 300W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22640.55A \u22640.3A \u22640.18A Output Frequency (50Hz\u00b12Hz) or (60Hz\u00b12Hz) Output Waveform Pure sine wave Display / USB Output Votlage/ Current 5V@3.4A,9V@2A,12V@1.5A(Support QC3.0 fast charge up to 18W) Max.Output Efficiency 89% 91% 93% \"Alarm Bi\" with 2s interval +red and green lights flashing alternately Low Voltage Protection restart automatically whenvoltagerecover\" Over Voltage Protection \" Alarm \"BiBi\"\" with 1s interval +red and green lights flashing alternately restart automatically whenvoltage recover\" Over Load Protection If it is closed after twice recover, it need restart manually.\" Over Temp Protection \"Alarm \"BiBiBi\" with 1s interval +red and green lights flashing alternately restart when temp recover\" Short Circuit Protection Yes DC Reverse ConnectionProtection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v Low Voltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v Over VoltageProtection Range 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0C~50\u2103 Cooling Method Fan cooling (Temperature control) Unit Size (mm) N.W/G.W(kg) 15"
  },
  {
    "id": "pure-inverter-24",
    "slug": "300w-pure-sine-wave-24",
    "name": "300W Pure sine wave",
    "category": "Pure Sine Wave Power Inverter",
    "categoryCode": "pure-inverter",
    "catalogPage": 24,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "P-300W-12V",
      "P-300W-24V",
      "P-300W-48V"
    ],
    "highlights": [
      {
        "label": "Rated Power",
        "value": "300W"
      },
      {
        "label": "Peak Power",
        "value": "600W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "(50Hz\u00b12Hz) or (60Hz\u00b12Hz)"
      },
      {
        "label": "Output Waveform",
        "value": "Pure sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "89% 91% 93%"
      }
    ],
    "technicalSummary": "300W Pure sine wave powerinverter Technicalparameters Model P-300W-12V P-300W-24V P-300W-48V Rated Power 300W Peak Power 600W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22640.55A \u22640.3A \u22640.18A Output Frequency (50Hz\u00b12Hz) or (60Hz\u00b12Hz) Output Waveform Pure sine wave Display / USB Output Votlage/ Current 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency 89% 91% 93% Low Voltage Protection \"Alarm Bi\" with 2s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverVoltageProtection \"Alarm\"BiBi\"\" with 1s interval +red and green lights flashing alternately restart automatically when voltagerecover\"\" Over Load Protection If it is closed after twice recover, it need restart manually.\" Over Temp Protection restart when temp recover\" Short CircuitProtection Yes DC Reverse ConnectionProtection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v Low Voltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v OverVoltageProtectionRange 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0C~50\u00b0\u2103 Cooling Method Fan cooling (Temperature control) Unit Size 199mm*106mm*60mm N.W/G.W 0.8kg/1.06kg 16."
  },
  {
    "id": "pure-inverter-25",
    "slug": "500w-pure-sine-wave-power-inverter-25",
    "name": "500W Pure Sine Wave Power Inverter",
    "category": "Pure Sine Wave Power Inverter",
    "categoryCode": "pure-inverter",
    "catalogPage": 25,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "P-500W-12V",
      "P-500W-24V",
      "P-500W-48V"
    ],
    "highlights": [
      {
        "label": "Rated Power",
        "value": "500W"
      },
      {
        "label": "Peak Power",
        "value": "1000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "(50Hz\u00b12Hz) or (60Hz\u00b12Hz)"
      },
      {
        "label": "Output Waveform",
        "value": "Pure sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "88% 90% 92%"
      }
    ],
    "technicalSummary": "500W Puresinewave power inverter Technicalparameters Model P-500W-12V P-500W-24V P-500W-48V Rated Power 500W Peak Power 1000W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22640.6A \u22640.3A \u22640.2A Output Frequency (50Hz\u00b12Hz) or (60Hz\u00b12Hz) Output Waveform Pure sine wave Display / USB Output Votlage/ Current 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency 88% 90% 92% Low Voltage Protection \"Alarm Bi\" with 2s interval +red and green lights flashing alternately restartautomaticallywhenvoltagerecover\" OverVoltageProtection \"Alarm \"BiBi\"\" with 1s interval +red and green lights flashing alternately restart automatically when voltagerecover\" Over Load Protection If it is closed after twice recover, it need restart manually.\" Over Temp Protection restart when temp recover\" Short Circuit Protection Yes DC Reverse ConnectionProtection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v Low Voltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v OverVoltageProtectionRange 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0C~50\u00b0\u2103 Cooling Method Fan cooling (Temperature control) Unit Size 245mm*106mm*60mm N.W/G.W 1.06kg/1.34kg 17"
  },
  {
    "id": "pure-inverter-26",
    "slug": "600w-pure-sine-wave-26",
    "name": "600W Pure sine wave",
    "category": "Pure Sine Wave Power Inverter",
    "categoryCode": "pure-inverter",
    "catalogPage": 26,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "P-600W-12V",
      "P-600W-24V",
      "P-600W-48V"
    ],
    "highlights": [
      {
        "label": "Rated Power",
        "value": "600W"
      },
      {
        "label": "Peak Power",
        "value": "1200W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "(50Hz\u00b12Hz) or (60Hz\u00b12Hz)"
      },
      {
        "label": "Output Waveform",
        "value": "Pure sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "88% 90% 92%"
      }
    ],
    "technicalSummary": "600W Pure sine wave power inverter Technicalparameters Model P-600W-12V P-600W-24V P-600W-48V Rated Power 600W Peak Power 1200W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22640.6A \u22640.3A \u22640.2A Output Frequency (50Hz\u00b12Hz) or (60Hz\u00b12Hz) Output Waveform Pure sine wave Display / USB Output Votlage/ Current 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency 88% 90% 92% Low Voltage Protection \"Alarm Bi\" with 2s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverVoltageProtection \"Alarm\"BiBi\"\" with 1s interval +red and green lights flashing alternately restart automatically when voltagerecover\"\" Over Load Protection If it is closed after twice recover, it need restart manually.\" Over Temp Protection restart when temp recover\" Short CircuitProtection Yes DC Reverse ConnectionProtection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v Low Voltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v OverVoltageProtectionRange 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0C~50\u00b0\u2103 Cooling Method Fan cooling (Temperature control) Unit Size 245mm*106mm*60mm N.W/G.W 1.06kg/1.34kg 18"
  },
  {
    "id": "pure-inverter-27",
    "slug": "1000w-pure-sine-wave-27",
    "name": "1000W Pure sine wave",
    "category": "Pure Sine Wave Power Inverter",
    "categoryCode": "pure-inverter",
    "catalogPage": 27,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "P-1000W-12V",
      "P-1000W-24V",
      "P-1000W-48V"
    ],
    "highlights": [
      {
        "label": "Rated Power",
        "value": "1000W"
      },
      {
        "label": "Peak Power",
        "value": "2000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "(50Hz\u00b12Hz) or (60Hz\u00b12Hz)"
      },
      {
        "label": "Output Waveform",
        "value": "Pure sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "88% 90% 92%"
      }
    ],
    "technicalSummary": "1000W Pure sine wave power inverter Technicalparameters Model P-1000W-12V P-1000W-24V P-1000W-48V Rated Power 1000W Peak Power 2000W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22640.6A \u22640.3A \u22640.2A Output Frequency (50Hz\u00b12Hz) or (60Hz\u00b12Hz) Output Waveform Pure sine wave Display / USB Output Votlage/ Current 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency 88% 90% 92% Low Voltage Protection \"Alarm Bi\" with 2s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverVoltageProtection \"Alarm\"BiBi\"\" with 1s interval +red and green lights flashing alternately restart automatically when voltagerecover\"\" Over Load Protection If it is closed after twice recover, it need restart manually.\" Over Temp Protection restart when temp recover\" Short CircuitProtection Yes DC Reverse ConnectionProtection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v Low Voltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v OverVoltageProtectionRange 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0C~50\u00b0\u2103 Cooling Method Fan cooling (Temperature control) Unit Size 295mm*135mm*76mm N.W/G.W 1.9kg/2.35kg 19"
  },
  {
    "id": "pure-inverter-28",
    "slug": "1200w-pure-sine-wave-28",
    "name": "1200W Pure sine wave",
    "category": "Pure Sine Wave Power Inverter",
    "categoryCode": "pure-inverter",
    "catalogPage": 28,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "P-1200W-12V",
      "P-1200W-24V",
      "P-1200W-48V"
    ],
    "highlights": [
      {
        "label": "Rated Power",
        "value": "1200W"
      },
      {
        "label": "Peak Power",
        "value": "2400W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "(50Hz\u00b12Hz) or (60Hz\u00b12Hz)"
      },
      {
        "label": "Output Waveform",
        "value": "Pure sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V@3.4A,9V@2A,12V@1.5AA (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "88% 90% 92%"
      }
    ],
    "technicalSummary": "1200W Pure sine wave powerinverter Technicalparameters Model P-1200W-12V P-1200W-24V P-1200W-48V Rated Power 1200W Peak Power 2400W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22640.6A \u22640.3A \u22640.2A Output Frequency (50Hz\u00b12Hz) or (60Hz\u00b12Hz) Output Waveform Pure sine wave Display LED or LCD display USB Output Votlage/ Current 5V@3.4A,9V@2A,12V@1.5AA (Support QC3.0 fast charge up to 18W) Max.Output Efficiency 88% 90% 92% Low Voltage Protection \"Alarm Bi\" with 2s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverVoltageProtection \"Alarm\"BiBi\"\" with 1s interval +red and green lights flashing alternately restart automatically when voltagerecover\"\" Over Load Protection If it is closed after twice recover, it need restart manually.\" Over Temp Protection restart when temp recover\" Short CircuitProtection Yes DC Reverse ConnectionProtection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v Low Voltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v OverVoltageProtectionRange 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0C~50\u00b0\u2103 Cooling Method Fan cooling (Temperature control) Unit Size 295mm*135mm*76mm N.W/G.W 1.9kg/2.35kg .20."
  },
  {
    "id": "pure-inverter-29",
    "slug": "1500w-pure-sine-wave-29",
    "name": "1500W Pure sine wave",
    "category": "Pure Sine Wave Power Inverter",
    "categoryCode": "pure-inverter",
    "catalogPage": 29,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "P-1500W-12V",
      "P-1500W-24V",
      "P-1500W-48V"
    ],
    "highlights": [
      {
        "label": "Rated Power",
        "value": "1500W"
      },
      {
        "label": "Peak Power",
        "value": "3000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "(50Hz\u00b12Hz) or (60Hz\u00b12Hz)"
      },
      {
        "label": "Output Waveform",
        "value": "Pure sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "90% 92% 95%"
      }
    ],
    "technicalSummary": "1500W Pure sine wave power inverter Technicalparameters Model P-1500W-12V P-1500W-24V P-1500W-48V Rated Power 1500W Peak Power 3000W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22640.8A \u22640.4A \u22640.2A Output Frequency (50Hz\u00b12Hz) or (60Hz\u00b12Hz) Output Waveform Pure sine wave Display LED or LCD display USB Output Votlage/ Current 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency %06 92% 95% Low Voltage Protection \"Alarm Bi\" with 2s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverVoltageProtection \"Alarm\"BiBi\"\" with 1s interval +red and green lights flashing alternately restart automatically when voltagerecover\"\" Over Load Protection If it is closed after twice recover, it need restart manually.\" Over Temp Protection restart when temp recover\" Short CircuitProtection Yes DC Reverse ConnectionProtection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v Low Voltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v OverVoltageProtectionRange 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0C~50\u00b0\u2103 Cooling Method Fan cooling (Temperature control) Unit Size 335mm*180mm*76mm N.W/G.W 3.42kg/4kg 21"
  },
  {
    "id": "pure-inverter-30",
    "slug": "2000w-pure-sine-wave-power-inverter-30",
    "name": "2000W Pure Sine Wave Power Inverter",
    "category": "Pure Sine Wave Power Inverter",
    "categoryCode": "pure-inverter",
    "catalogPage": 30,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "P-2000W-12V",
      "P-2000W-24V",
      "P-2000W-48"
    ],
    "highlights": [
      {
        "label": "Rated Power",
        "value": "2000W"
      },
      {
        "label": "Peak Power",
        "value": "4000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "(50Hz\u00b12Hz) or (60Hz\u00b12Hz)"
      },
      {
        "label": "Output Waveform",
        "value": "Pure sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "90% 92% 95%"
      }
    ],
    "technicalSummary": "2000W Puresinewave powerinverter 2000W Technicalparameters Model P-2000W-12V P-2000W-24V P-2000W-48 Rated Power 2000W PeakPower 4000W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22640.9A \u22640.55A \u22640.3A Output Frequency (50Hz\u00b12Hz) or (60Hz\u00b12Hz) Output Waveform Pure sine wave Display LED or LCD display USB Output Votlage/Current 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency %06 92% 95% Low Voltage Protection \"Alarm Bi\" with 2s interval +red and green lights flashing alternately restartautomaticallywhenvoltagerecover\" OverVoltage Protection \"Alarm\"BiBi\"\" with 1s interval +red and green lights flashing alternately restartautomaticallywhenvoltagerecover\" Over Load Protection If it is closed after twice recover, it need restart manually.\" Over Temp Protection restart when temp recover\" Short Circuit Protection Yes DCReverse ConnectionProtection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low VoltageProtection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v Low Voltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v OverVoltageProtectionRange 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0C~50\u00b0\u2103 Cooling Method Fan cooling (Temperature control) Unit Size 365mm*210mm*92mm N.W/G.W 4.7kg/5.48kg 22"
  },
  {
    "id": "pure-inverter-31",
    "slug": "3000w-pure-sine-wave-31",
    "name": "3000W Pure sine wave",
    "category": "Pure Sine Wave Power Inverter",
    "categoryCode": "pure-inverter",
    "catalogPage": 31,
    "models": [
      "DC24V",
      "DC48V",
      "P-3000W-12V",
      "P-3000W-24V",
      "P-3000W-48V"
    ],
    "highlights": [
      {
        "label": "Rated Power",
        "value": "3000W"
      },
      {
        "label": "Peak Power",
        "value": "6000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC1 2V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "(50Hz\u00b12Hz) or (60Hz\u00b12Hz)"
      },
      {
        "label": "Output Waveform",
        "value": "Pure sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "90% 92% 95%"
      }
    ],
    "technicalSummary": "3000W Pure sine wave power inverter 3000W Technical parameters Model P-3000W-12V P-3000W-24V P-3000W-48V Rated Power 3000W Peak Power 6000W DC Input Voltage Range DC1 2V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22641A \u22640.7A \u22640.4A Output Frequency (50Hz\u00b12Hz) or (60Hz\u00b12Hz) Output Waveform Pure sine wave Display LED or LCD display USB Output Votlage/ Current 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency %06 92% 95% Low Voltage Protection \"Alarm Bi\" with 2s interval +red and green lights flashing alternately restartautomaticallywhenvoltagerecover\" OverVoltageProtection \"Alarm \"BiBi\"\" with 1s interval +red and green lights flashing alternately restart automatically when voltagerecover\" Over Load Protection If it is closed after twice recover, it need restart manually.\" Over Temp Protection restart when temp recover\" Short Circuit Protection Yes DC Reverse ConnectionProtection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v Low Voltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v OverVoltageProtectionRange 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0C~50\u00b0\u2103 Cooling Method Fan cooling (Temperature control) Unit Size 445mm*210mm*92mm N.W/G.W 6.3kg/7.3kg 23"
  },
  {
    "id": "pure-inverter-32",
    "slug": "4000w-pure-sine-wave-power-inverter-32",
    "name": "4000W Pure Sine Wave Power Inverter",
    "category": "Pure Sine Wave Power Inverter",
    "categoryCode": "pure-inverter",
    "catalogPage": 32,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "P-4000W-12V",
      "P-4000W-24V",
      "P-4000W-48V"
    ],
    "highlights": [
      {
        "label": "Rated Power",
        "value": "4000W"
      },
      {
        "label": "Peak Power",
        "value": "8000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "(50Hz\u00b12Hz) or (60Hz\u00b12Hz)"
      },
      {
        "label": "Output Waveform",
        "value": "Pure sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "90% 92% 95%"
      }
    ],
    "technicalSummary": "4000W Puresinewave powerinverter Technicalparameters Model P-4000W-12V P-4000W-24V P-4000W-48V Rated Power 4000W PeakPower 8000W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22641A \u22640.7A \u22640.4A Output Frequency (50Hz\u00b12Hz) or (60Hz\u00b12Hz) Output Waveform Pure sine wave Display LED or LCD display USB Output Votlage/ Current 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency %06 92% 95% Low Voltage Protection \"Alarm Bi\" with 2s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverVoltageProtection \"Alarm\"BiBi\"\" with 1s interval +red and green lights flashing alternately restart automatically when voltagerecover\"\" Over Load Protection If it is closed after twice recover, it need restart manually.\" Over Temp Protection restart when temp recover\" Short CircuitProtection Yes DC Reverse ConnectionProtection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v Low Voltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v OverVoltageProtectionRange 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0C~50\u00b0\u2103 Cooling Method Fan cooling (Temperature control) Unit Size N.W/G.W 24"
  },
  {
    "id": "pure-inverter-33",
    "slug": "5000w-pure-sine-wave-power-inverter-33",
    "name": "5000W Pure Sine Wave Power Inverter",
    "category": "Pure Sine Wave Power Inverter",
    "categoryCode": "pure-inverter",
    "catalogPage": 33,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "P-5000W-12V",
      "P-5000W-24V",
      "P-5000W-48V"
    ],
    "highlights": [
      {
        "label": "Rated Power",
        "value": "5000W"
      },
      {
        "label": "Peak Power",
        "value": "10000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "(50Hz\u00b12Hz) or (60Hz\u00b12Hz)"
      },
      {
        "label": "Output Waveform",
        "value": "Pure sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "90% 92% 95%"
      }
    ],
    "technicalSummary": "5000W Puresinewave powerinverter Technicalparameters Model P-5000W-12V P-5000W-24V P-5000W-48V Rated Power 5000W PeakPower 10000W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22641.2A \u22640.8A \u22640.5A Output Frequency (50Hz\u00b12Hz) or (60Hz\u00b12Hz) Output Waveform Pure sine wave Display LED or LCD display USB Output Votlage/ Current 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency %06 92% 95% Low Voltage Protection \"Alarm Bi\" with 2s interval +red and green lights flashing alternately restart automatically whenvoltagerecover\" OverVoltage Protection \"Alarm\"BiBi\"\" with 1s interval +red and green lights flashing alternately restartautomaticallywhenvoltagerecover\" Over Load Protection If it is closed after twice recover, it need restart manually.\" Over Temp Protection restart when temp recover\" Short Circuit Protection Yes DC Reverse ConnectionProtection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v Low Voltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v OverVoltage Protection Range 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0C~50\u00b0\u2103 Cooling Method Fan cooling (Temperature control) Unit Size N.W/G.W 25"
  },
  {
    "id": "pure-inverter-34",
    "slug": "6000w-pure-sine-wave-power-inverter-34",
    "name": "6000W Pure Sine Wave Power Inverter",
    "category": "Pure Sine Wave Power Inverter",
    "categoryCode": "pure-inverter",
    "catalogPage": 34,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "P-6000W-12V",
      "P-6000W-24V",
      "P-6000W-48V"
    ],
    "highlights": [
      {
        "label": "Rated Power",
        "value": "6000W"
      },
      {
        "label": "Peak Power",
        "value": "12000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "(50Hz\u00b12Hz) or (60Hz\u00b12Hz)"
      },
      {
        "label": "Output Waveform",
        "value": "Pure sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "90% 92% 95%"
      }
    ],
    "technicalSummary": "6000W Puresinewave powerinverter Technicalparameters Model P-6000W-12V P-6000W-24V P-6000W-48V Rated Power 6000W PeakPower 12000W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22641.2A \u22640.8A \u22640.5A Output Frequency (50Hz\u00b12Hz) or (60Hz\u00b12Hz) Output Waveform Pure sine wave Display LED or LCD display USB Output Votlage/ Current 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency %06 92% 95% Low Voltage Protection \"Alarm Bi\" with 2s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverVoltageProtection \"Alarm\"BiBi\"\" with 1s interval +red and green lights flashing alternately restart automatically when voltagerecover\"\" Over Load Protection If it is closed after twice recover, it need restart manually.\" Over Temp Protection restart when temp recover\" Short CircuitProtection Yes DC Reverse ConnectionProtection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v Low Voltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v OverVoltageProtectionRange 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0C~50\u00b0\u2103 Cooling Method Fan cooling (Temperature control) Unit Size N.W/G.W .26"
  },
  {
    "id": "ups-36",
    "slug": "300w-uninterruptible-36",
    "name": "300W Uninterruptible",
    "category": "Uninterruptible Power Source",
    "categoryCode": "ups",
    "catalogPage": 36,
    "models": [
      "DC12V",
      "DC24V",
      "JYMU-300-1",
      "JYMU-300-2",
      "OFZHO09"
    ],
    "highlights": [
      {
        "label": "Peak Power",
        "value": "600W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V DC24V DC12V DC24V"
      },
      {
        "label": "Output Voltage",
        "value": "100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15%"
      },
      {
        "label": "Output Frequency",
        "value": "ZHS'OFZHO09 JO ZHS'OFZHOS"
      },
      {
        "label": "Output Waveform",
        "value": "Modified Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency 90%"
      },
      {
        "label": "Efficiency",
        "value": "90%"
      }
    ],
    "technicalSummary": "300W Uninterruptible powersource Technical parameters Model JYMU-300-1 JYMU-300-1 JYMU-300-2 JYMU-300-2 PeakPower 600W Input Voltage DC12V DC24V DC12V DC24V Output Voltage 100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15% Unload Current Less Than 0.7A 0.4A 0.7A 0.4A Output Frequency ZHS'OFZHO09 JO ZHS'OFZHOS Output Waveform Modified Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency %06 Input Current 10A Input Voltage Range 10-15.5V 20-31V 10-15.5V 20-31V Low Voltage Alarm 10.5\u00b10.5V 21\u00b10.5V 10.5\u00b10.5V 21\u00b10.5V Low VoltageProtection 10\u00b10.5V 20\u00b10.5V 10\u00b10.5V 20\u00b10.5V Over Voltage Protection 15.5\u00b10.5V 31\u00b10.5V 15.5\u00b10.5V 31\u00b10.5V Low Voltage Recover 12.3\u00b10.5V 24\u00b10.5V 12.3\u00b10.5V 24\u00b10.5V Over Voltage Recover 14.8V\u00b10.5V 29.5V\u00b10.5V 14.8V\u00b10.5V 29.5V\u00b10.5V Low Voltage Protection \"Alarm \"Bi with 2s interval +red and green lights flashing alternately restart automatically whenvoltage recover\" \"Alarm \"*BiBi with 1s interval +red and green lights flashing alternately Over Voltage Protection restart automatically whenvoltage recover\" Over Load Protection If it isclosed after twicerecover,it needrestart manually.\" Over TemperatureProtection \u201cAlarm\"BiBiBi with 1s interval +red and green lights flashing alternately restartwhen temprecover\" Short Circuit Protection Yes Output Current 15A 10A 15A 10A BulkCharge 15A 10A 15A 10A Absorption 14.6VDC 28.8VDC 14.6VDC 28.8VDC Float ChargingVoltage 13.8VDC 27.6VDC 13.8VDC 27.6VDC Ac Input Voltage Range 190~260VAC 90-135VAC 190~260VAC 90-135VAC Cooling Method Intelligent air cooling Unit Size 270*135*78mm N.W/G.W .28"
  },
  {
    "id": "ups-37",
    "slug": "500w-uninterruptible-power-source-37",
    "name": "500W Uninterruptible Power Source",
    "category": "Uninterruptible Power Source",
    "categoryCode": "ups",
    "catalogPage": 37,
    "models": [
      "DC12V",
      "DC24V",
      "JYMU-500-1",
      "JYMU-500-2"
    ],
    "highlights": [
      {
        "label": "Peak Power",
        "value": "1000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V DC24V DC12V DC24V"
      },
      {
        "label": "Output Voltage",
        "value": "100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15%"
      },
      {
        "label": "Output Frequency",
        "value": "ZHS0ZHO9 JO ZHS0ZHOS"
      },
      {
        "label": "Output Waveform",
        "value": "Modified Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency 90%"
      },
      {
        "label": "Efficiency",
        "value": "90%"
      }
    ],
    "technicalSummary": "500W Uninterruptible powersource Technical parameters Model JYMU-500-1 JYMU-500-1 JYMU-500-2 JYMU-500-2 Peak Power 1000W Input Voltage DC12V DC24V DC12V DC24V Output Voltage 100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15% Unload Current Less Than 0.7A 0.4A 0.7A 0.4A OutputFrequency ZHS0ZHO9 JO ZHS0ZHOS Output Waveform Modified Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency %06 Input Current 10A Input Voltage Range 10-15.5V 20-31V 10-15.5V 20-31V Low Voltage Alarm 10.5\u00b10.5V 21\u00b10.5V 10.5\u00b10.5V 21\u00b10.5V Low Voltage Protection 10\u00b10.5V 20\u00b10.5V 10\u00b10.5V 20\u00b10.5V Over Voltage Protection 15.5\u00b10.5V 31\u00b10.5V 15.5\u00b10.5V 31\u00b10.5V Low Voltage Recover 12.3\u00b10.5V 24\u00b10.5V 12.3\u00b10.5V 24\u00b10.5V Over Voltage Recover 14.8V\u00b10.5V 29.5V\u00b10.5V 14.8V\u00b10.5V 29.5V\u00b10.5V Low Voltage Protection \"Alarm \"Bi with 2s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverVoltage Protection \"Alarm\"BiBi\" with 1s interval +red and green lights flashing alternately restartautomaticallywhenvoltagerecover\" OverLoadProtection If it is closed after twice recover, it need restart manually.\" \"Alarm \"\"BiBiBi with 1s interval +red and green lights flashing alternately OverTemperatureProtection restart when temprecover\" Short Circuit Protection Yes Output Current 15A 10A 15A 10A BulkCharge 15A 10A 15A 10A Absorption 14.6VDC 28.8VDC 14.6VDC 28.8VDC Float ChargingVoltage 13.8VDC 27.6VDC 13.8VDC 27.6VDC Ac Input Voltage Range 190~260VAC 90-135VAC 190~260VAC 90-135VAC Cooling Method Intelligent air cooling Unit Size 250*135*76mm N.W/G.W 29"
  },
  {
    "id": "ups-38",
    "slug": "600w-uninterruptible-power-source-38",
    "name": "600W Uninterruptible Power Source",
    "category": "Uninterruptible Power Source",
    "categoryCode": "ups",
    "catalogPage": 38,
    "models": [
      "DC12V",
      "DC24V",
      "JYMU-600-1",
      "JYMU-600-2"
    ],
    "highlights": [
      {
        "label": "Peak Power",
        "value": "1200W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V DC24V DC12V DC24V"
      },
      {
        "label": "Output Voltage",
        "value": "100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15%"
      },
      {
        "label": "Output Frequency",
        "value": "ZHS0ZHO9 JO ZHS0ZHOS"
      },
      {
        "label": "Output Waveform",
        "value": "Modified Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency 90%"
      },
      {
        "label": "Efficiency",
        "value": "90%"
      }
    ],
    "technicalSummary": "600W Uninterruptible powersource Technical parameters Model JYMU-600-1 JYMU-600-1 JYMU-600-2 JYMU-600-2 Peak Power 1200W Input Voltage DC12V DC24V DC12V DC24V Output Voltage 100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15% Unload Current Less Than 0.7A 0.4A 0.7A 0.4A OutputFrequency ZHS0ZHO9 JO ZHS0ZHOS Output Waveform Modified Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency %06 Input Current 10A Input Voltage Range 10-15.5V 20-31V 10-15.5V 20-31V Low Voltage Alarm 10.5\u00b10.5V 21\u00b10.5V 10.5\u00b10.5V 21\u00b10.5V Low Voltage Protection 10\u00b10.5V 20\u00b10.5V 10\u00b10.5V 20\u00b10.5V Over Voltage Protection 15.5\u00b10.5V 31\u00b10.5V 15.5\u00b10.5V 31\u00b10.5V Low Voltage Recover 12.3\u00b10.5V 24\u00b10.5V 12.3\u00b10.5V 24\u00b10.5V Over Voltage Recover 14.8V\u00b10.5V 29.5V\u00b10.5V 14.8V\u00b10.5V 29.5V\u00b10.5V Low Voltage Protection \"Alarm \"Bi with 2s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverVoltage Protection \"Alarm\"BiBi\" with 1s interval +red and green lights flashing alternately restartautomaticallywhenvoltagerecover\" OverLoadProtection If it is closed after twice recover, it need restart manually.\" \"Alarm \"\"BiBiBi with 1s interval +red and green lights flashing alternately OverTemperatureProtection restart when temprecover\" Short Circuit Protection Yes Output Current 15A 10A 15A 10A BulkCharge 15A 10A 15A 10A Absorption 14.6VDC 28.8VDC 14.6VDC 28.8VDC Float Charging Voltage 13.8VDC 27.6VDC 13.8VDC 27.6VDC Ac Input Voltage Range 190~260VAC 90-135VAC 190~260VAC 90-135VAC Cooling Method Intelligent air cooling Unit Size 250*135*76mm N.W/G.W .30."
  },
  {
    "id": "ups-39",
    "slug": "1000w-uninterruptible-39",
    "name": "1000W Uninterruptible",
    "category": "Uninterruptible Power Source",
    "categoryCode": "ups",
    "catalogPage": 39,
    "models": [
      "DC12V",
      "DC24V",
      "JYMU-1000-1",
      "JYMU-1000-2"
    ],
    "highlights": [
      {
        "label": "Peak Power",
        "value": "2000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V DC24V DC12V DC24V"
      },
      {
        "label": "Output Voltage",
        "value": "100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15%"
      },
      {
        "label": "Output Frequency",
        "value": "ZHSOZHO9 JO ZHSOZHOS"
      },
      {
        "label": "Output Waveform",
        "value": "Modified Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency 90%"
      },
      {
        "label": "Efficiency",
        "value": "90%"
      }
    ],
    "technicalSummary": "1000W Uninterruptible powersourcei Technicalparameters Model JYMU-1000-1 JYMU-1000-1 JYMU-1000-2 JYMU-1000-2 Peak Power 2000W Input Voltage DC12V DC24V DC12V DC24V Output Voltage 100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15% Unload Current Less Than 0.8A 0.5A 0.8A 0.5A Output Frequency ZHSOZHO9 JO ZHSOZHOS Output Waveform Modified Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency %06 Input Current 20A Input Voltage Range 10-15.5V 20-31V 10-15.5V 20-31V Low Voltage Alarm 10.5\u00b10.5V 21\u00b10.5V 10.5\u00b10.5V 21\u00b10.5V Low Voltage Protection 10\u00b10.5V 20\u00b10.5V 10\u00b10.5V 20\u00b10.5V OverVoltage Protection 15.5\u00b10.5V 31\u00b10.5V 15.5\u00b10.5V 31\u00b10.5V Low Voltage Recover 12.3\u00b10.5V 24\u00b10.5V 12.3\u00b10.5V 24\u00b10.5V Over Voltage Recover 14.8V\u00b10.5V 29.5V\u00b10.5V 14.8V\u00b10.5V 29.5V\u00b10.5V Low Voltage Protection \"Alarm \"Bi with 2s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverVoltage Protection \"Alarm\"BiBi with 1s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverLoadProtection If it is closed after twice recover, it need restart manually.\" \" Alarm \"\"BiBiBi with 1s interval +red and green lights flashing alternately OverTemperatureProtection restart when temprecover\" Short Circuit Protection Yes Output Current 20A 10A 20A 10A BulkCharge 20A 10A 20A 10A Absorption 14.6VDC 28.8VDC 14.6VDC 28.8VDC Float ChargingVoltage 13.8VDC 27.6VDC 13.8VDC 27.6VDC Ac Input Voltage Range 190~260VAC 90-135VAC 190~260VAC 90-135VAC Cooling Method Intelligent air cooling Unit Size 305*180*76mm N.W/G.W 31"
  },
  {
    "id": "ups-40",
    "slug": "1500wuninterruptible-40",
    "name": "1500WUninterruptible",
    "category": "Uninterruptible Power Source",
    "categoryCode": "ups",
    "catalogPage": 40,
    "models": [
      "DC12V",
      "DC24V",
      "JYMU-1500-1",
      "JYMU-1500-2"
    ],
    "highlights": [
      {
        "label": "Peak Power",
        "value": "3000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V DC24V DC12V DC24V"
      },
      {
        "label": "Output Voltage",
        "value": "100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15%"
      },
      {
        "label": "Output Frequency",
        "value": "ZHSOZHO9 JO ZHSOZHOS"
      },
      {
        "label": "Output Waveform",
        "value": "Modified Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency 90%"
      },
      {
        "label": "Efficiency",
        "value": "90%"
      }
    ],
    "technicalSummary": "1500WUninterruptible powersource Technicalparameters Model JYMU-1500-1 JYMU-1500-1 JYMU-1500-2 JYMU-1500-2 Peak Power 3000W Input Voltage DC12V DC24V DC12V DC24V Output Voltage 100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15% Unload Current Less Than 0.8A 0.5A 0.8A 0.5A Output Frequency ZHSOZHO9 JO ZHSOZHOS Output Waveform Modified Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency %06 Input Current 15A Input Voltage Range 10-15.5V 20-31V 10-15.5V 20-31V Low Voltage Alarm 10.5\u00b10.5V 21\u00b10.5V 10.5\u00b10.5V 21\u00b10.5V Low Voltage Protection 10\u00b10.5V 20\u00b10.5V 10\u00b10.5V 20\u00b10.5V OverVoltage Protection 15.5\u00b10.5V 31\u00b10.5V 15.5\u00b10.5V 31\u00b10.5V Low Voltage Recover 12.3\u00b10.5V 24\u00b10.5V 12.3\u00b10.5V 24\u00b10.5V Over Voltage Recover 14.8V\u00b10.5V 29.5V\u00b10.5V 14.8V\u00b10.5V 29.5V\u00b10.5V Low Voltage Protection \"Alarm \"Bi with 2s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverVoltage Protection \"Alarm\"BiBi with 1s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverLoadProtection If it is closed after twice recover, it need restart manually.\" \" Alarm \"\"BiBiBi with 1s interval +red and green lights flashing alternately OverTemperatureProtection restart when temprecover\" Short Circuit Protection Yes Output Current 15A 10A 15A 10A BulkCharge 15A 10A 15A 10A Absorption 14.6VDC 28.8VDC 14.6VDC 28.8VDC Float ChargingVoltage 13.8VDC 27.6VDC 13.8VDC 27.6VDC Ac Input Voltage Range 190~260VAC 90-135VAC 190~260VAC 90-135VAC Cooling Method Intelligent air cooling Unit Size 309*180*128mm N.W/G.W 32"
  },
  {
    "id": "ups-41",
    "slug": "2000w-uninterruptible-41",
    "name": "2000W Uninterruptible",
    "category": "Uninterruptible Power Source",
    "categoryCode": "ups",
    "catalogPage": 41,
    "models": [
      "DC12V",
      "DC24V",
      "JYMU-2000-1",
      "JYMU-2000-2"
    ],
    "highlights": [
      {
        "label": "Peak Power",
        "value": "4000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V DC24V DC12V DC24V"
      },
      {
        "label": "Output Voltage",
        "value": "100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15%"
      },
      {
        "label": "Output Frequency",
        "value": "ZHSOZHO9 JO ZHSOZHOS"
      },
      {
        "label": "Output Waveform",
        "value": "Modified Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency 90%"
      },
      {
        "label": "Efficiency",
        "value": "90%"
      }
    ],
    "technicalSummary": "2000W Uninterruptible powersourcei Technicalparameters Model JYMU-2000-1 JYMU-2000-1 JYMU-2000-2 JYMU-2000-2 Peak Power 4000W Input Voltage DC12V DC24V DC12V DC24V Output Voltage 100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15% Unload Current Less Than 0.8A 0.5A 0.8A 0.5A Output Frequency ZHSOZHO9 JO ZHSOZHOS Output Waveform Modified Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency %06 Input Current 15A Input Voltage Range 10-15.5V 20-31V 10-15.5V 20-31V Low Voltage Alarm 10.5\u00b10.5V 21\u00b10.5V 10.5\u00b10.5V 21\u00b10.5V Low Voltage Protection 10\u00b10.5V 20\u00b10.5V 10\u00b10.5V 20\u00b10.5V OverVoltage Protection 15.5\u00b10.5V 31\u00b10.5V 15.5\u00b10.5V 31\u00b10.5V Low Voltage Recover 12.3\u00b10.5V 24\u00b10.5V 12.3\u00b10.5V 24\u00b10.5V Over Voltage Recover 14.8V\u00b10.5V 29.5V\u00b10.5V 14.8V\u00b10.5V 29.5V\u00b10.5V Low Voltage Protection \"Alarm \"Bi with 2s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverVoltage Protection \"Alarm\"BiBi with 1s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverLoadProtection If it is closed after twice recover, it need restart manually.\" \" Alarm \"\"BiBiBi with 1s interval +red and green lights flashing alternately OverTemperatureProtection restart when temprecover\" Short Circuit Protection Yes Output Current 15A 10A 15A 10A BulkCharge 15A 10A 15A 10A Absorption 14.6VDC 28.8VDC 14.6VDC 28.8VDC Float ChargingVoltage 13.8VDC 27.6VDC 13.8VDC 27.6VDC Ac Input Voltage Range 190~260VAC 90-135VAC 190~260VAC 90-135VAC Cooling Method Intelligent air cooling Unit Size 349*180*128mm N.W/G.W .33"
  },
  {
    "id": "ups-42",
    "slug": "2500w-uninterruptible-42",
    "name": "2500W Uninterruptible",
    "category": "Uninterruptible Power Source",
    "categoryCode": "ups",
    "catalogPage": 42,
    "models": [
      "DC12V",
      "DC24V",
      "JYMU-2500-1",
      "JYMU-2500-2"
    ],
    "highlights": [
      {
        "label": "Peak Power",
        "value": "5000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V DC24V DC12V DC24V"
      },
      {
        "label": "Output Voltage",
        "value": "100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15%"
      },
      {
        "label": "Output Frequency",
        "value": "ZHSOZHO9 JO ZHSOZHOS"
      },
      {
        "label": "Output Waveform",
        "value": "Modified Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency 90%"
      },
      {
        "label": "Efficiency",
        "value": "90%"
      }
    ],
    "technicalSummary": "2500W Uninterruptible powersource Technicalparameters Model JYMU-2500-1 JYMU-2500-1 JYMU-2500-2 JYMU-2500-2 Peak Power 5000W Input Voltage DC12V DC24V DC12V DC24V Output Voltage 100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15% Unload Current Less Than 0.8A 0.5A 0.8A 0.5A Output Frequency ZHSOZHO9 JO ZHSOZHOS Output Waveform Modified Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency %06 Input Current 15A Input Voltage Range 10-15.5V 20-31V 10-15.5V 20-31V Low Voltage Alarm 10.5\u00b10.5V 21\u00b10.5V 10.5\u00b10.5V 21\u00b10.5V Low Voltage Protection 10\u00b10.5V 20\u00b10.5V 10\u00b10.5V 20\u00b10.5V OverVoltage Protection 15.5\u00b10.5V 31\u00b10.5V 15.5\u00b10.5V 31\u00b10.5V Low Voltage Recover 12.3\u00b10.5V 24\u00b10.5V 12.3\u00b10.5V 24\u00b10.5V Over Voltage Recover 14.8V\u00b10.5V 29.5V\u00b10.5V 14.8V\u00b10.5V 29.5V\u00b10.5V Low Voltage Protection \"Alarm \"Bi with 2s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverVoltage Protection \"Alarm\"BiBi\" with 1s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverLoadProtection If it is closed after twice recover, it need restart manually.\" \" Alarm \"\"BiBiBi with 1s interval +red and green lights flashing alternately OverTemperatureProtection restart when temprecover\" Short Circuit Protection Yes Output Current 15A 10A 15A 10A BulkCharge 15A 10A 15A 10A Absorption 14.6VDC 28.8VDC 14.6VDC 28.8VDC Float Charging Voltage 13.8VDC 27.6VDC 13.8VDC 27.6VDC Ac Input Voltage Range 190~260VAC 90-135VAC 190~260VAC 90-135VAC Cooling Method Intelligent air cooling Unit Size 305*180*76mm N.W/G.W 34"
  },
  {
    "id": "ups-43",
    "slug": "3000w-uninterruptible-43",
    "name": "3000W Uninterruptible",
    "category": "Uninterruptible Power Source",
    "categoryCode": "ups",
    "catalogPage": 43,
    "models": [
      "DC12V",
      "DC24V",
      "JYMU-3000-1",
      "JYMU-3000-2"
    ],
    "highlights": [
      {
        "label": "Peak Power",
        "value": "6000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V DC24V DC12V DC24V"
      },
      {
        "label": "Output Voltage",
        "value": "100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15%"
      },
      {
        "label": "Output Frequency",
        "value": "ZHSOZHO9 JO ZHSOZHOS"
      },
      {
        "label": "Output Waveform",
        "value": "Modified Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency 90%"
      },
      {
        "label": "Efficiency",
        "value": "90%"
      }
    ],
    "technicalSummary": "3000W Uninterruptible powersource Technical parameters Model JYMU-3000-1 JYMU-3000-1 JYMU-3000-2 JYMU-3000-2 Peak Power 6000W Input Voltage DC12V DC24V DC12V DC24V Output Voltage 100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15% Unload Current Less Than 0.8A 0.5A 0.8A 0.5A Output Frequency ZHSOZHO9 JO ZHSOZHOS Output Waveform Modified Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency %06 Input Current 15A Input Voltage Range 10-15.5V 20-31V 10-15.5V 20-31V Low Voltage Alarm 10.5\u00b10.5V 21\u00b10.5V 10.5\u00b10.5V 21\u00b10.5V Low Voltage Protection 10\u00b10.5V 20\u00b10.5V 10\u00b10.5V 20\u00b10.5V OverVoltage Protection 15.5\u00b10.5V 31\u00b10.5V 15.5\u00b10.5V 31\u00b10.5V Low Voltage Recover 12.3\u00b10.5V 24\u00b10.5V 12.3\u00b10.5V 24\u00b10.5V Over Voltage Recover 14.8V\u00b10.5V 29.5V\u00b10.5V 14.8V\u00b10.5V 29.5V\u00b10.5V Low Voltage Protection \"Alarm \"Bi with 2s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverVoltage Protection \"Alarm\"BiBi\" with 1s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverLoadProtection If it is closed after twice recover, it need restart manually.\" \" Alarm \"\"BiBiBi with 1s interval +red and green lights flashing alternately OverTemperatureProtection restart when temprecover\" Short Circuit Protection Yes Output Current 15A 10A 15A 10A BulkCharge 15A 10A 15A 10A Absorption 14.6VDC 28.8VDC 14.6VDC 28.8VDC Float Charging Voltage 13.8VDC 27.6VDC 13.8VDC 27.6VDC Ac Input Voltage Range 190~260VAC 90-135VAC 190~260VAC 90-135VAC Cooling Method Intelligent air cooling Unit Size 460*210*92mm N.W/G.W .35"
  },
  {
    "id": "ups-44",
    "slug": "300w-uninterruptible-44",
    "name": "300W Uninterruptible",
    "category": "Uninterruptible Power Source",
    "categoryCode": "ups",
    "catalogPage": 44,
    "models": [
      "DC12V",
      "DC24V",
      "JYPU-300-1",
      "JYPU-300-2"
    ],
    "highlights": [
      {
        "label": "Peak Power",
        "value": "600W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V DC24V DC12V DC24V"
      },
      {
        "label": "Output Voltage",
        "value": "100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15%"
      },
      {
        "label": "Output Frequency",
        "value": "ZHSOZHO9 JO ZHSOZHOS"
      },
      {
        "label": "Output Waveform",
        "value": "Pure Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency 90%"
      },
      {
        "label": "Efficiency",
        "value": "90%"
      }
    ],
    "technicalSummary": "300W Uninterruptible powersource Technical parameters Model JYPU-300-1 JYPU-300-1 JYPU-300-2 JYPU-300-2 Peak Power 600W Input Voltage DC12V DC24V DC12V DC24V Output Voltage 100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15% Unload Current Less Than 0.6A 0.4A 0.6A 0.4A OutputFrequency ZHSOZHO9 JO ZHSOZHOS Output Waveform Pure Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency %06 Input Current 10A Input Voltage Range 10-15.5V 20-31V 10-15.5V 20-31V Low Voltage Alarm 10.5\u00b10.5V 21\u00b10.5V 10.5\u00b10.5V 21\u00b10.5V Low Voltage Protection 10\u00b10.5V 20\u00b10.5V 10\u00b10.5V 20\u00b10.5V OverVoltage Protection 15.5\u00b10.5V 31\u00b10.5V 15.5\u00b10.5V 31\u00b10.5V Low Voltage Recover 12.3\u00b10.5V 24\u00b10.5V 12.3\u00b10.5V 24\u00b10.5V Over Voltage Recover 14.8V\u00b10.5V 29.5V\u00b10.5V 14.8V\u00b10.5V 29.5V\u00b10.5V Low Voltage Protection \"Alarm \"Bi with 2s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverVoltage Protection \" Alarm \"BiBi\" with 1s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverLoadProtection If it is closed after twice recover, it need restart manually.\" \" Alarm \"\"BiBiBi with 1s interval +red and green lights flashing alternately OverTemperatureProtection restart when temprecover\" Short Circuit Protection Yes Output Current 15A 10A 15A 10A BulkCharge 15A 10A 15A 10A Absorption 14.6VDC 28.8VDC 14.6VDC 28.8VDC Float Charging Voltage 13.8VDC 27.6VDC 13.8VDC 27.6VDC Ac Input Voltage Range 190~260VAC 90-135VAC 190~260VAC 90-135VAC Cooling Method Intelligent air cooling Unit Size 280*135*78mm N.W/G.W .36"
  },
  {
    "id": "ups-45",
    "slug": "500w-uninterruptible-45",
    "name": "500W Uninterruptible",
    "category": "Uninterruptible Power Source",
    "categoryCode": "ups",
    "catalogPage": 45,
    "models": [
      "DC12V",
      "DC24V",
      "JYPU-500-1",
      "JYPU-500-2"
    ],
    "highlights": [
      {
        "label": "Peak Power",
        "value": "1000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V DC24V DC12V DC24V"
      },
      {
        "label": "Output Voltage",
        "value": "100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15%"
      },
      {
        "label": "Output Frequency",
        "value": "ZHSOZHO9 JO ZHSOZHOS"
      },
      {
        "label": "Output Waveform",
        "value": "Pure Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency 90%"
      },
      {
        "label": "Efficiency",
        "value": "90%"
      }
    ],
    "technicalSummary": "500W Uninterruptible powersource Technical parameters Model JYPU-500-1 JYPU-500-1 JYPU-500-2 JYPU-500-2 Peak Power 1000W Input Voltage DC12V DC24V DC12V DC24V Output Voltage 100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15% Unload Current Less Than 0.6A 0.4A 0.6A 0.4A OutputFrequency ZHSOZHO9 JO ZHSOZHOS Output Waveform Pure Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency %06 Input Current 10A Input Voltage Range 10-15.5V 20-31V 10-15.5V 20-31V Low Voltage Alarm 10.5\u00b10.5V 21\u00b10.5V 10.5\u00b10.5V 21\u00b10.5V Low Voltage Protection 10\u00b10.5V 20\u00b10.5V 10\u00b10.5V 20\u00b10.5V OverVoltage Protection 15.5\u00b10.5V 31\u00b10.5V 15.5\u00b10.5V 31\u00b10.5V Low Voltage Recover 12.3\u00b10.5V 24\u00b10.5V 12.3\u00b10.5V 24\u00b10.5V Over Voltage Recover 14.8V\u00b10.5V 29.5V\u00b10.5V 14.8V\u00b10.5V 29.5V\u00b10.5V Low Voltage Protection \"Alarm \"Bi with 2s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverVoltage Protection \"Alarm\"BiBi\" with 1s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverLoadProtection If it is closed after twice recover, it need restart manually.\" \" Alarm \"\"BiBiBi with 1s interval +red and green lights flashing alternately OverTemperatureProtection restart when temprecover\" Short Circuit Protection Yes Output Current 15A 10A 15A 10A BulkCharge 15A 10A 15A 10A Absorption 14.6VDC 28.8VDC 14.6VDC 28.8VDC Float ChargingVoltage 13.8VDC 27.6VDC 13.8VDC 27.6VDC Ac Input Voltage Range 190~260VAC 90-135VAC 190~260VAC 90-135VAC Cooling Method Intelligent air cooling Unit Size 270*135*76mm N.W/G.W . 37"
  },
  {
    "id": "ups-46",
    "slug": "600w-uninterruptible-46",
    "name": "600W Uninterruptible",
    "category": "Uninterruptible Power Source",
    "categoryCode": "ups",
    "catalogPage": 46,
    "models": [
      "DC12V",
      "DC24V",
      "JYPU-600-1",
      "JYPU-600-2"
    ],
    "highlights": [
      {
        "label": "Peak Power",
        "value": "1200W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V DC24V DC12V DC24V"
      },
      {
        "label": "Output Voltage",
        "value": "100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15%"
      },
      {
        "label": "Output Frequency",
        "value": "ZHSOZHO9 JO ZHSOZHOS"
      },
      {
        "label": "Output Waveform",
        "value": "Pure Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency 90%"
      },
      {
        "label": "Efficiency",
        "value": "90%"
      }
    ],
    "technicalSummary": "600W Uninterruptible powersource Technical parameters Model JYPU-600-1 JYPU-600-1 JYPU-600-2 JYPU-600-2 Peak Power 1200W Input Voltage DC12V DC24V DC12V DC24V Output Voltage 100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15% Unload Current Less Than 0.6A 0.4A 0.6A 0.4A Output Frequency ZHSOZHO9 JO ZHSOZHOS Output Waveform Pure Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency %06 Input Current 10A Input Voltage Range 10-15.5V 20-31V 10-15.5V 20-31V Low Voltage Alarm 10.5\u00b10.5V 21\u00b10.5V 10.5\u00b10.5V 21\u00b10.5V Low Voltage Protection 10\u00b10.5V 20\u00b10.5V 10\u00b10.5V 20\u00b10.5V OverVoltage Protection 15.5\u00b10.5V 31\u00b10.5V 15.5\u00b10.5V 31\u00b10.5V Low Voltage Recover 12.3\u00b10.5V 24\u00b10.5V 12.3\u00b10.5V 24\u00b10.5V Over Voltage Recover 14.8V\u00b10.5V 29.5V\u00b10.5V 14.8V\u00b10.5V 29.5V\u00b10.5V Low Voltage Protection \"Alarm \"Bi with 2s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverVoltage Protection \" Alarm \"BiBi\" with 1s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverLoadProtection If it is closed after twice recover, it need restart manually.\" \" Alarm \"\"BiBiBi with 1s interval +red and green lights flashing alternately OverTemperatureProtection restart when temprecover\" Short Circuit Protection Yes Output Current 15A 10A 15A 10A BulkCharge 15A 10A 15A 10A Absorption 14.6VDC 28.8VDC 14.6VDC 28.8VDC Float Charging Voltage 13.8VDC 27.6VDC 13.8VDC 27.6VDC Ac Input Voltage Range 190~260VAC 90-135VAC 190~260VAC 90-135VAC Cooling Method Intelligent air cooling Unit Size 270*135*76mm N.W/G.W .38"
  },
  {
    "id": "ups-47",
    "slug": "1000w-uninterruptible-47",
    "name": "1000W Uninterruptible",
    "category": "Uninterruptible Power Source",
    "categoryCode": "ups",
    "catalogPage": 47,
    "models": [
      "DC12V",
      "DC24V",
      "JYPU-1000-1",
      "JYPU-1000-2"
    ],
    "highlights": [
      {
        "label": "Peak Power",
        "value": "2000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V DC24V DC12V DC24V"
      },
      {
        "label": "Output Voltage",
        "value": "100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15%"
      },
      {
        "label": "Output Frequency",
        "value": "ZHSOZHO9 JO ZHSOZHOS"
      },
      {
        "label": "Output Waveform",
        "value": "Pure Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency 90%"
      },
      {
        "label": "Efficiency",
        "value": "90%"
      }
    ],
    "technicalSummary": "1000W Uninterruptible power source Technicalparameters Model JYPU-1000-1 JYPU-1000-1 JYPU-1000-2 JYPU-1000-2 Peak Power 2000W Input Voltage DC12V DC24V DC12V DC24V Output Voltage 100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15% Unload Current Less Than 0.8A 0.5A 0.8A 0.5A Output Frequency ZHSOZHO9 JO ZHSOZHOS Output Waveform Pure Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency %06 Input Current 10A Input Voltage Range 10-15.5V 20-31V 10-15.5V 20-31V Low Voltage Alarm 10.5\u00b10.5V 21\u00b10.5V 10.5\u00b10.5V 21\u00b10.5V Low Voltage Protection 10\u00b10.5V 20\u00b10.5V 10\u00b10.5V 20\u00b10.5V OverVoltage Protection 15.5\u00b10.5V 31\u00b10.5V 15.5\u00b10.5V 31\u00b10.5V Low Voltage Recover 12.3\u00b10.5V 24\u00b10.5V 12.3\u00b10.5V 24\u00b10.5V Over Voltage Recover 14.8V\u00b10.5V 29.5V\u00b10.5V 14.8V\u00b10.5V 29.5V\u00b10.5V Low Voltage Protection \"Alarm \"Bi with 2s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverVoltageProtection \" Alarm \"BiBi\" with 1s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverLoadProtection If it is closed after twice recover, it need restart manually.\" \" Alarm \"\"BiBiBi with 1s interval +red and green lights flashing alternately OverTemperatureProtection restart when temprecover\" Short Circuit Protection Yes Output Current 15A 10A 15A 10A Bulk Charge 15A 10A 15A 10A Absorption 14.6VDC 28.8VDC 14.6VDC 28.8VDC Float Charging Voltage 13.8VDC 27.6VDC 13.8VDC 27.6VDC Ac Input Voltage Range 190~260VAC 90-135VAC 190~260VAC 90-135VAC Cooling Method Intelligent air cooling Unit Size 395*180*76mm N.W/G.W .39"
  },
  {
    "id": "ups-48",
    "slug": "1500w-uninterruptible-48",
    "name": "1500W Uninterruptible",
    "category": "Uninterruptible Power Source",
    "categoryCode": "ups",
    "catalogPage": 48,
    "models": [
      "DC12V",
      "DC24V",
      "JYPU-1500-1",
      "JYPU-1500-2"
    ],
    "highlights": [
      {
        "label": "Peak Power",
        "value": "3000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V DC24V DC12V DC24V"
      },
      {
        "label": "Output Voltage",
        "value": "100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15%"
      },
      {
        "label": "Output Frequency",
        "value": "ZHSOZHO9 JO ZHSOZHOS"
      },
      {
        "label": "Output Waveform",
        "value": "Pure Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency 90%"
      },
      {
        "label": "Efficiency",
        "value": "90%"
      }
    ],
    "technicalSummary": "1500W Uninterruptible powersource Technicalparameters Model JYPU-1500-1 JYPU-1500-1 JYPU-1500-2 JYPU-1500-2 Peak Power 3000W Input Voltage DC12V DC24V DC12V DC24V Output Voltage 100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15% Unload Current Less Than 1.1A 0.7A 1.1A 0.7A Output Frequency ZHSOZHO9 JO ZHSOZHOS Output Waveform Pure Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency %06 Input Current 15A Input Voltage Range 10-15.5V 20-31V 10-15.5V 20-31V Low Voltage Alarm 10.5\u00b10.5V 21\u00b10.5V 10.5\u00b10.5V 21\u00b10.5V Low Voltage Protection 10\u00b10.5V 20\u00b10.5V 10\u00b10.5V 20\u00b10.5V OverVoltage Protection 15.5\u00b10.5V 31\u00b10.5V 15.5\u00b10.5V 31\u00b10.5V Low Voltage Recover 12.3\u00b10.5V 24\u00b10.5V 12.3\u00b10.5V 24\u00b10.5V Over Voltage Recover 14.8V\u00b10.5V 29.5V\u00b10.5V 14.8V\u00b10.5V 29.5V\u00b10.5V Low Voltage Protection \"Alarm \"Bi with 2s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverVoltage Protection \" Alarm \"BiBi\" with 1s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverLoadProtection If it is closed after twice recover, it need restart manually.\" \" Alarm \"\"BiBiBi with 1s interval +red and green lights flashing alternately OverTemperatureProtection restart when temprecover\" Short Circuit Protection Yes Output Current 15A 10A 15A 10A BulkCharge 15A 10A 15A 10A Absorption 14.6VDC 28.8VDC 14.6VDC 28.8VDC Float Charging Voltage 13.8VDC 27.6VDC 13.8VDC 27.6VDC Ac Input Voltage Range 190~260VAC 90-135VAC 190~260VAC 90-135VAC Cooling Method Intelligent air cooling Unit Size 340*180*152mm N.W/G.W 40."
  },
  {
    "id": "ups-49",
    "slug": "2000w-uninterruptible-49",
    "name": "2000W Uninterruptible",
    "category": "Uninterruptible Power Source",
    "categoryCode": "ups",
    "catalogPage": 49,
    "models": [
      "DC12V",
      "DC24V",
      "JYPU-2000-1",
      "JYPU-2000-2"
    ],
    "highlights": [
      {
        "label": "Peak Power",
        "value": "4000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V DC24V DC12V DC24V"
      },
      {
        "label": "Output Voltage",
        "value": "100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15%"
      },
      {
        "label": "Output Frequency",
        "value": "ZHS0ZHO9 JO ZHS0ZHOS"
      },
      {
        "label": "Output Waveform",
        "value": "Pure Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency 90%"
      },
      {
        "label": "Efficiency",
        "value": "90%"
      }
    ],
    "technicalSummary": "2000W Uninterruptible power source 2000W Technicalparameters Model JYPU-2000-1 JYPU-2000-1 JYPU-2000-2 JYPU-2000-2 Peak Power 4000W Input Voltage DC12V DC24V DC12V DC24V Output Voltage 100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15% Unload Current Less Than 1.1A 0.7A 1.1A 0.7A OutputFrequency ZHS0ZHO9 JO ZHS0ZHOS Output Waveform Pure Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency %06 Input Current 15A Input Voltage Range 10-15.5V 20-31V 10-15.5V 20-31V Low Voltage Alarm 10.5\u00b10.5V 21\u00b10.5V 10.5\u00b10.5V 21\u00b10.5V Low Voltage Protection 10\u00b10.5V 20\u00b10.5V 10\u00b10.5V 20\u00b10.5V Over Voltage Protection 15.5\u00b10.5V 31\u00b10.5V 15.5\u00b10.5V 31\u00b10.5V Low Voltage Recover 12.3\u00b10.5V 24\u00b10.5V 12.3\u00b10.5V 24\u00b10.5V Over Voltage Recover 14.8V\u00b10.5V 29.5V\u00b10.5V 14.8V\u00b10.5V 29.5V\u00b10.5V Low Voltage Protection \"Alarm \"Bi with 2s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverVoltage Protection \" Alarm \"BiBi\"\" with 1s interval +red and green lights flashing alternately restartautomaticallywhenvoltagerecover\" OverLoadProtection If it is closed after twice recover, it need restart manually.\" \" Alarm \"BiBiBi\"\" with 1s interval +red and green lights flashing alternately OverTemperatureProtection restart when temprecover\" Short Circuit Protection LED Red light on Output Current 15A 10A 15A 10A BulkCharge 15A 10A 15A 10A Absorption 14.6VDC 28.8VDC 14.6VDC 28.8VDC Float Charging Voltage 13.8VDC 27.6VDC 13.8VDC 27.6VDC Ac Input Voltage Range 190~260VAC 90-135VAC 190~260VAC 90-135VAC Cooling Method Intelligent air cooling Unit Size 462*210*92mm N.W/G.W 41"
  },
  {
    "id": "ups-50",
    "slug": "2500w-uninterruptible-power-source-50",
    "name": "2500W Uninterruptible Power Source",
    "category": "Uninterruptible Power Source",
    "categoryCode": "ups",
    "catalogPage": 50,
    "models": [
      "DC12V",
      "DC24V",
      "JYPU-2500-1",
      "JYPU-2500-2"
    ],
    "highlights": [
      {
        "label": "Peak Power",
        "value": "5000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V DC24V DC12V DC24V"
      },
      {
        "label": "Output Voltage",
        "value": "100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15%"
      },
      {
        "label": "Output Frequency",
        "value": "ZHS0ZHO9 JO ZHS0ZHOS"
      },
      {
        "label": "Output Waveform",
        "value": "Pure Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency 90%"
      },
      {
        "label": "Efficiency",
        "value": "90%"
      }
    ],
    "technicalSummary": "2500W Uninterruptible power source Technicalparameters Model JYPU-2500-1 JYPU-2500-1 JYPU-2500-2 JYPU-2500-2 Peak Power 5000W Input Voltage DC12V DC24V DC12V DC24V Output Voltage 100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15% Unload Current Less Than 1.3A 0.8A 1.3A 0.8A OutputFrequency ZHS0ZHO9 JO ZHS0ZHOS Output Waveform Pure Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency %06 Input Current 15A Input Voltage Range 10-15.5V 20-31V 10-15.5V 20-31V Low Voltage Alarm 10.5\u00b10.5V 21\u00b10.5V 10.5\u00b10.5V 21\u00b10.5V Low Voltage Protection 10\u00b10.5V 20\u00b10.5V 10\u00b10.5V 20\u00b10.5V Over Voltage Protection 15.5\u00b10.5V 31\u00b10.5V 15.5\u00b10.5V 31\u00b10.5V Low Voltage Recover 12.3\u00b10.5V 24\u00b10.5V 12.3\u00b10.5V 24\u00b10.5V Over Voltage Recover 14.8V\u00b10.5V 29.5V\u00b10.5V 14.8V\u00b10.5V 29.5V\u00b10.5V Low Voltage Protection \"Alarm \"Bi with 2s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverVoltage Protection \"Alarm\"BiBi\" with 1s interval +red and green lights flashing alternately restartautomaticallywhenvoltagerecover\" OverLoadProtection If it is closed after twice recover, it need restart manually.\" \"Alarm \"\"BiBiBi with 1s interval +red and green lights flashing alternately OverTemperatureProtection restart when temprecover\" Short Circuit Protection Yes Output Current 15A 10A 15A 10A BulkCharge 15A 10A 15A 10A Absorption 14.6VDC 28.8VDC 14.6VDC 28.8VDC Float Charging Voltage 13.8VDC 27.6VDC 13.8VDC 27.6VDC Ac Input Voltage Range 190~260VAC 90-135VAC 190~260VAC 90-135VAC Cooling Method Intelligent air cooling Unit Size 554*210*95mm N.W/G.W 42"
  },
  {
    "id": "ups-51",
    "slug": "3000w-uninterruptible-power-source-51",
    "name": "3000W Uninterruptible Power Source",
    "category": "Uninterruptible Power Source",
    "categoryCode": "ups",
    "catalogPage": 51,
    "models": [
      "DC12V",
      "DC24V",
      "JYPU-3000-1",
      "JYPU-3000-2"
    ],
    "highlights": [
      {
        "label": "Peak Power",
        "value": "6000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V DC24V DC12V DC24V"
      },
      {
        "label": "Output Voltage",
        "value": "100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15%"
      },
      {
        "label": "Output Frequency",
        "value": "ZHS0ZHO9 JO ZHS0ZHOS"
      },
      {
        "label": "Output Waveform",
        "value": "Pure Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency 90%"
      },
      {
        "label": "Efficiency",
        "value": "90%"
      }
    ],
    "technicalSummary": "3000W Uninterruptible power source Technicalparameters Model JYPU-3000-1 JYPU-3000-1 JYPU-3000-2 JYPU-3000-2 Peak Power 6000W Input Voltage DC12V DC24V DC12V DC24V Output Voltage 100VAC or110VAC or 120VAC\u00b15% 220VAC or 230VAC or 240VAC\u00b15% Unload Current Less Than 1.3A 0.8A 1.3A 0.8A OutputFrequency ZHS0ZHO9 JO ZHS0ZHOS Output Waveform Pure Sine Wave USB Port 5V@3.4A,9V@2A,12V@1.5A (Support QC3.0 fast charge up to 18W) Max.Efficiency %06 Input Current 15A Input Voltage Range 10-15.5V 20-31V 10-15.5V 20-31V Low Voltage Alarm 10.5\u00b10.5V 21\u00b10.5V 10.5\u00b10.5V 21\u00b10.5V Low Voltage Protection 10\u00b10.5V 20\u00b10.5V 10\u00b10.5V 20\u00b10.5V Over Voltage Protection 15.5\u00b10.5V 31\u00b10.5V 15.5\u00b10.5V 31\u00b10.5V Low Voltage Recover 12.3\u00b10.5V 24\u00b10.5V 12.3\u00b10.5V 24\u00b10.5V Over Voltage Recover 14.8V\u00b10.5V 29.5V\u00b10.5V 14.8V\u00b10.5V 29.5V\u00b10.5V Low Voltage Protection \"Alarm \"Bi with 2s interval +red and green lights flashing alternately restart automatically when voltage recover\" OverVoltage Protection \"Alarm\"BiBi\" with 1s interval +red and green lights flashing alternately restartautomaticallywhenvoltagerecover\" OverLoadProtection If it is closed after twice recover, it need restart manually.\" \"Alarm \"\"BiBiBi with 1s interval +red and green lights flashing alternately OverTemperatureProtection restart when temprecover\" Short Circuit Protection Yes Output Current 15A 10A 15A 10A BulkCharge 15A 10A 15A 10A Absorption 14.6VDC 28.8VDC 14.6VDC 28.8VDC Float Charging Voltage 13.8VDC 27.6VDC 13.8VDC 27.6VDC Ac Input Voltage Range 190~260VAC 90-135VAC 190~260VAC 90-135VAC Cooling Method Intelligent air cooling Unit Size 550*210*92mm N.W/G.W 43"
  },
  {
    "id": "charger-53",
    "slug": "10a-battery-charger-53",
    "name": "10A Battery Charger",
    "category": "Battery Charger",
    "categoryCode": "charger",
    "catalogPage": 53,
    "models": [
      "AC:110V-12V10A",
      "AC:110V-24V10A",
      "AC:110V-48V10A"
    ],
    "highlights": [
      {
        "label": "Input Voltage",
        "value": "110Vac\u00b115% 110Vac\u00b115% 110Vac\u00b115% Input Frequency 50Hz/60Hz 50Hz/60Hz 50Hz/60Hz"
      },
      {
        "label": "Output Voltage",
        "value": "12V 24V 48V Max.Output Voltage 14.5V\u00b10.5V 29V\u00b10.5V 58V\u00b10.5V Floating Voltage 13.7V\u00b10.5V 27.5V\u00b10.5V 55V\u00b10.5V Constant Charging(100% Mode) 10A\u00b12A 10A\u00b12A 10A\u00b12A\u2265(\u2265100AH) Floating Charging(100% Mode) 2A\u00b11A 2A\u00b11A 3A\u00b10.5A Cons"
      }
    ],
    "technicalSummary": "10A Battery Charger Technicalparameters Battery Charger Model AC:110V-12V10A AC:110V-24V10A AC:110V-48V10A Input Voltage 110Vac\u00b115% 110Vac\u00b115% 110Vac\u00b115% Input Frequency 50Hz/60Hz 50Hz/60Hz 50Hz/60Hz Output Voltage 12V 24V 48V Max.Output Voltage 14.5V\u00b10.5V 29V\u00b10.5V 58V\u00b10.5V Floating Voltage 13.7V\u00b10.5V 27.5V\u00b10.5V 55V\u00b10.5V Constant Charging(100% Mode) 10A\u00b12A 10A\u00b12A 10A\u00b12A\u2265(\u2265100AH) Floating Charging(100% Mode) 2A\u00b11A 2A\u00b11A 3A\u00b10.5A Constant Charging(50% Mode) 5A\u00b12A(\u226450AH) Floating Charging(50% Mode) 1.5A\u00b10.5A Conversion Efficiency \u226583% \u226583% \u226583% Charging Indication Red light on when charging Red light on when charging Red light on when charging Fully Charged Indication Green light on Green light on Green light on Reverse Connection Protection YES YES YES Fan Operation Mode Fan start to work above 40\u00b0\u2103 Fan start to work above 40\u00b0\u2103 Fan start to work above 40\u00b0C Battery Charger Model AC:220V-12V10A AC:220V-24V10A AC:220V-48V10A Input Voltage 220Vac\u00b115% 220Vac\u00b115% 220Vac\u00b115% Input Frequency 50Hz/60Hz 50Hz/60Hz 50Hz/60Hz Output Voltage 12V 24V 48V Max.Output Voltage 14.5V\u00b10.5V 29V\u00b10.5V 58V\u00b10.5V Floating Voltage 13.7V\u00b10.5V 27.5V\u00b10.5V 55V\u00b10.5V Constant Charging(100% Mode) 10A\u00b12A 10A\u00b12A 10A\u00b12A\u2265(\u2265100AH) Floating Charging(100% Mode) 2A\u00b11A 2A\u00b11A 5A\u00b12A(\u226450AH) Constant Charging(50% Mode) / 3A\u00b10.5A Floating Charging(50% Mode) 1.5A\u00b10.5A Conversion Efficiency \u226583% \u226583% \u226583% Charging Indication Red light on when charging Red light on when charging Red light on when charging Fully Charged Indication Green light on Green light on Green light on Reverse Connection Protection YES YES YES Fan Operation Mode Fan start to work above 40\u00b0\u2103 Fan start to work above 40\u00b0\u2103 Fan start to work above 40\u00b0\u2103 45"
  },
  {
    "id": "charger-54",
    "slug": "15a-battery-charger-54",
    "name": "15A Battery Charger",
    "category": "Battery Charger",
    "categoryCode": "charger",
    "catalogPage": 54,
    "models": [
      "AC:110V-12V15A",
      "AC:110V-24V15A",
      "AC:110V-48V15A"
    ],
    "highlights": [
      {
        "label": "Input Voltage",
        "value": "110Vac\u00b115% 110Vac\u00b115% 110Vac\u00b115% Input Frequency 50Hz/60Hz 50Hz/60Hz 50Hz/60Hz"
      },
      {
        "label": "Output Voltage",
        "value": "12V 24V 48V Max.Output Voltage 14.5V\u00b10.5V 29V\u00b10.5V 58V\u00b10.5V Floating Voltage 13.7V\u00b10.5V 27.5V\u00b10.5V 55V\u00b10.5V Constant Charging(100% Mode) 15A\u00b12A 15A\u00b12A(\u2265100AH) 15A\u00b12A(\u2265100AH) Floating Charging(100% Mode) 3A\u00b11A 5A\u00b11A 4A\u00b10."
      }
    ],
    "technicalSummary": "15A Battery Charger Technicalparameters Battery Charger Model AC:110V-12V15A AC:110V-24V15A AC:110V-48V15A Input Voltage 110Vac\u00b115% 110Vac\u00b115% 110Vac\u00b115% Input Frequency 50Hz/60Hz 50Hz/60Hz 50Hz/60Hz Output Voltage 12V 24V 48V Max.Output Voltage 14.5V\u00b10.5V 29V\u00b10.5V 58V\u00b10.5V Floating Voltage 13.7V\u00b10.5V 27.5V\u00b10.5V 55V\u00b10.5V Constant Charging(100% Mode) 15A\u00b12A 15A\u00b12A(\u2265100AH) 15A\u00b12A(\u2265100AH) Floating Charging(100% Mode) 3A\u00b11A 5A\u00b11A 4A\u00b10.5A Constant Charging(50% Mode) 7A\u00b12A(\u226450AH) 7.5A\u00b12A(\u226450AH) Floating Charging(50% Mode) 2A\u00b11A 2A\u00b10.5A Conversion Efficiency \u226583% \u226583% \u226583% Charging Indication Red light on when charging Red light on when charging Red light on when charging Fully Charged Indication Green light on Green light on Green light on Reverse Connection Protection YES YES YES Fan Operation Mode Fan start to work above 40\u00b0\u2103 Fan start to work above 40\u00b0\u2103 Fan start to work above 40\u00b0C Battery Charger Model AC:220V-12V15A AC:220V-24V15A AC:220V-48V15A Input Voltage 220Vac\u00b115% 220Vac\u00b115% 220Vac\u00b115% Input Frequency 50Hz/60Hz 50Hz/60Hz 50Hz/60Hz Output Voltage 12V 24V 48V Max.Output Voltage 14.5V\u00b10.5V 29V\u00b10.5V 58V\u00b10.5V Floating Voltage 13.7V\u00b10.5V 27.5V\u00b10.5V 55V\u00b10.5V Constant Charging(100% Mode) 15A\u00b12A 15A\u00b12A(\u2265100AH) 15A\u00b12A(\u2265100AH) Floating Charging(100% Mode) 3A\u00b11A 8A\u00b12A(\u226450AH) 7.5A\u00b12A(\u226450AH) Constant Charging(50% Mode) / 5A\u00b11A 4A\u00b10.5A Floating Charging(50% Mode) 2.5A\u00b11A 2A\u00b10.5A Conversion Efficiency \u226583% \u226583% \u226583% Charging Indication Red light on when charging Red light on when charging Red light on when charging Fully Charged Indication Green light on Green light on Green light on Reverse Connection Protection YES YES YES Fan Operation Mode Fan start to work above 40\u00b0\u2103 Fan start to work above 40\u00b0\u2103 Fan start to work above 40\u00b0\u2103 46."
  },
  {
    "id": "charger-55",
    "slug": "20a-battery-charger-55",
    "name": "20A Battery Charger",
    "category": "Battery Charger",
    "categoryCode": "charger",
    "catalogPage": 55,
    "models": [
      "AC:110V-12V20A",
      "AC:110V-24V20A"
    ],
    "highlights": [
      {
        "label": "Input Voltage",
        "value": "110Vac\u00b115% 110Vac\u00b115% Input Frequency 50Hz/60Hz 50Hz/60Hz"
      },
      {
        "label": "Output Voltage",
        "value": "12V 24V Max.Output Voltage 14.5V\u00b10.5V 29V\u00b10.5V Floating Voltage 13.7V\u00b10.5V 27.5V\u00b10.5V Constant Charging(100% Mode) 20A\u00b12A 20A\u00b12A(\u2265100AH Floating Charging(100% Mode) 5A\u00b11A 6A\u00b11A Constant Charging(50% Mode) 10A\u00b12A(\u226450AH) F"
      }
    ],
    "technicalSummary": "20A Battery Charger Technical parameters Battery Charger Model AC:110V-12V20A AC:110V-24V20A Input Voltage 110Vac\u00b115% 110Vac\u00b115% Input Frequency 50Hz/60Hz 50Hz/60Hz Output Voltage 12V 24V Max.Output Voltage 14.5V\u00b10.5V 29V\u00b10.5V Floating Voltage 13.7V\u00b10.5V 27.5V\u00b10.5V Constant Charging(100% Mode) 20A\u00b12A 20A\u00b12A(\u2265100AH Floating Charging(100% Mode) 5A\u00b11A 6A\u00b11A Constant Charging(50% Mode) 10A\u00b12A(\u226450AH) Floating Charging(50% Mode) 3A\u00b11A Conversion Efficiency \u226583% \u226583% Charging Indication Red light on when charging Red light on when charging Fully Charged Indication Green light on Green light on Reverse Connection Protection YES YES Fan Operation Mode Fan start to work above 40\u00b0\u2103 Fan start to work above 40\u00b0\u2103 Battery Charger Model AC:220V-12V20A AC:220V-24V20A Input Voltage 220Vac\u00b115% 220Vac\u00b115% InputFrequency 50Hz/60Hz 50Hz/60Hz Output Voltage 12V 24V Max.Output Voltage 14.5V\u00b10.5V 29V\u00b10.5V Floating Voltage 13.7V\u00b10.5V 27.5V\u00b10.5V Constant Charging(100% Mode) 20A\u00b12A 20A\u00b12A(\u2265100AH) Floating Charging(100% Mode) 5A\u00b11A 10A\u00b12A(\u226450AH) Constant Charging(50% Mode) / 6A\u00b11A Floating Charging(50% Mode) 3A\u00b11A Conversion Efficiency \u226583% \u226583% Charging Indication Red light on when charging Red light on when charging Fully Charged Indication Green light on Green light on Reverse Connection Protection YES YES Fan Operation Mode Fan start to work above 40\u00b0\u2103 Fan start to work above 40\u00b0\u2103 47"
  },
  {
    "id": "charger-56",
    "slug": "30a-battery-charger-56",
    "name": "30A Battery Charger",
    "category": "Battery Charger",
    "categoryCode": "charger",
    "catalogPage": 56,
    "models": [
      "AC:110V-12V30A",
      "AC:110V-24V30A"
    ],
    "highlights": [
      {
        "label": "Input Voltage",
        "value": "110Vac\u00b115% 110Vac\u00b115% Input Frequency 50Hz/60Hz 50Hz/60Hz"
      },
      {
        "label": "Output Voltage",
        "value": "12V 24V Max.Output Voltage 14.5V\u00b10.5V 29V\u00b10.5V Floating Voltage 13.7V\u00b10.5V 27.5V\u00b10.5V Constant Charging(100% Mode) 30A\u00b12A(\u2265150AH) 30A\u00b12A(\u2265100AH) Floating Charging(100% Mode) 7A\u00b12A 8A\u00b11A Constant Charging(50% Mode) 15A\u00b12A"
      }
    ],
    "technicalSummary": "30A Battery Charger Technical parameters Battery Charger Model AC:110V-12V30A AC:110V-24V30A Input Voltage 110Vac\u00b115% 110Vac\u00b115% Input Frequency 50Hz/60Hz 50Hz/60Hz Output Voltage 12V 24V Max.Output Voltage 14.5V\u00b10.5V 29V\u00b10.5V Floating Voltage 13.7V\u00b10.5V 27.5V\u00b10.5V Constant Charging(100% Mode) 30A\u00b12A(\u2265150AH) 30A\u00b12A(\u2265100AH) Floating Charging(100% Mode) 7A\u00b12A 8A\u00b11A Constant Charging(50% Mode) 15A\u00b12A(\u2264100AH) 15A\u00b12A(\u226450AH) Floating Charging(50% Mode) 3A\u00b12A 4A\u00b11A Conversion Efficiency \u226583% \u226583% Charging Indication Red light on when charging Red light on when charging Fully Charged Indication Green light on Green light on Reverse Connection Protection YES YES Fan Operation Mode Fan start to work above 40\u00b0C Fan start to work above 40\u00b0C Battery Charger Model AC:220V-12V30A AC:220V-24V30A Input Voltage 220Vac\u00b115% 220Vac\u00b115% Input Frequency 50Hz/60Hz 50Hz/60Hz Output Voltage 12V 24V Max.Output Voltage 14.5V\u00b10.5V 29V\u00b10.5V Floating Voltage 13.7V\u00b10.5V 27.5V\u00b10.5V Constant Charging(100% Mode) 30A\u00b12A(\u2265150AH) 30A\u00b12A(\u2265100AH) Floating Charging(100% Mode) 15A\u00b12A(\u2264100AH) 15A\u00b12A(\u226450AH) Constant Charging(50% Mode) 7A\u00b12A 8A\u00b11A Floating Charging(50% Mode) 4A\u00b12A 4A\u00b11A Conversion Efficiency \u226583% \u226583% Charging Indication Red light on when charging Red light on when charging Fully Charged Indication Green light on Green light on Reverse Connection Protection YES YES Fan Operation Mode Fan start to work above 40\u00b0\u2103 Fan start to work above 40\u00b0\u2103 .48."
  },
  {
    "id": "charger-57",
    "slug": "40a-battery-charger-57",
    "name": "40A Battery Charger",
    "category": "Battery Charger",
    "categoryCode": "charger",
    "catalogPage": 57,
    "models": [
      "AC:110V-12V40A",
      "AC:220V-12V40A"
    ],
    "highlights": [
      {
        "label": "Input Voltage",
        "value": "220Vac\u00b115% 220Vac\u00b115% Input Frequency 50Hz/60Hz 50Hz/60Hz"
      },
      {
        "label": "Output Voltage",
        "value": "12V 12V Max.Output Voltage 14.5V\u00b10.5V 14.5V\u00b10.5V Floating Voltage 13.7V\u00b10.5V 13.7V\u00b10.5V Constant Charging(100% Mode) 40A\u00b12A 40A\u00b12A\u2265100AH Floating Charging(100% Mode) 12A\u00b11A 12A\u00b11A Constant Charging(50% Mode) 20A\u00b12A(\u226450AH"
      }
    ],
    "technicalSummary": "40A Battery Charger Technicalparameters Battery Charger Model AC:110V-12V40A AC:220V-12V40A Input Voltage 220Vac\u00b115% 220Vac\u00b115% Input Frequency 50Hz/60Hz 50Hz/60Hz Output Voltage 12V 12V Max.Output Voltage 14.5V\u00b10.5V 14.5V\u00b10.5V Floating Voltage 13.7V\u00b10.5V 13.7V\u00b10.5V Constant Charging(100% Mode) 40A\u00b12A 40A\u00b12A\u2265100AH Floating Charging(100% Mode) 12A\u00b11A 12A\u00b11A Constant Charging(50% Mode) 20A\u00b12A(\u226450AH) Floating Charging(50% Mode) 6A\u00b11A Conversion Efficiency \u226583% \u226583% Charging Indication Red light on when charging Red light on when charging Fully Charged Indication Green light on Green light on Reverse Connection Protection YES YES Fan Operation Mode Fan start to work above 40\u00b0\u2103 Fan start to work above 40\u00b0\u2103 49"
  },
  {
    "id": "charger-58",
    "slug": "50a-battery-charger-58",
    "name": "50A Battery Charger",
    "category": "Battery Charger",
    "categoryCode": "charger",
    "catalogPage": 58,
    "models": [
      "AC:110V-12V50A",
      "AC:220V-12V50A"
    ],
    "highlights": [
      {
        "label": "Input Voltage",
        "value": "220Vac\u00b115% 220Vac\u00b115% Input Frequency 50Hz/60Hz 50Hz/60Hz"
      },
      {
        "label": "Output Voltage",
        "value": "12V 12V Max.Output Voltage 14.5V\u00b10.5V 14.5V\u00b10.5V Floating Voltage 13.7V\u00b10.5V 13.7V\u00b10.5V Constant Charging(100% Mode) 30A\u00b12A(\u2265150AH) 50A\u00b12A(\u2265150AH) Floating Charging(100% Mode) 25A\u00b12A 25A\u00b12A(\u2264100AH) Constant Charging(50% "
      }
    ],
    "technicalSummary": "50A Battery Charger Technical parameters Battery Charger Model AC:110V-12V50A AC:220V-12V50A Input Voltage 220Vac\u00b115% 220Vac\u00b115% Input Frequency 50Hz/60Hz 50Hz/60Hz Output Voltage 12V 12V Max.Output Voltage 14.5V\u00b10.5V 14.5V\u00b10.5V Floating Voltage 13.7V\u00b10.5V 13.7V\u00b10.5V Constant Charging(100% Mode) 30A\u00b12A(\u2265150AH) 50A\u00b12A(\u2265150AH) Floating Charging(100% Mode) 25A\u00b12A 25A\u00b12A(\u2264100AH) Constant Charging(50% Mode) 15A\u00b12A(\u2264100AH) 15A\u00b12A Floating Charging(50% Mode) 7.5A\u00b12A 7.5A\u00b12A Conversion Efficiency \u226583% \u226583% Charging Indication Red light on when charging Red light on when charging Fully Charged Indication Green light on Green light on Reverse Connection Protection YES YES Fan Operation Mode Fan start to work above 40\u00b0C Fan start to work above 40\u00b0\u2103 .50"
  },
  {
    "id": "portable-station-60",
    "slug": "300w-a-portable-power-station-60",
    "name": "300W-A Portable Power Station",
    "category": "Portable Power Station",
    "categoryCode": "portable-station",
    "catalogPage": 60,
    "models": [
      "CND-S300W",
      "DC19V"
    ],
    "highlights": [
      {
        "label": "USB Output",
        "value": "USB - A2/A3 5V 2.4A DC Output DC19V 3.4A AC Output 220V 60Hz,300W Weight 3.4kg Dimension 215*158*162mm Service Life More than 1000 cycles Operating Temperature 0-45\u2103 Charging Temperature 0 -45\u00b0\u2103 Guarantee 12 months 52"
      },
      {
        "label": "Battery Capacity",
        "value": "20Ah 14.8V 296Wh"
      },
      {
        "label": "Full Charge",
        "value": "Around 6.5 hours"
      },
      {
        "label": "Weight",
        "value": "3.4kg"
      },
      {
        "label": "Dimension",
        "value": "215*158*162mm Service Life More than 1000 cycles"
      },
      {
        "label": "Guarantee",
        "value": "12 months 52"
      }
    ],
    "technicalSummary": "300W-A Portable power station Technical parameters Model CND-S300W Type The lithium battery Battery Capacity 20Ah 14.8V 296Wh Full Charge Around 6.5 hours USB Output USB - A2/A3 5V 2.4A DC Output DC19V 3.4A AC Output 220V 60Hz,300W Weight 3.4kg Dimension 215*158*162mm Service Life More than 1000 cycles Operating Temperature 0-45\u2103 Charging Temperature 0 -45\u00b0\u2103 Guarantee 12 months 52"
  },
  {
    "id": "portable-station-61",
    "slug": "300w-b-portable-power-station-61",
    "name": "300W-B Portable Power Station",
    "category": "Portable Power Station",
    "categoryCode": "portable-station",
    "catalogPage": 61,
    "models": [
      "CND-S300W",
      "DC19V"
    ],
    "highlights": [
      {
        "label": "USB Output",
        "value": "USB - A2/A3 5V 2.4A DC Output DC19V 3.4A AC Output 120V 60Hz,300W Weight 3.4kg Dimension 215*158*162mm Service Life More than 1000 cycles Operating Temperature 0-45\u2103 Charging Temperature 0 -45\u00b0\u2103 Guarantee 12 months 53"
      },
      {
        "label": "Battery Capacity",
        "value": "20Ah 14.8V 296Wh"
      },
      {
        "label": "Full Charge",
        "value": "Around 6.5 hours"
      },
      {
        "label": "Weight",
        "value": "3.4kg"
      },
      {
        "label": "Dimension",
        "value": "215*158*162mm Service Life More than 1000 cycles"
      },
      {
        "label": "Guarantee",
        "value": "12 months 53"
      }
    ],
    "technicalSummary": "300W-B Portable power station 1888. 88 Technical parameters Model CND-S300W Type The lithium battery Battery Capacity 20Ah 14.8V 296Wh Full Charge Around 6.5 hours USB Output USB - A2/A3 5V 2.4A DC Output DC19V 3.4A AC Output 120V 60Hz,300W Weight 3.4kg Dimension 215*158*162mm Service Life More than 1000 cycles Operating Temperature 0-45\u2103 Charging Temperature 0 -45\u00b0\u2103 Guarantee 12 months 53"
  },
  {
    "id": "portable-station-62",
    "slug": "500w-a-portable-power-station-62",
    "name": "500W-A Portable Power Station",
    "category": "Portable Power Station",
    "categoryCode": "portable-station",
    "catalogPage": 62,
    "models": [
      "CND-S500W",
      "DC12V"
    ],
    "highlights": [
      {
        "label": "USB Output",
        "value": "USB - A2/A3 5V 2.4A DC Output DC12V 5A AC Output 220V 60Hz,500W Weight 5.2kg Dimension 260*173*170mm Service Life More than 1000 cycles Operating Temperature 0-45\u2103 Charging Temperature 0 -45\u00b0\u2103 Guarantee 12 months 54"
      },
      {
        "label": "Battery Capacity",
        "value": "34.8Ah 14.8V 51 5Wh"
      },
      {
        "label": "Full Charge",
        "value": "Around 6.5 hours"
      },
      {
        "label": "Weight",
        "value": "5.2kg"
      },
      {
        "label": "Dimension",
        "value": "260*173*170mm Service Life More than 1000 cycles"
      },
      {
        "label": "Guarantee",
        "value": "12 months 54"
      }
    ],
    "technicalSummary": "500W-A Portable power station Technical parameters Model CND-S500W Type The lithium battery Battery Capacity 34.8Ah 14.8V 51 5Wh Full Charge Around 6.5 hours USB Output USB - A2/A3 5V 2.4A DC Output DC12V 5A AC Output 220V 60Hz,500W Weight 5.2kg Dimension 260*173*170mm Service Life More than 1000 cycles Operating Temperature 0-45\u2103 Charging Temperature 0 -45\u00b0\u2103 Guarantee 12 months 54"
  },
  {
    "id": "portable-station-63",
    "slug": "500w-b-portable-power-station-63",
    "name": "500W-B Portable Power Station",
    "category": "Portable Power Station",
    "categoryCode": "portable-station",
    "catalogPage": 63,
    "models": [
      "CND-S500W",
      "DC12V"
    ],
    "highlights": [
      {
        "label": "USB Output",
        "value": "USB - A2/A3 5V 2.4A DC Output DC12V 5A AC Output 120V 60Hz 500W Weight 5.2kg Dimension 260*173*170mm Service Life More than 1000 cycles Operating Temperature 0-45\u00b0\u2103 Charging Temperature 0 -45\u00b0\u2103 Guarantee 12 months 55"
      },
      {
        "label": "Battery Capacity",
        "value": "34.8Ah 14.8V 51 5Wh"
      },
      {
        "label": "Full Charge",
        "value": "Around 6.5 hours"
      },
      {
        "label": "Weight",
        "value": "5.2kg"
      },
      {
        "label": "Dimension",
        "value": "260*173*170mm Service Life More than 1000 cycles"
      },
      {
        "label": "Guarantee",
        "value": "12 months 55"
      }
    ],
    "technicalSummary": "500W-B Portable power station 888 Technical parameters Model CND-S500W Type The lithium battery Battery Capacity 34.8Ah 14.8V 51 5Wh Full Charge Around 6.5 hours USB Output USB - A2/A3 5V 2.4A DC Output DC12V 5A AC Output 120V 60Hz 500W Weight 5.2kg Dimension 260*173*170mm Service Life More than 1000 cycles Operating Temperature 0-45\u00b0\u2103 Charging Temperature 0 -45\u00b0\u2103 Guarantee 12 months 55"
  },
  {
    "id": "portable-station-64",
    "slug": "1000w-portable-power-station-64",
    "name": "1000W Portable Power Station",
    "category": "Portable Power Station",
    "categoryCode": "portable-station",
    "catalogPage": 64,
    "models": [
      "CND-S1000W",
      "DC24V"
    ],
    "highlights": [
      {
        "label": "USB Output",
        "value": "USB - A2/A3 5V 2.4A DC Output DC24V 5A AC Output 220V 60Hz,1000W Weight 11kg Dimension 340*236*206mm Service Life More than 1000 cycles Operating Temperature 0-45\u00b0\u2103 Charging Temperature 0 -45\u00b0\u2103 Guarantee 12 months 56"
      },
      {
        "label": "Battery Capacity",
        "value": "54Ah 21.6V 11 66.4Wh"
      },
      {
        "label": "Full Charge",
        "value": "Around 6.5 hours"
      },
      {
        "label": "Weight",
        "value": "11kg"
      },
      {
        "label": "Dimension",
        "value": "340*236*206mm Service Life More than 1000 cycles"
      },
      {
        "label": "Guarantee",
        "value": "12 months 56"
      }
    ],
    "technicalSummary": "1000W Portable power station Technical parameters Model CND-S1000W Type The lithium battery Battery Capacity 54Ah 21.6V 11 66.4Wh Full Charge Around 6.5 hours USB Output USB - A2/A3 5V 2.4A DC Output DC24V 5A AC Output 220V 60Hz,1000W Weight 11kg Dimension 340*236*206mm Service Life More than 1000 cycles Operating Temperature 0-45\u00b0\u2103 Charging Temperature 0 -45\u00b0\u2103 Guarantee 12 months 56"
  },
  {
    "id": "portable-station-65",
    "slug": "1500w-portable-65",
    "name": "1500W Portable",
    "category": "Portable Power Station",
    "categoryCode": "portable-station",
    "catalogPage": 65,
    "models": [
      "14.5Ah",
      "1856Whi",
      "EPE-S1500W",
      "LiFePO48S5P",
      "PD100W"
    ],
    "highlights": [
      {
        "label": "Weight",
        "value": "18Kg"
      },
      {
        "label": "Dimension",
        "value": "340*231*276mm 57"
      }
    ],
    "technicalSummary": "1500W Portable power station Technicalparameters Model EPE-S1500W Capacity 1856Whi LiFePO48S5P 14.5Ah/cell DC Input 200W SupportSolar Charge Type C1 Input/Output PD100W AC Output 1500W (230V 50Hz) Output Wave Pure sine wave ndno a 12V/10A USB-C Output PD 27W USB-A1/A2 5V 2.4A*2 USB-A3 &4 QC3.0 Weight 18Kg Dimension 340*231*276mm 57"
  },
  {
    "id": "portable-station-66",
    "slug": "2400w-portable-power-station-66",
    "name": "2400W Portable Power Station",
    "category": "Portable Power Station",
    "categoryCode": "portable-station",
    "catalogPage": 66,
    "models": [
      "2400Wh",
      "EPE-S2400W",
      "LiFeP04",
      "PD100W"
    ],
    "highlights": [
      {
        "label": "Weight",
        "value": "21Kg"
      },
      {
        "label": "Dimension",
        "value": "500*290*270mm 58"
      }
    ],
    "technicalSummary": "2400W Portable power station O Technical parameters Model EPE-S2400W Capacity 2400Wh LiFeP04 DC Input 360W Support Solar Charge AC Output 2500W ( 230V 50Hz) Output Wave Pure sine wave ndno oa 12V/10A USB-C 1 Output PD100W USB-C 2 Output PD 27W USB-A1/A2 5V2.4A*2 USB-A3 &4 QC3.0 Weight 21Kg Dimension 500*290*270mm 58"
  },
  {
    "id": "inverter-board-68",
    "slug": "p-300w-inverter-printed-circuit-board-68",
    "name": "P-300W Inverter Printed Circuit Board",
    "category": "Power Inverter Printed Circuit Board",
    "categoryCode": "inverter-board",
    "catalogPage": 68,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "P-300W",
      "P-300W-12V",
      "P-300W-24V",
      "P-300W-48V"
    ],
    "highlights": [
      {
        "label": "Output Power",
        "value": "300W"
      },
      {
        "label": "Peak Power",
        "value": "600W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "50Hz\u00b12Hz or 60Hz\u00b12Hz"
      },
      {
        "label": "Output Waveform",
        "value": "Pure sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V 2A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "89% 91% 93%"
      }
    ],
    "technicalSummary": "P-300W Printed circuit boardi Technicalparameters Model P-300W-12V P-300W-24V P-300W-48V Output Power 300W Peak Power 600W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22640.55A \u22640.3A \u22640.18A Output Frequency 50Hz\u00b12Hz or 60Hz\u00b12Hz Output Waveform Pure sine wave Display USB Output Votlage/ Current 5V 2A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency 89% 91% 93% Low Voltage Protection Alarm \"Bi\" with 2s interval +red and green lights flashing alternately /restartautomaticallywhenvoltagerecover Alarm\"BiBi\u201d with 1s interval +red and green lights flashing alternately OverVoltageProtection /restartautomaticallywhenvoltagerecover Alarm\"Bi\" continously +red light flashing Over Load Protection /restart automatically when load power recover;lf it is closed after twice recover,it need restart manually. Over Temp Protection Alarm \"BiBiBir with 1s interval +red and green lights flashing alternately /restart whentemprecover Short Circuit Protection yes DC Reverse Connection Protection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v LowVoltageRecoverRange 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v OverVoltageProtectionRange 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0\u2103~50\u2103 Cooling Method Fan cooling (Temperature control) Note: The tech updates constantly. These datas are used for reference only. Please refer to our real product. 60"
  },
  {
    "id": "inverter-board-69",
    "slug": "p-600w-inverter-printed-circuit-board-69",
    "name": "P-600W Inverter Printed Circuit Board",
    "category": "Power Inverter Printed Circuit Board",
    "categoryCode": "inverter-board",
    "catalogPage": 69,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "P-600W",
      "P-600W-12V",
      "P-600W-24V",
      "P-600W-48V"
    ],
    "highlights": [
      {
        "label": "Output Power",
        "value": "600W"
      },
      {
        "label": "Peak Power",
        "value": "1200W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "50Hz\u00b12Hz or 60Hz\u00b12Hz"
      },
      {
        "label": "Output Waveform",
        "value": "Pure sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V 2A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "\u22640.6A \u22640.3A \u22640.2A"
      }
    ],
    "technicalSummary": "P-600W Printed circuit board Technicalparameters Model P-600W-12V P-600W-24V P-600W-48V Output Power 600W Peak Power 1200W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22640.6A \u22640.3A \u22640.2A Output Frequency 50Hz\u00b12Hz or 60Hz\u00b12Hz Output Waveform Pure sine wave Display USB Output Votlage/Current 5V 2A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency \u22640.6A \u22640.3A \u22640.2A Low Voltage Protection Alarm \"Bi\u201d with 2s interval +red and green lights flashing alternately /restartautomaticallywhenvoltagerecover Alarm \"BiBi\u201d with 1s interval +red and green lights flashing alternately OverVoltage Protection /restartautomaticallywhenvoltagerecover Alarm\"Bi\" continously +red light flashing Over Load Protection /restart automatically when load power recover;lf it is closed after twice recover, it need restart manually. Over Temp Protection Alarm \"BiBiBi\" with 1s interval +red and green lights flashing alternately /restart whentemprecover Short Circuit Protection yes DC Reverse Connection Protection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v LowVoltageRecoverRange 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v OverVoltageProtectionRange 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0\u2103~50\u2103 Cooling Method Fan cooling (Temperature control) 61"
  },
  {
    "id": "inverter-board-70",
    "slug": "p-1000w-inverter-printed-circuit-board-70",
    "name": "P-1000W Inverter Printed Circuit Board",
    "category": "Power Inverter Printed Circuit Board",
    "categoryCode": "inverter-board",
    "catalogPage": 70,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "P-1000W",
      "P-1000W-12V",
      "P-1000W-24V",
      "P-1000W-48V"
    ],
    "highlights": [
      {
        "label": "Output Power",
        "value": "1000W"
      },
      {
        "label": "Peak Power",
        "value": "2000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "50Hz\u00b12Hz or 60Hz\u00b12Hz"
      },
      {
        "label": "Output Waveform",
        "value": "Pure sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V 2A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "88% 90% 92%"
      }
    ],
    "technicalSummary": "P-1000W Printed circuit board Technicalparameters Model P-1000W-12V P-1000W-24V P-1000W-48V Output Power 1000W Peak Power 2000W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22640.6A \u22640.3A \u22640.2A Output Frequency 50Hz\u00b12Hz or 60Hz\u00b12Hz Output Waveform Pure sine wave Display USB Output Votlage/ Current 5V 2A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency 88% 90% 92% Low Voltage Protection Alarm \"Bi\u201d with 2s interval +red and green lights flashing alternately /restartautomaticallywhenvoltagerecover Alarm\"BiBi\u201d with 1s interval +red and green lights flashing alternately OverVoltageProtection /restartautomaticallywhenvoltagerecover Alarm\"Bi\" continously +red light flashing Over Load Protection /restart automatically when load power recover;lf it is closed after twice recover,it need restart manually. Over Temp Protection Alarm \"BiBiBi\" with 1s interval +red and green lights flashing alternately /restartwhentemprecover Short Circuit Protection yes DC Reverse Connection Protection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v LowVoltageRecoverRange 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v OverVoltageProtectionRange 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0\u2103~50\u2103 Cooling Method Fan cooling (Temperature control) Note:The tech updates constantly. These datas are used for reference only.Please refer to our real product. 62"
  },
  {
    "id": "inverter-board-71",
    "slug": "p-1500w-inverter-printed-circuit-board-71",
    "name": "P-1500W Inverter Printed Circuit Board",
    "category": "Power Inverter Printed Circuit Board",
    "categoryCode": "inverter-board",
    "catalogPage": 71,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "P-1500W",
      "P-1500W-12V",
      "P-1500W-24V",
      "P-1500W-48V"
    ],
    "highlights": [
      {
        "label": "Output Power",
        "value": "1500W"
      },
      {
        "label": "Peak Power",
        "value": "3000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "50Hz\u00b12Hz or 60Hz\u00b12Hz"
      },
      {
        "label": "Output Waveform",
        "value": "Pure sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V 2A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "90% 92% 96%"
      }
    ],
    "technicalSummary": "P-1500W Printed circuit board Technical parameters Model P-1500W-12V P-1500W-24V P-1500W-48V Output Power 1500W Peak Power 3000W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22640.8A \u22640.4A \u22640.2A Output Frequency 50Hz\u00b12Hz or 60Hz\u00b12Hz Output Waveform Pure sine wave Display LED or LCD display USB Output Votlage/Current 5V 2A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency 90% 92% %96 Low Voltage Protection Alarm \"Bi\u201d with 2s interval +red and green lights flashing alternately /restartautomaticallywhenvoltagerecover Alarm\"BiBi\u201d with 1s interval +red and green lights flashing alternately OverVoltageProtection /restartautomaticallywhenvoltagerecover Alarm\"Bi\" continously +red light flashing Over Load Protection /restart automatically when load power recover;lf it is closed after twice recover,it need restart manually. Over Temp Protection Alarm\"BiBiBi\" with 1s interval +red and green lights flashing alternately /restart whentemprecover Short Circuit Protection yes DC Reverse Connection Protection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v LowVoltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v OverVoltageProtectionRange 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0\u2103~50\u2103 Cooling Method Fan cooling (Temperature control) Note:The tech updates constantly. These datas are used for reference only.Please refer to our real product. 63"
  },
  {
    "id": "inverter-board-72",
    "slug": "p-2000w-inverter-printed-circuit-board-72",
    "name": "P-2000W Inverter Printed Circuit Board",
    "category": "Power Inverter Printed Circuit Board",
    "categoryCode": "inverter-board",
    "catalogPage": 72,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "P-2000W",
      "P-2000W-12V",
      "P-2000W-24V",
      "P-2000W-48V"
    ],
    "highlights": [
      {
        "label": "Output Power",
        "value": "2000W"
      },
      {
        "label": "Peak Power",
        "value": "4000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "50Hz\u00b12Hz or 60Hz\u00b12Hz"
      },
      {
        "label": "Output Waveform",
        "value": "Pure sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V 2A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "90% 92% 96%"
      }
    ],
    "technicalSummary": "P-2000W Printed circuit board Technical parameters Model P-2000W-12V P-2000W-24V P-2000W-48V Output Power 2000W Peak Power 4000W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22640.9A \u22640.55A \u22640.3A Output Frequency 50Hz\u00b12Hz or 60Hz\u00b12Hz Output Waveform Pure sine wave Display LED or LCD display USB Output Votlage/Current 5V 2A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency 90% 92% %96 Low Voltage Protection Alarm \"Bi\u201d with 2s interval +red and green lights flashing alternately /restartautomaticallywhenvoltagerecover Alarm\"BiBi\u201d with 1s interval +red and green lights flashing alternately OverVoltageProtection /restartautomaticallywhenvoltagerecover Alarm\"Bi\" continously +red light flashing Over Load Protection /restart automatically when load power recover;lf it is closed after twice recover,it need restart manually. Over Temp Protection Alarm\"BiBiBi\" with 1s interval +red and green lights flashing alternately /restart whentemprecover Short Circuit Protection yes DC Reverse Connection Protection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v LowVoltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v OverVoltageProtectionRange 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0\u2103~50\u2103 Cooling Method Fan cooling (Temperature control) Note:The tech updates constantly. These datas are used for reference only.Please refer to our real product. 64"
  },
  {
    "id": "inverter-board-73",
    "slug": "p-3000w-inverter-printed-circuit-board-73",
    "name": "P-3000W Inverter Printed Circuit Board",
    "category": "Power Inverter Printed Circuit Board",
    "categoryCode": "inverter-board",
    "catalogPage": 73,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "P-3000W",
      "P-3000W-12V",
      "P-3000W-24V",
      "P-3000W-48V"
    ],
    "highlights": [
      {
        "label": "Output Power",
        "value": "3000W"
      },
      {
        "label": "Peak Power",
        "value": "6000W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "50Hz\u00b12Hz or 60Hz\u00b12Hz"
      },
      {
        "label": "Output Waveform",
        "value": "Pure sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V 2A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "90% 92% 96%"
      }
    ],
    "technicalSummary": "P-3000W Printed circuit board Technical parameters Model P-3000W-12V P-3000W-24V P-3000W-48V Output Power 3000W Peak Power 6000W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22641A \u22640.7A \u22640.4A Output Frequency 50Hz\u00b12Hz or 60Hz\u00b12Hz Output Waveform Pure sine wave Display LED or LCD display USB Output Votlage/ Current 5V 2A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency %06 92% %96 Low Voltage Protection Alarm \"Bi\u201d with 2s interval +red and green lights flashing alternately /restartautomaticallywhenvoltagerecover Alarm \"BiBi\u201d with 1s interval +red and green lights flashing alternately OverVoltageProtection /restartautomaticallywhenvoltagerecover Alarm\"Bi\" continously +red light flashing Over Load Protection /restart automatically when load power recover;lf it is closed after twice recover, it need restart manually. Over Temp Protection Alarm\"BiBiBi\" with 1s interval +red and green lights flashing alternately /restart whentemprecover Short Circuit Protection yes DC Reverse Connection Protection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v LowVoltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v OverVoltageProtectionRange 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0\u2103~50\u2103 Cooling Method Fan cooling (Temperature control) 65."
  },
  {
    "id": "inverter-board-74",
    "slug": "pu-300w-printed-inverter-printed-circuit-board-74",
    "name": "PU-300W Printed Inverter Printed Circuit Board",
    "category": "Power Inverter Printed Circuit Board",
    "categoryCode": "inverter-board",
    "catalogPage": 74,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "PU-300W",
      "PU-300W-12V",
      "PU-300W-24V",
      "PU-300W-48V"
    ],
    "highlights": [
      {
        "label": "Output Power",
        "value": "300W"
      },
      {
        "label": "Peak Power",
        "value": "600W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "50Hz\u00b12Hz or 60Hz\u00b12Hz"
      },
      {
        "label": "Output Waveform",
        "value": "Pure sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V 2A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "89% 91% 93%"
      }
    ],
    "technicalSummary": "PU-300W Printed circuit board Technicalparameters Model PU-300W-12V PU-300W-24V PU-300W-48V Output Power 300W Peak Power 600W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22640.55A \u22640.3A \u22640.18A Output Frequency 50Hz\u00b12Hz or 60Hz\u00b12Hz Output Waveform Pure sine wave Display USB Output Votlage/ Current 5V 2A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency 89% 91% 93% Low Voltage Protection Alarm \"Bi\u201d with 2s interval +red and green lights flashing alternately /restartautomaticallywhenvoltagerecover Alarm \"BiBi\u201d\" with 1s interval +red and green lights flashing alternately OverVoltageProtection /restartautomaticallywhenvoltagerecover Alarm \"Bi\" continously +red light flashing Over Load Protection /restart automatically when load power recover;lf it is closed after twice recover,it need restart manually. Over Temp Protection Alarm \"BiBiBi\" with 1s interval +red and green lights flashing alternately /restart whentemprecover Short Circuit Protection yes DC Reverse Connection Protection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v LowVoltageRecover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v OverVoltageProtectionRange 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0\u2103~50\u2103 Cooling Method Fan cooling (Temperature control) Note:The tech updates constantly. These datas are used for reference only.Please refer to our real product. 66"
  },
  {
    "id": "inverter-board-75",
    "slug": "pu-600w-inverter-printed-circuit-board-75",
    "name": "PU-600W Inverter Printed Circuit Board",
    "category": "Power Inverter Printed Circuit Board",
    "categoryCode": "inverter-board",
    "catalogPage": 75,
    "models": [
      "DC12V",
      "DC24V",
      "DC48V",
      "PU-600W",
      "PU-600W-12V",
      "PU-600W-24V",
      "PU-600W-48V"
    ],
    "highlights": [
      {
        "label": "Output Power",
        "value": "600W"
      },
      {
        "label": "Peak Power",
        "value": "1200W"
      },
      {
        "label": "Input Voltage",
        "value": "DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V)"
      },
      {
        "label": "Output Voltage",
        "value": "Single Choice) 100V/110V/120V/220V/230V/240V"
      },
      {
        "label": "Output Frequency",
        "value": "50Hz\u00b12Hz or 60Hz\u00b12Hz"
      },
      {
        "label": "Output Waveform",
        "value": "Pure sine wave"
      },
      {
        "label": "USB Output",
        "value": "5V 2A (Support QC3.0 fast charge up to 18W)"
      },
      {
        "label": "Efficiency",
        "value": "88% 90% 92%"
      }
    ],
    "technicalSummary": "PU-600W Printed circuit board Technical parameters Model PU-600W-12V PU-600W-24V PU-600W-48V Output Power 600W Peak Power 1200W DC Input Voltage Range DC12V(9.5V-15.5V) DC24V(19V-31V) DC48V(38V-62V) AC Output Voltage (Single Choice) 100V/110V/120V/220V/230V/240V Unload Current \u22640.6A \u22640.3A \u22640.2A Output Frequency 50Hz\u00b12Hz or 60Hz\u00b12Hz Output Waveform Pure sine wave Display USB Output Votlage/ Current 5V 2A (Support QC3.0 fast charge up to 18W) Max.Output Efficiency 88% 90% 92% Low Voltage Protection Alarm \"Bi\u201d with 2s interval +red and green lights flashing alternately /restartautomaticallywhenvoltagerecover Alarm\"BiBi\u201d with 1s interval +red and green lights flashing alternately OverVoltageProtection /restartautomaticallywhenvoltagerecover Alarm\"Bi\" continously +red light flashing Over Load Protection /restart automatically when load power recover;lf it is closed after twice recover,it need restart manually. Over Temp Protection Alarm\"BiBiBi\" with 1s interval +red and green lights flashing alternately /restart whentemprecover Short Circuit Protection yes DC Reverse Connection Protection Fuse burnt Low Voltage Alarm Range 10.5v\u00b10.5v 21v\u00b10.5v 42v\u00b10.5v Low Voltage Protection Range 9.5v\u00b10.5v 19v\u00b10.5v 38v\u00b10.5v LowVoltage Recover Range 12v\u00b10.5v 23v\u00b10.5v 46v\u00b10.5v OverVoltageProtectionRange 15.5v\u00b10.5v 31v\u00b10.5v 62v\u00b10.5v Over Voltage Recover Range 14v\u00b10.5v 28v\u00b10.5v 56v\u00b10.5v Working Temperature -10\u00b0\u2103~50\u2103 Cooling Method Fan cooling (Temperature control) Note:The tech updates constantly. These datas are used for reference only.Please refer to our real product. 67"
  }
] as const satisfies readonly CatalogProduct[]

export const CATALOG_CATEGORIES = [
  "Modified Sine Wave Power Inverter",
  "Pure Sine Wave Power Inverter",
  "Uninterruptible Power Source",
  "Battery Charger",
  "Portable Power Station",
  "Power Inverter Printed Circuit Board"
] as const

export const CATALOG_PRODUCT_COUNT = CATALOG_PRODUCTS.length