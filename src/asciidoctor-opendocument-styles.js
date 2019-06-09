'use strict';

const settings = `<office:settings>
  <config:config-item-set config:name="ooo:view-settings">
   <config:config-item config:name="ViewAreaTop" config:type="long">159715</config:config-item>
   <config:config-item config:name="ViewAreaLeft" config:type="long">0</config:config-item>
   <config:config-item config:name="ViewAreaWidth" config:type="long">19773</config:config-item>
   <config:config-item config:name="ViewAreaHeight" config:type="long">11601</config:config-item>
   <config:config-item config:name="ShowRedlineChanges" config:type="boolean">false</config:config-item>
   <config:config-item config:name="InBrowseMode" config:type="boolean">false</config:config-item>
   <config:config-item-map-indexed config:name="Views">
    <config:config-item-map-entry>
     <config:config-item config:name="ViewId" config:type="string">view2</config:config-item>
     <config:config-item config:name="ViewLeft" config:type="long">6055</config:config-item>
     <config:config-item config:name="ViewTop" config:type="long">164093</config:config-item>
     <config:config-item config:name="VisibleLeft" config:type="long">0</config:config-item>
     <config:config-item config:name="VisibleTop" config:type="long">159715</config:config-item>
     <config:config-item config:name="VisibleRight" config:type="long">19771</config:config-item>
     <config:config-item config:name="VisibleBottom" config:type="long">171314</config:config-item>
     <config:config-item config:name="ZoomType" config:type="short">0</config:config-item>
     <config:config-item config:name="ViewLayoutColumns" config:type="short">1</config:config-item>
     <config:config-item config:name="ViewLayoutBookMode" config:type="boolean">false</config:config-item>
     <config:config-item config:name="ZoomFactor" config:type="short">110</config:config-item>
     <config:config-item config:name="IsSelectedFrame" config:type="boolean">false</config:config-item>
     <config:config-item config:name="AnchoredTextOverflowLegacy" config:type="boolean">false</config:config-item>
    </config:config-item-map-entry>
   </config:config-item-map-indexed>
  </config:config-item-set>
  <config:config-item-set config:name="ooo:configuration-settings">
   <config:config-item config:name="PrintControls" config:type="boolean">true</config:config-item>
   <config:config-item config:name="PrintPageBackground" config:type="boolean">true</config:config-item>
   <config:config-item config:name="PrintAnnotationMode" config:type="short">0</config:config-item>
   <config:config-item config:name="PrintGraphics" config:type="boolean">true</config:config-item>
   <config:config-item config:name="PrintLeftPages" config:type="boolean">true</config:config-item>
   <config:config-item config:name="PrintProspect" config:type="boolean">false</config:config-item>
   <config:config-item config:name="PrintRightPages" config:type="boolean">true</config:config-item>
   <config:config-item config:name="PrintFaxName" config:type="string"/>
   <config:config-item config:name="PrintPaperFromSetup" config:type="boolean">false</config:config-item>
   <config:config-item config:name="PrintTextPlaceholder" config:type="boolean">false</config:config-item>
   <config:config-item config:name="DisableOffPagePositioning" config:type="boolean">true</config:config-item>
   <config:config-item config:name="ApplyParagraphMarkFormatToNumbering" config:type="boolean">false</config:config-item>
   <config:config-item config:name="PrintReversed" config:type="boolean">false</config:config-item>
   <config:config-item config:name="TabOverMargin" config:type="boolean">false</config:config-item>
   <config:config-item config:name="EmbedFonts" config:type="boolean">false</config:config-item>
   <config:config-item config:name="SurroundTextWrapSmall" config:type="boolean">false</config:config-item>
   <config:config-item config:name="BackgroundParaOverDrawings" config:type="boolean">false</config:config-item>
   <config:config-item config:name="ClippedPictures" config:type="boolean">false</config:config-item>
   <config:config-item config:name="FloattableNomargins" config:type="boolean">false</config:config-item>
   <config:config-item config:name="UnbreakableNumberings" config:type="boolean">false</config:config-item>
   <config:config-item config:name="EmbedSystemFonts" config:type="boolean">false</config:config-item>
   <config:config-item config:name="TabOverflow" config:type="boolean">false</config:config-item>
   <config:config-item config:name="PrintTables" config:type="boolean">true</config:config-item>
   <config:config-item config:name="PrintSingleJobs" config:type="boolean">false</config:config-item>
   <config:config-item config:name="SmallCapsPercentage66" config:type="boolean">true</config:config-item>
   <config:config-item config:name="CollapseEmptyCellPara" config:type="boolean">true</config:config-item>
   <config:config-item config:name="UseFormerLineSpacing" config:type="boolean">true</config:config-item>
   <config:config-item config:name="ProtectForm" config:type="boolean">false</config:config-item>
   <config:config-item config:name="PrinterSetup" config:type="base64Binary">AAA=</config:config-item>
   <config:config-item config:name="CurrentDatabaseCommand" config:type="string"/>
   <config:config-item config:name="ClipAsCharacterAnchoredWriterFlyFrames" config:type="boolean">false</config:config-item>
   <config:config-item config:name="DoNotCaptureDrawObjsOnPage" config:type="boolean">false</config:config-item>
   <config:config-item config:name="CurrentDatabaseCommandType" config:type="int">0</config:config-item>
   <config:config-item config:name="LoadReadonly" config:type="boolean">false</config:config-item>
   <config:config-item config:name="DoNotResetParaAttrsForNumFont" config:type="boolean">false</config:config-item>
   <config:config-item config:name="StylesNoDefault" config:type="boolean">false</config:config-item>
   <config:config-item config:name="AlignTabStopPosition" config:type="boolean">false</config:config-item>
   <config:config-item config:name="LinkUpdateMode" config:type="short">1</config:config-item>
   <config:config-item config:name="DoNotJustifyLinesWithManualBreak" config:type="boolean">true</config:config-item>
   <config:config-item config:name="RsidRoot" config:type="int">847901</config:config-item>
   <config:config-item config:name="PropLineSpacingShrinksFirstLine" config:type="boolean">false</config:config-item>
   <config:config-item config:name="ConsiderTextWrapOnObjPos" config:type="boolean">false</config:config-item>
   <config:config-item config:name="TabAtLeftIndentForParagraphsInList" config:type="boolean">false</config:config-item>
   <config:config-item config:name="RedlineProtectionKey" config:type="base64Binary"/>
   <config:config-item config:name="UnxForceZeroExtLeading" config:type="boolean">true</config:config-item>
   <config:config-item config:name="PrintDrawings" config:type="boolean">true</config:config-item>
   <config:config-item config:name="UseFormerTextWrapping" config:type="boolean">true</config:config-item>
   <config:config-item config:name="CurrentDatabaseDataSource" config:type="string"/>
   <config:config-item config:name="AllowPrintJobCancel" config:type="boolean">false</config:config-item>
   <config:config-item config:name="SubtractFlysAnchoredAtFlys" config:type="boolean">true</config:config-item>
   <config:config-item config:name="AddParaSpacingToTableCells" config:type="boolean">false</config:config-item>
   <config:config-item config:name="AddExternalLeading" config:type="boolean">false</config:config-item>
   <config:config-item config:name="AddVerticalFrameOffsets" config:type="boolean">false</config:config-item>
   <config:config-item config:name="TreatSingleColumnBreakAsPageBreak" config:type="boolean">false</config:config-item>
   <config:config-item config:name="MathBaselineAlignment" config:type="boolean">false</config:config-item>
   <config:config-item config:name="AddFrameOffsets" config:type="boolean">false</config:config-item>
   <config:config-item config:name="IsLabelDocument" config:type="boolean">false</config:config-item>
   <config:config-item config:name="MsWordCompTrailingBlanks" config:type="boolean">false</config:config-item>
   <config:config-item config:name="IgnoreFirstLineIndentInNumbering" config:type="boolean">true</config:config-item>
   <config:config-item config:name="OutlineLevelYieldsNumbering" config:type="boolean">false</config:config-item>
   <config:config-item config:name="PrinterName" config:type="string"/>
   <config:config-item config:name="IsKernAsianPunctuation" config:type="boolean">false</config:config-item>
   <config:config-item config:name="PrinterIndependentLayout" config:type="string">low-resolution</config:config-item>
   <config:config-item config:name="PrintBlackFonts" config:type="boolean">false</config:config-item>
   <config:config-item config:name="TableRowKeep" config:type="boolean">false</config:config-item>
   <config:config-item config:name="UpdateFromTemplate" config:type="boolean">true</config:config-item>
   <config:config-item config:name="EmbeddedDatabaseName" config:type="string"/>
   <config:config-item config:name="Rsid" config:type="int">973921</config:config-item>
   <config:config-item config:name="TabsRelativeToIndent" config:type="boolean">true</config:config-item>
   <config:config-item config:name="UseOldPrinterMetrics" config:type="boolean">false</config:config-item>
   <config:config-item config:name="IgnoreTabsAndBlanksForLineCalculation" config:type="boolean">false</config:config-item>
   <config:config-item config:name="InvertBorderSpacing" config:type="boolean">false</config:config-item>
   <config:config-item config:name="SaveGlobalDocumentLinks" config:type="boolean">false</config:config-item>
   <config:config-item config:name="PrintProspectRTL" config:type="boolean">false</config:config-item>
   <config:config-item config:name="PrintEmptyPages" config:type="boolean">true</config:config-item>
   <config:config-item config:name="ApplyUserData" config:type="boolean">true</config:config-item>
   <config:config-item config:name="UseOldNumbering" config:type="boolean">true</config:config-item>
   <config:config-item config:name="FieldAutoUpdate" config:type="boolean">true</config:config-item>
   <config:config-item config:name="UseFormerObjectPositioning" config:type="boolean">true</config:config-item>
   <config:config-item config:name="PrintHiddenText" config:type="boolean">false</config:config-item>
   <config:config-item config:name="AddParaTableSpacingAtStart" config:type="boolean">false</config:config-item>
   <config:config-item config:name="CharacterCompressionType" config:type="short">0</config:config-item>
   <config:config-item config:name="SaveVersionOnClose" config:type="boolean">false</config:config-item>
   <config:config-item config:name="ChartAutoUpdate" config:type="boolean">true</config:config-item>
   <config:config-item config:name="AddParaTableSpacing" config:type="boolean">false</config:config-item>
  </config:config-item-set>
 </office:settings>`;

// const scripts = `<office:scripts>
//   <office:script script:language="ooo:Basic">
//    <ooo:libraries xmlns:ooo="http://openoffice.org/2004/office" xmlns:xlink="http://www.w3.org/1999/xlink">
//     <ooo:library-embedded ooo:name="Standard">
//      <ooo:module ooo:name="ThisDocument">
//       <ooo:source-code>Sub ThisDocument
//
// Rem Private Sub Document_Close()&#x0d;
// Rem &#x0d;
// Rem End Sub&#x0d;
// Rem &#x0d;
// Rem Private Sub Document_New()&#x0d;
// Rem &#x0d;
// Rem End Sub&#x0d;
// Rem &#x0d;
// Rem Private Sub Document_Open()&#x0d;
// Rem &#x0d;
// Rem End Sub&#x0d;
// Rem
// End Sub
//       </ooo:source-code>
//      </ooo:module>
//      <ooo:module ooo:name="AaMacrosPersos">
//       <ooo:source-code>Sub AaMacrosPersos
//
// Rem &#x0d;
// Rem Sub AltFTavecNumeros()&#x0d;
// Rem     Selection.Style = ActiveDocument.Styles(&quot;Figure&quot;)&#x0d;
// Rem     Selection.TypeParagraph&#x0d;
// Rem     Selection.Style = ActiveDocument.Styles(&quot;Légende&quot;)&#x0d;
// Rem     &#x0d;
// Rem     Selection.TypeText (&quot;Figure &quot;)&#x0d;
// Rem     &#x0d;
// Rem WordBasic.Insertfield Field:=&quot;styleref NuméroChapitre&quot;&#x0d;
// Rem Selection.TypeText &quot;–&quot;&#x0d;
// Rem WordBasic.Insertfield Field:=&quot;autonum&quot;&#x0d;
// Rem WordBasic.Insert &quot; &quot;&#x0d;
// Rem WordBasic.EndOfLine&#x0d;
// Rem &#x0d;
// Rem     Selection.MoveLeft Unit:=wdWord, Count:=2, Extend:=wdExtend&#x0d;
// Rem     Selection.Fields.Update&#x0d;
// Rem     Selection.MoveRight Unit:=wdCharacter, Count:=1&#x0d;
// Rem End Sub&#x0d;
// Rem Sub AAccentue()&#x0d;
// Rem     Selection.TypeText Text:=&quot;À&quot;&#x0d;
// Rem End Sub&#x0d;
// Rem Sub EAccentue()&#x0d;
// Rem     Selection.TypeText Text:=&quot;É&quot;&#x0d;
// Rem End Sub&#x0d;
// Rem Sub MarquerEntreeIndex()&#x0d;
// Rem Dim EntreeIndex As String&#x0d;
// Rem &#x0d;
// Rem &apos;ActiveWindow.ActivePane.View.ShowAll = True&#x0d;
// Rem &#x0d;
// Rem &apos;sélectionner le mot courant si aucune sélection&#x0d;
// Rem If Selection.Type = wdSelectionIP Then&#x0d;
// Rem     Selection.MoveLeft Unit:=wdWord, Count:=1&#x0d;
// Rem     Selection.MoveRight Unit:=wdWord, Count:=1, Extend:=wdExtend&#x0d;
// Rem End If&#x0d;
// Rem &#x0d;
// Rem &apos;enlever les espaces de début et fin&#x0d;
// Rem EntreeIndex = Trim(Selection)&#x0d;
// Rem     If Mid(EntreeIndex, 2, 1) = &quot;’&quot; Then &apos;ôte les débuts de mot avec apostrophe&#x0d;
// Rem     EntreeIndex = Mid(EntreeIndex, 3)&#x0d;
// Rem     End If&#x0d;
// Rem &apos;marquer l&apos;entrée&#x0d;
// Rem ActiveDocument.Indexes.MarkEntry Range:=Selection.Range, Entry:=EntreeIndex&#x0d;
// Rem &apos;se positionner en fin d&apos;entrée&#x0d;
// Rem     Selection.MoveRight Unit:=wdCharacter, Count:=1&#x0d;
// Rem     Selection.MoveRight Unit:=wdWord, Count:=1, Extend:=wdExtend&#x0d;
// Rem     Selection.MoveRight Unit:=wdCharacter, Count:=1&#x0d;
// Rem     Selection.MoveLeft Unit:=wdCharacter, Count:=1&#x0d;
// Rem End Sub&#x0d;
// Rem Sub GuillemetsOnOff()&#x0d;
// Rem     With Options&#x0d;
// Rem         .AutoFormatAsYouTypeReplaceQuotes = Not .AutoFormatAsYouTypeReplaceQuotes&#x0d;
// Rem     End With&#x0d;
// Rem End Sub&#x0d;
// Rem Sub AltFT()&#x0d;
// Rem     Selection.Style = ActiveDocument.Styles(&quot;Figure&quot;)&#x0d;
// Rem     Selection.TypeParagraph&#x0d;
// Rem     Selection.Style = ActiveDocument.Styles(&quot;Légende&quot;)&#x0d;
// Rem     &#x0d;
// Rem End Sub&#x0d;
// Rem &#x0d;
// Rem
// End Sub
//       </ooo:source-code>
//      </ooo:module>
//     </ooo:library-embedded>
//    </ooo:libraries>
//   </office:script>
//   <office:event-listeners>
//    <script:event-listener script:language="ooo:StarBasic" script:event-name="office:start-app" script:macro-name="application:Indesko.FixOutline.FixOutline"/>
//    <script:event-listener script:language="ooo:StarBasic" script:event-name="office:save" script:macro-name="application:Indesko.FixOutline.FixOutline"/>
//   </office:event-listeners>
//  </office:scripts>`;

