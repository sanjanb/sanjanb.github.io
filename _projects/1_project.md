---
layout: page
title: Gen AI using GAN's
description: Developing a GAN to generate realistic fashion items inspired by the Fashion MNIST dataset.
img: assets/img/project1.png
importance: 1
category: work
related_publications: false
---

## Introduction
Generative Adversarial Networks (GANs) are a class of deep learning models designed for generating synthetic data. This project focuses on developing a GAN to generate realistic fashion items inspired by the Fashion MNIST dataset, which consists of grayscale images of various clothing items such as shirts, shoes, and dresses.

## Objectives
- Develop a GAN model capable of generating realistic fashion images.
- Train the generator and discriminator using the Fashion MNIST dataset.
- Evaluate the model's performance in generating high-quality images.
- Optimize the training process using appropriate loss functions and optimizers.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gan.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

![Realistic Fashion Image Generation](images/gan.png)

## Methodology

### Dataset
- **Source**: Fashion MNIST
- **Content**: 60,000 training images and 10,000 test images.
- **Preprocessing**:
  - **Normalization**: Pixel values are normalized to the range [-1, 1] to match the Tanh activation function used in the generator's output layer.
  - **Resizing**: The images remain at their original size of 28x28 pixels.
  - **Channel Dimension**: Added a channel dimension to accommodate grayscale images, resulting in a shape of (28, 28, 1).

### Model Architecture

#### Generator Model
- **Purpose**: Transform a random noise vector into a meaningful image.
- **Input**: 100-dimensional latent vector.
- **Layers**:
  - Fully connected layer to reshape input noise.
  - Three transposed convolution layers with ReLU activation:
    - **Filters**: 64, 128, 256
  - Final convolution layer with Tanh activation to generate the output image.
  - **Batch Normalization**: Not used in this implementation.

#### Discriminator Model
- **Purpose**: Distinguish between real and fake images.
- **Layers**:
  - Fully connected layer to flatten input images.
  - Two dense layers with LeakyReLU activation and dropout:
    - **Units**: 256, 128
  - Final output layer with sigmoid activation for binary classification.
  - **Batch Normalization**: Not used in this implementation.

### Training Process
- **Generator**: Takes a random noise vector and generates an image.
- **Discriminator**: Classifies real images (from the dataset) and fake images (from the generator).
- **Loss Functions**: Binary Cross-Entropy Loss for both models.
- **Optimizer**: Adam optimizer with a learning rate of 1e-4.
  - **Reason for Adam**: Chosen for its adaptive learning rate capabilities, which are beneficial for training GANs where the loss landscape can be complex and challenging.
- **Epochs**: 50
- **Batch Size**: 128
- **Gradient Clipping/Regularization**: Not applied in this implementation.
- **Data Augmentation**: No augmentation techniques were used.

### Training Implementation
- **Visualization**: Periodic visualization of generated images to track performance.
- **Checkpoints**: Saved periodically to allow for model restoration.

## Results and Discussion
- **Generator Improvement**: Significant improvement over epochs, producing visually realistic fashion items.
- **Discriminator Performance**: Effectively distinguished between real and fake images, stabilizing after initial fluctuations.
- **Loss Trends**: Convergence indicated a balanced GAN training.
- **Generated Images**: Showed clear details and patterns resembling real fashion items.

## Conclusion and Future Work
- **Achievements**: Successfully learned patterns from the dataset and produced visually appealing results.
- **Future Improvements**:
  - Train on higher-resolution datasets.
  - Use advanced GAN architectures like DCGAN or StyleGAN.
  - Fine-tune hyperparameters to enhance image diversity and realism.

---

**Project Completed by:** [Sanjan B M]
**Date:** [05-03-2025]

---

### Fashion Item Examples

