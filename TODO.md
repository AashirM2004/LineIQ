# LineIQ TODOs

This document tracks known limitations, planned improvements, and future features for LineIQ.

- [ ] Defenceman Position Classification

Currently, LD/RD positions are determined using the NHL API's shootsCatches field, which identifies shooting handedness rather than a player's preferred defensive side.

This can incorrectly classify defencemen who play on their off-side, such as TJ Brodie, a left-handed shooter who primarily plays right defence.

TODO: Implement a more accurate method of identifying a defenceman's preferred position.