const fonts = `<office:font-face-decls>
  <style:font-face style:name="StarSymbol" svg:font-family="StarSymbol" style:font-charset="x-symbol"/>
  <style:font-face style:name="Wingdings" svg:font-family="Wingdings" style:font-adornments="Normal" style:font-pitch="variable" style:font-charset="x-symbol"/>
  <style:font-face style:name="Symbol" svg:font-family="Symbol" style:font-adornments="Normal" style:font-family-generic="roman" style:font-pitch="variable" style:font-charset="x-symbol"/>
  <style:font-face style:name="Times New Roman" svg:font-family="&apos;Times New Roman&apos;"/>
  <style:font-face style:name="Courier New" svg:font-family="&apos;Courier New&apos;" style:font-family-generic="modern"/>
  <style:font-face style:name="Courier New1" svg:font-family="&apos;Courier New&apos;" style:font-family-generic="modern" style:font-pitch="fixed"/>
  <style:font-face style:name="Arial Unicode MS" svg:font-family="&apos;Arial Unicode MS&apos;" style:font-pitch="variable"/>
  <style:font-face style:name="Fontin" svg:font-family="Fontin" style:font-adornments="Gras" style:font-pitch="variable"/>
  <style:font-face style:name="Fontin1" svg:font-family="Fontin" style:font-adornments="Italique" style:font-pitch="variable"/>
  <style:font-face style:name="HG Mincho Light J" svg:font-family="&apos;HG Mincho Light J&apos;" style:font-pitch="variable"/>
  <style:font-face style:name="Garamond" svg:font-family="Garamond" style:font-adornments="Normal" style:font-family-generic="roman" style:font-pitch="variable"/>
  <style:font-face style:name="Garamond Book" svg:font-family="&apos;Garamond Book&apos;" style:font-adornments="Normal" style:font-family-generic="roman" style:font-pitch="variable"/>
  <style:font-face style:name="Times New Roman1" svg:font-family="&apos;Times New Roman&apos;" style:font-family-generic="roman" style:font-pitch="variable"/>
  <style:font-face style:name="Arial" svg:font-family="Arial" style:font-family-generic="swiss" style:font-pitch="variable"/>
  <style:font-face style:name="Arial1" svg:font-family="Arial" style:font-adornments="Gras" style:font-family-generic="swiss" style:font-pitch="variable"/>
  <style:font-face style:name="Arial2" svg:font-family="Arial" style:font-adornments="Italique" style:font-family-generic="swiss" style:font-pitch="variable"/>
  <style:font-face style:name="Arial Narrow" svg:font-family="&apos;Arial Narrow&apos;" style:font-family-generic="swiss" style:font-pitch="variable"/>
  <style:font-face style:name="Arial Narrow1" svg:font-family="&apos;Arial Narrow&apos;" style:font-adornments="Normal" style:font-family-generic="swiss" style:font-pitch="variable"/>
  <style:font-face style:name="Arial Rounded MT Bold" svg:font-family="&apos;Arial Rounded MT Bold&apos;, Tahoma" style:font-family-generic="swiss" style:font-pitch="variable"/>
  <style:font-face style:name="Century Gothic" svg:font-family="&apos;Century Gothic&apos;" style:font-family-generic="swiss" style:font-pitch="variable"/>
  <style:font-face style:name="DejaVu Sans" svg:font-family="&apos;DejaVu Sans&apos;" style:font-adornments="Book" style:font-family-generic="swiss" style:font-pitch="variable"/>
  <style:font-face style:name="DejaVu Sans1" svg:font-family="&apos;DejaVu Sans&apos;" style:font-adornments="Oblique" style:font-family-generic="swiss" style:font-pitch="variable"/>
  <style:font-face style:name="DejaVu Sans Condensed1" svg:font-family="&apos;DejaVu Sans Condensed&apos;" style:font-adornments="Book" style:font-family-generic="swiss" style:font-pitch="variable"/>
  <style:font-face style:name="DejaVu Sans Condensed" svg:font-family="&apos;DejaVu Sans Condensed&apos;" style:font-adornments="Gras" style:font-family-generic="swiss" style:font-pitch="variable"/>
  <style:font-face style:name="Tahoma" svg:font-family="Tahoma" style:font-adornments="Italique gras" style:font-family-generic="swiss" style:font-pitch="variable"/>
 </office:font-face-decls>`;

