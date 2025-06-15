-- Insert a collection
INSERT INTO collection (path, name, last_opened) 
VALUES ('/Typyst', 'Typyst', CURRENT_TIMESTAMP);

-- Insert README.md
INSERT INTO entry (path, name, parent_path, collection_path, content, is_folder) 
VALUES ('/Typyst/README.md', 'README.md', '/Typyst', '/Typyst', 'Typyst is a new local-first & privacy-focused, open-source home for your markdown notes. It''s minimal, lightweight, efficient, and aims to have _all you need and nothing you don''t_.

---

If you''d like to learn more about Typyst, why it''s being built, what its goals are, and how it differs from all the other markdown editors out there, click around the other files in this collection.

## Tech Stack

- [Tauri](https://tauri.app/) – Desktop App
- [PGlite](https://pglite.dev/) – Local Database
- [Svelte](https://kit.svelte.dev/) – Framework
- [Tailwind](https://tailwindcss.com/) – CSS
- [Shadcn/ui](https://www.shadcn-svelte.com/) – Component Library
- [Vercel](https://vercel.com/) – Hosting

## Deploy Your Own

If you''re interested in self-hosting your own web instance of Typyst, please check [GitHub](https://typyst.md/github) for instructions.

## Roadmap

Typyst is currently still in active development. Here are some of the features planned for the future:

- [ ] Typyst Sync
- [ ] Mobile support for the web app (Currently dependent on PGlite support for mobile)
- [ ] Native mobile apps for iOS & Android
- [ ] Windows & Linux support for the desktop app

and much, much more, so stay tuned!

## Contributing

We would love to have your help in making Typyst better!

Here''s how you can contribute:

- [Report a bug](https://github.com/chroxify/typyst/issues/new?labels=bug) you found while using Typyst
- [Request a feature](https://github.com/chroxify/typyst/issues/new?labels=enhancement) that you think will be useful
- [Submit a pull request](https://github.com/chroxify/typyst/pulls) if you want to contribute with new features or bug fixes

## License

Typyst is licensed under the [GNU Affero General Public License Version 3 (AGPLv3)](https://github.com/chroxify/typyst/blob/main/LICENSE).
', false);

-- Insert Supported Devices.md
INSERT INTO entry (path, name, parent_path, collection_path, content, is_folder)
VALUES ('/Typyst/Supported Devices.md', 'Supported Devices.md', '/Typyst', '/Typyst', 'Typyst offers a seamless experience across multiple platforms, with ongoing development to expand accessibility.

### Currently Supported

#### Mac
* **Full Support**: Enjoy the complete Typyst experience with the dedicated macOS application

#### Web
* **Browser Access**: Use Typyst directly in your web browser, from any device
* **Note**: Functionality is currently limited on mobile devices

### Coming Soon

We''re actively working to bring Typyst to more platforms:

#### Windows
* Dedicated application in active development

#### Linux
* Support planned for future releases

#### Mobile
* Native apps for smartphones and tablets on the horizon

Stay tuned for updates as we expand Typyst''s reach across devices and operating systems! You can support our development efforts by [sponsoring the project](https://typyst.md/sponsor).
', false);

-- Insert Why Typyst.md
INSERT INTO entry (path, name, parent_path, collection_path, content, is_folder)
VALUES ('/Typyst/Why Typyst.md', 'Why Typyst.md', '/Typyst', '/Typyst', 'We built Typyst to make markdown writing simpler and more accessible. We believe that many existing editors are too complex for simple use cases and day-to-day note writing, so we decided to fix that.

### What Makes Typyst Special

1. **Ready to Use**: Open Typyst and start writing. No setup needed.
2. **Simple Design**: Clean interface so you can focus on your writing.
3. **Write Anywhere**: Use Typyst on any computer with internet. Great for public or work computers where you can''t download software.
4. **Made for Everyone**: If other editors feel overwhelming, you''ll like Typyst.
5. **Open Source**: Self-host your own instance, giving you full control over your setup.

Typyst is all about making writing easier. We''ve left out extra features to keep things simple and help you get your ideas down without fuss.

---

**Note**: If you''re looking for a markdown editor with plugin systems, complex setups, or feature-packed interfaces, Typyst might not be for you. But if you want something straightforward that just works, give Typyst a try!
', false);

-- Insert 10 entries with daily task todos in markdown format
DO $$
DECLARE
    i INT;
    task_date DATE;
BEGIN
    FOR i IN 0..9 LOOP
        task_date := CURRENT_DATE - i;
        INSERT INTO entry (path, name, parent_path, collection_path, content, is_folder, size, created_at, updated_at) VALUES
        (format('%s.md', to_char(task_date, 'YYYY-MM-DD')),
         to_char(task_date, 'YYYY-MM-DD'), 
         '/Typyst/.typyst/daily', 
         '/Typyst', 
         format('This is just a simple description of what needs to be done today.'||chr(10)||'- [ ] Daily Task for %s',
            to_char(task_date, 'DDth Mon YYYY')), 
         false, 
         NULL, 
         CURRENT_TIMESTAMP, 
         CURRENT_TIMESTAMP);
    END LOOP;
END $$;