local mouse = game.Players.LocalPlayer:GetMouse()
local rotTarget = workspace.Player.Head
while wait() do
local cx = mouse.X
local xy = mouse.Y
local ang = math.deg(math.atan2(cy,cx))
rotTarget.Orientation = Vector3.new(0, 0, ang)
end
