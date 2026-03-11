[UniMelb](https://unimelb.pages.dev)

---

# Limits

## Finite Approach

$$
\begin{gathered}
\lim_{x \to 2} \frac{x^3+2x^2-1}{5-3x} \\
\frac{(2)^3+2(2)^2-1}{5-3(2)} \\
\frac{15}{-1} \\
-15
\end{gathered}
$$

## Infinite Approach

$$
\begin{align}
\lim_{x \to -\infty} e^x &= 0 \\
\lim_{x \to \infty} r^x &= 0 \iff r \in (0, 1)
\end{align}
$$

$$
\begin{align}
n &\in \mathbb{Z} \\
\sin \left( 2 \pi n + \frac{\pi}{2} \right) &= 1 \\
\sin \left( 2 \pi n - \frac{\pi}{2} \right) &= -1 \\
\sin \left( \pi n \right) &= 0
\end{align}
$$

$$
\begin{gathered}
\lim_{x \to \infty} \frac{3x^2-2x+3}{x^2+4x+4} \\
\lim_{x \to \infty} \frac{3x^0-2x^{-1}+3x^{-2}}{x^0+4x^{-1}+4x^{-2}} \\
\frac{3}{1} \\
3
\end{gathered}
$$

## Rationalising Denominator

$$
\begin{gather}
\lim_{x \to \infty} \sqrt{x^2+1} - x \\
\lim_{x \to \infty} \left( \sqrt{x^2+1} - x \right) \left( \frac{\sqrt{x^2+1} + x}{\sqrt{x^2+1} + x} \right) \\
\lim_{x \to \infty} \frac{1}{\sqrt{x^2+1} + x} \\
0
\end{gather}
$$

## Bounded Limits

$$
\begin{gathered}
\lim_{x \to 0} x \sin x^{-1} \\
-1 \le \sin x^{-1} \le 1 \\
-|x| \le x \sin x^{-1} \le |x| \\
0 \le x \sin x^{-1} \le 0
\end{gathered}
$$

## Continuity

$$
\lim_{x \to a} f(x) = f(a)
$$

$$
\begin{gathered}
\lim_{x \to 2} \frac{x^2 - 4}{x - 2} \\
\lim_{x \to 2} \frac{(x - 2)(x + 2)}{x - 2} \\
\lim_{x \to 2} x + 2 \\
4
\end{gathered}
$$

Recall that $\lim_{x \to 0} x^2 \sin x^{-1} = 0$.

$$
\begin{gathered}
g(x) =
\begin{cases}
x^2 \sin x^{-1} & x \neq 0 \\
0 & x = 0
\end{cases}
\end{gathered}
$$

The function is continuous for all $\mathbb{R}$.

Continuity can be inherited through composition if the outer function is continuous for the range of the inner function.

$$
\begin{gathered}
\lim_{x \to \infty} \sin(e^{-x}) \\
\sin \left( \lim_{x \to \infty} e^{-x} \right) \\
\sin 0 \\
0
\end{gathered}
$$

# Differentiation

$$
\begin{gathered}
\lim_{\Delta{x} \to 0} \frac{f(x + \Delta{x}) - f(x)}{\Delta{x}} \\
\frac{\Delta{f(x)}}{\Delta{x}} \\
\frac{df}{dx}
\end{gathered}
$$

The function $f(x) = |x|$ is not differentiable at $x=0$ as there are different tangent lines from left and right.

## Differentiability

Continuity does not imply differentiability but differentiability implies continuity. Differentiable functions are a subset of continuous functions.

## L'Hopital

If:

$$
\lim_{ x \to a } \frac{f(x)}{g(x)} 
$$

approaches $\frac{0}{0}$ or $\frac{\infty}{\infty}$, and:

$$
\lim_{ x \to a } g'(x) \neq 0
$$

then:

$$
\lim_{ x \to a } \frac{f(x)}{g(x)} =\lim_{ x \to a } \frac{f'(x)}{g'(x)}
$$

There exists a limit for $\frac{sin x}{x}$ even though the denominator approaches $0$.

$$
\begin{gathered}
\lim_{ x \to 0 } \frac{\sin x}{x} \\
\lim_{ x \to 0 } \frac{\cos x}{1}
\end{gathered}
$$

A similar approach can be applied to logarithms.

$$
\begin{gathered}
\lim_{ x \to \infty } \left( x^{-\frac{1}{3}} \log x \right) \\
\lim_{ x \to \infty } -\frac{1}{3} \left( x^{-\frac{4}{3}} \right) (x^{-1})
\end{gathered}
$$