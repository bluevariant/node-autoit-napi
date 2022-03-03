const autoit = require("../index");

const untitledNotepadTile = autoit.titb
  .title({
    endsWith: "- Notepad",
    startsWith: "Untitled -",
  })
  // caseless
  .title(
    {
      contains: "tItLeD - nOtE",
    },
    true
  )
  .class("Notepad")
  .class({
    endsWith: "pad",
  })
  .build();

// [REGEXPTITLE:^(.*)- Notepad$; REGEXPTITLE:^Untitled -(.*)$; REGEXPTITLE:(?i)^(.*)tItLeD - nOtE(.*)$; CLASS:Notepad; REGEXPCLASS:^(.*)pad$]
console.log(untitledNotepadTile);
