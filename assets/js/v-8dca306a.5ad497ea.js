"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[68121],{617567:(e,o,t)=>{t.r(o),t.d(o,{data:()=>n});const n=JSON.parse('{"key":"v-8dca306a","path":"/devices/4512726.html","title":"Namron 4512726 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Namron 4512726 control via MQTT","description":"Integrate your Namron 4512726 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-07-01T18:17:29.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Select a Color Mode (depends on the color type of the light devices the switch paired to)","slug":"select-a-color-mode-depends-on-the-color-type-of-the-light-devices-the-switch-paired-to","link":"#select-a-color-mode-depends-on-the-color-type-of-the-light-devices-the-switch-paired-to","children":[]},{"level":3,"title":"Mono Color Mode","slug":"mono-color-mode","link":"#mono-color-mode","children":[]},{"level":3,"title":"CCT Color Mode","slug":"cct-color-mode","link":"#cct-color-mode","children":[]},{"level":3,"title":"RGB Color Mode","slug":"rgb-color-mode","link":"#rgb-color-mode","children":[]},{"level":3,"title":"RGB+CCT Color Mode","slug":"rgb-cct-color-mode","link":"#rgb-cct-color-mode","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1690904454000},"filePathRelative":"devices/4512726.md"}')},448744:(e,o,t)=>{t.r(o),t.d(o,{default:()=>b});var n=t(166252);const i=(0,n._)("h1",{id:"namron-4512726",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#namron-4512726","aria-hidden":"true"},"#"),(0,n.Uk)(" Namron 4512726")],-1),l=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),s=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"4512726")],-1),a=(0,n._)("td",null,"Vendor",-1),r=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"Zigbee 4 in 1 dimmer")],-1),d=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"battery, voltage, action, linkquality")],-1),c=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/4512726.jpg",alt:"Namron 4512726"})])],-1),h=(0,n.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>This will factory reset the device, after resetting the switch will be set into network pairing mode automatically.</p><ol><li>Short press the knob 5 times continuously and quickly.</li><li>Within 2 seconds after step 1, press and hold the knob for over 3 seconds, indicator will flash 3 times for successful reset.</li></ol><h3 id="select-a-color-mode-depends-on-the-color-type-of-the-light-devices-the-switch-paired-to" tabindex="-1"><a class="header-anchor" href="#select-a-color-mode-depends-on-the-color-type-of-the-light-devices-the-switch-paired-to" aria-hidden="true">#</a> Select a Color Mode (depends on the color type of the light devices the switch paired to)</h3><ol><li>Press and hold the knob for over 3 seconds, LED indicator turns on and stays solid on, release the knob.</li><li>Keep short pressing the knob within 5 seconds to get different color modes one by one, LED indicator status will be different for each short press to indicate different color modes. The indicator status for different color modes are as follows:</li></ol><ul><li><strong>Mono color mode</strong>: indicator keeps blinking with the frequency of twice per second, only Dim command will be sent when rotate the knob.</li><li><strong>CCT color mode</strong>: Indicator keeps blinking with the frequency as follows: blinks for 1 second (twice per second) and stops blinking for 1 second, then blinks for 1 second (twice per second) and stops blinking for 1 second again. Color temperature command will be sent when rotate the knob.</li><li><strong>RGB color mode</strong>: indicator keeps blinking with the frequency as follows: blinks for 1.5 seconds (3 times per 1.5 seconds) and stops blinking for 1 second, then blinks for 1.5 seconds (3 times per 1.5 seconds) and stops blinking for 1 second again. RGB color control command will be sent when rotate the knob.</li><li><strong>RGB+CCT color mode</strong>: indicator keeps blinking with the frequency as follows: blinks for 2 seconds (4 times per 2 seconds) and stops blinking for 1 second, then blinks for 2 seconds (4 times per 2 seconds) and stops blinking for 1 second again. RGB+CCT color control command will be sent when rotate the knob.</li></ul><ol start="3"><li>Observe the indicator status after each short press, when the desired color mode status appears, press and hold the knob for 3 seconds to confirm the selected mode.</li></ol><p><strong>Note:</strong> <em>If there is no further operation within 5 seconds after step 1, the switch will quit color mode setting automatically.</em></p><h3 id="mono-color-mode" tabindex="-1"><a class="header-anchor" href="#mono-color-mode" aria-hidden="true">#</a> Mono Color Mode</h3><p><strong>Rotate the knob clockwise:</strong></p><ol><li>Increase light intensity from 1% to 100%.</li></ol><p><strong>Rotate the knob counterclockwise:</strong></p><ol><li>Decrease light intensity from 100% to 1%.</li></ol><h3 id="cct-color-mode" tabindex="-1"><a class="header-anchor" href="#cct-color-mode" aria-hidden="true">#</a> CCT Color Mode</h3><p><strong>Double click the knob:</strong></p><ol><li>Switch between CCT command and brightness command. Each time when switched on, the switch will send brightness command when knob rotated by default.</li></ol><p><strong>Rotate the knob clockwise:</strong></p><ol><li>Increase light intensity from 1% to 100% (brightness command).</li><li>Adjust color temperature from CW to WW (CCT command)</li></ol><p><strong>Rotate the knob counterclockwise:</strong></p><ol><li>Decrease light intensity from 100% to 1% (brightness command).</li><li>Adjust color temperature from WW to CW (CCT command)</li></ol><h3 id="rgb-color-mode" tabindex="-1"><a class="header-anchor" href="#rgb-color-mode" aria-hidden="true">#</a> RGB Color Mode</h3><p><strong>Double click the knob:</strong></p><ol><li>Switch between RGB command and brightness command. Each time when switched on, the switch will send brightness command when knob rotated by default.</li></ol><p><strong>Rotate the knob clockwise:</strong></p><ol><li>Increase light intensity from 1% to 100% (brightness command).</li><li>Increase hue absolute value of RGB color(RGB command)</li></ol><p><strong>Rotate the knob counterclockwise</strong>:</p><ol><li>Decrease light intensity from 100% to 1% (brightness command).</li><li>Decrease hue absolute value of RGB color(RGB command)</li></ol><h3 id="rgb-cct-color-mode" tabindex="-1"><a class="header-anchor" href="#rgb-cct-color-mode" aria-hidden="true">#</a> RGB+CCT Color Mode</h3><p><strong>Double click the knob:</strong></p><ol><li>Switch between RGB+CCT command and brightness command. Each time when switched on, the switch will send brightness command when knob rotated by default.</li></ol><p><strong>Rotate the knob clockwise:</strong></p><ol><li>Increase light intensity from 1% to 100% (brightness command).</li><li>Increase hue absolute value of RGB color (1st circle) and then adjust CCT from CW to WW (2nd circle) (RGB+CCT command)</li></ol><p><strong>Rotate the knob counterclockwise:</strong></p><ol><li>Decrease light intensity fram 100% to 1% (brightness command).</li><li>Decrease hue absolute value of RGB color (1st circle) and then adjust CCT from WW to CW (2nd circle) (RGB+CCT command)</li></ol>',35),u=(0,n._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,n.Uk)(" OTA updates")],-1),m=(0,n._)("h2",{id:"options",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,n.Uk)(" Options")],-1),p=(0,n.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_move_to_level</code>, <code>color_temperature_move</code>, <code>move_to_hue</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),g={},b=(0,t(983744).Z)(g,[["render",function(e,o){const t=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),i,(0,n._)("table",null,[l,(0,n._)("tbody",null,[s,(0,n._)("tr",null,[a,(0,n._)("td",null,[(0,n.Wm)(t,{to:"/supported-devices/#v=Namron"},{default:(0,n.w5)((()=>[(0,n.Uk)("Namron")])),_:1})])]),r,d,c])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,(0,n.kq)(" Notes END: Do not edit below this line "),u,(0,n._)("p",null,[(0,n.Uk)("This device supports OTA updates, for more information see "),(0,n.Wm)(t,{to:"/guide/usage/ota_updates.html"},{default:(0,n.w5)((()=>[(0,n.Uk)("OTA updates")])),_:1}),(0,n.Uk)(".")]),m,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[(0,n.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);