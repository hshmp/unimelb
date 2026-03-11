# Derivative

## Product

$$
\begin{gathered}
\frac{d}{dx} \frac{\tan x}{x} \\
\frac{\sec^2 x}{x} - \frac{\tan x}{x^2}
\end{gathered}
$$

$$
\begin{gathered}
\frac{d}{dx} x \sin \left( \frac{1}{x} \right) \\
\sin \left( \frac{1}{x} \right) - x\frac{ \cos \left( \frac{1}{x} \right) }{x^2} \\
\sin\left( \frac{1}{x} \right)-\frac{\cos\left( \frac{1}{x} \right)}{x}
\end{gathered}
$$

## Implicit

$$
\begin{align}
\frac{dy}{dx}(x^2y^3+\sin y &= 4) \\
2xy^3 + 3x^2 y ^2 \frac{dy}{dx} + \frac{dy}{dx}\cos y &= 0 \\
\frac{dy}{dx}(3x^2y^2 + \cos y) &= -2xy^3 \\
\frac{dy}{dx} = -\frac{2xy^3}{3x^2y^2 + \cos y}
\end{align}
$$

# Integral

## U Sub

$$
\begin{gathered}
\int (x^2 + 2x) \cos( x^3 + 3x^2 - 47 ) \ dx \\
u = x^3 + 3x^2 - 47 \\
\frac{du}{dx} = 3x^2 + 6x \\
\frac{1}{3} \int \frac{du}{dx} \cos u \ dx \\
\frac{1}{3} \int \cos u \ du \\
\frac{1}{3} \sin u + C \\
\frac{1}{3} \sin (x^3 + 3x^2 - 47) + C
\end{gathered}
$$
