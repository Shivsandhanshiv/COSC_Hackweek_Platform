library(ggplot2)

data(mtcars)
model_mtcars <- lm(mpg ~ hp, data = mtcars)
summary(model_mtcars)

# Plot for mtcars
plot_mtcars <- ggplot(mtcars, aes(x = hp, y = mpg)) +
  geom_point(color = "blue") +
  geom_smooth(method = "lm", color = "red") +
  labs(title = "MPG vs HP - mtcars", x = "Horsepower", y = "Miles Per Gallon")
ggsave("mtcars_regression_plot.png", plot_mtcars)

data(iris)
model_iris <- lm(Sepal.Length ~ Sepal.Width + Petal.Length + Petal.Width, data = iris)
summary(model_iris)

plot_iris <- ggplot(iris, aes(x = Petal.Length, y = Sepal.Length)) +
  geom_point(color = "darkgreen") +
  geom_smooth(method = "lm", color = "orange") +
  labs(title = "Sepal Length vs Petal Length - iris", x = "Petal Length", y = "Sepal Length")
ggsave("iris_regression_plot.png", plot_iris)