| Item       | Description                                  |
|------------|----------------------------------------------|
| T-Shirt    | Casual wear with short sleeves and round neck. |
| Trouser    | Long pants, often worn for formal occasions. |
| Pullover   | Sweater that is pulled over the head.         |
| Dress      | One-piece garment for women, often elegant.   |
| Coat       | Outer garment worn in cold weather.           |
| Sandal     | Open-toed footwear, ideal for warm weather.   |
| Shirt      | Formal or casual top with a collar.           |
| Sneaker    | Athletic shoe designed for comfort and performance. |
| Bag        | Carrying accessory for personal items.        |
| Ankle Boot | Short boot that ends at the ankle.            |

---

### Training Progress Visualization

| Epoch | Generator Loss | Discriminator Loss |
|-------|----------------|--------------------|
| 1     | 0.693          | 0.693              |
| 10    | 0.600          | 0.700              |
| 20    | 0.550          | 0.720              |
| 30    | 0.500          | 0.730              |
| 40    | 0.450          | 0.740              |
| 50    | 0.400          | 0.750              |

![Realistic Fashion Image Generation](images/GAN.png)


---

### Tips for Training GANs

1. **Start Simple**: Begin with a basic architecture and gradually add complexity.

2. **Monitor Loss**: Keep an eye on both generator and discriminator losses to ensure balanced training.

3. **Visualize Outputs**: Regularly check the generated images to assess quality improvements.

4. **Experiment with Hyperparameters**: Adjust learning rates, batch sizes, and other parameters to optimize performance.

5. **Use Normalization**: Normalize inputs to stabilize training and improve convergence.

![Realistic Fashion Image Generation](images/train.png)

---

### Acknowledgments

- **Dataset**: Fashion MNIST
- **Framework**: TensorFlow/Keras
- **Inspiration**: Various online tutorials and research papers on GANs

---

### Contact Information

For any inquiries or collaborations, feel free to reach out:
- Email: [sanjanacharaya1234@gmail.com](mailto:sanjanacharaya1234@gmail.com)
- GitHub: [sanjanb](https://github.com/sanjanb)
- LinkedIn: [Sanjan BM](https://www.linkedin.com/in/sanjan-bm)

---

### Technical Challenges and Solutions

- **Mode Collapse**: Implement techniques like mini-batch discrimination or use advanced GAN architectures.
- **Training Instability**: Use techniques like gradient penalty or two-time-scale update rule (TTUR) to stabilize training.
- **Evaluation Metrics**: Use metrics like Inception Score (IS) or Fréchet Inception Distance (FID) to evaluate the quality and diversity of generated images.

---

### Additional Resources

- **Research Papers**:
  - "Generative Adversarial Nets" by Goodfellow et al.
  - "Improved Techniques for Training GANs" by Salimans et al.

- **Online Courses**:
  - Deep Learning Specialization by Andrew Ng on Coursera.
  - Fast.ai Practical Deep Learning for Coders.

- **Communities**:
  - Kaggle: Participate in GAN-related competitions.
  - Reddit: r/MachineLearning for discussions and latest trends.

---

### Implementation Details

- **Data Preparation**:
  - Loaded and normalized the Fashion MNIST dataset to the range [-1, 1].
  - Reshaped the dataset to include a channel dimension for grayscale images.

- **Model Training**:
  - Defined generator and discriminator models using the Keras Sequential API.
  - Trained using binary cross-entropy loss and the Adam optimizer.

- **Training Loop**:
  - Generated images from random noise and updated the discriminator and generator models.
  - Visualized training progress by generating and plotting images at regular intervals.
  - Saved checkpoints periodically for model restoration.

- **Performance Monitoring**:
  - Tracked loss values and the discriminator's ability to distinguish between real and fake images.
  - Evaluated the generator's performance based on the quality and diversity of the generated images.

- **Technique**:
  - This project utilizes a GAN architecture with dense neural networks to generate fashion items.

---

**Note**: This project is for educational purposes and aims to demonstrate the capabilities of GANs in generating fashion items.


    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---


