class InfiniteGallery {
  constructor(containerId, loaderId) {
    this.container = document.querySelector("." + containerId);
    this.loader = document.getElementById(loaderId);
    this.isLoading = false;
    this.page = 5;
    this.limit = 20;
    this.ecouteEvenement();
    this.fetchImages();
  }

  ecouteEvenement() {
    window.addEventListener("scroll", () => this.gererScroll());
  }

  gererScroll() {
    if (this.isLoading) {
      return;
    }
    let currentPosition = window.innerHeight + window.scrollY;
    let maxPosition = document.documentElement.scrollHeight;
    if (currentPosition > maxPosition - 200) {
      this.fetchImages();
    }
  }

  gererChargement(show) {
    this.isLoading = show;
    if (show) {
      this.loader.style.display = "block";
    } else {
      this.loader.style.display = "none";
    }
  }

  async fetchImages() {
    try {
      this.gererChargement(true);
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${this.page}&limit=${this.limit}`,
      );
      this.page++;
      const images = await response.json();
      this.afficherImage(images);
    } catch (erreur) {
      console.error(erreur);
    } finally {
      this.gererChargement(false);
    }
  }

  afficherImage(images) {
    images.forEach((image) => {
      let img = document.createElement("img");
      img.src = image.download_url;
      this.container.appendChild(img);
    });
  }
}

let infinite = new InfiniteGallery("images", "loader");
