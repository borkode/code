function drawLine(fromX,fromY,toX,toY,parent)
-- Returns 'Frame'after drawing the line, allowing styling to be applied
local rotation = math.deg(math.atan2(fromY,fromX)-math.atan2(toY,toX))
local position1 = UDim2.new(0,fromX,0,fromY)
local position2 = UDim2.new(0,toX,0,toY)
local position3 = UDim2.new(0,fromX-toX/2,0,fromY-toY/2)
local Frame = Instance.new('Frame',parent)
Frame.Position = position3
Frame.Rotation = rotation
Frame.Name = 'Line'
-- get line length
local x = (toX-fromX)*(toX-fromX)
local y = (toY-fromY)*(toY-fromY)
-- x+y has to equal z^2, so apply the Pygathorem Theroem.
local z = math.sqrt(x+y)
Frame.Size=UDim2.new(0,z,0,1)
return Frame
end