const styles = `<office:styles>
  <style:default-style style:family="graphic">
   <style:graphic-properties svg:stroke-color="#000000" draw:fill-color="#99ccff" fo:wrap-option="no-wrap" draw:shadow-offset-x="0.1181in" draw:shadow-offset-y="0.1181in" draw:start-line-spacing-horizontal="0.1114in" draw:start-line-spacing-vertical="0.1114in" draw:end-line-spacing-horizontal="0.1114in" draw:end-line-spacing-vertical="0.1114in" style:flow-with-text="true"/>
   <style:paragraph-properties style:text-autospace="ideograph-alpha" style:line-break="strict" style:font-independent-line-spacing="false">
    <style:tab-stops/>
   </style:paragraph-properties>
   <style:text-properties fo:color="#000000" style:font-name="Times New Roman" fo:font-size="12pt" fo:language="en" fo:country="US" style:font-name-asian="HG Mincho Light J" style:font-size-asian="12pt" style:language-asian="zxx" style:country-asian="none" style:font-name-complex="Arial Unicode MS" style:font-size-complex="12pt" style:language-complex="zxx" style:country-complex="none"/>
  </style:default-style>
  <style:default-style style:family="paragraph">
   <style:paragraph-properties fo:hyphenation-ladder-count="no-limit" style:text-autospace="ideograph-alpha" style:punctuation-wrap="hanging" style:line-break="strict" style:tab-stop-distance="0.4925in" style:writing-mode="lr-tb"/>
   <style:text-properties fo:color="#000000" style:font-name="Times New Roman" fo:font-size="12pt" fo:language="en" fo:country="US" style:font-name-asian="HG Mincho Light J" style:font-size-asian="12pt" style:language-asian="zxx" style:country-asian="none" style:font-name-complex="Arial Unicode MS" style:font-size-complex="12pt" style:language-complex="zxx" style:country-complex="none" fo:hyphenate="false" fo:hyphenation-remain-char-count="2" fo:hyphenation-push-char-count="2"/>
  </style:default-style>
  <style:default-style style:family="table">
   <style:table-properties table:border-model="separating"/>
  </style:default-style>
  <style:default-style style:family="table-row">
   <style:table-row-properties fo:keep-together="auto"/>
  </style:default-style>
  <style:style style:name="Standard" style:family="paragraph" style:class="text">
   <style:paragraph-properties fo:margin-left="0.5909in" fo:margin-right="0in" fo:margin-top="0.0835in" fo:margin-bottom="0.0138in" loext:contextual-spacing="false" fo:text-align="justify" style:justify-single-word="false" fo:orphans="2" fo:widows="2" fo:text-indent="0.0008in" style:auto-text-indent="false"/>
   <style:text-properties style:use-window-font-color="true" style:font-name="Times New Roman1" fo:font-family="&apos;Times New Roman&apos;" style:font-family-generic="roman" style:font-pitch="variable" fo:font-size="10pt" fo:language="fr" fo:country="FR" style:font-name-asian="Times New Roman1" style:font-family-asian="&apos;Times New Roman&apos;" style:font-family-generic-asian="roman" style:font-pitch-asian="variable" style:font-size-asian="10pt"/>
  </style:style>
  <style:style style:name="Text_20_body" style:display-name="Text body" style:family="paragraph" style:parent-style-name="Standard" style:class="text">
   <style:paragraph-properties fo:margin-top="0in" fo:margin-bottom="0.0835in" loext:contextual-spacing="false"/>
  </style:style>
  <style:style style:name="Heading" style:family="paragraph" style:parent-style-name="Standard" style:next-style-name="Text_20_body" style:class="text">
   <style:paragraph-properties fo:margin-top="0.1665in" fo:margin-bottom="0.0835in" loext:contextual-spacing="false" fo:keep-with-next="always"/>
   <style:text-properties style:font-name="Arial" fo:font-family="Arial" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-size="14pt" style:font-name-asian="HG Mincho Light J" style:font-family-asian="&apos;HG Mincho Light J&apos;" style:font-pitch-asian="variable" style:font-size-asian="14pt" style:font-name-complex="Arial Unicode MS" style:font-family-complex="&apos;Arial Unicode MS&apos;" style:font-pitch-complex="variable" style:font-size-complex="14pt"/>
  </style:style>
  <style:style style:name="Heading_20_1" style:display-name="Heading 1" style:family="paragraph" style:parent-style-name="Standard" style:next-style-name="Standard" style:class="text">
   <style:paragraph-properties fo:margin-top="0.139in" fo:margin-bottom="0.5555in" loext:contextual-spacing="false" fo:text-align="end" style:justify-single-word="false" fo:orphans="2" fo:widows="2" fo:padding-left="0in" fo:padding-right="0in" fo:padding-top="0in" fo:padding-bottom="0.0555in" fo:border-left="none" fo:border-right="none" fo:border-top="none" fo:border-bottom="0.06pt solid #000000"/>
   <style:text-properties style:use-window-font-color="true" style:font-name="Arial" fo:font-family="Arial" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-size="20pt" fo:language="zxx" fo:country="none" fo:font-weight="bold" style:font-name-asian="Times New Roman1" style:font-family-asian="&apos;Times New Roman&apos;" style:font-family-generic-asian="roman" style:font-pitch-asian="variable" style:font-size-asian="20pt" style:language-asian="zxx" style:country-asian="none" style:font-weight-asian="bold"/>
  </style:style>
  <style:style style:name="Heading_20_2" style:display-name="Heading 2" style:family="paragraph" style:parent-style-name="Standard" style:next-style-name="Standard" style:class="text">
   <style:paragraph-properties fo:margin-top="0.3472in" fo:margin-bottom="0.0138in" loext:contextual-spacing="false" fo:keep-together="always" fo:orphans="2" fo:widows="2" fo:keep-with-next="always"/>
   <style:text-properties style:use-window-font-color="true" style:font-name="Arial" fo:font-family="Arial" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-size="14pt" fo:language="zxx" fo:country="none" fo:font-weight="bold" style:font-name-asian="Times New Roman1" style:font-family-asian="&apos;Times New Roman&apos;" style:font-family-generic-asian="roman" style:font-pitch-asian="variable" style:font-size-asian="14pt" style:language-asian="zxx" style:country-asian="none" style:font-weight-asian="bold"/>
  </style:style>
  <style:style style:name="Heading_20_3" style:display-name="Heading 3" style:family="paragraph" style:parent-style-name="Standard" style:next-style-name="Standard" style:class="text">
   <style:paragraph-properties fo:margin-top="0.2083in" fo:margin-bottom="0.0138in" loext:contextual-spacing="false" fo:keep-together="always" fo:orphans="2" fo:widows="2" fo:keep-with-next="always"/>
   <style:text-properties style:use-window-font-color="true" style:font-name="Arial Narrow" fo:font-family="&apos;Arial Narrow&apos;" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-size="13pt" fo:language="fr" fo:country="FR" fo:font-weight="bold" style:font-name-asian="Times New Roman1" style:font-family-asian="&apos;Times New Roman&apos;" style:font-family-generic-asian="roman" style:font-pitch-asian="variable" style:font-size-asian="13pt" style:font-weight-asian="bold"/>
  </style:style>
  <style:style style:name="Heading_20_4" style:display-name="Heading 4" style:family="paragraph" style:parent-style-name="Standard" style:next-style-name="Standard" style:class="text">
   <style:paragraph-properties fo:margin-top="0.139in" fo:margin-bottom="0.0138in" loext:contextual-spacing="false" fo:keep-together="always" fo:orphans="2" fo:widows="2" fo:keep-with-next="always"/>
   <style:text-properties style:use-window-font-color="true" style:font-name="Arial Narrow" fo:font-family="&apos;Arial Narrow&apos;" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-size="11pt" fo:language="zxx" fo:country="none" fo:font-weight="bold" style:font-name-asian="Times New Roman1" style:font-family-asian="&apos;Times New Roman&apos;" style:font-family-generic-asian="roman" style:font-pitch-asian="variable" style:font-size-asian="11pt" style:language-asian="zxx" style:country-asian="none" style:font-weight-asian="bold"/>
  </style:style>
  <style:style style:name="Heading_20_5" style:display-name="Heading 5" style:family="paragraph" style:parent-style-name="Heading_20_4" style:next-style-name="Standard" style:class="text">
   <style:paragraph-properties fo:margin-left="0.5909in" fo:margin-right="0in" fo:margin-top="0.111in" fo:margin-bottom="0.0138in" loext:contextual-spacing="false" fo:text-indent="0.0008in" style:auto-text-indent="false"/>
   <style:text-properties fo:font-style="italic" fo:font-weight="normal" style:font-style-asian="italic" style:font-weight-asian="normal"/>
  </style:style>
  <style:style style:name="Heading_20_6" style:display-name="Heading 6" style:family="paragraph" style:parent-style-name="Standard" style:next-style-name="Standard" style:class="text">
   <style:paragraph-properties fo:margin-top="0.1665in" fo:margin-bottom="0.0417in" loext:contextual-spacing="false"/>
   <style:text-properties style:font-name="Arial" fo:font-family="Arial" style:font-family-generic="swiss" style:font-pitch="variable" style:text-underline-style="solid" style:text-underline-width="auto" style:text-underline-color="font-color"/>
  </style:style>
  <style:style style:name="Heading_20_7" style:display-name="Heading 7" style:family="paragraph" style:parent-style-name="Standard" style:next-style-name="Standard" style:class="text">
   <style:paragraph-properties fo:margin-top="0.1665in" fo:margin-bottom="0.0417in" loext:contextual-spacing="false"/>
   <style:text-properties style:font-name="Arial" fo:font-family="Arial" style:font-family-generic="swiss" style:font-pitch="variable"/>
  </style:style>
  <style:style style:name="Heading_20_8" style:display-name="Heading 8" style:family="paragraph" style:parent-style-name="Standard" style:next-style-name="Standard" style:class="text">
   <style:paragraph-properties fo:margin-top="0.1665in" fo:margin-bottom="0.0417in" loext:contextual-spacing="false"/>
   <style:text-properties style:font-name="Arial" fo:font-family="Arial" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-style="italic" style:font-style-asian="italic"/>
  </style:style>
  <style:style style:name="Heading_20_9" style:display-name="Heading 9" style:family="paragraph" style:parent-style-name="Standard" style:next-style-name="Standard" style:class="text">
   <style:paragraph-properties fo:margin-top="0.1665in" fo:margin-bottom="0.0417in" loext:contextual-spacing="false"/>
   <style:text-properties style:font-name="Arial" fo:font-family="Arial" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-size="9pt" fo:font-style="italic" style:font-size-asian="9pt" style:font-style-asian="italic"/>
  </style:style>
  <style:style style:name="Heading_20_10" style:display-name="Heading 10" style:family="paragraph" style:parent-style-name="Heading" style:next-style-name="Text_20_body" style:class="text">
   <style:text-properties fo:font-size="75%" fo:font-weight="bold" style:font-size-asian="75%" style:font-weight-asian="bold" style:font-size-complex="75%" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="List" style:family="paragraph" style:parent-style-name="Text_20_body" style:class="list">
   <style:text-properties style:font-name="Times New Roman" fo:font-family="&apos;Times New Roman&apos;"/>
  </style:style>
  <style:style style:name="Header" style:family="paragraph" style:parent-style-name="Standard" style:class="extra">
   <style:paragraph-properties fo:margin-left="0.5909in" fo:margin-right="0.0783in" fo:margin-top="0.0835in" fo:margin-bottom="0.0138in" loext:contextual-spacing="false" fo:text-align="end" style:justify-single-word="false" fo:orphans="0" fo:widows="0" fo:text-indent="0.0008in" style:auto-text-indent="false">
    <style:tab-stops>
     <style:tab-stop style:position="0.5409in" style:type="right" style:leader-style="solid" style:leader-text="_"/>
     <style:tab-stop style:position="5.2661in"/>
    </style:tab-stops>
   </style:paragraph-properties>
   <style:text-properties style:font-name="Century Gothic" fo:font-family="&apos;Century Gothic&apos;" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-size="8pt" style:font-size-asian="8pt"/>
  </style:style>
  <style:style style:name="Header_20_left" style:display-name="Header left" style:family="paragraph" style:parent-style-name="Standard" style:class="extra">
   <style:paragraph-properties fo:margin-left="0in" fo:margin-right="0in" fo:text-indent="0in" style:auto-text-indent="false" text:number-lines="false" text:line-number="0">
    <style:tab-stops>
     <style:tab-stop style:position="3.5043in" style:type="center"/>
     <style:tab-stop style:position="7.0083in" style:type="right"/>
    </style:tab-stops>
   </style:paragraph-properties>
   <style:text-properties fo:font-variant="small-caps" style:font-name="DejaVu Sans Condensed" fo:font-family="&apos;DejaVu Sans Condensed&apos;" style:font-style-name="Gras" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-size="10pt" fo:font-weight="bold"/>
  </style:style>
  <style:style style:name="Header_20_right" style:display-name="Header right" style:family="paragraph" style:parent-style-name="Standard" style:class="extra">
   <style:paragraph-properties fo:margin-left="0in" fo:margin-right="0in" fo:text-align="end" style:justify-single-word="false" fo:text-indent="0in" style:auto-text-indent="false" text:number-lines="false" text:line-number="0">
    <style:tab-stops>
     <style:tab-stop style:position="3.5043in" style:type="center"/>
     <style:tab-stop style:position="7.0083in" style:type="right"/>
    </style:tab-stops>
   </style:paragraph-properties>
   <style:text-properties fo:font-variant="small-caps" style:font-name="DejaVu Sans Condensed" fo:font-family="&apos;DejaVu Sans Condensed&apos;" style:font-style-name="Gras" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-size="10pt" fo:font-weight="bold"/>
  </style:style>
  <style:style style:name="Footer" style:family="paragraph" style:parent-style-name="Standard" style:class="extra">
   <style:paragraph-properties>
    <style:tab-stops>
     <style:tab-stop style:position="3.15in" style:type="center"/>
     <style:tab-stop style:position="6.3in" style:type="right"/>
    </style:tab-stops>
   </style:paragraph-properties>
  </style:style>
  <style:style style:name="Footer_20_left" style:display-name="Footer left" style:family="paragraph" style:parent-style-name="Standard" style:class="extra">
   <style:paragraph-properties fo:margin-left="0in" fo:margin-right="0in" fo:text-align="start" style:justify-single-word="false" fo:text-indent="0in" style:auto-text-indent="false" fo:padding="0.0398in" fo:border-left="0.99pt solid #000000" fo:border-right="none" fo:border-top="none" fo:border-bottom="none" style:shadow="none" text:number-lines="false" text:line-number="0">
    <style:tab-stops>
     <style:tab-stop style:position="3.5043in" style:type="center"/>
     <style:tab-stop style:position="7.0083in" style:type="right"/>
    </style:tab-stops>
   </style:paragraph-properties>
   <style:text-properties style:font-name="Fontin" fo:font-family="Fontin" style:font-style-name="Gras" style:font-pitch="variable" fo:font-size="12pt" fo:font-weight="bold"/>
  </style:style>
  <style:style style:name="Footer_20_right" style:display-name="Footer right" style:family="paragraph" style:parent-style-name="Standard" style:class="extra">
   <loext:graphic-properties draw:fill="none" draw:fill-color="#99ccff"/>
   <style:paragraph-properties fo:text-align="end" style:justify-single-word="false" fo:background-color="transparent" fo:padding="0.0398in" fo:border-left="none" fo:border-right="0.99pt solid #000000" fo:border-top="none" fo:border-bottom="none" style:shadow="none" text:number-lines="false" text:line-number="0">
    <style:tab-stops>
     <style:tab-stop style:position="3.5043in" style:type="center"/>
     <style:tab-stop style:position="7.0083in" style:type="right"/>
    </style:tab-stops>
   </style:paragraph-properties>
   <style:text-properties style:font-name="Fontin" fo:font-family="Fontin" style:font-style-name="Gras" style:font-pitch="variable" fo:font-size="12pt" fo:font-weight="bold"/>
  </style:style>
  <style:style style:name="Table_20_Contents" style:display-name="Table Contents" style:family="paragraph" style:parent-style-name="Text_20_body" style:class="extra">
   <style:paragraph-properties text:number-lines="false" text:line-number="0"/>
  </style:style>
  <style:style style:name="Table_20_Heading" style:display-name="Table Heading" style:family="paragraph" style:parent-style-name="Table_20_Contents" style:class="extra">
   <style:paragraph-properties fo:text-align="center" style:justify-single-word="false" text:number-lines="false" text:line-number="0"/>
   <style:text-properties fo:font-style="italic" fo:font-weight="bold" style:font-style-asian="italic" style:font-weight-asian="bold" style:font-style-complex="italic" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="Caption" style:family="paragraph" style:parent-style-name="Standard" style:class="extra">
   <style:paragraph-properties fo:margin-top="0.0835in" fo:margin-bottom="0.0835in" loext:contextual-spacing="false" text:number-lines="false" text:line-number="0"/>
   <style:text-properties style:font-name="Times New Roman" fo:font-family="&apos;Times New Roman&apos;" fo:font-size="10pt" fo:font-style="italic" style:font-size-asian="10pt" style:font-style-asian="italic" style:font-size-complex="10pt" style:font-style-complex="italic"/>
  </style:style>
  <style:style style:name="Frame_20_contents" style:display-name="Frame contents" style:family="paragraph" style:parent-style-name="Text_20_body" style:class="extra">
   <style:paragraph-properties fo:margin-left="0in" fo:margin-right="0in" fo:text-indent="0in" style:auto-text-indent="false"/>
  </style:style>
  <style:style style:name="Footnote" style:family="paragraph" style:parent-style-name="Standard" style:class="extra">
   <style:text-properties fo:font-size="8pt" style:font-size-asian="8pt"/>
  </style:style>
  <style:style style:name="Index" style:family="paragraph" style:parent-style-name="Standard" style:class="index">
   <style:paragraph-properties text:number-lines="false" text:line-number="0"/>
   <style:text-properties style:font-name="Times New Roman" fo:font-family="&apos;Times New Roman&apos;"/>
  </style:style>
  <style:style style:name="Index_20_Heading" style:display-name="Index Heading" style:family="paragraph" style:parent-style-name="Heading" style:class="index">
   <style:paragraph-properties fo:margin-left="0in" fo:margin-right="0in" fo:text-indent="0in" style:auto-text-indent="false" text:number-lines="false" text:line-number="0"/>
   <style:text-properties fo:font-size="16pt" fo:font-weight="bold" style:font-size-asian="16pt" style:font-weight-asian="bold" style:font-size-complex="16pt" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="Index_20_1" style:display-name="Index 1" style:family="paragraph" style:parent-style-name="Standard" style:next-style-name="Standard" style:class="index">
   <style:paragraph-properties fo:margin-left="0.139in" fo:margin-right="0in" fo:margin-top="0.0835in" fo:margin-bottom="0.0138in" loext:contextual-spacing="false" fo:text-indent="-0.139in" style:auto-text-indent="false">
    <style:tab-stops>
     <style:tab-stop style:position="2.0138in" style:type="right"/>
    </style:tab-stops>
   </style:paragraph-properties>
   <style:text-properties fo:font-size="9pt" style:font-size-asian="9pt"/>
  </style:style>
  <style:style style:name="Index_20_2" style:display-name="Index 2" style:family="paragraph" style:parent-style-name="Standard" style:next-style-name="Standard" style:class="index">
   <style:paragraph-properties fo:margin-left="0.278in" fo:margin-right="0in" fo:margin-top="0.0835in" fo:margin-bottom="0.0138in" loext:contextual-spacing="false" fo:text-indent="-0.139in" style:auto-text-indent="false">
    <style:tab-stops>
     <style:tab-stop style:position="2.0138in" style:type="right"/>
    </style:tab-stops>
   </style:paragraph-properties>
   <style:text-properties fo:font-size="9pt" style:font-size-asian="9pt"/>
  </style:style>
  <style:style style:name="Index_20_3" style:display-name="Index 3" style:family="paragraph" style:parent-style-name="Standard" style:next-style-name="Standard" style:class="index">
   <style:paragraph-properties fo:margin-left="0.4165in" fo:margin-right="0in" fo:margin-top="0.0835in" fo:margin-bottom="0.0138in" loext:contextual-spacing="false" fo:text-indent="-0.139in" style:auto-text-indent="false">
    <style:tab-stops>
     <style:tab-stop style:position="2.0138in" style:type="right"/>
    </style:tab-stops>
   </style:paragraph-properties>
   <style:text-properties fo:font-size="9pt" style:font-size-asian="9pt"/>
  </style:style>
  <style:style style:name="Contents_20_Heading" style:display-name="Contents Heading" style:family="paragraph" style:parent-style-name="Heading" style:class="index">
   <style:paragraph-properties fo:margin-left="0in" fo:margin-right="0in" fo:text-indent="0in" style:auto-text-indent="false" text:number-lines="false" text:line-number="0"/>
   <style:text-properties fo:font-size="16pt" fo:font-weight="bold" style:font-size-asian="16pt" style:font-weight-asian="bold" style:font-size-complex="16pt" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="Contents_20_1" style:display-name="Contents 1" style:family="paragraph" style:parent-style-name="Standard" style:next-style-name="Standard" style:class="index">
   <loext:graphic-properties draw:fill="solid" draw:fill-color="#cccccc" draw:opacity="100%"/>
   <style:paragraph-properties fo:margin-left="0in" fo:margin-right="0in" fo:margin-top="0.139in" fo:margin-bottom="0.0693in" loext:contextual-spacing="false" fo:text-align="start" style:justify-single-word="false" fo:keep-together="always" fo:text-indent="0in" style:auto-text-indent="false" fo:background-color="#cccccc" fo:padding-left="0in" fo:padding-right="0in" fo:padding-top="0.0417in" fo:padding-bottom="0.0417in" fo:border-left="none" fo:border-right="none" fo:border-top="0.06pt solid #000000" fo:border-bottom="0.06pt solid #000000" fo:keep-with-next="always">
    <style:tab-stops>
     <style:tab-stop style:position="5.1189in" style:type="right" style:leader-style="dotted" style:leader-text="."/>
    </style:tab-stops>
   </style:paragraph-properties>
   <style:text-properties fo:text-transform="uppercase" style:font-name="Arial" fo:font-family="Arial" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-weight="bold" style:font-weight-asian="bold"/>
  </style:style>
  <style:style style:name="Contents_20_2" style:display-name="Contents 2" style:family="paragraph" style:parent-style-name="Standard" style:next-style-name="Standard" style:class="index">
   <style:paragraph-properties fo:margin-left="0in" fo:margin-right="0in" fo:orphans="2" fo:widows="2" fo:text-indent="0in" style:auto-text-indent="false">
    <style:tab-stops>
     <style:tab-stop style:position="5.1181in" style:type="right" style:leader-style="dotted" style:leader-text="."/>
    </style:tab-stops>
   </style:paragraph-properties>
   <style:text-properties style:use-window-font-color="true" style:font-name="Times New Roman1" fo:font-family="&apos;Times New Roman&apos;" style:font-family-generic="roman" style:font-pitch="variable" fo:font-size="10pt" fo:language="zxx" fo:country="none" fo:font-weight="bold" style:font-name-asian="Times New Roman1" style:font-family-asian="&apos;Times New Roman&apos;" style:font-family-generic-asian="roman" style:font-pitch-asian="variable" style:font-size-asian="10pt" style:language-asian="zxx" style:country-asian="none" style:font-weight-asian="bold"/>
  </style:style>
  <style:style style:name="Contents_20_3" style:display-name="Contents 3" style:family="paragraph" style:parent-style-name="Standard" style:next-style-name="Standard" style:class="index">
   <style:paragraph-properties fo:margin-left="0.1492in" fo:margin-right="0in" fo:orphans="2" fo:widows="2" fo:text-indent="0.0008in" style:auto-text-indent="false">
    <style:tab-stops>
     <style:tab-stop style:position="5.1189in" style:type="right" style:leader-style="dotted" style:leader-text="."/>
    </style:tab-stops>
   </style:paragraph-properties>
   <style:text-properties style:use-window-font-color="true" style:font-name="Times New Roman1" fo:font-family="&apos;Times New Roman&apos;" style:font-family-generic="roman" style:font-pitch="variable" fo:font-size="9pt" fo:language="zxx" fo:country="none" style:font-name-asian="Times New Roman1" style:font-family-asian="&apos;Times New Roman&apos;" style:font-family-generic-asian="roman" style:font-pitch-asian="variable" style:font-size-asian="9pt" style:language-asian="zxx" style:country-asian="none"/>
  </style:style>
  <style:style style:name="Contents_20_4" style:display-name="Contents 4" style:family="paragraph" style:parent-style-name="Standard" style:next-style-name="Standard" style:class="index">
   <style:paragraph-properties fo:margin-left="0.2799in" fo:margin-right="0in" fo:orphans="2" fo:widows="2" fo:text-indent="0.0008in" style:auto-text-indent="false">
    <style:tab-stops>
     <style:tab-stop style:position="5.1189in" style:type="right" style:leader-style="dotted" style:leader-text="."/>
    </style:tab-stops>
   </style:paragraph-properties>
   <style:text-properties style:use-window-font-color="true" style:font-name="Times New Roman1" fo:font-family="&apos;Times New Roman&apos;" style:font-family-generic="roman" style:font-pitch="variable" fo:font-size="9pt" fo:language="zxx" fo:country="none" fo:font-style="normal" style:font-name-asian="Times New Roman1" style:font-family-asian="&apos;Times New Roman&apos;" style:font-family-generic-asian="roman" style:font-pitch-asian="variable" style:font-size-asian="9pt" style:language-asian="zxx" style:country-asian="none" style:font-style-asian="italic"/>
  </style:style>
  <style:style style:name="Contents_20_5" style:display-name="Contents 5" style:family="paragraph" style:parent-style-name="Index" style:class="index">
   <style:paragraph-properties fo:margin-left="0.7862in" fo:margin-right="0in" fo:text-indent="0in" style:auto-text-indent="false">
    <style:tab-stops>
     <style:tab-stop style:position="6.1028in" style:type="right" style:leader-style="dotted" style:leader-text="."/>
    </style:tab-stops>
   </style:paragraph-properties>
  </style:style>
  <style:style style:name="Contents_20_6" style:display-name="Contents 6" style:family="paragraph" style:parent-style-name="Index" style:class="index">
   <style:paragraph-properties fo:margin-left="0.9827in" fo:margin-right="0in" fo:margin-top="0.0043in" fo:margin-bottom="0in" loext:contextual-spacing="false" fo:text-indent="0in" style:auto-text-indent="false">
    <style:tab-stops>
     <style:tab-stop style:position="5.9063in" style:type="right" style:leader-style="dotted" style:leader-text="."/>
    </style:tab-stops>
   </style:paragraph-properties>
   <style:text-properties fo:font-size="9pt" fo:font-style="italic"/>
  </style:style>
  <style:style style:name="Contents_20_7" style:display-name="Contents 7" style:family="paragraph" style:parent-style-name="Index" style:class="index">
   <style:paragraph-properties fo:margin-left="1.1791in" fo:margin-right="0in" fo:text-indent="0in" style:auto-text-indent="false">
    <style:tab-stops>
     <style:tab-stop style:position="5.7098in" style:type="right" style:leader-style="dotted" style:leader-text="."/>
    </style:tab-stops>
   </style:paragraph-properties>
  </style:style>
  <style:style style:name="Contents_20_8" style:display-name="Contents 8" style:family="paragraph" style:parent-style-name="Index" style:class="index">
   <style:paragraph-properties fo:margin-left="1.3756in" fo:margin-right="0in" fo:text-indent="0in" style:auto-text-indent="false">
    <style:tab-stops>
     <style:tab-stop style:position="5.5134in" style:type="right" style:leader-style="dotted" style:leader-text="."/>
    </style:tab-stops>
   </style:paragraph-properties>
  </style:style>
  <style:style style:name="Contents_20_9" style:display-name="Contents 9" style:family="paragraph" style:parent-style-name="Index" style:class="index">
   <style:paragraph-properties fo:margin-left="1.572in" fo:margin-right="0in" fo:text-indent="0in" style:auto-text-indent="false">
    <style:tab-stops>
     <style:tab-stop style:position="5.3165in" style:type="right" style:leader-style="dotted" style:leader-text="."/>
    </style:tab-stops>
   </style:paragraph-properties>
  </style:style>
  <style:style style:name="Contents_20_10" style:display-name="Contents 10" style:family="paragraph" style:parent-style-name="Index" style:class="index">
   <style:paragraph-properties fo:margin-left="1.7689in" fo:margin-right="0in" fo:text-indent="0in" style:auto-text-indent="false">
    <style:tab-stops>
     <style:tab-stop style:position="5.1201in" style:type="right" style:leader-style="dotted" style:leader-text="."/>
    </style:tab-stops>
   </style:paragraph-properties>
  </style:style>
  <style:style style:name="Title" style:family="paragraph" style:parent-style-name="Heading" style:next-style-name="Subtitle" style:class="chapter">
   <style:paragraph-properties fo:text-align="center" style:justify-single-word="false"/>
   <style:text-properties style:font-name="Fontin" fo:font-family="Fontin" style:font-style-name="Gras" style:font-pitch="variable" fo:font-size="20pt" fo:font-weight="bold" style:font-size-asian="18pt" style:font-weight-asian="bold" style:font-size-complex="18pt" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="Subtitle" style:family="paragraph" style:parent-style-name="Heading" style:next-style-name="Text_20_body" style:class="chapter">
   <style:paragraph-properties fo:text-align="center" style:justify-single-word="false"/>
   <style:text-properties fo:font-size="14pt" fo:font-style="italic" style:font-size-asian="14pt" style:font-style-asian="italic" style:font-size-complex="14pt" style:font-style-complex="italic"/>
  </style:style>
  <style:style style:name="Code" style:family="paragraph">
   <style:paragraph-properties fo:margin-left="0.0398in" fo:margin-right="1.0236in" fo:margin-top="0in" fo:margin-bottom="0in" loext:contextual-spacing="false" fo:line-height="0.139in" fo:orphans="2" fo:widows="2" fo:text-indent="0in" style:auto-text-indent="false" style:border-line-width-left="0.0008in 0.0346in 0.0346in" fo:padding-left="0.0555in" fo:padding-right="0in" fo:padding-top="0in" fo:padding-bottom="0in" fo:border-left="5.05pt double #c0c0c0" fo:border-right="none" fo:border-top="none" fo:border-bottom="none">
    <style:tab-stops>
     <style:tab-stop style:position="0.3937in"/>
     <style:tab-stop style:position="0.5909in"/>
     <style:tab-stop style:position="0.7874in"/>
     <style:tab-stop style:position="0.9846in"/>
     <style:tab-stop style:position="1.1811in"/>
     <style:tab-stop style:position="1.3783in"/>
     <style:tab-stop style:position="1.5752in"/>
     <style:tab-stop style:position="1.772in"/>
     <style:tab-stop style:position="1.9689in"/>
     <style:tab-stop style:position="2.1661in"/>
     <style:tab-stop style:position="2.3626in"/>
     <style:tab-stop style:position="2.5598in"/>
     <style:tab-stop style:position="2.7563in"/>
     <style:tab-stop style:position="2.9535in"/>
     <style:tab-stop style:position="3.15in"/>
     <style:tab-stop style:position="3.3472in"/>
     <style:tab-stop style:position="3.5437in"/>
     <style:tab-stop style:position="3.7409in"/>
     <style:tab-stop style:position="3.9374in"/>
     <style:tab-stop style:position="4.1346in"/>
    </style:tab-stops>
   </style:paragraph-properties>
   <style:text-properties style:use-window-font-color="true" style:font-name="Courier New" fo:font-family="&apos;Courier New&apos;" style:font-family-generic="modern" fo:font-size="8pt" fo:language="fr" fo:country="FR" style:font-name-asian="Times New Roman1" style:font-family-asian="&apos;Times New Roman&apos;" style:font-family-generic-asian="roman" style:font-pitch-asian="variable" style:font-size-asian="8pt"/>
  </style:style>
  <style:style style:name="FigureEmplacement" style:family="paragraph" style:parent-style-name="TexteCourant" style:next-style-name="FigureNumero">
   <style:paragraph-properties fo:margin-top="0.2083in" fo:margin-bottom="0.2083in" loext:contextual-spacing="false" fo:text-align="center" style:justify-single-word="false" fo:orphans="2" fo:widows="2"/>
   <style:text-properties style:use-window-font-color="true" style:font-name="Times New Roman1" fo:font-family="&apos;Times New Roman&apos;" style:font-family-generic="roman" style:font-pitch="variable" fo:font-size="10pt" fo:language="zxx" fo:country="none" style:font-name-asian="Times New Roman1" style:font-family-asian="&apos;Times New Roman&apos;" style:font-family-generic-asian="roman" style:font-pitch-asian="variable" style:font-size-asian="10pt" style:language-asian="zxx" style:country-asian="none"/>
  </style:style>
  <style:style style:name="TexteCourant" style:family="paragraph">
   <style:paragraph-properties fo:margin-left="0in" fo:margin-right="0in" fo:margin-top="0.0835in" fo:margin-bottom="0.0138in" loext:contextual-spacing="false" fo:text-align="justify" style:justify-single-word="false" fo:orphans="2" fo:widows="2" fo:hyphenation-ladder-count="no-limit" fo:text-indent="0in" style:auto-text-indent="false"/>
   <style:text-properties style:use-window-font-color="true" style:font-name="Garamond" fo:font-family="Garamond" style:font-style-name="Normal" style:font-family-generic="roman" style:font-pitch="variable" fo:font-size="10.5pt" fo:language="fr" fo:country="FR" style:font-name-asian="Times New Roman1" style:font-family-asian="&apos;Times New Roman&apos;" style:font-family-generic-asian="roman" style:font-pitch-asian="variable" style:font-size-asian="10pt" fo:hyphenate="true" fo:hyphenation-remain-char-count="2" fo:hyphenation-push-char-count="2"/>
  </style:style>
  <style:style style:name="FigureNumero" style:family="paragraph" style:parent-style-name="TexteCourant" style:next-style-name="FigureLegende">
   <style:paragraph-properties fo:margin-top="0.3937in" fo:margin-bottom="0in" loext:contextual-spacing="false" fo:text-align="center" style:justify-single-word="false"/>
   <style:text-properties fo:color="#808080" style:font-name="DejaVu Sans" fo:font-family="&apos;DejaVu Sans&apos;" style:font-style-name="Book" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-size="7pt" style:font-weight-asian="bold"/>
  </style:style>
  <style:style style:name="FigureLegende" style:family="paragraph" style:parent-style-name="TexteCourant" style:next-style-name="TexteCourant" style:default-outline-level="8">
   <style:paragraph-properties fo:margin-top="0.0827in" fo:margin-bottom="0.3937in" loext:contextual-spacing="false" fo:text-align="center" style:justify-single-word="false"/>
   <style:text-properties style:font-name="DejaVu Sans1" fo:font-family="&apos;DejaVu Sans&apos;" style:font-style-name="Oblique" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-size="7pt" fo:font-style="italic"/>
  </style:style>
  <style:style style:name="ChapitreIntroduction" style:family="paragraph" style:parent-style-name="TexteCourant" style:next-style-name="ListeAPuce">
   <style:paragraph-properties fo:margin-left="0.1965in" fo:margin-right="0in" fo:text-indent="0in" style:auto-text-indent="false" fo:break-after="page"/>
   <style:text-properties fo:color="#000000" style:font-name="Garamond Book" fo:font-family="&apos;Garamond Book&apos;" style:font-style-name="Normal" style:font-family-generic="roman" style:font-pitch="variable" fo:font-size="10pt" fo:language="fr" fo:country="CA" fo:font-weight="normal" style:font-name-asian="Times New Roman1" style:font-family-asian="&apos;Times New Roman&apos;" style:font-family-generic-asian="roman" style:font-pitch-asian="variable" style:font-size-asian="9pt"/>
  </style:style>
  <style:style style:name="ListeAPuce" style:family="paragraph" style:parent-style-name="TexteCourant" style:list-style-name="List_20_1">
   <style:paragraph-properties fo:margin-left="0.3543in" fo:margin-right="0in" fo:margin-top="0.0398in" fo:margin-bottom="0in" loext:contextual-spacing="false" fo:text-indent="0in" style:auto-text-indent="false"/>
  </style:style>
  <style:style style:name="ListeAPuce2eNiveau" style:family="paragraph" style:parent-style-name="TexteCourant" style:list-style-name="List_20_4">
   <style:paragraph-properties fo:margin-left="0.5902in" fo:margin-right="0in" fo:margin-top="0in" fo:margin-bottom="0in" loext:contextual-spacing="false" fo:text-indent="0in" style:auto-text-indent="false"/>
  </style:style>
  <style:style style:name="ListeSuite" style:family="paragraph" style:parent-style-name="TexteCourant">
   <style:paragraph-properties fo:margin-left="0.9839in" fo:margin-right="2.5591in" fo:margin-top="0in" fo:margin-bottom="0in" loext:contextual-spacing="false" fo:text-indent="0in" style:auto-text-indent="false"/>
  </style:style>
  <style:style style:name="ChapitreTitre" style:family="paragraph" style:next-style-name="ChapitreIntroduction" style:default-outline-level="1">
   <loext:graphic-properties draw:fill="solid" draw:fill-color="#e6e6e6" draw:opacity="100%"/>
   <style:paragraph-properties fo:margin-top="0.5835in" fo:margin-bottom="0.3335in" loext:contextual-spacing="false" fo:text-align="end" style:justify-single-word="false" fo:orphans="2" fo:widows="2" fo:background-color="#e6e6e6" fo:padding-left="0in" fo:padding-right="0in" fo:padding-top="0in" fo:padding-bottom="0.0138in" fo:border-left="none" fo:border-right="none" fo:border-top="none" fo:border-bottom="0.06pt solid #000000" style:shadow="none"/>
   <style:text-properties style:use-window-font-color="true" style:font-name="Fontin" fo:font-family="Fontin" style:font-style-name="Gras" style:font-pitch="variable" fo:font-size="28pt" fo:language="fr" fo:country="FR" fo:font-weight="bold" style:font-name-asian="Times New Roman1" style:font-family-asian="&apos;Times New Roman&apos;" style:font-family-generic-asian="roman" style:font-pitch-asian="variable" style:font-size-asian="20pt" style:font-weight-asian="bold"/>
  </style:style>
  <style:style style:name="ChapitreNumero" style:family="paragraph" style:next-style-name="ChapitreTitre">
   <loext:graphic-properties draw:fill="solid" draw:fill-color="#e6e6e6" draw:opacity="100%"/>
   <style:paragraph-properties fo:margin-top="0.6945in" fo:margin-bottom="0.278in" loext:contextual-spacing="false" fo:text-align="end" style:justify-single-word="false" fo:orphans="2" fo:widows="2" fo:break-before="page" fo:background-color="#e6e6e6" fo:padding="0in" fo:border="none" style:shadow="none"/>
   <style:text-properties fo:font-variant="small-caps" style:use-window-font-color="true" style:font-name="Fontin" fo:font-family="Fontin" style:font-style-name="Gras" style:font-pitch="variable" fo:font-size="60pt" fo:language="zxx" fo:country="none" fo:font-weight="bold" style:font-name-asian="Times New Roman1" style:font-family-asian="&apos;Times New Roman&apos;" style:font-family-generic-asian="roman" style:font-pitch-asian="variable" style:font-size-asian="48pt" style:language-asian="zxx" style:country-asian="none" style:font-weight-asian="bold"/>
  </style:style>
  <style:style style:name="PartieTitre" style:family="paragraph" style:next-style-name="Standard">
   <style:paragraph-properties fo:margin-top="0.8335in" fo:margin-bottom="0.4165in" loext:contextual-spacing="false" fo:text-align="center" style:justify-single-word="false" fo:orphans="2" fo:widows="2"/>
   <style:text-properties style:use-window-font-color="true" style:font-name="Arial Rounded MT Bold" fo:font-family="&apos;Arial Rounded MT Bold&apos;, Tahoma" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-size="36pt" fo:language="zxx" fo:country="none" fo:font-weight="bold" style:font-name-asian="Times New Roman1" style:font-family-asian="&apos;Times New Roman&apos;" style:font-family-generic-asian="roman" style:font-pitch-asian="variable" style:font-size-asian="36pt" style:language-asian="zxx" style:country-asian="none" style:font-weight-asian="bold"/>
  </style:style>
  <style:style style:name="PartieNumero" style:family="paragraph" style:parent-style-name="ChapitreNumero" style:next-style-name="Standard">
   <style:paragraph-properties fo:text-align="center" style:justify-single-word="false" fo:padding-left="0in" fo:padding-right="0in" fo:padding-top="0.111in" fo:padding-bottom="0in" fo:border-left="none" fo:border-right="none" fo:border-top="4.99pt solid #000000" fo:border-bottom="none"/>
   <style:text-properties fo:font-size="22pt" fo:font-weight="normal" style:font-size-asian="22pt" style:font-weight-asian="normal"/>
  </style:style>
  <style:style style:name="Remarque" style:family="paragraph" style:next-style-name="Standard">
   <loext:graphic-properties draw:fill="none" draw:fill-color="#99ccff"/>
   <style:paragraph-properties fo:margin-left="0.5902in" fo:margin-right="0in" fo:margin-top="0.0783in" fo:margin-bottom="0in" loext:contextual-spacing="false" fo:text-align="justify" style:justify-single-word="false" fo:orphans="2" fo:widows="2" fo:text-indent="0in" style:auto-text-indent="false" fo:background-color="transparent" fo:padding="0.0783in" fo:border-left="2.49pt solid #4c4c4c" fo:border-right="none" fo:border-top="none" fo:border-bottom="none" style:shadow="none"/>
   <style:text-properties style:use-window-font-color="true" style:font-name="DejaVu Sans Condensed1" fo:font-family="&apos;DejaVu Sans Condensed&apos;" style:font-style-name="Book" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-size="8pt" fo:language="fr" fo:country="CA" style:font-name-asian="Times New Roman1" style:font-family-asian="&apos;Times New Roman&apos;" style:font-family-generic-asian="roman" style:font-pitch-asian="variable" style:font-size-asian="9pt"/>
  </style:style>
  <style:style style:name="RemarqueTitre" style:family="paragraph" style:parent-style-name="Remarque" style:next-style-name="Remarque" style:default-outline-level="7">
   <style:paragraph-properties fo:margin-left="0.5902in" fo:margin-right="0in" fo:margin-top="0.1102in" fo:margin-bottom="0.0783in" loext:contextual-spacing="false" fo:text-indent="0in" style:auto-text-indent="false" fo:padding="0in" fo:border="none" fo:keep-with-next="always"/>
   <style:text-properties fo:color="#4c4c4c" fo:font-weight="bold" style:font-weight-asian="bold"/>
  </style:style>
  <style:style style:name="RemarqueURL" style:family="paragraph" style:parent-style-name="Remarque" style:next-style-name="Remarque" style:list-style-name="List_20_2"/>
  <style:style style:name="RemarqueLivre" style:family="paragraph" style:parent-style-name="Remarque" style:next-style-name="Remarque" style:list-style-name="List_20_3"/>
  <style:style style:name="RemarquePuce" style:family="paragraph" style:parent-style-name="Remarque" style:list-style-name="List_20_1">
   <style:paragraph-properties fo:margin-left="0.5902in" fo:margin-right="0in" fo:margin-top="0.0398in" fo:margin-bottom="0in" loext:contextual-spacing="false" fo:text-indent="0in" style:auto-text-indent="false"/>
  </style:style>
  <style:style style:name="RemarqueNumero" style:family="paragraph" style:parent-style-name="Remarque">
   <style:paragraph-properties fo:margin-left="0.8661in" fo:margin-right="0.3937in" fo:margin-top="0.0398in" fo:margin-bottom="0in" loext:contextual-spacing="false" fo:text-indent="-0.2362in" style:auto-text-indent="false">
    <style:tab-stops/>
   </style:paragraph-properties>
  </style:style>
  <style:style style:name="RemarqueCode" style:family="paragraph" style:parent-style-name="Remarque">
   <style:paragraph-properties fo:text-align="start" style:justify-single-word="false"/>
   <style:text-properties style:font-name="Courier New" fo:font-family="&apos;Courier New&apos;" style:font-family-generic="modern" fo:font-size="8pt"/>
  </style:style>
  <style:style style:name="REMARQUE2Titre" style:family="paragraph" style:parent-style-name="REMARQUE2" style:next-style-name="REMARQUE2" style:default-outline-level="6">
   <style:paragraph-properties fo:margin-left="0in" fo:margin-right="0in" fo:text-indent="0in" style:auto-text-indent="false"/>
   <style:text-properties fo:font-weight="bold" style:font-weight-asian="bold"/>
  </style:style>
  <style:style style:name="REMARQUE2URL" style:family="paragraph" style:parent-style-name="REMARQUE2" style:list-style-name="List_20_2"/>
  <style:style style:name="REMARQUE2Puce" style:family="paragraph" style:parent-style-name="RemarquePuce" style:list-style-name="List_20_1">
   <style:paragraph-properties fo:margin-left="0in" fo:margin-right="0.0008in" fo:margin-top="0.0398in" fo:margin-bottom="0in" loext:contextual-spacing="false" fo:text-indent="0in" style:auto-text-indent="false"/>
   <style:text-properties fo:font-size="10pt"/>
  </style:style>
  <style:style style:name="REMARQUE2Numero" style:family="paragraph" style:parent-style-name="RemarqueNumero">
   <style:paragraph-properties fo:margin-left="0.2362in" fo:margin-right="0in" fo:margin-top="0.0398in" fo:margin-bottom="0in" loext:contextual-spacing="false" fo:text-indent="-0.2362in" style:auto-text-indent="false">
    <style:tab-stops/>
   </style:paragraph-properties>
   <style:text-properties fo:font-size="10pt"/>
  </style:style>
  <style:style style:name="RetraitSousListe1" style:family="paragraph">
   <style:paragraph-properties fo:margin-left="0.7874in" fo:margin-right="0in" fo:margin-top="0.0417in" fo:margin-bottom="0.0138in" loext:contextual-spacing="false" fo:orphans="2" fo:widows="2" fo:text-indent="0.0008in" style:auto-text-indent="false"/>
   <style:text-properties style:use-window-font-color="true" style:font-name="Times New Roman1" fo:font-family="&apos;Times New Roman&apos;" style:font-family-generic="roman" style:font-pitch="variable" fo:font-size="10pt" fo:language="fr" fo:country="FR" style:font-name-asian="Times New Roman1" style:font-family-asian="&apos;Times New Roman&apos;" style:font-family-generic-asian="roman" style:font-pitch-asian="variable" style:font-size-asian="10pt"/>
  </style:style>
  <style:style style:name="TableauTexte" style:family="paragraph">
   <style:paragraph-properties fo:margin-top="0.028in" fo:margin-bottom="0.0138in" loext:contextual-spacing="false" fo:line-height="0.139in" fo:keep-together="always" fo:orphans="0" fo:widows="0">
    <style:tab-stops>
     <style:tab-stop style:position="0.1972in"/>
     <style:tab-stop style:position="0.3154in"/>
     <style:tab-stop style:position="0.4335in"/>
    </style:tab-stops>
   </style:paragraph-properties>
   <style:text-properties style:use-window-font-color="true" style:font-name="Arial" fo:font-family="Arial" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-size="8pt" fo:language="zxx" fo:country="none" style:font-name-asian="Times New Roman1" style:font-family-asian="&apos;Times New Roman&apos;" style:font-family-generic-asian="roman" style:font-pitch-asian="variable" style:font-size-asian="8pt" style:language-asian="zxx" style:country-asian="none"/>
  </style:style>
  <style:style style:name="TableauTitre" style:family="paragraph" style:parent-style-name="TexteCourant">
   <style:paragraph-properties fo:text-align="start" style:justify-single-word="false" fo:keep-together="always" fo:keep-with-next="always"/>
   <style:text-properties style:font-name="Fontin1" fo:font-family="Fontin" style:font-style-name="Italique" style:font-pitch="variable" fo:font-size="9pt" fo:font-style="italic" fo:font-weight="normal" style:font-size-asian="9pt" style:font-weight-asian="bold"/>
  </style:style>
  <style:style style:name="TableauTitreColonne" style:family="paragraph" style:next-style-name="TableauTexte">
   <style:paragraph-properties fo:margin-top="0.028in" fo:margin-bottom="0.028in" loext:contextual-spacing="false" fo:text-align="start" style:justify-single-word="false" fo:keep-together="always" fo:orphans="2" fo:widows="2" fo:keep-with-next="always"/>
   <style:text-properties style:use-window-font-color="true" style:font-name="DejaVu Sans Condensed" fo:font-family="&apos;DejaVu Sans Condensed&apos;" style:font-style-name="Gras" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-size="9pt" fo:language="zxx" fo:country="none" fo:font-weight="bold" style:font-name-asian="Times New Roman1" style:font-family-asian="&apos;Times New Roman&apos;" style:font-family-generic-asian="roman" style:font-pitch-asian="variable" style:font-size-asian="9pt" style:language-asian="zxx" style:country-asian="none" style:font-weight-asian="bold"/>
  </style:style>
  <style:style style:name="CodeTableauCommentaireMarge" style:family="paragraph" style:parent-style-name="Remarque">
   <style:paragraph-properties fo:margin-left="0in" fo:margin-right="0in" fo:margin-top="0in" fo:margin-bottom="0in" loext:contextual-spacing="false" fo:text-align="start" style:justify-single-word="false" fo:text-indent="0.0008in" style:auto-text-indent="false"/>
  </style:style>
  <style:style style:name="TitreNiveau1" style:family="paragraph" style:next-style-name="TexteCourant" style:default-outline-level="2">
   <style:paragraph-properties fo:margin-left="-0.7874in" fo:margin-right="0in" fo:margin-top="0.3335in" fo:margin-bottom="0in" loext:contextual-spacing="false" fo:orphans="2" fo:widows="2" fo:text-indent="0in" style:auto-text-indent="false" fo:keep-with-next="always"/>
   <style:text-properties fo:color="#000080" style:font-name="Fontin" fo:font-family="Fontin" style:font-style-name="Gras" style:font-pitch="variable" fo:font-size="16pt" fo:language="fr" fo:country="FR" fo:font-weight="bold" style:font-name-asian="Times New Roman1" style:font-family-asian="&apos;Times New Roman&apos;" style:font-family-generic-asian="roman" style:font-pitch-asian="variable" style:font-size-asian="14pt" style:font-weight-asian="bold"/>
  </style:style>
  <style:style style:name="TitreNiveau2" style:family="paragraph" style:next-style-name="TexteCourant" style:default-outline-level="3">
   <style:paragraph-properties fo:margin-top="0.2083in" fo:margin-bottom="0in" loext:contextual-spacing="false" fo:orphans="2" fo:widows="2" fo:keep-with-next="always"/>
   <style:text-properties fo:color="#000080" style:font-name="Fontin" fo:font-family="Fontin" style:font-style-name="Gras" style:font-pitch="variable" fo:font-size="14pt" fo:language="fr" fo:country="FR" fo:font-weight="bold" style:font-name-asian="Times New Roman1" style:font-family-asian="&apos;Times New Roman&apos;" style:font-family-generic-asian="roman" style:font-pitch-asian="variable" style:font-size-asian="14pt" style:font-weight-asian="bold"/>
  </style:style>
  <style:style style:name="TitreNiveau3" style:family="paragraph" style:next-style-name="TexteCourant" style:default-outline-level="4">
   <style:paragraph-properties fo:margin-top="0.1665in" fo:margin-bottom="0in" loext:contextual-spacing="false" fo:orphans="2" fo:widows="2" fo:keep-with-next="always"/>
   <style:text-properties fo:color="#000080" style:font-name="Fontin" fo:font-family="Fontin" style:font-style-name="Gras" style:font-pitch="variable" fo:font-size="12pt" fo:language="fr" fo:country="FR" fo:font-weight="bold" style:font-name-asian="Times New Roman1" style:font-family-asian="&apos;Times New Roman&apos;" style:font-family-generic-asian="roman" style:font-pitch-asian="variable" style:font-size-asian="12pt" style:font-weight-asian="bold"/>
  </style:style>
  <style:style style:name="TitreNiveau4" style:family="paragraph" style:parent-style-name="TitreNiveau3" style:next-style-name="TexteCourant" style:default-outline-level="5">
   <style:paragraph-properties fo:margin-left="0.3937in" fo:margin-right="0in" fo:margin-top="0.111in" fo:margin-bottom="0in" loext:contextual-spacing="false" fo:text-indent="0.0008in" style:auto-text-indent="false"/>
   <style:text-properties fo:font-style="italic" fo:font-weight="normal" style:font-style-asian="italic" style:font-weight-asian="normal"/>
  </style:style>
  <style:style style:name="TableauCorps" style:family="paragraph">
   <style:paragraph-properties fo:margin-top="0.028in" fo:margin-bottom="0.0138in" loext:contextual-spacing="false" fo:line-height="0.139in" fo:keep-together="always" fo:orphans="0" fo:widows="0">
    <style:tab-stops>
     <style:tab-stop style:position="0.1972in"/>
     <style:tab-stop style:position="0.3154in"/>
     <style:tab-stop style:position="0.4335in"/>
    </style:tab-stops>
   </style:paragraph-properties>
   <style:text-properties style:use-window-font-color="true" style:font-name="DejaVu Sans Condensed1" fo:font-family="&apos;DejaVu Sans Condensed&apos;" style:font-style-name="Book" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-size="8pt" fo:language="zxx" fo:country="none" style:font-name-asian="Times New Roman1" style:font-family-asian="&apos;Times New Roman&apos;" style:font-family-generic-asian="roman" style:font-pitch-asian="variable" style:font-size-asian="8pt" style:language-asian="zxx" style:country-asian="none"/>
  </style:style>
  <style:style style:name="CodeTableau" style:family="paragraph" style:parent-style-name="Code">
   <style:paragraph-properties fo:margin-left="0in" fo:margin-right="0in" fo:text-indent="0in" style:auto-text-indent="false"/>
  </style:style>
  <style:style style:name="CodeTitre" style:family="paragraph" style:parent-style-name="Code">
   <style:paragraph-properties fo:margin-left="0in" fo:margin-right="0in" fo:margin-top="0.1575in" fo:margin-bottom="0.0783in" loext:contextual-spacing="false" fo:text-indent="0in" style:auto-text-indent="false" fo:padding="0in" fo:border="none"/>
   <style:text-properties style:font-name="Arial1" fo:font-family="Arial" style:font-style-name="Gras" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-size="9pt" style:text-underline-style="solid" style:text-underline-width="auto" style:text-underline-color="font-color" fo:font-weight="bold"/>
  </style:style>
  <style:style style:name="REMARQUE2" style:family="paragraph" style:parent-style-name="Remarque">
   <style:paragraph-properties fo:margin-left="0in" fo:margin-right="2.7563in" fo:margin-top="0.0398in" fo:margin-bottom="0in" loext:contextual-spacing="false" fo:text-indent="0in" style:auto-text-indent="false" style:shadow="none">
    <style:tab-stops/>
   </style:paragraph-properties>
   <style:text-properties style:font-name="Arial Narrow1" fo:font-family="&apos;Arial Narrow&apos;" style:font-style-name="Normal" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-size="10pt"/>
  </style:style>
  <style:style style:name="REMARQUE2Code" style:family="paragraph" style:parent-style-name="REMARQUE2">
   <style:paragraph-properties fo:text-align="start" style:justify-single-word="false"/>
   <style:text-properties style:font-name="Courier New" fo:font-family="&apos;Courier New&apos;" style:font-family-generic="modern" fo:font-size="10pt"/>
  </style:style>
  <style:style style:name="REMARQUE2FigureNumero" style:family="paragraph" style:parent-style-name="FigureNumero" style:next-style-name="REMARQUE2FigureLegende">
   <style:paragraph-properties fo:margin-left="0in" fo:margin-right="0in" fo:text-indent="0in" style:auto-text-indent="false"/>
  </style:style>
  <style:style style:name="REMARQUE2FigureLegende" style:family="paragraph" style:parent-style-name="FigureLegende" style:next-style-name="REMARQUE2" style:default-outline-level="" style:list-style-name="">
   <style:paragraph-properties fo:margin-left="0in" fo:margin-right="0in" fo:text-indent="0in" style:auto-text-indent="false"/>
  </style:style>
  <style:style style:name="RemarqueFigureLegende" style:family="paragraph" style:parent-style-name="FigureLegende" style:next-style-name="Remarque" style:default-outline-level="" style:list-style-name=""/>
  <style:style style:name="RemarqueFigureNumero" style:family="paragraph" style:parent-style-name="FigureNumero" style:next-style-name="RemarqueFigureLegende"/>
  <style:style style:name="CodeCommentaireMarge" style:family="paragraph" style:parent-style-name="Remarque">
   <style:paragraph-properties fo:margin-left="0in" fo:margin-right="0in" fo:margin-top="0in" fo:margin-bottom="0in" loext:contextual-spacing="false" fo:text-indent="0.0008in" style:auto-text-indent="false"/>
  </style:style>
  <style:style style:name="ListeANumero" style:family="paragraph" style:parent-style-name="TexteCourant">
   <style:paragraph-properties fo:margin-left="0.3937in" fo:margin-right="0in" fo:margin-top="0.0398in" fo:margin-bottom="0in" loext:contextual-spacing="false" fo:text-indent="-0.248in" style:auto-text-indent="false">
    <style:tab-stops/>
   </style:paragraph-properties>
  </style:style>
  <style:style style:name="Ancre" style:family="paragraph" style:parent-style-name="TexteCourant" style:next-style-name="TexteCourant"/>
  <style:style style:name="Footnote_20_Symbol" style:display-name="Footnote Symbol" style:family="text">
   <style:text-properties style:text-position="37% 100%" fo:font-size="8pt" style:font-size-asian="8pt"/>
  </style:style>
  <style:style style:name="Page_20_Number" style:display-name="Page Number" style:family="text"/>
  <style:style style:name="Numbering_20_Symbols" style:display-name="Numbering Symbols" style:family="text"/>
  <style:style style:name="Bullet_20_Symbols" style:display-name="Bullet Symbols" style:family="text">
   <style:text-properties style:font-name="StarSymbol" fo:font-family="StarSymbol" style:font-charset="x-symbol" fo:font-size="9pt" style:font-name-asian="StarSymbol" style:font-family-asian="StarSymbol" style:font-charset-asian="x-symbol" style:font-size-asian="9pt" style:font-name-complex="StarSymbol" style:font-family-complex="StarSymbol" style:font-charset-complex="x-symbol" style:font-size-complex="9pt"/>
  </style:style>
  <style:style style:name="Internet_20_link" style:display-name="Internet link" style:family="text">
   <style:text-properties fo:color="#000080" style:text-underline-style="solid" style:text-underline-width="auto" style:text-underline-color="font-color"/>
  </style:style>
  <style:style style:name="Visited_20_Internet_20_Link" style:display-name="Visited Internet Link" style:family="text">
   <style:text-properties fo:color="#800000" style:text-underline-style="solid" style:text-underline-width="auto" style:text-underline-color="font-color"/>
  </style:style>
  <style:style style:name="Endnote_20_Symbol" style:display-name="Endnote Symbol" style:family="text"/>
  <style:style style:name="Line_20_numbering" style:display-name="Line numbering" style:family="text"/>
  <style:style style:name="Source_20_Text" style:display-name="Source Text" style:family="text">
   <style:text-properties style:font-name="Courier New1" fo:font-family="&apos;Courier New&apos;" style:font-family-generic="modern" style:font-pitch="fixed" style:font-name-asian="Courier New1" style:font-family-asian="&apos;Courier New&apos;" style:font-family-generic-asian="modern" style:font-pitch-asian="fixed" style:font-name-complex="Courier New1" style:font-family-complex="&apos;Courier New&apos;" style:font-family-generic-complex="modern" style:font-pitch-complex="fixed"/>
  </style:style>
  <style:style style:name="CodeDansTexte" style:family="text">
   <style:text-properties fo:color="#000080" style:font-name="Courier New" fo:font-family="&apos;Courier New&apos;" style:font-family-generic="modern" fo:font-size="8pt" fo:language="zxx" fo:country="none" style:font-size-asian="8pt" style:language-asian="zxx" style:country-asian="none"/>
  </style:style>
  <style:style style:name="RemarquePreTitre" style:family="text">
   <style:text-properties fo:font-variant="small-caps" style:use-window-font-color="true" style:font-name="DejaVu Sans Condensed1" fo:font-family="&apos;DejaVu Sans Condensed&apos;" style:font-style-name="Book" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-size="9pt" style:text-underline-style="none"/>
  </style:style>
  <style:style style:name="URL" style:family="text">
   <style:text-properties style:font-name="Arial" fo:font-family="Arial" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-size="8pt" style:font-size-asian="8pt"/>
  </style:style>
  <style:style style:name="CodeExergue" style:family="text">
   <style:text-properties fo:color="#000080" style:font-name="Courier New" fo:font-family="&apos;Courier New&apos;" style:font-family-generic="modern" fo:font-size="8pt" fo:language="zxx" fo:country="none" fo:font-weight="bold" style:font-weight-asian="bold"/>
  </style:style>
  <style:style style:name="CodeCommentaire" style:family="text">
   <style:text-properties fo:color="#808080" style:font-name="Courier New" fo:font-family="&apos;Courier New&apos;" style:font-family-generic="modern" fo:font-size="8pt"/>
  </style:style>
  <style:style style:name="Menu" style:family="text">
   <style:text-properties fo:color="#5c8526" style:font-name="Tahoma" fo:font-family="Tahoma" style:font-style-name="Italique gras" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-size="7pt" fo:language="fr" fo:country="FR" fo:font-style="normal" fo:font-weight="bold"/>
  </style:style>
  <style:style style:name="Numero" style:family="text">
   <style:text-properties style:font-name="Arial1" fo:font-family="Arial" style:font-style-name="Gras" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-size="8pt" fo:font-weight="bold" fo:background-color="transparent"/>
  </style:style>
  <style:style style:name="Hidden" style:family="text">
   <style:text-properties fo:color="#008080" style:font-name="Arial Narrow" fo:font-family="&apos;Arial Narrow&apos;" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-size="7pt" fo:background-color="transparent"/>
  </style:style>
  <style:style style:name="Warning" style:family="text">
   <style:text-properties fo:color="#ff0000"/>
  </style:style>
  <style:style style:name="Symbol" style:family="text">
   <style:text-properties style:font-name="Symbol" fo:font-family="Symbol" style:font-style-name="Normal" style:font-family-generic="roman" style:font-pitch="variable" style:font-charset="x-symbol" fo:font-size="9pt"/>
  </style:style>
  <style:style style:name="WingDings" style:family="text">
   <style:text-properties style:font-name="Wingdings" fo:font-family="Wingdings" style:font-style-name="Normal" style:font-pitch="variable" style:font-charset="x-symbol" fo:font-size="9pt"/>
  </style:style>
  <style:style style:name="PuceCode" style:family="text">
   <style:text-properties fo:color="#ffffff" style:font-name="Arial1" fo:font-family="Arial" style:font-style-name="Gras" style:font-family-generic="swiss" style:font-pitch="variable" fo:font-size="8pt" fo:font-weight="bold" fo:background-color="#b80047"/>
  </style:style>
  <style:style style:name="Frame" style:family="graphic">
   <style:graphic-properties text:anchor-type="paragraph" svg:x="0in" svg:y="0in" style:wrap="parallel" style:number-wrapped-paragraphs="no-limit" style:wrap-contour="false" style:vertical-pos="top" style:vertical-rel="paragraph-content" style:horizontal-pos="center" style:horizontal-rel="paragraph-content"/>
  </style:style>
  <style:style style:name="Graphics" style:family="graphic">
   <style:graphic-properties text:anchor-type="paragraph" svg:x="0in" svg:y="0in" style:wrap="none" style:vertical-pos="top" style:vertical-rel="paragraph" style:horizontal-pos="center" style:horizontal-rel="paragraph"/>
  </style:style>
  <style:style style:name="OLE" style:family="graphic">
   <style:graphic-properties text:anchor-type="paragraph" svg:x="0in" svg:y="0in" style:wrap="none" style:vertical-pos="top" style:vertical-rel="paragraph" style:horizontal-pos="center" style:horizontal-rel="paragraph"/>
  </style:style>
  <style:style style:name="CadreSimple" style:family="graphic" style:parent-style-name="Frame">
   <style:graphic-properties svg:width="2.2835in" fo:min-height="0.472in" text:anchor-type="paragraph" svg:x="1.0634in" svg:y="0in" fo:margin-top="0.0783in" fo:margin-bottom="0in" style:wrap="none" style:vertical-pos="top" style:vertical-rel="paragraph-content" style:horizontal-pos="from-left" style:horizontal-rel="page-content" fo:background-color="transparent" draw:fill="none" draw:fill-color="#99ccff" fo:padding-left="0in" fo:padding-right="0in" fo:padding-top="0.028in" fo:padding-bottom="0.028in" fo:border-left="none" fo:border-right="none" fo:border-top="0.99pt solid #808080" fo:border-bottom="0.99pt solid #808080">
    <style:columns fo:column-count="1" fo:column-gap="0in"/>
   </style:graphic-properties>
  </style:style>
  <style:style style:name="CadrePrincipale" style:family="graphic" style:parent-style-name="Frame">
   <style:graphic-properties svg:width="4.4098in" fo:min-height="0.7874in" text:anchor-type="paragraph" svg:x="0in" svg:y="0in" fo:margin-top="0.1575in" fo:margin-bottom="0in" style:wrap="none" style:vertical-pos="top" style:vertical-rel="paragraph-content" style:horizontal-pos="left" style:horizontal-rel="paragraph" fo:padding="0.0591in" fo:border="0.06pt solid #808080">
    <style:columns fo:column-count="1" fo:column-gap="0in"/>
   </style:graphic-properties>
  </style:style>
  <style:style style:name="CadreEncadre" style:family="graphic" style:parent-style-name="CadreSimple">
   <style:graphic-properties svg:width="2.2835in" fo:min-height="0.472in" text:anchor-type="paragraph" fo:margin-left="0in" fo:margin-right="0in" style:wrap="none" fo:padding="0.0591in" fo:border="0.99pt solid #808080"/>
  </style:style>
  <style:style style:name="CadrePleinePage" style:family="graphic" style:parent-style-name="CadrePrincipale">
   <style:graphic-properties svg:width="7.0075in" fo:min-height="1.5752in" text:anchor-type="paragraph" fo:margin-top="0.0984in" fo:margin-bottom="0.0984in" fo:background-color="transparent" draw:fill="none" draw:fill-color="#99ccff" fo:padding-left="0in" fo:padding-right="0in" fo:padding-top="0.0591in" fo:padding-bottom="0.0591in" fo:border="0.06pt solid #808080">
    <style:columns fo:column-count="2" fo:column-gap="0.2362in">
     <style:column style:rel-width="32767*" fo:start-indent="0in" fo:end-indent="0.1181in"/>
     <style:column style:rel-width="32768*" fo:start-indent="0.1181in" fo:end-indent="0in"/>
    </style:columns>
   </style:graphic-properties>
  </style:style>
  <style:style style:name="CadreInLine" style:family="graphic" style:parent-style-name="Frame">
   <style:graphic-properties svg:width="0.7874in" fo:min-height="0.1181in" text:anchor-type="paragraph" svg:y="0in" fo:margin-left="0.0398in" fo:margin-right="0.0398in" style:vertical-pos="top" style:vertical-rel="paragraph-content" fo:background-color="transparent" draw:fill="none" draw:fill-color="#99ccff">
    <style:columns fo:column-count="1" fo:column-gap="0in"/>
   </style:graphic-properties>
  </style:style>
  <style:style style:name="CadreEncadreMarge" style:family="graphic" style:parent-style-name="CadreEncadre">
   <style:graphic-properties svg:width="2.2835in" fo:min-height="0.472in" text:anchor-type="paragraph" svg:x="1.0634in" style:wrap="left" style:number-wrapped-paragraphs="1" style:wrap-contour="false" style:horizontal-pos="right" style:horizontal-rel="page-content" fo:background-color="transparent" draw:fill="none" draw:fill-color="#99ccff" fo:padding="0.0193in" fo:border="0.99pt solid #808080">
    <style:columns fo:column-count="1" fo:column-gap="0in"/>
   </style:graphic-properties>
  </style:style>
  <style:style style:name="CadreSimpleMarge" style:family="graphic" style:parent-style-name="CadreSimple">
   <style:graphic-properties svg:width="2.2835in" fo:min-height="0.472in" text:anchor-type="paragraph" svg:x="1.0634in" style:wrap="left" style:number-wrapped-paragraphs="1" style:wrap-contour="false" style:horizontal-pos="right" style:horizontal-rel="page-content"/>
  </style:style>
  <style:style style:name="Figure" style:family="graphic" style:parent-style-name="CadreEncadre">
   <style:graphic-properties svg:width="4.4098in" fo:min-height="0.7874in" text:anchor-type="paragraph" svg:x="0in" svg:y="0in" fo:margin-left="0in" fo:margin-right="0in" fo:margin-top="0.1575in" fo:margin-bottom="0in" style:wrap="none" style:vertical-pos="top" style:vertical-rel="paragraph-content" style:horizontal-pos="left" style:horizontal-rel="paragraph" fo:background-color="transparent" draw:fill="none" draw:fill-color="#99ccff" fo:padding="0in" fo:border="none">
    <style:columns fo:column-count="1" fo:column-gap="0in"/>
   </style:graphic-properties>
  </style:style>
  <text:outline-style style:name="Outline">
   <text:outline-level-style text:level="1" style:num-format="">
    <style:list-level-properties/>
   </text:outline-level-style>
   <text:outline-level-style text:level="2" style:num-format="">
    <style:list-level-properties/>
   </text:outline-level-style>
   <text:outline-level-style text:level="3" style:num-format="">
    <style:list-level-properties/>
   </text:outline-level-style>
   <text:outline-level-style text:level="4" style:num-format="">
    <style:list-level-properties/>
   </text:outline-level-style>
   <text:outline-level-style text:level="5" style:num-format="">
    <style:list-level-properties/>
   </text:outline-level-style>
   <text:outline-level-style text:level="6" style:num-format="">
    <style:list-level-properties/>
   </text:outline-level-style>
   <text:outline-level-style text:level="7" style:num-format="">
    <style:list-level-properties/>
   </text:outline-level-style>
   <text:outline-level-style text:level="8" style:num-format="">
    <style:list-level-properties/>
   </text:outline-level-style>
   <text:outline-level-style text:level="9" style:num-format="">
    <style:list-level-properties/>
   </text:outline-level-style>
   <text:outline-level-style text:level="10" style:num-format="">
    <style:list-level-properties/>
   </text:outline-level-style>
  </text:outline-style>
  <text:list-style style:name="List_20_1" style:display-name="List 1">
   <text:list-level-style-bullet text:level="1" text:style-name="Numbering_20_Symbols" text:bullet-char="•">
    <style:list-level-properties text:min-label-width="0.1575in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="2" text:style-name="Numbering_20_Symbols" text:bullet-char="•">
    <style:list-level-properties text:space-before="0.1579in" text:min-label-width="0.1575in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="3" text:style-name="Numbering_20_Symbols" text:bullet-char="•">
    <style:list-level-properties text:space-before="0.3146in" text:min-label-width="0.1575in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="4" text:style-name="Numbering_20_Symbols" text:bullet-char="•">
    <style:list-level-properties text:space-before="0.4724in" text:min-label-width="0.1575in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="5" text:style-name="Numbering_20_Symbols" text:bullet-char="•">
    <style:list-level-properties text:space-before="0.6299in" text:min-label-width="0.1575in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="6" text:style-name="Numbering_20_Symbols" text:bullet-char="•">
    <style:list-level-properties text:space-before="0.7878in" text:min-label-width="0.1575in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="7" text:style-name="Numbering_20_Symbols" text:bullet-char="•">
    <style:list-level-properties text:space-before="0.9445in" text:min-label-width="0.1575in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="8" text:style-name="Numbering_20_Symbols" text:bullet-char="•">
    <style:list-level-properties text:space-before="1.1024in" text:min-label-width="0.1575in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="9" text:style-name="Numbering_20_Symbols" text:bullet-char="•">
    <style:list-level-properties text:space-before="1.2598in" text:min-label-width="0.1575in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="10" text:style-name="Numbering_20_Symbols" text:bullet-char="•">
    <style:list-level-properties text:space-before="1.4177in" text:min-label-width="0.1575in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
  </text:list-style>
  <text:list-style style:name="List_20_2" style:display-name="List 2">
   <text:list-level-style-bullet text:level="1" text:style-name="Numbering_20_Symbols" text:bullet-char="&gt;">
    <style:list-level-properties text:min-label-width="0.1575in"/>
    <style:text-properties style:font-name="Arial Narrow"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="2" text:style-name="Numbering_20_Symbols" text:bullet-char="–">
    <style:list-level-properties text:space-before="0.1181in" text:min-label-width="0.1181in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="3" text:style-name="Numbering_20_Symbols" text:bullet-char="–">
    <style:list-level-properties text:space-before="0.2362in" text:min-label-width="0.1181in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="4" text:style-name="Numbering_20_Symbols" text:bullet-char="–">
    <style:list-level-properties text:space-before="0.3539in" text:min-label-width="0.1181in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="5" text:style-name="Numbering_20_Symbols" text:bullet-char="–">
    <style:list-level-properties text:space-before="0.472in" text:min-label-width="0.1181in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="6" text:style-name="Numbering_20_Symbols" text:bullet-char="–">
    <style:list-level-properties text:space-before="0.5902in" text:min-label-width="0.1181in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="7" text:style-name="Numbering_20_Symbols" text:bullet-char="–">
    <style:list-level-properties text:space-before="0.7091in" text:min-label-width="0.1181in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="8" text:style-name="Numbering_20_Symbols" text:bullet-char="–">
    <style:list-level-properties text:space-before="0.8272in" text:min-label-width="0.1181in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="9" text:style-name="Numbering_20_Symbols" text:bullet-char="–">
    <style:list-level-properties text:space-before="0.9453in" text:min-label-width="0.1181in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="10" text:style-name="Numbering_20_Symbols" text:bullet-char="–">
    <style:list-level-properties text:space-before="1.063in" text:min-label-width="0.1181in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
  </text:list-style>
  <text:list-style style:name="List_20_3" style:display-name="List 3">
   <text:list-level-style-bullet text:level="1" text:style-name="Numbering_20_Symbols" text:bullet-char="=">
    <style:list-level-properties text:min-label-width="0.1575in"/>
    <style:text-properties style:font-name="Arial Narrow"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="2" text:style-name="Numbering_20_Symbols" text:bullet-char="□">
    <style:list-level-properties text:space-before="0.1555in" text:min-label-width="0.1555in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="3" text:style-name="Numbering_20_Symbols" text:bullet-char="☑">
    <style:list-level-properties text:min-label-width="0.1555in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="4" text:style-name="Numbering_20_Symbols" text:bullet-char="□">
    <style:list-level-properties text:space-before="0.1555in" text:min-label-width="0.1555in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="5" text:style-name="Numbering_20_Symbols" text:bullet-char="☑">
    <style:list-level-properties text:min-label-width="0.1555in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="6" text:style-name="Numbering_20_Symbols" text:bullet-char="□">
    <style:list-level-properties text:space-before="0.1555in" text:min-label-width="0.1555in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="7" text:style-name="Numbering_20_Symbols" text:bullet-char="☑">
    <style:list-level-properties text:min-label-width="0.1555in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="8" text:style-name="Numbering_20_Symbols" text:bullet-char="□">
    <style:list-level-properties text:space-before="0.1555in" text:min-label-width="0.1555in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="9" text:style-name="Numbering_20_Symbols" text:bullet-char="☑">
    <style:list-level-properties text:min-label-width="0.1555in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="10" text:style-name="Numbering_20_Symbols" text:bullet-char="□">
    <style:list-level-properties text:space-before="0.1555in" text:min-label-width="0.1555in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
  </text:list-style>
  <text:list-style style:name="List_20_4" style:display-name="List 4">
   <text:list-level-style-bullet text:level="1" text:style-name="Bullet_20_Symbols" text:bullet-char="•">
    <style:list-level-properties text:min-label-width="0.1575in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="2" text:style-name="Bullet_20_Symbols" text:bullet-char="•">
    <style:list-level-properties text:space-before="0.1579in" text:min-label-width="0.1575in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="3" text:style-name="Bullet_20_Symbols" text:bullet-char="•">
    <style:list-level-properties text:space-before="0.3146in" text:min-label-width="0.1575in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="4" text:style-name="Bullet_20_Symbols" text:bullet-char="•">
    <style:list-level-properties text:space-before="0.4724in" text:min-label-width="0.1575in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="5" text:style-name="Bullet_20_Symbols" text:bullet-char="•">
    <style:list-level-properties text:space-before="0.6299in" text:min-label-width="0.1575in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="6" text:style-name="Bullet_20_Symbols" text:bullet-char="•">
    <style:list-level-properties text:space-before="0.7878in" text:min-label-width="0.1575in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="7" text:style-name="Bullet_20_Symbols" text:bullet-char="•">
    <style:list-level-properties text:space-before="0.9445in" text:min-label-width="0.1575in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="8" text:style-name="Bullet_20_Symbols" text:bullet-char="•">
    <style:list-level-properties text:space-before="1.1024in" text:min-label-width="0.1575in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="9" text:style-name="Bullet_20_Symbols" text:bullet-char="•">
    <style:list-level-properties text:space-before="1.2598in" text:min-label-width="0.1575in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
   <text:list-level-style-bullet text:level="10" text:style-name="Bullet_20_Symbols" text:bullet-char="•">
    <style:list-level-properties text:space-before="1.4177in" text:min-label-width="0.1575in"/>
    <style:text-properties style:font-name="StarSymbol"/>
   </text:list-level-style-bullet>
  </text:list-style>
  <text:list-style style:name="NumList1" text:consecutive-numbering="true">
   <text:list-level-style-number text:level="1" style:num-suffix="." style:num-format="1">
    <style:list-level-properties text:space-before="0.2563in" text:min-label-width="0.248in"/>
   </text:list-level-style-number>
   <text:list-level-style-number text:level="2" style:num-suffix="." style:num-format="a" style:num-letter-sync="true">
    <style:list-level-properties text:space-before="0.5118in" text:min-label-width="0.25in"/>
   </text:list-level-style-number>
   <text:list-level-style-number text:level="3" style:num-suffix="." style:num-format="i">
    <style:list-level-properties text:space-before="0.7874in" text:min-label-width="0.1252in" fo:text-align="end"/>
   </text:list-level-style-number>
   <text:list-level-style-number text:level="4" style:num-suffix="." style:num-format="1">
    <style:list-level-properties text:space-before="1.0429in" text:min-label-width="0.25in"/>
   </text:list-level-style-number>
   <text:list-level-style-number text:level="5" style:num-suffix="." style:num-format="a" style:num-letter-sync="true">
    <style:list-level-properties text:space-before="1.2992in" text:min-label-width="0.25in"/>
   </text:list-level-style-number>
   <text:list-level-style-number text:level="6" style:num-suffix="." style:num-format="i">
    <style:list-level-properties text:space-before="1.5748in" text:min-label-width="0.1252in" fo:text-align="end"/>
   </text:list-level-style-number>
   <text:list-level-style-number text:level="7" style:num-suffix="." style:num-format="1">
    <style:list-level-properties text:space-before="1.8307in" text:min-label-width="0.25in"/>
   </text:list-level-style-number>
   <text:list-level-style-number text:level="8" style:num-suffix="." style:num-format="a" style:num-letter-sync="true">
    <style:list-level-properties text:space-before="2.0866in" text:min-label-width="0.25in"/>
   </text:list-level-style-number>
   <text:list-level-style-number text:level="9" style:num-suffix="." style:num-format="i">
    <style:list-level-properties text:space-before="0.0028in" text:min-label-width="0.1252in" fo:text-align="end"/>
   </text:list-level-style-number>
   <text:list-level-style-number text:level="10" style:num-suffix="." style:num-format="1">
    <style:list-level-properties text:space-before="3.0118in" text:min-label-width="0.1965in"/>
   </text:list-level-style-number>
  </text:list-style>
  <text:list-style style:name="NumList2" text:consecutive-numbering="true">
   <text:list-level-style-number text:level="1" style:num-suffix="." style:num-format="1">
    <style:list-level-properties text:min-label-width="0.248in"/>
   </text:list-level-style-number>
   <text:list-level-style-number text:level="2" style:num-suffix="." style:num-format="1">
    <style:list-level-properties text:space-before="0.1972in" text:min-label-width="0.1965in"/>
   </text:list-level-style-number>
   <text:list-level-style-number text:level="3" style:num-suffix="." style:num-format="1">
    <style:list-level-properties text:space-before="0.3937in" text:min-label-width="0.1965in"/>
   </text:list-level-style-number>
   <text:list-level-style-number text:level="4" style:num-suffix="." style:num-format="1">
    <style:list-level-properties text:space-before="0.5909in" text:min-label-width="0.1965in"/>
   </text:list-level-style-number>
   <text:list-level-style-number text:level="5" style:num-suffix="." style:num-format="1">
    <style:list-level-properties text:space-before="0.7874in" text:min-label-width="0.1965in"/>
   </text:list-level-style-number>
   <text:list-level-style-number text:level="6" style:num-suffix="." style:num-format="1">
    <style:list-level-properties text:space-before="0.9846in" text:min-label-width="0.1965in"/>
   </text:list-level-style-number>
   <text:list-level-style-number text:level="7" style:num-suffix="." style:num-format="1">
    <style:list-level-properties text:space-before="1.1815in" text:min-label-width="0.1965in"/>
   </text:list-level-style-number>
   <text:list-level-style-number text:level="8" style:num-suffix="." style:num-format="1">
    <style:list-level-properties text:space-before="1.3787in" text:min-label-width="0.1965in"/>
   </text:list-level-style-number>
   <text:list-level-style-number text:level="9" style:num-suffix="." style:num-format="1">
    <style:list-level-properties text:space-before="1.5752in" text:min-label-width="0.1965in"/>
   </text:list-level-style-number>
   <text:list-level-style-number text:level="10" style:num-suffix="." style:num-format="1">
    <style:list-level-properties text:space-before="1.7724in" text:min-label-width="0.1965in"/>
   </text:list-level-style-number>
  </text:list-style>
  <text:list-style style:name="WW8Num10" text:consecutive-numbering="true">
   <text:list-level-style-number text:level="1" style:num-suffix="." style:num-format="1">
    <style:list-level-properties text:space-before="0.5909in" text:min-label-width="0.248in"/>
   </text:list-level-style-number>
   <text:list-level-style-number text:level="2" style:num-suffix="." style:num-format="a" style:num-letter-sync="true">
    <style:list-level-properties text:space-before="1.3409in" text:min-label-width="0.25in"/>
   </text:list-level-style-number>
   <text:list-level-style-number text:level="3" style:num-suffix="." style:num-format="i">
    <style:list-level-properties text:space-before="1.9657in" text:min-label-width="0.1252in" fo:text-align="end"/>
   </text:list-level-style-number>
   <text:list-level-style-number text:level="4" style:num-suffix="." style:num-format="1">
    <style:list-level-properties text:space-before="2.3409in" text:min-label-width="0.25in"/>
   </text:list-level-style-number>
   <text:list-level-style-number text:level="5" style:num-suffix="." style:num-format="a" style:num-letter-sync="true">
    <style:list-level-properties text:space-before="2.8409in" text:min-label-width="0.25in"/>
   </text:list-level-style-number>
   <text:list-level-style-number text:level="6" style:num-suffix="." style:num-format="i">
    <style:list-level-properties text:space-before="3.4657in" text:min-label-width="0.1252in" fo:text-align="end"/>
   </text:list-level-style-number>
   <text:list-level-style-number text:level="7" style:num-suffix="." style:num-format="1">
    <style:list-level-properties text:space-before="3.8409in" text:min-label-width="0.25in"/>
   </text:list-level-style-number>
   <text:list-level-style-number text:level="8" style:num-suffix="." style:num-format="a" style:num-letter-sync="true">
    <style:list-level-properties text:space-before="4.3409in" text:min-label-width="0.25in"/>
   </text:list-level-style-number>
   <text:list-level-style-number text:level="9" style:num-suffix="." style:num-format="i">
    <style:list-level-properties text:space-before="4.9657in" text:min-label-width="0.1252in" fo:text-align="end"/>
   </text:list-level-style-number>
   <text:list-level-style-number text:level="10" style:num-suffix="." style:num-format="1">
    <style:list-level-properties text:space-before="1.7724in" text:min-label-width="0.1965in"/>
   </text:list-level-style-number>
  </text:list-style>
  <text:notes-configuration text:note-class="footnote" text:citation-style-name="Footnote_20_Symbol" style:num-format="1" text:start-value="0" text:footnotes-position="page" text:start-numbering-at="page"/>
  <text:notes-configuration text:note-class="endnote" text:citation-style-name="Endnote_20_Symbol" text:master-page-name="Endnote" style:num-format="1" text:start-value="0"/>
  <text:linenumbering-configuration text:style-name="Line_20_numbering" text:number-lines="false" text:offset="0.1965in" style:num-format="1" text:number-position="left" text:increment="5"/>
 </office:styles>
 <office:automatic-styles>
  <style:style style:name="Tableau1" style:family="table">
   <style:table-properties style:width="5.4326in" table:align="margins"/>
  </style:style>
  <style:style style:name="Tableau1.A" style:family="table-column">
   <style:table-column-properties style:column-width="2.5083in" style:rel-column-width="30255*"/>
  </style:style>
  <style:style style:name="Tableau1.B" style:family="table-column">
   <style:table-column-properties style:column-width="2.9243in" style:rel-column-width="35280*"/>
  </style:style>
  <style:style style:name="Tableau1.A1" style:family="table-cell">
   <style:table-cell-properties style:vertical-align="top" fo:padding-left="0.0486in" fo:padding-right="0.0486in" fo:padding-top="0in" fo:padding-bottom="0in" fo:border-left="0.05pt solid #000000" fo:border-right="none" fo:border-top="0.05pt solid #000000" fo:border-bottom="0.05pt solid #000000"/>
  </style:style>
  <style:style style:name="Tableau1.B1" style:family="table-cell">
   <style:table-cell-properties style:vertical-align="top" fo:padding-left="0.0486in" fo:padding-right="0.0486in" fo:padding-top="0in" fo:padding-bottom="0in" fo:border="0.05pt solid #000000"/>
  </style:style>
  <style:style style:name="Tableau1.A2" style:family="table-cell">
   <style:table-cell-properties style:vertical-align="top" fo:padding-left="0.0486in" fo:padding-right="0.0486in" fo:padding-top="0in" fo:padding-bottom="0in" fo:border-left="0.05pt solid #000000" fo:border-right="none" fo:border-top="none" fo:border-bottom="0.05pt solid #000000"/>
  </style:style>
  <style:style style:name="Tableau1.B2" style:family="table-cell">
   <style:table-cell-properties style:vertical-align="top" fo:padding-left="0.0486in" fo:padding-right="0.0486in" fo:padding-top="0in" fo:padding-bottom="0in" fo:border-left="0.05pt solid #000000" fo:border-right="0.05pt solid #000000" fo:border-top="none" fo:border-bottom="0.05pt solid #000000"/>
  </style:style>
  <style:style style:name="P1" style:family="paragraph" style:parent-style-name="Header" style:master-page-name="">
   <style:paragraph-properties fo:margin-left="0in" fo:margin-right="0in" fo:margin-top="0in" fo:margin-bottom="0.1181in" loext:contextual-spacing="false" fo:text-align="start" style:justify-single-word="false" fo:text-indent="0in" style:auto-text-indent="false" style:page-number="auto">
    <style:tab-stops>
     <style:tab-stop style:position="0.5409in" style:type="right" style:leader-style="solid" style:leader-text="_"/>
     <style:tab-stop style:position="5.3752in"/>
    </style:tab-stops>
   </style:paragraph-properties>
  </style:style>
  <style:style style:name="P2" style:family="paragraph" style:parent-style-name="Header" style:master-page-name="">
   <style:paragraph-properties fo:margin-left="0in" fo:margin-right="0in" fo:margin-top="0in" fo:margin-bottom="0.1181in" loext:contextual-spacing="false" fo:text-align="start" style:justify-single-word="false" fo:text-indent="0in" style:auto-text-indent="false" style:page-number="auto">
    <style:tab-stops>
     <style:tab-stop style:position="0.5409in" style:type="right" style:leader-style="solid" style:leader-text="_"/>
     <style:tab-stop style:position="5.3752in"/>
    </style:tab-stops>
   </style:paragraph-properties>
  </style:style>
  <style:style style:name="P3" style:family="paragraph" style:parent-style-name="TexteCourant">
   <style:text-properties fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="P4" style:family="paragraph" style:parent-style-name="TexteCourant">
   <style:text-properties style:text-underline-style="solid" style:text-underline-width="auto" style:text-underline-color="font-color"/>
  </style:style>
  <style:style style:name="P5" style:family="paragraph" style:parent-style-name="TableauTitre">
   <style:paragraph-properties>
    <style:tab-stops>
     <style:tab-stop style:position="0.3937in"/>
     <style:tab-stop style:position="0.5909in"/>
     <style:tab-stop style:position="0.7874in"/>
     <style:tab-stop style:position="0.9846in"/>
     <style:tab-stop style:position="1.1811in"/>
     <style:tab-stop style:position="1.3783in"/>
     <style:tab-stop style:position="1.5752in"/>
     <style:tab-stop style:position="1.772in"/>
     <style:tab-stop style:position="1.9689in"/>
     <style:tab-stop style:position="2.1661in"/>
     <style:tab-stop style:position="2.3626in"/>
     <style:tab-stop style:position="2.5598in"/>
     <style:tab-stop style:position="2.7563in"/>
     <style:tab-stop style:position="2.9535in"/>
     <style:tab-stop style:position="3.15in"/>
     <style:tab-stop style:position="3.3472in"/>
     <style:tab-stop style:position="3.5437in"/>
     <style:tab-stop style:position="3.7409in"/>
     <style:tab-stop style:position="3.9374in"/>
     <style:tab-stop style:position="4.1346in"/>
    </style:tab-stops>
   </style:paragraph-properties>
   <style:text-properties fo:language="fr" fo:country="CA"/>
  </style:style>
  <style:style style:name="P6" style:family="paragraph" style:parent-style-name="TableauTitreColonne">
   <style:paragraph-properties>
    <style:tab-stops>
     <style:tab-stop style:position="0.3937in"/>
     <style:tab-stop style:position="0.5909in"/>
     <style:tab-stop style:position="0.7874in"/>
     <style:tab-stop style:position="0.9846in"/>
     <style:tab-stop style:position="1.1811in"/>
     <style:tab-stop style:position="1.3783in"/>
     <style:tab-stop style:position="1.5752in"/>
     <style:tab-stop style:position="1.772in"/>
     <style:tab-stop style:position="1.9689in"/>
     <style:tab-stop style:position="2.1661in"/>
     <style:tab-stop style:position="2.3626in"/>
     <style:tab-stop style:position="2.5598in"/>
     <style:tab-stop style:position="2.7563in"/>
     <style:tab-stop style:position="2.9535in"/>
     <style:tab-stop style:position="3.15in"/>
     <style:tab-stop style:position="3.3472in"/>
     <style:tab-stop style:position="3.5437in"/>
     <style:tab-stop style:position="3.7409in"/>
     <style:tab-stop style:position="3.9374in"/>
     <style:tab-stop style:position="4.1346in"/>
    </style:tab-stops>
   </style:paragraph-properties>
   <style:text-properties fo:language="zxx" fo:country="none" style:language-asian="zxx" style:country-asian="none"/>
  </style:style>
  <style:style style:name="P7" style:family="paragraph" style:parent-style-name="TableauCorps">
   <style:paragraph-properties>
    <style:tab-stops/>
   </style:paragraph-properties>
   <style:text-properties fo:language="zxx" fo:country="none" style:language-asian="zxx" style:country-asian="none"/>
  </style:style>
  <style:style style:name="P8" style:family="paragraph" style:parent-style-name="Code">
   <style:paragraph-properties fo:margin-left="0.039in" fo:margin-right="1.0319in" fo:text-indent="0in" style:auto-text-indent="false"/>
  </style:style>
  <style:style style:name="P9" style:family="paragraph" style:parent-style-name="Contents_20_3">
   <style:paragraph-properties>
    <style:tab-stops>
     <style:tab-stop style:position="5.2827in" style:type="right" style:leader-style="dotted" style:leader-text="."/>
    </style:tab-stops>
   </style:paragraph-properties>
  </style:style>
  <style:style style:name="P10" style:family="paragraph" style:parent-style-name="Contents_20_2">
   <style:paragraph-properties>
    <style:tab-stops>
     <style:tab-stop style:position="5.4327in" style:type="right" style:leader-style="dotted" style:leader-text="."/>
    </style:tab-stops>
   </style:paragraph-properties>
  </style:style>
  <style:style style:name="P11" style:family="paragraph" style:parent-style-name="Contents_20_1">
   <style:paragraph-properties>
    <style:tab-stops>
     <style:tab-stop style:position="5.4327in" style:type="right" style:leader-style="dotted" style:leader-text="."/>
    </style:tab-stops>
   </style:paragraph-properties>
  </style:style>
  <style:style style:name="P12" style:family="paragraph" style:parent-style-name="Contents_20_Heading" style:master-page-name="PageEyrolles15-20">
   <style:paragraph-properties style:page-number="auto"/>
  </style:style>
  <style:style style:name="P13" style:family="paragraph" style:parent-style-name="RemarqueTitre">
   <style:paragraph-properties fo:padding-left="0.0555in" fo:padding-right="0.0555in" fo:padding-top="0.0138in" fo:padding-bottom="0.0138in" fo:border="0.06pt solid #000000">
    <style:tab-stops>
     <style:tab-stop style:position="0.3937in"/>
     <style:tab-stop style:position="0.5909in"/>
     <style:tab-stop style:position="0.7874in"/>
     <style:tab-stop style:position="0.9846in"/>
     <style:tab-stop style:position="1.1811in"/>
     <style:tab-stop style:position="1.3783in"/>
     <style:tab-stop style:position="1.5752in"/>
     <style:tab-stop style:position="1.772in"/>
     <style:tab-stop style:position="1.9689in"/>
     <style:tab-stop style:position="2.1661in"/>
     <style:tab-stop style:position="2.3626in"/>
     <style:tab-stop style:position="2.5598in"/>
     <style:tab-stop style:position="2.7563in"/>
     <style:tab-stop style:position="2.9535in"/>
     <style:tab-stop style:position="3.15in"/>
     <style:tab-stop style:position="3.3472in"/>
     <style:tab-stop style:position="3.5437in"/>
     <style:tab-stop style:position="3.7409in"/>
     <style:tab-stop style:position="3.9374in"/>
     <style:tab-stop style:position="4.1346in"/>
    </style:tab-stops>
   </style:paragraph-properties>
  </style:style>
  <style:style style:name="T1" style:family="text"/>
  <style:style style:name="T2" style:family="text">
   <style:text-properties fo:font-weight="normal" style:font-weight-asian="normal" style:font-weight-complex="normal"/>
  </style:style>
  <style:style style:name="T3" style:family="text">
   <style:text-properties fo:font-style="italic"/>
  </style:style>
  <style:style style:name="T4" style:family="text">
   <style:text-properties fo:font-style="italic" style:font-style-asian="italic" style:font-style-complex="italic"/>
  </style:style>
  <style:style style:name="T5" style:family="text">
   <style:text-properties style:font-name="Times New Roman" fo:font-size="10pt"/>
  </style:style>
  <style:style style:name="T6" style:family="text">
   <style:text-properties style:font-name="Arial2" fo:font-size="8pt"/>
  </style:style>
  <style:style style:name="T7" style:family="text">
   <style:text-properties fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="Sect1" style:family="section">
   <style:section-properties style:editable="false">
    <style:columns fo:column-count="1" fo:column-gap="0in"/>
   </style:section-properties>
  </style:style>
  <style:page-layout style:name="pm1" style:page-usage="mirrored">
   <style:page-layout-properties fo:page-width="8.2681in" fo:page-height="11.6929in" style:num-format="1" style:print-orientation="portrait" fo:margin-top="1.4764in" fo:margin-bottom="1.8508in" fo:margin-left="0.6299in" fo:margin-right="0.6299in" style:writing-mode="lr-tb" style:layout-grid-color="#c0c0c0" style:layout-grid-lines="33" style:layout-grid-base-height="0.1945in" style:layout-grid-ruby-height="0.0555in" style:layout-grid-mode="none" style:layout-grid-ruby-below="false" style:layout-grid-print="false" style:layout-grid-display="false" style:footnote-max-height="0in">
    <style:footnote-sep style:width="0.0071in" style:distance-before-sep="0.0398in" style:distance-after-sep="0.0398in" style:line-style="none" style:adjustment="left" style:rel-width="25%" style:color="#000000"/>
   </style:page-layout-properties>
   <style:header-style>
    <style:header-footer-properties fo:min-height="0.1181in" fo:margin-left="0in" fo:margin-right="0in" fo:margin-bottom="0.0783in" style:dynamic-spacing="false"/>
   </style:header-style>
   <style:footer-style/>
  </style:page-layout>
  <style:page-layout style:name="pm2">
   <style:page-layout-properties fo:page-width="8.2681in" fo:page-height="11.6925in" style:num-format="1" style:print-orientation="portrait" fo:margin-top="0.3937in" fo:margin-bottom="0.3937in" fo:margin-left="0.6299in" fo:margin-right="0.6299in" style:writing-mode="lr-tb" style:layout-grid-color="#c0c0c0" style:layout-grid-lines="20" style:layout-grid-base-height="0.278in" style:layout-grid-ruby-height="0.139in" style:layout-grid-mode="none" style:layout-grid-ruby-below="false" style:layout-grid-print="false" style:layout-grid-display="false" style:footnote-max-height="0in">
    <style:footnote-sep style:width="0.0071in" style:distance-before-sep="0.0398in" style:distance-after-sep="0.0398in" style:line-style="none" style:adjustment="left" style:rel-width="25%" style:color="#000000"/>
   </style:page-layout-properties>
   <style:header-style/>
   <style:footer-style/>
  </style:page-layout>
  <style:page-layout style:name="pm3">
   <style:page-layout-properties fo:page-width="8.2681in" fo:page-height="11.6925in" style:num-format="1" style:print-orientation="portrait" fo:margin-top="0.7874in" fo:margin-bottom="0.7874in" fo:margin-left="0.7874in" fo:margin-right="0.7874in" style:writing-mode="lr-tb" style:layout-grid-color="#c0c0c0" style:layout-grid-lines="20" style:layout-grid-base-height="0.278in" style:layout-grid-ruby-height="0.139in" style:layout-grid-mode="none" style:layout-grid-ruby-below="false" style:layout-grid-print="false" style:layout-grid-display="false" style:footnote-max-height="0in">
    <style:footnote-sep style:line-style="none" style:adjustment="left" style:rel-width="25%" style:color="#000000"/>
   </style:page-layout-properties>
   <style:header-style/>
   <style:footer-style/>
  </style:page-layout>
  <style:page-layout style:name="pm4">
   <style:page-layout-properties fo:page-width="8.2673in" fo:page-height="11.6925in" style:num-format="1" style:print-orientation="portrait" fo:margin-top="0.7874in" fo:margin-bottom="0.7874in" fo:margin-left="1.4173in" fo:margin-right="1.4173in" style:shadow="none" fo:background-color="transparent" style:writing-mode="lr-tb" style:layout-grid-color="#c0c0c0" style:layout-grid-lines="20" style:layout-grid-base-height="0.278in" style:layout-grid-ruby-height="0.139in" style:layout-grid-mode="none" style:layout-grid-ruby-below="false" style:layout-grid-print="false" style:layout-grid-display="false" draw:fill="none" draw:fill-color="#99ccff" style:footnote-max-height="0in">
    <style:columns fo:column-count="1" fo:column-gap="0in"/>
    <style:footnote-sep style:width="0.0071in" style:distance-before-sep="0.0398in" style:distance-after-sep="0.0398in" style:line-style="none" style:adjustment="left" style:rel-width="25%" style:color="#000000"/>
   </style:page-layout-properties>
   <style:header-style>
    <style:header-footer-properties fo:min-height="0.3929in" fo:margin-left="0in" fo:margin-right="0in" fo:margin-bottom="0.1965in" style:dynamic-spacing="false"/>
   </style:header-style>
   <style:footer-style>
    <style:header-footer-properties fo:min-height="0.3929in" fo:margin-left="0in" fo:margin-right="0in" fo:margin-top="0.1965in" style:dynamic-spacing="false"/>
   </style:footer-style>
  </style:page-layout>
 </office:automatic-styles>
 <office:master-styles>
  <style:master-page style:name="Standard" style:page-layout-name="pm1">
   <style:header>
    <text:p text:style-name="P1">Auteurs/Titre – Chapitre X<text:tab/>page <text:page-number text:select-page="current">0</text:page-number><text:s/>de <text:span text:style-name="Page_20_Number"><text:page-count style:num-format="1">7</text:page-count></text:span><text:span text:style-name="Page_20_Number"><text:s/></text:span></text:p>
   </style:header>
  </style:master-page>
  <style:master-page style:name="HTML" style:page-layout-name="pm2"/>
  <style:master-page style:name="Endnote" style:page-layout-name="pm3"/>
  <style:master-page style:name="PageEyrolles15-20" style:page-layout-name="pm4">
   <style:header>
    <text:p text:style-name="Header_20_right"><text:chapter text:display="number" text:outline-level="1"/><text:chapter text:display="name" text:outline-level="1">Mode d’emploi du modèle .ott (Collection blanche, collection noire, Architecte logiciel)</text:chapter></text:p>
   </style:header>
   <style:header-left>
    <text:p text:style-name="Header_20_left"><text:title>Eyrolles Accès Libre, Sans Taboo, Cahiers du programmeur/Admin</text:title></text:p>
   </style:header-left>
   <style:footer>
    <text:p text:style-name="Footer_20_right"><text:page-number text:select-page="current">7</text:page-number></text:p>
   </style:footer>
   <style:footer-left>
    <text:p text:style-name="Footer_20_left"><text:page-number text:select-page="current">6</text:page-number></text:p>
   </style:footer-left>
  </style:master-page>
 </office:master-styles>`;

