import config from "@/config/config.json";
import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";

const Contact = async () => {
  const data: RegularPage = getListPage("kontakt/_index.md");
  const { frontmatter } = data;
  const { title, description, meta_title, image } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title} />
      <p className="text-center mt-4 mb-4">{description}</p>
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="mx-auto md:col-10 lg:col-6">
            <form method="POST" action="https://formspree.io/f/mvoeylkg" name="contact">
              <div className="mb-6">
                <label htmlFor="name" className="form-label">
                  Vor- und Nachname <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Max Mustermann"
                  type="text"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="zip" className="form-label">
                  Postleitzahl <span className="text-red-500">*</span>
                </label>
                <input
                  id="zip"
                  name="zip"
                  className="form-input"
                  placeholder="22085"
                  type="text"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="form-label">
                  E-Mail <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="max.mustermann@gmail.com"
                  type="email"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="form-label">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input"
                  placeholder="Ihre Nachricht..."
                  rows={4}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Anfrage senden
              </button>
            </form>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;