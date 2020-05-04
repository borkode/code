-- LOCAL
local mouse = game.Players.LocalPlayer:GetMouse()
while wait() do
local viewwx = game.LocalCamera.X
local viewwy = game.LocalCamera.Y
local mousex = mouse.X
local mousey = mouse.Y
local movetox = mousex/viewwx-0.5
local movetoy = mousey/viewwy-0.5
-- move the camera to that position, using the code in the already existing script
end