const attributes = [
  'xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0"',
  'xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0"',
  'xmlns:table="urn:oasis:names:tc:opendocument:xmlns:table:1.0"',
  'xmlns:draw="urn:oasis:names:tc:opendocument:xmlns:drawing:1.0"',
  'xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0"',
  'xmlns:xlink="http://www.w3.org/1999/xlink"',
  'xmlns:dc="http://purl.org/dc/elements/1.1/"',
  'xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0"',
  'xmlns:number="urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0"',
  'xmlns:svg="urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0"',
  'xmlns:chart="urn:oasis:names:tc:opendocument:xmlns:chart:1.0"',
  'xmlns:dr3d="urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0"',
  'xmlns:math="http://www.w3.org/1998/Math/MathML"',
  'xmlns:form="urn:oasis:names:tc:opendocument:xmlns:form:1.0"',
  'xmlns:script="urn:oasis:names:tc:opendocument:xmlns:script:1.0"',
  'xmlns:config="urn:oasis:names:tc:opendocument:xmlns:config:1.0"',
  'xmlns:ooo="http://openoffice.org/2004/office"',
  'xmlns:ooow="http://openoffice.org/2004/writer"',
  'xmlns:oooc="http://openoffice.org/2004/calc"',
  'xmlns:dom="http://www.w3.org/2001/xml-events"',
  'xmlns:xforms="http://www.w3.org/2002/xforms"',
  'xmlns:xsd="http://www.w3.org/2001/XMLSchema"',
  'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"',
  'xmlns:rpt="http://openoffice.org/2005/report"',
  'xmlns:of="urn:oasis:names:tc:opendocument:xmlns:of:1.2"',
  'xmlns:xhtml="http://www.w3.org/1999/xhtml"',
  'xmlns:grddl="http://www.w3.org/2003/g/data-view#"',
  'xmlns:officeooo="http://openoffice.org/2009/office"',
  'xmlns:tableooo="http://openoffice.org/2009/table"',
  'xmlns:drawooo="http://openoffice.org/2010/draw"',
  'xmlns:calcext="urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0"',
  'xmlns:loext="urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0"',
  'xmlns:field="urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0"',
  'xmlns:formx="urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0"',
  'xmlns:css3t="http://www.w3.org/TR/css3-text/"',
  'office:version="1.2"',
  'office:mimetype="application/vnd.oasis.opendocument.text"',
];

module.exports = {styles, attributes, fonts, scripts: '', settings};
